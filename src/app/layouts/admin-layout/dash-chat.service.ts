import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ChatService } from './chat.service'

@Injectable({
  providedIn: 'root'
})
export class DashChatService {

  server_url = "/api/"
  server_dash_url = "/api/dash/"

  all_counts = 0
  errors_rate = {
    "mean": 0,
    "std": 0,
    "max": 0
  }
  time_response = {
    "mean": 0,
    "std": 0,
    "max": 0
  }
  messages = {
    "mean": 0,
    "std": 0,
    "max": 0
  }
  reviews = {
    "mean": 0,
    "std": 0,
    "max": 0
  }



  constructor(private chat: ChatService, private http: HttpClient) {
    this.countAllCOnversations()
    this.getErrorRate()
    this.getTimeResponse()
    this.getMessages()
    this.getReviews()
  }

  getLengthHistogram(buckets) {
    return this.http.get<Array<Object>>(this.server_dash_url + "length_histogram/" + buckets)
  }

  getLengthByWeek() {
    return this.http.get<Array<Object>>(this.server_dash_url + "length_by_week/")
  }

  getLengthByMonth() {
    return this.http.get<Array<Object>>(this.server_dash_url + "length_by_month/")
  }

  getErrorRateHistogram(buckets) {
    return this.http.get<Array<Object>>(this.server_dash_url + "errors_histogram/" + buckets)
  }

  getErrorByWeek() {
    return this.http.get<Array<Object>>(this.server_dash_url + "error_by_week/")
  }

  getErrorByMonth() {
    return this.http.get<Array<Object>>(this.server_dash_url + "error_by_month/")
  }

  getReviewsBarplot() {
    return this.http.get<Array<Object>>(this.server_dash_url + "reviews_barplot/")
  }

  getReviewsByWeek() {
    return this.http.get<Array<Object>>(this.server_dash_url + "review_by_week/")
  }

  getReviewsByMonth() {
    return this.http.get<Array<Object>>(this.server_dash_url + "review_by_month/")
  }

  getHoursBarplot() {
    return this.http.get<Array<Object>>(this.server_dash_url + "hours_barplot/")
  }

  getDaysBarplot() {
    return this.http.get<Array<Object>>(this.server_dash_url + "days_barplot/")
  }

  getMonthBarplot() {
    return this.http.get<Array<Object>>(this.server_dash_url + "month_barplot/")
  }

  getTimeHistogram(min, max, buckets) {
    return this.http.get<Array<Object>>(this.server_dash_url + "time_response_barplot/" + min + "/" + max + "/" + buckets)
  }

  countByWeek() {
    return this.http.get<Array<Object>>(this.server_dash_url + "count_by_week/")
  }

  countByMonth() {
    return this.http.get<Array<Object>>(this.server_dash_url + "count_by_month/")
  }

  getAgeBarPlot() {
    return this.http.get<Array<Object>>(this.server_dash_url + "age_barplot/")
  }

  getAgeByLength() {
    return this.http.get<Array<Object>>(this.server_dash_url + "age_by_length/")
  }
  getAgeByReview() {
    return this.http.get<Array<Object>>(this.server_dash_url + "age_by_review/")
  }
  getAgeByError() {
    return this.http.get<Array<Object>>(this.server_dash_url + "age_by_error/")
  }

  countAllCOnversations() {
    this.chat.countAllConversations().subscribe((count) => {
      this.all_counts = Number(count["total"])
      console.log(this.all_counts)
    })
  }

  getErrorRate() {
    this.http.get(this.server_url + "errors_all").subscribe(data => {
      this.errors_rate = data["error"]

    })
  }

  getTimeResponse() {
    this.http.get(this.server_url + "history_time_response_all").subscribe(data => {
      this.time_response = data["time"]

    })
  }

  getMessages() {
    this.http.get(this.server_url + "countmessages").subscribe(data => {
      this.messages = data["messages"]

    })
  }

  getReviews() {
    this.http.get(this.server_url + "reviews").subscribe(data => {
      this.reviews = data["reviews"]
      this.reviews.mean = Number(this.reviews.mean.toFixed(1))
      this.reviews.std = Number(this.reviews.std.toFixed(1))
    })
  }


}
