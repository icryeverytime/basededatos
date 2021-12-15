import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vistas',
  templateUrl: './vistas.component.html',
  styleUrls: ['./vistas.component.css']
})
export class VistasComponent implements OnInit {
  urlV1 = 'http://25.83.103.75:5000/Empleado_Ags';
  urlV2 = 'http://25.83.103.75:5000/Paletas';
  urlV3 = 'http://25.83.103.75:5000/Productoxmaquina'
  // urlV1 = 'http://localhost:5000/Empleado_Ags';
  // urlV2 = 'http://localhost:5000/Paletas';
  // urlV3 = 'http://localhost:5000/Productoxmaquina'
  vista1: any = [];
  vista2: any = [];
  vista3: any = [];
  data = {
    user: 'usuario@mail'
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.post(this.urlV1,this.data,{responseType: 'text'}).subscribe((result)=>{
      console.log(result)
      this.vista1 = JSON.parse(result);
    })
    this.http.post(this.urlV2,this.data,{responseType: 'text'}).subscribe((result)=>{
      console.log(result)
      this.vista2 = JSON.parse(result);
    })
    this.http.post(this.urlV3,this.data,{responseType: 'text'}).subscribe((result)=>{
      console.log(result)
      this.vista3 = JSON.parse(result);
    })
  }

}
