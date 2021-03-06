import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { NewsComponent } from './news.component';
import { PipesModule } from '../../pipes/pipes.module';

import { ROUTES } from './news.routes';
import { NewsService } from '../../services/news.service';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(ROUTES),
		PipesModule
	],
	declarations: [
		NewsComponent,
	],
	providers: [
		NewsService
	]
})
export class NewsModule { }
