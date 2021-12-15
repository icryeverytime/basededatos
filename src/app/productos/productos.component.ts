import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  url2='http://25.83.103.75:5000/getinventario'
  url1='http://25.83.103.75:5000/ingredientes'
  data1:any
  data2:any
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.post(this.url1,this.data1,{responseType: 'json'}).subscribe((result)=>{
      console.log("inventario")
      console.log(result)  
      this.data1=result
    })
    this.http.post(this.url2,this.data2,{responseType: 'json'}).subscribe((result)=>{
      console.log(result)  
      this.data2=result
      console.log("ingredientes")
    })
  }
}
