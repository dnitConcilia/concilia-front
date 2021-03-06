import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { ROUTES } from './communyts.routes';
import { CommunytsComponent } from './communyts.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(ROUTES),
	],
	declarations: [CommunytsComponent]
})
export class CommunytsModule { }
