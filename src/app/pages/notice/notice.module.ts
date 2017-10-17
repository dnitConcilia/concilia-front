import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { NoticeComponent } from './notice.component';

import { PipesModule } from '../../pipes/pipes.module';

import { MeetingService } from '../../services/meeting.service';
import { ROUTES } from './notice.routes';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(ROUTES),
		PipesModule
	],
	declarations: [NoticeComponent],
	providers: [
		MeetingService
	]
})
export class NoticeModule { }
