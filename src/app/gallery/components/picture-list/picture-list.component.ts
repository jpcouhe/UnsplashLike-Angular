import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable} from 'rxjs';
import { TotalPicture } from '../../models/totalpicture.model';
import { PicturesService } from '../../services/pictures.service';
@Component({
  selector: 'app-picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.scss']
})
export class PictureListComponent implements OnInit {

  


  pictures$!: Observable<TotalPicture[]>;
  imgsReceived: string[] = [];
  picturesArray: any = [[],[],[]];
  search:string = 'random'
  


  index: number = 0;
  page:number = 2
  constructor(private route: ActivatedRoute, private pictureService: PicturesService ) {}

  ngOnInit(): void {
    this.pictures$ = this.route.data.pipe(
      map((data) => data['pictures']['results'])
    );

    this.pictures$.subscribe((pictures) => {
      this.displayPicture(pictures)
    });
    
  }
  
  onScroll() {
    this.pictureService.getPictures(this.page, this.search)
    .pipe(
    map(data => data['results'])
    ).subscribe((pictures)=>{
      this.displayPicture(pictures)
    })

    this.page++
  }

  displayPicture(pictures:TotalPicture[]){
    pictures.forEach((img: any) => {
      this.imgsReceived.push(img.urls.regular);
    });
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 10; j++) {
        this.picturesArray[i].push(this.imgsReceived[this.index]);
        this.index++;
      }
    }

  }

  onNewSearch(search:string){

    this.picturesArray = [[],[],[]];
    this.imgsReceived = []
    this.search = search
    this.index = 0
    this.pictureService.getPictures(this.page, this.search)
    .pipe(
    map(data => data['results'])
    ).subscribe((pictures)=>{
      this.displayPicture(pictures)
    })
  }
}
