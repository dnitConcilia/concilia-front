import { NoticeType } from './noticeType';

export interface Notice {
	id: number;
	title: string;
	description: string;
	date: string;
	notice: string;
	noticeType: NoticeType;
	link: string;
}
