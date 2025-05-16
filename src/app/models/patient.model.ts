export interface Patient {
    patientId: number;
    firstName: string;
    lastName: string;
    DateOfBirth: Date;
    age: number;
    gender: string;
    address?: string;
    email?: string;
    phoneNumber: string;
    createdDate: Date;
    isDeleted: boolean;
  }
  