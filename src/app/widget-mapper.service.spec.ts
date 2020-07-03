import { TestBed } from '@angular/core/testing';

import { WidgetMapperService } from './widget-mapper.service';

describe('WidgetMapperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WidgetMapperService = TestBed.get(WidgetMapperService);
    expect(service).toBeTruthy();
  });
});
