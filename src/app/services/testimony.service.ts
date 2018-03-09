import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Testimony } from '../../interface/testimony';
import { API_URL, BASE_URL } from '../config';
import { DaoInterface } from '../../interface/dao-interface';
import { ResponseResult } from '../../interface/response-result';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class TestimonyService implements DaoInterface<Testimony> {

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

	getAll(): Promise<Array<Testimony>> {
		const url = API_URL + 'testimony/';
		return this.http.get(url, this.options)
				.toPromise()
				.then(response => response.json() as Array<Testimony>)
				.catch(this.handleError);
	}

	getById(id: number): Promise<Testimony> {
		const url = API_URL + 'testimony/' + id + '/';
		return this.http.get(url, this.options)
				.toPromise()
				.then(response => response.json() as Testimony)
				.catch(this.handleError);
	}
	create(object: Testimony): Promise<Testimony> {
		const url = API_URL + 'testimony/';
		return this.http.post(url, JSON.stringify(object), this.options)
				.toPromise()
				.then((response: Response) => response.json() as Testimony)
				.catch(this.handleError);
	}
	update(object: Testimony): Promise<Testimony> {
		const url = API_URL + 'testimony/' + object.id + '/';
		return this.http.put(url, JSON.stringify(object), this.options)
				.toPromise()
				.then((response: Response) => response.json() as Testimony)
				.catch(this.handleError);
	}
	delete(id: number): Promise<Testimony> {
		const url = API_URL + 'testimony/' + id + '/';
		return this.http.delete(url, this.options)
				.toPromise()
				.then(response => response.json() as Testimony)
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
