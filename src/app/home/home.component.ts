import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, AbstractControl,ValidationErrors} from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  url2='http://25.83.103.75:5000/getproductos'
  url1="http://25.83.103.75:5000/compraproductos"
  data2:any
  user=localStorage.getItem('cliente')
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.post(this.url2,this.data2,{responseType: 'json'}).subscribe((result)=>{
      console.log(result)  
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
    if(this.user!=null)
    {
      console.log(data)
    console.log(i)
    let data2=[{
      id: i+1,
      data: data,
      user: this.user
    }]

    this.http.post(this.url1,data2,{responseType: 'text'}).subscribe((result)=>{
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
 
}
