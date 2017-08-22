import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { WEBTOKEN, API_URL } from '../config';
import { DaoInterface } from '../../interface/dao-interface';
import { ResponseResult } from '../../interface/response-result';
import { Timeline } from '../../interface/timeline';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TimelineService implements DaoInterface<Timeline> {

	private headers: Headers;

	constructor(private http: Http) {
		this.headers = new Headers (
			{
				'Content-Type': 'application/json',
				'Authorization': WEBTOKEN
			}
		);
	}
	getAll(): Promise<Array<Timeline>> {
		let url = API_URL + 'timeline/';

		return this.http.get(url, {headers: this.headers})
				.toPromise()
				.then(response => response.json() as Array<Timeline>)
				.catch(this.handleError);
	}

	getById(id: number): Promise<Timeline> {
		let url = API_URL + 'timeline/' + id + '/';
		return this.http.get(url, {headers: this.headers})
				.toPromise()
				.then(response => response.json() as Timeline)
				.catch(this.handleError);
	}
	create(object: Timeline): Promise<Timeline> {
		let url = API_URL + 'timeline/';
		return this.http.post(url, JSON.stringify(object), {headers: this.headers})
				.toPromise()
				.then((response: Response) => response.json() as Timeline)
				.catch(this.handleError);
	}
	update(object: Timeline): Promise<Timeline> {
		let url = API_URL + 'timeline/' + object.id + '/'
		return this.http.put(url, JSON.stringify(object), {headers: this.headers})
				.toPromise()
				.then((response: Response) => response.json() as Timeline)
				.catch(this.handleError);
	}
	delete(id: number): Promise<Timeline> {
		let url = API_URL + 'timeline/' + id + '/'
		return this.http.delete(url, {headers: this.headers})
				.toPromise()
				.then(response => response.json() as Timeline)
				.catch(this.handleError);
	}

	private handleError(error: any): Promise<ResponseResult> {
		let responseResult = new ResponseResult();
		responseResult.success = false;

		let result = JSON.parse(error._body);
		responseResult.message = result.message[ 0 ];

		return Promise.reject(responseResult);
	}

}
