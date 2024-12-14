import { Component } from '@angular/core';
import { Apartment } from '../../../core/models/apartment';
import { ApartmentService } from 'src/app/service/apartment.service';
import { ResidenceService } from '../../../service/residence.service';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentsComponent {
  apartments: Apartment[] = []
  constructor(private apartmentService: ApartmentService,private residenceService:ResidenceService) {
    this.apartments = this.apartmentService.listApatments;
  }
  getResidence(idr: number) {
    return this.residenceService.listResidences.find((r) => r.id == idr)!.name;
  }
}