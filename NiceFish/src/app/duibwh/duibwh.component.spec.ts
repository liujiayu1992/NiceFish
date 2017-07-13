import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuibwhComponent } from './duibwh.component';

describe('DuibwhComponent', () => {
  let component: DuibwhComponent;
  let fixture: ComponentFixture<DuibwhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuibwhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuibwhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
