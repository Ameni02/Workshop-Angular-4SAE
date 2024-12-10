import { Component } from '@angular/core';
import { Apartment } from '../../core/models/apartment';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css'],
})
export class ApartmentComponent {
  apartments: Apartment[] = [
    {
      apartNum: 111,
      floorNum: 1,
      surface: 80,
      terrace: true,
      surfaceterrace: 9,
      category: 'Haut Standing ',
      ResidenceId: 1,
    },
    {
      apartNum: 222,
      floorNum: 2,
      surface: 70,
      terrace: false,
      surfaceterrace: 0,
      category: 'Standard',
      ResidenceId: 1,
    },
    {
      apartNum: 333,
      floorNum: 3,
      surface: 88,
      terrace: true,
      surfaceterrace: 9,
      category: 'Haut Standing',
      ResidenceId: 2,
    },
  ];
}
