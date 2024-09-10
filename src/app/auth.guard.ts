import { inject } from "@angular/core";
import { Router } from "@angular/router";

export const authGuard = () => {
  const router = inject(Router);
  const random = Math.random();
  if( random < 0.5 ){
    router.navigateByUrl('/');
    return false;
  }
  return true;
};
