import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventarioComponent } from './components/inventario/inventario.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ProductosComponent } from './productos/productos.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { IngredientesComponent } from './ingredientes/ingredientes.component';
const routes: Routes = [
  {path: 'inventario', component: InventarioComponent},
  {path: 'proveedores', component: ProveedoresComponent},

  {path: 'registro', component: RegistroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'empleados', component: EmpleadosComponent},
  {path: 'ingredientes',component: IngredientesComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
