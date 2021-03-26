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
    this.folderService.add(this.folder);
  }

  public edit(folder)
  {
    //this.folderService.update(folder)
  }

  public delete(folder)
  {
    this.folderService.delete(folder.id)
  }

}
