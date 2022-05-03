import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componente/inicio/inicio.component';
import { BajoComponent } from './componente/bajo/bajo.component';
import { MedioComponent } from './componente/medio/medio.component';
import { AltoComponent } from './componente/alto/alto.component';


const routes: Routes = [
{path:'inicio', component:InicioComponent},
{path:'bajo',component:BajoComponent},
{path:'medio',component:MedioComponent},
{path:'alto',component:AltoComponent},
{path:'',component:InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
