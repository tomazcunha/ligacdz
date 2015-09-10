
$(function () {
  Highcharts.setOptions({
     colors: ['#7473F2', '#FF4D4C', '#24BC25', '#24CBE5', '#64E572', '#FF9655', '#FFF263',  '#6AF9C4']
    });



  // ==================== Graficos menores ======================================================
  $('#container_bz_r2_g1m').highcharts({
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
          name: 'Jabu',
          data: [55]
      }, {
          name: 'Geki',
          data: [27]
      }],
      exporting: {
            enabled: false
        }
  });

  $('#container_br_r2_g2m').highcharts({
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
          name: 'Hyoga',
          data: [45]
      }, {
          name: 'Ban',
          data: [10]
      }],
      exporting: {
            enabled: false
        }
  });

  $('#container_br_r2_g3m').highcharts({
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
          name: 'Shun',
          data: [53]
      }, {
          name: 'Ikki',
          data: [46]
      }],
      exporting: {
            enabled: false
        }
  });

  $('#container_br_r2_g4m').highcharts({
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
          name: 'Ichi',
          data: [21]
      }, {
          name: 'Shiryu',
          data: [45]
      }],
      exporting: {
            enabled: false
        }
  });

  $('#container_br_r2_g5m').highcharts({
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
          data: [26]
      }, {
          name: 'Nashi',
          data: [8]
      }],
      exporting: {
            enabled: false
        }
  });




});
