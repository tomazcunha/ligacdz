

$(function () {
  Highcharts.setOptions({
     colors: ['#FF4D4C', '#24BC25', ]
    //  vermelho, verde,
    });

  // ==================== Votos ====================================================
  $('#container_bz_g1').highcharts({
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
              categories: categories,
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
            name: 'Votos Contra',
            data: votos_c
          },
          {
            name: 'Votos Favor',
            data: votos_f
          },
        ],

        exporting: {
            enabled: false
        }
      });




});
