import { Component, OnInit } from '@angular/core';
import { Post } from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'OpcBlog';
  posts: Array<Post>;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.posts = [
        new Post("Premier Post", "Quantum es ut est ut suspicione esse sine omnes admonitum pateat est verborum tamen politeque."),
        new Post( "Deuxiéme Post", "Abiecto consorte sollemnia interrogantis gnarus qui in et laceratus mansit iniquitati diutius pertinacius atque incusare regis inpegit iniquitati oculos quemquam.."),
        new Post( "Autre Post","uidem iudicarent (saepe illis ad cuius posse eos cuius quisque.."),
        
    ]
    
  }
}
