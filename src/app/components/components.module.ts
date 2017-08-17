import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlideComponent } from './slide/slide.component';
import { BannersComponent } from './banners/banners.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		SlideComponent,
		BannersComponent,
	],
	exports: [
		SlideComponent,
	]
})
export class ComponentsModule { }
