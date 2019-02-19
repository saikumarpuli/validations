import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  cities:string[] = [
    '',
    'Hyderabad',
    'Chennai',
    'Mumbai',
  ];
  courses:string[] = [
    '',
    'java',
    'angular',
    'typescript',
  ];
  districts:string[] = [
    '',
    'karimnagar',
    'warangal',
    'medak',
  ];
  states:string[] = [
    '',
    'Telangana',
    'Andhra pradesh',
    'Uttar Pradesh',
  ];
  registrationForm = new FormGroup({
    Name: new FormControl('',Validators.required),
    FatherName: new FormControl('',Validators.required),
    PostalAddress: new FormControl('',Validators.required),
    PersonalAddress: new FormControl('',Validators.required),
    gender: new FormControl('',Validators.required),

    city: new FormControl('',Validators.required),
    course: new FormControl('',Validators.required),
    district: new FormControl('',Validators.required),
    state: new FormControl('',Validators.required),
    pincode: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    DOB: new FormControl('',Validators.required),
    phoneNo: new FormControl('',Validators.required),
});
  submitted = false;
  get f() { return this.registrationForm.controls; }
  constructor( ) {
  }
  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.registrationForm.value);
    if (this.registrationForm.invalid) {
      return;
    }
    alert('SUCCESS!! :-)')
  }
}
