import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Photo } from 'src/app/models/photos';
import { User } from 'src/app/models/user';
import { AppService } from 'src/app/services/app.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  photos: Photo[];
  // logged = false;
  constructor(private router: Router, public appServ: AppService, private userService: UserService) {

  }

  ngOnInit(): void {
    this.getAvatars();
    this.getUsers();
  }
  getUsers(): void {
    this.userService.login().subscribe(users => this.users = users);
  }

  getAvatars(): void {
    this.userService.getAvatars().subscribe(photo => this.photos = photo);
  }
  logout() {
    this.appServ.logout();
    // this.router.navigate['/login'];
  }
}
