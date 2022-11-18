import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonutDetailComponent } from './donut-detail/donut-detail.component';
import { DonutsComponent } from './donuts/donuts.component';
import { FamousPeopleComponent } from './famous-people/famous-people.component';
import { FamousPersonDetailComponent } from './famous-person-detail/famous-person-detail.component';

const routes: Routes = [
    {path:"donut-detail/:id", component: DonutDetailComponent},
    {path:"donut", component: DonutsComponent},
    {path: "famous-people", component: FamousPeopleComponent},
    {path: "famous-person-detail/:i", component: FamousPersonDetailComponent},
    { path: '', redirectTo: '/donut', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
