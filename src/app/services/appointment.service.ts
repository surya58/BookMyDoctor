import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../entities/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseUrl = "http://localhost:8082/appointment/"
  //getAppointmentById: any;
  constructor(private http:HttpClient) { }
 
  getAppointmentList(): Observable<Appointment[]>{
    
    return this.http.get<Appointment[]>(`${this.baseUrl}`+`getAll`);

  }

 

  //  createAppointment(appointment:Appointment,doctorId:number,id:number): Observable<Object> {
  //   return this.http.post(`http://localhost:8082/appointment/save/`+`${doctorId}/`+`${id}`, appointment);
  //   // return this.http.post(`${this.baseUrl}` + `save`,appointment);
 
  //  }

   updateAppointment(appointment:Appointment):Observable<Object>{
   return this.http.put("http://localhost:8082/appointment/update",appointment);
   
    //return this.http.put(`${this.baseUrl}`+`update`,appointment);
  }

  getAppointmentById(appointmentId:number): Observable<Appointment> {
    console.log(`${this.baseUrl}`+`getById/${appointmentId}`);
    return this.http.get<Appointment>(`${this.baseUrl}`+`getById/${appointmentId}`)
  }

  getAppointmentListByDoctor(doctorId:number):Observable<Appointment[]>{
    return this.http.get<Appointment[]>(`${this.baseUrl}`+`getAppointmentListByDoctor/${doctorId}`)
  }
  
  createAppointment(remarks:string,appointmentDate:Date, doctorId:number,id:number): Observable<string> {
    console.log(`http://localhost:8082/appointment/save/${doctorId}/${id}/{appDate}?appDate=${appointmentDate}`)
    return this.http.post<string>(`http://localhost:8082/appointment/save/${doctorId}/${id}/{appDate}?appDate=${appointmentDate}`, remarks);
   }




}