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
    timer: any;
    toggle: boolean;
    toggled: boolean;
    hasMembers: boolean;
    toggleIcon: string;

    constructor(private teamService: TeamService) {
        this.members = [];
        this.now = new Date();
        this.toggle = false;
        this.toggleIcon = 'expand_more';
        this.hasMembers = false;
    }

    ngOnInit() {
        this.teamService.getMembers().subscribe((res) => {
            this.members = res;
            if (this.members.length) {
                this.hasMembers = true;
                // this.startTimer();
            } else {
              this.hasMembers = false;
            }
        });
    }

    toggleMemberList() {
        this.toggle = !this.toggle;
        this.toggled = true;
        this.toggleIcon = this.toggle ? 'expand_less' : 'expand_more';
    }

    // private startTimer() {
    //     this.timer = setInterval(() => {
    //         this.now = new Date();
    //     }, 300000);
    // }
    //
    // private endTimer() {
    //     clearInterval(this.timer);
    // }
    //
    // ngOnDestroy() {
    //     this.endTimer();
    // }

}
