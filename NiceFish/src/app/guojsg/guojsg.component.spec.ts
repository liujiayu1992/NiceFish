import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuojsgComponent } from './guojsg.component';

describe('GuojsgComponent', () => {
  let component: GuojsgComponent;
  let fixture: ComponentFixture<GuojsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuojsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuojsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
