import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  /* eslint-disable */
  private baseURL = 'api/appointments';

  constructor(private http: HttpClient) {}
  getDatae() {
    let url = 'http://jsonplaceholder.typicode.com/users';
    return this.http.get(url);
    /* eslint-enable */
  }
  getData(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.baseURL}`);
  }
  createAppointment(appointment: Appointment): Observable<any> {
    return this.http.post(`${this.baseURL}`, appointment);
  }
}
