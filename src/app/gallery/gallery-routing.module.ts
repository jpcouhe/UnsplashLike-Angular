import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PictureListComponent } from './components/picture-list/picture-list.component';
import { PicturesResolver } from './resolvers/pictures.resolver';

const routes: Routes = [
  {
    path: '',
    component: PictureListComponent,
    resolve: { pictures: PicturesResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalleryRoutingModule {}
