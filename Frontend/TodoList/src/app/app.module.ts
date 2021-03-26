import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FolderAddComponent } from './components/Folder/folder-add/folder-add.component';
import { FolderEditComponent } from './components/Folder/folder-edit/folder-edit.component';
import { FolderListComponent } from './components/Folder/folder-list/folder-list.component';
import { HomeComponent } from './components/Home/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoModule } from './components/Todo/todo/todo.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
   
    FolderAddComponent,
    FolderEditComponent,
    FolderListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TodoModule,
    HttpClientModule,
    FormsModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
