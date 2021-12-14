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
@NgModule({
  declarations: [
    AppComponent,
    InventarioComponent,
    ProveedoresComponent,
    RegistroComponent,
    ProductosComponent
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
