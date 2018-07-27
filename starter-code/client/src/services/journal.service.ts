import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';

const { BASE_URL } = environment;

// export interface Journal {
//   title: String,
//   content: String,
//   date: Date
// }

@Injectable()
export class JournalService {
  constructor(private http: Http) {}

  getNews(){
    return this.http.get(`${environment.BASE_URL}/api/journal-entries/`)
    .map((res) => res.json());
  }

  getSingleNews(id){
    return this.http.get(`${environment.BASE_URL}/api/journal-entries/${id}`)
    .map((res) => res.json());
  }
}