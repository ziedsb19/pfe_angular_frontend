import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  server_url = "http://localhost:5001/"
  chat_server_url = "/api/"

  constructor(private http: HttpClient) { }

  sendMessage(message: string, sender_id: string) {
    let object = {
      sender: sender_id,
      message: message,
      mode: "free",
      langue: "free",
      persistance: false
    };

    return this.http.post<Object[]>(this.server_url, object);
  }

  deleteOldConv(regex: string) {
    return this.http.get(this.chat_server_url + "delete_old/" + regex)
  }
}
