import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShouhczsComponent } from './shouhczs.component';

describe('ShouhczsComponent', () => {
  let component: ShouhczsComponent;
  let fixture: ComponentFixture<ShouhczsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShouhczsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShouhczsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
