import { APP_CONSTANT } from './app.const';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) {
  }

  getTableNames(schemaName): Observable<string[]> {
    return this.http.get<string[]>(APP_CONSTANT + schemaName);
  }
}
