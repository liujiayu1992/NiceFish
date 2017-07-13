import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonghyjComponent } from './zonghyj.component';

describe('ZonghyjComponent', () => {
  let component: ZonghyjComponent;
  let fixture: ComponentFixture<ZonghyjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonghyjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonghyjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
