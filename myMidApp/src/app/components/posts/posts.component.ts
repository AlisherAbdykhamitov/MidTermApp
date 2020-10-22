import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { AppService } from 'src/app/services/app.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  users: User[];
  posts: Post[];
  comments: Comment[];
  show = false;
  newComment: string;
  newComments = [];
  comment = false;
  constructor(private appServ: AppService, private mainServ: MainService) { }

  ngOnInit(): void {
    this.getPosts();
    this.getUsers();
  }
  getPosts(): void {
    this.mainServ.getPosts().subscribe(post => this.posts = post);
  }
  getUsers(): void {
    this.mainServ.getUsers().subscribe(user => this.users = user);
  }
  logout() {
    this.appServ.logout();
  }
  postcommentShow(): void {
    this.comment = true;
  }
}
