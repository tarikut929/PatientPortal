import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { Account } from 'app/core/auth/account.model';
import { AccountService } from 'app/core/auth/account.service';
import { AppointmentService } from './appointment.service';
import { Appointment } from './appointment';

@Component({
  selector: 'jhi-user-profile',
  templateUrl: './user-profile.component.html',
})
export class NewUserProfileComponent implements OnInit {
  account: Account | null = null;
  data: any[] = [];

  /* eslint-disable */

  constructor(private accountService: AccountService, private router: Router, private appointmentService: AppointmentService) {
    this.appointmentService.getData().subscribe(data => {
      this.data = Object.values(data);
    });
  }
  /* eslint-enable */

  ngOnInit(): void {
    this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
  }
}
