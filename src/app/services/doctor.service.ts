import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe, throwError } from 'rxjs';
import { Doctor } from '../entities/doctor';
import { catchError, map } from 'rxjs/operators';
import { Login } from '../entities/login';
import { AvailabilityDates } from '../entities/availability-dates';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private baseUrl = 'http://localhost:8082/doctors/';
  constructor(private httpClient: HttpClient) { }
  getDoctorList(): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(`${this.baseUrl}` + 'fetchAllDoctor');
  }
  createDoctor(doctor: Doctor): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}` + 'saveDoctor', doctor);
  }
  getDoctorById(doctorId: number): Observable<Doctor> {
    return this.httpClient.get<Doctor>(`${this.baseUrl}` + `fetchDoctors/${doctorId}`).pipe(catchError(this.errorHandler));

  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "No such Doctor is registered!");
  }


  updateDoctor(doctor: Doctor): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}` + `/updateDoctor`, doctor);
  }
  deleteDoctor(doctorId: number): Observable<object> {
    return this.httpClient.delete(`${this.baseUrl}/deleteDoctor/${doctorId}`);
  }
  public loginUserFromRemote(login: Login): Observable<any> {


    return this.httpClient.post<any>(`${this.baseUrl}` + `login`, login).pipe(catchError(this.errorHandler));

  }
  getByEmailId(emailId: String): Observable<Doctor> {

    return this.httpClient.get<Doctor>(`${this.baseUrl}`+`doctor/${emailId}`);
  }
  deleteAccount(doctorId: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/delete/${doctorId}`)
  }
  getDoctorSpeciality(speciality: string): Observable<Doctor>{
    return this.httpClient.get<Doctor>(`http://localhost:8082/doctors/findBySpeciality/${speciality}`);
  }
  createDoctorAvailabillity(availabilitydates:AvailabilityDates): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}` + '/addAvailabilityDates', availabilitydates);
  }

}



