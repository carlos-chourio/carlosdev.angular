import { Post } from './post';
import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  getPosts(): Observable<Post[]> {
    let posts:Post[] = [{
        id: Guid.create(),
        title: "My First Post",
        content: "Lorem Ipsum",
        author: {
          id: 1,
          email: "carlos18daniel@gmail.com",
          name: "Carlos",
          userName: "carlos.chourio"
        },
        comments: null
      },
      {
        id: Guid.create(),
        title: "My Second Post",
        content: "Lorem Ipsum palumn",
        author: {
          id: 1,
          email: "carlos-daniel.13@hotmail.com",
          name: "Carlos Daniel",
          userName: "carlos-chourio"
        },
        comments: null
      }
    ];
    return of(posts);
  }
}
