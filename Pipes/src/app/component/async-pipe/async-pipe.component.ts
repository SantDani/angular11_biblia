import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})

/*
Nos permite resolver una promesa directamente en HTML
ya sea generandola o consumirla
 */
export class AsyncPipeComponent implements OnInit {

  promesa: Promise<string>;

  promPost: Promise<any[]>;
  constructor(private postService: PostsService ) {
    this.promesa = new Promise((resolve, reject) =>{
      setTimeout(() => resolve(' Se resuelve la promesa pasados 4 segundos'), 4000);
    });

    /*En casos anteiores era necesario realizar un try-catch,
    sin embargo, ahora la variable promPost en si misma es una promesa */
    this.promPost = this.postService.getAll();
  }

  ngOnInit(): void {
  }

}
