import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson25Component } from './lesson25.component';

describe('Lesson25Component', () => {
  let component: Lesson25Component;
  let fixture: ComponentFixture<Lesson25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson25Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lesson25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
