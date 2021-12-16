import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventarioComponent } from './components/inventario/inventario.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ProductosComponent } from './productos/productos.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { IngredientesComponent } from './ingredientes/ingredientes.component';

import { VistasComponent } from './vistas/vistas.component';

import { FacturaComponent } from './factura/factura.component';
import { HomeComponent } from './home/home.component';
import { AprobarComponent } from './aprobar/aprobar.component';
import { AddproductoComponent } from './addproducto/addproducto.component';
const routes: Routes = [
  {path: 'inventario', component: InventarioComponent},
  {path: 'proveedores', component: ProveedoresComponent},
  {path: 'productos',component: ProductosComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'empleados', component: EmpleadosComponent},
  {path: 'ingredientes',component: IngredientesComponent},
  {path: 'vistas',component: VistasComponent},
  {path: 'factura/:ingrediente',component: FacturaComponent},
  {path: '',component: HomeComponent},
  {path: 'aprobar',component: AprobarComponent},
  {path: 'addproducto',component: AddproductoComponent}  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
