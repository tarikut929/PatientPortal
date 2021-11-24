import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Account } from 'app/core/auth/account.model';
import { AccountService } from 'app/core/auth/account.service';
import { AppointmentService } from './appointment.service';

@Component({
  selector: 'jhi-user-profile',
  templateUrl: './user-profile.component.html',
})
export class NewUserProfileComponent implements OnInit {
  account: Account | null = null;
  /* eslint-disable */

  constructor(private accountService: AccountService, private router: Router, private appointment: AppointmentService) {
    this.appointment.getData().subscribe(data => {
      console.warn(data);
    });
  }
  /* eslint-enable */

  ngOnInit(): void {
    this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
  }
}
