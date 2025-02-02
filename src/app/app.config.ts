import { ApplicationConfig, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { VehicleService } from './shared/vehicle.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes, withComponentInputBinding()),
     provideHttpClient(withFetch()),
     provideAppInitializer(() => {
      const vehicleService = inject(VehicleService);
      return firstValueFrom(
        vehicleService.getVehicles(1)
      )
     }
     )]
};
