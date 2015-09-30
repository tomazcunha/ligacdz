
// var chart,
var categories = [
      'Albion de Cefeu',
      'Algethi de Hércules',
      'Algol de Perseu',
      'Asterion de Cães de Caça',
      'Babel de Centauro',
      'Capela de Cocheiro/Auriga',
      'Dante de Cérbero',
      'Dio de Mosca',
      'Jamian de Corvo',
      'Marin de Águia',
      'Misty de Lagarto',
      'Mouses de Baleia',
      'Orfeu de Lira',
      'Shaina de Ofiúco',
      'Sirius de Cão Maior',
      'Tremy de Flecha/Sagita'
    ];

  var pontos  = [12, 6, 9, 9, 3, 10, 3, 0, 0, 3, 12, 3, 12, 7, 3, 3];
  var votos_f = [69, 56, 75, 56, 45, 60, 32, 12, 24, 43, 86, 25, 57, 32, 70, 41];
  var votos_c = [32, 78, 24, 17, 52, 27, 36, 73, 79, 52, 21, 73, 21, 39, 95, 64];
  var saldo_c = [37, -22, 51, 39, -7, 33, -4, -61, -55, -9, 65, -48, 36, -7, -25, -23];


  // Nome da série
  var serie_name_1 = 'Pontos na Luta'
  var serie_name_2 = 'Pontos na Luta'

  // rodada 1, Dados do graf da
  var luta_r1_cav1 = ['Marin','Algol','Asterion','Shaina','Misty','Mouses','Sirius','Algethi' ];
  var luta_r1_cav2 = ['Orfeu','Babel','Albion','Dante','Tremy','Capela','Jamian','Dio' ];
  var result_r1_cav1 = [-2, -10, -5, -9, -13, -5, -23, -27];
  var result_r1_cav2 = [10, 3, 8, 5, 5, 19, 15, 5];


// Capela (Cavaleiro de Cocheiro/Au 10 - 10 Shaina (Amazona de Ofiúco)
// Jamian (Cavaleiro de Corvo)      02 - 18 Algol (Cavaleiro de Perseu)
// Dio (Cavaleiro de Mosca)         00 - 18  Misty (Cavaleiro de Lagarto)
// Dante (Cavaleiro de Cérbero)     17 - 01  Mouses (Cavaleiro de Baleia)
// Orfeu (Cavaleiro de Lira)        17 - 03 Algethi (Cavaleiro de Hércules)
// Babel (Cavaleiro de Centauro)    04 - 20 Asterion (Cavaleiro de Cães de C
// Tremy (Cavaleiro de Flecha/Sagit 27 - 14 Sirius (Cavaleiro de Cão Maior)
// Albion (Cavaleiro de Cefeu)      30 - 17 Marin (Amazona de Águia)

  // rodada 2
  var luta_r2_cav1 = ['Capela','Jamian','Dio','Dante','Orfeu','Babel','Tremy','Albion'];
  var luta_r2_cav2 = ['Shaina','Algol','Misty','Mouses','Algethi','Asterion','Sirius','Marin'];
  var result_r2_cav1 = [-10,-2,0,-17,-17,-4,-27,-30];
  var result_r2_cav2 = [ 10,18,18, 1,  3,20, 14, 17];



// Marin (Amazona de Águia)         18 - 04 Tremy (Cavaleiro de Flecha/Sagit
// Dante (Cavaleiro de Cérbero)     07 - 12 Capela (Cavaleiro de Cocheiro/Au
// Algol (Cavaleiro de Perseu)      13 - 16 Orfeu (Cavaleiro de Lira)
// Asterion (Cavaleiro de Cães de C 18 - 03 Dio (Cavaleiro de Mosca)
// Shaina (Amazona de Ofiúco)       03 - 20 Albion (Cavaleiro de Cefeu)
// Misty (Cavaleiro de Lagarto)     25 - 05 Jamian (Cavaleiro de Corvo)
// Mouses (Cavaleiro de Baleia)     11 - 31 Babel (Cavaleiro de Centauro)
// Algethi (Cavaleiro de Hércules)  23 - 22 Sirius (Cavaleiro de Cão Maior)

// rodada 3
  var luta_r3_cav1 = ['Marin','Dante','Algol','Asterion','Shaina','Misty','Mouses','Algethi'];
  var luta_r3_cav2 = ['Tremy','Capela','Orfeu','Dio','Albion','Jamian','Babel','Sirius'];
  var result_r3_cav1 = [-18,-07,-13,-18,-03,-25,-11,-23];
  var result_r3_cav2 = [ 04,12,16,03,20,05,31,22];


//   Jamian (Cavaleiro de Corvo)      02 - 13 Asterion (Cavaleiro de Cães de C
//   Dio (Cavaleiro de Mosca)         04 - 10 Shaina (Amazona de Ofiúco)
//   Marin (Amazona de Águia)         06 - 08 Mouses (Cavaleiro de Baleia)
//   Orfeu (Cavaleiro de Lira)        14 - 03 Dante (Cavaleiro de Cérbero)
//   Babel (Cavaleiro de Centauro)    07 - 11 Albion (Cavaleiro de Cefeu)
//   Tremy (Cavaleiro de Flecha/Sagit 05 - 19 Capela (Cavaleiro de Cocheiro/Au
//   Sirius (Cavaleiro de Cão Maior)  11 - 30 Misty (Cavaleiro de Lagarto)
//   Algethi (Cavaleiro de Hércules)  03 - 34 Algol (Cavaleiro de Perseu)
//
//
// rodada 4
  var luta_r4_cav1 = ['Jamian','Dio','Marin','Orfeu','Babel','Tremy','Sirius','Algethi'];
  var luta_r4_cav2 = ['Asterion','Shaina','Mouses','Dante','Albion','Capela','Misty','Algol'];
  var result_r4_cav1 = [-02,-04,-06,-14,-07,-05,-11,-03];
  var result_r4_cav2 = [ 13,10,08,03,11,19,30,34];
