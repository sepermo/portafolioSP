import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { SobreMiComponent } from './sobreMi/sobreMi.component';
import { BotonSobreMiComponent } from './sobreMi/botonSobreMi/botonSobreMi.component';
import { PrimerProyectoComponent } from './proyectos/primerProyecto/primerProyecto.component';
import { SegundoProyectoComponent } from './proyectos/segundoProyecto/segundoProyecto.component';
import { PrimeraActividadComponent } from './actividades/primeraActividad/primeraActividad.component';
import { ContactameComponent } from './contactame/contactame/contactame.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainComponent,
    MenuComponent,
    SobreMiComponent,
    BotonSobreMiComponent,
    PrimerProyectoComponent,
    SegundoProyectoComponent,
    PrimeraActividadComponent,
    ContactameComponent,
    FooterComponent
  ],
  exports: [
    MainComponent,
    MenuComponent,
    SobreMiComponent,
    BotonSobreMiComponent,
    PrimerProyectoComponent,
    SegundoProyectoComponent,
    PrimeraActividadComponent,
    ContactameComponent,
    FooterComponent
  ]
})
export class PortafolioModule { }
