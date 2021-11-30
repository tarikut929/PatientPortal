import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Account } from 'app/core/auth/account.model';
import { AccountService } from 'app/core/auth/account.service';
import { AppointmentService } from './appointment.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { Appointment } from './appointment';

@Component({
  selector: 'jhi-user-profile',
  templateUrl: './user-profile.component.html',
})
export class NewUserProfileComponent implements OnInit {
  appointment: Appointment = new Appointment();
  closeResult = 'close';
  account: Account | null = null;
  data: any[] = [];

  title = 'My Angular Project!';
  todaydate: any;
  componentproperty: any;
  reason: any;
  phoneNumber: any;
  insuranceChange: any;
  formdata: any;

  /* eslint-disable */

  constructor(
    private accountService: AccountService,
    private router: Router,
    private appointmentService: AppointmentService,
    private modalService: NgbModal
  ) {
    this.appointmentService.getData().subscribe(data => {
      this.data = Object.values(data);
      console.warn(data);
    });
  }

  ngOnInit(): void {
    this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
    this.formdata = new FormGroup({
      reason: new FormControl(''),
      insuranceChange: new FormControl(''),
      phoneNumber: new FormControl(''),
    });
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
  onClickSubmit(data: any) {
    this.appointment.reason = data.reason;
    this.appointment.phoneNumber = data.phoneNumber;
    this.appointment.insuranceChange = data.insuranceChange;
    console.warn(this.appointment);
    this.saveAppointment();
  }
  saveAppointment() {
    this.appointmentService.createAppointment(this.appointment).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error)
    );
  }
  goToAppointmentList() {
    this.router.navigate(['/appointments']);
  }
}

/* eslint-enable */
