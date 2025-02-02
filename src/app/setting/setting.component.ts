import { Component, computed, effect, signal, untracked } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <p>
      setting works!
      {{ double() }}
      <router-outlet />
    </p>
  `,
  styles: ``
})
export default class SettingComponent {

   n = signal(1);
   double = signal(0)

  constructor(){

    effect(() => {
      //this.n();
      untracked(() => {
        this.double.set(this.n() * 2 );
        console.log(this.double());
      })

    });

    setTimeout(() => this.n.set(10))
  }

}
