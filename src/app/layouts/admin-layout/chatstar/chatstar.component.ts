import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-chatstar',
  templateUrl: './chatstar.component.html',
  styleUrls: ['./chatstar.component.css']
})
export class ChatstarComponent implements OnInit {

  @Input() score;

  stars = [
    {
      selected: false
    },
    {
      selected: false
    },
    {
      selected: false
    },
    {
      selected: false
    },
    {
      selected: false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.stars.forEach((value, index) => {
      if (index < this.score) {
        value.selected = true
      }
    })
  }



}
