import { Component } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HTTP';

  arrPost: any[];
  constructor(private postService : PostService){ }

  ngOnInit(){
    this.postService.getAll()
      .then(posts => {
        console.log(posts);
        this.arrPost = posts;
      })
      .catch(error => console.log(error));
  }
}
