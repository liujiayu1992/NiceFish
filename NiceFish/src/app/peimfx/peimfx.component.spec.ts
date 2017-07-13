import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeimfxComponent } from './peimfx.component';

describe('PeimfxComponent', () => {
  let component: PeimfxComponent;
  let fixture: ComponentFixture<PeimfxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeimfxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeimfxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
