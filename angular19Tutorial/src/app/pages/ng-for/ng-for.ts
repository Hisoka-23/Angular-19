import { CommonModule, DatePipe, JsonPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MyPipePipe } from '../../pipes/my-pipe-pipe';
import { ProgressBar } from "../../reuseable/progress-bar/progress-bar";
import { Tabs } from "../../reuseable/tabs/tabs";

@Component({
  selector: 'app-ng-for',
  standalone: true,
  imports: [CommonModule, UpperCasePipe, LowerCasePipe, JsonPipe, DatePipe, MyPipePipe, ProgressBar, Tabs],
  templateUrl: './ng-for.html',
  styleUrl: './ng-for.css',
})
export class NgFor {

  courseName: string = "Angular";

  currentTab: string = '';

  currentDate: Date = new Date();

  studentObj: any = {
    name: "prakash",
    city: "Pune",
    mobile: "7896325410"
  };

  onTabChange(tab: String){
    debugger;
  }

  cityList: string[] = ["Pune", "Nagur", "Jaipur", "Mumbai", "Delhi"];

  employeeList: any[] =[
    {empId: 121, name: 'AAAA', city: 'Pune', contactNo: 123456879, attendance: 40},
    {empId: 122, name: 'BBBB', city: 'Nagur', contactNo: 223456879, attendance: 50},
    {empId: 123, name: '', city: 'Jaipur', contactNo: 323456879, attendance: 50},
    {empId: 124, name: 'DDDD', city: 'Mumbai', contactNo: 423456879, attendance: 70},
    {empId: 125, name: 'EEEE', city: 'Delhi', contactNo: 523456879, attendance: 90},
  ];

}
