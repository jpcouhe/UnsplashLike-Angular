import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {

  constructor(private http: HttpClient) { }
  
  getPictures(pageIndex = 1, search = 'random'): Observable<any> {
    return this.http.get<any>(
      `https://api.unsplash.com/search/photos?page=${pageIndex}&per_page=30&query=${search}&client_id=${environment.key}`
    );
  }
}
