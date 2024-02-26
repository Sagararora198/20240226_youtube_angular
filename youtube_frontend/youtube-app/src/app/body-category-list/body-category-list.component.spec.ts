import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCategoryListComponent } from './body-category-list.component';

describe('BodyCategoryListComponent', () => {
  let component: BodyCategoryListComponent;
  let fixture: ComponentFixture<BodyCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyCategoryListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodyCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
