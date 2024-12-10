import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidencesComponent } from './Compnents/residences/residences.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './Compnents/nav-bar/nav-bar.component';
import { FooterComponent } from './Compnents/footer/footer.component';
import { NotFoundComponent } from './Compnents/not-found/not-found.component';
import { ApartmentByResidenceComponent } from './Compnents/apartments/apartment-by-residence/apartment-by-residence.component';
import { ResidenceDetailsComponent } from './Compnents/residences/residence-details/residence-details.component';

import { AddResidenceComponent } from './Compnents/residences/add-residence/add-residence.component';
import { AddApartmentComponent } from './Compnents/apartments/add-apartment/add-apartment.component';
import { ApartmentComponent } from './Compnents/apartments/apartment/apartment.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent,
    NavBarComponent,
    FooterComponent,
    NotFoundComponent,
    ApartmentByResidenceComponent,
    ResidenceDetailsComponent,
    AddResidenceComponent,
    AddApartmentComponent,
    ApartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
