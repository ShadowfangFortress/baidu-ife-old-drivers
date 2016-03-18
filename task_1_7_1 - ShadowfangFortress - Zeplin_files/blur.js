(function () {
    "use strict";

    var blurTypes = ["gaussian", "background"];

    window.Zeplin.Blur = function (blurData) {
        if (!blurData) {
            return;
        }

        var blur = JSON.parse(JSON.stringify(blurData));

        Object.defineProperties(this, {
            type: {
                get: function () {
                    return blur.type;
                },
                set: function (type) {
                    if (blurTypes.indexOf(type) === -1) {
                        throw new TypeError("Unknown blur type: '" + type + "'. Possible values: " + JSON.stringify(blurTypes));
                    }

                    blur.type = type;
                }
            },
            radius: {
                get: function () {
                    return blur.radius;
                },
                set: function (radius) {
                    if (radius < 0) {
                        throw new RangeError("Invalid radius value: '" + radius + "'. Valid range: [0, ∞)");;
                    }

                    blur.radius = radius;
                }
            }
        });
    };

    Zeplin.Blur.prototype.toCSS = function (densityDivisor) {
        var blurRule = "blur(" + Zeplin.CSSUtil.toCSSLength(this.radius, densityDivisor) + ")";

        if (this.type === "background") {
            return {
                "-webkit-backdrop-filter": blurRule,
                "backdrop-filter": blurRule
            };
        }

        return {
            "-webkit-filter": blurRule,
            "filter": blurRule
        }
    }
})();
