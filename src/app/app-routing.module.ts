import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './components/posts/post/post.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },
  { path: 'posts', loadChildren: () => import('./components/posts/list-posts/list-posts.module').then(m => m.ListPostsModule), canActivate: [AuthGuard] },
  { path: 'new', loadChildren: () => import('./components/posts/new-post/new-post.module').then(m => m.NewPostModule), canActivate: [AuthGuard] },
  { path: 'post/:id', component: PostComponent },
  { path: 'login', loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./components/auth/register/register.module').then(m => m.RegisterModule),canActivate: [AuthGuard] },
  { path: 'register2', loadChildren: () => import('./components/auth/register2/register.module').then(m => m.Register2Module), canActivate: [AuthGuard] },
  { path: 'out-of-service', loadChildren: () => import('./components/auth/out-of-service/out-of-service.module').then(m => m.OutOfServiceModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
