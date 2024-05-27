/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EventBusServiceService } from './EventBusService.service';

describe('Service: EventBusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventBusServiceService]
    });
  });

  it('should ...', inject([EventBusServiceService], (service: EventBusServiceService) => {
    expect(service).toBeTruthy();
  }));
});
