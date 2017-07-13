"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var grid_demo_component_1 = require("./grid-demo.component");
describe('GridDemoComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [grid_demo_component_1.GridDemoComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(grid_demo_component_1.GridDemoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=grid-demo.component.spec.js.map