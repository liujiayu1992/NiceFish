import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RanlzbzhzsyfxComponent } from './ranlzbzhzsyfx.component';

describe('RanlzbzhzsyfxComponent', () => {
  let component: RanlzbzhzsyfxComponent;
  let fixture: ComponentFixture<RanlzbzhzsyfxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RanlzbzhzsyfxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RanlzbzhzsyfxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
