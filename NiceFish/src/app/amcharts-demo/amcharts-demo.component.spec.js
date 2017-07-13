"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var amcharts_demo_component_1 = require("./amcharts-demo.component");
describe('AmchartsDemoComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [amcharts_demo_component_1.AmchartsDemoComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(amcharts_demo_component_1.AmchartsDemoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=amcharts-demo.component.spec.js.map