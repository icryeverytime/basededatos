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
  // url='http://25.83.103.75:5000/registroE'
  // urlPut='http://25.83.103.75:5000/modificarE';
  // urlGet='http://25.83.103.75:5000/obtenerE';
  // urlDel='http://25.83.103.75:5000/eliminarE';
  url='http://localhost:5000/registroE'
  urlPut='http://localhost:5000/modificarE';
  urlGet='http://localhost:5000/obtenerE';
  urlDel='http://localhost:5000/eliminarE';
  public data:any=[]
  public json:any=[]
  blnEdicion: Boolean = false;
  blnConsulta: Boolean = false;
  respGet: any = []

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
    console.log(this.blnEdicion)
    if(this.blnEdicion == false){
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
    }else{
      let dataPut = {
        nombre: this.empleadoForm.get("nombre")?.value,
        numerotelefono: this.empleadoForm.get("numero")?.value,
        correo: this.empleadoForm.get("correo")?.value,
        calle: this.empleadoForm.get("calle")?.value,
        nuexterior: this.empleadoForm.get("nuexterior")?.value,
        colonia: this.empleadoForm.get("colonia")?.value,
        municipio: this.empleadoForm.get("municipio")?.value,
        pais: this.empleadoForm.get("pais")?.value,
        contra: this.empleadoForm.get("contra")?.value,
        id_empleado: this.respGet[0]["id_empleado"]
        }
      this.http.post(this.urlPut,dataPut,{responseType: 'text'}).subscribe((result)=>{
        console.log(result)
      })
    }
  }

  clickEdicion(){
    console.log("Editando");
    this.blnEdicion = !this.blnEdicion;
    
  }
  
  clickEliminar(){
    let data = {
      correo: this.respGet[0]["correo"],
      id: this.respGet[0]["id_empleado"]
    }
    this.http.post(this.urlDel,data,{responseType: 'text'}).subscribe((result)=>{
      console.log(result)
    })
  }

  clickConsulta(){
    this.blnConsulta = true;
    let data = {
      correo: this.empleadoForm.get("correo")?.value
    }
    console.log(this.empleadoForm.get("correo")?.value);
    if(this.empleadoForm.get("correo")?.value != null){
      this.http.post(this.urlGet,data,{responseType: 'text'}).subscribe((result)=>{
        // console.log(result);
        
        this.respGet = JSON.parse(result);
        console.log(this.respGet);
        
        if(this.respGet != []){
          this.empleadoForm.get("nombre")?.setValue(this.respGet[0]["nombre"]);
          this.empleadoForm.get("numero")?.setValue(this.respGet[0]["numerotelefono"]);
          this.empleadoForm.get("nuexterior")?.setValue(this.respGet[0]["nuexterior"]);
          this.empleadoForm.get("municipio")?.setValue(this.respGet[0]["municipio"]);
          this.empleadoForm.get("pais")?.setValue(this.respGet[0]["pais"]);
          this.empleadoForm.get("contra")?.setValue(this.respGet[0]["contra"]);
          this.empleadoForm.get("calle")?.setValue(this.respGet[0]["calle"]);
          this.empleadoForm.get("colonia")?.setValue(this.respGet[0]["colonia"]);
        }
      })
    }
    
  }
}
