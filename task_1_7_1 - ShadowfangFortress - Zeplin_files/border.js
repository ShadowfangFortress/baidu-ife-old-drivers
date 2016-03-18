(function () {
    "use strict";

    window.Zeplin.Border = function (borderData) {
        var border = JSON.parse(JSON.stringify(borderData));

        border.fill = new Zeplin.Fill({
            fillType: border.fillType,
            color: border.color,
            gradient: border.gradient
        });

        delete border.fillType;
        delete border.color;
        delete border.gradient;

        Object.defineProperties(this, {
            position: {
                get: function () {
                    return border.position;
                },
                set: function (position) {
                    border.position = position;
                }
            },
            thickness: {
                get: function () {
                    return border.thickness;
                },
                set: function (thickness) {
                    border.thickness = thickness;
                }
            },
            fill: {
                get: function () {
                    return border.fill;
                },
                set: function (fill) {
                    border.fill = fill;
                }
            }
        });
    };

    Zeplin.Border.prototype.toCSS = function (layerType, densityDivisor) {
        if (layerType && layerType === "text") {
            if (this.fill.type === "color") {
                return {
                    "-webkit-text-stroke": Zeplin.CSSUtil.toCSSLength(this.thickness, densityDivisor) + " " + this.fill.toCSS()
                };
            }

            return undefined;
        }

        switch (this.fill.type) {
            case "color":
                // return {
                //     "border-style": "solid",
                //     "border-width": Zeplin.CSSUtil.toCSSLength(this.thickness, densityDivisor),
                //     "border-color": this.color.toCSS()
                // };

                return {
                    "border": "solid " + Zeplin.CSSUtil.toCSSLength(this.thickness, densityDivisor) + " " + this.fill.toCSS()
                };

            case "gradient":
                return {
                    "border-style": "solid",
                    "border-width": Zeplin.CSSUtil.toCSSLength(this.thickness, densityDivisor),
                    "border-image-source": this.fill.toCSS(),
                    "border-image-slice": "1"
                };
        }
    }
})();
