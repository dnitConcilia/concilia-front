import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {CookieService} from 'angular2-cookie/core';
import { API_URL, BASE_URL } from '../config';
import { DaoInterface } from '../../interface/dao-interface';
import { ResponseResult } from '../../interface/response-result';
import { Community } from '../../interface/community';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class CommunityService implements DaoInterface<Community> {

	// private headers: Headers;
	private options: RequestOptions;

	constructor(
		private http: Http,
		private _cookieService: CookieService
	) {
		const headers: Headers = new Headers (
			{
				'Content-Type': 'application/json',
				'Authorization': 'token ' + localStorage.getItem('token')
			}
		);
		this.options = new RequestOptions({ headers: headers, withCredentials: true });
	}

	getAll(): Promise<Array<Community>> {
		const url = API_URL + 'community/';
		return this.http.get(url, this.options)
				.toPromise()
				.then(response => response.json() as Array<Community>)
				.catch((error: Response) => {
					if (error.status === 401 && this._cookieService.get('wasReload') === undefined) {
						this._cookieService.put('wasReload', '1');
						location.reload();

					} else {
						console.log({
							'data': null,
							'message': error,
							'success': false
							// 'token': localStorage.getItem('token')
						});
					}
				});
	}

	getById(id: number): Promise<Community> {
		const url = API_URL + 'community/' + id + '/';
		return this.http.get(url, this.options)
				.toPromise()
				.then(response => response.json() as Community)
				.catch(this.handleError);
	}
	getBySlug(slug: number): Promise<Community> {
		const url = API_URL + 'community-slug/' + slug + '/';
		return this.http.get(url, this.options)
				.toPromise()
				.then(response => response.json() as Community)
				.catch(this.handleError);
	}
	create(object: Community): Promise<Community> {
		const url = API_URL + 'community/';
		return this.http.post(url, JSON.stringify(object), this.options)
				.toPromise()
				.then((response: Response) => response.json() as Community)
				.catch(this.handleError);
	}
	update(object: Community): Promise<Community> {
		const url = API_URL + 'community/' + object.id + '/';
		return this.http.put(url, JSON.stringify(object), this.options)
				.toPromise()
				.then((response: Response) => response.json() as Community)
				.catch(this.handleError);
	}
	delete(id: number): Promise<Community> {
		const url = API_URL + 'community/' + id + '/';
		return this.http.delete(url, this.options)
				.toPromise()
				.then(response => response.json() as Community)
				.catch(this.handleError);
	}
	storyMap(): Promise<any> {
		return this.getAll()
			.then((response) => {
				const apiUrl = BASE_URL;
				const mapJson = {
					'storymap': {
						'slides': [
							{
								'type': 'overview',
								'date': '',
								'text': {
									'headline': 'Comunidades <small>Concilia BR-381 e Anel Rodoviário</small>',
									'text': '<p>Mapa das comunidades participantes do programa, etapa 2017.</p>'
								},
								'location': {
									'name': '',
									'lat': '',
									'lon': '',
									'zoom': null,
									'line': false,
								},
								'media': {
									'url':  '',
									'credit': '',
									'caption': ''
								}
							}
						]
					},
				};
				for (let i = 0; i < response.length; i++) {
					mapJson.storymap.slides.push(
						{
							'type': '',
							'date': '',
							'text': {
								'headline': response[i].title,
								'text': response[i].textMap
							},
							'location': {
								'name': response[i].title,
								'lat': response[i].lat,
								'lon': response[i].lng,
								'zoom': 17,
								'line': false,
							},
							'media': {
								'url': response[i].image,
								'credit': response[i].credit,
								'caption': response[i].caption
							}
						}
					);
				}
				return mapJson;
			})
			.catch((e) => {
				console.log(e);
			});
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
