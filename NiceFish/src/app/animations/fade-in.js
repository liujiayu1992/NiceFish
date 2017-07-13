"use strict";
exports.__esModule = true;
var animations_1 = require("@angular/animations");
exports.fadeIn = animations_1.trigger('fadeIn', [
    animations_1.transition("void => *", [
        animations_1.style({ opacity: 0 }),
        animations_1.animate(600, animations_1.style({ opacity: 1 }))
    ]),
    animations_1.transition("* => void", [
        animations_1.animate(600, animations_1.style({ opacity: 0 }))
    ])
]);
//# sourceMappingURL=fade-in.js.map