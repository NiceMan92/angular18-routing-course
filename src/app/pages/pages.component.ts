import { Component, input } from '@angular/core';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [],
  template: `
    <p>
      page: {{ pageId()}} limit: {{limits()}} {{page().name}}
    </p>
  `,
  styles: ``
})
export default class PagesComponent {

  pageId = input.required<number>();
  limits = input.required<number>();
  page = input.required<{pageId: any, name:string}>();


}
