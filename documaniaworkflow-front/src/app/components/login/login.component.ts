import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password : string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService) {   }

  ngOnInit() {
  }
  component = 'signin';
  handleLogin() {
    if(this.component==="forgetpass")
    {
      this.component = 'signin'
    }
    else{
      this.authenticationService.authenticationService(this.username, this.password).subscribe((result)=> {
        
        // if(result['authenticated'])
        // {
          this.invalidLogin = false;
          this.loginSuccess = true;

          this.router.navigate(['/home/tasks']);
          this.successMessage = 'Login Successful.';

        // }
        // else
        // {
        //   this.invalidLogin = false;
        //   this.loginSuccess = true;
        //   this.successMessage = 'Login Successful.';
        // }
      }, () => {
        this.invalidLogin = true;
        this.loginSuccess = false;
      });
    }
  }
  resetPass(){
    if(this.component==="signin")
    {
      this.component = 'forgetpass'
    }
    else{


      
    }


  }
}


