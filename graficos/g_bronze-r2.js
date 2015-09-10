var chart,
        categories = ['Shun de Andrômeda', 'Jabu de Unicórnio', 'Ikki de Fênix', 'Geki de Urso', 'Hyoga de Cisne', 'Shiryu de Dragão', 'Ichi de Hidra', 'Seiya de Pégaso', 'Nachi de Lobo', 'Ban de Leão Menor'];

$(function () {
  Highcharts.setOptions({
     colors: ['#7473F2', '#FF4D4C', '#24BC25', '#24CBE5', '#64E572', '#FF9655', '#FFF263',  '#6AF9C4']
    });


  // ==================== Pontos ====================================================
  $('#container_bz_r2_g1').highcharts({
          chart: {
              type: 'bar'
          },
          title: {
              text: ''
          },
          subtitle: {
              text: ''
          },
          xAxis: {
              categories: ['Shun de Andrômeda', 'Jabu de Unicórnio', 'Ikki de Fênix', 'Geki de Urso', 'Hyoga de Cisne', 'Shiryu de Dragão', 'Ichi de Hidra', 'Seiya de Pégaso', 'Nachi de Lobo', 'Ban de Leão Menor'],
              title: {
                  text: null
              }
          },
          yAxis: {
              min: 0,
              title: {
                  text: 'Pontos',
                  align: 'high'
              },
              labels: {
                  overflow: 'justify'
              }
          },
          tooltip: {
              valueSuffix: ' Votos'
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
          series: [
          {
              name: 'Pontos',
              data: [3, 3, 3, 3, 3, 0, 0, 0, 0, 0,]
          },
          {
            name: 'Votos Contra',
            data: [5, 5, 7, 13, 16, 20, 19, 24, 28, 31]
          },
          {
            name: 'Votos Favor',
            data: [31, 28, 24, 19, 20, 16, 13, 7, 5, 5]
          },
        ],

        exporting: {
            enabled: false
        }
      });


  // ==================== Saldo de Como ====================================================
  $('#container_bz_r2_g2').highcharts({
          chart: {
              type: 'bar'
          },
          title: {
              text: ''
          },
          subtitle: {
              text: ''
          },
          xAxis:
          [{
                categories: categories,
                reversed: true,
                labels: {
                    step: 1
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: true,
                categories: categories,
                linkedTo: 0,
                labels: {
                    step: 1
                }
            }],
          yAxis: {
              // min: 0,
              // title: {
              //     text: 'Saldo de Cosmo',
              //     align: 'high'
              // },
              // labels: {
              //     overflow: 'justify'
              // }

              title: {
                    text: null
                },
                // labels: {
                //     formatter: function(){
                //         return (Math.abs(this.value) / 1000000) + 'M';
                //     }
                // },
                min: -30,
                max: 30
          },
          tooltip: {
              valueSuffix: ' Cosmos'
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
          series: [
          {
              name: 'Saldo de Cosmo',
              data: [26, 23, 17, 6, 4, -4, -6, -17, -23, -26,]
          },
        ],

        exporting: {
            enabled: false
        }
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
