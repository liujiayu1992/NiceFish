import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XinwwhComponent } from './xinwwh.component';

describe('XinwwhComponent', () => {
  let component: XinwwhComponent;
  let fixture: ComponentFixture<XinwwhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XinwwhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XinwwhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
