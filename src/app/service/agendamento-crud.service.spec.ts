import { TestBed } from '@angular/core/testing';

import { AgendamentoCrudService } from './agendamento-crud.service';

describe('AgendamentoCrudService', () => {
  let service: AgendamentoCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgendamentoCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
