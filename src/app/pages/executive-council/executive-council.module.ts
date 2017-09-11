import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { ExecutiveCouncilComponent } from './executive-council.component';

import { PipesModule } from '../../pipes/pipes.module';

import { MeetingService } from '../../services/meeting.service';
import { ROUTES } from './executive-council.routes';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(ROUTES),
		PipesModule
	],
	declarations: [ExecutiveCouncilComponent],
	providers: [
		MeetingService
	]
})
export class ExecutiveCouncilModule { }
