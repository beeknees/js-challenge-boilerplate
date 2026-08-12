import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcrDashboardComponent } from './ocr-dashboard.component';

describe('OcrDashboardComponent', () => {
  let component: OcrDashboardComponent;
  let fixture: ComponentFixture<OcrDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OcrDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OcrDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
