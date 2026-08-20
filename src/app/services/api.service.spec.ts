/// <reference types="jasmine" />

import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('posts policy objects to the API endpoint', () => {
    const policies = [{ policyNumber: '123456789', isValid: true }];

    service.postPolicyObjects(policies).subscribe();

    const request = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/posts');
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(policies);
    request.flush({ id: 1 });
  });
});
