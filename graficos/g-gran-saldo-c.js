

$(function () {
  Highcharts.setOptions({
     colors: ['#7124BC', ]
      // vermelho FF4D4C,
      // verde 24BC25,
      // azul 7473F2,
      // roxo 7124BC
    });


  // ==================== Saldo de Como ====================================================

  // highcharts bar with negative stack
  // http://stackoverflow.com/questions/21454550/highcharts-bar-with-negative-stack-how-to-position-data-labels
  $('#container_saldo_g2').highcharts({
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
                min: -100,
                max: 100
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
              data: saldo_c
          },
        ],

        exporting: {
            enabled: false
        }
      });




});
