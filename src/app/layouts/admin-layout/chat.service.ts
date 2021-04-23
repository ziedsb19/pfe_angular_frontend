import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import chatListItem from '../../models/chat_list_item';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  server_url = "/api/"

  constructor(private http: HttpClient) { }

  countAllConversations() {
    return this.http.get<Number>(this.server_url + "countall");
  }

  listAllCOnversations(start: number, end: number) {
    start -= 1
    let skip = end - start;
    return this.http.get<[chatListItem]>(this.server_url + "all/" + start + "/" + skip);
  }

}
