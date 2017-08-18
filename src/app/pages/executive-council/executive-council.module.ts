import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { ROUTES } from './executive-council.routes';
import { ExecutiveCouncilComponent } from './executive-council.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(ROUTES),
	],
	declarations: [ExecutiveCouncilComponent]
})
export class ExecutiveCouncilModule { }
