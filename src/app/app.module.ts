import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
// import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { PreLoaderComponent } from './pre-loader/pre-loader.component';
import { FooterComponent } from './footer/footer.component';

import { HomeModule } from './pages/home/home.module';

import { ROUTES } from './app.routes';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		PreLoaderComponent,
		FooterComponent,
	],
	imports: [
		BrowserModule,
		HttpModule,
		FormsModule,
		RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}),
		HomeModule
	],
	providers: [
		// {
		// 	provide: LocationStrategy, useClass: HashLocationStrategy
		// }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
