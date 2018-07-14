import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPollComponent } from './team-poll.component';

describe('TeamPollComponent', () => {
  let component: TeamPollComponent;
  let fixture: ComponentFixture<TeamPollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
