import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { FooterComponent } from './core/footer/footer.component';
import { IntroComponent } from './screens/intro/intro.component';
import { SocialMediaLinksComponent } from './core/social-media-links/social-media-links.component';
import { AboutComponent } from './screens/intro/about/about.component';
import { ExperienceComponent } from './screens/experience/experience.component';
import { ProjectsComponent } from './screens/projects/projects.component';
import { ContactComponent } from './screens/contact/contact.component';
import { ButtonsComponent } from './core/buttons/buttons.component';
import { ProjectModalComponent } from './screens/projects/project-modal/project-modal.component';
import { ProjectCardComponent } from './screens/projects/project-card/project-card.component';
import { TimelineBlockComponent } from './screens/experience/timeline-block/timeline-block.component';
import { WavesComponent } from './core/waves/waves.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    IntroComponent,
    SocialMediaLinksComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    ButtonsComponent,
    ProjectModalComponent,
    ProjectCardComponent,
    TimelineBlockComponent,
    WavesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  entryComponents: [
    ProjectModalComponent
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
