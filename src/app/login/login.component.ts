import { Component, OnInit } from '@angular/core';
// import { error } from 'console';
import { freeApiService } from "../service/freeapi.service";
import { Authan } from "../classes/authan";
import { Token } from "../classes/token";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    mdp: null,
  };
  autan:Authan=new Authan();
  
  constructor(private freeapiservice: freeApiService,
    private route: Router) { }

  ngOnInit(): void {
  }
  login() {
    const opost = this.form;
    console.log(opost);

    this.freeapiservice.login(JSON.stringify(opost)).subscribe(
      (data) => {
        console.log(data);
        this.autan=data;
          // authan=JSON.stringify(data);
         console.log(this.autan.object?.access);
        
        localStorage.setItem('access',JSON.stringify(this.autan.object?.access));
        localStorage.setItem('refresh',JSON.stringify(this.autan.object?.refreshToken));

        this.route.navigate(['acceuil'])
      }, error => alert("Login failed"));
    // var params = JSON.stringify(this);
  }
}
