/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FoccoService } from './focco.service';

describe('Service: Focco', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoccoService]
    });
  });

  it('should ...', inject([FoccoService], (service: FoccoService) => {
    expect(service).toBeTruthy();
  }));
});
