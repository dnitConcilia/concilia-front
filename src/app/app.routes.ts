import { Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';

export const ROUTES: Routes = [
	{path: '', component: HomePageComponent},
	{path: 'contato', loadChildren: './pages/contact/contact.module#ContactModule'}
];
