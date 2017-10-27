import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { API_URL, BASE_URL } from '../config';
import { DaoInterface } from '../../interface/dao-interface';
import { ResponseResult } from '../../interface/response-result';
import { Notice } from '../../interface/notice';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class NoticeService implements DaoInterface<Notice> {

	// private headers: Headers;
	private options: RequestOptions;

	constructor(
		private http: Http
	) {
		const headers: Headers = new Headers (
			{
				'Content-Type': 'application/json',
				'Authorization': 'token ' + localStorage.getItem('token')
			}
		);
		this.options = new RequestOptions({ headers: headers, withCredentials: true });
	}

	getAll(): Promise<Array<Notice>> {
		const url = API_URL + 'notice/';
		return this.http.get(url, this.options)
				.toPromise()
				.then(response => {
					const resp = response.json() as Array<Notice>;

					for (let i = 0; i < resp.length; i++) {
						resp[i].notice = BASE_URL + resp[i].notice;
					}
					return resp;
				})
				.catch(this.handleError);
	}

	getById(id: number): Promise<Notice> {
		const url = API_URL + 'notice/' + id + '/';
		return this.http.get(url, this.options)
				.toPromise()
				.then(response => {
					const resp = response.json() as Notice;
					resp.notice = BASE_URL + resp.notice;

					return resp;
				})
				.catch(this.handleError);
	}
	getByCategory(category: string): Promise<Array<Notice>> {
		const url = API_URL + 'notice-category/' + category + '/';
		return this.http.get(url, this.options)
				.toPromise()
				.then(response => {
					const resp = response.json() as Array<Notice>;

					for (let i = 0; i < resp.length; i++) {
						resp[i].notice = BASE_URL + resp[i].notice;
					}

					return resp;
				})
				.catch(this.handleError);
	}
	create(object: Notice): Promise<Notice> {
		const url = API_URL + 'notice/';
		return this.http.post(url, JSON.stringify(object), this.options)
				.toPromise()
				.then((response: Response) => response.json() as Notice)
				.catch(this.handleError);
	}
	update(object: Notice): Promise<Notice> {
		const url = API_URL + 'notice/' + object.id + '/';
		return this.http.put(url, JSON.stringify(object), this.options)
				.toPromise()
				.then((response: Response) => response.json() as Notice)
				.catch(this.handleError);
	}
	delete(id: number): Promise<Notice> {
		const url = API_URL + 'notice/' + id + '/';
		return this.http.delete(url, this.options)
				.toPromise()
				.then(response => response.json() as Notice)
				.catch(this.handleError);
	}

	private handleError(error: any): Promise<object> {
		return Promise.reject({
			'data': null,
			'message': JSON.parse(JSON.stringify(error._body)),
			'success': false
			// 'token': localStorage.getItem('token')
		});
	}

}
