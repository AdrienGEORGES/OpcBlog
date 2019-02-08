import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input()
  post: Post;
  constructor() { }

  ngOnInit() {
  }

  add() {
    this.post.loveIts++;
  }

  dec() {
    this.post.loveIts--;
  }
}
