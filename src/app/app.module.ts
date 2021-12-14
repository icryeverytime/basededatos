import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { RegistroComponent } from './registro/registro.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { EmpleadosComponent } from './empleados/empleados.component';
@NgModule({
  declarations: [
    AppComponent,
    InventarioComponent,
    ProveedoresComponent,
    RegistroComponent,
    LoginComponent,
    EmpleadosComponent
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
