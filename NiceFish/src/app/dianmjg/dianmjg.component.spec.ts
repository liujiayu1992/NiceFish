import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DianmjgComponent } from './dianmjg.component';

describe('DianmjgComponent', () => {
  let component: DianmjgComponent;
  let fixture: ComponentFixture<DianmjgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DianmjgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DianmjgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
