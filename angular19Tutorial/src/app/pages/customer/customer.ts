import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../services/customer-service';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class Customer {

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
