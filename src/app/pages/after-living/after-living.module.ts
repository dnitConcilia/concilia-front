import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { ROUTES } from './after-living.routes';
import { AfterLivingComponent } from './after-living.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(ROUTES),
	],
	declarations: [AfterLivingComponent]
})
export class AfterLivingModule { }
