import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service'

@Component({
  selector: 'app-chat-test',
  templateUrl: './chat-test.component.html',
  styleUrls: ['./chat-test.component.css']
})
export class ChatTestComponent implements OnInit {

  user_message: string
  sender_id: string
  messages = []


  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.sender_id = "test_" + String(Date.now())
    this.testService.deleteOldConv("test").subscribe(data => { console.log(data) })
  }

  sendMessage() {
    let message = {

      "message": this.user_message,
      "time": new Date().getTime() / 1000,
      "sender": "user",
      "lang": null,
      "prob_lang": null
    }
    this.messages.push(message)
    let message_id = this.messages.length

    this.testService.sendMessage(this.user_message, this.sender_id).subscribe(data => {
      data.forEach(item => {
        item["sender"] = "bot"
        item["message"] = item["custom"]
        item['time'] = new Date().getTime() / 1000
        this.messages.push(item)
      })

      if (data.length != 0) {

        let pred = {
          "lang": data[0]["langue"],
          "prob_lang": ((data[0]["prob_lang"]) * 100).toFixed(2),
          "sender": "pred"
        }

        this.messages.splice(message_id, 0, pred)
      }
      console.log(this.messages)
    })
    this.user_message = ""
  }

  onEnter(event) {
    if (event.which === 13) {
      this.sendMessage()
    }
  }

}
