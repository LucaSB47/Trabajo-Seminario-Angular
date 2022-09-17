import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStoreCmptsComponent } from './tech-store-cmpts.component';

describe('TechStoreCmptsComponent', () => {
  let component: TechStoreCmptsComponent;
  let fixture: ComponentFixture<TechStoreCmptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechStoreCmptsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechStoreCmptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
