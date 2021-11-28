import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { Account } from 'app/core/auth/account.model';
import { AccountService } from 'app/core/auth/account.service';
import { AppointmentService } from './appointment.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'jhi-user-profile',
  templateUrl: './user-profile.component.html',
})
export class NewUserProfileComponent implements OnInit {
  closeResult = 'close';
  account: Account | null = null;
  data: any[] = [];

  /* eslint-disable */

  constructor(
    private accountService: AccountService,
    private router: Router,
    private appointmentService: AppointmentService,
    private modalService: NgbModal
  ) {
    this.appointmentService.getData().subscribe(data => {
      this.data = Object.values(data);
    });
  }

  ngOnInit(): void {
    this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  onSubmit() {}

  /* eslint-enable */
}
