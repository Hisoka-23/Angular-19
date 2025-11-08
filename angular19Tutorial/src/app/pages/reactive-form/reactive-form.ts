import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {

  userForm: FormGroup = new FormGroup({
    fName: new FormControl("",[Validators.required]),
    lName: new FormControl("",[Validators.required, Validators.minLength(5)]),
    userName: new FormControl("",[Validators.email, Validators.pattern("")]),
    city: new FormControl(""),
    state: new FormControl("Goa"),
    zipCode: new FormControl(""),
    isTermsAgree: new FormControl(false)
  });

  constructor(){
    this.userForm.controls['state'].disable();
    setTimeout(() =>{
      this.userForm.controls['state'].enable();
    }, 5000);
  }

  onUserSave(){
    const isValid = this.userForm.value;
    const formValue = this.userForm.value;
    debugger;
  }

}
