import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-statement',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './control-statement.html',
  styleUrl: './control-statement.css',
})
export class ControlStatement {

  div1Visisble: boolean = false;

  isChecked: boolean = false;

  dayName: string = '';

  cityList: string[] =["Pune", "Mumbai", "Banglore", "Chennai", "Hydrabad"];

    employeeList: any[] =[
    {empId: 121, name: 'AAAA', city: 'Pune', contactNo: 123456879},
    {empId: 122, name: 'BBBB', city: 'Nagur', contactNo: 223456879},
    {empId: 123, name: 'CCCC', city: 'Jaipur', contactNo: 323456879},
    {empId: 124, name: 'DDDD', city: 'Mumbai', contactNo: 423456879},
    {empId: 125, name: 'EEEE', city: 'Delhi', contactNo: 523456879},
  ];

  hideShowDiv1(visible: boolean) {
    this.div1Visisble = visible;
  }

}
