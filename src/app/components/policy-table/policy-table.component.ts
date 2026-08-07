import { Component, Input } from '@angular/core';

export interface IPolicy {
  policyNumber: string;
  // policyHolder: string;
}


@Component({
  selector: 'app-policy-table',
  imports: [],
  templateUrl: './policy-table.component.html',
  styleUrl: './policy-table.component.scss',
})
export class PolicyTableComponent {
  // TODO: Add typing to this @Input() property to ensure that the data passed in is of the correct type. This will help prevent runtime errors and make the code more maintainable.
  @Input() policies: IPolicy[] = [];

}
