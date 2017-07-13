import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RucrlzbComponent } from './rucrlzb.component';

describe('RucrlzbComponent', () => {
  let component: RucrlzbComponent;
  let fixture: ComponentFixture<RucrlzbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RucrlzbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RucrlzbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
