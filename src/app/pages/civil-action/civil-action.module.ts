import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { ROUTES } from './civil-action.routes';
import { CivilActionComponent } from './civil-action.component';


@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(ROUTES),
	],
	declarations: [CivilActionComponent]
})
export class CivilActionModule { }
