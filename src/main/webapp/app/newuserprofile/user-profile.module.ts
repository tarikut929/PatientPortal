import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NewUserProfileComponent } from './user-profile.component';
import { NewUserProfileRoute } from './user-profile.route';

@NgModule({
  imports: [RouterModule.forRoot([NewUserProfileRoute], { useHash: true }), CommonModule],
  declarations: [NewUserProfileComponent],
  entryComponents: [],
  providers: [],
})
export class NewUserProfileModule {}
