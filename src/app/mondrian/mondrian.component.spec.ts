import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MondrianComponent } from './mondrian.component';

describe('MondrianComponent', () => {
  let component: MondrianComponent;
  let fixture: ComponentFixture<MondrianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MondrianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MondrianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
