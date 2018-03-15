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
import { PipesModule } from '../../pipes/pipes.module';
import { TestimonyComponent } from './testimony/testimony.component';
import { TestimonyService } from '../../services/testimony.service';

@NgModule({
	declarations: [
		HomeComponent,
		AboutComponent,
		CounterUpComponent,
		TimelineComponent,
		BannerHomeComponent,
		HighlightsNewsComponent,
		ButtonBlockComponent,
		TestimonyComponent
	],
	imports: [
		CommonModule,
		ComponentsModule,
		RouterModule.forChild(ROUTES),
		PipesModule
	],
	exports: [
		// HomeComponent
		// AboutComponent,
		// CounterUpComponent,
		// SlideHomeComponent
	],
	providers: [
		NewsService,
		TimelineService,
		TestimonyService
	]
})
export class HomeModule { }
