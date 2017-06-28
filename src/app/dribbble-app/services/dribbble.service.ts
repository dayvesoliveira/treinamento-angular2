import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Shot } from '../components/models/shot';

@Injectable()
export class DribbbleService {

    http: Http;
    headers: Headers;
    headerAuthorization: Object;

    configServer = {
        url:    'https://api.dribbble.com/v1/shots',
        TOKEN:  'Bearer XXXXXXX'
    };

    constructor (http: Http) {
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', this.configServer.TOKEN);

        this.headerAuthorization = new HeaderAuthorization(this.headers);
    }

    lista(): Observable<Shot[]> {
        return this.http.get(this.configServer.url +'?list', this.headerAuthorization)
                        .map( res=>res.json() );
    }

    getTypeList(type: string):Observable<Shot[]> {
        return this.http.get(this.configServer.url +'?list&sort='+ type, this.headerAuthorization)
                        .map( res=>res.json() );
    }

    findById(id: string):Observable<Shot> {
        return this.http.get(this.configServer.url +'/'+ id, this.headerAuthorization)
                        .map( res=>res.json() );
    }

}

export class HeaderAuthorization {

    private headers: Headers;

    constructor(headers: Headers) {
        this.setHeaders( headers );
    }

    public setHeaders( headers: Headers ) {
        return this.headers = headers;
    }

    public getHeaders(): Object {
        return this.headers;
    }    

}
