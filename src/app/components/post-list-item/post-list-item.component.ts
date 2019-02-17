import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input()
  post: Post;

  constructor(private postService: PostsService) { }

  ngOnInit() {
  }

  add() {
    this.post.loveIts++;
  }

  dec() {
    this.post.loveIts--;
  }

  delete() {
    this.postService.removePost(this.post);
  }
}

