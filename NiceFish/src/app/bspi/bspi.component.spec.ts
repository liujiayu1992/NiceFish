import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BspiComponent } from './bspi.component';

describe('BspiComponent', () => {
  let component: BspiComponent;
  let fixture: ComponentFixture<BspiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BspiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BspiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
