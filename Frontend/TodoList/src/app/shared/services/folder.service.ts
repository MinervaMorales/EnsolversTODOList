import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Folder } from 'src/app/models/Folder';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FolderService {

  public constructor(private http: HttpClient)  
  { }

  public getFolders(): Observable<Folder[]> 
  {
    return this.http.get<Folder[]>(`${environment.backendUrl}/folders/all`);
  }

  public add(item: Folder):Observable<any>
  {
     return this.http.post(`${environment.backendUrl}/folders/add`, item);
  }

  public update(item: Folder):Observable<any>
  {
     return this.http.put(`${environment.backendUrl}/folders/update`, item);
  }

  public delete(id: number):Observable<any>
  {
    return this.http.get(`${environment.backendUrl}/folders/delete/${id}`);
  }
}
