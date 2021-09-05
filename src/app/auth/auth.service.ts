import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  server_ur = '/api/auth/'

  constructor(private http: HttpClient) { }

  login(data) {

    return this.http.post<Array<Object>>(this.server_ur + "login/", data)
  }

  async verifytoken(token) {
    let headers = new HttpHeaders({ "Authorization": token })
    return await this.http.get(this.server_ur + "verify", { headers, responseType: 'text' }).toPromise()
  }

}
