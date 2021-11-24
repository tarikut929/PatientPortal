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

  constructor(private http: HttpClient) {}
  getData() {
    let url = 'http://jsonplaceholder.typicode.com/users';
    return this.http.get(url);
    /* eslint-enable */
  }
}
