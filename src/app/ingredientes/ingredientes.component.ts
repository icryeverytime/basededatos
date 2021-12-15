import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.component.html',
  styleUrls: ['./ingredientes.component.css']
})
export class IngredientesComponent implements OnInit {

  url='http://25.83.103.75:5000/ingredientes'
  data:any
  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    
    this.http.post(this.url,this.data,{responseType: 'json'}).subscribe((result)=>{
      console.log(result)  
      this.data=result
      console.log(this.data[0])
    })
  }
  agua()
  {
    window.location.href = "http://localhost:4200/factura/1"
  }
  azucar()
  {
    window.location.href = "http://localhost:4200/factura/2"
  }
  grenetina()
  {
    window.location.href = "http://localhost:4200/factura/3"
  }
  fresas()
  {
    window.location.href = "http://localhost:4200/factura/4"
  }
  mango()
  {
    window.location.href = "http://localhost:4200/factura/5"
  }
  evaporada()
  {
    window.location.href = "http://localhost:4200/factura/6"
  }
  limon()
  {
    window.location.href = "http://localhost:4200/factura/7"
  }
  colorante()
  {
    window.location.href = "http://localhost:4200/factura/8"
  }
  melon()
  {
    window.location.href = "http://localhost:4200/factura/9"
  }
  clara()
  {
    window.location.href = "http://localhost:4200/factura/10"
  }
  vanilla()
  {
    window.location.href = "http://localhost:4200/factura/11"
  }
  yema()
  {
    window.location.href = "http://localhost:4200/factura/12"
  }
  crema()
  {
    window.location.href = "http://localhost:4200/factura/13"
  }
}
