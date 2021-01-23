import { TestBed } from '@angular/core/testing';

import { TypeHandlerService } from './type-handler.service';

describe('TypeHandlerService', () => {
  let service: TypeHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
