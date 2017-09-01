import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { CommunityDetailComponent } from './community-detail.component';
import { ROUTES } from './community-detail.routes';
import { CommunityService } from '../../services/community.service';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(ROUTES),
	],
	declarations: [
		CommunityDetailComponent
	],
	providers: [
		CommunityService
	]
})
export class CommunityDetailModule { }
