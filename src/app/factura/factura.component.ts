import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import {FormGroup,FormControl, Validators, AbstractControl,ValidationErrors} from '@angular/forms';
@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  url='http://25.83.103.75:5000/prove'
  url2='http://25.83.103.75:5000/factura'
  User:any
  data:any
  constructor(private route:ActivatedRoute,private http:HttpClient) { 
    this.User=this.route.snapshot.paramMap.get('ingrediente')
  }

  ngOnInit(): void {
    this.http.post(this.url,{responseType: 'json'}).subscribe((result)=>{
      console.log(result)
      this.data=result
    })
  }
  compraForm=new FormGroup({
    numero: new FormControl('')
  })
  get numero(){return this.compraForm.get('numero')}
  onSubmit(data:any,i:any)
  {
    console.log(data)
    console.log(i)
    let data2=[{
      id: i+1,
      ingrediente: this.User,
      data: data
    }]
    this.http.post(this.url2,data2,{responseType: 'text'}).subscribe((result)=>{
      console.log(result)
      if(result=="ingresado")
      {
        Swal.fire({
          title: 'Compra exitosa',
          text: 'Ya puede ver los cambios realizados',
          icon: 'success',
          confirmButtonText: 'Done'
        }).then(function()
        {
          window.location.href = "http://localhost:4200/ingredientes";
        });
      }
    })
  }

}
