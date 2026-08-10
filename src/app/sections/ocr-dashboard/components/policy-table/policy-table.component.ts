import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

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
  @Input() policies: IPolicy[] = [];

  // ngOnInit() {
  //   console.log('ONINIT policies:', this.policies);
  // }

  // ngOnChanges(changes: SimpleChanges<PolicyTableComponent>) {
  //   // changes.userId contains the old and new value.
  //   console.log('policies CHANGED:', changes.policies);
  // }

}
