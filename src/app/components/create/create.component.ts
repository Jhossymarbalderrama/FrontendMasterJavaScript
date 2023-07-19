import { Component } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService]
})
export class CreateComponent {
  public title: string;
  public project: Project;

  constructor(
    private _projectService: ProjectService
  ){
    this.title = "Crear Projecto";
    this.project = new Project('','','','',2019,'','');    
  }

  onSubmit(){
    console.log(this.project);
    this._projectService.saveProject(this.project).subscribe(
      response=>{
        console.log(response);
      },
      error=>{
        console.log(<any>error);
      }
    );
  }
}
