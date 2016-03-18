(function () {
    "use strict";

    var shadowTypes = ["outer", "inner"];

    window.Zeplin.Shadow = function (shadowData) {
        var shadow = JSON.parse(JSON.stringify(shadowData));

        shadow.color = new Zeplin.Color(shadow.color);

        Object.defineProperties(this, {
            type: {
                get: function () {
                    return shadow.type;
                },
                set: function (type) {
                    if (shadowTypes.indexOf(type) === -1) {
                        throw new TypeError("Unknown shadow type: '" + type + "'. Possible values: " + JSON.stringify(shadowTypes));
                    }

                    shadow.type = type;
                }
            },
            offsetX: {
                get: function () {
                    return shadow.offsetX;
                },
                set: function (offsetX) {
                    shadow.offsetX = offsetX;
                }
            },
            offsetY: {
                get: function () {
                    return shadow.offsetY;
                },
                set: function (offsetY) {
                    shadow.offsetY = offsetY;
                }
            },
            blurRadius: {
                get: function () {
                    return shadow.blurRadius;
                },
                set: function (blurRadius) {
                    shadow.blurRadius = blurRadius;
                }
            },
            spread: {
                get: function () {
                    return shadow.spread;
                },
                set: function (spread) {
                    shadow.spread = spread;
                }
            },
            color: {
                get: function () {
                    return shadow.color;
                },
                set: function (color) {
                    shadow.color = new Zeplin.Color(color);
                }
            }
        });
    };

    Zeplin.Shadow.prototype.toCSS = function (layerType, densityDivisor) {
        if (layerType && layerType === "text") {
            return {
                "text-shadow": Zeplin.CSSUtil.toCSSLength(this.offsetX, densityDivisor) + " " +
                               Zeplin.CSSUtil.toCSSLength(this.offsetY, densityDivisor) + " " +
                               Zeplin.CSSUtil.toCSSLength(this.blurRadius, densityDivisor) + " " + this.color.toCSS()
            };
        }

        return {
            "box-shadow": (this.type === "inner" ? "inset " : "") +
                Zeplin.CSSUtil.toCSSLength(this.offsetX, densityDivisor) + " " +
                Zeplin.CSSUtil.toCSSLength(this.offsetY, densityDivisor) + " " +
                Zeplin.CSSUtil.toCSSLength(this.blurRadius, densityDivisor) + " " +
                Zeplin.CSSUtil.toCSSLength(this.spread, densityDivisor) + " " +
                this.color.toCSS()
        };
    }
})();
