import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RucrmzbComponent } from './rucrmzb.component';

describe('RucrmzbComponent', () => {
  let component: RucrmzbComponent;
  let fixture: ComponentFixture<RucrmzbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RucrmzbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RucrmzbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
