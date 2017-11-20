import { Injectable } from '@angular/core';
import { Konsistensi } from './../models/konsistensi';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from './../../environments/environment';

@Injectable()
export class KonsistensiService {
  private baseUrl = environment.apiBaseUrl;

  constructor(private http: Http) { 
  }

   getKonsistensi(page: Number, limit:Number):  Promise<any> {
    return this.http.get(this.baseUrl + '/api/konsistensi?page=' + page+ '&size=' + limit)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  createKonsistensi(konsistensi: Konsistensi): Promise<Konsistensi> {
    return this.http.post(this.baseUrl + '/api/konsistensi/', konsistensi)
      .toPromise().then(response => response.json() as Konsistensi)
      .catch(this.handleError);
  }

  updateKonsistensi(konsistensi: Konsistensi): Promise<Konsistensi> {
    return this.http.put(this.baseUrl + '/api/konsistensi/' + konsistensi.id, konsistensi)
      .toPromise()
      .then(response => response.json() as Konsistensi)
      .catch(this.handleError);
  }

  deleteKonsistensi(id: string): Promise<any> {
    return this.http.delete(this.baseUrl + '/api/konsistensi/' + id)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}