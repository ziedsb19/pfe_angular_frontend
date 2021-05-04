import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import chatListItem from '../../../models/chat_list_item';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chatlistitem',
  templateUrl: './chatlistitem.component.html',
  styleUrls: ['./chatlistitem.component.css']
})
export class ChatlistitemComponent implements OnInit {

  @Input() chat: chatListItem

  is_collapsed = true

  duration = 0

  nom = "Not Found"
  adress = "Not Found"
  langue = "Not Found"
  mode = "Not Found"
  age = 0

  review_score
  review_comment = "Not Found"

  error_rate: Number = null
  response_time: Number = null

  constructor(public chatService: ChatService) { }

  ngOnInit(): void {
  }

  setReviewScore() {
    let score = this.chat.review[0].score
    if (score)
      this.review_score = score
  }

  setReviewComment() {
    let commentaire = this.chat.review[0].commentaire.trim()
    if (commentaire && commentaire.length != 0)
      this.review_comment = commentaire
  }

  setMode() {
    let mode = this.chat.cred[0].mode
    if (mode)
      this.mode = mode
  }

  setLangue() {
    let langue = this.chat.cred[0].langue
    if (langue)
      this.langue = langue
  }

  setAge() {
    let age = this.chat.cred[0].age
    if (age)
      this.age = age
  }

  setAdress() {
    let adress = this.chat.cred[0].adresse
    if (adress)
      this.adress = adress
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

  getTimeResponse(id) {
    this.chatService.getTimeResponseById(id).subscribe(data => {
      this.response_time = data["time"]
      this.response_time = Number(this.response_time.toFixed(2))
    })
  }

  getErrorRate(id) {
    this.chatService.getErrorById(id).subscribe(data => {
      this.error_rate = data["error"] * 100
      this.error_rate = Number(this.error_rate.toFixed(2))

    })
  }

  ngOnChanges(changes: SimpleChanges) {
    //@ts-ignore
    let diffTime = Math.abs(new Date(this.chat.timestart) - new Date(this.chat.timeend));
    this.duration = Math.ceil(diffTime / (1000 * 60));
    if (this.chat.cred.length > 0) {
      this.setName()
      this.setAdress()
      this.setAge()
      this.setMode()
      this.setLangue()
      if (this.response_time == null)
        this.getTimeResponse(this.chat._id)

      if (!this.error_rate) {
        this.getErrorRate(this.chat.sender_id)
      }
    }

    if (this.chat.review.length > 0) {
      this.setReviewScore()
      this.setReviewComment()
    }
  }

  change_collapse_true() {
    this.chatService.chat_list_item = this.chat
  }

  change_collapse_false() {
    this.chatService.chat_list_item = null
  }

  show_history() {
    this.chatService.chat = this.chat
  }

}
