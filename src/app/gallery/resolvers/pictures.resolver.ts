import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { PicturesService } from '../services/pictures.service';

@Injectable({
  providedIn: 'root'
})
export class PicturesResolver implements Resolve<any> {
  constructor(private pictureService: PicturesService) {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.pictureService.getPictures();
  }
}
