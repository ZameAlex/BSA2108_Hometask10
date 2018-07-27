import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewDetailsComponent } from './crew-details.component';

describe('CrewDetailsComponent', () => {
  let component: CrewDetailsComponent;
  let fixture: ComponentFixture<CrewDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
