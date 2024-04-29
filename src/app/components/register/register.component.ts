import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class registerComponent {
  //signup will be a formgroup object
  public Register !: FormGroup

  constructor( private formbuilder: FormBuilder,private http: HttpClient, private router: Router){}

  ngOnInit():void
  {
  
    this.Register=this.formbuilder.group({
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      cpassword: new FormControl('',Validators.required)
    },{validator:this.checkPasswords });
  }
  checkPasswords(formgroup:FormGroup):any{
    
    const password =formgroup.get('password')?.value;
    const cpassword =formgroup.get('cpassword')?.value;
    //return password === cpassword?null:{mismatch:true}
    if (password === cpassword) {
      return null; // Passwords match
  } else {
      return { passwordMismatch: true }; // Passwords don't match
  }
}
  

  register()
  {
    this.http.post<any>("http://localhost:3000/registerUsersList/",this.Register.value).subscribe(resp=>{

      console.log('register successful');
      //the navigator method accepts an array of route as an argument
      this.Register.reset()
      this.router.navigate(["login"])
    },error=>{
        alert("something went wrong");

    })
  }
    
  }



