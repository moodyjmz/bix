import { Component, Input, OnInit } from '@angular/core';
import { Alert } from '../../models/alert/alert';

@Component({
  selector: 'app-alert-item',
  templateUrl: './alert-item.component.html',
  styleUrls: ['./alert-item.component.scss'],
})
export class AlertItemComponent implements OnInit {
  @Input() alert: Alert;
  @Input() now: Date;
  constructor() { }

  ngOnInit() {}

}
