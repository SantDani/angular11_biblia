import { SEscritoresService } from './../servicios/s-escritores.service';
import { Escritor } from './../models/escritor.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.css']
})
export class WriterComponent implements OnInit {

  escritores: Escritor[];
  paises : string[];
  escritorID: number;

  constructor(private escritoresService : SEscritoresService , private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.escritores = this.escritoresService.getEscritores();
    this.paises = this.escritoresService.getPaises();
    //console.log("paises recuperados " + this.paises);

    //this.addObserver();
  }

  addObserver(){
    this.activateRoute.params.subscribe(concreteSubscribers=>{
      console.log("componente writer");
      console.log(concreteSubscribers);
      console.log(concreteSubscribers.escritorId);
      this.escritorID = concreteSubscribers.escritorId;


    });
  }
  async getEscritorByID(id: number){

    try{

      this.escritores = await this.escritoresService.getEscritorById(id);
      console.log("consigo ");
      console.log(this.escritores);
    }catch(error){
      console.log(error);
    }
  }
  async onPais(pais : string){
    try{

      this.escritores = await this.escritoresService.getEscritorsFrom(pais);

    }catch(error){
      console.log(error);
    }

  }

  onAllEscritors(){
    this.escritores = this.escritoresService.getEscritores();
  }
}
