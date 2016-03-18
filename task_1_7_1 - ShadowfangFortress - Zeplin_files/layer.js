(function () {
    "use strict";

    var layerTypes = ["text", "shape"],
        textAlignments = ["start", "left", "right", "end", "center", "justify"];

    window.Zeplin.Layer = function (layerData) {
        var layer = JSON.parse(JSON.stringify(layerData));

        layer.blur = new Zeplin.Blur(layer.blur);
        layer.color = new Zeplin.Color(layer.color);

        layer.borders = layer.borders.map(function (b) {
            return new Zeplin.Border(b);
        });

        layer.fills = layer.fills.map(function (f) {
            return new Zeplin.Fill(f, layer.rect.width, layer.rect.height);
        });

        layer.shadows = layer.shadows.map(function (s) {
            return new Zeplin.Shadow(s);
        });

        Object.defineProperties(this, {
            type: {
                get: function () {
                    return layer.type;
                },
                set: function (type) {
                    if (layerTypes.indexOf(type) === -1) {
                        throw new TypeError("Unknown layer type: '" + type + "'. Possible values: " + JSON.stringify(layerTypes));
                    }

                    layer.type = type;
                }
            },
            name: {
                get: function () {
                    return layer.name;
                },
                set: function (name) {
                    layer.name = name;
                }
            },
            exportable: {
                value: layer.exportable
            },
            rotation: {
                get: function () {
                    return layer.rotation;
                },
                set: function (rotation) {
                    layer.rotation = rotation;
                }
            },
            opacity: {
                get: function () {
                    return layer.opacity;
                },
                set: function (opacity) {
                    if (opacity < 0 || opacity > 1) {
                        throw new RangeError("Invalid opacity value: '" + opacity + "'. Valid range: [0, 1]");
                    }

                    layer.opacity = opacity;
                }
            },
            blendMode: {
                get: function () {
                    return layer.blendMode;
                },
                set: function (blendMode) {
                    if (Zeplin.CSSUtil.BLEND_MODES.indexOf(blendMode) === -1) {
                        throw new TypeError("Unknown blend mode: '" + blendMode + "'. Possible values: " + JSON.stringify(Zeplin.CSSUtil.BLEND_MODES));
                    }

                    layer.blendMode = blendMode;
                }
            },
            borderRadius: {
                get: function () {
                    return layer.borderRadius;
                },
                set: function (borderRadius) {
                    if (borderRadius < 0) {
                        throw new RangeError("Invalid radius value: '" + borderRadius + "'. Valid range: [0, ∞)");;
                    }

                    layer.borderRadius = borderRadius;
                }
            },
            blur: {
                get: function () {
                    return layer.blur;
                },
                set: function (blur) {
                    layer.blur = new Zeplin.Blur(layer.blur);
                }
            },
            rect: {
                get: function () {
                    return layer.rect;
                },
                set: function (rect) {
                    layer.rect = rect;
                }
            },
            content: {
                get: function () {
                    if (layer.type === "text") {
                        return layer.content;
                    }

                    return "";
                },
                set: function (content) {
                    if (layer.type === "text") {
                        layer.content = content;
                    }
                }
            },
            color: {
                get: function () {
                    return layer.color;
                },
                set: function (color) {
                    layer.color = new Zeplin.Color(color);
                }
            },
            fontSize: {
                get: function () {
                    return layer.fontSize;
                },
                set: function (fontSize) {
                    layer.fontSize = fontSize;
                }
            },
            fontFace: {
                get: function () {
                    return layer.fontFace;
                },
                set: function (fontFace) {
                    layer.fontFace = fontFace;
                }
            },
            textAlign: {
                get: function () {
                    return layer.textAlign;
                },
                set: function (textAlign) {
                    if (textAlignments.indexOf(textAlign) === -1) {
                        throw new TypeError("Unknown alignment: '" + textAlign + "'. Possible values: " + JSON.stringify(textAlignments));
                    }

                    layer.textAlign = textAlign;
                }
            },
            letterSpacing: {
                get: function () {
                    return layer.letterSpacing;
                },
                set: function (letterSpacing) {
                    layer.letterSpacing = letterSpacing;
                }
            },
            lineHeight: {
                get: function () {
                    return layer.lineHeight;
                },
                set: function (lineHeight) {
                    layer.lineHeight = lineHeight;
                }
            },
            borders: {
                value: layer.borders
            },
            fills: {
                value: layer.fills
            },
            shadows: {
                value: layer.shadows
            }
        });
    };

    Zeplin.Layer.prototype.toCSS = function (densityDivisor, showDimensions, unitlessLineHeight) {
        var layerType = this.type;

        var cssProperties = {
            "selector": Zeplin.CSSUtil.escape(this.name) || "layer"
        };

        if (showDimensions) {
            cssProperties["width"] = Zeplin.CSSUtil.toCSSLength(this.rect.width, densityDivisor);
            cssProperties["height"] = Zeplin.CSSUtil.toCSSLength(this.rect.height, densityDivisor);
        }

        if (this.exportable) {
            cssProperties["object-fit"] = "contain";
        }

        if (this.rotation) {
            var rotationRule = "rotate(" + (-this.rotation) + "deg)";
            cssProperties["-webkit-transform"] = rotationRule;
            cssProperties["transform"] = rotationRule;
        }

        if (this.opacity !== 1) {
            cssProperties["opacity"] = this.opacity.toFixed(1);
        }

        if (this.blendMode !== "normal") {
            cssProperties["mix-blend-mode"] = this.blendMode;
        }

        if (this.borderRadius) {
            // TODO: different radiuses for each corner?
            cssProperties["border-radius"] = Zeplin.CSSUtil.toCSSLength(this.borderRadius, densityDivisor);
        }

        if (this.blur.radius) {
            var blurStyles = this.blur.toCSS(densityDivisor);
            for (var prop in blurStyles) {
                cssProperties[prop] = blurStyles[prop];
            }
        }

        // var hasGradient = this.fills.some(f => f.type === "gradient");
        var hasGradient = this.fills.some(function (f) {
            return f.type === "gradient";
        });

        var blendedColor;
        if (this.fills.length) {
            if (hasGradient) {
                // in CSS first background-image specified is drawn on top
                // whereas in Sketch last fill is drawn on top
                cssProperties["background-image"] = this.fills.reduceRight(function (prevFill, curFill) {
                    return prevFill.concat(curFill.type === "color" ? curFill.fill.toGradient() : curFill.fill.toCSS());
                }, []);
            } else {
                // may be more efficient if blending is not carried on when both colors has alpha value 1.0
                blendedColor = new Zeplin.Color(this.fills.reduceRight(function (prevColor, curFill) {
                    return Zeplin.Color.blend(prevColor, curFill.color);
                }, Zeplin.Color.NAMED_COLORS.transparent)).toCSS();
            }
        }

        if (layerType === "text") {
            cssProperties["font-family"] = this.fontFace; // TODO: find good alternatives
            cssProperties["font-size"] = Zeplin.CSSUtil.toCSSLength(this.fontSize, densityDivisor);

            if (this.lineHeight) {
                cssProperties["line-height"] = unitlessLineHeight
                        ? (this.lineHeight / this.fontSize).toFixed(1)
                        : Zeplin.CSSUtil.toCSSLength(this.lineHeight, densityDivisor);
            }

            if (this.letterSpacing) {
                cssProperties["letter-spacing"] = Zeplin.CSSUtil.toCSSLength(this.letterSpacing, densityDivisor);
            }

            if (this.textAlign) {
                cssProperties["text-align"] = this.textAlign;
            }

            if (this.fills.length) {
                if (hasGradient) {
                    cssProperties["-webkit-background-clip"] = "text";
                    cssProperties["-webkit-text-fill-color"] = "transparent";
                } else {
                    cssProperties["color"] = blendedColor;
                }
            } else {
                cssProperties["color"] = this.color.toCSS();
            }
        } else if (blendedColor) {
            cssProperties["background-color"] = blendedColor;
        }

        if (this.shadows.length) {
            var shadowProperty = layerType === "text" ? "text-shadow" : "box-shadow";
            cssProperties[shadowProperty] = this.shadows.map(function (s) {
                return s.toCSS(layerType, densityDivisor)[shadowProperty];
            });
        }

        if (this.borders.length) {
            var borderStyles = this.borders[this.borders.length - 1].toCSS(layerType, densityDivisor);
            if (borderStyles) {
                for (var prop in borderStyles) {
                    cssProperties[prop] = borderStyles[prop];
                }
            }
        }

        return cssProperties;
    }
})();
