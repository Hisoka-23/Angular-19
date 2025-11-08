import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-if.html',
  styleUrl: './ng-if.css',
})
export class NgIf {

  divVisible: boolean = false;

  number1: string = "";

  number2: string = "";

  hideDiv1(){
    this.divVisible = false;
  }

  showDiv1(){
    this.divVisible = true;
  }

}
