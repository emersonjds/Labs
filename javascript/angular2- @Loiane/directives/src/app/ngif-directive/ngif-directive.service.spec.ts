/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NgifDirectiveService } from './ngif-directive.service';

describe('NgifDirectiveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgifDirectiveService]
    });
  });

  it('should ...', inject([NgifDirectiveService], (service: NgifDirectiveService) => {
    expect(service).toBeTruthy();
  }));
});
