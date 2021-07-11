import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from '../entities/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private baseURL='http://localhost:8082/feedback/';
  constructor(private http:HttpClient) { }
  createFeedback(comments:string,rating:number, doctorId:number,id:number): Observable<string> {
    // console.log(`http://localhost:8082/appointment/save/${doctorId}/${id}/`)
    return this.http.post<string>(`http://localhost:8082/feedback/saveFeedback/${doctorId}/${id}/?rating=${rating}`, comments);
   
  }

  getFeedbackList(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(`${this.baseURL}` + '/fetchAllFeedbacks');
  }
 
  getFeedbackListByDoctor(doctorId:number):Observable<Feedback[]>{
    return this.http.get<Feedback[]>(`${this.baseURL}`+`getAllFeedbacks/${doctorId}`);
  }

}
