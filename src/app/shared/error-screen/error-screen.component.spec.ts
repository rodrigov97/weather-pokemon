import { TestBed } from '@angular/core/testing';

import { ErrorScreenComponent } from './error-screen.component';

describe('ErrorScreenComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorScreenComponent],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(ErrorScreenComponent);
    const component = fixture.componentInstance;

    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
