import { Subject } from 'rxjs';

import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService implements OnInit {


  postsSubject = new Subject<any[]>();

  private posts = [
    {
      id: 1,
      title: 'Machine à laver',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis deserunt impedit',
      created_at: new Date(),
      loveIts: 0,
    },
    {
      id: 2,
      title: 'Frigo',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis deserunt impedit',
      created_at: new Date(),
      loveIts: 0,
    },
    {
      id: 3,
      title: 'Ordinateur',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis deserunt impedit',
      created_at: new Date(),
      loveIts: 0,
    }
  ];

  constructor(private httpClient: HttpClient) {
    this.getPostsFromServer();
  }

  ngOnInit() {

  }
  emitPostSubject() {
    this.postsSubject.next(this.posts.slice());

  }

  addPost(title: string, content: string) {
    const postObject = {
      id: 0,
      title: '',
      content: '',
      created_at: new Date(),
      loveIts: 0
    };
    postObject.title = title;
    postObject.content = content;
    postObject.id = this.posts[(this.posts.length - 1)].id + 1;
    this.posts.push(postObject);
    this.emitPostSubject();
    this.savePostsToServer();
  }

  removePost(id: number) {
    this.posts = this.posts.filter(post => post.id != id);
    this.emitPostSubject();
    this.savePostsToServer();
  }

  addLoveIts(id: number) {
    let foundIndex = this.posts.findIndex(post => post.id == id);
    this.posts[foundIndex].loveIts++;
    this.emitPostSubject();
    this.savePostsToServer();

  }

  removeLoveIts(id: number) {
    let foundIndex = this.posts.findIndex(post => post.id == id);
    this.posts[foundIndex].loveIts--;
    this.emitPostSubject();
    this.savePostsToServer();

  }

  savePostsToServer() {
    this.httpClient
      .put('https://ocr-ng5.firebaseio.com/posts.json', this.posts)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  getPostsFromServer() {
    this.httpClient
      .get<any[]>('https://ocr-ng5.firebaseio.com/posts.json')
      .subscribe(
        (response) => {
          this.posts = response;
          this.emitPostSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

}
