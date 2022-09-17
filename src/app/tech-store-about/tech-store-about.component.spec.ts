import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStoreAboutComponent } from './tech-store-about.component';

describe('TechStoreAboutComponent', () => {
  let component: TechStoreAboutComponent;
  let fixture: ComponentFixture<TechStoreAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechStoreAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechStoreAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
