import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Posts';

  Posts = [new Post("Mon premier post"), new Post("Mon deuxième post"), new Post("Encore un post")];
}

class Post{

    title: string;
    content: string;
    loveIts: number;
    created_at: Date;

    constructor(title: string){
      this.title = title;
      this.created_at = new Date();
      this.content = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis deserunt impedit, fugit eligendi architecto magnam alias dicta expedita maiores molestias aliquid. Autem, earum dolores iure repudiandae qui voluptatibus deleniti rem.";
      this.loveIts = 0;

    }
}
