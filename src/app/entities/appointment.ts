import { Doctor } from "./doctor";
import { Patient } from "./patient";

export class Appointment implements IAppointment {
    appointmentId : number =0;
    appointmentDate : Date = new Date()  ;
    remark : string = "";
    appointmentStatus : string ="";
    // patient : Patient=new Patient;
    patient:any;
    // doctor:Doctor=new Doctor();
    doctor:any;
}

export interface IAppointment {
    appointmentId : number ;
    appointmentDate : Date  ;
    remark : string ;
    appointmentStatus : string ;
    patient : Patient;
    doctor: Doctor;
}