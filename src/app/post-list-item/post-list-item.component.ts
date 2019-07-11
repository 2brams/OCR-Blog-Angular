import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() date: Date;
  @Input() loveIts: number;

  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    console.log("add")
    this.loveIts++;
  }
  
  onRemove() {
    console.log("remove")
    this.loveIts--;
  }
}
