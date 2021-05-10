import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { DashChatService } from '../dash-chat.service';


@Component({
  selector: 'app-intent-dashboard',
  templateUrl: './intent-dashboard.component.html',
  styleUrls: ['./intent-dashboard.component.css']
})
export class IntentDashboardComponent implements OnInit {

  constructor(private dashService: DashChatService) { }

  ngOnInit(): void {
    this.IntentsBarPlot();
    this.ConfidenceLinePlot();
  }

  ConfidenceLinePlot() {
    this.dashService.getConfidencePlot().subscribe((data) => {
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

        axisX: {
          labelInterpolationFnc: function (value: string, index) {
            return value["week"] + " W";
          },
        },
        axisY: {
          type: Chartist.AutoScaleAxis,
          labelInterpolationFnc: function (value) {
            return value * 100 + "%";
          },
          low: Math.min(...values) - 0.01,
          high: Math.max(...values) + 0.01,
        },
        chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
      }

      var chart = new Chartist.Line('#confidencePlot', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(chart)

    })

  }


  IntentsBarPlot() {
    this.dashService.getIntentsPlot().subscribe((data) => {
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
        height: '300px',
        seriesBarDistance: 2,
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0
        }),

        axisX: {
          labelInterpolationFnc: function (value: string, index) {
            let splits = value.split('.')
            return splits.length > 1 ? splits[1] : splits[0];
          },
          offset: 80
        },
        axisY: {
          type: Chartist.AutoScaleAxis,
          onlyInteger: true,
          low: 0,
          high: Math.max(...values) + 1,
          labelInterpolationFnc: function (value) {
            return Math.round(value / values.reduce(function (a, b) { return a + b }) * 100) + "%";
          }
        },
        chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
      }

      var chart = new Chartist.Bar('#intentsPlot', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(chart)

    })

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

}
