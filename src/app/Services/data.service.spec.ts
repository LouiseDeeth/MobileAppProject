import { TestBed } from '@angular/core/testing';

import { IrelandNewsService, AustraliaNewsService, IrelandSportService, AustraliaSportService } from './data.service';

describe('IrelandNewsService', () => {
  let service: IrelandNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IrelandNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

describe('AustraliaNewsService', () => {
  let service: AustraliaNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AustraliaNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

describe('IrelandSportService', () => {
  let service: IrelandSportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IrelandSportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

describe('AustraliaSportService', () => {
  let service: AustraliaSportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AustraliaSportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});