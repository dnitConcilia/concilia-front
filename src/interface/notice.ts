import { NoticeType } from './noticeType';

export interface Notice {
	id: number;
	description: string;
	date: string;
	publishDate: string;
	notice: string;
	noticeType: NoticeType;
	link: string;
}
