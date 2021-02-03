import { SEscritoresService } from './servicios/s-escritores.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'writers-list';


  constructor(private escritorService : SEscritoresService){ }

  ngOnInit(){

  }


}
