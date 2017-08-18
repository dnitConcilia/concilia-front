import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { ROUTES } from './visual-identity.routes';
import { VisualIdentityComponent } from './visual-identity.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(ROUTES)
	],
	declarations: [VisualIdentityComponent]
})
export class VisualIdentityModule { }
