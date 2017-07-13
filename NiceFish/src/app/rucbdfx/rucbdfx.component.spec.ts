import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RucbdfxComponent } from './rucbdfx.component';

describe('RucbdfxComponent', () => {
  let component: RucbdfxComponent;
  let fixture: ComponentFixture<RucbdfxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RucbdfxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RucbdfxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
