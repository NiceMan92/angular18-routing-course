import { inject } from "@angular/core";
import { ResolveFn, Router } from "@angular/router";
import { of } from "rxjs";

export const pageResolver: ResolveFn<Object> = (route, state) => {
  const pageId = route.paramMap.get('pageId');
  return of({
    pageId,
    name: 'toto'
  });
};
