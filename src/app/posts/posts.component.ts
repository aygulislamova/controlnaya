import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: string[] = ['post1', 'post2', 'post3', 'post4'];
  constructor() { }

  ngOnInit(): void {
  }

}
