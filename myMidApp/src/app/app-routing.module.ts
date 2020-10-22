import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbComponent } from './components/alb/alb.component';
import { LoginComponent } from './components/login/login.component';
import { PostsComponent } from './components/posts/posts.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UsersComponent } from './components/users/users.component';
import { MainComponent } from './main/main.component';
import { AlbAliService } from './services/alb-ali.service';
import { AliService } from './services/ali.service';
import { MainAliService } from './services/main-ali.service';
import { PostAliService } from './services/post-ali.service';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UsersComponent,
    pathMatch: 'full',
    canActivate: [AliService]
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainComponent,
    pathMatch: 'full',
    canActivate: [MainAliService]
  },
  {
    path: 'alb',
    component: AlbComponent,
    pathMatch: 'full',
    canActivate: [AlbAliService]
  },
  {
    path: 'posts',
    component: PostsComponent,
    pathMatch: 'full',
    canActivate: [PostAliService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
