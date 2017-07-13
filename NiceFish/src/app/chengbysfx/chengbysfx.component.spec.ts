import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChengbysfxComponent } from './chengbysfx.component';

describe('ChengbybfxComponent', () => {
  let component: ChengbysfxComponent;
  let fixture: ComponentFixture<ChengbysfxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChengbysfxComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChengbysfxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
