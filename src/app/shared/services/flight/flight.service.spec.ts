import { TestBed, inject } from '@angular/core/testing';

import { .\Flight\FlightService } from './.\flight\flight.service';

describe('.\Flight\FlightService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [.\Flight\FlightService]
    });
  });

  it('should be created', inject([.\Flight\FlightService], (service: .\Flight\FlightService) => {
    expect(service).toBeTruthy();
  }));
});
