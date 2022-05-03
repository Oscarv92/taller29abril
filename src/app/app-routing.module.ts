import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componente/inicio/inicio.component';
import { BajoComponent } from './componente/bajo/bajo.component';
import { MedioComponent } from './componente/medio/medio.component';
import { AltoComponent } from './componente/alto/alto.component';
import { RegistroComponent } from './componente/registro/registro.component';


const routes: Routes = [
{path:'inicio', component:InicioComponent},
{path:'bajo',component:BajoComponent},
{path:'medio',component:MedioComponent},
{path:'alto',component:AltoComponent},
{path:'',component:InicioComponent},
{path:'registro',component:RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
