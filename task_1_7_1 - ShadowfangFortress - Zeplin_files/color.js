(function () {
    "use strict";

    var CSS_NAMED_COLORS = Object.freeze({
        transparent: { name: "transparent", r: 0, g: 0, b: 0, a: 0 }
    });

    var colors = [
        {"r": 0, "g": 0, "b": 0, "name": "black"}, {
            "r": 0,
            "g": 1,
            "b": 51,
            "name": "very dark blue"
        }, {"r": 0, "g": 2, "b": 46, "name": "dark navy blue"}, {"r": 0, "g": 3, "b": 91, "name": "dark blue"}, {
            "r": 0,
            "g": 4,
            "b": 53,
            "name": "dark navy"
        }, {"r": 0, "g": 17, "b": 70, "name": "navy blue"}, {"r": 0, "g": 45, "b": 4, "name": "dark forest green"}, {
            "r": 0,
            "g": 69,
            "b": 119,
            "name": "prussian blue"
        }, {"r": 0, "g": 82, "b": 73, "name": "dark blue green"}, {"r": 0, "g": 85, "b": 90, "name": "deep teal"}, {
            "r": 0,
            "g": 95,
            "b": 106,
            "name": "petrol"
        }, {"r": 0, "g": 147, "b": 55, "name": "kelley green"}, {
            "r": 0,
            "g": 251,
            "b": 176,
            "name": "greenish turquoise"
        }, {"r": 0, "g": 255, "b": 255, "name": "cyan"}, {"r": 1, "g": 15, "b": 204, "name": "true blue"}, {
            "r": 1,
            "g": 21,
            "b": 62,
            "name": "navy"
        }, {"r": 1, "g": 56, "b": 106, "name": "marine blue"}, {"r": 1, "g": 65, "b": 130, "name": "darkish blue"}, {
            "r": 1,
            "g": 70,
            "b": 0,
            "name": "racing green"
        }, {"r": 1, "g": 77, "b": 78, "name": "dark teal"}, {"r": 1, "g": 84, "b": 130, "name": "deep sea blue"}, {
            "r": 1,
            "g": 101,
            "b": 252,
            "name": "bright blue"
        }, {"r": 1, "g": 103, "b": 149, "name": "peacock blue"}, {
            "r": 1,
            "g": 115,
            "b": 113,
            "name": "dark aquamarine"
        }, {"r": 1, "g": 115, "b": 116, "name": "deep turquoise"}, {
            "r": 1,
            "g": 122,
            "b": 121,
            "name": "bluegreen"
        }, {"r": 1, "g": 123, "b": 146, "name": "ocean"}, {"r": 1, "g": 136, "b": 159, "name": "teal blue"}, {
            "r": 1,
            "g": 149,
            "b": 41,
            "name": "irish green"
        }, {"r": 1, "g": 160, "b": 73, "name": "emerald"}, {"r": 1, "g": 180, "b": 76, "name": "shamrock"}, {
            "r": 1,
            "g": 192,
            "b": 141,
            "name": "green blue"
        }, {"r": 1, "g": 249, "b": 198, "name": "bright teal"}, {"r": 1, "g": 255, "b": 7, "name": "bright green"}, {
            "r": 2,
            "g": 0,
            "b": 53,
            "name": "midnight blue"
        }, {"r": 2, "g": 3, "b": 226, "name": "pure blue"}, {"r": 2, "g": 6, "b": 111, "name": "dark royal blue"}, {
            "r": 2,
            "g": 27,
            "b": 249,
            "name": "rich blue"
        }, {"r": 2, "g": 89, "b": 15, "name": "deep green"}, {"r": 2, "g": 143, "b": 30, "name": "emerald green"}, {
            "r": 2,
            "g": 147,
            "b": 134,
            "name": "teal"
        }, {"r": 2, "g": 171, "b": 46, "name": "kelly green"}, {
            "r": 2,
            "g": 193,
            "b": 77,
            "name": "shamrock green"
        }, {"r": 2, "g": 204, "b": 254, "name": "bright sky blue"}, {
            "r": 2,
            "g": 216,
            "b": 233,
            "name": "aqua blue"
        }, {"r": 3, "g": 1, "b": 45, "name": "midnight"}, {"r": 3, "g": 7, "b": 100, "name": "darkblue"}, {
            "r": 3,
            "g": 10,
            "b": 167,
            "name": "cobalt blue"
        }, {"r": 3, "g": 53, "b": 0, "name": "dark green"}, {"r": 3, "g": 57, "b": 248, "name": "vibrant blue"}, {
            "r": 3,
            "g": 67,
            "b": 223,
            "name": "blue"
        }, {"r": 3, "g": 113, "b": 156, "name": "ocean blue"}, {"r": 4, "g": 2, "b": 115, "name": "deep blue"}, {
            "r": 4,
            "g": 3,
            "b": 72,
            "name": "night blue"
        }, {"r": 4, "g": 46, "b": 96, "name": "marine"}, {"r": 4, "g": 74, "b": 5, "name": "bottle green"}, {
            "r": 4,
            "g": 92,
            "b": 90,
            "name": "dark turquoise"
        }, {"r": 4, "g": 116, "b": 149, "name": "sea blue"}, {"r": 4, "g": 130, "b": 67, "name": "jungle green"}, {
            "r": 4,
            "g": 133,
            "b": 209,
            "name": "cerulean"
        }, {"r": 4, "g": 216, "b": 178, "name": "aquamarine"}, {"r": 4, "g": 217, "b": 255, "name": "neon blue"}, {
            "r": 4,
            "g": 244,
            "b": 137,
            "name": "turquoise green"
        }, {"r": 5, "g": 4, "b": 170, "name": "royal blue"}, {"r": 5, "g": 71, "b": 42, "name": "evergreen"}, {
            "r": 5,
            "g": 72,
            "b": 13,
            "name": "british racing green"
        }, {"r": 5, "g": 73, "b": 7, "name": "darkgreen"}, {"r": 5, "g": 105, "b": 107, "name": "dark aqua"}, {
            "r": 5,
            "g": 110,
            "b": 238,
            "name": "cerulean blue"
        }, {"r": 5, "g": 255, "b": 166, "name": "bright sea green"}, {
            "r": 6,
            "g": 46,
            "b": 3,
            "name": "very dark green"
        }, {"r": 6, "g": 71, "b": 12, "name": "forest green"}, {
            "r": 6,
            "g": 82,
            "b": 255,
            "name": "electric blue"
        }, {"r": 6, "g": 154, "b": 243, "name": "azure"}, {"r": 6, "g": 177, "b": 196, "name": "turquoise blue"}, {
            "r": 6,
            "g": 180,
            "b": 139,
            "name": "green blue"
        }, {"r": 6, "g": 194, "b": 172, "name": "turquoise"}, {"r": 7, "g": 13, "b": 13, "name": "almost black"}, {
            "r": 8,
            "g": 4,
            "b": 249,
            "name": "primary blue"
        }, {"r": 8, "g": 120, "b": 127, "name": "deep aqua"}, {"r": 8, "g": 148, "b": 4, "name": "true green"}, {
            "r": 8,
            "g": 255,
            "b": 8,
            "name": "fluorescent green"
        }, {"r": 10, "g": 67, "b": 122, "name": "twilight blue"}, {
            "r": 10,
            "g": 72,
            "b": 30,
            "name": "pine green"
        }, {"r": 10, "g": 95, "b": 56, "name": "spruce"}, {"r": 10, "g": 136, "b": 138, "name": "dark cyan"}, {
            "r": 10,
            "g": 221,
            "b": 8,
            "name": "vibrant green"
        }, {"r": 10, "g": 255, "b": 2, "name": "fluro green"}, {"r": 11, "g": 64, "b": 8, "name": "hunter green"}, {
            "r": 11,
            "g": 85,
            "b": 9,
            "name": "forest"
        }, {"r": 11, "g": 139, "b": 135, "name": "greenish blue"}, {
            "r": 11,
            "g": 247,
            "b": 125,
            "name": "minty green"
        }, {"r": 11, "g": 249, "b": 234, "name": "bright aqua"}, {
            "r": 12,
            "g": 6,
            "b": 247,
            "name": "strong blue"
        }, {"r": 12, "g": 23, "b": 147, "name": "royal"}, {"r": 12, "g": 181, "b": 119, "name": "green teal"}, {
            "r": 12,
            "g": 220,
            "b": 115,
            "name": "tealish green"
        }, {"r": 12, "g": 255, "b": 12, "name": "neon green"}, {
            "r": 13,
            "g": 117,
            "b": 248,
            "name": "deep sky blue"
        }, {"r": 14, "g": 135, "b": 204, "name": "water blue"}, {
            "r": 15,
            "g": 155,
            "b": 142,
            "name": "blue green"
        }, {"r": 15, "g": 254, "b": 249, "name": "bright turquoise"}, {
            "r": 16,
            "g": 122,
            "b": 176,
            "name": "nice blue"
        }, {"r": 16, "g": 166, "b": 116, "name": "bluish green"}, {
            "r": 17,
            "g": 135,
            "b": 93,
            "name": "dark sea green"
        }, {"r": 18, "g": 225, "b": 147, "name": "aqua green"}, {
            "r": 19,
            "g": 126,
            "b": 109,
            "name": "blue green"
        }, {"r": 19, "g": 187, "b": 175, "name": "topaz"}, {"r": 19, "g": 234, "b": 201, "name": "aqua"}, {
            "r": 21,
            "g": 46,
            "b": 255,
            "name": "vivid blue"
        }, {"r": 21, "g": 68, "b": 6, "name": "forrest green"}, {
            "r": 21,
            "g": 80,
            "b": 132,
            "name": "light navy"
        }, {"r": 21, "g": 176, "b": 26, "name": "green"}, {"r": 24, "g": 5, "b": 219, "name": "ultramarine blue"}, {
            "r": 24,
            "g": 209,
            "b": 123,
            "name": "seaweed"
        }, {"r": 27, "g": 36, "b": 49, "name": "dark"}, {"r": 27, "g": 252, "b": 6, "name": "highlighter green"}, {
            "r": 29,
            "g": 2,
            "b": 0,
            "name": "very dark brown"
        }, {"r": 29, "g": 93, "b": 236, "name": "azul"}, {"r": 30, "g": 72, "b": 143, "name": "cobalt"}, {
            "r": 30,
            "g": 145,
            "b": 103,
            "name": "viridian"
        }, {"r": 30, "g": 248, "b": 118, "name": "spearmint"}, {"r": 31, "g": 9, "b": 84, "name": "dark indigo"}, {
            "r": 31,
            "g": 59,
            "b": 77,
            "name": "dark blue grey"
        }, {"r": 31, "g": 99, "b": 87, "name": "dark green blue"}, {"r": 31, "g": 167, "b": 116, "name": "jade"}, {
            "r": 31,
            "g": 181,
            "b": 122,
            "name": "dark seafoam"
        }, {"r": 32, "g": 0, "b": 177, "name": "ultramarine"}, {
            "r": 32,
            "g": 192,
            "b": 115,
            "name": "dark mint green"
        }, {"r": 32, "g": 249, "b": 134, "name": "wintergreen"}, {"r": 33, "g": 56, "b": 171, "name": "sapphire"}, {
            "r": 33,
            "g": 71,
            "b": 97,
            "name": "dark slate blue"
        }, {"r": 33, "g": 195, "b": 111, "name": "algae green"}, {
            "r": 33,
            "g": 252,
            "b": 13,
            "name": "electric green"
        }, {"r": 34, "g": 66, "b": 199, "name": "blue blue"}, {"r": 35, "g": 196, "b": 139, "name": "greenblue"}, {
            "r": 36,
            "g": 122,
            "b": 253,
            "name": "clear blue"
        }, {"r": 36, "g": 188, "b": 168, "name": "tealish"}, {"r": 37, "g": 163, "b": 111, "name": "teal green"}, {
            "r": 37,
            "g": 255,
            "b": 41,
            "name": "hot green"
        }, {"r": 38, "g": 83, "b": 141, "name": "dusk blue"}, {
            "r": 38,
            "g": 247,
            "b": 253,
            "name": "bright light blue"
        }, {"r": 39, "g": 106, "b": 179, "name": "mid blue"}, {
            "r": 40,
            "g": 1,
            "b": 55,
            "name": "midnight purple"
        }, {"r": 40, "g": 124, "b": 55, "name": "darkish green"}, {
            "r": 41,
            "g": 70,
            "b": 91,
            "name": "dark grey blue"
        }, {"r": 41, "g": 118, "b": 187, "name": "bluish"}, {
            "r": 42,
            "g": 1,
            "b": 52,
            "name": "very dark purple"
        }, {"r": 42, "g": 126, "b": 25, "name": "tree green"}, {
            "r": 42,
            "g": 254,
            "b": 183,
            "name": "greenish cyan"
        }, {"r": 43, "g": 93, "b": 52, "name": "pine"}, {"r": 43, "g": 175, "b": 106, "name": "jade green"}, {
            "r": 43,
            "g": 177,
            "b": 121,
            "name": "bluey green"
        }, {"r": 44, "g": 111, "b": 187, "name": "medium blue"}, {
            "r": 44,
            "g": 250,
            "b": 31,
            "name": "radioactive green"
        }, {"r": 45, "g": 254, "b": 84, "name": "bright light green"}, {
            "r": 46,
            "g": 90,
            "b": 136,
            "name": "light navy blue"
        }, {"r": 46, "g": 232, "b": 187, "name": "aqua marine"}, {
            "r": 47,
            "g": 239,
            "b": 16,
            "name": "vivid green"
        }, {"r": 49, "g": 102, "b": 138, "name": "ugly blue"}, {
            "r": 50,
            "g": 191,
            "b": 132,
            "name": "greenish teal"
        }, {"r": 51, "g": 184, "b": 100, "name": "cool green"}, {"r": 52, "g": 1, "b": 63, "name": "dark violet"}, {
            "r": 52,
            "g": 28,
            "b": 2,
            "name": "dark brown"
        }, {"r": 52, "g": 56, "b": 55, "name": "charcoal"}, {"r": 53, "g": 6, "b": 62, "name": "dark purple"}, {
            "r": 53,
            "g": 83,
            "b": 10,
            "name": "navy green"
        }, {"r": 53, "g": 173, "b": 107, "name": "seaweed green"}, {
            "r": 54,
            "g": 1,
            "b": 63,
            "name": "deep purple"
        }, {"r": 54, "g": 55, "b": 55, "name": "dark grey"}, {"r": 55, "g": 62, "b": 2, "name": "dark olive"}, {
            "r": 55,
            "g": 120,
            "b": 191,
            "name": "windows blue"
        }, {"r": 56, "g": 2, "b": 130, "name": "indigo"}, {"r": 56, "g": 8, "b": 53, "name": "eggplant"}, {
            "r": 56,
            "g": 128,
            "b": 4,
            "name": "dark grass green"
        }, {"r": 57, "g": 173, "b": 72, "name": "medium green"}, {
            "r": 58,
            "g": 24,
            "b": 177,
            "name": "indigo blue"
        }, {"r": 58, "g": 46, "b": 254, "name": "light royal blue"}, {
            "r": 58,
            "g": 229,
            "b": 127,
            "name": "weird green"
        }, {"r": 59, "g": 91, "b": 146, "name": "denim blue"}, {"r": 59, "g": 99, "b": 140, "name": "denim"}, {
            "r": 59,
            "g": 113,
            "b": 159,
            "name": "muted blue"
        }, {"r": 60, "g": 0, "b": 8, "name": "dark maroon"}, {"r": 60, "g": 65, "b": 66, "name": "charcoal grey"}, {
            "r": 60,
            "g": 77,
            "b": 3,
            "name": "dark olive green"
        }, {"r": 60, "g": 115, "b": 168, "name": "flat blue"}, {"r": 60, "g": 153, "b": 146, "name": "sea"}, {
            "r": 61,
            "g": 7,
            "b": 52,
            "name": "aubergine"
        }, {"r": 61, "g": 28, "b": 2, "name": "chocolate"}, {
            "r": 61,
            "g": 122,
            "b": 253,
            "name": "lightish blue"
        }, {"r": 61, "g": 153, "b": 115, "name": "ocean green"}, {
            "r": 62,
            "g": 130,
            "b": 252,
            "name": "dodger blue"
        }, {"r": 62, "g": 175, "b": 118, "name": "dark seafoam green"}, {
            "r": 63,
            "g": 1,
            "b": 44,
            "name": "dark plum"
        }, {"r": 63, "g": 130, "b": 157, "name": "dirty blue"}, {
            "r": 63,
            "g": 155,
            "b": 11,
            "name": "grass green"
        }, {"r": 64, "g": 163, "b": 104, "name": "greenish"}, {
            "r": 64,
            "g": 253,
            "b": 20,
            "name": "poison green"
        }, {"r": 65, "g": 2, "b": 0, "name": "deep brown"}, {"r": 65, "g": 25, "b": 0, "name": "chocolate brown"}, {
            "r": 65,
            "g": 156,
            "b": 3,
            "name": "grassy green"
        }, {"r": 65, "g": 253, "b": 254, "name": "bright cyan"}, {
            "r": 66,
            "g": 179,
            "b": 149,
            "name": "greeny blue"
        }, {"r": 67, "g": 5, "b": 65, "name": "eggplant purple"}, {
            "r": 67,
            "g": 107,
            "b": 173,
            "name": "french blue"
        }, {"r": 68, "g": 142, "b": 228, "name": "dark sky blue"}, {
            "r": 70,
            "g": 65,
            "b": 150,
            "name": "blueberry"
        }, {"r": 71, "g": 95, "b": 148, "name": "dusky blue"}, {"r": 72, "g": 192, "b": 114, "name": "dark mint"}, {
            "r": 73,
            "g": 6,
            "b": 72,
            "name": "deep violet"
        }, {"r": 73, "g": 117, "b": 156, "name": "dull blue"}, {"r": 73, "g": 132, "b": 184, "name": "cool blue"}, {
            "r": 74,
            "g": 1,
            "b": 0,
            "name": "mahogany"
        }, {"r": 75, "g": 0, "b": 110, "name": "royal purple"}, {"r": 75, "g": 1, "b": 1, "name": "dried blood"}, {
            "r": 75,
            "g": 87,
            "b": 219,
            "name": "warm blue"
        }, {"r": 75, "g": 93, "b": 22, "name": "army green"}, {
            "r": 75,
            "g": 97,
            "b": 19,
            "name": "camouflage green"
        }, {"r": 76, "g": 144, "b": 133, "name": "dusty teal"}, {"r": 77, "g": 164, "b": 9, "name": "lawn green"}, {
            "r": 78,
            "g": 5,
            "b": 80,
            "name": "plum purple"
        }, {"r": 78, "g": 81, "b": 139, "name": "twilight"}, {"r": 78, "g": 84, "b": 129, "name": "dusk"}, {
            "r": 78,
            "g": 116,
            "b": 150,
            "name": "cadet blue"
        }, {"r": 78, "g": 253, "b": 84, "name": "light neon green"}, {
            "r": 79,
            "g": 115,
            "b": 142,
            "name": "metallic blue"
        }, {"r": 79, "g": 145, "b": 83, "name": "light forest green"}, {
            "r": 80,
            "g": 123,
            "b": 156,
            "name": "stormy blue"
        }, {"r": 80, "g": 167, "b": 71, "name": "mid green"}, {"r": 81, "g": 10, "b": 201, "name": "violet blue"}, {
            "r": 81,
            "g": 101,
            "b": 114,
            "name": "slate"
        }, {"r": 81, "g": 112, "b": 215, "name": "cornflower blue"}, {
            "r": 81,
            "g": 183,
            "b": 59,
            "name": "leafy green"
        }, {"r": 82, "g": 101, "b": 37, "name": "camo green"}, {
            "r": 83,
            "g": 60,
            "b": 198,
            "name": "blue with a hint of purple"
        }, {"r": 83, "g": 98, "b": 103, "name": "gunmetal"}, {"r": 83, "g": 252, "b": 161, "name": "sea green"}, {
            "r": 83,
            "g": 254,
            "b": 92,
            "name": "light bright green"
        }, {"r": 84, "g": 78, "b": 3, "name": "green brown"}, {"r": 84, "g": 141, "b": 68, "name": "fern green"}, {
            "r": 84,
            "g": 172,
            "b": 104,
            "name": "algae"
        }, {"r": 85, "g": 57, "b": 204, "name": "blurple"}, {"r": 86, "g": 132, "b": 174, "name": "off blue"}, {
            "r": 86,
            "g": 174,
            "b": 87,
            "name": "dark pastel green"
        }, {"r": 86, "g": 252, "b": 162, "name": "light green blue"}, {
            "r": 87,
            "g": 41,
            "b": 206,
            "name": "blue purple"
        }, {"r": 88, "g": 15, "b": 65, "name": "plum"}, {"r": 88, "g": 188, "b": 8, "name": "frog green"}, {
            "r": 89,
            "g": 101,
            "b": 109,
            "name": "slate grey"
        }, {"r": 89, "g": 133, "b": 86, "name": "dark sage"}, {"r": 90, "g": 6, "b": 239, "name": "blue purple"}, {
            "r": 90,
            "g": 125,
            "b": 154,
            "name": "steel blue"
        }, {"r": 90, "g": 134, "b": 173, "name": "dusty blue"}, {
            "r": 91,
            "g": 124,
            "b": 153,
            "name": "slate blue"
        }, {"r": 92, "g": 139, "b": 21, "name": "sap green"}, {"r": 92, "g": 169, "b": 4, "name": "leaf green"}, {
            "r": 92,
            "g": 172,
            "b": 45,
            "name": "grass"
        }, {"r": 92, "g": 178, "b": 0, "name": "kermit green"}, {
            "r": 93,
            "g": 6,
            "b": 233,
            "name": "blue violet"
        }, {"r": 93, "g": 20, "b": 81, "name": "grape purple"}, {
            "r": 93,
            "g": 33,
            "b": 208,
            "name": "purple blue"
        }, {"r": 94, "g": 129, "b": 157, "name": "greyish blue"}, {
            "r": 94,
            "g": 155,
            "b": 138,
            "name": "grey teal"
        }, {"r": 94, "g": 220, "b": 31, "name": "green apple"}, {
            "r": 95,
            "g": 52,
            "b": 231,
            "name": "purpley blue"
        }, {"r": 95, "g": 158, "b": 143, "name": "dull teal"}, {
            "r": 95,
            "g": 160,
            "b": 82,
            "name": "muted green"
        }, {"r": 96, "g": 30, "b": 249, "name": "purplish blue"}, {
            "r": 96,
            "g": 70,
            "b": 15,
            "name": "mud brown"
        }, {"r": 96, "g": 102, "b": 2, "name": "mud green"}, {"r": 96, "g": 124, "b": 142, "name": "blue grey"}, {
            "r": 97,
            "g": 0,
            "b": 35,
            "name": "burgundy"
        }, {"r": 97, "g": 64, "b": 239, "name": "purpleish blue"}, {
            "r": 97,
            "g": 222,
            "b": 42,
            "name": "toxic green"
        }, {"r": 97, "g": 225, "b": 96, "name": "lightish green"}, {
            "r": 98,
            "g": 65,
            "b": 199,
            "name": "bluey purple"
        }, {"r": 98, "g": 88, "b": 196, "name": "iris"}, {"r": 99, "g": 45, "b": 233, "name": "purple blue"}, {
            "r": 99,
            "g": 139,
            "b": 39,
            "name": "mossy green"
        }, {"r": 99, "g": 169, "b": 80, "name": "fern"}, {"r": 99, "g": 179, "b": 101, "name": "boring green"}, {
            "r": 99,
            "g": 247,
            "b": 180,
            "name": "light greenish blue"
        }, {"r": 100, "g": 84, "b": 3, "name": "olive brown"}, {
            "r": 100,
            "g": 125,
            "b": 142,
            "name": "grey blue"
        }, {"r": 100, "g": 136, "b": 234, "name": "soft blue"}, {"r": 101, "g": 0, "b": 33, "name": "maroon"}, {
            "r": 101,
            "g": 55,
            "b": 0,
            "name": "brown"
        }, {"r": 101, "g": 116, "b": 50, "name": "muddy green"}, {
            "r": 101,
            "g": 139,
            "b": 56,
            "name": "moss green"
        }, {"r": 101, "g": 140, "b": 187, "name": "faded blue"}, {
            "r": 101,
            "g": 141,
            "b": 109,
            "name": "slate green"
        }, {"r": 101, "g": 171, "b": 124, "name": "tea"}, {
            "r": 101,
            "g": 254,
            "b": 8,
            "name": "bright lime green"
        }, {"r": 102, "g": 26, "b": 238, "name": "purply blue"}, {
            "r": 102,
            "g": 95,
            "b": 209,
            "name": "dark periwinkle"
        }, {"r": 102, "g": 124, "b": 62, "name": "military green"}, {
            "r": 102,
            "g": 126,
            "b": 44,
            "name": "dirty green"
        }, {"r": 103, "g": 58, "b": 63, "name": "purple brown"}, {
            "r": 103,
            "g": 122,
            "b": 4,
            "name": "olive green"
        }, {"r": 104, "g": 0, "b": 24, "name": "claret"}, {"r": 104, "g": 50, "b": 227, "name": "burple"}, {
            "r": 105,
            "g": 96,
            "b": 6,
            "name": "greeny brown"
        }, {"r": 105, "g": 97, "b": 18, "name": "greenish brown"}, {
            "r": 105,
            "g": 131,
            "b": 57,
            "name": "swamp"
        }, {"r": 105, "g": 157, "b": 76, "name": "flat green"}, {
            "r": 105,
            "g": 216,
            "b": 79,
            "name": "fresh green"
        }, {"r": 106, "g": 110, "b": 9, "name": "brownish green"}, {
            "r": 106,
            "g": 121,
            "b": 247,
            "name": "cornflower"
        }, {"r": 107, "g": 66, "b": 71, "name": "purplish brown"}, {
            "r": 107,
            "g": 124,
            "b": 133,
            "name": "battleship grey"
        }, {"r": 107, "g": 139, "b": 164, "name": "grey blue"}, {
            "r": 107,
            "g": 163,
            "b": 83,
            "name": "off green"
        }, {"r": 108, "g": 52, "b": 97, "name": "grape"}, {"r": 108, "g": 122, "b": 14, "name": "murky green"}, {
            "r": 109,
            "g": 90,
            "b": 207,
            "name": "light indigo"
        }, {"r": 109, "g": 237, "b": 253, "name": "robins egg"}, {
            "r": 110,
            "g": 16,
            "b": 5,
            "name": "reddy brown"
        }, {"r": 110, "g": 117, "b": 14, "name": "olive"}, {"r": 110, "g": 203, "b": 60, "name": "apple"}, {
            "r": 111,
            "g": 108,
            "b": 10,
            "name": "browny green"
        }, {"r": 111, "g": 118, "b": 50, "name": "olive drab"}, {
            "r": 111,
            "g": 124,
            "b": 0,
            "name": "poop green"
        }, {"r": 111, "g": 130, "b": 138, "name": "steel grey"}, {
            "r": 111,
            "g": 194,
            "b": 118,
            "name": "soft green"
        }, {"r": 112, "g": 59, "b": 231, "name": "bluish purple"}, {
            "r": 112,
            "g": 108,
            "b": 17,
            "name": "brown green"
        }, {"r": 112, "g": 178, "b": 63, "name": "nasty green"}, {
            "r": 113,
            "g": 159,
            "b": 145,
            "name": "greyish teal"
        }, {"r": 113, "g": 170, "b": 52, "name": "leaf"}, {"r": 114, "g": 0, "b": 88, "name": "rich purple"}, {
            "r": 114,
            "g": 134,
            "b": 57,
            "name": "khaki green"
        }, {"r": 114, "g": 143, "b": 2, "name": "dark yellow green"}, {
            "r": 115,
            "g": 0,
            "b": 57,
            "name": "merlot"
        }, {"r": 115, "g": 74, "b": 101, "name": "dirty purple"}, {"r": 115, "g": 92, "b": 18, "name": "mud"}, {
            "r": 115,
            "g": 133,
            "b": 149,
            "name": "steel"
        }, {"r": 116, "g": 40, "b": 2, "name": "chestnut"}, {"r": 116, "g": 133, "b": 0, "name": "swamp green"}, {
            "r": 116,
            "g": 139,
            "b": 151,
            "name": "bluish grey"
        }, {"r": 116, "g": 149, "b": 81, "name": "drab green"}, {
            "r": 116,
            "g": 166,
            "b": 98,
            "name": "dull green"
        }, {"r": 117, "g": 8, "b": 81, "name": "velvet"}, {
            "r": 117,
            "g": 25,
            "b": 115,
            "name": "darkish purple"
        }, {"r": 117, "g": 128, "b": 0, "name": "shit green"}, {
            "r": 117,
            "g": 141,
            "b": 163,
            "name": "blue grey"
        }, {"r": 117, "g": 184, "b": 79, "name": "turtle green"}, {
            "r": 117,
            "g": 187,
            "b": 253,
            "name": "sky blue"
        }, {"r": 117, "g": 253, "b": 99, "name": "lighter green"}, {
            "r": 118,
            "g": 66,
            "b": 78,
            "name": "brownish purple"
        }, {"r": 118, "g": 153, "b": 88, "name": "moss"}, {"r": 118, "g": 169, "b": 115, "name": "dusty green"}, {
            "r": 118,
            "g": 205,
            "b": 38,
            "name": "apple green"
        }, {"r": 118, "g": 253, "b": 168, "name": "light bluish green"}, {
            "r": 118,
            "g": 255,
            "b": 123,
            "name": "lightgreen"
        }, {"r": 119, "g": 0, "b": 1, "name": "blood"}, {"r": 119, "g": 146, "b": 111, "name": "green grey"}, {
            "r": 119,
            "g": 161,
            "b": 181,
            "name": "greyblue"
        }, {"r": 119, "g": 171, "b": 86, "name": "asparagus"}, {
            "r": 120,
            "g": 155,
            "b": 115,
            "name": "grey green"
        }, {"r": 120, "g": 209, "b": 182, "name": "seafoam blue"}, {
            "r": 122,
            "g": 89,
            "b": 1,
            "name": "poop brown"
        }, {"r": 122, "g": 104, "b": 127, "name": "purplish grey"}, {
            "r": 122,
            "g": 106,
            "b": 79,
            "name": "greyish brown"
        }, {"r": 122, "g": 151, "b": 3, "name": "ugly green"}, {
            "r": 122,
            "g": 249,
            "b": 171,
            "name": "seafoam green"
        }, {"r": 123, "g": 0, "b": 44, "name": "bordeaux"}, {"r": 123, "g": 3, "b": 35, "name": "wine red"}, {
            "r": 123,
            "g": 88,
            "b": 4,
            "name": "shit brown"
        }, {"r": 123, "g": 178, "b": 116, "name": "faded green"}, {
            "r": 123,
            "g": 200,
            "b": 246,
            "name": "lightblue"
        }, {"r": 123, "g": 242, "b": 218, "name": "tiffany blue"}, {
            "r": 123,
            "g": 253,
            "b": 199,
            "name": "light aquamarine"
        }, {"r": 125, "g": 113, "b": 3, "name": "ugly brown"}, {
            "r": 125,
            "g": 127,
            "b": 124,
            "name": "medium grey"
        }, {"r": 126, "g": 30, "b": 156, "name": "purple"}, {"r": 126, "g": 64, "b": 113, "name": "bruise"}, {
            "r": 126,
            "g": 160,
            "b": 122,
            "name": "greeny grey"
        }, {"r": 126, "g": 189, "b": 1, "name": "dark lime green"}, {
            "r": 126,
            "g": 244,
            "b": 204,
            "name": "light turquoise"
        }, {"r": 126, "g": 251, "b": 179, "name": "light blue green"}, {
            "r": 127,
            "g": 43,
            "b": 10,
            "name": "reddish brown"
        }, {"r": 127, "g": 78, "b": 30, "name": "milk chocolate"}, {
            "r": 127,
            "g": 81,
            "b": 18,
            "name": "medium brown"
        }, {"r": 127, "g": 94, "b": 0, "name": "poop"}, {"r": 127, "g": 95, "b": 0, "name": "shit"}, {
            "r": 127,
            "g": 104,
            "b": 78,
            "name": "dark taupe"
        }, {"r": 127, "g": 112, "b": 83, "name": "grey brown"}, {"r": 127, "g": 143, "b": 78, "name": "camo"}, {
            "r": 128,
            "g": 1,
            "b": 63,
            "name": "wine"
        }, {"r": 128, "g": 91, "b": 135, "name": "muted purple"}, {
            "r": 128,
            "g": 249,
            "b": 173,
            "name": "seafoam"
        }, {"r": 130, "g": 7, "b": 71, "name": "red purple"}, {
            "r": 130,
            "g": 95,
            "b": 135,
            "name": "dusty purple"
        }, {"r": 130, "g": 109, "b": 140, "name": "grey purple"}, {"r": 130, "g": 131, "b": 68, "name": "drab"}, {
            "r": 130,
            "g": 166,
            "b": 125,
            "name": "greyish green"
        }, {"r": 130, "g": 202, "b": 252, "name": "sky"}, {"r": 130, "g": 203, "b": 178, "name": "pale teal"}, {
            "r": 131,
            "g": 101,
            "b": 57,
            "name": "dirt brown"
        }, {"r": 132, "g": 0, "b": 0, "name": "dark red"}, {"r": 132, "g": 89, "b": 126, "name": "dull purple"}, {
            "r": 132,
            "g": 183,
            "b": 1,
            "name": "dark lime"
        }, {"r": 133, "g": 14, "b": 4, "name": "indian red"}, {
            "r": 133,
            "g": 103,
            "b": 152,
            "name": "dark lavender"
        }, {"r": 133, "g": 163, "b": 178, "name": "bluegrey"}, {
            "r": 134,
            "g": 111,
            "b": 133,
            "name": "purple grey"
        }, {"r": 134, "g": 119, "b": 95, "name": "brownish grey"}, {
            "r": 134,
            "g": 161,
            "b": 125,
            "name": "grey green"
        }, {"r": 135, "g": 76, "b": 98, "name": "dark mauve"}, {"r": 135, "g": 86, "b": 228, "name": "purpley"}, {
            "r": 135,
            "g": 95,
            "b": 66,
            "name": "cocoa"
        }, {"r": 135, "g": 110, "b": 75, "name": "dull brown"}, {
            "r": 135,
            "g": 169,
            "b": 34,
            "name": "avocado green"
        }, {"r": 135, "g": 174, "b": 115, "name": "sage"}, {"r": 135, "g": 253, "b": 5, "name": "bright lime"}, {
            "r": 136,
            "g": 95,
            "b": 1,
            "name": "poo brown"
        }, {"r": 136, "g": 104, "b": 6, "name": "muddy brown"}, {
            "r": 136,
            "g": 113,
            "b": 145,
            "name": "greyish purple"
        }, {"r": 136, "g": 151, "b": 23, "name": "baby shit green"}, {
            "r": 136,
            "g": 179,
            "b": 120,
            "name": "sage green"
        }, {"r": 137, "g": 69, "b": 133, "name": "light eggplant"}, {
            "r": 137,
            "g": 91,
            "b": 123,
            "name": "dusky purple"
        }, {"r": 137, "g": 160, "b": 176, "name": "bluey grey"}, {
            "r": 137,
            "g": 162,
            "b": 3,
            "name": "vomit green"
        }, {"r": 137, "g": 254, "b": 5, "name": "lime green"}, {"r": 138, "g": 110, "b": 69, "name": "dirt"}, {
            "r": 138,
            "g": 184,
            "b": 254,
            "name": "carolina blue"
        }, {"r": 138, "g": 241, "b": 254, "name": "robin egg blue"}, {
            "r": 139,
            "g": 46,
            "b": 22,
            "name": "red brown"
        }, {"r": 139, "g": 49, "b": 3, "name": "rust brown"}, {
            "r": 139,
            "g": 136,
            "b": 248,
            "name": "lavender blue"
        }, {"r": 140, "g": 0, "b": 15, "name": "crimson"}, {"r": 140, "g": 0, "b": 52, "name": "red wine"}, {
            "r": 140,
            "g": 253,
            "b": 126,
            "name": "easter green"
        }, {"r": 140, "g": 255, "b": 158, "name": "baby green"}, {
            "r": 140,
            "g": 255,
            "b": 219,
            "name": "light aqua"
        }, {"r": 141, "g": 94, "b": 183, "name": "deep lavender"}, {
            "r": 141,
            "g": 132,
            "b": 104,
            "name": "brown grey"
        }, {"r": 142, "g": 118, "b": 24, "name": "hazel"}, {"r": 142, "g": 130, "b": 254, "name": "periwinkle"}, {
            "r": 142,
            "g": 171,
            "b": 18,
            "name": "pea green"
        }, {"r": 142, "g": 229, "b": 63, "name": "kiwi green"}, {"r": 143, "g": 20, "b": 2, "name": "brick red"}, {
            "r": 143,
            "g": 115,
            "b": 3,
            "name": "poo"
        }, {"r": 143, "g": 140, "b": 231, "name": "perrywinkle"}, {
            "r": 143,
            "g": 152,
            "b": 5,
            "name": "baby poop green"
        }, {"r": 143, "g": 153, "b": 251, "name": "periwinkle blue"}, {
            "r": 143,
            "g": 174,
            "b": 34,
            "name": "icky green"
        }, {"r": 143, "g": 182, "b": 123, "name": "lichen"}, {"r": 143, "g": 254, "b": 9, "name": "acid green"}, {
            "r": 143,
            "g": 255,
            "b": 159,
            "name": "mint green"
        }, {"r": 144, "g": 177, "b": 52, "name": "avocado"}, {
            "r": 144,
            "g": 228,
            "b": 193,
            "name": "light teal"
        }, {"r": 144, "g": 253, "b": 169, "name": "foam green"}, {
            "r": 145,
            "g": 9,
            "b": 81,
            "name": "reddish purple"
        }, {"r": 145, "g": 110, "b": 153, "name": "faded purple"}, {
            "r": 146,
            "g": 10,
            "b": 78,
            "name": "mulberry"
        }, {"r": 146, "g": 43, "b": 5, "name": "brown red"}, {"r": 146, "g": 149, "b": 145, "name": "grey"}, {
            "r": 146,
            "g": 153,
            "b": 1,
            "name": "pea soup"
        }, {"r": 147, "g": 124, "b": 0, "name": "baby poop"}, {"r": 148, "g": 86, "b": 140, "name": "purplish"}, {
            "r": 148,
            "g": 119,
            "b": 6,
            "name": "puke brown"
        }, {"r": 148, "g": 126, "b": 148, "name": "purpley grey"}, {
            "r": 148,
            "g": 166,
            "b": 23,
            "name": "pea soup green"
        }, {"r": 148, "g": 172, "b": 2, "name": "barf green"}, {
            "r": 148,
            "g": 178,
            "b": 28,
            "name": "sickly green"
        }, {"r": 149, "g": 46, "b": 143, "name": "warm purple"}, {
            "r": 149,
            "g": 163,
            "b": 166,
            "name": "cool grey"
        }, {"r": 149, "g": 208, "b": 252, "name": "light blue"}, {
            "r": 150,
            "g": 0,
            "b": 86,
            "name": "dark magenta"
        }, {"r": 150, "g": 78, "b": 2, "name": "warm brown"}, {
            "r": 150,
            "g": 110,
            "b": 189,
            "name": "deep lilac"
        }, {"r": 150, "g": 174, "b": 141, "name": "greenish grey"}, {
            "r": 150,
            "g": 180,
            "b": 3,
            "name": "booger green"
        }, {"r": 150, "g": 249, "b": 123, "name": "light green"}, {
            "r": 151,
            "g": 138,
            "b": 132,
            "name": "warm grey"
        }, {"r": 152, "g": 0, "b": 2, "name": "blood red"}, {"r": 152, "g": 63, "b": 178, "name": "purply"}, {
            "r": 152,
            "g": 86,
            "b": 141,
            "name": "purpleish"
        }, {"r": 152, "g": 94, "b": 43, "name": "sepia"}, {
            "r": 152,
            "g": 239,
            "b": 249,
            "name": "robins egg blue"
        }, {"r": 152, "g": 246, "b": 176, "name": "light sea green"}, {
            "r": 153,
            "g": 0,
            "b": 250,
            "name": "vivid purple"
        }, {"r": 153, "g": 1, "b": 71, "name": "purple red"}, {"r": 153, "g": 15, "b": 75, "name": "berry"}, {
            "r": 153,
            "g": 117,
            "b": 112,
            "name": "reddish grey"
        }, {"r": 153, "g": 204, "b": 4, "name": "slime green"}, {"r": 154, "g": 2, "b": 0, "name": "deep red"}, {
            "r": 154,
            "g": 14,
            "b": 234,
            "name": "violet"
        }, {"r": 154, "g": 48, "b": 1, "name": "auburn"}, {"r": 154, "g": 98, "b": 0, "name": "raw sienna"}, {
            "r": 154,
            "g": 174,
            "b": 7,
            "name": "puke green"
        }, {"r": 154, "g": 247, "b": 100, "name": "light grass green"}, {
            "r": 155,
            "g": 95,
            "b": 192,
            "name": "amethyst"
        }, {"r": 155, "g": 122, "b": 1, "name": "yellowish brown"}, {
            "r": 155,
            "g": 143,
            "b": 85,
            "name": "dark khaki"
        }, {"r": 155, "g": 181, "b": 60, "name": "booger"}, {
            "r": 155,
            "g": 229,
            "b": 170,
            "name": "hospital green"
        }, {"r": 156, "g": 109, "b": 87, "name": "brownish"}, {
            "r": 156,
            "g": 109,
            "b": 165,
            "name": "dark lilac"
        }, {"r": 156, "g": 187, "b": 4, "name": "bright olive"}, {"r": 156, "g": 239, "b": 67, "name": "kiwi"}, {
            "r": 157,
            "g": 2,
            "b": 22,
            "name": "carmine"
        }, {"r": 157, "g": 7, "b": 89, "name": "dark fuchsia"}, {
            "r": 157,
            "g": 87,
            "b": 131,
            "name": "light plum"
        }, {"r": 157, "g": 118, "b": 81, "name": "mocha"}, {"r": 157, "g": 185, "b": 44, "name": "sick green"}, {
            "r": 157,
            "g": 188,
            "b": 212,
            "name": "light grey blue"
        }, {"r": 157, "g": 193, "b": 0, "name": "snot green"}, {
            "r": 157,
            "g": 255,
            "b": 0,
            "name": "bright yellow green"
        }, {"r": 158, "g": 0, "b": 58, "name": "cranberry"}, {"r": 158, "g": 1, "b": 104, "name": "red violet"}, {
            "r": 158,
            "g": 54,
            "b": 35,
            "name": "brownish red"
        }, {"r": 158, "g": 67, "b": 162, "name": "medium purple"}, {
            "r": 159,
            "g": 35,
            "b": 5,
            "name": "burnt red"
        }, {"r": 159, "g": 131, "b": 3, "name": "diarrhea"}, {"r": 159, "g": 254, "b": 176, "name": "mint"}, {
            "r": 160,
            "g": 2,
            "b": 92,
            "name": "deep magenta"
        }, {"r": 160, "g": 4, "b": 152, "name": "barney purple"}, {"r": 160, "g": 54, "b": 35, "name": "brick"}, {
            "r": 160,
            "g": 69,
            "b": 14,
            "name": "burnt umber"
        }, {"r": 160, "g": 191, "b": 22, "name": "gross green"}, {
            "r": 160,
            "g": 254,
            "b": 191,
            "name": "light seafoam"
        }, {"r": 161, "g": 57, "b": 5, "name": "russet"}, {"r": 162, "g": 72, "b": 87, "name": "light maroon"}, {
            "r": 162,
            "g": 101,
            "b": 62,
            "name": "earth"
        }, {"r": 162, "g": 164, "b": 21, "name": "vomit"}, {"r": 162, "g": 191, "b": 254, "name": "pastel blue"}, {
            "r": 162,
            "g": 207,
            "b": 254,
            "name": "baby blue"
        }, {"r": 164, "g": 66, "b": 160, "name": "ugly purple"}, {
            "r": 164,
            "g": 132,
            "b": 172,
            "name": "heather"
        }, {"r": 164, "g": 190, "b": 92, "name": "light olive green"}, {
            "r": 164,
            "g": 191,
            "b": 32,
            "name": "pea"
        }, {"r": 165, "g": 0, "b": 85, "name": "violet red"}, {
            "r": 165,
            "g": 82,
            "b": 230,
            "name": "lightish purple"
        }, {"r": 165, "g": 90, "b": 244, "name": "lighter purple"}, {
            "r": 165,
            "g": 126,
            "b": 82,
            "name": "puce"
        }, {"r": 165, "g": 163, "b": 145, "name": "cement"}, {"r": 165, "g": 165, "b": 2, "name": "puke"}, {
            "r": 165,
            "g": 251,
            "b": 213,
            "name": "pale turquoise"
        }, {"r": 166, "g": 111, "b": 181, "name": "soft purple"}, {
            "r": 166,
            "g": 129,
            "b": 76,
            "name": "coffee"
        }, {"r": 166, "g": 200, "b": 117, "name": "light moss green"}, {
            "r": 166,
            "g": 251,
            "b": 178,
            "name": "light mint green"
        }, {"r": 167, "g": 94, "b": 9, "name": "raw umber"}, {
            "r": 167,
            "g": 255,
            "b": 181,
            "name": "light seafoam green"
        }, {"r": 168, "g": 60, "b": 9, "name": "rust"}, {"r": 168, "g": 65, "b": 91, "name": "light burgundy"}, {
            "r": 168,
            "g": 121,
            "b": 0,
            "name": "bronze"
        }, {"r": 168, "g": 125, "b": 194, "name": "wisteria"}, {
            "r": 168,
            "g": 137,
            "b": 5,
            "name": "dark mustard"
        }, {"r": 168, "g": 143, "b": 89, "name": "dark sand"}, {"r": 168, "g": 164, "b": 149, "name": "greyish"}, {
            "r": 168,
            "g": 181,
            "b": 4,
            "name": "mustard green"
        }, {"r": 168, "g": 255, "b": 4, "name": "electric lime"}, {
            "r": 169,
            "g": 3,
            "b": 8,
            "name": "darkish red"
        }, {"r": 169, "g": 86, "b": 30, "name": "sienna"}, {"r": 169, "g": 190, "b": 112, "name": "tan green"}, {
            "r": 169,
            "g": 249,
            "b": 113,
            "name": "spring green"
        }, {"r": 170, "g": 35, "b": 255, "name": "electric purple"}, {
            "r": 170,
            "g": 39,
            "b": 4,
            "name": "rust red"
        }, {"r": 170, "g": 166, "b": 98, "name": "khaki"}, {"r": 170, "g": 255, "b": 50, "name": "lime"}, {
            "r": 171,
            "g": 18,
            "b": 57,
            "name": "rouge"
        }, {"r": 171, "g": 126, "b": 76, "name": "tan brown"}, {"r": 171, "g": 144, "b": 4, "name": "baby poo"}, {
            "r": 172,
            "g": 29,
            "b": 184,
            "name": "barney"
        }, {"r": 172, "g": 79, "b": 6, "name": "cinnamon"}, {"r": 172, "g": 116, "b": 52, "name": "leather"}, {
            "r": 172,
            "g": 126,
            "b": 4,
            "name": "mustard brown"
        }, {"r": 172, "g": 134, "b": 168, "name": "dusty lavender"}, {
            "r": 172,
            "g": 147,
            "b": 98,
            "name": "dark beige"
        }, {"r": 172, "g": 187, "b": 13, "name": "snot"}, {"r": 172, "g": 191, "b": 105, "name": "light olive"}, {
            "r": 172,
            "g": 194,
            "b": 217,
            "name": "cloudy blue"
        }, {"r": 172, "g": 255, "b": 252, "name": "light cyan"}, {
            "r": 173,
            "g": 3,
            "b": 222,
            "name": "vibrant purple"
        }, {"r": 173, "g": 10, "b": 253, "name": "bright violet"}, {
            "r": 173,
            "g": 129,
            "b": 80,
            "name": "light brown"
        }, {"r": 173, "g": 144, "b": 13, "name": "baby shit brown"}, {
            "r": 173,
            "g": 165,
            "b": 135,
            "name": "stone"
        }, {"r": 173, "g": 248, "b": 2, "name": "lemon green"}, {"r": 174, "g": 113, "b": 129, "name": "mauve"}, {
            "r": 174,
            "g": 139,
            "b": 12,
            "name": "yellowy brown"
        }, {"r": 174, "g": 253, "b": 108, "name": "light lime"}, {
            "r": 174,
            "g": 255,
            "b": 110,
            "name": "key lime"
        }, {"r": 175, "g": 47, "b": 13, "name": "rusty red"}, {"r": 175, "g": 111, "b": 9, "name": "caramel"}, {
            "r": 175,
            "g": 136,
            "b": 74,
            "name": "dark tan"
        }, {"r": 175, "g": 168, "b": 139, "name": "bland"}, {"r": 176, "g": 1, "b": 73, "name": "raspberry"}, {
            "r": 176,
            "g": 5,
            "b": 75,
            "name": "purplish red"
        }, {"r": 176, "g": 78, "b": 15, "name": "burnt sienna"}, {
            "r": 176,
            "g": 221,
            "b": 22,
            "name": "yellowish green"
        }, {"r": 176, "g": 255, "b": 157, "name": "pastel green"}, {
            "r": 177,
            "g": 96,
            "b": 2,
            "name": "orangey brown"
        }, {"r": 177, "g": 114, "b": 97, "name": "pinkish brown"}, {
            "r": 177,
            "g": 145,
            "b": 110,
            "name": "pale brown"
        }, {"r": 177, "g": 209, "b": 252, "name": "powder blue"}, {
            "r": 177,
            "g": 210,
            "b": 123,
            "name": "pale olive green"
        }, {"r": 177, "g": 252, "b": 153, "name": "pale light green"}, {
            "r": 177,
            "g": 255,
            "b": 101,
            "name": "pale lime green"
        }, {"r": 178, "g": 95, "b": 3, "name": "orangish brown"}, {"r": 178, "g": 100, "b": 0, "name": "umber"}, {
            "r": 178,
            "g": 113,
            "b": 61,
            "name": "clay brown"
        }, {"r": 178, "g": 122, "b": 1, "name": "golden brown"}, {
            "r": 178,
            "g": 151,
            "b": 5,
            "name": "brown yellow"
        }, {"r": 178, "g": 153, "b": 110, "name": "dust"}, {
            "r": 178,
            "g": 251,
            "b": 165,
            "name": "light pastel green"
        }, {"r": 179, "g": 111, "b": 246, "name": "light urple"}, {
            "r": 181,
            "g": 72,
            "b": 93,
            "name": "dark rose"
        }, {"r": 181, "g": 148, "b": 16, "name": "dark gold"}, {"r": 181, "g": 195, "b": 6, "name": "bile"}, {
            "r": 181,
            "g": 206,
            "b": 8,
            "name": "green yellow"
        }, {"r": 182, "g": 99, "b": 37, "name": "copper"}, {"r": 182, "g": 106, "b": 80, "name": "clay"}, {
            "r": 182,
            "g": 196,
            "b": 6,
            "name": "baby puke green"
        }, {"r": 182, "g": 255, "b": 187, "name": "light mint"}, {
            "r": 183,
            "g": 82,
            "b": 3,
            "name": "burnt siena"
        }, {"r": 183, "g": 144, "b": 212, "name": "pale purple"}, {
            "r": 183,
            "g": 148,
            "b": 0,
            "name": "yellow brown"
        }, {"r": 183, "g": 201, "b": 226, "name": "light blue grey"}, {
            "r": 183,
            "g": 225,
            "b": 161,
            "name": "light grey green"
        }, {"r": 183, "g": 255, "b": 250, "name": "pale cyan"}, {
            "r": 184,
            "g": 255,
            "b": 235,
            "name": "pale aqua"
        }, {"r": 185, "g": 72, "b": 78, "name": "dusty red"}, {
            "r": 185,
            "g": 105,
            "b": 2,
            "name": "brown orange"
        }, {"r": 185, "g": 162, "b": 129, "name": "taupe"}, {"r": 185, "g": 204, "b": 129, "name": "pale olive"}, {
            "r": 185,
            "g": 255,
            "b": 102,
            "name": "light lime green"
        }, {"r": 186, "g": 104, "b": 115, "name": "dusky rose"}, {
            "r": 186,
            "g": 158,
            "b": 136,
            "name": "mushroom"
        }, {"r": 187, "g": 63, "b": 63, "name": "dull red"}, {
            "r": 187,
            "g": 249,
            "b": 15,
            "name": "yellowgreen"
        }, {"r": 188, "g": 19, "b": 254, "name": "neon purple"}, {
            "r": 188,
            "g": 203,
            "b": 122,
            "name": "greenish tan"
        }, {"r": 188, "g": 236, "b": 172, "name": "light sage"}, {
            "r": 188,
            "g": 245,
            "b": 166,
            "name": "washed out green"
        }, {"r": 189, "g": 108, "b": 72, "name": "adobe"}, {
            "r": 189,
            "g": 246,
            "b": 254,
            "name": "pale sky blue"
        }, {"r": 189, "g": 248, "b": 163, "name": "tea green"}, {"r": 190, "g": 1, "b": 25, "name": "scarlet"}, {
            "r": 190,
            "g": 1,
            "b": 60,
            "name": "rose red"
        }, {"r": 190, "g": 3, "b": 253, "name": "bright purple"}, {
            "r": 190,
            "g": 100,
            "b": 0,
            "name": "orange brown"
        }, {"r": 190, "g": 174, "b": 138, "name": "putty"}, {"r": 190, "g": 253, "b": 115, "name": "pale lime"}, {
            "r": 190,
            "g": 253,
            "b": 183,
            "name": "celadon"
        }, {"r": 191, "g": 119, "b": 246, "name": "light purple"}, {"r": 191, "g": 144, "b": 5, "name": "ochre"}, {
            "r": 191,
            "g": 155,
            "b": 12,
            "name": "ocher"
        }, {"r": 191, "g": 172, "b": 5, "name": "muddy yellow"}, {
            "r": 191,
            "g": 241,
            "b": 40,
            "name": "yellowy green"
        }, {"r": 191, "g": 254, "b": 40, "name": "lemon lime"}, {
            "r": 192,
            "g": 2,
            "b": 47,
            "name": "lipstick red"
        }, {"r": 192, "g": 78, "b": 1, "name": "burnt orange"}, {
            "r": 192,
            "g": 113,
            "b": 254,
            "name": "easter purple"
        }, {"r": 192, "g": 115, "b": 122, "name": "dusty rose"}, {
            "r": 192,
            "g": 250,
            "b": 139,
            "name": "pistachio"
        }, {"r": 192, "g": 251, "b": 45, "name": "yellow green"}, {
            "r": 193,
            "g": 74,
            "b": 9,
            "name": "brick orange"
        }, {"r": 193, "g": 198, "b": 252, "name": "light periwinkle"}, {
            "r": 193,
            "g": 248,
            "b": 10,
            "name": "chartreuse"
        }, {"r": 193, "g": 253, "b": 149, "name": "celery"}, {"r": 194, "g": 0, "b": 120, "name": "magenta"}, {
            "r": 194,
            "g": 126,
            "b": 121,
            "name": "brownish pink"
        }, {"r": 194, "g": 146, "b": 161, "name": "light mauve"}, {
            "r": 194,
            "g": 183,
            "b": 9,
            "name": "olive yellow"
        }, {"r": 194, "g": 190, "b": 14, "name": "puke yellow"}, {
            "r": 194,
            "g": 255,
            "b": 137,
            "name": "light yellowish green"
        }, {"r": 195, "g": 144, "b": 155, "name": "grey pink"}, {
            "r": 195,
            "g": 251,
            "b": 244,
            "name": "duck egg blue"
        }, {"r": 196, "g": 66, "b": 64, "name": "reddish"}, {"r": 196, "g": 85, "b": 8, "name": "rust orange"}, {
            "r": 196,
            "g": 142,
            "b": 253,
            "name": "liliac"
        }, {"r": 196, "g": 166, "b": 97, "name": "sandy brown"}, {
            "r": 196,
            "g": 254,
            "b": 130,
            "name": "light pea green"
        }, {"r": 196, "g": 255, "b": 247, "name": "eggshell blue"}, {
            "r": 197,
            "g": 201,
            "b": 199,
            "name": "silver"
        }, {"r": 198, "g": 81, "b": 2, "name": "dark orange"}, {"r": 198, "g": 156, "b": 4, "name": "ocre"}, {
            "r": 198,
            "g": 159,
            "b": 89,
            "name": "camel"
        }, {"r": 198, "g": 248, "b": 8, "name": "greeny yellow"}, {
            "r": 198,
            "g": 252,
            "b": 255,
            "name": "light sky blue"
        }, {"r": 199, "g": 71, "b": 103, "name": "deep rose"}, {
            "r": 199,
            "g": 96,
            "b": 255,
            "name": "bright lavender"
        }, {"r": 199, "g": 121, "b": 134, "name": "old pink"}, {
            "r": 199,
            "g": 159,
            "b": 239,
            "name": "lavender"
        }, {"r": 199, "g": 172, "b": 125, "name": "toupe"}, {
            "r": 199,
            "g": 193,
            "b": 12,
            "name": "vomit yellow"
        }, {"r": 199, "g": 253, "b": 181, "name": "pale green"}, {
            "r": 200,
            "g": 60,
            "b": 185,
            "name": "purpley pink"
        }, {"r": 200, "g": 90, "b": 83, "name": "dark salmon"}, {"r": 200, "g": 117, "b": 196, "name": "orchid"}, {
            "r": 200,
            "g": 118,
            "b": 6,
            "name": "dirty orange"
        }, {"r": 200, "g": 127, "b": 137, "name": "old rose"}, {
            "r": 200,
            "g": 141,
            "b": 148,
            "name": "greyish pink"
        }, {"r": 200, "g": 172, "b": 169, "name": "pinkish grey"}, {
            "r": 200,
            "g": 253,
            "b": 61,
            "name": "yellow green"
        }, {"r": 200, "g": 255, "b": 176, "name": "light light green"}, {
            "r": 201,
            "g": 76,
            "b": 190,
            "name": "pinky purple"
        }, {"r": 201, "g": 94, "b": 251, "name": "bright lilac"}, {
            "r": 201,
            "g": 100,
            "b": 59,
            "name": "terra cotta"
        }, {"r": 201, "g": 174, "b": 116, "name": "sandstone"}, {
            "r": 201,
            "g": 176,
            "b": 3,
            "name": "brownish yellow"
        }, {"r": 201, "g": 209, "b": 121, "name": "greenish beige"}, {
            "r": 201,
            "g": 255,
            "b": 39,
            "name": "green yellow"
        }, {"r": 202, "g": 1, "b": 71, "name": "ruby"}, {"r": 202, "g": 102, "b": 65, "name": "terracotta"}, {
            "r": 202,
            "g": 107,
            "b": 2,
            "name": "browny orange"
        }, {"r": 202, "g": 123, "b": 128, "name": "dirty pink"}, {
            "r": 202,
            "g": 155,
            "b": 247,
            "name": "baby purple"
        }, {"r": 202, "g": 160, "b": 255, "name": "pastel purple"}, {
            "r": 202,
            "g": 255,
            "b": 251,
            "name": "light light blue"
        }, {"r": 203, "g": 0, "b": 245, "name": "hot purple"}, {"r": 203, "g": 1, "b": 98, "name": "deep pink"}, {
            "r": 203,
            "g": 65,
            "b": 107,
            "name": "dark pink"
        }, {"r": 203, "g": 104, "b": 67, "name": "terracota"}, {
            "r": 203,
            "g": 119,
            "b": 35,
            "name": "brownish orange"
        }, {"r": 203, "g": 157, "b": 6, "name": "yellow ochre"}, {
            "r": 203,
            "g": 165,
            "b": 96,
            "name": "sand brown"
        }, {"r": 203, "g": 248, "b": 95, "name": "pear"}, {"r": 204, "g": 122, "b": 139, "name": "dusky pink"}, {
            "r": 204,
            "g": 173,
            "b": 96,
            "name": "desert"
        }, {"r": 204, "g": 253, "b": 127, "name": "light yellow green"}, {
            "r": 205,
            "g": 89,
            "b": 9,
            "name": "rusty orange"
        }, {"r": 205, "g": 117, "b": 132, "name": "ugly pink"}, {
            "r": 205,
            "g": 197,
            "b": 10,
            "name": "dirty yellow"
        }, {"r": 205, "g": 253, "b": 2, "name": "greenish yellow"}, {
            "r": 206,
            "g": 93,
            "b": 174,
            "name": "purplish pink"
        }, {"r": 206, "g": 162, "b": 253, "name": "lilac"}, {
            "r": 206,
            "g": 174,
            "b": 250,
            "name": "pale violet"
        }, {"r": 206, "g": 179, "b": 1, "name": "mustard"}, {"r": 207, "g": 2, "b": 52, "name": "cherry"}, {
            "r": 207,
            "g": 82,
            "b": 78,
            "name": "dark coral"
        }, {"r": 207, "g": 98, "b": 117, "name": "rose"}, {"r": 207, "g": 175, "b": 123, "name": "fawn"}, {
            "r": 207,
            "g": 253,
            "b": 188,
            "name": "very pale green"
        }, {"r": 207, "g": 255, "b": 4, "name": "neon yellow"}, {
            "r": 208,
            "g": 193,
            "b": 1,
            "name": "ugly yellow"
        }, {"r": 208, "g": 228, "b": 41, "name": "sickly yellow"}, {
            "r": 208,
            "g": 254,
            "b": 29,
            "name": "lime yellow"
        }, {"r": 208, "g": 254, "b": 254, "name": "pale blue"}, {
            "r": 209,
            "g": 118,
            "b": 143,
            "name": "muted pink"
        }, {"r": 209, "g": 178, "b": 111, "name": "tan"}, {
            "r": 209,
            "g": 255,
            "b": 189,
            "name": "very light green"
        }, {"r": 210, "g": 189, "b": 10, "name": "mustard yellow"}, {
            "r": 211,
            "g": 73,
            "b": 78,
            "name": "faded red"
        }, {"r": 211, "g": 182, "b": 131, "name": "very light brown"}, {
            "r": 212,
            "g": 106,
            "b": 126,
            "name": "pinkish"
        }, {"r": 212, "g": 255, "b": 255, "name": "really light blue"}, {
            "r": 213,
            "g": 23,
            "b": 78,
            "name": "lipstick"
        }, {"r": 213, "g": 134, "b": 157, "name": "dull pink"}, {
            "r": 213,
            "g": 138,
            "b": 148,
            "name": "dusty pink"
        }, {"r": 213, "g": 171, "b": 9, "name": "burnt yellow"}, {
            "r": 213,
            "g": 182,
            "b": 10,
            "name": "dark yellow"
        }, {"r": 213, "g": 255, "b": 255, "name": "very light blue"}, {
            "r": 214,
            "g": 72,
            "b": 215,
            "name": "pinkish purple"
        }, {"r": 214, "g": 180, "b": 252, "name": "light violet"}, {"r": 214, "g": 255, "b": 250, "name": "ice"}, {
            "r": 214,
            "g": 255,
            "b": 254,
            "name": "very pale blue"
        }, {"r": 215, "g": 37, "b": 222, "name": "purple pink"}, {
            "r": 215,
            "g": 103,
            "b": 173,
            "name": "pale magenta"
        }, {"r": 215, "g": 255, "b": 254, "name": "ice blue"}, {
            "r": 216,
            "g": 134,
            "b": 59,
            "name": "dull orange"
        }, {"r": 216, "g": 220, "b": 214, "name": "light grey"}, {
            "r": 217,
            "g": 1,
            "b": 102,
            "name": "dark hot pink"
        }, {"r": 217, "g": 79, "b": 245, "name": "heliotrope"}, {"r": 217, "g": 84, "b": 77, "name": "pale red"}, {
            "r": 217,
            "g": 155,
            "b": 130,
            "name": "pinkish tan"
        }, {"r": 218, "g": 70, "b": 125, "name": "darkish pink"}, {
            "r": 219,
            "g": 75,
            "b": 218,
            "name": "pink purple"
        }, {"r": 219, "g": 88, "b": 86, "name": "pastel red"}, {"r": 219, "g": 180, "b": 12, "name": "gold"}, {
            "r": 220,
            "g": 77,
            "b": 1,
            "name": "deep orange"
        }, {"r": 221, "g": 133, "b": 215, "name": "lavender pink"}, {
            "r": 221,
            "g": 214,
            "b": 24,
            "name": "piss yellow"
        }, {"r": 222, "g": 12, "b": 98, "name": "cerise"}, {"r": 222, "g": 126, "b": 93, "name": "dark peach"}, {
            "r": 222,
            "g": 157,
            "b": 172,
            "name": "faded pink"
        }, {"r": 223, "g": 78, "b": 200, "name": "purpleish pink"}, {
            "r": 223,
            "g": 197,
            "b": 254,
            "name": "light lavender"
        }, {"r": 224, "g": 63, "b": 216, "name": "purple pink"}, {"r": 225, "g": 119, "b": 1, "name": "pumpkin"}, {
            "r": 226,
            "g": 202,
            "b": 118,
            "name": "sand"
        }, {"r": 228, "g": 203, "b": 255, "name": "pale lilac"}, {"r": 229, "g": 0, "b": 0, "name": "red"}, {
            "r": 230,
            "g": 218,
            "b": 166,
            "name": "beige"
        }, {"r": 230, "g": 242, "b": 162, "name": "light khaki"}, {
            "r": 231,
            "g": 142,
            "b": 165,
            "name": "pig pink"
        }, {"r": 236, "g": 45, "b": 1, "name": "tomato red"}, {"r": 237, "g": 13, "b": 217, "name": "fuchsia"}, {
            "r": 237,
            "g": 200,
            "b": 255,
            "name": "light lilac"
        }, {"r": 238, "g": 207, "b": 254, "name": "pale lavender"}, {
            "r": 238,
            "g": 220,
            "b": 91,
            "name": "dull yellow"
        }, {"r": 239, "g": 29, "b": 231, "name": "pink purple"}, {"r": 239, "g": 64, "b": 38, "name": "tomato"}, {
            "r": 239,
            "g": 180,
            "b": 53,
            "name": "macaroni and cheese"
        }, {"r": 239, "g": 192, "b": 254, "name": "light lavendar"}, {
            "r": 240,
            "g": 117,
            "b": 230,
            "name": "purply pink"
        }, {"r": 240, "g": 131, "b": 58, "name": "dusty orange"}, {
            "r": 240,
            "g": 148,
            "b": 77,
            "name": "faded orange"
        }, {"r": 241, "g": 12, "b": 69, "name": "pinkish red"}, {"r": 241, "g": 218, "b": 122, "name": "sandy"}, {
            "r": 241,
            "g": 243,
            "b": 63,
            "name": "off yellow"
        }, {"r": 242, "g": 158, "b": 142, "name": "blush"}, {"r": 242, "g": 171, "b": 21, "name": "squash"}, {
            "r": 243,
            "g": 97,
            "b": 150,
            "name": "medium pink"
        }, {"r": 244, "g": 50, "b": 12, "name": "vermillion"}, {
            "r": 244,
            "g": 54,
            "b": 5,
            "name": "orangish red"
        }, {"r": 244, "g": 208, "b": 84, "name": "maize"}, {"r": 245, "g": 4, "b": 201, "name": "hot magenta"}, {
            "r": 245,
            "g": 5,
            "b": 79,
            "name": "pink red"
        }, {"r": 245, "g": 191, "b": 3, "name": "golden"}, {"r": 246, "g": 104, "b": 142, "name": "rosy pink"}, {
            "r": 246,
            "g": 206,
            "b": 252,
            "name": "very light purple"
        }, {"r": 247, "g": 2, "b": 42, "name": "cherry red"}, {
            "r": 247,
            "g": 135,
            "b": 154,
            "name": "rose pink"
        }, {"r": 247, "g": 213, "b": 96, "name": "light mustard"}, {
            "r": 248,
            "g": 72,
            "b": 28,
            "name": "reddish orange"
        }, {"r": 249, "g": 115, "b": 6, "name": "orange"}, {"r": 249, "g": 188, "b": 8, "name": "golden rod"}, {
            "r": 250,
            "g": 42,
            "b": 85,
            "name": "red pink"
        }, {"r": 250, "g": 66, "b": 36, "name": "orangey red"}, {
            "r": 250,
            "g": 95,
            "b": 247,
            "name": "light magenta"
        }, {"r": 250, "g": 194, "b": 5, "name": "goldenrod"}, {
            "r": 250,
            "g": 238,
            "b": 102,
            "name": "yellowish"
        }, {"r": 250, "g": 254, "b": 75, "name": "banana yellow"}, {
            "r": 251,
            "g": 41,
            "b": 67,
            "name": "strawberry"
        }, {"r": 251, "g": 85, "b": 129, "name": "warm pink"}, {
            "r": 251,
            "g": 95,
            "b": 252,
            "name": "violet pink"
        }, {"r": 251, "g": 125, "b": 7, "name": "pumpkin orange"}, {
            "r": 251,
            "g": 221,
            "b": 126,
            "name": "wheat"
        }, {"r": 251, "g": 238, "b": 172, "name": "light tan"}, {
            "r": 252,
            "g": 38,
            "b": 71,
            "name": "pinky red"
        }, {"r": 252, "g": 90, "b": 80, "name": "coral"}, {"r": 252, "g": 130, "b": 74, "name": "orangish"}, {
            "r": 252,
            "g": 134,
            "b": 170,
            "name": "pinky"
        }, {"r": 252, "g": 176, "b": 1, "name": "yellow orange"}, {
            "r": 252,
            "g": 192,
            "b": 6,
            "name": "marigold"
        }, {"r": 252, "g": 225, "b": 102, "name": "sand yellow"}, {
            "r": 252,
            "g": 246,
            "b": 121,
            "name": "straw"
        }, {"r": 252, "g": 252, "b": 129, "name": "yellowish tan"}, {
            "r": 253,
            "g": 60,
            "b": 6,
            "name": "red orange"
        }, {"r": 253, "g": 65, "b": 30, "name": "orange red"}, {
            "r": 253,
            "g": 70,
            "b": 89,
            "name": "watermelon"
        }, {"r": 253, "g": 89, "b": 86, "name": "grapefruit"}, {
            "r": 253,
            "g": 121,
            "b": 143,
            "name": "carnation"
        }, {"r": 253, "g": 141, "b": 73, "name": "orangeish"}, {
            "r": 253,
            "g": 170,
            "b": 72,
            "name": "light orange"
        }, {"r": 253, "g": 176, "b": 192, "name": "soft pink"}, {
            "r": 253,
            "g": 177,
            "b": 71,
            "name": "butterscotch"
        }, {"r": 253, "g": 185, "b": 21, "name": "orangey yellow"}, {
            "r": 253,
            "g": 193,
            "b": 197,
            "name": "pale rose"
        }, {"r": 253, "g": 220, "b": 92, "name": "light gold"}, {
            "r": 253,
            "g": 222,
            "b": 108,
            "name": "pale gold"
        }, {"r": 253, "g": 238, "b": 115, "name": "sandy yellow"}, {
            "r": 253,
            "g": 253,
            "b": 254,
            "name": "pale grey"
        }, {"r": 253, "g": 255, "b": 56, "name": "lemon yellow"}, {"r": 253, "g": 255, "b": 82, "name": "lemon"}, {
            "r": 253,
            "g": 255,
            "b": 99,
            "name": "canary"
        }, {"r": 254, "g": 0, "b": 2, "name": "fire engine red"}, {
            "r": 254,
            "g": 1,
            "b": 154,
            "name": "neon pink"
        }, {"r": 254, "g": 1, "b": 177, "name": "bright pink"}, {
            "r": 254,
            "g": 2,
            "b": 162,
            "name": "shocking pink"
        }, {"r": 254, "g": 44, "b": 84, "name": "reddish pink"}, {
            "r": 254,
            "g": 47,
            "b": 74,
            "name": "lightish red"
        }, {"r": 254, "g": 66, "b": 15, "name": "orangered"}, {
            "r": 254,
            "g": 70,
            "b": 165,
            "name": "barbie pink"
        }, {"r": 254, "g": 75, "b": 3, "name": "blood orange"}, {
            "r": 254,
            "g": 123,
            "b": 124,
            "name": "salmon pink"
        }, {"r": 254, "g": 130, "b": 140, "name": "blush pink"}, {
            "r": 254,
            "g": 131,
            "b": 204,
            "name": "bubblegum pink"
        }, {"r": 254, "g": 134, "b": 164, "name": "rosa"}, {
            "r": 254,
            "g": 169,
            "b": 147,
            "name": "light salmon"
        }, {"r": 254, "g": 178, "b": 9, "name": "saffron"}, {"r": 254, "g": 179, "b": 8, "name": "amber"}, {
            "r": 254,
            "g": 198,
            "b": 21,
            "name": "golden yellow"
        }, {"r": 254, "g": 208, "b": 252, "name": "pale mauve"}, {
            "r": 254,
            "g": 223,
            "b": 8,
            "name": "dandelion"
        }, {"r": 254, "g": 246, "b": 158, "name": "buff"}, {"r": 254, "g": 252, "b": 175, "name": "parchment"}, {
            "r": 254,
            "g": 255,
            "b": 127,
            "name": "faded yellow"
        }, {"r": 254, "g": 255, "b": 202, "name": "ecru"}, {"r": 255, "g": 0, "b": 13, "name": "bright red"}, {
            "r": 255,
            "g": 2,
            "b": 141,
            "name": "hot pink"
        }, {"r": 255, "g": 4, "b": 144, "name": "electric pink"}, {
            "r": 255,
            "g": 7,
            "b": 58,
            "name": "neon red"
        }, {"r": 255, "g": 7, "b": 137, "name": "strong pink"}, {
            "r": 255,
            "g": 8,
            "b": 232,
            "name": "bright magenta"
        }, {"r": 255, "g": 71, "b": 76, "name": "light red"}, {
            "r": 255,
            "g": 91,
            "b": 0,
            "name": "bright orange"
        }, {"r": 255, "g": 97, "b": 99, "name": "coral pink"}, {
            "r": 255,
            "g": 99,
            "b": 233,
            "name": "candy pink"
        }, {"r": 255, "g": 105, "b": 175, "name": "bubble gum pink"}, {
            "r": 255,
            "g": 108,
            "b": 181,
            "name": "bubblegum"
        }, {"r": 255, "g": 111, "b": 82, "name": "orange pink"}, {
            "r": 255,
            "g": 114,
            "b": 76,
            "name": "pinkish orange"
        }, {"r": 255, "g": 120, "b": 85, "name": "melon"}, {"r": 255, "g": 121, "b": 108, "name": "salmon"}, {
            "r": 255,
            "g": 127,
            "b": 167,
            "name": "carnation pink"
        }, {"r": 255, "g": 129, "b": 192, "name": "pink"}, {"r": 255, "g": 148, "b": 8, "name": "tangerine"}, {
            "r": 255,
            "g": 150,
            "b": 79,
            "name": "pastel orange"
        }, {"r": 255, "g": 154, "b": 138, "name": "peachy pink"}, {"r": 255, "g": 166, "b": 43, "name": "mango"}, {
            "r": 255,
            "g": 167,
            "b": 86,
            "name": "pale orange"
        }, {"r": 255, "g": 171, "b": 15, "name": "yellowish orange"}, {
            "r": 255,
            "g": 173,
            "b": 1,
            "name": "orange yellow"
        }, {"r": 255, "g": 176, "b": 124, "name": "peach"}, {"r": 255, "g": 177, "b": 109, "name": "apricot"}, {
            "r": 255,
            "g": 177,
            "b": 154,
            "name": "pale salmon"
        }, {"r": 255, "g": 178, "b": 208, "name": "powder pink"}, {
            "r": 255,
            "g": 183,
            "b": 206,
            "name": "baby pink"
        }, {"r": 255, "g": 186, "b": 205, "name": "pastel pink"}, {
            "r": 255,
            "g": 197,
            "b": 18,
            "name": "sunflower"
        }, {"r": 255, "g": 197, "b": 203, "name": "light rose"}, {
            "r": 255,
            "g": 207,
            "b": 220,
            "name": "pale pink"
        }, {"r": 255, "g": 209, "b": 223, "name": "light pink"}, {
            "r": 255,
            "g": 216,
            "b": 177,
            "name": "light peach"
        }, {"r": 255, "g": 218, "b": 3, "name": "sunflower yellow"}, {
            "r": 255,
            "g": 223,
            "b": 34,
            "name": "sun yellow"
        }, {"r": 255, "g": 227, "b": 110, "name": "yellow tan"}, {
            "r": 255,
            "g": 229,
            "b": 173,
            "name": "pale peach"
        }, {"r": 255, "g": 243, "b": 154, "name": "dark cream"}, {
            "r": 255,
            "g": 244,
            "b": 242,
            "name": "very light pink"
        }, {"r": 255, "g": 249, "b": 23, "name": "sunny yellow"}, {"r": 255, "g": 249, "b": 208, "name": "pale"}, {
            "r": 255,
            "g": 250,
            "b": 134,
            "name": "manilla"
        }, {"r": 255, "g": 252, "b": 196, "name": "egg shell"}, {
            "r": 255,
            "g": 253,
            "b": 1,
            "name": "bright yellow"
        }, {"r": 255, "g": 253, "b": 55, "name": "sunshine yellow"}, {
            "r": 255,
            "g": 253,
            "b": 116,
            "name": "butter yellow"
        }, {"r": 255, "g": 253, "b": 120, "name": "custard"}, {
            "r": 255,
            "g": 254,
            "b": 64,
            "name": "canary yellow"
        }, {"r": 255, "g": 254, "b": 113, "name": "pastel yellow"}, {
            "r": 255,
            "g": 254,
            "b": 122,
            "name": "light yellow"
        }, {"r": 255, "g": 254, "b": 182, "name": "light beige"}, {
            "r": 255,
            "g": 255,
            "b": 20,
            "name": "yellow"
        }, {"r": 255, "g": 255, "b": 126, "name": "banana"}, {"r": 255, "g": 255, "b": 129, "name": "butter"}, {
            "r": 255,
            "g": 255,
            "b": 132,
            "name": "pale yellow"
        }, {"r": 255, "g": 255, "b": 182, "name": "creme"}, {"r": 255, "g": 255, "b": 194, "name": "cream"}, {
            "r": 255,
            "g": 255,
            "b": 203,
            "name": "ivory"
        }, {"r": 255, "g": 255, "b": 212, "name": "eggshell"}, {
            "r": 255,
            "g": 255,
            "b": 228,
            "name": "off white"
        }, {"r": 255, "g": 255, "b": 255, "name": "white"}];

    function getProjectColorName(name, type) {
        name = name.replace(/[-_]/g, " ");
        name = name.replace(/([^a-zA-Z0-9\s])/g, "");
        if (name.indexOf(" ") === -1) {
            return name;
        }
        switch (type) {
            case "ios":
            case "osx":
                return name.replace(/\s(\w)/g, function (match, firstLetter) {
                    return firstLetter.toUpperCase();
                });
            case "web":
                return name.replace(/\s/gi, "-");
            case "android":
                return name.replace(/\s/gi, "_");
        }
    }

    var hexRegexp = /^([\dA-Fa-f])\1([\dA-Fa-f])\2([\dA-Fa-f])\3$/;

    function simplifyHex(hexfull) {
        if (hexRegexp.test(hexFull)) {
            return hexFull.charAt(0) +
                hexFull.charAt(2) +
                hexFull.charAt(4);
        }

        return hexFull;
    }

    function singleComponentBlend(c1, a1, c2, a2) {
        return Math.floor((c1 * a1 + c2 * a2 * (1 - a1)) / (a1 + a2 * (1 - a1)));
    }

    window.Zeplin.Color = function (colorData) {
        if (!colorData) {
            return;
        }

        //var color = Object.assign({}, colorData);
        var color = JSON.parse(JSON.stringify(colorData));;
        if (!("a" in color)) {
            color.a = 1;
        }

        Object.defineProperties(this, {
            r: {
                get: function () {
                    return color.r;
                },
                set: function (r) {
                    color.r = r;
                },
                enumerable: true
            },
            g: {
                get: function () {
                    return color.g;
                },
                set: function (g) {
                    color.g = g;
                },
                enumerable: true
            },
            b: {
                get: function () {
                    return color.b;
                },
                set: function (b) {
                    color.b = b;
                },
                enumerable: true
            },
            a: {
                get: function () {
                    return color.a;
                },
                set: function (a) {
                    color.a = a;
                },
                enumerable: true
            },
            name: {
                get: function () {
                    return color.name;
                },
                set: function (name) {
                    color.name = name;
                },
                enumerable: true
            },
            equals: {
                value: function (c) {
                    return color.r === c.r &&
                        color.g === c.g &&
                        color.b === c.b &&
                        color.a === c.a;
                }
            },
            hexBase: {
                value: function () {
                    var hexR = color.r.toString(16),
                        hexG = color.g.toString(16),
                        hexB = color.b.toString(16),
                        hexRFull = hexR.length === 1 ? "0" + hexR : hexR,
                        hexGFull = hexG.length === 1 ? "0" + hexG : hexG,
                        hexBFull = hexB.length === 1 ? "0" + hexB : hexB;

                    return hexRFull + hexGFull + hexBFull;
                }
            },
            toHexString: {
                value: function () {
                    return "#" + this.hexBase() +
                        (color.a === 1 ? "" : "   " + Math.round(color.a * 100) + "%");
                }
            },
            toARGBHexString: {
                value: function () {
                    var pre = "#";
                    if (color.a !== 1) {
                        var hexA = Math.round(color.a * 255).toString(16);
                        pre += hexA.length === 1 ? "0" + hexA : hexA;
                    }

                    return pre + this.hexBase();
                }
            },
            toRGBAString: {
                value: function () {
                    var rgb = color.r + " " + color.g + " " + color.b;

                    return color.a === 1 ?
                    "rgb " + rgb :
                    "rgba " + rgb + " " + (Math.round(color.a * 100) / 100);
                }
            },
            toPlatformString: {
                value: function (platform) {
                    switch (platform) {
                        case "android":
                            return this.toARGBHexString();

                        case "ios":
                        case "osx":
                            return this.toRGBAString();

                        case "web":
                            return this.toCSS();
                    }
                }
            },
            toCSS: {
                value: function () {
                    if (color.a === 1) {
                        return "#" + this.hexBase();
                    }

                    return "rgba(" +
                        color.r + ", " +
                        color.g + ", " +
                        color.b + ", " +
                        color.a.toFixed(1) + ")";
                }
            },
            toGradient: {
                value: function () {
                    var colorCSS = this.toCSS();
                    return "linear-gradient(" + colorCSS + ", " + colorCSS + ")";
                }
            },
            generateName: {
                value: function (type) {
                    var ndf = 0,
                        cl = -1,
                        df = -1;

                    for (var i = 0; i < colors.length; i++) {
                        if (color.r === colors[i].r && color.g === colors[i].g && color.b === colors[i].b) {
                            return getProjectColorName(colors[i].name, type);
                        }
                        var hsl = this.rgb2hsl(color);
                        var listColorHsl = this.rgb2hsl(colors[i]);
                        ndf = (Math.pow(color.r - colors[i].r, 2) + Math.pow(color.g - colors[i].g, 2) +
                            Math.pow(color.b - colors[i].b, 2)) + (Math.pow(hsl.h - listColorHsl.h, 2) + Math.pow(hsl.s -
                                listColorHsl.s, 2) + Math.pow(hsl.l - listColorHsl.l, 2)) * 2;

                        if (df < 0 || ndf < df) {
                            df = ndf;
                            cl = i;
                        }
                    }
                    return getProjectColorName(colors[cl].name, type);
                }
            },
            rgb2hsl: {
                value: function (color) {
                    var r = color.r / 255,
                        g = color.g / 255,
                        b = color.b / 255,
                        max = Math.max(r, g, b),
                        min = Math.min(r, g, b),
                        h, s, l = (max + min) / 2;

                    if (max == min) {
                        h = s = 0; // achromatic
                    } else {
                        var d = max - min;
                        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

                        switch (max) {
                            case r:
                                h = (g - b) / d + (g < b ? 6 : 0);
                                break;
                            case g:
                                h = (b - r) / d + 2;
                                break;
                            case b:
                                h = (r - g) / d + 4;
                                break;
                        }

                        h /= 6;
                    }

                    return {
                        h: Math.round(h * 255),
                        s: Math.round(s * 255),
                        l: Math.round(l * 255)
                    };
                }
            },
            blend: {
                value: function (c) {
                    return Zeplin.Color.blend(this, c);
                }
            }
        });
    };

    Zeplin.Color.NAMED_COLORS = CSS_NAMED_COLORS;

    Zeplin.Color.blend = function (c1, c2) {
        return new Zeplin.Color({
            r: singleComponentBlend(c1.r, c1.a, c2.r, c2.a),
            g: singleComponentBlend(c1.g, c1.a, c2.g, c2.a),
            b: singleComponentBlend(c1.b, c1.a, c2.b, c2.a),
            a: c1.a + c2.a * (1 - c1.a)
        });
    };
})();