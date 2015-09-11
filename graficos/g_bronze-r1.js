
$(function () {
  Highcharts.setOptions({
     colors: ['#7473F2', '#FF4D4C', '#24BC25', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
    });

  // =================== Graficos menores ================================================
  $('#container_bz_r1_g1m').highcharts({
      chart: {
          type: 'bar'
      },
      title: {
          text: ''
      },
      subtitle: {
          text: '<a href="#"></a>'
      },
      xAxis: {
          categories: [''],
          title: {
              text: null
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Votos',
              align: 'high'
          },
          labels: {
              overflow: 'justify'
          }
      },
      tooltip: {
          valueSuffix: ' votos'
      },
      plotOptions: {
          bar: {
              dataLabels: {
                  enabled: true
              }
          }
      },
      legend: {
          layout: 'vertical',
          align: 'left',
          verticalAlign: 'bottom',
          x: -7,
          y: 17,
          floating: true,
          borderWidth: 0,
          backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
          shadow: false
      },
      credits: {
          enabled: false
      },
      series: [{
          name: 'Seiya',
          data: [7]
      }, {
          name: 'Ikki',
          data: [24]
      }],
      exporting: {
            enabled: false
        }
  });

  $('#container_br_r1_g2m').highcharts({
      chart: {
          type: 'bar'
      },
      title: {
          text: ''
      },
      subtitle: {
          text: '<a href="#"></a>'
      },
      xAxis: {
          categories: [''],
          title: {
              text: null
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Votos',
              align: 'high'
          },
          labels: {
              overflow: 'justify'
          }
      },
      tooltip: {
          valueSuffix: ' votos'
      },
      plotOptions: {
          bar: {
              dataLabels: {
                  enabled: true
              }
          }
      },
      legend: {
          layout: 'vertical',
          align: 'left',
          verticalAlign: 'bottom',
          x: -7,
          y: 17,
          floating: true,
          borderWidth: 0,
          backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
          shadow: false
      },
      credits: {
          enabled: false
      },
      series: [{
          name: 'Nachi',
          data: [5]
      }, {
          name: 'Jabu',
          data: [28]
      }],

      exporting: {
            enabled: false
        }
  });

  $('#container_br_r1_g3m').highcharts({
      chart: {
          type: 'bar'
      },
      title: {
          text: ''
      },
      subtitle: {
          text: '<a href="#"></a>'
      },
      xAxis: {
          categories: [''],
          title: {
              text: null
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Votos',
              align: 'high'
          },
          labels: {
              overflow: 'justify'
          }
      },
      tooltip: {
          valueSuffix: ' votos'
      },
      plotOptions: {
          bar: {
              dataLabels: {
                  enabled: true
              }
          }
      },
      legend: {
          layout: 'vertical',
          align: 'left',
          verticalAlign: 'bottom',
          x: -7,
          y: 17,
          floating: true,
          borderWidth: 0,
          backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
          shadow: false
      },
      credits: {
          enabled: false
      },
      series: [{
          name: 'Geki',
          data: [19]
      }, {
          name: 'Ichi',
          data: [13]
      }],

      exporting: {
            enabled: false
        }
  });

  $('#container_br_r1_g4m').highcharts({
      chart: {
          type: 'bar'
      },
      title: {
          text: ''
      },
      subtitle: {
          text: '<a href="#"></a>'
      },
      xAxis: {
          categories: [''],
          title: {
              text: null
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Votos',
              align: 'high'
          },
          labels: {
              overflow: 'justify'
          }
      },
      tooltip: {
          valueSuffix: ' votos'
      },
      plotOptions: {
          bar: {
              dataLabels: {
                  enabled: true
              }
          }
      },
      legend: {
          layout: 'vertical',
          align: 'left',
          verticalAlign: 'bottom',
          x: -7,
          y: 17,
          floating: true,
          borderWidth: 0,
          backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
          shadow: false
      },
      credits: {
          enabled: false
      },
      series: [{
          name: 'Shiryu',
          data: [16]
      }, {
          name: 'Hyoga',
          data: [20]
      }],

      exporting: {
            enabled: false
        }
  });

  $('#container_br_r1_g5m').highcharts({
      chart: {
          type: 'bar'
      },
      title: {
          text: ''
      },
      subtitle: {
          text: '<a href="#"></a>'
      },
      xAxis: {
          categories: [''],
          title: {
              text: null
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Votos',
              align: 'high'
          },
          labels: {
              overflow: 'justify'
          }
      },
      tooltip: {
          valueSuffix: ' votos'
      },
      plotOptions: {
          bar: {
              dataLabels: {
                  enabled: true
              }
          }
      },
      legend: {
          layout: 'vertical',
          align: 'left',
          verticalAlign: 'bottom',
          x: -7,
          y: 17,
          floating: true,
          borderWidth: 0,
          backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
          shadow: false
      },
      credits: {
          enabled: false
      },
      series: [{
          name: 'Ban',
          data: [5]
      }, {
          name: 'Shun',
          data: [31]
      }],

      exporting: {
            enabled: false
        }
  });


});
