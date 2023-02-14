import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsListsComponent } from './produits-lists.component';

describe('ProduitsListsComponent', () => {
  let component: ProduitsListsComponent;
  let fixture: ComponentFixture<ProduitsListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitsListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitsListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
