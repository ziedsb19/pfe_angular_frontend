import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import chatListItem from '../../models/chat_list_item';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  server_url = "/api/"

  chat_list_item = null
  chat = null

  constructor(private http: HttpClient) {
    this.chat = this.listAllCOnversations(1, 1, "recent", { start: 0, end: new Date().getTime() / 1000 })
      .subscribe((data) => {
        if (data.length > 0) {
          this.chat = data[0]
        }
      });
  }

  countAllConversations() {
    return this.http.get<Number>(this.server_url + "countall");
  }

  countAllConversationsByDate(start, end) {
    return this.http.get<Number>(this.server_url + "countall/" + start + "/" + end);
  }

  listAllCOnversations(start: number, end: number, sort, filter) {
    start -= 1
    let skip = end - start;
    let start_time = filter.start;
    let end_time = filter.end;
    let headers = new HttpHeaders()
    let params = new HttpParams().set('sort', sort).set('start_time', start_time).set('end_time', end_time)


    return this.http.get<[chatListItem]>(this.server_url + "all/" + start + "/" + skip, { headers, params });
  }

  getHistoryConversation(id: string) {
    return this.http.get<chatListItem>(this.server_url + "history/" + id)
  }

  getTimeResponseById(id: string) {
    return this.http.get<chatListItem>(this.server_url + "history_time_response/" + id)
  }


  getErrorById(id: string) {
    return this.http.get<chatListItem>(this.server_url + "errors/" + id)
  }

}
