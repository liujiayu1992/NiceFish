import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShouyglComponent } from './shouygl.component';

describe('ShouyglComponent', () => {
  let component: ShouyglComponent;
  let fixture: ComponentFixture<ShouyglComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShouyglComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShouyglComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
