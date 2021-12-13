import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'base-datos';

  readLocalStorageValue()
  {
    if(localStorage.getItem('empleado')==null)
    {
      return false
    }
    else{
      return true
    }
  }
  loggedin()
  {
    if(localStorage.getItem('empleado')==null && localStorage.getItem('cliente')==null)
    {
      return true
    }
    else
    {
      return false
    }
  }
  logout()
  {
    localStorage.removeItem('empleado')
    localStorage.removeItem('cliente')
    window.location.href = "http://localhost:4200";
  }
}
