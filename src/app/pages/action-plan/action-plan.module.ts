import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { ROUTES } from './action-plan.routes';
import { ActionPlanComponent } from './action-plan.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(ROUTES),
	],
	declarations: [ActionPlanComponent]
})
export class ActionPlanModule { }
