import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YanhmtyjComponent } from './yanhmtyj.component';

describe('YanhmtyjComponent', () => {
  let component: YanhmtyjComponent;
  let fixture: ComponentFixture<YanhmtyjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YanhmtyjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YanhmtyjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
