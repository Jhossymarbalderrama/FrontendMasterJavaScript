import { Component } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditComponent {

  public title: string;
  public project!: Project;
  public status: String = "";
  public fileToUpload!: Array<File>;
  public url: string;

  public save_Project:any;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.title = "Editar Projecto";
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

  onSubmit(projectForm: any){
    this._projectService.updateProject(this.project).subscribe(
      response =>{
        if(response.project )
        {        
          if(this.fileToUpload){
            //Subir la imagen
            this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id, [],this.fileToUpload,'image')
            .then((result:any) =>{
              this.save_Project = result.project;
              this.status = 'success' ;
              console.log(result);
            });
          }else{
            this.save_Project = response.project;
              this.status = 'success' ;
              console.log(response.project);
          }       
        }
        else this.status = 'faild'
        console.log(response);
      },
      error =>{
        console.log(<any>error);
      }
    )
  }

  fileChangeEvent(fileInput: any){
    console.log(fileInput);
    this.fileToUpload = <Array<File>>fileInput.target.files
  }
}
