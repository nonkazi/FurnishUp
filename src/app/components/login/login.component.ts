import { Component, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

  export class loginComponent {
    public LoginForm !:FormGroup
    @Output() public isLoggedIn: boolean = false;
    

    constructor(private formbuilder:FormBuilder, 
      private http: HttpClient,
       private router:Router){}
  
    ngOnInit():void
    {// this is the formcontrol as it hold both the data value and the valitator
      this.LoginForm = this.formbuilder.group({
        email: ['',Validators.required],
        password: ['', Validators.required]
      })}
  
      login()
      {
        this.http.get<any>("http://localhost:3000/registerUsersList/").subscribe(res=>{
           const user = res.find((details:any)=>
          {
            return details.email === this.LoginForm.value.email && details.password === this.LoginForm.value.password;
            return details.email === this.LoginForm.value.email && details.password === this.LoginForm.value.password;
          });
          console.log(this.LoginForm);
          console.log(this.LoginForm);
          
          if(user)
          {
            alert('Successfully Logged in');
            this.isLoggedIn = true;
            
            this.router.navigate(["/home"])
          }
          else
          {
            alert("User not found")
          }
        },err=>
        {
          alert("Something went wrong");
        })
      }

         
  }



