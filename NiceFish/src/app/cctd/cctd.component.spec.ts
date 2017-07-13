import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CctdComponent } from './cctd.component';

describe('CctdComponent', () => {
  let component: CctdComponent;
  let fixture: ComponentFixture<CctdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CctdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CctdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
