import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCategoryComponent } from './body-category.component';

describe('BodyCategoryComponent', () => {
  let component: BodyCategoryComponent;
  let fixture: ComponentFixture<BodyCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodyCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
