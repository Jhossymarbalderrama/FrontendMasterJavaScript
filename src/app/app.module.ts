import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateComponent } from './components/create/create.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ErrorComponent } from './components/error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    CreateComponent,
    ProjectsComponent,
    ErrorComponent,
    DetailComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
