import { Route } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { PasswordComponent } from './password.component';

export const passwordRoute: Route = {
  path: 'password',
  component: PasswordComponent,
  data: {
    authorities: ['ROLE_PATIENT'],
    pageTitle: 'Password',
  },
  canActivate: [UserRouteAccessService],
};
