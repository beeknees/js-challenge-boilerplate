import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyTableComponent } from './policy-table.component';

describe('PolicyTableComponent', () => {
  let component: PolicyTableComponent;
  let fixture: ComponentFixture<PolicyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolicyTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders each policy with its validation result', () => {
    component.policies = [
      { policyNumber: '457508000', isValid: true },
      { policyNumber: '664371495', isValid: false },
    ];
    fixture.detectChanges();

    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    const firstRow = rows[0] as HTMLTableRowElement;
    const secondRow = rows[1] as HTMLTableRowElement;

    expect(rows.length).toBe(1);
    expect(firstRow.textContent).toContain('457508000');
    expect(firstRow.textContent).toContain('Valid');
    expect(secondRow.textContent).toContain('664371495');
    expect(secondRow.textContent).toContain('Error');
  });
});
