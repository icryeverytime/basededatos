import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventarioComponent } from './components/inventario/inventario.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {path: 'inventario', component: InventarioComponent},
  {path: 'proveedores', component: ProveedoresComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'login', component: LoginComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
