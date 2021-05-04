import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChatService } from '../chat.service';
import chatListItem from '../../../models/chat_list_item';

@Component({
  selector: 'app-chathistory',
  templateUrl: './chathistory.component.html',
  styleUrls: ['./chathistory.component.css']
})
export class ChathistoryComponent implements OnInit {

  @Input() chat: chatListItem
  nom: any
  history: chatListItem["history"]

  constructor(public chatService: ChatService) {

  }

  ngOnInit(): void {
  }

  setName() {

    let name = this.chat.cred[0].nom
    let prenom = this.chat.cred[0].prenom

    if (name || prenom) {
      this.nom = ""
      if (name)
        this.nom += name + " "
      if (prenom)
        this.nom += prenom
    }

  }

  getHistory(id: string) {
    this.chatService.getHistoryConversation(id).subscribe((data) => {
      this.history = data["history"]
    })

  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.chat._id) {
      this.getHistory(this.chat._id)
      if (this.chat.cred.length > 0) {
        this.setName()
      }
    }
  }

}
