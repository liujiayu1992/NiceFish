"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var amchart_component_1 = require("./amchart.component");
describe('AmchartComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [amchart_component_1.AmchartComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(amchart_component_1.AmchartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=amchart.component.spec.js.map