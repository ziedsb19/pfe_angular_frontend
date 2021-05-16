import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import chatListItem from '../../../models/chat_list_item';
import botMessage from '../../../models/bot_message';
import { TestService } from '../test.service'

@Component({
  selector: 'app-test-message-bot',
  templateUrl: './test-message-bot.component.html',
  styleUrls: ['./test-message-bot.component.css']
})
export class TestMessageBotComponent implements OnInit {

  @Input() messages;
  @Input() sender_id;
  @Input() message: chatListItem["history"][0]
  time: Date = null
  message__obj: botMessage = null;

  message_type = null

  message_render = null
  link_render: botMessage["href"] = null
  choice_render: botMessage = null
  table_render: any = null

  constructor(private testService: TestService) { }

  ngOnInit(): void {
  }

  write_message(message) {
    let msg = {

      "message": message,
      "time": new Date().getTime() / 1000,
      "sender": "user"
    }
    this.messages.push(msg)
    this.testService.sendMessage(message, this.sender_id).subscribe(data => {
      data.forEach(item => {
        item["sender"] = "bot"
        item["message"] = item["custom"]
        item['time'] = new Date().getTime() / 1000
        this.messages.push(item)
      })
    })
  }

  write_message_date(event) {
    let message = String(event.value)
    let msg = {

      "message": message,
      "time": new Date().getTime() / 1000,
      "sender": "user"
    }
    this.messages.push(msg)
    this.testService.sendMessage(message, this.sender_id).subscribe(data => {
      data.forEach(item => {
        item["sender"] = "bot"
        item["message"] = item["custom"]
        item['time'] = new Date().getTime() / 1000
        this.messages.push(item)
      })
      console.log(this.messages)
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.message) {
      this.time = new Date(this.message.time * 1000)
      this.message__obj = this.message.message
      console.log(this.message__obj)
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
    else if (this.message_type == "datepicker") {
      this.message_render = this.correctText(message.text)
    }

    else {
      this.message_type = "unk"
      this.message_render = message.text ? message.text : "Unkown Message"
      console.log(message)
    }
  }

}
