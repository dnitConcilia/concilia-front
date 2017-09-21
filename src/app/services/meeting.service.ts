import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { API_URL, BASE_URL } from '../config';
import { DaoInterface } from '../../interface/dao-interface';
import { ResponseResult } from '../../interface/response-result';
import { Meeting } from '../../interface/meeting';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class MeetingService implements DaoInterface<Meeting> {

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

	getAll(): Promise<Array<Meeting>> {
		const url = API_URL + 'meeting/';
		return this.http.get(url, this.options)
				.toPromise()
				.then(response => {
					const resp = response.json() as Array<Meeting>;

					for (let i = 0; i < resp.length; i++) {
						resp[i].pdf = BASE_URL + resp[i].pdf;
						resp[i].ppt = BASE_URL + resp[i].ppt;
					}
					return resp;
				})
				.catch(this.handleError);
	}

	getById(id: number): Promise<Meeting> {
		const url = API_URL + 'meeting/' + id + '/';
		return this.http.get(url, this.options)
				.toPromise()
				.then(response => {
					const resp = response.json() as Meeting;
					resp.pdf = BASE_URL + resp.pdf;
					resp.ppt = BASE_URL + resp.ppt;

					return resp;
				})
				.catch(this.handleError);
	}
	getByCategory(category: string): Promise<Array<Meeting>> {
		const url = API_URL + 'meeting-category/' + category + '/';
		return this.http.get(url, this.options)
				.toPromise()
				.then(response => {
					const resp = response.json() as Array<Meeting>;

					for (let i = 0; i < resp.length; i++) {
						resp[i].pdf = BASE_URL + resp[i].pdf;
						resp[i].ppt = BASE_URL + resp[i].ppt;
					}

					return resp;
				})
				.catch(this.handleError);
	}
	create(object: Meeting): Promise<Meeting> {
		const url = API_URL + 'meeting/';
		return this.http.post(url, JSON.stringify(object), this.options)
				.toPromise()
				.then((response: Response) => response.json() as Meeting)
				.catch(this.handleError);
	}
	update(object: Meeting): Promise<Meeting> {
		const url = API_URL + 'meeting/' + object.id + '/';
		return this.http.put(url, JSON.stringify(object), this.options)
				.toPromise()
				.then((response: Response) => response.json() as Meeting)
				.catch(this.handleError);
	}
	delete(id: number): Promise<Meeting> {
		const url = API_URL + 'meeting/' + id + '/';
		return this.http.delete(url, this.options)
				.toPromise()
				.then(response => response.json() as Meeting)
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
