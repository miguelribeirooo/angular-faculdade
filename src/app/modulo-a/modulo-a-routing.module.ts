import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteA1Component } from './componente-a1/componente-a1.component';
import { ComponenteA2Component } from './componente-a2/componente-a2.component';

const routes: Routes = [
  { path: 'child1', component: ComponenteA1Component },
  { path: 'child2', component: ComponenteA2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloARoutingModule { }