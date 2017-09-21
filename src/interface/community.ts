
import { CommunityPhoto } from './community-photo';

export interface Community {
	id: number;
	title: string;
	text: string;
	textMap: string;
	image: string;
	credit: string;
	caption: string;
	lat: string;
	lng: string;
	slug: string;
	photos: Array<CommunityPhoto>;
}
