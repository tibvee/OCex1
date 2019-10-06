import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {
  @Input() posttitle: string;
  @Input() postcontent: string;
  @Input() postloveIts: number;
  @Input() postcreated_at: string ;

add() {
  this.postloveIts = this.postloveIts + 1;
}

  remove() {
    this.postloveIts = this.postloveIts - 1;
  }

  constructor() { }

  ngOnInit() {
  }

}
