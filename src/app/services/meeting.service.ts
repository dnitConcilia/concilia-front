import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { API_URL } from '../config';
import { DaoInterface } from '../../interface/dao-interface';
import { ResponseResult } from '../../interface/response-result';
import { Meeting } from '../../interface/meeting';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class MeetingService implements DaoInterface<Meeting> {

	private headers: Headers;

	constructor(
		private http: Http
	) {
		this.headers = new Headers (
			{
				'Content-Type': 'application/json',
				'Authorization': 'token ' + localStorage.getItem('token')
			}
		);
	}

	getAll(): Promise<Array<Meeting>> {
		const url = API_URL + 'meeting/';
		return this.http.get(url, {headers: this.headers})
				.toPromise()
				.then(response => response.json() as Array<Meeting>)
				.catch(this.handleError);
	}

	getById(id: number): Promise<Meeting> {
		const url = API_URL + 'meeting/' + id + '/';
		return this.http.get(url, {headers: this.headers})
				.toPromise()
				.then(response => response.json() as Meeting)
				.catch(this.handleError);
	}
	getByCategory(category: string): Promise<Array<Meeting>> {
		const url = API_URL + 'meeting-category/' + category + '/';
		return this.http.get(url, {headers: this.headers})
				.toPromise()
				.then(response => response.json() as Meeting)
				.catch(this.handleError);
	}
	create(object: Meeting): Promise<Meeting> {
		const url = API_URL + 'meeting/';
		return this.http.post(url, JSON.stringify(object), {headers: this.headers})
				.toPromise()
				.then((response: Response) => response.json() as Meeting)
				.catch(this.handleError);
	}
	update(object: Meeting): Promise<Meeting> {
		const url = API_URL + 'meeting/' + object.id + '/';
		return this.http.put(url, JSON.stringify(object), {headers: this.headers})
				.toPromise()
				.then((response: Response) => response.json() as Meeting)
				.catch(this.handleError);
	}
	delete(id: number): Promise<Meeting> {
		const url = API_URL + 'meeting/' + id + '/';
		return this.http.delete(url, {headers: this.headers})
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
