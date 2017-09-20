import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';

import { CookieService } from 'angular2-cookie/services/cookies.service';

import { HeaderComponent } from './header/header.component';
import { PreLoaderComponent } from './pre-loader/pre-loader.component';
import { FooterComponent } from './footer/footer.component';

import { HomeModule } from './pages/home/home.module';

import { ROUTES } from './app.routes';
import { DocumentService } from './services/document.service';
import { TokenService } from './services/token.service';
import { CommunityService } from './services/community.service';

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
		CookieService,
		TokenService,
		CommunityService,
		DocumentService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
