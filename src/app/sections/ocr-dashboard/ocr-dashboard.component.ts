import { Component } from '@angular/core';
import { PolicyTableComponent } from "../../components/policy-table/policy-table.component";

@Component({
  selector: 'app-ocr-dashboard',
  imports: [PolicyTableComponent],
  templateUrl: './ocr-dashboard.component.html',
  styleUrl: './ocr-dashboard.component.scss',
})
export class OcrDashboardComponent {

  public mockPolicies = [
    {
      policyNumber: '123456789',
      policyHolder: 'John Doe',
    },
    {
      policyNumber: '123456789',
      policyHolder: 'John Doe',
    }
  ];

}
