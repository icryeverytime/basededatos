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
}
