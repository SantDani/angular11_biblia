import { LibrosService } from './../servicios/libros/libros.service';
import { SEscritoresService } from './../servicios/s-escritores.service';
import { Escritor } from './../models/escritor.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-writer-detail',
  templateUrl: './writer-detail.component.html',
  styleUrls: ['./writer-detail.component.css']
})
export class WriterDetailComponent implements OnInit {

  detailEscritor: Escritor;
  constructor(
    private activateRoute: ActivatedRoute,
    private escritoresService: SEscritoresService
  ) {
    this.detailEscritor = null;
  }

  ngOnInit(): void {
    this.ObserverDinamicURL();
  }

  ObserverDinamicURL(){
    this.activateRoute.params.subscribe( async concreteSubscribers=>{
      console.log("componente writer");
      console.log(concreteSubscribers);
      console.log(concreteSubscribers.escritorId);
      // this.escritorID = concreteSubscribers.escritorId;
      this.detailEscritor = await this.escritoresService.getEscritorById(concreteSubscribers.escritorId);
    });
  }

}
