import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { error } from 'protractor';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HTTP';

  arrPost: any[];
  formulario: FormGroup;
  constructor(private postService : PostService){

    this.formulario = new FormGroup({
      title: new FormControl(''),
      body: new FormControl(''),
      userId: new FormControl('')
    });
  }

  ngOnInit(){
    this.postService.getAll()
      .then(posts => {
        console.log(posts);
        this.arrPost = posts;
      })
      .catch(error => console.log(error));
  }

  async onClickBox(id: number) {
    try {
      const post = await this.postService.getById(id);
      console.log(post);
    } catch (error) {
      console.log(error);
    }
  }

  onClickPost(){
    this.postService.create(
      {
        title: 'Nuevo tituo',
        body: 'Este es el cuerpo del post',
        userId : 1
      }
    ).then(response => {
      console.log("Luego del POST devuelvo\n ");
      console.log(response);
    })
    .catch(error => console.log(error));
  }

  async onSumbitForm(){
    try {
      const response   = await this.postService.create(this.formulario.value);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  onClickUpdate(){
    this.postService.update({
      id: 5,
      title: ' Nuevo titulo desde funcion UPDATE',
      body: ' Nuevo body desde funcion UPDATE',
      userId: 3
    }).then(response => {
      console.log('Reapuesta de la peticion HTTP, put');
      console.log(response);

    }).catch(error => console.log(error));
  }

  async onClickDelete(){
    try {
      const response = await this.postService.delete(5);
      console.log('Respuesta despues de peticion HTTP, Delete');
      console.log(response);
    } catch (error) {
      console.log(error);
    }

  }
}
