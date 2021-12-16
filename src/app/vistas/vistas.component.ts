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
  urlV3 = 'http://25.83.103.75:5000/Productoxmaquina';
  urlC1 = 'http://25.83.103.75:5000/consultaRecibo';
  urlC2 = 'http://25.83.103.75:5000/consultaTotales';
  // urlV1 = 'http://localhost:5000/Empleado_Ags';
  // urlV2 = 'http://localhost:5000/Paletas';
  // urlV3 = 'http://localhost:5000/Productoxmaquina'
  // urlC1 = 'http://localhost:5000/consultaRecibo';
  // urlC2 = 'http://localhost:5000/consultaTotales';

  inputRecibo: string = '';
  vista1: any = [];
  vista2: any = [];
  vista3: any = [];
  consulta1: any =[];
  consulta2: any =[];
  data = {
    id: 'usuario@mail'
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
    this.http.post(this.urlC2,this.data,{responseType: 'text'}).subscribe((result)=>{
      console.log(result)
      this.consulta2 = JSON.parse(result);
    })
    
    this.http.post(this.urlC1,this.data,{responseType: 'text'}).subscribe((result)=>{
      console.log(result)
      this.consulta1 = JSON.parse(result);
    })
  }

  

  getPromedio(){
    if(this.consulta2 == []){
        return "0";
    }else{
      return `${this.consulta2[0]["Promedio_total"]}`;
    }
  }

  getSuma(){
    if(this.consulta2 == []){
      return "0";
    }else{
      return `${this.consulta2[0]["Suma"]}`;
    }
  }

  getTotalIVA(){
    if(this.consulta1 == []){
      return "0";
    }else{
      return `${this.consulta1[0]["Total_con_IVA"]}`;
    }
  }
  getID(){
    if(this.consulta1 == []){
      return "0";
    }else{
      return `${this.consulta1[0]["ID_del_Recibo"]}`;
    }
  }
}
