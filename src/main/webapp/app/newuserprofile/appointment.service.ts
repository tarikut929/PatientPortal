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
  private baseURL = 'http://localhost:8080/newuserprofile';

  constructor(private http: HttpClient) {}
  getData() {
    let url = 'http://jsonplaceholder.typicode.com/users';
    return this.http.get(url);
    /* eslint-enable */
  }
  getAppointmentList(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.baseURL}`);
  }
  createAppointment(appointment: Appointment): Observable<any> {
    return this.http.post(`${this.baseURL}`, appointment);
  }
}
