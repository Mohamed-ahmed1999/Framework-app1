import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendproductComponent } from './recommendproduct.component';

describe('RecommendproductComponent', () => {
  let component: RecommendproductComponent;
  let fixture: ComponentFixture<RecommendproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendproductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
