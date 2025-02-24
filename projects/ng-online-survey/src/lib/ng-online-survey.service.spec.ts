import { TestBed } from '@angular/core/testing';

import { NgOnlineSurveyService } from './ng-online-survey.service';

describe('NgOnlineSurveyService', () => {
  let service: NgOnlineSurveyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgOnlineSurveyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
