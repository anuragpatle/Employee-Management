import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '@app/home';
import { AdminComponent } from '@app/admin';
import { LoginComponent } from '@app/login';
import { AuthGuard } from '@app/_helpers';
import { Role } from '@app/_models';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'login',
    component: LoginComponent
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
