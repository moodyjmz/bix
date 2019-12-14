import { Component, OnInit } from '@angular/core';
import { AlertService} from '../../services/alert/alert.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss'],
})
export class AlertsComponent implements OnInit {

  constructor(private alertService: AlertService ) { }

  ngOnInit() {
    this.alertService.getAlerts().subscribe((res) => {
      console.log(res);
    });
  }

}
