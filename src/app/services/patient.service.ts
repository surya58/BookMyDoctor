import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Login } from '../entities/login';
import { Patient } from '../entities/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseUrl='http://localhost:8082/patients/';
  constructor(private httpClient:HttpClient) { }
  
  createPatient(patient: Patient): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}` + 'addPatient', patient);
  }
  getPatientList():Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseUrl}`+'fetchAllPatients');
  }
  deletePatient(id: number): Observable<object>{
    return this.httpClient.delete(`${this.baseUrl}/deletePatient/${id}`);
  }
  public loginUserFromRemote(login: Login): Observable<any> {


    return this.httpClient.post<any>(`${this.baseUrl}` + `login`, login).pipe(catchError(this.errorHandler));

  }
  getByEmailId(emailId: String): Observable<Patient> {

    return this.httpClient.get<Patient>(`${this.baseUrl}`+`patient/${emailId}`);
  }
  deleteAccount(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/delete/${id}`)
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "No such Patient is registered!");
  }
  updatePatient(patient:Patient):Observable<Patient>{
    return this.httpClient.put<Patient>(`${this.baseUrl}`+`updatePatient` , patient);
    //return this.http.put(`${this.baseUrl}`+`updatePatient`,patient);
  }
  getPatientById(id:number): Observable<Patient> {
    console.log(`${this.baseUrl}`+`fetchPatientById/${id}`);
    return this.httpClient.get<Patient>(`${this.baseUrl}`+`fetchPatientById/${id}`)
  }
  
}
