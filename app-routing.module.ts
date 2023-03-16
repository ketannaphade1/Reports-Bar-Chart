import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';

const routes: Routes = [
  { path: '', redirectTo: 'bar-chart', pathMatch: 'full' },
  { path: 'bar-chart', component:BarChartComponent },
 
 ];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
