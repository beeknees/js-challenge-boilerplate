import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { OcrDashboardComponent } from './ocr-dashboard.component';
import { ApiService } from '../../services/api.service';

describe('OcrDashboardComponent', () => {
  let component: OcrDashboardComponent;
  let fixture: ComponentFixture<OcrDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OcrDashboardComponent],
      providers: [{
        provide: ApiService,
        useValue: { postPolicyObjects: jasmine.createSpy().and.returnValue(of({})) },
      }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(OcrDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('submits the parsed policies to the API service', () => {
    const apiService = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
    const policies = [{ policyNumber: '123456789', isValid: true }];
    component.policies = policies;

    component.onSubmitPolicies();

    expect(apiService.postPolicyObjects).toHaveBeenCalledWith(policies);
  });
});
