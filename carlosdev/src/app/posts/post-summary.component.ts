import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { tap } from 'rxjs/operators';
import { Post } from './post';

@Component({
  selector: 'app-post-summary',
  templateUrl: './post-summary.component.html',
  styleUrls: ['./post-summary.component.css']
})
export class PostSummaryComponent implements OnInit {
  posts : Post[];
  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postService.getPosts().pipe(
      tap(data=> console.log(data)),
    ).subscribe(data=> this.posts = data);
  }
}
