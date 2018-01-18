import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialPathComponent } from './initial-path.component';

describe('InitialPathComponent', () => {
  let component: InitialPathComponent;
  let fixture: ComponentFixture<InitialPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
