import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteB1Component } from './componente-b1.component';

describe('ComponenteB1Component', () => {
  let component: ComponenteB1Component;
  let fixture: ComponentFixture<ComponenteB1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteB1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteB1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
