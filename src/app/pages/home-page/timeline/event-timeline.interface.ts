export interface EventTimeline {
	id: number;
	title: string;
	date: string;
	text: string;
	hasImage?: boolean;
	imagePath?: string;
	legend?: string;
}
