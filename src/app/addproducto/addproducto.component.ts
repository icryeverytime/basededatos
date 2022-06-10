import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, AbstractControl,ValidationErrors} from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-addproducto',
  templateUrl: './addproducto.component.html',
  styleUrls: ['./addproducto.component.css']
})
export class AddproductoComponent implements OnInit {
  url2='http://25.48.185.136:5000/getproductos'
  url1='http://25.48.185.136:5000/agregarproductos'
  constructor(private http:HttpClient) { }
  data2:any
  ngOnInit(): void {
    this.http.post(this.url2,this.data2,{responseType: 'json'}).subscribe((result)=>{ 
      this.data2=result
      console.log(this.data2[0])
    })
  }
  compraForm=new FormGroup({
    numero: new FormControl(''),
  })
  get numero(){return this.compraForm.get('numero')}
  onSubmit(data:any,i:any)
  {
   
      console.log(data)
      console.log(i)
    let data2=[{
      id: i+1,
      data: data
      
    }]

    this.http.post(this.url1,data2,{responseType: 'text'}).subscribe((result)=>{
      console.log(result)
      if(result=="ingresado")
      {
        Swal.fire({
          title: 'Se agrego exitosamenet',
          text: 'Ya puede ver los cambios realizados',
          icon: 'success',
          confirmButtonText: 'Done'
        }).then(function()
        {
          window.location.href = "http://localhost:4200/addproducto";
        });
      }
    })
    }
    
  }


