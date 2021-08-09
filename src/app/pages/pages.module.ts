import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { ServiceComponent } from './service/service.component';
import { QualificationComponent } from './qualification/qualification.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SwiperModule } from 'swiper/angular';
import { ProjectComponent } from './project/project.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    InicioComponent,
    AboutComponent,
    SkillComponent,
    ServiceComponent,
    QualificationComponent,
    PortfolioComponent,
    ProjectComponent,
    TestimonialComponent,
    ContactComponent,
  ],
  imports: [CommonModule, SwiperModule],
  exports: [
    InicioComponent,
    AboutComponent,
    SkillComponent,
    ServiceComponent,
    QualificationComponent,
    PortfolioComponent,
    ProjectComponent,
    TestimonialComponent,
    ContactComponent,
  ],
})
export class PagesModule {}
