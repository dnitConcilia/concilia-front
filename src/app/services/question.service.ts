import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { API_URL } from '../config';
import { DaoInterface } from '../../interface/dao-interface';
import { ResponseResult } from '../../interface/response-result';
import { Question } from '../../interface/question';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class QuestionService implements DaoInterface<Question> {

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

	getAll(): Promise<Array<Question>> {
		const url = API_URL + 'faq/';
		return this.http.get(url, {headers: this.headers})
				.toPromise()
				.then(response => response.json() as Array<Question>)
				.catch(this.handleError);
	}

	getById(id: number): Promise<Question> {
		const url = API_URL + 'faq/' + id + '/';
		return this.http.get(url, {headers: this.headers})
				.toPromise()
				.then(response => response.json() as Question)
				.catch(this.handleError);
	}
	create(object: Question): Promise<Question> {
		const url = API_URL + 'faq/';
		return this.http.post(url, JSON.stringify(object), {headers: this.headers})
				.toPromise()
				.then((response: Response) => response.json() as Question)
				.catch(this.handleError);
	}
	update(object: Question): Promise<Question> {
		const url = API_URL + 'faq/' + object.id + '/';
		return this.http.put(url, JSON.stringify(object), {headers: this.headers})
				.toPromise()
				.then((response: Response) => response.json() as Question)
				.catch(this.handleError);
	}
	delete(id: number): Promise<Question> {
		const url = API_URL + 'faq/' + id + '/';
		return this.http.delete(url, {headers: this.headers})
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
