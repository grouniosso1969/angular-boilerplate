import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheBienComponent } from './fiche-bien.component';

describe('FicheBienComponent', () => {
  let component: FicheBienComponent;
  let fixture: ComponentFixture<FicheBienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FicheBienComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FicheBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
