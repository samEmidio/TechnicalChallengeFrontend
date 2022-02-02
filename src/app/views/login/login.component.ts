import { AccountService } from './../../services/account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading:boolean = false;
  login = {
    email:"",
    pass:""
  }



  constructor(private account:AccountService, private router:Router) { }

  ngOnInit(): void {
  }


  authentication(email,pass){

      if(!this.isLoading){
        this.isLoading = true;

        if(email != "" && pass != "" ){

          this.account.authentication(email,pass).subscribe(user => {

            localStorage.setItem('user',JSON.stringify(user.data))
            this.isLoading = false;
            this.navigateToHome();

          },error => {
            debugger;
            alert(error.errors[0])
            console.log(error.errors[0])
          })

        }
      }
  }

  navigateToRegister(){
    this.router.navigate(['register']);
  }

  navigateToHome(){
    this.router.navigate(['home/events']);
  }

}
