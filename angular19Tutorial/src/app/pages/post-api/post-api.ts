import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Car, ICarList } from '../../model/car';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-api.html',
  styleUrl: './post-api.css',
})
export class PostApi {

  CarList: ICarList[] = [];

  carObj: Car = new Car();

  // constructor(private http: HttpClient){

  // }

  http = inject(HttpClient);

  getCarList(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res: any) => {
      this.CarList = res;
    });
  }

  onSaveUser(){
    this.http.post("https://jsonplaceholder.typicode.com/posts", this.carObj).subscribe((res: any)=>{
      debugger;
      if(res.result){
        alert("car Created succesfully");
        this.getCarList();
      }else{
        alert(res.message);
      }
    });
  }

}
