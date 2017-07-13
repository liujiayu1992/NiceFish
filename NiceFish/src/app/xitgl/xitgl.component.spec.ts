import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XitglComponent } from './xitgl.component';

describe('XitglComponent', () => {
  let component: XitglComponent;
  let fixture: ComponentFixture<XitglComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XitglComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XitglComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
