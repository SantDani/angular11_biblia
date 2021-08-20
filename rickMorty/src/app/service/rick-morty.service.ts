import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// https://rickandmortyapi.com/api/character/?page=1
const URL_API = 'https://rickandmortyapi.com/api/';
@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  constructor(private http: HttpClient) { }

  getAll(): any{
    return this.http.get<any>(`${URL_API}character`).toPromise();
  }
  getPage(page: string): Promise<any>{

    return this.http.get(page).toPromise();
  }
}
