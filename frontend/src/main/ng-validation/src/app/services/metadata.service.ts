import { Injectable } from '@angular/core';
import { Metadata } from './../models/metadata';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from './../../environments/environment';

@Injectable()
export class MetadataService {
  private baseUrl = environment.apiBaseUrl;

  constructor(private http: Http) { 
  }

   getMetadata(page: Number, limit:Number):  Promise<any> {
    return this.http.get(this.baseUrl + '/api/metadata?page=' + page+ '&size=' + limit)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  createMetadata(metadata: Metadata): Promise<Metadata> {
    return this.http.post(this.baseUrl + '/api/metadata/', metadata)
      .toPromise().then(response => response.json() as Metadata)
      .catch(this.handleError);
  }

  updateMetadata(metadata: Metadata): Promise<Metadata> {
    return this.http.put(this.baseUrl + '/api/metadata/' + metadata.id, metadata)
      .toPromise()
      .then(response => response.json() as Metadata)
      .catch(this.handleError);
  }

  deleteMetadata(id: string): Promise<any> {
    return this.http.delete(this.baseUrl + '/api/metadata/' + id)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}