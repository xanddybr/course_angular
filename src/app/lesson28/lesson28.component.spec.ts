import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson28Component } from './lesson28.component';

describe('Lesson28Component', () => {
  let component: Lesson28Component;
  let fixture: ComponentFixture<Lesson28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson28Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lesson28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
