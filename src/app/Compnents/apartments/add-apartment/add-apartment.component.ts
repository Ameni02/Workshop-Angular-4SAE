import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {
  apartment: FormGroup=new FormGroup({
    apartNum: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    floorNum: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    surface: new FormControl('', [Validators.required, Validators.min(1)]),
    terrace: new FormControl(false), 
    surfaceterrace: new FormControl('', [Validators.required, Validators.min(0)]),
    category: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  get apartNum() {
    return this.apartment.get('apartNum');
  }
  get floorNum() {
    return this.apartment.get('floorNum');
  }
  get surface() {
    return this.apartment.get('surface');
  }
  get terrace() {
    return this.apartment.get('terrace');
  }
  get surfaceterrace() {
    return this.apartment.get('surfaceterrace');
  }
  get category() {
    return this.apartment.get('category');
  }

  add() {
    if (this.apartment.valid) {
      console.log(this.apartment.value);
    }
  }
}
