import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { API_URL } from '../config';
import { DaoInterface } from '../../interface/dao-interface';
import { ResponseResult } from '../../interface/response-result';
import { Community } from '../../interface/community.interface';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class CommunityService implements DaoInterface<Community> {

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

	getAll(): Promise<Array<Community>> {
		const url = API_URL + 'community/';
		return this.http.get(url, {headers: this.headers})
				.toPromise()
				.then(response => response.json() as Array<Community>)
				.catch(this.handleError);
	}

	getById(id: number): Promise<Community> {
		const url = API_URL + 'community/' + id + '/';
		return this.http.get(url, {headers: this.headers})
				.toPromise()
				.then(response => response.json() as Community)
				.catch(this.handleError);
	}
	getBySlug(slug: number): Promise<Community> {
		const url = API_URL + 'community-slug/' + slug + '/';
		return this.http.get(url, {headers: this.headers})
				.toPromise()
				.then(response => response.json() as Community)
				.catch(this.handleError);
	}
	lastSix(): Promise<Array<Community>> {
		const url = API_URL + 'community-last-six/';
		return this.http.get(url, {headers: this.headers})
				.toPromise()
				.then(response => {
					return response.json() as Array<Community>;
				})
				.catch(this.handleError);
	}
	create(object: Community): Promise<Community> {
		const url = API_URL + 'community/';
		return this.http.post(url, JSON.stringify(object), {headers: this.headers})
				.toPromise()
				.then((response: Response) => response.json() as Community)
				.catch(this.handleError);
	}
	update(object: Community): Promise<Community> {
		const url = API_URL + 'community/' + object.id + '/';
		return this.http.put(url, JSON.stringify(object), {headers: this.headers})
				.toPromise()
				.then((response: Response) => response.json() as Community)
				.catch(this.handleError);
	}
	delete(id: number): Promise<Community> {
		const url = API_URL + 'community/' + id + '/';
		return this.http.delete(url, {headers: this.headers})
				.toPromise()
				.then(response => response.json() as Community)
				.catch(this.handleError);
	}

	private handleError(error: any): Promise<object> {
		return Promise.reject({
			'data': null,
			'message': JSON.parse(error._body),
			'success': false,
			'token': localStorage.getItem('token')
		});
	}

}
