
// var chart,
var categories = [
      'Afrodite de Peixes',
      'Aioria de Leão',
      'Aioros de Sagitário',
      'Aldebaran de Touro',
      'Camus de Aquário',
      'Dohko de Libra',
      'Mascara da Morte de Câncer',
      'Miro de Escorpião',
      'Mu de Áries',
      'Saga de Gêmeos',
      'Shaka de Virgem',
      'Shura de Capricórnio'
    ];

  var pontos  = [3, 1, 4, 3, 4, 6, 1, 0, 3, 3, 6, 0];
  var votos_f = [43, 40, 68, 33, 72, 87, 40, 46, 37, 71, 93, 47 ];
  var votos_c = [72, 60, 38, 46, 45, 40, 67, 74, 46, 51, 33, 105];
  var saldo_c = [-29, -20, 30, -13, 27, 47, -27, -28, -9, 20, 60, -58];


  // Nome da série
  var serie_name_1 = 'Pontos na Luta'
  var serie_name_2 = 'Pontos na Luta'


  // Aldebaran de Touro     22 - 21 Miro de Escorpião
  // Camus de Aquário       20 - 20 Aioria de Leão
  // Saga de Gêmeos         47 - 26 Shura de Capricórnio
  // Shaka de Virgem        35 - 12  Mu de Áries
  // Dohko de Libra         47 - 20  Mascara da Morte de Câncer
  // Aioros de Sagitário    48 - 18 Afrodite de Peixes

  // rodada 1, Dados do graf da
  var luta_r1_cav1 = ['Aldebaran de Touro','Camus de Aquário','Saga de Gêmeos','Shaka de Virgem','Dohko de Libra','Aioros de Sagitário' ];
  var luta_r1_cav2 = ['Miro de Escorpião','Aioria de Leão','Shura de Capricórnio','Mu de Áries','Mascara da Morte de Câncer','Afrodite de Peixes' ];
  var result_r1_cav1 = [-22, -20, -47, -35, -47, -48];
  var result_r1_cav2 = [21, 20, 26, 12, 20, 18];


  // Mu de Áries                25 - 11 Aldebaran de Touro
  // Afrodite de Peixes         25 - 24 Saga de Gêmeos
  // Mascara da Morte de Câncer 20 - 20 Aioros de Sagitário
  // Aioria de Leão             20 - 40 Dohko de Libra
  // Miro de Escorpião          25 - 52 Camus de Aquário
  // Shura de Capricórnio       21 - 58 Shaka de Virgem

  // rodada 2
  var luta_r2_cav1 = ['Mu de Áries','Afrodite de Peixes','Mascara da Morte de Câncer','Aioria de Leão','Miro de Escorpião','Shura de Capricórnio'];
  var luta_r2_cav2 = ['Aldebaran de Touro','Saga de Gêmeos','Aioros de Sagitário','Dohko de Libra','Camus de Aquário','Shaka de Virgem'];
  var result_r2_cav1 = [-25, -25, -20, -20, -25, -21];
  var result_r2_cav2 = [11, 24, 20, 40, 52, 58];



  // rodada 3
    var luta_r3_cav1 = [''];
    var luta_r3_cav2 = [''];
    var result_r3_cav1 = [0];
    var result_r3_cav2 = [0];

  // rodada 4
    var luta_r4_cav1 = [''];
    var luta_r4_cav2 = [''];
    var result_r4_cav1 = [0];
    var result_r4_cav2 = [0];
