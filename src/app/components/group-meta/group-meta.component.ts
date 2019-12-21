import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { Group } from '../../models/group/group';
import { GroupService } from '../../services/group/group.service';
import { formatNumber } from '@angular/common';

@Component({
    selector: 'app-group-meta',
    templateUrl: './group-meta.component.html',
    styleUrls: ['./group-meta.component.scss'],
})
export class GroupMetaComponent implements OnInit {
    data: Group;
    now: Date;
    animalPluralMapping: { [k: string]: string };

    constructor(private groupService: GroupService) {
        this.now = new Date();
    }

    ngOnInit() {
        this.groupService.getData().subscribe((res) => {
            this.data = res;
            this.animalPluralMapping = {
                '=0': `No ${this.data.animalTypePlural}`,
                '=1': `One ${this.data.animalType}`,
                'other': `# ${this.data.animalTypePlural}`
            };
        });
    }
}
