(function () {
    "use strict";

    window.Zeplin.ColorStop = function (colorStopData) {
        var colorStop = JSON.parse(JSON.stringify(colorStopData));

        colorStop.color = new Zeplin.Color(colorStop.color);

        Object.defineProperties(this, {
            color: {
                get: function () {
                    return colorStop.color;
                },
                set: function (color) {
                    colorStop.color = new Zeplin.Color(color);
                }
            },
            position: {
                get: function () {
                    return colorStop.position;
                },
                set: function (position) {
                    if (position < 0 || position > 1) {
                        throw new RangeError("Invalid position value: '" + position + "'. Valid range: [0, 1]");
                    }

                    colorStop.position = position;
                }
            }
        });
    };

    Zeplin.ColorStop.prototype.toCSS = function () {
        var pos = "";
        if (this.position !== 1 && this.position) {
            pos = " " + Zeplin.CSSUtil.toCSSPercent(this.position);
        }

        return this.color.toCSS() + pos;
    }
})();
