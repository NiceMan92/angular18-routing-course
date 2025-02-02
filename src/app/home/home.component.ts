import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from '../shared/vehicle.service';

@Component({
    selector: 'app-home',
    imports: [],
    template: `
    <p>
      @for (vehicle of this.vehicleService.vehicles(); track vehicle.name) {
        <p>{{vehicle.name}}</p>
        <p>{{vehicle.model}}</p>
        <p>-----------------</p>
      }@empty {
        <p>Nothing to show !</p>
      }
      <button (click)="gotoProduct()">Go to product</button>
      <button (click)="gotoProfile()">Go to profile</button>
    </p>
  `,
    styles: ``
})
export default class HomeComponent {
  gotoProfile() {
    this.router.navigate(['setting','profile']);
  }

router = inject(Router);
vehicleService = inject(VehicleService);

gotoProduct() {
  this.router.navigateByUrl('product');
}

}
