import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result: any;

  // dependency injection
  constructor(private _http: Http) { }

  getData() {
    return this._http.get("api/users")
    .map(result => this.result = result.json().data);
  }

}
