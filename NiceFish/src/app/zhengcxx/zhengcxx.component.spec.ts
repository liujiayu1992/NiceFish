import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhengcxxComponent } from './zhengcxx.component';

describe('ZhengcxxComponent', () => {
  let component: ZhengcxxComponent;
  let fixture: ComponentFixture<ZhengcxxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhengcxxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhengcxxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
