import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteB2Component } from './componente-b2.component';

describe('ComponenteB2Component', () => {
  let component: ComponenteB2Component;
  let fixture: ComponentFixture<ComponenteB2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteB2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteB2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
