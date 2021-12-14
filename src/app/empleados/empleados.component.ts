import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  url='http://25.83.103.75:5000/registroE'
  public data:any=[]
  public json:any=[]
  empleadoForm=new FormGroup({
    nombre: new FormControl('',[Validators.required]),
    correo: new FormControl('',[Validators.required,Validators.email]),
    numero: new FormControl('',[Validators.required,Validators.minLength(10)]),
    calle: new FormControl('',[Validators.required]),
    nuexterior: new FormControl('',[Validators.required]),
    colonia: new FormControl('',[Validators.required]),
    municipio: new FormControl('',[Validators.required]),
    pais: new FormControl('',[Validators.required]),
    contra: new FormControl('',[Validators.required,Validators.minLength(8)]),
    scontra: new FormControl('',[Validators.required,Validators.minLength(8)]) 
  },validatePass)

  get nombre(){return this.empleadoForm.get('nombre')}
  get correo(){return this.empleadoForm.get('correo')}
  get numero(){return this.empleadoForm.get('numero')}
  get calle(){return this.empleadoForm.get('calle')}
  get nuexterior(){return this.empleadoForm.get('nuexterior')}
  get colonia(){return this.empleadoForm.get('colonia')}
  get municipio(){return this.empleadoForm.get('municipio')}
  get pais(){return this.empleadoForm.get('pais')}
  get contra(){return this.empleadoForm.get('contra')}
  get scontra(){return this.empleadoForm.get('scontra')}

  constructor(private router:Router,private http: HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(data:any,formData:any)
  {
    console.log(data)
    this.http.post(this.url,data,{responseType: 'text'}).subscribe((result)=>{
      console.log(result)
      if(result=="correo"){
        formData.form.controls['correo'].setErrors({'invalid':true})
      }
      else if(result=="ingresado")
      {
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
