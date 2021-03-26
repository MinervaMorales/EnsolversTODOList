import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAddComponent } from '../todo-add/todo-add.component';
import { TodoEditComponent } from '../todo-edit/todo-edit.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TodoAddComponent,
    TodoEditComponent,
    TodoListComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    FormsModule
  ], 
  exports:[
    TodoListComponent,
    
    MatCheckboxModule,
  ]
})
export class TodoModule { }
