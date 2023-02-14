import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelAutoComponent } from './model-auto.component';

describe('ModelAutoComponent', () => {
  let component: ModelAutoComponent;
  let fixture: ComponentFixture<ModelAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelAutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
