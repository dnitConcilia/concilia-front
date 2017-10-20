import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { PropertiesComponent } from './properties.component';
import { ROUTES } from './properties.routes';

import {ComponentsModule} from '../../components/components.module'

@NgModule({
	declarations: [
		PropertiesComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(ROUTES),
		ComponentsModule,
	]
})
export class PropertiesModule { }
