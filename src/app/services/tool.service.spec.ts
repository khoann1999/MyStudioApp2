/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ToolService } from './tool.service';

describe('Service: Tool', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToolService]
    });
  });

  it('should ...', inject([ToolService], (service: ToolService) => {
    expect(service).toBeTruthy();
  }));
});
