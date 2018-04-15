import { TestBed, inject } from '@angular/core/testing';

import { ProductGuard.ServiceService } from './product-guard.service.service';

describe('ProductGuard.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductGuard.ServiceService]
    });
  });

  it('should be created', inject([ProductGuard.ServiceService], (service: ProductGuard.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
