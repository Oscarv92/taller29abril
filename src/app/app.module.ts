import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { BarraComponent } from './componente/barra/barra.component';
import { FooterComponent } from './componente/footer/footer.component';
import { BajoComponent } from './componente/bajo/bajo.component';
import { MedioComponent } from './componente/medio/medio.component';
import { AltoComponent } from './componente/alto/alto.component';
import { RegistroComponent } from './componente/registro/registro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BarraComponent,
    FooterComponent,
    BajoComponent,
    MedioComponent,
    AltoComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
