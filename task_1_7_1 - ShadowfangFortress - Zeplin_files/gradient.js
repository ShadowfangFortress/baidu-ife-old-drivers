(function () {
    "use strict";

    var gradientTypes = ["linear", "radial", "angular"];

    window.Zeplin.Gradient = function (gradientData, w, h) {
        var gradient = JSON.parse(JSON.stringify(gradientData)),
            width = w,
            height = h;

        gradient.colorStops = gradient.colorStops.map(function (cs) {
            return new Zeplin.ColorStop(cs);
        });

        Object.defineProperties(this, {
            type: {
                get: function () {
                    return gradient.type;
                },
                set: function (type) {
                    if (gradientTypes.indexOf(type) === -1) {
                        throw new TypeError("Unknown gradient type: '" + type + "'. Possible values: " + JSON.stringify(gradientTypes));
                    }

                    gradient.type = type;
                }
            },
            width: {
                value: width
            },
            height: {
                value: height
            },
            from: {
                get: function () {
                    return gradient.from;
                },
                set: function (from) {
                    gradient.from = from;
                }
            },
            to: {
                get: function () {
                    return gradient.to;
                },
                set: function (to) {
                    gradient.to = to;
                }
            },
            colorStops: {
                value: gradient.colorStops
            }
        });
    };

    Zeplin.Gradient.prototype.gradientAngle = function () {
        var deltaX = (this.from.x - this.to.x) * this.width,
            deltaY = (this.from.y - this.to.y) * this.height,
            angle = (360 - Math.round(Math.atan2(deltaX, deltaY) * 180 / Math.PI)) % 360;

        switch (angle) {
            case 0:
                return "to top";

            case 90:
                return "to right";

            case 180:
                return "to bottom";

            case 270:
                return "to left";

            default:
                return angle + "deg";
        }
    };

    Zeplin.Gradient.prototype.toCSS = function () {
        switch (this.type) {
            case "linear":
                // TODO: calculate gradient stops with correct gradient axis
                return "linear-gradient(" + this.gradientAngle() + ", " +
                        this.colorStops.map(function (cs) {
                            return cs.toCSS();
                        }).join(", ") + ")";
                break;

            case "radial":
                // TODO: calculate gradient end point according to this.to and element rect
                // TODO: elliptic gradients are missing
                return "radial-gradient(circle at " + Zeplin.CSSUtil.toCSSPercent(this.from.x) + " " + Zeplin.CSSUtil.toCSSPercent(this.from.y) + ", " +
                        this.colorStops.map(function (cs) {
                            return cs.toCSS();
                        }).join(", ") + ")";
                break;

            case "angular":
                // TODO: far from correct, only available via polyfill: https://github.com/leaverou/conic-gradient
                return "conic-gradient(" + this.colorStops.map(function (cs) {
                            return cs.toCSS();
                        }).join(", ") + ", " + this.colorStops[0].toCSS() + ")";
                break;
        }
    };
})();
