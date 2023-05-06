import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormCreateComponent } from './components/form-create/form-create.component';
import { ListOfTasksComponent } from './components/list-of-tasks/list-of-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormCreateComponent,
    ListOfTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
