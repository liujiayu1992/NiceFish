import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShicxxComponent } from './shicxx.component';

describe('ShicxxComponent', () => {
  let component: ShicxxComponent;
  let fixture: ComponentFixture<ShicxxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShicxxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShicxxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
