import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Admin, IAdmin } from '../entities/admin';
import { Login } from '../entities/login';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = "http://localhost:8082/admin/"
  constructor(private http :HttpClient) { }

  getAdminList(): Observable<Admin[]>{
    
    return this.http.get<IAdmin[]>("http://localhost:8082/admin/fetchAllAdmin");

   // return this.httpClient.get<IAdmin[]>(`${this.baseUrl}`+`fetchAllAdmin`);
  }

  createAdmin(admin : Admin): Observable<Object>{
    //return this.http.post("http://localhost:8082/admin/save",admin);
   // return this.http.post(`${this.baseUrl}`+`save` , admin);
    return this.http.post("http://localhost:8082/admin/save",admin);


  }

  updateAdmin(admin: Admin): Observable<Admin> {
    return this.http.put<Admin>(`${this.baseUrl}`+`update` , admin);

  }

  getAdminById(id: number): Observable<Admin> {
    return this.http.get<Admin>("http://localhost:8082/admin/fetchAdmins/"+`${id}`​​​);

  }

  deleteAdmin(id:number):Observable<Object>{
   // console.log(`${this.baseURL}`+`delete/${id}`);
    return this.http.delete("http://localhost:8082/admin/deleteAdmin/"+`${id}`​​​);

  }
  public loginUserFromRemote(login: Login): Observable<any> {


    return this.http.post<any>(`${this.baseUrl}` + `login`, login).pipe(catchError(this.errorHandler));

  }
  getByEmailId(emailId: String): Observable<Admin> {

    return this.http.get<Admin>(`${this.baseUrl}`+`admin/${emailId}`);
  }
  deleteAccount(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/delete/${id}`)
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "No such Admin is registered!");
  }
  updatePatient(admin:Admin):Observable<Admin>{
    return this.http.put<Admin>(`${this.baseUrl}`+`updatePatient` , admin);
    //return this.http.put(`${this.baseUrl}`+`updatePatient`,patient);
  }
  getPatientById(id:number): Observable<Admin> {
    console.log(`${this.baseUrl}`+`fetchPatientById/${id}`);
    return this.http.get<Admin>(`${this.baseUrl}`+`fetchPatientById/${id}`)
  }
}

