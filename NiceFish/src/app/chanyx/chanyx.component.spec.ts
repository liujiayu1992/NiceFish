import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanyxComponent } from './chanyx.component';

describe('ChanyxComponent', () => {
  let component: ChanyxComponent;
  let fixture: ComponentFixture<ChanyxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChanyxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChanyxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
