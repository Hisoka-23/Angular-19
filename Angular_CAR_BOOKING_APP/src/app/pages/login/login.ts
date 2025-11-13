import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  /*useForm: FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  })
  */

  userName: FormControl = new FormControl('');
  password: FormControl = new FormControl('');

}
