import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyLeftComponent } from './body-left.component';

describe('BodyLeftComponent', () => {
  let component: BodyLeftComponent;
  let fixture: ComponentFixture<BodyLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyLeftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodyLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
