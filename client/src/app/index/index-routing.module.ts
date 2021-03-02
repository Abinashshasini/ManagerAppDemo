import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPage } from './index.page';

const routes: Routes = [
  {
    path: '',
    component: IndexPage,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../pages/welcome/welcome.module').then(
            (m) => m.WelcomePageModule
          ),
      },
      {
        path: 'login',
        loadChildren: () =>
          import('../pages/login/login.module').then((m) => m.LoginPageModule),
      },
      {
        path: 'signup',
        loadChildren: () =>
          import('../pages/signup/signup.module').then(
            (m) => m.SignupPageModule
          ),
      },
      {
        path: 'forget-password',
        loadChildren: () =>
          import('../pages/forgot-password/forgot-password.module').then(
            (m) => m.ForgotPasswordPageModule
          ),
      },
      {
        path: 'feed',
        loadChildren: () =>
          import('../pages/feed/feed.module').then((m) => m.FeedPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRoutingModule {}
