import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItem } from 'src/app/models/TodoItem';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
 
  public constructor(private http: HttpClient)  
  { }

  public getItems(): Observable<TodoItem[]> 
  {
    return this.http.get<TodoItem[]>(`${environment.backendUrl}/items/all`);
  }

  public add(item: TodoItem):Observable<any>
  {
     return this.http.post<any>(`${environment.backendUrl}/items/add`, item);
  }

  public update(item: TodoItem):Observable<any>
  {
     return this.http.put(`${environment.backendUrl}/item/update`, item);
  }

  public delete(id: any):Observable<any>
  {
    return this.http.get(`${environment.backendUrl}/item/delete/${id}`);
  }

}
