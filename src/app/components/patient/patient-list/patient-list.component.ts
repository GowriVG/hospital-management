import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../services/patient.service';  
import {NavbarComponent} from '../../navbar/navbar.component';
//import { HttpClientModule } from '@angular/common/http';
import { Patient } from '../../../models/patient.model';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [NavbarComponent,CommonModule,RouterModule],
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit  {
  patients: Patient[] = [];

  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit(): void {
    this.loadPatients();
  }

  // Load patients from the backend
  loadPatients(): void {
    this.patientService.getAllPatients().subscribe({
      next: (data: Patient[]) => {
        console.log('Patients loaded:', data);
        this.patients = data;
      },
      error: (err) => {
        console.error('Error loading patients:', err);
      }
    });
  }

  // Delete a patient
  deletePatient(id: number): void {
    this.patientService.deletePatient(id).subscribe(() => {
      this.loadPatients();  // Refresh the list
    });
  }

  // Edit patient (navigate to the form)
  editPatient(id: number): void {
    this.router.navigate(['/patient/edit', id]);
  }
  
  goToAddPatient(): void {
    this.router.navigate(['/patient/add']);
  }
}
