import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-policy-table',
  imports: [],
  templateUrl: './policy-table.component.html',
  styleUrl: './policy-table.component.scss',
})
export class PolicyTableComponent {
  @Input() policies: any[] = [];

}
