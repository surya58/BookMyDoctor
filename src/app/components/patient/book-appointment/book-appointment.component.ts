import { stringify } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/entities/appointment';
import { Doctor } from 'src/app/entities/doctor';
import { Patient } from 'src/app/entities/patient';
import { AppointmentService } from 'src/app/services/appointment.service';
import { DoctorService } from 'src/app/services/doctor.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {
  appBooked=false;
  message!:string;
  id: number = 0;
  doctorId: number = 0;
  @Input() public parentData: any;
  doc:any;

  doctor: Doctor = new Doctor;
  patient: Patient = new Patient;
  appointmentDate: Date = new Date();

  appointment: Appointment = new Appointment();
  speciality: string = "";
  doctorList: any;
  constructor(private _appointmentService: AppointmentService, private patientService: PatientService, private doctorService: DoctorService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {

    this.doctorId = this.route.snapshot.params['doctorId'];

    this.doctorService.getDoctorById(this.doctorId).subscribe(data => {
      this.doctor = data; console.log(data);
    }, error => console.log(error));

    this.doctorService.getDoctorList().subscribe(data=>{this.doctorList=data})
    this.id = this.route.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe(data => {
      this.patient = data; console.log(data);
    },
      error => console.log(error));

  }

  saveAppointment(remark: string) {
    console.log(this.speciality);
    this.doctorService.getDoctorSpeciality(this.speciality).subscribe(data => {
      console.log(data); this.doctor = data
      this.appointment.patient = this.patient;
      this.appointment.doctor = data;
      console.log(this.appointment);
      console.log(this.doctor)
      this._appointmentService.createAppointment(remark, this.appointmentDate, data.doctorId, this.id).subscribe(body => { console.log(body) }, error => console.log(error)
      
      );
    
      this.appBooked=true;
      this.message="Appointment Requested successfully!"

    }, error => console.log(error));




    console.log(this.doctor)
  }

  onSubmit(value: string, remark: string) {
    this.speciality = value;
    this.saveAppointment(remark);
  }
  






}
