import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonghcxComponent } from './zonghcx.component';

describe('ZonghcxComponent', () => {
  let component: ZonghcxComponent;
  let fixture: ComponentFixture<ZonghcxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonghcxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonghcxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
