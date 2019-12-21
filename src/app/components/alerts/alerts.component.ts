import { Component, OnInit } from '@angular/core';
import { AlertService} from '../../services/alert/alert.service';
import { Alert } from '../../models/alert/alert';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss'],
})
export class AlertsComponent implements OnInit {

  alerts: Array<Alert>;
  now: Date;

  constructor(private alertService: AlertService ) {
    this.now = new Date();
  }

  ngOnInit() {
    this.alertService.getAlerts().subscribe((res) => {
      this.alerts = res;
    });
  }

}
