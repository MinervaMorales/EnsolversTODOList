import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FolderAddComponent } from './components/Folder/folder-add/folder-add.component';
import { FolderEditComponent } from './components/Folder/folder-edit/folder-edit.component';
import { FolderListComponent } from './components/Folder/folder-list/folder-list.component';
import { TodoAddComponent } from './components/Todo/todo-add/todo-add.component';
import { TodoEditComponent } from './components/Todo/todo-edit/todo-edit.component';
import { TodoListComponent } from './components/Todo/todo-list/todo-list.component';


const routes: Routes = [
  { path:'todo-list', component: TodoListComponent},
  { path: 'todo-add', component: TodoAddComponent},
  { path: 'todo-edit', component: TodoEditComponent},
  { path: 'folder-list', component: FolderListComponent},
  { path: 'folder-add', component: FolderAddComponent},
  { path: 'folder-edit', component: FolderEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
