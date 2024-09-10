import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <p>
      setting works!
      <router-outlet />
    </p>
  `,
  styles: ``
})
export default class SettingComponent {

}
