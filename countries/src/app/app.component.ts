import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

const URL_COUNTRIES_EU = 'https://restcountries.eu/rest/v2/regionalbloc/eu';
export class AppComponent implements OnInit{
  title = 'countries';


  public countries: any;

  constructor(private http: HttpClient) {
    this.countries = [];
  }

  ngOnInit(): void {

    this.countries = this.http.get<any>(URL_COUNTRIES_EU);
  }

}
