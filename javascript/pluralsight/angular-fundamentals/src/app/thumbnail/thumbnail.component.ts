import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {

  @Input() event: any;

  constructor() { }

  ngOnInit() {
  }

}
