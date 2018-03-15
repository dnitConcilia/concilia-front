import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlideComponent } from './slide/slide.component';
import { BannersComponent } from './banners/banners.component';
import { SlideTestimonyComponent } from './slideTestimony/slideTestimony.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		SlideComponent,
		SlideTestimonyComponent,
		BannersComponent,
	],
	exports: [
		SlideComponent,
		SlideTestimonyComponent,
	]
})
export class ComponentsModule { }
