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
  url='http://25.83.103.75:5000/registroP';
  public data:any=[]
  public json:any=[]

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
    this.http.post(this.url,data,{responseType: 'text'}).subscribe((result)=>{
      console.log(result)
    })
  }

}
