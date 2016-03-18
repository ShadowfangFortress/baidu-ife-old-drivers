(function () {
    "use strict";

    var fillTypes = ["color", "gradient"];

    window.Zeplin.Fill = function (fillData, w, h) {
        var fill = JSON.parse(JSON.stringify(fillData)),
            width = w,
            height = h;

        fill.type = fill.fillType;
        fill.color = fill.color && new Zeplin.Color(fill.color);
        fill.gradient = fill.gradient && new Zeplin.Gradient(fill.gradient, width, height);

        delete fill.fillType;

        Object.defineProperties(this, {
            type: {
                get: function () {
                    return fill.type;
                },
                set: function (type) {
                    if (fillTypes.indexOf(type) === -1) {
                        throw new TypeError("Unknown fill type: '" + type + "'. Possible values: " + JSON.stringify(fillTypes));
                    }

                    fill.type = type;
                }
            },
            color: {
                get: function () {
                    return fill.color;
                },
                set: function (color) {
                    fill.type = "color";
                    fill.gradient = undefined;
                    fill.color = new Zeplin.Color(color);
                }
            },
            gradient: {
                get: function () {
                    return fill.gradient;
                },
                set: function (gradient) {
                    fill.type = "gradient";
                    fill.color = undefined;
                    fill.gradient = new Zeplin.Gradient(gradient, width, height);
                }
            },
            blendMode: {
                get: function () {
                    return fill.blendMode;
                },
                set: function (blendMode) {
                    if (Zeplin.CSSUtil.BLEND_MODES.indexOf(blendMode) === -1) {
                        throw new TypeError("Unknown blend mode: '" + blendMode + "'. Possible values: " + JSON.stringify(Zeplin.CSSUtil.BLEND_MODES));
                    }

                    fill.blendMode = blendMode;
                }
            },
            fill: {
                get: function () {
                    return fill.type === "color" ? this.color : this.gradient;
                },
                set: function () {
                    // noop
                }
            }
        });
    };

    Zeplin.Fill.prototype.toCSS = function () {
        // return also csRule["background-blend-mode"] = this.blendMode;
        return this.fill.toCSS();
    }
})();
