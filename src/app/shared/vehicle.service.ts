import { Injectable, Signal, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, take, tap } from 'rxjs';

export interface Vehicle {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  vehicle_class: string;
}

interface ResponseInterfaceMapper {
  results: Vehicle[];
}

@Injectable({providedIn: 'root'})
export class VehicleService {
  private apiUrl = 'https://swapi.dev/api/vehicles?page=';

  readonly #v = signal<Vehicle[]>([]);
  readonly vehicles = this.#v.asReadonly();

  #http = inject(HttpClient);

  getVehicles(page: number): Observable<Vehicle[]> {
    return this.#http
      .get<ResponseInterfaceMapper>(`${this.apiUrl}${page}`)
      .pipe(
        map((response) => response.results),
        tap(v => this.#v.set(v))
      );
  }
}
