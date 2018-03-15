import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { ROUTES } from './testimony.routes';
import { TestimonyPageComponent } from './testimony.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(ROUTES),
	],
	declarations: [TestimonyPageComponent]
})
export class AfterLivingModule { }
