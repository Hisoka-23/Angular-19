import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-class',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './ng-class.html',
  styleUrl: './ng-class.css',
})

export class NgClass {

  divBgColor: string = "bg-success";

  isChecked: boolean = false;

  div3ClassName: string = "";

  addDivColor(className: string){
    this.divBgColor = className;
  }

}
