import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuibfxComponent } from './duibfx.component';

describe('DuibfxComponent', () => {
  let component: DuibfxComponent;
  let fixture: ComponentFixture<DuibfxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuibfxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuibfxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
