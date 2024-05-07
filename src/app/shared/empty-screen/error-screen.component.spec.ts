import { TestBed } from '@angular/core/testing';

import { EmptyScreenComponent } from './empty-screen.component';

describe('EmptyScreenComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmptyScreenComponent],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(EmptyScreenComponent);
    const component = fixture.componentInstance;

    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
