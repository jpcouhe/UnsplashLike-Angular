import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureListComponent } from './components/picture-list/picture-list.component';
import { PictureListItemComponent } from './components/picture-list-item/picture-list-item.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PicturesResolver } from './resolvers/pictures.resolver';
import { PicturesService } from './services/pictures.service';



@NgModule({
  declarations: [PictureListComponent, PictureListItemComponent],
  imports: [CommonModule, GalleryRoutingModule, SharedModule],
  providers: [PicturesService, PicturesResolver],
})
export class GalleryModule { }
