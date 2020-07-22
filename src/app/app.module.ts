import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './ui/core/navigation/navigation.component';
import { FooterComponent } from './ui/core/footer/footer.component';
import { AboutComponent } from './ui/screens/about/about.component';
import { SocialMediaLinksComponent } from './ui/core/social-media-links/social-media-links.component';
import { ExperienceComponent } from './ui/screens/experience/experience.component';
import { ProjectsComponent } from './ui/screens/projects/projects.component';
import { ContactComponent } from './ui/screens/contact/contact.component';
import { ButtonsComponent } from './ui/core/buttons/buttons.component';
import { ProjectModalComponent } from './ui/screens/projects/project-modal/project-modal.component';
import { ProjectCardComponent } from './ui/screens/projects/project-card/project-card.component';
import { TimelineBlockComponent } from './ui/screens/experience/timeline-block/timeline-block.component';
import { AngularMaterial } from './ui/angular-material.module';
import { AppRoutingModule } from './router/router.module';
import { HomeComponent } from './ui/screens/home/home.component';
import { PortfolioComponent } from './ui/screens/portfolio/portfolio.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    PortfolioComponent,
    SocialMediaLinksComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    ButtonsComponent,
    ProjectModalComponent,
    ProjectCardComponent,
    TimelineBlockComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterial
  ],
  entryComponents: [
    ProjectModalComponent
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
