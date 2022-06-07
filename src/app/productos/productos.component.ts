import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, AbstractControl,ValidationErrors, FormArray} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  url2='http://25.83.103.75:5000/getinventario'
  url1='http://25.83.103.75:5000/ingredientes'
  url3='http://25.83.103.75:5000/registroproducto'
  public data:any=[]
  data1:any
  data2:any
  constructor(private http: HttpClient) {
    this.http.post(this.url2,this.data2,{responseType: 'json'}).subscribe((result)=>{
      console.log(result)  
      this.data2=result
      console.log("ingredientes")
    })
   }
  productoForm=new FormGroup({
    name1: new FormControl(''),
    precio1: new FormControl(''),
    maquina: new FormControl(''),
    agua: new FormControl(''),
    azucar: new FormControl(''),
    grenetina: new FormControl(''),
    fresa: new FormControl(''),
    mango: new FormControl(''),
    evaporada: new FormControl(''),
    limon: new FormControl(''),
    colorante: new FormControl(''),
    melon: new FormControl(''),
    clara: new FormControl(''),
    vanilla: new FormControl(''),
    yema: new FormControl(''),
    crema: new FormControl('')
  })
  get name1(){return this.productoForm.get('name1')}
  get precio1(){return this.productoForm.get('precio1')}
  get maquina(){return this.productoForm.get('maquina')}
  get agua(){return this.productoForm.get('agua')}
  get azucar(){return this.productoForm.get('azucar')}
  get grenetina(){return this.productoForm.get('grenetina')}
  get fresa(){return this.productoForm.get('fresa')}
  get mango(){return this.productoForm.get('mango')}
  get evaporada(){return this.productoForm.get('evaporada')}
  get limon(){return this.productoForm.get('limon')}
  get colorante(){return this.productoForm.get('colorante')}
  get melon(){return this.productoForm.get('melon')}
  get clara(){return this.productoForm.get('clara')}
  get vanilla(){return this.productoForm.get('vanilla')}
  get yema(){return this.productoForm.get('yema')}
  get crema(){return this.productoForm.get('crema')}

  ngOnInit(): void {

  }
  onSubmit(data:any)
  {
    console.log(data)
    this.http.post(this.url3,data,{responseType: 'text'}).subscribe((result)=>{
      console.log(result)
      if(result=="entregado")
      {
        Swal.fire({
          title: 'Producto creada exitosamente',
          text: 'Ya se realizo los cambios',
          icon: 'success',
          confirmButtonText: 'Done'
        }).then(function()
        {
          window.location.href = "http://localhost:4200/productos";
        });
      }
    })
  }
}
