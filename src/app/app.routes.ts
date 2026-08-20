import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OcrDashboardComponent } from './sections/ocr-dashboard/ocr-dashboard.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'dashboard', component: OcrDashboardComponent } // in case there needs to be a separate URL for the OCR section/page
];
