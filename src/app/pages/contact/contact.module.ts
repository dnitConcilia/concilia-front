import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ContactComponent } from './contact.component';

import { ComponentsModule } from '../../components/components.module';

import { ROUTES } from './contact.routes';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild(ROUTES),
		ComponentsModule
	],
	declarations: [ContactComponent]
})
export class ContactModule { }
