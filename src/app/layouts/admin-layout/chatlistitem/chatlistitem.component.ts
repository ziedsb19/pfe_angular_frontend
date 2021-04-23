import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import chatListItem from '../../../models/chat_list_item';

@Component({
  selector: 'app-chatlistitem',
  templateUrl: './chatlistitem.component.html',
  styleUrls: ['./chatlistitem.component.css']
})
export class ChatlistitemComponent implements OnInit {

  @Input() chat: chatListItem

  is_collapsed = true
  duration = 0

  constructor() { }

  ngOnInit(): void {
  }


  ngOnChanges(changes: SimpleChanges) {
    //@ts-ignore
    let diffTime = Math.abs(new Date(this.chat.timestart) - new Date(this.chat.timeend));
    this.duration = Math.ceil(diffTime / (1000 * 60));

  }

  change_collapse() {
    this.is_collapsed = !this.is_collapsed;
  }

}
