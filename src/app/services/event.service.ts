import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject, of } from "rxjs";
import { range } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';


@Injectable({
    providedIn: 'root'
})
export class EventService extends BaseService {

    constructor(private http: HttpClient) {
        super();
    }

    public endpoint = 'event/';
    private dataSource = new BehaviorSubject<any>([]);
    currenteData = this.dataSource.asObservable();

    changeData(data: any[]) {
        this.dataSource.next(data);
    }


    getAllResume(){
      return this.http.get<any>(environment.api + this.endpoint + `getAllResume`)
      .pipe(
          map(this.extractData),
          catchError(this.serviceError)
      );
    }



    create(data): Observable<any> {

        return this.http.post<any>(environment.api + this.endpoint + `create`,data)
            .pipe(
                map(this.extractData),
                catchError(this.serviceError)
            );
    }


    remove(id): Observable<any> {

      return this.http.delete<any>(environment.api + this.endpoint + `remove/${id}`)
          .pipe(
              map(this.extractData),
              catchError(this.serviceError)
          );
    }

    addUser(user): Observable<any> {

      return this.http.post<any>(environment.api + this.endpoint + `addUser`,user)
          .pipe(
              map(this.extractData),
              catchError(this.serviceError)
          );
    }

    getAllEventUsers(eventId){
      return this.http.get<any>(environment.api + this.endpoint + `getAllEventUsers/${eventId}`)
      .pipe(
          map(this.extractData),
          catchError(this.serviceError)
      );
    }


    updateIsPaidEventUser(id,isPaid): Observable<any> {

      return this.http.put<any>(environment.api + this.endpoint + `updateIsPaidEventUser/${id}/${isPaid}`,null)
          .pipe(
              map(this.extractData),
              catchError(this.serviceError)
          );
    }


    getResumeDetail(eventId){
      return this.http.get<any>(environment.api + this.endpoint + `getResumeDetail/${eventId}`)
      .pipe(
          map(this.extractData),
          catchError(this.serviceError)
      );
    }


    removeEventUser(id): Observable<any> {

      return this.http.delete<any>(environment.api + this.endpoint + `remove/eventUser/${id}`)
          .pipe(
              map(this.extractData),
              catchError(this.serviceError)
          );
    }

}

