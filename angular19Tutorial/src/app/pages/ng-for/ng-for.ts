import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-for.html',
  styleUrl: './ng-for.css',
})
export class NgFor {

  cityList: string[] = ["Pune", "Nagur", "Jaipur", "Mumbai", "Delhi"];

  employeeList: any[] =[
    {empId: 121, name: 'AAAA', city: 'Pune', contactNo: 123456879},
    {empId: 122, name: 'BBBB', city: 'Nagur', contactNo: 223456879},
    {empId: 123, name: 'CCCC', city: 'Jaipur', contactNo: 323456879},
    {empId: 124, name: 'DDDD', city: 'Mumbai', contactNo: 423456879},
    {empId: 125, name: 'EEEE', city: 'Delhi', contactNo: 523456879},
  ];

}
