import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewDeckComponent } from './create-new-deck.component';

describe('CreateNewDeckComponent', () => {
  let component: CreateNewDeckComponent;
  let fixture: ComponentFixture<CreateNewDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNewDeckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateNewDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
