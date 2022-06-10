import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, AbstractControl,ValidationErrors} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  url='http://25.48.185.136:5000/login'
  public data:any=[]
  public json:any=[]

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  userForm=new FormGroup({
    correo: new FormControl('',[Validators.required,Validators.email]),
    contra: new FormControl('',[Validators.required,Validators.minLength(8)])
  })
  get correo(){return this.userForm.get('correo')}
  get contra(){return this.userForm.get('contra')}
  
  onSubmit(data:any,formData:any)
  {
    this.http.post(this.url,data,{responseType: 'text'}).subscribe((result)=>{
      console.log(result)
      var split=result.split(" ")
      console.log(split[0])
      if(split[0]=="cliente")
      {
        localStorage.setItem('cliente',split[1])
        window.location.href = "http://localhost:4200";
      }
      else if(split[0]=="empleado"){
        localStorage.setItem('empleado',split[1])
        window.location.href = "http://localhost:4200";
      }
      if(result=="nada"){
        formData.form.controls['correo'].setErrors({'invalid':true})
      }
    })
  }
}
