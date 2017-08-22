import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

export const ROUTES: Routes = [
	{path: '', component: HomeComponent},
	{path: 'conselho-executivo', loadChildren: './pages/executive-council/executive-council.module#ExecutiveCouncilModule'},
	{path: 'identidade-visual', loadChildren: './pages/visual-identity/visual-identity.module#VisualIdentityModule'},
	{path: 'acao-publica', loadChildren: './pages/civil-action/civil-action.module#CivilActionModule'},
	{path: 'acervo', loadChildren: './pages/medias/medias.module#MediasModule'},
	{path: 'comunidades', loadChildren: './pages/communyts/communyts.module#CommunytsModule'},
	{path: 'cmar', loadChildren: './pages/cmar/cmar.module#CmarModule'},
	{path: 'contato', loadChildren: './pages/contact/contact.module#ContactModule'},
	{path: 'imoveis', loadChildren: './pages/properties/properties.module#PropertiesModule'},
	{path: 'noticias', loadChildren: './pages/news/news.module#NewsModule'},
	{path: 'noticias/:slug', loadChildren: './pages/news-detail/news-detail.module#NewsDetailModule'},
	{path: 'providencias', loadChildren: './pages/measures/measures.module#MeasuresModule'},
	{path: 'parceiros', loadChildren: './pages/partners/partners.module#PartnersModule'},
];
