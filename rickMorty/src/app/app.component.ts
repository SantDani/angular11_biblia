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
  actualPage: number;
  totalPages: number;

  constructor( private rm: RickMortyService) {
    // this.info = [];
    this.charters = [];
    this.actualPage = 1;
    this.totalPages = 1;
  }

  ngOnInit(): void {
     this.rm.getAll()
       .then((response: any) => {
         console.log(response);
         this.loadData(response);


       });

    // console.log(this.info);

    // console.log(this.info.next.split('='));
  }

  loadData(response: any): void {
    this.info = response.info;
    // console.log(response.info.next);
    this.charters = response.results;

    if (this.info.next){
      this.actualPage = this.info.next.split('=')[1] - 1;
    }else{
      this.actualPage = this.info.pages;
    }
    this.totalPages = this.info.pages;
  }

  prevPage(): void {
    // console.log('prev page', this.info);
    // console.log('prev page', this.info.prev);
    // console.log('prev page', this.info.next);
    // console.log('prev page', this.info['prev']);


    try {
      if (!this.info.prev){
        console.error('page not exists');
        return;
      }
      this.rm.getPageURL(this.info.prev).then( (response: any) => {
        this.loadData(response);
        console.log('log - prev', response);
      });
    }catch (e){
      console.error(e);
    }
    this.scrollToTop();
  }

  nextPage(): void {
    // console.log('Next page');
    // console.log('prev page', this.info.prev);
    // console.log('prev page', this.info.next);

    if (!this.info.next){
      console.error('page not exists');
      return;
    }

    this.rm.getPageURL(this.info.next).then( (response: any) => {
      this.loadData(response);
      // console.log('log -', response);
    });
    this.scrollToTop();
  }

  scrollToTop(): void {
    window.scroll(0, 0);
  }

  changePageActual(valueInputPage: any): void {
    console.log('log -', valueInputPage.value);

    const numPage: number = +valueInputPage.value;

    if (numPage < 1){
      this.actualPage = 1;
    } else if (numPage > this.totalPages){
      this.actualPage = this.totalPages;
    }else{
      this.actualPage = numPage;
    }

    console.log('log - ', this.actualPage);
    this.rm.getPageByNumber(this.actualPage).then((response: any) => {
      this.loadData(response);
    });

  }
}
