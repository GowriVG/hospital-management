import { Routes } from '@angular/router';
import { PatientListComponent } from './components/patient/patient-list/patient-list.component';
import { PatientFormComponent } from './components/patient/patient-form/patient-form.component';
//import { DoctorComponent } from './components/Doctor/doctor.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'patients',
    component: PatientListComponent,
  },
  {
    path: 'patient/add',       // ✅ Route for adding a new patient
    component: PatientFormComponent
  },
  {
    path: 'patient/edit/:id',
    component: PatientFormComponent
  }
];