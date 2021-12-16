import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-aprobar',
  templateUrl: './aprobar.component.html',
  styleUrls: ['./aprobar.component.css']
})
export class AprobarComponent implements OnInit {
  url='http://25.83.103.75:5000/aprobar'
  url2='http://25.83.103.75:5000/aprueba'

  constructor(private http:HttpClient) { }
  data2:any
  ngOnInit(): void {
    this.http.post(this.url,this.data2,{responseType: 'json'}).subscribe((result)=>{
      console.log(result)  
      this.data2=result
      console.log(this.data2[0])
    })
  }
  ingresar(data:any)
  {
   
      console.log(data)
      this.http.post(this.url2,{responseType: 'text'}).subscribe((result)=>{
        console.log(result)  
        
      })
  }

}
