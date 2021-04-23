import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import chatListItem from '../../../models/chat_list_item';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-chatlistconv',
  templateUrl: './chatlistconv.component.html',
  styleUrls: ['./chatlistconv.component.css']
})
export class ChatlistconvComponent implements OnInit {

  all_chats: [chatListItem]
  start = 1
  end = 5
  length = 100

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.countAllConversations().subscribe(data => {
      this.length = Number(data["total"])
    })
    this.chatService.listAllCOnversations(this.start, this.end).subscribe(data => {
      this.all_chats = data;
    })
  }


  handlePageEvent(event: PageEvent) {
    this.start = event.pageIndex * event.pageSize + 1
    this.end = Math.min(this.start + event.pageSize - 1, this.length)


    this.chatService.listAllCOnversations(this.start, this.end).subscribe(data => {
      this.all_chats = data;
    })

  }

}
