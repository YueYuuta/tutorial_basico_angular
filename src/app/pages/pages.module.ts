import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { ServiceComponent } from './service/service.component';
import { QualificationComponent } from './qualification/qualification.component';

@NgModule({
  declarations: [
    InicioComponent,
    AboutComponent,
    SkillComponent,
    ServiceComponent,
    QualificationComponent,
  ],
  imports: [CommonModule],
  exports: [
    InicioComponent,
    AboutComponent,
    SkillComponent,
    ServiceComponent,
    QualificationComponent,
  ],
})
export class PagesModule {}
