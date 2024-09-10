import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <p>
      home works!
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

gotoProduct() {
  this.router.navigateByUrl('product');
}

}
