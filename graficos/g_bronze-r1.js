var chart,
        categories = ['Shun de Andrômeda', 'Jabu de Unicórnio', 'Ikki de Fênix', 'Geki de Urso', 'Hyoga de Cisne', 'Shiryu de Dragão', 'Ichi de Hidra', 'Seiya de Pégaso', 'Nachi de Lobo', 'Ban de Leão Menor'];

$(function () {
  Highcharts.setOptions({
     colors: ['#7473F2', '#FF4D4C', '#24BC25', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
    });

    // $('#container_bz_r1_g1').highcharts({
    //       chart: {
    //           type: 'bar'
    //       },
    //       title: {
    //           text: ''
    //       },
    //       subtitle: {
    //           text: ''
    //       },
    //       xAxis: {
    //           categories: ['Shun de Andrômeda', 'Jabu de Unicórnio', 'Ikki de Fênix', 'Geki de Urso', 'Hyoga de Cisne', 'Shiryu de Dragão', 'Ichi de Hidra', 'Seiya de Pégaso', 'Nachi de Lobo', 'Ban de Leão Menor'],
    //           title: {
    //               text: null
    //           }
    //       },
    //       yAxis: {
    //           min: 0,
    //           title: {
    //               text: 'Pontos',
    //               align: 'high'
    //           },
    //           labels: {
    //               overflow: 'justify'
    //           }
    //       },
    //       tooltip: {
    //           valueSuffix: ' millions'
    //       },
    //       plotOptions: {
    //           bar: {
    //               dataLabels: {
    //                   enabled: true
    //               }
    //           }
    //       },
    //       legend: {
    //           layout: 'vertical',
    //           align: 'left',
    //           verticalAlign: 'bottom',
    //           x: 0,
    //           y: -10,
    //           floating: true,
    //           borderWidth: 1,
    //           backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
    //           shadow: true
    //       },
    //       credits: {
    //           enabled: false
    //       },
    //       series: [{
    //           name: 'Pontos',
    //           data: [3, 3, 3, 3, 3, 0, 0, 0, 0, 0,]
    //       }
    //       // ,{
    //       //     name: 'Year 1900',
    //       //     data: [133, 156,]
    //       // }, {
    //       //     name: 'Year 2012',
    //       //     data: [1052, 954, 4250, 740, 38]
    //       // }
    //     ],
    //
    //     // Retirando o botão de navegação
    //     // http://api.highcharts.com/highcharts#exporting.buttons.contextButton
    //     // navigation: {
    //     //       buttonOptions: {
    //     //           enabled: false
    //     //       }
    //     //   }
    //
    //     // http://jsfiddle.net/gh/get/jquery/1.7.1/highslide-software/highcharts.com/tree/master/samples/highcharts/exporting/enabled-false/
    //     exporting: {
    //         enabled: false
    //     }
    //   });



  // ==================== Pontos ====================================================
  $('#container_bz_r1_g1').highcharts({
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
  // var chart,
  //         categories = ['0-9', '10-19',
  //             '20-29', '30-39', '40-49', '50-59', '60-69',
  //             '70-79', '80-89', '90 +'];

  // highcharts bar with negative stack
  // http://stackoverflow.com/questions/21454550/highcharts-bar-with-negative-stack-how-to-position-data-labels
  $('#container_bz_r1_g2').highcharts({
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


    // =======================================================================================

    //
    // $('#container_bz_r1_g1').highcharts({
    //     chart: {
    //         type: 'column'
    //     },
    //     title: {
    //         text: 'World\'s largest cities per 2014'
    //     },
    //     subtitle: {
    //         text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
    //     },
    //     xAxis: {
    //         type: 'category',
    //         labels: {
    //             rotation: -45,
    //             style: {
    //                 fontSize: '13px',
    //                 fontFamily: 'Verdana, sans-serif'
    //             }
    //         }
    //     },
    //     yAxis: {
    //         min: 0,
    //         title: {
    //             text: 'Population (millions)'
    //         }
    //     },
    //     legend: {
    //         enabled: false
    //     },
    //     tooltip: {
    //         pointFormat: 'Population in 2008: <b>{point.y:.1f} millions</b>'
    //     },
    //     series: [{
    //         name: 'Population',
    //         data: [
    //             ['Shanghai', 23.7],
    //             ['Lagos', 16.1],
    //             ['Instanbul', 14.2],
    //             ['Karachi', 14.0],
    //             ['Mumbai', 12.5],
    //             ['Moscow', 12.1],
    //             ['São Paulo', 11.8],
    //             ['Beijing', 11.7],
    //             ['Guangzhou', 11.1],
    //             ['Delhi', 11.1],
    //             ['Shenzhen', 10.5],
    //             ['Seoul', 10.4],
    //             ['Jakarta', 10.0],
    //             ['Kinshasa', 9.3],
    //             ['Tianjin', 9.3],
    //             ['Tokyo', 9.0],
    //             ['Cairo', 8.9],
    //             ['Dhaka', 8.9],
    //             ['Mexico City', 8.9],
    //             ['Lima', 8.9]
    //         ],
    //         dataLabels: {
    //             enabled: true,
    //             rotation: -90,
    //             color: '#FFFFFF',
    //             align: 'right',
    //             format: '{point.y:.1f}', // one decimal
    //             y: 10, // 10 pixels down from the top
    //             style: {
    //                 fontSize: '13px',
    //                 fontFamily: 'Verdana, sans-serif'
    //             }
    //         }
    //     }]
    // });




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
