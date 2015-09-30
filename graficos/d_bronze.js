

  var categories = [
    'Ban de Leão Menor',
    'Geki de Urso',
    'Hyoga de Cisne',
    'Ichi de Hidra',
    'Ikki de Fênix',
    'Jabu de Unicórnio',
    'Nachi de Lobo',
    'Seiya de Pégaso',
    'Shiryu de Dragão',
    'Shun de Andrômeda'
  ];

  var pontos  = [0, 3, 9, 3, 10, 9, 3, 6, 9, 7];
  var votos_f = [38, 76, 94, 56, 108, 109, 61, 85, 121, 107];
  var votos_c = [114, 97, 71, 101, 65, 49, 116, 100, 79, 63];
  var saldo_c = [-76, -21, 23, -45, 43, 60, -55, -15, 42, 44];

  var r3_cav = ['Shun', 'Hyoga', ];
  var r3_vot = [19, 26, ];


  // Nome da série
  var serie_name_1 = 'Pontos na Luta'
  var serie_name_2 = 'Pontos na Luta'


 //  1ª rodada
 // Seiya de Pégaso	    7	x	24	Ikki de Fênix
 // Nachi de Lobo	      5	x	28	Jabu de Unicórnio
 // Geki de Urso	     19	x	13	Ichi de Hidra
 // Shiryu de Dragão	 16	x	20	Hyoga de Cisne
 // Ban de Leão Menor	  5	x	31	Shun de Andrômeda

  // rodada 1, Dados do graf da
  var luta_r1_cav1 = ['Seiya','Nachi','Geki','Shiryu','Ban' ];
  var luta_r1_cav2 = ['Ikki','Jabu','Ichi','Hyoga','Shun' ];
  var result_r1_cav1 = [-7, -5, -19, -16, -5];
  var result_r1_cav2 = [24, 28, 13, 20, 31];


 //  2ª rodada
 // Ichi de Hidra	        8	x	29	Shiryu de Dragão
 // Hyoga de Cisne	     25	x	5	Ban de Leão Menor
 // Ikki de Fênix	      22	x	22	Shun de Andrômeda
 // Jabu de Unicórnio	  27	x	8	Geki de Urso
 // Seiya de Pégaso	    26	x	8	Nachi de Lobo

  // rodada 2
  var luta_r2_cav1 = ['Ichi','Hyoga','Ikki','Jabu','Seiya'];
  var luta_r2_cav2 = ['Shiryu','Ban','Shun','Geki','Nachi'];
  var result_r2_cav1 = [-8,-25,-22,-27,-26];
  var result_r2_cav2 = [ 29,5,22, 8, 8];



  // 3ª rodada
  // Shun de Andrômeda	 19	x	26	Hyoga de Cisne
  // Geki de Urso	      18	x	22	Seiya de Pégaso
  // Shiryu de Dragão	  26	x	21	Jabu de Unicórnio
  // Ban de Leão Menor	18	x	25	Ichi de Hidra
  // Nachi de Lobo	     13	x	31	Ikki de Fênix

// rodada 3
  var luta_r3_cav1 = ['Shun','Geki','Shiryu','Ban','Nachi'];
  var luta_r3_cav2 = ['Hyoga','Seiya','Jabu','Ichi','Ikki' ];
  var result_r3_cav1 = [-19,-18,-26,-18,-13 ];
  var result_r3_cav2 = [ 26,22,21,25,31 ];



 //  4ª rodada
 // Jabu de Unicórnio	  33	x	10	Ban de Leão Menor
 // Ichi de Hidra	      10	x	35	Shun de Andrômeda
 // Ikki de Fênix	      31	x	23	Hyoga de Cisne
 // Nachi de Lobo	      35	x	31	Geki de Urso
 // Seiya de Pégaso	    30	x	50	Shiryu de Dragão

// rodada 4
  var luta_r4_cav1 = ['Jabu','Ichi','Ikki','Nachi','Seiya' ];
  var luta_r4_cav2 = ['Ban','Shun','Hyoga','Geki','Shiryu' ];
  var result_r4_cav1 = [-33,-10,-31,-35,-30 ];
  var result_r4_cav2 = [ 10,35,23,31,50 ];
