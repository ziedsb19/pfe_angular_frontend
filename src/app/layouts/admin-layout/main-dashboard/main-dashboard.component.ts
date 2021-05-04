import { keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { DashChatService } from '../dash-chat.service';


@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {

  constructor(private dashService: DashChatService) { }

  ngOnInit(): void {
    this.getLengthHistogram();
    this.getErrorRateHistogram();
    this.getReviewsBarPlot();
    this.getHoursBarPlot();
    this.getDaysBarPlot();
    this.getMonthBarPlot();
    this.getTimeResponsePlot();
    this.getLengthByWeek();
    this.getLengthByMonth();
    this.countByWeek();
    this.countByMonth();
    this.getErrorByWeek();
    this.getErrorByMonth();
    this.reviewsByWeek();
    this.reviewsByMonth();
    this.getAgeBarPlot();
    this.getAgeByLength();
    this.getAgeByReview();
    this.getAgeByError();
  }

  startAnimationForLineChart(chart) {
    let seq: any, delays: any, durations: any;
    seq = 0;
    delays = 80;
    durations = 500;

    chart.on('draw', function (data) {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === 'point') {
        seq++;
        data.element.animate({
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq = 0;
  };

  startAnimationForBarChart(chart) {
    let seq2: any, delays2: any, durations2: any;

    seq2 = 0;
    delays2 = 80;
    durations2 = 500;
    chart.on('draw', function (data) {
      if (data.type === 'bar') {
        seq2++;
        data.element.animate({
          opacity: {
            begin: seq2 * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq2 = 0;
  };

  getAgeBar(data) {
    let tmp_values = []
    data.forEach(el => {
      tmp_values.push(el["_id"])
    })

    let minAge = 0
    let maxAge = 0

    if (tmp_values.length > 0) {
      minAge = Math.min(...tmp_values)
      maxAge = Math.max(...tmp_values)
    }

    let ages = Array.from(new Array(maxAge - minAge + 1), function (v, k) { return k + minAge })
    let ages_dict = {}
    ages.forEach(item => { ages_dict[item] = 0 })
    return ages_dict
  }

  getAgeBarPlot() {

    this.dashService.getAgeBarPlot().subscribe((data) => {

      let ages_dict = this.getAgeBar(data)


      let labels = []
      let values = []

      data.forEach(el => {
        ages_dict[el["_id"]] = el["count"]
      })

      for (let k in ages_dict) {
        labels.push(k)
        values.push(ages_dict[k])
      }


      const dataDailySalesChart: any = {
        labels: labels,
        series: [values]
      };


      const optionsDailySalesChart: any = {
        axisY: {
          type: Chartist.AutoScaleAxis,
          onlyInteger: true

        },

        axisX: {

        },

        low: 0,
        high: Math.max(...values) + 1,
        chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
      }

      var chart = new Chartist.Bar('#AgePlot', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForBarChart(chart)

    })


  }

  getAgeByLength() {

    this.dashService.getAgeByLength().subscribe((data) => {

      let ages_dict = this.getAgeBar(data)


      let labels = []
      let values = []

      data.forEach(el => {
        ages_dict[el["_id"]] = el["count"]
      })

      for (let k in ages_dict) {
        labels.push(k)
        values.push(ages_dict[k])
      }


      const dataDailySalesChart: any = {
        labels: labels,
        series: [values]
      };


      const optionsDailySalesChart: any = {
        axisY: {
          type: Chartist.AutoScaleAxis,
          onlyInteger: true

        },

        axisX: {

        },

        low: 0,
        high: Math.max(...values) + 1,
        chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
      }

      var chart = new Chartist.Bar('#AgeByLength', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForBarChart(chart)

    })


  }


  getAgeByReview() {

    this.dashService.getAgeByReview().subscribe((data) => {

      let ages_dict = this.getAgeBar(data)


      let labels = []
      let values = []

      data.forEach(el => {
        ages_dict[el["_id"]] = el["count"]
      })

      for (let k in ages_dict) {
        labels.push(k)
        values.push(ages_dict[k])
      }


      const dataDailySalesChart: any = {
        labels: labels,
        series: [values]
      };


      const optionsDailySalesChart: any = {
        axisY: {
          type: Chartist.AutoScaleAxis,
          onlyInteger: true,
          high: Math.max(...values) + 1,
        },

        axisX: {

        },

        chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
      }

      var chart = new Chartist.Bar('#AgeByReview', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForBarChart(chart)

    })


  }

  getAgeByError() {

    this.dashService.getAgeByError().subscribe((data) => {

      let ages_dict = this.getAgeBar(data)


      let labels = []
      let values = []

      data.forEach(el => {
        ages_dict[el["_id"]] = el["count"]
      })

      for (let k in ages_dict) {
        labels.push(k)
        values.push(ages_dict[k])
      }


      const dataDailySalesChart: any = {
        labels: labels,
        series: [values]
      };


      const optionsDailySalesChart: any = {
        axisY: {
          type: Chartist.AutoScaleAxis,
          labelInterpolationFnc: function (value) {
            return (value * 100) + '%';
          }
        },

        axisX: {
          labelInterpolationFnc: function (value) {
            return ages_dict[value] != 0 ? value : null;
          }
        },


        chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
      }

      /*
      var responsiveOptions: any[] = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return ages_dict[value] != 0 ? value : null;
            }
          }
        }]
      ];
      */

      var chart = new Chartist.Bar('#AgeByError', dataDailySalesChart, optionsDailySalesChart,);

      this.startAnimationForBarChart(chart)

    })


  }


  countByWeek() {


    this.dashService.countByWeek().subscribe((data) => {
      let labels = []
      let values = []
      data.forEach(el => {
        labels.push(el["_id"])
        values.push(el["count"])

      })
      const dataDailySalesChart: any = {
        labels: labels,
        series: [values]
      };

      const optionsDailySalesChart: any = {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0
        }),
        low: 0,
        high: Math.max(...values) + 1,
        axisX: {
          labelInterpolationFnc: function (value, index) {
            return value["week"] + " W";
          },
        },
        axisY: {
        },
        chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
      }

      var chart = new Chartist.Line('#countByWeek', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(chart)

    })


  }

  countByMonth() {
    this.dashService.countByMonth().subscribe((data) => {
      let labels = []
      let values = []
      data.forEach(el => {
        labels.push(el["_id"])
        values.push(el["count"])

      })
      const dataDailySalesChart: any = {
        labels: labels,
        series: [values]
      };

      const optionsDailySalesChart: any = {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0
        }),
        low: 0,
        high: Math.max(...values) + 1,
        axisX: {
          labelInterpolationFnc: function (value, index) {
            return value["month"] + " M";
          },
        },
        axisY: {
        },
        chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
      }

      var chart = new Chartist.Line('#countByMonth', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(chart)

    })

  }


  reviewsByWeek() {


    this.dashService.getReviewsByWeek().subscribe((data) => {
      let labels = []
      let values = []
      data.forEach(el => {
        labels.push(el["_id"])
        values.push(el["count"])

      })
      const dataDailySalesChart: any = {
        labels: labels,
        series: [values]
      };

      const optionsDailySalesChart: any = {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0
        }),
        low: 0,
        high: Math.max(...values) + 1,
        axisX: {
          labelInterpolationFnc: function (value, index) {
            return value["week"] + " W";
          },
        },
        axisY: {
        },
        chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
      }

      var chart = new Chartist.Line('#reviewByWeek', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(chart)

    })


  }


  reviewsByMonth() {


    this.dashService.getReviewsByMonth().subscribe((data) => {
      let labels = []
      let values = []
      data.forEach(el => {
        labels.push(el["_id"])
        values.push(el["count"])

      })
      const dataDailySalesChart: any = {
        labels: labels,
        series: [values]
      };

      const optionsDailySalesChart: any = {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0
        }),
        low: 0,
        high: Math.max(...values) + 1,
        axisX: {
          labelInterpolationFnc: function (value, index) {
            return value["month"] + " M";
          },
        },
        axisY: {
        },
        chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
      }

      var chart = new Chartist.Line('#reviewByMonth', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(chart)

    })


  }

  getLengthHistogram() {

    let buckets = 6

    this.dashService.getLengthHistogram(buckets).subscribe((data) => {
      let labels = []
      let values = []
      data.forEach(el => {
        labels.push(el["point"])
        values.push(el["count"])

      })
      const dataDailySalesChart: any = {
        labels: labels,
        series: [values]
      };

      const optionsDailySalesChart: any = {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 10
        }),
        low: 0,
        high: Math.max(...values) + 1, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
        showArea: true
      }

      var chart = new Chartist.Line('#lengthHisto', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(chart)

    })


  }


  getLengthByWeek() {


    this.dashService.getLengthByWeek().subscribe((data) => {
      let labels = []
      let values = []
      data.forEach(el => {
        labels.push(el["_id"])
        values.push(el["count"])

      })
      const dataDailySalesChart: any = {
        labels: labels,
        series: [values]
      };

      const optionsDailySalesChart: any = {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0
        }),
        low: 0,
        high: Math.max(...values) + 1,
        axisX: {
          labelInterpolationFnc: function (value, index) {
            return value["week"] + " W";
          },
        },
        axisY: {
        },
        chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
      }

      var chart = new Chartist.Line('#lengthByWeek', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(chart)

    })


  }

  getLengthByMonth() {
    this.dashService.getLengthByMonth().subscribe((data) => {
      let labels = []
      let values = []
      data.forEach(el => {
        labels.push(el["_id"])
        values.push(el["count"])

      })
      const dataDailySalesChart: any = {
        labels: labels,
        series: [values]
      };

      const optionsDailySalesChart: any = {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0
        }),
        low: 0,
        high: Math.max(...values) + 1,
        axisX: {
          labelInterpolationFnc: function (value, index) {
            return value["month"] + " M";
          },
        },
        axisY: {
        },
        chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
      }

      var chart = new Chartist.Line('#lengthByMonth', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(chart)

    })

  }


  getErrorRateHistogram() {

    let buckets = 6

    this.dashService.getErrorRateHistogram(buckets).subscribe((data) => {
      let labels = []
      let values = []
      data.forEach(el => {
        labels.push(el["label"])
        values.push(el["error"])

      })

      labels = labels.map((el: number) => { return el.toFixed(2) })

      const dataDailySalesChart: any = {
        labels: labels,
        series: [values]
      };

      const optionsDailySalesChart: any = {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 10
        }),
        low: 0,
        high: Math.max(...values) + 1, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        axisX: {
          labelInterpolationFnc: function (value, index) {
            return value * 100 + " %";
          },
        },
        axisY: {
          labelInterpolationFnc: function (value) {
            return Math.round(value / values.reduce(function (a, b) { return a + b }) * 100) + '%';
          }
        },
        chartPadding: { top: 20, right: 0, bottom: 0, left: 0 },
        showArea: true
      }

      var chart = new Chartist.Line('#errorHisto', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(chart)

    })


  }

  getErrorByWeek() {

    this.dashService.getErrorByWeek().subscribe((data) => {
      let labels = []
      let values = []
      data.forEach(el => {
        labels.push(el["_id"])
        values.push(el["count"])

      })


      const dataDailySalesChart: any = {
        labels: labels,
        series: [values]
      };

      const optionsDailySalesChart: any = {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0
        }),
        low: 0,
        // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        axisX: {
          labelInterpolationFnc: function (value, index) {
            return value["week"] + " W";
          },
        },
        axisY: {
          labelInterpolationFnc: function (value) {
            return (value * 100).toFixed(0) + "%";
          }
        },
        chartPadding: { top: 20, right: 0, bottom: 0, left: 0 },

      }

      var chart = new Chartist.Line('#errorByWeek', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(chart)

    })


  }

  getErrorByMonth() {

    this.dashService.getErrorByMonth().subscribe((data) => {
      let labels = []
      let values = []
      data.forEach(el => {
        labels.push(el["_id"])
        values.push(el["count"])

      })


      const dataDailySalesChart: any = {
        labels: labels,
        series: [values]
      };

      const optionsDailySalesChart: any = {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0
        }),
        low: 0,
        // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        axisX: {
          labelInterpolationFnc: function (value, index) {
            return value["month"] + " M";
          },
        },
        axisY: {
          labelInterpolationFnc: function (value) {
            return (value * 100).toFixed(0) + "%";
          }
        },
        chartPadding: { top: 20, right: 0, bottom: 0, left: 0 },

      }

      var chart = new Chartist.Line('#errorByMonth', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(chart)

    })


  }


  getHoursBarPlot() {

    this.dashService.getHoursBarplot().subscribe((data) => {
      let labels = []
      let values = []
      data.forEach(el => {
        labels.push(el["label"])
        values.push(el["hour"])
      })


      const dataDailySalesChart: any = {
        labels: labels,
        series: [values]
      };


      const optionsDailySalesChart: any = {
        axisY: {
          type: Chartist.AutoScaleAxis,
          onlyInteger: true

        },

        low: 0,
        high: Math.max(...values) + 1,
        chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
      }

      var chart = new Chartist.Bar('#hoursBar', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForBarChart(chart)

    })


  }

  getDaysBarPlot() {

    let _days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

    this.dashService.getDaysBarplot().subscribe((data) => {
      let labels = []
      let values = []
      data.forEach(el => {
        labels.push(el["label"])
        values.push(el["day"])
      })


      const dataDailySalesChart: any = {
        labels: labels,
        series: [values]
      };


      const optionsDailySalesChart: any = {
        axisY: {
          type: Chartist.AutoScaleAxis,
          onlyInteger: true

        },
        axisX: {

          labelInterpolationFnc: function (value, index) {
            return _days[value - 1];
          }

        },
        low: 0,
        high: Math.max(...values) + 1, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
      }

      var chart = new Chartist.Bar('#DaysBar', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForBarChart(chart)

    })

  }

  getMonthBarPlot() {

    this.dashService.getMonthBarplot().subscribe((data) => {
      let labels = []
      let values = []
      data.forEach(el => {
        labels.push(el["label"])
        values.push(el["month"])
      })


      const dataDailySalesChart: any = {
        labels: labels,
        series: [values]
      };


      const optionsDailySalesChart: any = {
        axisY: {
          type: Chartist.AutoScaleAxis,
          onlyInteger: true

        },
        axisX: {


        },
        low: 0,
        high: Math.max(...values) + 1, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
      }

      var chart = new Chartist.Bar('#MonthBar', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForBarChart(chart)

    })

  }

  getTimeResponsePlot() {

    let min = 0
    let max = 500
    let buckets = 10

    this.dashService.getTimeHistogram(min, max, buckets).subscribe((data) => {
      let labels = []
      let values = []
      data.forEach(el => {
        labels.push(el["label"])
        values.push(el["time"])
      })


      const dataDailySalesChart: any = {
        labels: labels,
        series: [values]
      };

      let sum = values.reduce(function (a, b) { return a + b })

      const optionsDailySalesChart: any = {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 10
        }),

        axisX: {
          labelInterpolationFnc: function (value, index) {
            return value;
          },
        },
        axisY: {
          low: 0,
          high: Math.round(Math.max(...values) / sum * 100),
          labelInterpolationFnc: function (value) {
            return Math.round(value / sum * 100) + '%';
          }
        },
        chartPadding: { top: 20, right: 0, bottom: 0, left: 0 },
        showArea: true
      }

      var chart = new Chartist.Line('#TimeHisto', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForBarChart(chart)

    })

  }

  getReviewsBarPlot() {


    this.dashService.getReviewsBarplot().subscribe((data) => {
      let labels = []
      let values = []
      data.forEach(el => {
        labels.push(el["label"])
        values.push(el["score"])

      })
      const dataDailySalesChart: any = {
        labels: labels,
        series: [values]
      };


      const optionsDailySalesChart: any = {
        axisY: {
          type: Chartist.AutoScaleAxis,
          onlyInteger: true

        },

        low: 0,
        high: Math.max(...values) + 1, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
      }
      var responsiveOptions: any[] = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      var chart = new Chartist.Bar('#reviewsBar', dataDailySalesChart, optionsDailySalesChart, responsiveOptions);

      //this.startAnimationForBarChart(chart)

    })


  }

}
