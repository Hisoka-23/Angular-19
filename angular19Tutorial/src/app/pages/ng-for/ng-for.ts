import { CommonModule, DatePipe, JsonPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MyPipePipe } from '../../pipes/my-pipe-pipe';

@Component({
  selector: 'app-ng-for',
  standalone: true,
  imports: [CommonModule, UpperCasePipe, LowerCasePipe, JsonPipe, DatePipe, MyPipePipe],
  templateUrl: './ng-for.html',
  styleUrl: './ng-for.css',
})
export class NgFor {

  courseName: string = "Angular";

  currentDate: Date = new Date();

  studentObj: any = {
    name: "prakash",
    city: "Pune",
    mobile: "7896325410"
  };

  cityList: string[] = ["Pune", "Nagur", "Jaipur", "Mumbai", "Delhi"];

  employeeList: any[] =[
    {empId: 121, name: 'AAAA', city: 'Pune', contactNo: 123456879},
    {empId: 122, name: 'BBBB', city: 'Nagur', contactNo: 223456879},
    {empId: 123, name: '', city: 'Jaipur', contactNo: 323456879},
    {empId: 124, name: 'DDDD', city: 'Mumbai', contactNo: 423456879},
    {empId: 125, name: 'EEEE', city: 'Delhi', contactNo: 523456879},
  ];

}
