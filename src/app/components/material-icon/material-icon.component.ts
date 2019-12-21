import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-icon',
  templateUrl: './material-icon.component.html',
  styleUrls: ['./material-icon.component.scss'],
})
export class MaterialIconComponent implements OnInit {

  @Input() icon: string;
  constructor() { }

  ngOnInit() {}

}
