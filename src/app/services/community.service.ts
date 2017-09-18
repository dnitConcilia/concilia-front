import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { API_URL, BASE_URL } from '../config';
import { DaoInterface } from '../../interface/dao-interface';
import { ResponseResult } from '../../interface/response-result';
import { Community } from '../../interface/community';

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
			'success': false,
			'token': localStorage.getItem('token')
		});
	}

}
