import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { NoticeComponent } from './notice.component';

import { PipesModule } from '../../pipes/pipes.module';

import { ROUTES } from './notice.routes';
import { NoticeService } from '../../services/notice.service';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(ROUTES),
		PipesModule
	],
	declarations: [NoticeComponent],
	providers: [
		NoticeService
	]
})
export class NoticeModule { }
