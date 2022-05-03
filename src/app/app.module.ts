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

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BarraComponent,
    FooterComponent,
    BajoComponent,
    MedioComponent,
    AltoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
