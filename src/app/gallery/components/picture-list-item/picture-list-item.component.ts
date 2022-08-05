import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-picture-list-item',
  templateUrl: './picture-list-item.component.html',
  styleUrls: ['./picture-list-item.component.scss']
})
export class PictureListItemComponent {
  @Input() picture!: any;
  constructor() { }

}
