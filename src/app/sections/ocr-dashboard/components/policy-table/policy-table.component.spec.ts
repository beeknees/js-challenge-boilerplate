import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PolicyTableComponent, IPolicy } from './policy-table.component';

describe('PolicyTableComponent', () => {
  let component: PolicyTableComponent;
  let fixture: ComponentFixture<PolicyTableComponent>;

  const mockPolicies: IPolicy[] = [
    { policyNumber: '457508000', isValid: true },
    { policyNumber: '664371495', isValid: false },
    { policyNumber: '123456789', isValid: true },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolicyTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PolicyTableComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should default to an empty policies array', () => {
    fixture.detectChanges();
    expect(component.policies).toEqual([]);
  });

  it('should render no rows when policies is empty', () => {
    component.policies = [];
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(0);
  });

  it('should render one row per policy', () => {
    component.policies = mockPolicies;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(mockPolicies.length);
  });

  it('should render the 1-based index for each row', () => {
    component.policies = mockPolicies;
    fixture.detectChanges();

    const indexCells = fixture.debugElement.queryAll(By.css('tbody tr td:first-child .isHiddenSmall'));
    const indexValues = indexCells.map((cell) => cell.nativeElement.textContent.trim());

    expect(indexValues).toEqual(['1', '2', '3']);
  });

  it('should render each policy number', () => {
    component.policies = mockPolicies;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    rows.forEach((row, i) => {
      const policyCell = row.query(By.css('td:nth-child(2)'));
      expect(policyCell.nativeElement.textContent).toContain(mockPolicies[i].policyNumber);
    });
  });

  it('should show a success badge with "Valid" for valid policies', () => {
    component.policies = [{ policyNumber: '457508000', isValid: true }];
    fixture.detectChanges();

    const successEl = fixture.debugElement.query(By.css('.hdg--success-msg'));
    const errorEl = fixture.debugElement.query(By.css('.hdg--error-msg'));

    expect(successEl).toBeTruthy();
    expect(successEl.nativeElement.textContent.trim()).toBe('Valid');
    expect(errorEl).toBeFalsy();
  });

  it('should show an error badge with "Error" for invalid policies', () => {
    component.policies = [{ policyNumber: '664371495', isValid: false }];
    fixture.detectChanges();

    const successEl = fixture.debugElement.query(By.css('.hdg--success-msg'));
    const errorEl = fixture.debugElement.query(By.css('.hdg--error-msg'));

    expect(errorEl).toBeTruthy();
    expect(errorEl.nativeElement.textContent.trim()).toBe('Error');
    expect(successEl).toBeFalsy();
  });

  it('should render a mix of valid and error badges matching each policy', () => {
    component.policies = mockPolicies;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, i) => {
      const success = row.query(By.css('.hdg--success-msg'));
      const error = row.query(By.css('.hdg--error-msg'));

      if (mockPolicies[i].isValid) {
        expect(success).toBeTruthy();
        expect(error).toBeFalsy();
      } else {
        expect(error).toBeTruthy();
        expect(success).toBeFalsy();
      }
    });
  });

  it('should render the correct table headers', () => {
    fixture.detectChanges();

    const headers = fixture.debugElement.queryAll(By.css('thead th'));
    const headerTexts = headers.map((h) => h.nativeElement.textContent.trim());

    expect(headerTexts[1]).toBe('Policy Number');
    expect(headerTexts[2]).toBe('Result');
  });

  it('should update rendered rows when the policies input changes', () => {
    component.policies = [...mockPolicies]; // shallow copy, not the shared reference
    fixture.detectChanges();
    console.log('length at assertion:', component.policies.length, JSON.stringify(component.policies));
    expect(fixture.debugElement.queryAll(By.css('tbody tr')).length).toBe(mockPolicies.length);
  });
});