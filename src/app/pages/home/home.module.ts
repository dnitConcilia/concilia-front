import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { CounterUpComponent } from './counter-up/counter-up.component';
import { ComponentsModule } from '../../components/components.module';
import { TimelineComponent } from './timeline/timeline.component';
import { BannerHomeComponent } from './banner-home/banner-home.component';
import { HighlightsNewsComponent } from './highlights-news/highlights-news.component';
import { ButtonBlockComponent } from './button-block/button-block.component';

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
		ComponentsModule
	],
	exports: [
		// HomeComponent
		// AboutComponent,
		// CounterUpComponent,
		// SlideHomeComponent
	]
})
export class HomeModule { }
