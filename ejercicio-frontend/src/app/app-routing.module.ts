import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoComponent } from './components/auto/auto.component';
import { IndexComponent } from './components/index/index.component';
import { AutoFormComponent } from './components/auto-form/auto-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent},
  { path: 'add', component: AutoFormComponent},
  { path: 'autos', component: AutoComponent },
  { path: 'autos/:placa', component: AutoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
