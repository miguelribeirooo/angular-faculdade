import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteA1Component } from './componente-a1.component';

describe('ComponenteA1Component', () => {
  let component: ComponenteA1Component;
  let fixture: ComponentFixture<ComponenteA1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteA1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteA1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
