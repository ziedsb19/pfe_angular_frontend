import { Component, OnInit } from '@angular/core';
import { DashChatService } from '../dash-chat.service';
import review from '../../../models/review'

@Component({
  selector: 'app-review-tab',
  templateUrl: './review-tab.component.html',
  styleUrls: ['./review-tab.component.css']
})
export class ReviewTabComponent implements OnInit {

  constructor(private dashService: DashChatService) { }

  start = 1
  end = 5

  length = 5

  reviews: review[] = []

  ngOnInit(): void {
    this.dashService.getLatestReviewsCount().subscribe(data => {
      this.length = data["total"]
    })
    this.dashService.getLatestReviews(this.start, this.end).subscribe(data => {
      this.reviews = data
    })

  }


  handlePageEvent(event) {
    console.log(this.start, this.end)

    this.start = event.pageIndex * event.pageSize + 1
    this.end = Math.min(this.start + event.pageSize - 1, this.length)

    this.dashService.getLatestReviews(this.start, this.end).subscribe(data => {
      this.reviews = data
    })

  }

}
