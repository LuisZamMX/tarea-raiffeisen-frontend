import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Se importan los Módulos RouterModule y Routes para hacer el enrutamiento del front end
import { RouterModule, Routes } from '@angular/router'
//Se importa el módulo HttpCLientModule para hacer peticiones a la api (backend)
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
//Se importan los componentes creados
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListaItemsComponent } from './components/lista-items/lista-items.component';
import { GraficaItemsComponent } from './components/grafica-items/grafica-items.component';
//Se importa el módulo CHartsModule para crear la gráfica
import { ChartsModule } from 'ng2-charts'

//Se crea la constante rutas para manejar las rutas de los componentes de frontend
const rutas: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'graficas',
    component: GraficaItemsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    ListaItemsComponent,
    GraficaItemsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(rutas, {
      enableTracing: true,
      paramsInheritanceStrategy: "always",
      useHash: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
