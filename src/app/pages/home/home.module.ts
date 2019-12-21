import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DateFnsModule } from 'ngx-date-fns';

import { HomePage } from './home.page';
import { TeamComponent } from '../../components/team/team.component';
import { HeaderComponent } from '../../components/header/header.component';
import { TeamMemberComponent } from '../../components/team-member/team-member.component';
import { AlertsComponent } from '../../components/alerts/alerts.component';
import { AlertItemComponent } from '../../components/alert-item/alert-item.component';
import { ListHeaderComponent } from '../../components/list-header/list-header.component';
import { MaterialIconComponent } from '../../components/material-icon/material-icon.component';
import { GroupMetaComponent } from '../../components/group-meta/group-meta.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePage
            }
        ]),
        DateFnsModule
    ],
    declarations: [HomePage, TeamComponent, HeaderComponent, TeamMemberComponent, AlertsComponent, AlertItemComponent, ListHeaderComponent, MaterialIconComponent, GroupMetaComponent]
})
export class HomePageModule {
}
