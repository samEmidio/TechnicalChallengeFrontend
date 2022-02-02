import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  isLoading:boolean = false;
  user = {
    email:"",
    pass:"",
    name:"",
    lastName:""
  }

  constructor(private account:AccountService, private router: Router) { }

  ngOnInit(): void {

  }


  register(user){

    if(!this.isLoading){
      this.isLoading = true;

      this.account.register(user).subscribe(user => {
        debugger;
        localStorage.setItem('user',JSON.stringify(user.data))

        this.isLoading = false;

        this.navigateToHome();
      },error => {
        this.isLoading = false;
        alert(error.errors[0])
        console.log(error.errors[0])
      })
    }
}


  navigateToLogin(){
    this.router.navigate(['login']);
  }

  navigateToHome(){
    this.router.navigate(['home/events']);
  }

}
