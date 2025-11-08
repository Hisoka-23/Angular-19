import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-style',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-style.html',
  styleUrl: './ng-style.css',
})
export class NgStyle {

  divBckColor: string = '';

  isChecked: boolean = false;

  myCss: any = {
    'background-color' : 'red',
    'width' : '200px',
    'height' : '200px'
  }

  addDiv1Color(Color: string){
    this.divBckColor= Color;
  }

}
