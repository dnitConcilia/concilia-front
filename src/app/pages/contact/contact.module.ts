import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { ContactComponent } from './contact.component';

import { ComponentsModule } from '../../components/components.module';

import { ROUTES } from './contact.routes';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(ROUTES),
		ComponentsModule
	],
	declarations: [ContactComponent]
})
export class ContactModule { }
