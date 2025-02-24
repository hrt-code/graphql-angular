import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnlineSurveyComponent } from './ng-online-survey.component';

describe('NgOnlineSurveyComponent', () => {
  let component: NgOnlineSurveyComponent;
  let fixture: ComponentFixture<NgOnlineSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgOnlineSurveyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgOnlineSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
