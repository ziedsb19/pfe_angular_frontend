import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import chatListItem from '../../../models/chat_list_item';

@Component({
  selector: 'app-message-user',
  templateUrl: './message-user.component.html',
  styleUrls: ['./message-user.component.css']
})
export class MessageUserComponent implements OnInit {

  @Input() message: chatListItem["history"][0]
  time: Date = null
  message_render = null

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.message) {
      this.time = new Date(this.message.time * 1000)
      this.message_render = this.correctText(this.message.message)
    }
  }

  correctText(text: string) {
    return text.replace(/(?:\r\n|\r|\n)/g, '<br>');
  }

}
