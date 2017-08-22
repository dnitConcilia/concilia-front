import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { CounterUpComponent } from './counter-up/counter-up.component';
import { ComponentsModule } from '../../components/components.module';
import { TimelineComponent } from './timeline/timeline.component';
import { BannerHomeComponent } from './banner-home/banner-home.component';
import { HighlightsNewsComponent } from './highlights-news/highlights-news.component';
import { ButtonBlockComponent } from './button-block/button-block.component';
import { ROUTES } from './home.routes';
import { NewsService } from '../../services/news.service';
import { TimelineService } from '../../services/timeline.service';

@NgModule({
	declarations: [
		HomeComponent,
		AboutComponent,
		CounterUpComponent,
		TimelineComponent,
		BannerHomeComponent,
		HighlightsNewsComponent,
		ButtonBlockComponent
	],
	imports: [
		CommonModule,
		ComponentsModule,
		RouterModule.forChild(ROUTES)
	],
	exports: [
		// HomeComponent
		// AboutComponent,
		// CounterUpComponent,
		// SlideHomeComponent
	],
	providers: [
		NewsService,
		TimelineService
	]
})
export class HomeModule { }
