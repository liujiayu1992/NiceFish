import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YidyyComponent } from './yidyy.component';

describe('YidyyComponent', () => {
  let component: YidyyComponent;
  let fixture: ComponentFixture<YidyyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YidyyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YidyyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
