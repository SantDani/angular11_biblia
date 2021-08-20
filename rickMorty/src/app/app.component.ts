import {Component, OnInit} from '@angular/core';
import {RickMortyService} from "./service/rick-morty.service";
import {any} from "codelyzer/util/function";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'rickMorty';
  info: any;
  charters: any[];

  constructor( private rm: RickMortyService) {
    // this.info = [];
    this.charters = [];
  }

  ngOnInit(): void {
     this.rm.getAll()
       .then((response: any) => {
         // console.log(response);

         this.loadData(response);
       });

  }

  private loadData(response: any) {
    this.info = response.info;
    // console.log(response.info.next);
    this.charters = response.results;
  }

  prevPage(): void {
    // console.log('prev page', this.info);
    // console.log('prev page', this.info.prev);
    // console.log('prev page', this.info.next);
    // console.log('prev page', this.info['prev']);


    this.rm.getPage(this.info.prev).then( (response: any) => {
      this.loadData(response);
    });
  }

  nextPage(): void {
    // console.log('Next page');
    // console.log('prev page', this.info.prev);
    // console.log('prev page', this.info.next);

    this.rm.getPage(this.info.next).then( (response: any) => {
      this.loadData(response);
    });
  }
}
