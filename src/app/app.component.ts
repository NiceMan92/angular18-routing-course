import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, RouterLink, RouterLinkActive],
    template: `
    <h1>Welcome to {{title}}!</h1>
    <a routerLink='/home' routerLinkActive="active">home</a>
    <a routerLink='/product' routerLinkActive="active">products</a>
    <a routerLink='/setting' routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" >settings</a>
    <a routerLink='/setting/profile' routerLinkActive="active">profile</a>
    <router-outlet />
  `,
    styles: `
  a{
    margin-left: 10px;
  }
  .active {
      color: red;

    }
  `
})
export class AppComponent {
  title = 'angular18-routing-course';
}
