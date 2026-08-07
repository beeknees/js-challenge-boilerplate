import { Component } from '@angular/core';
import { IPolicy, PolicyTableComponent } from "../../components/policy-table/policy-table.component";

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

  public policies: IPolicy[] = [];


  // TODO: figure out why the file needs to be uploaded twice before the data is displayed in the table. This could be due to a change detection issue or a problem with how the data is being passed to the component.

  public onFileUpload(event: any): void {
    const file = event.target.files[0];

    // if (!file) {
    //   console.error('No file selected');
    //   return;
    // }

    const reader = new FileReader();
    // let csvData: string | ArrayBuffer | null = null;
    let csvData: any; // TODO: type correctly to avoid using 'any'

    // console.log('File uploaded:', file);
    // CSV data: 457500000,664371495,333333333,457508000,555555555,666666666,777777777,861100036,861100036,123456789

    reader.onload = () => {
      // TODO: clear out old data to avoid duplicates when uploading a new file
      this.policies = [];

      csvData = reader.result;
      let csvDataRow = csvData?.split(',');


      csvDataRow?.forEach((policyNumber: string) => {
        this.policies.push({ policyNumber });
      });

      console.log('CSV data:', csvData);
      console.log('Policies:', this.policies);

    }

    reader.readAsText(file);

  }
}
