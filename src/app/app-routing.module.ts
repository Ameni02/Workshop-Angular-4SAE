import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './Compnents/residences/residences.component';
import { ResidenceDetailsComponent } from './Compnents/residences/residence-details/residence-details.component';
import { NotFoundComponent } from './Compnents/not-found/not-found.component';
import { AddResidenceComponent } from './Compnents/residences/add-residence/add-residence.component';
import { ApartmentByResidenceComponent } from './Compnents/apartments/apartment-by-residence/apartment-by-residence.component';
import { ApartmentComponent } from './Compnents/apartments/apartment/apartment.component';
import { AddApartmentComponent } from './Compnents/apartments/add-apartment/add-apartment.component';

const routes: Routes = [
  {path:'residences',component:ResidencesComponent},
  {path:'apartments',component:ApartmentComponent},
  {path:'add',component: AddApartmentComponent },
  {path:'', redirectTo:'/residences', pathMatch:'full'},
  {path:'residence/add',component:AddResidenceComponent},
  {path:'details/:id',component: ResidenceDetailsComponent },
  {path:'appartementbyresidence/:id',component: ApartmentByResidenceComponent },
  {path:'**', component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
