import { Photo } from './photo';
import { Video } from './video';

export interface Gallery {
	id: number;
	face: string;
	title: string;
	text: string;
	categoryGallery: string;
	slug: string;
	is_public: boolean;
	photos: Array<Photo>;
	videos: Array<Video>;
}
