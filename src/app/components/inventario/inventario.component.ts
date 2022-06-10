import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, AbstractControl,ValidationErrors} from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  data2:any
  index:any
  url='http://25.48.185.136:5000/inventario'
  url2='http://25.48.185.136:5000/getinventario'
  url3='http://25.48.185.136:5000/eliminarInventario'
  constructor(private http: HttpClient) { 
    
  }
  inventarioForm=new FormGroup({
    name1: new FormControl(''),
    cant1: new FormControl(''),
    precio1: new FormControl(''),
    year1: new FormControl('')
  })
  get name1(){return this.inventarioForm.get('name1')}
  get cant1(){return this.inventarioForm.get('cant1')}
  get precio1(){return this.inventarioForm.get('precio1')}
  get year1(){return this.inventarioForm.get('year1')}
  ngOnInit(): void {
    this.http.post(this.url2,this.data2,{responseType: 'json'}).subscribe((result)=>{
      console.log(result)  
      this.data2=result
      console.log(this.data2[0])
    })
  }
  onSubmit(data:any)
  {
    console.log(data)
      this.http.post(this.url,data,{responseType: 'text'}).subscribe((result)=>{
        console.log(result)
        if(result=="ingresado")
        {
          Swal.fire({
            title: 'Cuenta creada exitosamente',
            text: 'Ya puede hacer login para realizar compras',
            icon: 'success',
            confirmButtonText: 'Done'
          }).then(function()
          {
            window.location.href = "http://localhost:4200/inventario";
          });
        }
      })
  }
  eliminarInv(id: any){
    console.log(id);
    let data = {
      id: id
    }
    this.http.post(this.url3,data,{responseType: 'text'}).subscribe((result)=>{
      console.log(result)
    
    })
  }
}
