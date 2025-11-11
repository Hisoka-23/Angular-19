import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../services/customer-service';
import { ProgressBar } from "../../reuseable/progress-bar/progress-bar";
import { Tabs } from "../../reuseable/tabs/tabs";

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [FormsModule, ProgressBar, Tabs],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class Customer {

  customerTabs: string[] = ['Basic Info', 'Plan Info', 'misc info', 'follow info'];

  customerObj: any = {
    "customerId": 0,
    "customerName": "",
    "customerCity": "",
    "mobileNo": "",
    "email": ""
  }

  customerArray: any[] = [];

  constructor(private custSev: CustomerService){
    this.getCustomer();
  }

  // getCustomer() {
  //   this.http.get<any>("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCustomers").subscribe({
  //     next: (res) => {
  //       this.customerArray = res.data;
  //     }
  //   });
  // }

  getCustomer(){
    debugger;
    this.custSev.loadCustomer().subscribe((res: any)=>{
      this.customerArray = res.data;
    })
  }

  onSaveCustomer(){
    debugger;
    this.custSev.createNewCustomer(this.customerObj).subscribe((res: any) =>{
      debugger;
      if(res.result){
        alert('Customer Created Success');
        this.getCustomer();
      } else{
        alert(res.massage);
      }
    });
  }

}
