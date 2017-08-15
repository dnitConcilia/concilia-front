import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page.component';
import { AboutComponent } from './about/about.component';
import { CounterUpComponent } from './counter-up/counter-up.component';
import { ComponentsModule } from '../../components/components.module';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
	declarations: [
		HomePageComponent,
		AboutComponent,
		CounterUpComponent,
		TimelineComponent,
	],
	imports: [
		CommonModule,
		ComponentsModule
	],
	exports: [
		// HomePageComponent
		// AboutComponent,
		// CounterUpComponent,
		// SlideHomeComponent
	]
})
export class HomePageModule { }
