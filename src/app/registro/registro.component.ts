import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, AbstractControl,ValidationErrors} from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
function validatePass(control:AbstractControl):ValidationErrors | null{
  if(control)
  {
    if(control.get('contra')?.value!=null && control.get('scontra')?.value!=null)
    {
      if(control.get('contra')?.value!=control.get('scontra')?.value)
      {
        control.get('scontra')?.setErrors({compare:true})
      }
    }
  }
  return null
}
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  url='http://25.83.103.75:5000/registro'
  public data:any=[]
  public json:any=[]
  constructor(private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
  }
  profileForm=new FormGroup({
    nombre: new FormControl('',[Validators.required]),
    correo: new FormControl('',[Validators.required,Validators.email]),
    numero: new FormControl('',[Validators.required,Validators.minLength(10)]),
    contra: new FormControl('',[Validators.required,Validators.minLength(8)]),
    scontra: new FormControl('',[Validators.required])
  },validatePass)

  get nombre(){return this.profileForm.get('nombre')}
  get correo(){return this.profileForm.get('correo')}
  get numero(){return this.profileForm.get('numero')}
  get contra(){return this.profileForm.get('contra')}
  get scontra(){return this.profileForm.get('scontra')}

  onSubmit(data:any,formData:any){
    this.http.post(this.url,data,{responseType: 'text'}).subscribe((result)=>{
      console.log(result)
      if(result=="correo")
      {
        formData.form.controls['correo'].setErrors({'incorrect':true})
      }
      else{
        Swal.fire({
          title: 'Cuenta creada exitosamente',
          text: 'Ya puede hacer login para realizar compras',
          icon: 'success',
          confirmButtonText: 'Done'
        }).then(function()
        {
          window.location.href = "http://localhost:4200/login";
        });
      }
    })
  }
}
