import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceActionListComponent } from './experience-action-list.component';

describe('ExperienceActionListComponent', () => {
  let component: ExperienceActionListComponent;
  let fixture: ComponentFixture<ExperienceActionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceActionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceActionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
