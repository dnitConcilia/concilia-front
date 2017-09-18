import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { News } from '../pages/news/news';
import { API_URL } from '../config';
import { DaoInterface } from '../../interface/dao-interface';
import { ResponseResult } from '../../interface/response-result';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class NewsService implements DaoInterface<News> {

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

	getAll(): Promise<Array<News>> {
		const url = API_URL + 'news/';
		return this.http.get(url, {headers: this.headers})
				.toPromise()
				.then(response => response.json() as Array<News>)
				.catch(this.handleError);
	}

	getById(id: number): Promise<News> {
		const url = API_URL + 'news/' + id + '/';
		return this.http.get(url, {headers: this.headers})
				.toPromise()
				.then(response => response.json() as News)
				.catch(this.handleError);
	}
	getBySlug(slug: number): Promise<News> {
		const url = API_URL + 'news-slug/' + slug + '/';
		return this.http.get(url, {headers: this.headers})
				.toPromise()
				.then(response => response.json() as News)
				.catch(this.handleError);
	}
	lastSix(): Promise<Array<News>> {
		const url = API_URL + 'news-last-six/';
		return this.http.get(url, {headers: this.headers})
				.toPromise()
				.then(response => {
					return response.json() as Array<News>;
				})
				.catch(this.handleError);
	}
	create(object: News): Promise<News> {
		const url = API_URL + 'news/';
		return this.http.post(url, JSON.stringify(object), {headers: this.headers})
				.toPromise()
				.then((response: Response) => response.json() as News)
				.catch(this.handleError);
	}
	update(object: News): Promise<News> {
		const url = API_URL + 'news/' + object.id + '/';
		return this.http.put(url, JSON.stringify(object), {headers: this.headers})
				.toPromise()
				.then((response: Response) => response.json() as News)
				.catch(this.handleError);
	}
	delete(id: number): Promise<News> {
		const url = API_URL + 'news/' + id + '/';
		return this.http.delete(url, {headers: this.headers})
				.toPromise()
				.then(response => response.json() as News)
				.catch(this.handleError);
	}

	private handleError(error: any): Promise<object> {
		return Promise.reject({
			'data': null,
			'message': JSON.parse(JSON.stringify(error._body)),
			'success': false,
			'token': localStorage.getItem('token')
		});
	}

}
