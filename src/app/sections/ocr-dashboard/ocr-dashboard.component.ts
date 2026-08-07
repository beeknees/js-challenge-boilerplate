import { Component } from '@angular/core';
import { PolicyTableComponent } from "../../components/policy-table/policy-table.component";

@Component({
  selector: 'app-ocr-dashboard',
  imports: [PolicyTableComponent],
  templateUrl: './ocr-dashboard.component.html',
  styleUrl: './ocr-dashboard.component.scss',
})
export class OcrDashboardComponent {

  // Mock data for demonstration purposes
  // This will eventually be replaced with the data from a csv file uploaded by the user
  public mockPolicies = [
    {
      policyNumber: '123456789',
      policyHolder: 'John Doe',
    },
    {
      policyNumber: '2349793245',
      policyHolder: 'Jane Doe',
    }
  ];


  public onFileUpload(event: any): void {
    const file = event.target.files[0];

    console.log('File uploaded:', file);

    
  }
}
