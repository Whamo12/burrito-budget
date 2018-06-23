import { TestBed, inject } from '@angular/core/testing';

import { AppService } from './app.service';
import { HttpModule } from '@angular/http';

describe('AppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppService],
      imports: [
        HttpModule
      ]
    });
  });

  it('should be created', inject([AppService], (service: AppService) => {
    expect(service).toBeTruthy();
  }));
});
