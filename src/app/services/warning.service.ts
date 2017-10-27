import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { API_URL } from '../config';
import { DaoInterface } from '../../interface/dao-interface';
import { ResponseResult } from '../../interface/response-result';
import { Warning } from '../../interface/warning';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class WarningService implements DaoInterface<Warning> {

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

	getAll(): Promise<Array<Warning>> {
		const url = API_URL + 'alert/';
		return this.http.get(url, this.options)
				.toPromise()
				.then(response => response.json() as Array<Warning>)
				.catch(this.handleError);
	}

	getById(id: number): Promise<Warning> {
		const url = API_URL + 'alert/' + id + '/';
		return this.http.get(url, this.options)
				.toPromise()
				.then(response => response.json() as Warning)
				.catch(this.handleError);
	}
	create(object: Warning): Promise<Warning> {
		const url = API_URL + 'alert/';
		return this.http.post(url, JSON.stringify(object), this.options)
				.toPromise()
				.then((response: Response) => response.json() as Warning)
				.catch(this.handleError);
	}
	update(object: Warning): Promise<Warning> {
		const url = API_URL + 'alert/' + object.id + '/';
		return this.http.put(url, JSON.stringify(object), this.options)
				.toPromise()
				.then((response: Response) => response.json() as Warning)
				.catch(this.handleError);
	}
	delete(id: number): Promise<Warning> {
		const url = API_URL + 'alert/' + id + '/';
		return this.http.delete(url, this.options)
				.toPromise()
				.then(response => response.json() as Warning)
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
