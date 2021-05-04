import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import chatListItem from '../../../models/chat_list_item';
import { PageEvent } from '@angular/material/paginator';
import { FormGroup, FormControl } from '@angular/forms';

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

  sort_level = 'recent'
  filter = {
    start: 0,
    end: new Date().getTime() / 1000
  }

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.countAllConversations().subscribe(data => {
      this.length = Number(data["total"])
    })
    this.chatService.listAllCOnversations(this.start, this.end, this.sort_level, this.filter).subscribe(data => {
      this.all_chats = data;
    })
  }


  sortBy(level) {
    this.sort_level = level;

    this.chatService.listAllCOnversations(this.start, this.end, this.sort_level, this.filter).subscribe(data => {
      this.all_chats = data;
    })

  }

  filterDate(event) {
    let start = this.range.value.start
    let end = this.range.value.end
    if (start && end) {
      start = new Date(start).getTime() / 1000
      end = new Date(end).getTime() / 1000

      this.filter.start = start
      this.filter.end = end

      this.chatService.countAllConversationsByDate(start, end).subscribe(data => {
        this.length = Number(data["total"])
      })

      this.chatService.listAllCOnversations(this.start, this.end, this.sort_level, this.filter).subscribe(data => {
        this.all_chats = data;
      })

    }
  }

  handlePageEvent(event: PageEvent) {
    this.start = event.pageIndex * event.pageSize + 1
    this.end = Math.min(this.start + event.pageSize - 1, this.length)


    this.chatService.listAllCOnversations(this.start, this.end, this.sort_level, this.filter).subscribe(data => {
      this.all_chats = data;
    })

  }

}
