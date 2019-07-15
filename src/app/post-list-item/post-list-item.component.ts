import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() created_at: Date;
  @Input() loveIts: number;
  @Input() index: number;
  @Input() id: number;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onAddLoveIts() {
    this.postService.addLoveIts(this.id);
    console.log(this.loveIts);
  }

  onRemoveLoveIts() {
    this.postService.removeLoveIts(this.id);
    console.log(this.loveIts);
  }
  onRemovePost() {
    if (confirm('Etes-vous sûr de vouloir supprimé ce post ?')) {
      this.postService.removePost(this.id);
    } else {
      return null;
    }
  }
}
