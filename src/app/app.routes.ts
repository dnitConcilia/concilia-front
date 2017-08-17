import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

export const ROUTES: Routes = [
	{path: '', component: HomeComponent},
	{path: 'contato', loadChildren: './pages/contact/contact.module#ContactModule'},
	{path: 'imoveis', loadChildren: './pages/properties/properties.module#PropertiesModule'},
	{path: 'noticias', loadChildren: './pages/news/news.module#NewsModule'},
	{path: 'providencias', loadChildren: './pages/measures/measures.module#MeasuresModule'},
	{path: 'parceiros', loadChildren: './pages/partners/partners.module#PartnersModule'},
	{path: 'comunidades', loadChildren: './pages/communyts/communyts.module#CommunytsModule'},
];
