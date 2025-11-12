import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  logInObj: any = {
    username: '',
    password: ''
  };

  apiLoginObj: any = {
    "EmailId": "",
    "Password": ""
  };

  router = inject(Router);

  http = inject(HttpClient);

  onLogin(){
    debugger;
    if(this.logInObj.username == 'admin' && this.logInObj.password == '1122'){
      this.router.navigateByUrl("admin");
    }else{
      alert("Wrong credentials");
    }

    // this.http.post("https://freeapi.miniprojectideas.com/api/User/Login", this.apiLoginObj).subscribe((res: any) => {
    //   debugger;
    //   localStorage.setItem("angular19User", res.data.userId);
    //   this.router.navigateByUrl("admin");
    // }, error =>{
    //   alert("Wrong credentials");
    // });

  }

}
