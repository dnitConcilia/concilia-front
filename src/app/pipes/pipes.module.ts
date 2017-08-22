import { NgModule } from '@angular/core';
import { HumanizeDatePipe } from './humanizeDate/humanize-date.pipe';

@NgModule({
	declarations: [
		HumanizeDatePipe
	],
	imports: [

	],
	exports: [
		HumanizeDatePipe
	]
})
export class PipesModule { }
