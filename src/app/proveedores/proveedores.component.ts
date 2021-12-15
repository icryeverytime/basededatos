import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {
  // url='http://25.83.103.75:5000/registroP';
  url='http://localhost:5000/registroP';
  urlPut='http://localhost:5000/modificarP';
  urlGet='http://localhost:5000/obtenerP';
  urlDel='http://localhost:5000/eliminarP';
  public data:any=[]
  public json:any=[]
  blnEdicion: Boolean = false;
  blnConsulta: Boolean = false;

  respGet: any = []

  proveedoresForm=new FormGroup({
    nombre: new FormControl('',[Validators.required]),
    numerotelefono: new FormControl('',[Validators.required]),
    correo: new FormControl('',[Validators.required,Validators.email]),
    cuentabancaria: new FormControl('',[Validators.required]),
    calle: new FormControl('',[Validators.required]),
    nuexterior: new FormControl('',[Validators.required]),
    colonia: new FormControl('',[Validators.required]),
    municipio: new FormControl('',[Validators.required]),
    pais: new FormControl('',[Validators.required]),
    num_id_fiscal: new FormControl('',[Validators.required])
  })
  constructor(private router:Router,private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(data:any,formData:any)
  {
    console.log(data)
    if(this.blnEdicion == false){
      this.http.post(this.url,data,{responseType: 'text'}).subscribe((result)=>{
        console.log(result)
      })
    }else{
      let dataPut = {
        nombre: this.proveedoresForm.get("nombre")?.value,
        numerotelefono: this.proveedoresForm.get("numerotelefono")?.value,
        correo: this.proveedoresForm.get("correo")?.value,
        cuentabancaria: this.proveedoresForm.get("cuentabancaria")?.value,
        calle: this.proveedoresForm.get("calle")?.value,
        nuexterior: this.proveedoresForm.get("nuexterior")?.value,
        colonia: this.proveedoresForm.get("colonia")?.value,
        municipio: this.proveedoresForm.get("municipio")?.value,
        pais: this.proveedoresForm.get("pais")?.value,
        num_id_fiscal: this.proveedoresForm.get("num_id_fiscal")?.value,
        id_proveedor: this.respGet[0]["id_proveedor"]
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
      id: this.respGet[0]["id_proveedor"]
    }
    this.http.post(this.urlDel,data,{responseType: 'text'}).subscribe((result)=>{
      console.log(result)
    })
  }

  clickConsulta(){
    this.blnConsulta = true;
    let data = {
      correo: this.proveedoresForm.get("correo")?.value
    }
    console.log(this.proveedoresForm.get("correo")?.value);
    if(this.proveedoresForm.get("correo")?.value != null){
      this.http.post(this.urlGet,data,{responseType: 'text'}).subscribe((result)=>{
        // console.log(result);
        
        this.respGet = JSON.parse(result);
        console.log(this.respGet);
        
        if(this.respGet != []){
          this.proveedoresForm.get("nombre")?.setValue(this.respGet[0]["nombre"]);
          this.proveedoresForm.get("numerotelefono")?.setValue(this.respGet[0]["numerotelefono"]);
          this.proveedoresForm.get("nuexterior")?.setValue(this.respGet[0]["nuexterior"]);
          this.proveedoresForm.get("municipio")?.setValue(this.respGet[0]["municipio"]);
          this.proveedoresForm.get("pais")?.setValue(this.respGet[0]["pais"]);
          this.proveedoresForm.get("num_id_fiscal")?.setValue(this.respGet[0]["num_id_fiscal"]);
          this.proveedoresForm.get("cuentabancaria")?.setValue(this.respGet[0]["cuentabancaria"]);
          this.proveedoresForm.get("calle")?.setValue(this.respGet[0]["calle"]);
          this.proveedoresForm.get("colonia")?.setValue(this.respGet[0]["colonia"]);
        }
      })
    }
    
  }

}
