import { Component } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent {
  public projects!: Project[];
  public url: string;

  constructor(
    private _projectService: ProjectService
  ){
    this.getProjects();
    this.url = Global.url;
  }

  getProjects(){
    this._projectService.getPojects().subscribe(
      response =>{
        console.log(response);
        if(response.projects){
          this.projects = response.projects;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
