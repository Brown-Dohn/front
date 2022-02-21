import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Posts } from "../classes/post";
import { Authan } from "../classes/authan";

@Injectable()
export class freeApiService {
    // const header =new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*');
    constructor(private httpclient: HttpClient) {

    }
    getcommets(): Observable<any> {
        return this.httpclient.get("http://jsonplaceholder.typicode.com/posts/1/comments")
    }
    getcommentsbyparamter(): Observable<any> {
        let params1 = new HttpParams().set('postId', "2");
        return this.httpclient.get("http://jsonplaceholder.typicode.com/comments", { params: params1 })
    }
    login(opost: any) {
        var requet=JSON.parse(opost);
        return this.httpclient.post<Authan>("http://192.168.43.195:8081/security/login", requet);
    }
    getlistsignal(){
        return this.httpclient.get("http://192.168.43.195:8081/frontoffice/signalements",
         {
            headers:{
                
                Authorization: localStorage.getItem("access"),
            }
         })
    }
}       