import { Component, OnInit, Input } from '@angular/core';
import { TeamMember } from '../../models/team-member';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss'],
})
export class TeamMemberComponent implements OnInit {

  @Input() member: TeamMember;
  @Input() now: Date;
  constructor() { }

  ngOnInit() {
    console.log(this.now, this.member.lastLogin);
  }

}
