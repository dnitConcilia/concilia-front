import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { NewsDetailComponent } from './news-detail.component';
import { ROUTES } from './news-detail.routes';
import { NewsService } from '../../services/news.service';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(ROUTES),
	],
	declarations: [
		NewsDetailComponent
	],
	providers: [
		NewsService
	]
})
export class NewsDetailModule { }
