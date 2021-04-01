import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import {CamundaRestService} from '../../services/rest/camunda-rest.service';


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
    private authenticationService: AuthService ,
    private CamundaRest1:CamundaRestService
    ) {   }
    
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
       let str="";
        
      //  this.CamundaRest1.startTask().subscribe(suc=>{
      //    alert(suc.id);
      //   })


        this.CamundaRest1.getUserGroups(this.username).subscribe(succ=>{
            let tab1:Array<any>=new Array();

          // str =  "The user id is ";
              
          succ.groups.forEach(element => {
            tab1.push(element.id)
          });
          localStorage.setItem('groupsId',JSON.stringify(tab1));
          // str += "The id of Users in the same group "
          // succ.groupUsers.forEach(element => {
          //  str += element.id+"  ";
          // });


         
        //  alert(str);
        });

          //     this.userGroups =succ;
          //     alert(this.userGroups);
          // })
          //     this.userGroups =succ;
          //     alert(this.userGroups);
          // })
        
        // if(result['authenticated'])
        // {
          this.invalidLogin = false;
          this.loginSuccess = true;

          this.router.navigate(['/home/tasks']);
          this.successMessage = 'Login Successful.';

        
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


