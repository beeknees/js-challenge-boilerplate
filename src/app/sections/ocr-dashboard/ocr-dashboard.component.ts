import { ChangeDetectorRef, Component } from '@angular/core';
import { IPolicy, PolicyTableComponent } from './components/policy-table/policy-table.component';
import { EValidationErrors } from './../../utils/validationErrors';

@Component({
  selector: 'app-ocr-dashboard',
  imports: [PolicyTableComponent],
  templateUrl: './ocr-dashboard.component.html',
  styleUrl: './ocr-dashboard.component.scss',
})
export class OcrDashboardComponent {

  public policies: IPolicy[] = [];
  public selectedFile: File | null = null;
  public hasError: boolean = false;
  public errorMsg: string = '';

  constructor(private cdr: ChangeDetectorRef) {}

  checkPolicyValidity(policy: string): boolean {
    let policyDigits = Array.from(policy, Number).reverse();
    let policyDigitsCollection: number[] = [];
    
    policyDigits.forEach((digit: number, index: number) => {
      let multipliedDigit = digit * (index + 1);
      policyDigitsCollection.push(multipliedDigit);
    });

    const result = policyDigitsCollection.reduce((acc, curr) => acc + curr, 0);

    const isDivisibleBy11 = (num: number) => num % 11 === 0;

    return isDivisibleBy11(result);

  }

  onSelectedFile(file: Event): void {
    const fileInput = file.target as HTMLInputElement;
    const maxFileSize = 2 * 1024 * 1024; // 2MB - can this be set in a config file or environment variable? Or is it better to hardcode it here?

    
    // Validate that files actually exist in the selection payload
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];

      const reader = new FileReader();

      if (this.selectedFile.size > maxFileSize) {
        this.hasError = true;
        this.errorMsg = EValidationErrors.FILE_SIZE_ERROR;
        console.error('File size exceeds the limit');
        return;
      }

      // TODO: adjust once not testing file type
      if (this.selectedFile.type !== 'text/csv' && this.selectedFile.type !== 'video/mp4') {
        this.hasError = true;
        this.errorMsg = EValidationErrors.FILE_TYPE_ERROR;
        console.error('Invalid file type');
      }
      
      reader.onload = () => {
      // CSV data: 457500000,664371495,333333333,457508000,555555555,666666666,777777777,861100036,861100036,123456789
        const result = reader.result;
        let newResultsArray: IPolicy[] = []

        if (typeof result === 'string') {
          const resultItems = result?.split(',');
          // this.policies = resultItems.map((policyNumber) => ({ policyNumber }));


          resultItems.map((item) => {
            // console.log('item', item, {policyNumber: item, isValid: this.checkPolicyValidity(item)});
            newResultsArray.push({
              policyNumber: item,
              isValid: this.checkPolicyValidity(item)
            })
          });

          this.policies = newResultsArray;
        }

        this.cdr.detectChanges(); // Manually trigger change detection to update the view and resolve issues with displaying old csv data.
      }

      reader.readAsText(fileInput.files[0]);
    }
  }
}
