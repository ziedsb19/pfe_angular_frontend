import { Component, OnInit } from '@angular/core';
import { DashChatService } from '../dash-chat.service';

@Component({
  selector: 'app-top-dashboard',
  templateUrl: './top-dashboard.component.html',
  styleUrls: ['./top-dashboard.component.css']
})
export class TopDashboardComponent implements OnInit {

  constructor(public dashService: DashChatService) { }

  ngOnInit(): void {
  }

}
