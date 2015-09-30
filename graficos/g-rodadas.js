
$(function () {
  Highcharts.setOptions({
     colors: ['#7473F2', '#FF4D4C', '#24BC25', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
    });

  // =================== Graficos menores compactado em um ================================================


    // ======== 4 rodada
    $('#container_compac_r4').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: [{
            categories: luta_r4_cav1,
            reversed: false,
            labels: {
                step: 1
            }
        }, { // mirror axis on right side
            opposite: true,
            reversed: false,
            categories: luta_r4_cav2,
            linkedTo: 0,
            labels: {
                step: 1
            }
        }],
        yAxis: {
            title: {
                text: null
            },
            labels: {
                formatter: function () {
                    return Math.abs(this.value) + '';
                }
            },
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },

        tooltip: {
            formatter: function () {
                return 'Pontos: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
            }
        },

        series: [{
            name: serie_name_1,
            data: result_r4_cav1
        }, {
            name: serie_name_2,
            data: result_r4_cav2
        }],

        // Rerirando o botão de exportação
        exporting: {
            enabled: false
        },

        // Retirando o link do Highcharts
        credits: {
          enabled: false
        },
    });

    // ======== 3 rodada
    $('#container_compac_r3').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: [{
            categories: luta_r3_cav1,
            reversed: false,
            labels: {
                step: 1
            }
        }, { // mirror axis on right side
            opposite: true,
            reversed: false,
            categories: luta_r3_cav2,
            linkedTo: 0,
            labels: {
                step: 1
            }
        }],
        yAxis: {
            title: {
                text: null
            },
            labels: {
                formatter: function () {
                    return Math.abs(this.value) + '';
                }
            },
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },

        tooltip: {
            formatter: function () {
                return 'Pontos: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
            }
        },

        series: [{
            name: serie_name_1,
            data: result_r3_cav1
        }, {
            name: serie_name_2,
            data: result_r3_cav2
        }],

        // Rerirando o botão de exportação
        exporting: {
            enabled: false
        },

        // Retirando o link do Highcharts
        credits: {
          enabled: false
        },
    });


    // ======== 2 rodada
    $('#container_compac_r2').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: [{
            categories: luta_r2_cav1,
            reversed: false,
            labels: {
                step: 1
            }
        }, { // mirror axis on right side
            opposite: true,
            reversed: false,
            categories: luta_r2_cav2,
            linkedTo: 0,
            labels: {
                step: 1
            }
        }],
        yAxis: {
            title: {
                text: null
            },
            labels: {
                formatter: function () {
                    return Math.abs(this.value) + '';
                }
            },
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },

        tooltip: {
            formatter: function () {
                return 'Pontos: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
            }
        },

        series: [{
            name: serie_name_1,
            data: result_r2_cav1
        }, {
            name: serie_name_2,
            data: result_r2_cav2
        }],

        // Rerirando o botão de exportação
        exporting: {
            enabled: false
        },

        // Retirando o link do Highcharts
        credits: {
          enabled: false
        },
    });


    // ======== 1 rodada
    $('#container_compac_r1').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: [{
            categories: luta_r1_cav1,
            reversed: false,
            labels: {
                step: 1
            }
        }, { // mirror axis on right side
            opposite: true,
            reversed: false,
            categories: luta_r1_cav2,
            linkedTo: 0,
            labels: {
                step: 1
            }
        }],
        yAxis: {
            title: {
                text: null
            },
            labels: {
                formatter: function () {
                    // return Math.abs(this.value) + '%';
                    return Math.abs(this.value) + '';
                }
            },

            // min: -32,
            // max: 32
        },

        // plotOptions: {
        //     bar: {
        //         dataLabels: {
        //             enabled: true
        //         }
        //     }
        // },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },

        tooltip: {
            formatter: function () {
                // return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
                    // 'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                // return '<b> Cavaleiro ' + this.point.category + '</b><br/>' +
                //     'Pontos: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                return 'Pontos: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
            }
        },

        series: [{
            name: serie_name_1,
            data: result_r1_cav1
        }, {
            name: serie_name_2,
            data: result_r1_cav2
        }],

        // Rerirando o botão de exportação
        exporting: {
            enabled: false
        },

        // Retirando o link do Highcharts
        credits: {
          enabled: false
        },
    });


});
