import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteA2Component } from './componente-a2.component';

describe('ComponenteA2Component', () => {
  let component: ComponenteA2Component;
  let fixture: ComponentFixture<ComponenteA2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteA2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteA2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
