import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css',
})
export class TemplateForm {

  userObj: any = {
    firstName: '',
    lastName: '',
    userName: '',
    city: 'goa',
    state: '',
    zipCode:'',
    isTermsAgrs: false,
  };

  onSave(){
    debugger;
    const formValue = this.userObj;
  }

}
