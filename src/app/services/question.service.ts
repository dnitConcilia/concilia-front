import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { API_URL } from '../config';
import { DaoInterface } from '../../interface/dao-interface';
import { ResponseResult } from '../../interface/response-result';
import { Question } from '../../interface/question';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class QuestionService implements DaoInterface<Question> {

	// private headers: Headers;
	private options: RequestOptions;

	constructor(
		private http: Http
	) {
		let headers: Headers = new Headers (
			{
				'Content-Type': 'application/json',
				'Authorization': 'token ' + localStorage.getItem('token')
			}
		);
		this.options = new RequestOptions({ headers: headers, withCredentials: true });
	}

	getAll(): Promise<Array<Question>> {
		const url = API_URL + 'faq/';
		return this.http.get(url, this.options)
				.toPromise()
				.then(response => response.json() as Array<Question>)
				.catch(this.handleError);
	}

	getById(id: number): Promise<Question> {
		const url = API_URL + 'faq/' + id + '/';
		return this.http.get(url, this.options)
				.toPromise()
				.then(response => response.json() as Question)
				.catch(this.handleError);
	}
	create(object: Question): Promise<Question> {
		const url = API_URL + 'faq/';
		return this.http.post(url, JSON.stringify(object), this.options)
				.toPromise()
				.then((response: Response) => response.json() as Question)
				.catch(this.handleError);
	}
	update(object: Question): Promise<Question> {
		const url = API_URL + 'faq/' + object.id + '/';
		return this.http.put(url, JSON.stringify(object), this.options)
				.toPromise()
				.then((response: Response) => response.json() as Question)
				.catch(this.handleError);
	}
	delete(id: number): Promise<Question> {
		const url = API_URL + 'faq/' + id + '/';
		return this.http.delete(url, this.options)
				.toPromise()
				.then(response => response.json() as Question)
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
