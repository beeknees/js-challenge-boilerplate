import { Component, ChangeDetectionStrategy } from '@angular/core';
import { OcrDashboardComponent } from './sections/ocr-dashboard/ocr-dashboard.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: true,
    imports: [OcrDashboardComponent]
})
export class AppComponent {
  title = 'kin-ocr';
}
