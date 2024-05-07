import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesComponent } from './types.component';

describe('TypesComponent', () => {
  let component: TypesComponent;
  let fixture: ComponentFixture<TypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesComponent);
    component = fixture.componentInstance;

    component.type = 'grass';

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render grass type icon', () => {
    const grassComponent = fixture.nativeElement.querySelector('.grass');
    const textContent = grassComponent.textContent.trim();

    expect(component.type).toEqual('grass');
    expect(grassComponent).toBeTruthy();
    expect(textContent).toEqual('Grama');
  });
});
