import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts : Post[];
  postsSubject : Subject<Post[]> = new Subject<Post[]>();
  constructor() { 
    this.posts = [
      new Post("Premier Post", "Quantum es ut est ut suspicione esse sine omnes admonitum pateat est verborum tamen politeque."),
      new Post( "Deuxiéme Post", "Abiecto consorte sollemnia interrogantis gnarus qui in et laceratus mansit iniquitati diutius pertinacius atque incusare regis inpegit iniquitati oculos quemquam.."),
      new Post( "Autre Post","uidem iudicarent (saepe illis ad cuius posse eos cuius quisque..")
    ];
    this.emitSubject();
  }
  
  emitSubject() {
    this.postsSubject.next(this.posts);
  }
  
  createNewPost(post: Post) {
    this.posts.push(post);
    this.emitSubject();
  }
  
  removePost(post: Post) {
    const index = this.posts.indexOf(post, 0);
    if (index > -1) {
     this.posts.splice(index, 1);
    }
    this.emitSubject();
  }

}
