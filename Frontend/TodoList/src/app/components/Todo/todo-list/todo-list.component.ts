import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Folder } from 'src/app/models/Folder';
import { TodoItem } from 'src/app/models/TodoItem';
import { FolderService } from 'src/app/shared/services/folder.service';
import { TodoListService } from 'src/app/shared/services/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public listData:MatTableDataSource<any>;

  public todoList: TodoItem[];
  public todoItem: TodoItem = new TodoItem();

  private todoListService: TodoListService = this.injector.get(TodoListService);
  
  public constructor(protected injector: Injector) 
  {
   
  }

  ngOnInit() {
    this.getItems();
  }

  public getItems()
  {
    this.todoListService.getItems().subscribe(
      response=> {
        this.todoList = response.map(item =>{
          return new TodoItem(item);
        });

      }); 
  }

  public  add()
  {

    this.todoListService.add(this.todoItem).subscribe(
      response=> {
        
        this.getItems();
        alert("Task Successfully Added");
      }, error =>{
        alert("Unexpected Error");
      });
  }

  public edit(todoItem)
  {
    //this.todoListService.update(todoItem)
  }

  public delete(todoItem)
  {

    this.todoListService.delete(todoItem.id).subscribe(
      response=> {
        
        this.getItems();
        alert("Task Successfully Remove");
      }, error =>{
        alert("Unexpected Error");
      });
 
  }

  public updateStatus(todoItem)
  {
    try
    {
      this.todoListService.update(todoItem);
      alert("Task Successfully Updated");
    }
    catch(error)
    {
      alert("Unexpected Error");
    }
  }

  public markChecked(completed)
  {
    return Boolean(completed);
  }

}
