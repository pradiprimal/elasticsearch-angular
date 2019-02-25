import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class BvSearchService {
  constructor(private http: HttpClient) {
  }

  // test(fieldPath: string): Observable<string> {
  //   return this.http.get<string>('http://localhost:8080/search/' + fieldPath).pipe(
  //     tap(_ => this.log('fetched')));
  // }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  searchBvData(bvData: object): Observable<object> {
    return this.http.post<object>('http://localhost:8080/api/search/', bvData, this.httpOptions)
      .pipe(
        catchError(this.handleError('addBvData', bvData))
      );
  }

  private handleError(addBvData: string, bvData: object) {
    return undefined;
  }
}
