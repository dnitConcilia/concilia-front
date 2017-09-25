import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { API_URL, BASE_URL } from '../config';
import { DaoInterface } from '../../interface/dao-interface';
import { ResponseResult } from '../../interface/response-result';
import { Gallery } from '../../interface/gallery';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class GalleryService implements DaoInterface<Gallery> {

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

	getAll(): Promise<Array<Gallery>> {
		const url = API_URL + 'gallery/';
		return this.http.get(url, this.options)
				.toPromise()
				.then((response) => {
					const resp = response.json() as Array<Gallery>;

					for (let i = 0; i < resp.length; i++) {
						for (let j = 0; j < resp[i].photos.length; j++) {
							resp[i].photos[j].photo = BASE_URL + resp[i].photos[j].photo;
						}
					}
					return resp;
				})
				.catch(this.handleError);
	}

	getById(id: number): Promise<Gallery> {
		const url = API_URL + 'gallery/' + id + '/';
		return this.http.get(url, this.options)
				.toPromise()
				.then((response) => {
					const resp = response.json() as Gallery;

					for (let j = 0; j < resp.photos.length; j++) {
						resp.photos[j].photo = BASE_URL + resp.photos[j].photo;
					}
					return resp;
				})
				.catch(this.handleError);
	}
	getBySlug(slug: number): Promise<Gallery> {
		const url = API_URL + 'gallery-slug/' + slug + '/';
		return this.http.get(url, this.options)
				.toPromise()
				.then((response) => {
					const resp = response.json() as Gallery;

					for (let j = 0; j < resp.photos.length; j++) {
						resp.photos[j].photo = BASE_URL + resp.photos[j].photo;
					}
					return resp;
				})
				.catch(this.handleError);
	}
	create(object: Gallery): Promise<Gallery> {
		const url = API_URL + 'gallery/';
		return this.http.post(url, JSON.stringify(object), this.options)
				.toPromise()
				.then((response: Response) => response.json() as Gallery)
				.catch(this.handleError);
	}
	update(object: Gallery): Promise<Gallery> {
		const url = API_URL + 'gallery/' + object.id + '/';
		return this.http.put(url, JSON.stringify(object), this.options)
				.toPromise()
				.then((response: Response) => response.json() as Gallery)
				.catch(this.handleError);
	}
	delete(id: number): Promise<Gallery> {
		const url = API_URL + 'gallery/' + id + '/';
		return this.http.delete(url, this.options)
				.toPromise()
				.then(response => response.json() as Gallery)
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
