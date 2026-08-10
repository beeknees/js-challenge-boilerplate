import { ChangeDetectorRef, Component } from '@angular/core';
import { IPolicy, PolicyTableComponent } from './components/policy-table/policy-table.component';

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
  public selectedFile: File | null = null;


  constructor(private cdr: ChangeDetectorRef) {}

  onSelectedFile(file: Event): void {
    const fileInput = file.target as HTMLInputElement;
    const maxFileSize = 2 * 1024 * 1024; // 2MB TODO: split this out into an input

    
    // Validate that files actually exist in the selection payload
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];

      const reader = new FileReader();

      if (this.selectedFile.size > maxFileSize) {
        console.error('File size exceeds the limit');
        // TODO: show error message to user
        return;
      }

      // TODO: adjust once not testing file type
      if (this.selectedFile.type !== 'text/csv' && this.selectedFile.type !== 'video/mp4') {
        console.error('Invalid file type');
      }
      
      reader.onload = () => {
        console.log('File content read successfully:', typeof reader.result, reader.result);
      // CSV data: 457500000,664371495,333333333,457508000,555555555,666666666,777777777,861100036,861100036,123456789

        const result = reader.result;

        if (typeof result === 'string') {
          const resultItems = result?.split(',');
          this.policies = resultItems.map((policyNumber) => ({ policyNumber }));
        }

        console.log('Policies:', this.policies);
        this.cdr.detectChanges(); // Manually trigger change detection to update the view and resolve issues with displaying old csv data.
      }

      reader.readAsText(fileInput.files[0]);
    }
  }
}
