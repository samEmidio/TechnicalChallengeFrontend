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
export class AccountService extends BaseService {

    constructor(private http: HttpClient) {
        super();
    }

    public endpoint = 'account/';
    private dataSource = new BehaviorSubject<any>([]);
    currenteData = this.dataSource.asObservable();

    changeData(data: any[]) {
        this.dataSource.next(data);
    }

    authentication(email : String, pass : String): Observable<any> {
        return this.http.get(environment.api + this.endpoint + `authentication?email=${email}&pass=${pass}`)
            .pipe(
                map(this.extractData),
                catchError(this.serviceError)
            );
    }

    register(data): Observable<any> {
        return this.http.post<any>(environment.api + this.endpoint + `register`,data)
            .pipe(
                map(this.extractData),
                catchError(this.serviceError)
            );
    }

}

