import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  title = 'Posts';
  listPosts: any[];
  postSubscription: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postSubscription = this.postService.postsSubject.subscribe(
      (posts: any[]) => {
        this.listPosts = posts;
      }
      );
      this.postService.emitPostSubject();
      // this.postService.getPostsFromServer();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

}
