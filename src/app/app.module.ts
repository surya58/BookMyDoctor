import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorRegisterComponent } from './components/register/doctor-register/doctor-register.component';
import { DoctorLoginComponent } from './components/login/doctor-login/doctor-login.component';
import { DoctorListComponent } from './components/doctor/doctor-list/doctor-list.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PatientLoginComponent } from './components/login/patient-login/patient-login.component';
import { AdminLoginComponent } from './components/login/admin-login/admin-login.component';
import { AdminRegisterComponent } from './components/register/admin-register/admin-register.component';
import { PatientRegisterComponent } from './components/register/patient-register/patient-register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DocHomeComponent } from './components/doctor/doc-home/doc-home.component';
import { PatientHomeComponent } from './components/patient/patient-home/patient-home.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminGetdocbyidComponent } from './components/admin/admin-getdocbyid/admin-getdocbyid.component';
import { AdminGetalldocComponent } from './components/admin/admin-getalldoc/admin-getalldoc.component';
import { AdminGetpatallComponent } from './components/admin/admin-getpatall/admin-getpatall.component';
import { UpdatePatientComponent } from './components/patient/update-patient/update-patient.component';
import { UpdateDoctorComponent } from './components/doctor/update-doctor/update-doctor.component';
import { UpdateAdminComponent } from './components/admin/update-admin/update-admin.component';
import { DocSpecialityComponent } from './components/patient/doc-speciality/doc-speciality.component';
import { AddDatesComponent } from './components/doctor/add-dates/add-dates.component';
import { DocDisplayComponent } from './components/doctor/doc-display/doc-display.component';
import { AdminGetpatbyidComponent } from './components/admin/admin-getpatbyid/admin-getpatbyid.component';
import { BookAppointmentComponent } from './components/patient/book-appointment/book-appointment.component';
import { GetAppointmentComponent } from './components/doctor/get-appointment/get-appointment.component';
import { GetallAppointmentComponent } from './components/admin/getall-appointment/getall-appointment.component';
import { ViewAvailDatesComponent } from './components/patient/view-avail-dates/view-avail-dates.component';
import { UpdateAppointmentComponent } from './components/doctor/update-appointment/update-appointment.component';
import { AppointmentStatusComponent } from './components/patient/appointment-status/appointment-status.component';
import { GiveFeedbackComponent } from './components/patient/give-feedback/give-feedback.component';
import { GetallfeedbackComponent } from './components/admin/getallfeedback/getallfeedback.component';
import { GetfeedBydocidComponent } from './components/doctor/getfeed-bydocid/getfeed-bydocid.component';


const routes:Routes=[
  {
    path:'',
    component:HomepageComponent,
  },
  {
    path:'home',
    component:HomepageComponent,
  },
  {
    path:'doc-list',
    component:DoctorListComponent,
  },
  {
    path:'pat-login',
    component:PatientLoginComponent,
  },
  {
    path:'doc-create',
    component: DoctorRegisterComponent,
  },
  {
    path:'doc-login',
    component: DoctorLoginComponent,
  },
  {
    path:'adm-login',
    component:AdminLoginComponent,
  },
  {
    path:'adm-create',
    component: AdminRegisterComponent,
  },
  {
    path:'pat-create',
    component: PatientRegisterComponent,
  },
  {
    path:'doc-home/:emailId',
    component:DocHomeComponent,
  },
  {
    path:'pat-home/:emailId',
    component:PatientHomeComponent,
  },
  {
    path:'adm-home/:emailId',
    component:AdminHomeComponent,
  },
  {
    path:'adm-vdi',
    component:AdminGetdocbyidComponent,
  },
  {
    path:'adm-gad',
    component:AdminGetalldocComponent,
  },
  {
    path:'adm-gap',
    component:AdminGetpatallComponent,
  },
  {
    path:'pat-upd/:id',
    component: UpdatePatientComponent,
  },
  {
    path:'doc-upd/:doctorId',
    component: UpdateDoctorComponent,
  },
  {
    path:'adm-upd/:id',
    component: UpdateAdminComponent,
  },
  {
    path:'doc-spc',
    component: DocSpecialityComponent,
  },
  {
    path:'doc-add',
    component:AddDatesComponent,
  },
  {
    path:'book-app/:id',
    component:BookAppointmentComponent,
  },
  {
    path:'get-app/:doctorId',
    component:GetAppointmentComponent,
  },
  {
    path:'getall-app',
    component:GetallAppointmentComponent,
  },
  {
    path:'view-date',
    component:ViewAvailDatesComponent,
  },
  {
    path:'upd-app/:appointmentId',
    component:UpdateAppointmentComponent,
  },
  {
    path:'show-stat',
    component: AppointmentStatusComponent,
  },
  {
    path:'give-feed/:id',
    component: GiveFeedbackComponent,
  },
  {
    path:'getall-feed',
    component: GetallfeedbackComponent,
  },
  {
    path:'getfed-id/:doctorId',
    component:GetfeedBydocidComponent,
  }
  

];

@NgModule({
  declarations: [
    AppComponent,
    DoctorRegisterComponent,
    DoctorLoginComponent,
    DoctorListComponent,
    HomepageComponent,
    PatientLoginComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    PatientRegisterComponent,
    DocHomeComponent,
    PatientHomeComponent,
    AdminHomeComponent,
    AdminGetdocbyidComponent,
    AdminGetalldocComponent,
    AdminGetpatallComponent,
    UpdatePatientComponent,
    UpdateDoctorComponent,
    UpdateAdminComponent,
    DocSpecialityComponent,
    AddDatesComponent,
    DocDisplayComponent,
    AdminGetpatbyidComponent,
    BookAppointmentComponent,
    GetAppointmentComponent,
    GetallAppointmentComponent,
    ViewAvailDatesComponent,
    UpdateAppointmentComponent,
    AppointmentStatusComponent,
    GiveFeedbackComponent,
    GetallfeedbackComponent,
    GetfeedBydocidComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
