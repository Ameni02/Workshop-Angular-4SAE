import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './Compnents/residences/residences.component';
import { ResidenceDetailsComponent } from './Compnents/residences/residence-details/residence-details.component';
import { NotFoundComponent } from './Compnents/not-found/not-found.component';
import { AddResidenceComponent } from './Compnents/residences/add-residence/add-residence.component';
import { AddApartmentComponent } from './Compnents/apartments/add-apartment/add-apartment.component';
import { ApartmentsComponent } from './Compnents/apartments/apartment/apartment.component';
import { ApartmentsByResidenceComponent } from './Compnents/apartments/apartment-by-residence/apartment-by-residence.component';

const routes: Routes = [
  { path: '', redirectTo: '/residences', pathMatch: 'full' },
  { path: 'residences', component: ResidencesComponent },
  { path: 'residence/add', component: AddResidenceComponent },
  { path: 'residence/show/:id', component: ApartmentsByResidenceComponent },
  { path: 'residence/details/:id', component: ResidenceDetailsComponent },
  { path: 'apartments', component: ApartmentsComponent },
  { path: 'apartment/add/:idR', component: AddApartmentComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
