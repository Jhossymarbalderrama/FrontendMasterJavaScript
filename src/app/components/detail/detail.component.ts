import { Component } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})
export class DetailComponent {
  public url: string;
  public project: any;
  public confirm: boolean = false;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.url = Global.url;

    this._route.params.subscribe(params =>{
      let id = params['id'];

      this.getProject(id);
    });
  }

  getProject(id: any){
    this._projectService.getProject(id).subscribe(
      response =>{        
        this.project = response;
      },
      error =>{
        console.log(<any>error);
      });
  }

  setConfirm(confirm: boolean){
    this.confirm = confirm;
  }

  deleteProject(id:any){
    this._projectService.deleteProject(id).subscribe(
      response =>{
        if(response.project){
          this._router.navigate(['/proyectos']);
        }
      },
      error =>{
        console.log(<any>error);
      }
    );
  }
}
