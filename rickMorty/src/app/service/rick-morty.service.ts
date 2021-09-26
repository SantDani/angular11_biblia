import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {error} from "protractor";
// https://rickandmortyapi.com/api/character/?page=1
const URL_API = 'https://rickandmortyapi.com/api/';
const URL_API_PAGE = 'https://rickandmortyapi.com/api/character?page=';
@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  constructor(private http: HttpClient) { }

  getAll(): any{
    return this.http.get<any>(`${URL_API}character`).toPromise();
  }
  getPageURL(page: string): Promise<any>{
    try {
      return this.http.get(page).toPromise();
    }catch (e) {
      console.error(e);
      console.error(e);
      throw new Error('Error ');
    }
  }

  getPageByNumber(numberPage: number): Promise<any> {
    return this.http.get(`${URL_API_PAGE}${numberPage}`).toPromise();
  }
}
