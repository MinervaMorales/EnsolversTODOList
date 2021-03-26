import { Component, Injector, OnInit } from '@angular/core';
import { Folder } from 'src/app/models/Folder';
import { FolderService } from 'src/app/shared/services/folder.service';

@Component({
  selector: 'app-folder-list',
  templateUrl: './folder-list.component.html',
  styleUrls: ['./folder-list.component.css']
})
export class FolderListComponent implements OnInit {

  
  public foldersList: Folder[];
  public folder: Folder = new Folder();
  public editMode: boolean = false;
  private folderService: FolderService= this.injector.get(FolderService);
  
  constructor(protected injector: Injector) { }

  ngOnInit() {
    this.getFolders();
  }

  
  public getFolders()
  {
    this.folderService.getFolders().subscribe(
      response=> {
        this.foldersList = response.map(item =>{
          return new Folder(item);
        });

      }); 
  }

  
  public add()
  {
    this.folderService.add(this.folder).subscribe(
      response=> {
        this.getFolders();
        this.folder = new Folder();
        alert("Folder Successfully Added");

      }, error =>{
        alert("Unexpected Error");
      });
  }

  public enableEdit(folder)
  {
    this.folder = new Folder(folder);
    this.editMode = true;
  }

  public cancelEdit()
  {
    this.folder = new Folder();
    this.editMode = false;
  }

  public edit()
  {
    this.folderService.update(this.folder).subscribe(
      response=> {
        
        this.getFolders();
        this.cancelEdit();
        alert("Folder Successfully Updated");
      }, error =>{
        alert("Unexpected Error");
      });
  }

  public delete(folder)
  {
    this.folderService.delete(folder.id).subscribe(
      response=> {
        
        this.getFolders();
        alert("Folder Successfully Remove");
      }, error =>{
        alert("Unexpected Error");
      });
  }

}
