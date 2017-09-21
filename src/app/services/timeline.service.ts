import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { API_URL } from '../config';
import { DaoInterface } from '../../interface/dao-interface';
import { ResponseResult } from '../../interface/response-result';
import { Timeline } from '../../interface/timeline';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TimelineService implements DaoInterface<Timeline> {

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

	getAll(): Promise<Array<Timeline>> {
		const url = API_URL + 'timeline/';

		return this.http.get(url, this.options)
				.toPromise()
				.then(response => response.json() as Array<Timeline>)
				.catch(this.handleError);
	}

	getById(id: number): Promise<Timeline> {
		const url = API_URL + 'timeline/' + id + '/';
		return this.http.get(url, this.options)
				.toPromise()
				.then(response => response.json() as Timeline)
				.catch(this.handleError);
	}
	create(object: Timeline): Promise<Timeline> {
		const url = API_URL + 'timeline/';
		return this.http.post(url, JSON.stringify(object), this.options)
				.toPromise()
				.then((response: Response) => response.json() as Timeline)
				.catch(this.handleError);
	}
	update(object: Timeline): Promise<Timeline> {
		const url = API_URL + 'timeline/' + object.id + '/';
		return this.http.put(url, JSON.stringify(object), this.options)
				.toPromise()
				.then((response: Response) => response.json() as Timeline)
				.catch(this.handleError);
	}
	delete(id: number): Promise<Timeline> {
		const url = API_URL + 'timeline/' + id + '/';
		return this.http.delete(url, this.options)
				.toPromise()
				.then(response => response.json() as Timeline)
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
