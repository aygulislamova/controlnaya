import { Component, OnInit } from '@angular/core';

export interface UserLoginDto{
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:UserLoginDto ={ email:'', password:''} ;
  error = '';
  constructor() { }

  ngOnInit(): void {
  }
 
  onSubmit(){
    if (this.user.email && this.user.password){

      const savedDataUser={
       email: this.user.email
      };
      const userStr = JSON.stringify(savedDataUser);
      localStorage.setItem('user',userStr);
    }else{
      this.error = 'no email or password';
    }
    }
}
