import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import chatListItem from '../../../models/chat_list_item';
import botMessage from '../../../models/bot_message';

@Component({
  selector: 'app-message-bot',
  templateUrl: './message-bot.component.html',
  styleUrls: ['./message-bot.component.css']
})
export class MessageBotComponent implements OnInit {

  @Input() message: chatListItem["history"][0]
  time: Date = null
  message__obj: botMessage = null;

  message_type = null

  message_render = null
  link_render: botMessage["href"] = null
  choice_render: botMessage = null
  table_render: any = null

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.message) {
      this.time = new Date(this.message.time * 1000)
      this.message__obj = this.message.message

      this.compileMessage(this.message__obj)
    }
  }

  correctText(text: string) {
    return text.replace(/(?:\r\n|\r|\n)/g, '<br>');
  }

  compileMessage(message: botMessage) {
    this.message_type = message.type
    if (message.type == "text") {
      this.message_render = this.correctText(message.text)
    }
    else if (this.message_type == "link") {
      this.link_render = message.href
    }
    else if (this.message_type == "ratiob") {
      this.choice_render = message
    }
    else if (this.message_type == "table") {

    }

    else {
      this.message_type = "unk"
      this.message_render = message.text ? message.text : "Unkown Message"
      console.log(message)
    }
  }

}
