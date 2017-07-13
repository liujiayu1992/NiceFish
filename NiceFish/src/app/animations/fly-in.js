"use strict";
exports.__esModule = true;
var animations_1 = require("@angular/animations");
exports.flyIn = animations_1.trigger('flyIn', [
    animations_1.state('in', animations_1.style({ transform: 'translateX(0)' })),
    animations_1.transition('void => *', [
        animations_1.animate(300, animations_1.keyframes([
            animations_1.style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
            animations_1.style({ opacity: 1, transform: 'translateX(25px)', offset: 0.3 }),
            animations_1.style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
        ]))
    ]),
    animations_1.transition('* => void', [
        animations_1.animate(300, animations_1.keyframes([
            animations_1.style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
            animations_1.style({ opacity: 1, transform: 'translateX(-25px)', offset: 0.7 }),
            animations_1.style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
        ]))
    ])
]);
//# sourceMappingURL=fly-in.js.map