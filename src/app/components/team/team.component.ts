import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team/team.service';
import { TeamMember } from '../../models/team-member/team-member';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {

  members: Array<TeamMember>;
  now: Date;
  toggle: boolean;
  toggled: boolean;
  hasMembers: boolean;

  constructor(private teamService: TeamService) {
    this.members = [];
    this.now = new Date();
    this.toggle = false;
    this.hasMembers = false;
  }

  ngOnInit() {
    this.teamService.getMembers().subscribe((res) => {
      this.members = res;
      this.hasMembers = true;
    });
  }

  toggleMemberList() {
    this.toggle = !this.toggle;
    this.toggled = true;
  }

}
