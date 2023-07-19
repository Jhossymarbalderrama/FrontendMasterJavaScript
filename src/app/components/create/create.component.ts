import { Component } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent {
  public title: string;
  public project: Project;
  public status: String = "";
  public fileToUpload!: Array<File>;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ){
    this.title = "Crear Projecto";
    this.project = new Project('','','','',2019,'','');    
  }

  onSubmit(projectForm: any){
    console.log(this.project);
    //Guardar datos basicos
    this._projectService.saveProject(this.project).subscribe(
      response=>{
        if(response.project )
        {
          
          //Subir la imagen
          this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id, [],this.fileToUpload,'image')
          .then((result:any) =>{
            this.status = 'success' ;
            console.log(result);
            projectForm.reset();
          });

        }
        else this.status = 'faild'
        console.log(response);
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

  fileChangeEvent(fileInput: any){
    console.log(fileInput);
    this.fileToUpload = <Array<File>>fileInput.target.files
  }
}
