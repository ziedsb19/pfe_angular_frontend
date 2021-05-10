import { Component, OnInit } from '@angular/core';
import conversationDetail from '../../../models/conversation_detail';

import { DashChatService } from '../dash-chat.service';

@Component({
  selector: 'app-intent-tab',
  templateUrl: './intent-tab.component.html',
  styleUrls: ['./intent-tab.component.css']
})
export class IntentTabComponent implements OnInit {

  start = 1
  end = 10

  length = 10

  nlu: conversationDetail[]

  constructor(private dashService: DashChatService) { }

  ngOnInit(): void {
    this.dashService.countNluFallbacks().subscribe(data => {
      this.length = data["total"]
      this.dashService.getNluFallbacks(this.start, this.end).subscribe(data => {
        this.nlu = data
      })

    })
  }


  handlePageEvent(event) {

    this.start = event.pageIndex * event.pageSize + 1
    this.end = Math.min(this.start + event.pageSize - 1, this.length)

    this.dashService.getNluFallbacks(this.start, this.end).subscribe(data => {
      this.nlu = data
    })

    console.log(this.start, this.end)
  }
}
