import { Injectable } from '@angular/core';
import {Http} from "@angular/http"

import "rxjs/Rx"


@Injectable()
export class ThisDayService {

    http: Http;
    url: string = "http://history.muffinlabs.com/date";
    Deaths:boolean = false;
    Births:boolean = false;
    Events:boolean = true;

    constructor(http: Http) { 
        this.http = http;
    }

    getHistoryEvents(){
        return this.http.get(this.url)
            //assign json data into variable
            .map(res => res.json())
    }

    pickDay(month:string, day:string){

        return this.http.get(this.url+"/"+month+"/"+day)
            .map(res => res.json())
    }
}

