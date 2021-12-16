import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { RegistroComponent } from './registro/registro.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductosComponent } from './productos/productos.component';
import { LoginComponent } from './login/login.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { IngredientesComponent } from './ingredientes/ingredientes.component';
import { VistasComponent } from './vistas/vistas.component';
import { FacturaComponent } from './factura/factura.component';
import { HomeComponent } from './home/home.component';
import { AprobarComponent } from './aprobar/aprobar.component';
import { AddproductoComponent } from './addproducto/addproducto.component';

@NgModule({
  declarations: [
    AppComponent,
    InventarioComponent,
    ProveedoresComponent,
    RegistroComponent,
    ProductosComponent,
    LoginComponent,
    EmpleadosComponent,
    IngredientesComponent,
    VistasComponent,
    FacturaComponent,
    HomeComponent,
    AprobarComponent,
    AddproductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
