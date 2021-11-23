import { Route } from '@angular/router';

import { NewUserProfileComponent } from './user-profile.component';

export const NewUserProfileRoute: Route = {
  path: '',
  component: NewUserProfileComponent,
  outlet: 'userprofile',
};
