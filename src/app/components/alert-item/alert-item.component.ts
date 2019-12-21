import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Alert } from '../../models/alert/alert';

@Component({
  selector: 'app-alert-item',
  templateUrl: './alert-item.component.html',
  styleUrls: ['./alert-item.component.scss']
})
export class AlertItemComponent implements OnInit, OnChanges {
  messageColor: string;
  @Input() alert: Alert;
  @Input() now: Date;
  constructor() {
  }

  ngOnInit() {
  }

  private setMessageColor() {
    // can be hooked into a map/localised colour handling
    this.messageColor =  this.alert.warning ? 'danger' : '';
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setMessageColor();
  }

}
