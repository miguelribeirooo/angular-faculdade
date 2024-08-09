import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteB1Component } from './componente-b1/componente-b1.component';
import { ComponenteB2Component } from './componente-b2/componente-b2.component';

const routes: Routes = [
  { path: 'child1', component: ComponenteB1Component },
  { path: 'child2', component: ComponenteB2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloBRoutingModule { }