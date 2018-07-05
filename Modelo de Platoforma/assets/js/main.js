(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var API = '/hotsite/especial-mapa-literatura-brasileira/api/';
var home = require('./views/home');
var atividade = require('./views/atividade');
var mapaLeitores = require('./views/mapa-leitores');
var linhaTempo = require('./views/linha-do-tempo');

$(document).ready(function () {
  $('#home').each(function () { home.init(API); });
  $('#atividade').each(function () { atividade.init(); });
  $('#mapa-leitores').each(function () { mapaLeitores.init(API); });
  $('#linha-tempo').each(function () { linhaTempo.init(); });

  $('#menu-link-help').click(function (e) {
    e.preventDefault();

    $('#video-lightbox-body').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/054A6tJJNs0" frameborder="0" allowfullscreen></iframe>');

    $('#video-lightbox').fadeIn(400);
  });

  $('#video-lightbox-close').click(function (e) {
    e.preventDefault();
    $('#video-lightbox-body').html('');
    $('#video-lightbox').fadeOut(400);
  });

  $('.tooltip').each(function () {
    var title = $(this).attr('data-title');
    $(this).append('<span class="tooltip-title">' + title + '</span>');
  });
});


},{"./views/atividade":2,"./views/home":3,"./views/linha-do-tempo":4,"./views/mapa-leitores":5}],2:[function(require,module,exports){
var perguntas = [
  {
    "title": "Grande admirador da cultura popular brasileira. Sua obra mais conhecida, inspirada em folhetos de cordel, apresenta o encontro da literatura culta com o romanceiro popular nordestino. Trata-se do autor e da obra:",
    "image": "assets/img/atividade/quiz-01.jpg",
    "credits": "CrÃ©ditos: Yolanda Carvalho / Wikimedia Commons",
    "answers": [
      {
        "text": "Graciliano Ramos, <strong>HistÃ³rias de Alexandre</strong>.",
        "correct": false
      },
      {
        "text": "Machado de Assis, <strong>O alienista.</strong>",
        "correct": false
      },
      {
        "text": "Ariano Suassuna, <strong>Auto da Compadecida.</strong>",
        "correct": true
      },
      {
        "text": "Monteiro Lobato, <strong>ReinaÃ§Ãµes de Narizinho.</strong>",
        "correct": false
      }
    ]
  },
  {
    "title": "\"Tudo que nÃ£o invento Ã© falso\". Essa frase, que abre o livro <span>MemÃ³rias inventadas</span>, de Manoel de Barros, revela uma ideia essencial na obra do poeta pantaneiro:",
    "image": "assets/img/atividade/quiz-02.jpg",
    "credits": "CrÃ©ditos: John Tenniel / Wikimedia Commons",
    "answers": [
      {
        "text": "A importÃ¢ncia das coisas sÃ³ pode ser medida pelo encantamento que elas produzem em cada pessoa.",
        "correct": false
      },
      {
        "text": "A riqueza da imaginaÃ§Ã£o se mostra na capacidade de â€œdesfazer o normalâ€, ou seja, nÃ£o seguir regras predeterminadas.",
        "correct": true
      },
      {
        "text": "Ao brincar livremente com as palavras, a poesia deturpa a realidade, criando falsos mundos paralelos.",
        "correct": false
      },
      {
        "text": "O poeta se aproxima da crianÃ§a por ser capaz de \"ver de novo as pobres coisas doÂ chÃ£o mijadas de orvalho\".",
        "correct": false
      }
    ]
  },
  {
    "title": "AdaptaÃ§Ã£o para cordel de um dos fabulosos contos de <span><strong>As mil e uma noites</strong></span>, clÃ¡ssico da literatura mundial. Este livro Ã©:",
    "image": "assets/img/atividade/quiz-03.jpg",
    "credits": "CrÃ©ditos: Ferdinand Keller / Wikimedia Commons",
    "answers": [
      {
        "text": "<strong>Memorial de Maria Moura</strong>, de Rachel de Queiroz.",
        "correct": false
      },
      {
        "text": "<strong>As sete viagens do marinheiro Simbad</strong>, de SÃ©rgio Severo.",
        "correct": true
      },
      {
        "text": "<strong>HistÃ³rias de Alexandre</strong>, de Graciliano Ramos.",
        "correct": false
      },
      {
        "text": "<strong>Meus romances de cordel</strong>, de Marco HaurÃ©lio.",
        "correct": false
      }
    ]
  },
  {
    "title": "Paulista de TaubatÃ©, trouxe ao mundo encantado da literatura infantil o sotaque caboclo e as personagens do imaginÃ¡rio brasileiro, como o saci-pererÃª e a cuca. Este autor Ã©:",
    "image": "assets/img/atividade/quiz-04.jpg",
    "credits": "CrÃ©ditos: ars351 / Wikimedia Commons",
    "answers": [
      {
        "text": "Caio Fernando Abreu.",
        "correct": false
      },
      {
        "text": "Thiago de Mello.",
        "correct": false
      },
      {
        "text": "Monteiro Lobato.",
        "correct": true
      },
      {
        "text": "Odilon Moraes.",
        "correct": false
      }
    ]
  },
  {
    "title": "<i>\"Corria descalÃ§o, sem medo de queimar os pÃ©s, saltava para pegar a linha ou a rabiola de um papagaio, soltando um grito de guerra e mostrando as mÃ£os estriadas.\" \"Yaqub recuava ao ver as mÃ£os do irmÃ£o cheias de sangue, cortadas pelo vidro do cerol.\"</i><br>Nos trechos acima, do romance <span><strong>Dois irmÃ£os</strong></span>, de Milton Hatoum, Ã© possÃ­vel perceber:",
    "image": "assets/img/atividade/quiz-05.jpg",
    "credits": "CrÃ©ditos: James Tissot / Wikimedia Commons",
    "answers": [
      {
        "text": "a pureza da infÃ¢ncia entre os  dois irmÃ£os, protagonistas da obra.",
        "correct": false
      },
      {
        "text": "a semelhanÃ§a e a harmonia na relaÃ§Ã£o entre as personagens na infÃ¢ncia.",
        "correct": false
      },
      {
        "text": "a disputa violenta estabelecida entre os protagonistas.",
        "correct": false
      },
      {
        "text": "o contraste entre os perfis psicolÃ³gicos das duas personagens jÃ¡ na infÃ¢ncia.",
        "correct": true
      }
    ]
  },
  {
    "title": "<i>Beco da minha terra...<br>amo tua paisagem triste, ausente e suja.<br>Teu ar sombrio. Tua velha umidade andrajosa.<br>Teu lodo negro, esverdeado, escorregadio.<br>E a rÃ©stia de sol que ao meio-dia desce, fugida,<br>e semeia polmes dourados no teu lixo pobre,<br>calÃ§ando de ouro a sandÃ¡lia velha,<br>jogada no teu monturo.<br>[...]</i><br>Nesse poema, intitulado \"Poema do beco\", a goiana Cora Coralina:",
    "image": "assets/img/atividade/quiz-06.jpg",
    "credits": "CrÃ©ditos: Felipe FrazÃ£o / Fotolia",
    "answers": [
      {
        "text": "exalta as belezas naturais e culturais de sua terra, que atraem as visitaÃ§Ãµes turÃ­sticas.",
        "correct": false
      },
      {
        "text": "busca uma poÃ©tica pura, a arte pela arte, como recomenda o Parnasianismo.",
        "correct": false
      },
      {
        "text": "poetiza aspectos do cotidiano, dos elementos desprezados pela sociedade moderna, a exemplo de outros poetas modernistas, como Manuel Bandeira.",
        "correct": true
      },
      {
        "text": "procura divinizar a vida simples de sua terra, de acordo com os padrÃµes do Arcadismo.",
        "correct": false
      }
    ]
  },
  {
    "title": "<i>\"Depois do AtlÃ¢ntico, a Ãfrica chama<br>E conta uma trama de sonhos e medos<br>De guerras e vidas e mortes no enredo<br>TambÃ©m de amor no enrolado cabelo<br><br>Puxado, armado, crescido, enfeitado<br>Torcido, virado, batido, rodado<br>SÃ£o tantos cabelos, tÃ£o lindos, tÃ£o belos\"</i><br>Esse trecho, parte do livro <span><strong>O cabelo de LelÃª</strong></span>, de ValÃ©ria BelÃ©m, revela:",
    "image": "assets/img/atividade/quiz-07.jpg",
    "credits": "CrÃ©ditos: Edson Pelicer",
    "answers": [
      {
        "text": "a descoberta das raÃ­zes ancestrais africanas e a valorizaÃ§Ã£o da beleza do cabelo enrolado.",
        "correct": true
      },
      {
        "text": "o desejo de valorizaÃ§Ã£o estÃ©tica por meio da submissÃ£o aos padrÃµes estabelecidos pela mÃ­dia.",
        "correct": false
      },
      {
        "text": "a revolta pela descoberta de uma histÃ³ria desconhecida que envolve sua ancestralidade.",
        "correct": false
      },
      {
        "text": "a presenÃ§a da miscigenaÃ§Ã£o racial na formaÃ§Ã£o do povo brasileiro.",
        "correct": false
      }
    ]
  },
  {
    "title": "<i>\"Ai de ti Copacabana, porque a ti chamaram Princesinha do mar, e cingiram tua fonte com uma coroa de mentiras; e deste risadas Ã©brias e vÃ£s no seio da noite.\"</i><br>Nesse trecho da crÃ´nica <i>\"Ai de ti Copacabana\"</i>, Rubem Braga faz referÃªncia Ã  canÃ§Ã£o \"Copacabana\", composta por JoÃ£o de Barro e Alberto Ribeiro (1946), cujos primeiros versos sÃ£o: <i>\"Existem praias tÃ£o lindas cheias de luz / nenhuma tem o encanto que tu possuis / Tuas areias / teu cÃ©u tÃ£o lindo / tuas sereias / Sempre sorrindo, sempre sorrindo / Copacabana, princesinha do mar...\"</i>. A relaÃ§Ã£o entre a frase e a letra da canÃ§Ã£o Ã© de:",
    "image": "assets/img/atividade/quiz-08.jpg",
    "credits": "CrÃ©ditos: JoÃ£o Vaz_A_praia / Wikimedia Commons",
    "answers": [
      {
        "text": "<strong>complementaÃ§Ã£o</strong>, pois a crÃ´nica reforÃ§a a imagem paradisÃ­aca presente na mÃºsica.",
        "correct": false
      },
      {
        "text": "<strong>proximidade</strong>, pois ambas apresentam de forma lÃ­rica a mesma paisagem geogrÃ¡fica, criando sobre ela uma atmosfera de encantamento.",
        "correct": false
      },
      {
        "text": "<strong>semelhanÃ§a</strong>, pois ambas revelam a face decadente de Copacabana, oculta sob a propaganda de suas belezas naturais.",
        "correct": false
      },
      {
        "text": "<strong>oposiÃ§Ã£o</strong>, jÃ¡ que, enquanto a canÃ§Ã£o exalta a beleza da praia de Copacabana, a crÃ´nica denuncia que essa imagem Ã© falsa.",
        "correct": true
      }
    ]
  },
  {
    "title": "<i>\"Vida de fantasia. FicÃ§Ã£o, como diz a professora de literatura como Ãºltimo argumento contra aqueles caras chatos, com suas perguntas cretinas, a exigirem a lÃ³gica de um texto, quando lÃ³gica nÃ£o pode haver. A ficÃ§Ã£o, a poesia: elas nÃ£o tÃªm lÃ³gica. A vida tambÃ©m nÃ£o. SÃ³ agora descubro. Eu mesmo personagem de uma histÃ³ria inacreditÃ¡vel...\"</i><br>No trecho da obra <span><strong>O rapaz que nÃ£o era de Liverpool</strong></span>, de Caio Riter, o narrador personagem faz uma reflexÃ£o:",
    "image": "assets/img/atividade/quiz-09.jpg",
    "credits": "CrÃ©ditos: Beatles, capa do Ã¡lbum Abbey Road, 1969 / Wikimedia Commons",
    "answers": [
      {
        "text": "NÃ£o hÃ¡ lÃ³gica na literatura, por isso ela gera perguntas cretinas.",
        "correct": false
      },
      {
        "text": "Ã‰ necessÃ¡rio tecer um sentido para a vida, que Ã© naturalmente destituÃ­da de sentido.",
        "correct": false
      },
      {
        "text": "A vida, assim como a ficÃ§Ã£o, a poesia, nÃ£o tem lÃ³gica.",
        "correct": true
      },
      {
        "text": "A vida Ã© uma fantasia, pois os sonhos fazem parte da realidade.",
        "correct": false
      }
    ]
  },
  {
    "title": "<i>\"Carne opulenta, majestosa, fina,<br>Do sol gerada nos febris carinhos,<br>HÃ¡ mÃºsicas, hÃ¡ cÃ¢nticos, hÃ¡ vinhos<br>Na tua estranha boca sulferina.\"</i><br>Nesse poema de Cruz de Souza, publicado em <span><strong>BroquÃ©is</strong></span>, destaca-se como figura de estilo a:",
    "image": "assets/img/atividade/quiz-10.jpg",
    "credits": "CrÃ©ditos: Ã‰douard Manet, AlmoÃ§o na relva, 1863 / Wikimedia Commons",
    "answers": [
      {
        "text": "<strong>sinetesia</strong>, pela mistura de sensaÃ§Ãµes, como em <i>\"claro incenso aromal, lÃ­mpido e leve...\"</i>.",
        "correct": true
      },
      {
        "text": "<strong>aliteraÃ§Ã£o</strong>, pela repetiÃ§Ã£o de consoantes, conferindo musicalidade, como em <i>\"vozes, veladas, veludosas vozes\"</i>",
        "correct": false
      },
      {
        "text": "<strong>metÃ¡fora</strong>, pela comparaÃ§Ã£o poÃ©tica entre palavras de sentidos diferentes, como em <i>\"Ri,! CoraÃ§Ã£o, tristÃ­ssimo palhaÃ§o\"</i>.",
        "correct": false
      },
      {
        "text": "<strong>prosopopeia</strong>, atribuindo caracterÃ­sticas humanas a seres nÃ£o humanos, como em <i>\"na Natureza prodigiosa e rica\"</i>.",
        "correct": false
      }
    ]
  }
];

var perguntaAtualIndex = 0;
var perguntaAtual = {};
var totalPerguntas = perguntas.length;
var respondidas = [];
var erradas = [];
var top;

function pad(num, size) {
    var s = "0" + num;
    return s.substr(s.length-size);
}

function init () {
  initPerguntas();

  $(window).scroll(function (e) {
    console.log();
    top = $(this).scrollTop()
    if(top < 500 && top > 50) {
      top = top - 50;
      $('#atividade-right').css({'padding-top':top});
    } else if(top < 50) {
      $('#atividade-right').css({'padding-top':0});
    }
  });
};



function initPerguntas () {
  $('#lista-perguntas').html('');
  strTotalPerguntas = pad(totalPerguntas, 2);
  $('#total-perguntas').html(strTotalPerguntas);

  for(var i in perguntas) {
    p = perguntas[i];
    num = pad((parseInt(i) + 1), 2);
    htmlItem = '<a href="#" class="pergunta-link" id="pergunta-link-' + i + '" rel="' + i + '">' + num + '</a>';
    $('#lista-perguntas').append(htmlItem);
  }

  $('body').on('click', '.atividade-pergunta-resposta', function (e) {
    e.preventDefault();

    $('.atividade-pergunta-resposta').removeClass('active');
    $(this).addClass('active');
  });

  $('body').on('click', '#btn-responder', function (e) {
    e.preventDefault();
    responderPergunta();
  });

  $('body').on('click', '#btn-resultado', function (e) {
    e.preventDefault();
    finalizarQuiz();
  });

  loadPergunta();
};

function loadPergunta () {
  perguntaAtual = perguntas[perguntaAtualIndex];
  $('#pergunta-left').removeClass('show');
  setTimeout(function () {
    num = pad((parseInt(perguntaAtualIndex) + 1), 2);
    pergunta = num + '. ' + perguntaAtual.title;
    $('#atividade-pergunta').html(pergunta);
    $('#atividade-pergunta-img').attr('src', perguntaAtual.image);
    $('#atividade-pergunta-creditos').html(perguntaAtual.credits);
    $('#atividade-pergunta-respostas').html('');
    $('#pergunta-link-'+perguntaAtualIndex).addClass('atual');
    $('#pergunta-atual').html(num);

    for(var i in perguntaAtual.answers) {
      ans = perguntaAtual.answers[i];
      correta = ans.correct ? 1:0;
      htmlAns = '<li><a href="#" class="atividade-pergunta-resposta" rel="' + i + '" data-question="' + perguntaAtualIndex + '" data-token="' + correta + '">' + ans.text + '</a></li>';
      $('#atividade-pergunta-respostas').append(htmlAns);
    }

    $('#pergunta-left').addClass('show');
  }, 400);

}

function responderPergunta () {
  if($('.atividade-pergunta-resposta.active').length > 0) {
    var $link = $($('.atividade-pergunta-resposta.active')[0]);
    if($link.attr('data-token') == 1) {
      //resposta Correta
      $('#pergunta-link-'+perguntaAtualIndex).removeClass('atual').addClass('correta');
      respondidas.push(1);
    } else {
      //resposta errada
      $('#pergunta-link-'+perguntaAtualIndex).removeClass('atual').addClass('errada');
      var pergunta = perguntas[perguntaAtualIndex];
      var obj = {
        num: (perguntaAtualIndex + 1),
        title: pergunta.title,
        answer: $link.html(),
        correct: $($('#atividade-pergunta-respostas').find('.atividade-pergunta-resposta[data-token="1"]')[0]).html()
      }
      erradas.push(obj);
      respondidas.push(0);
    }

    if(perguntaAtualIndex == 0) {
      $('#pontuacao-wrap').addClass('show');
    }

    //calculaPorcentagens();

    proximaPergunta();
  } else {
    //nÃ£o respondeu;
  }
}
/*
function calculaPorcentagens () {
  total = respondidas.length;
  corretas = 0;
  for(var i in respondidas) {
    if(respondidas[i] == 1) {
      corretas ++;
    }
  }

  porCorretas = Math.floor(corretas * 100 / total);
}
*/


function proximaPergunta () {
  perguntaAtualIndex++;

  if(perguntaAtualIndex > (totalPerguntas - 1)) {
    //acabou o quiz
    $('#btn-responder').hide();
    $('#btn-resultado').show();
  } else {
    loadPergunta();
  }
}

function pad (num) {
  var str = "" + num;
  var pad = "00";

  return (pad.substring(0, pad.length - str.length)) + num;
}

function finalizarQuiz () {
  total = respondidas.length;
  corretas = 0;
  for(var i in respondidas) {
    if(respondidas[i] == 1) {
      corretas ++;
    }
  }

  porCorretas = Math.floor(corretas * 100 / total);

  if(porCorretas > 50) {
    cssClass = 'positivo';
    msg = 'PARABÃ‰NS, seu resultado final foi de';
    btn = 'refazer quiz';
  } else {
    cssClass = 'negativo';
    msg = 'OPS, seu resultado final foi de';
    btn = 'refazer quiz';
  }
  $('#resultado-erradas').html('');
  for(var i in erradas) {
    err = erradas[i];
    var htmlErr = '' +
      '<li>' +
        '<strong>' + pad(err.num) + '. ' + err.title + '</strong>' +
        '<table>' +
          '<tr>' +
            '<td class="label wrong">Sua resposta:</td>' +
            '<td>' + err.answer + '</td>' +
          '</tr>' +
          '<tr>' +
            '<td class="label correct">Resposta Correta:</td>' +
            '<td>' + err.correct + '</td>' +
          '</tr>' +
        '</table>' +
      '</li>';

    $('#resultado-erradas').append(htmlErr);
  }

  $('#resultado-msg').html(msg);
  $('#resultado-porc').html(porCorretas + '%').removeClass('positivo').removeClass('negativo').addClass(cssClass);
  $('#resultado-refazer').html(btn).click(function (e) {
    window.location.reload();
  });

  $('#atividade-quiz').fadeOut(500, function () {
    $('#atividade-resultado').fadeIn(500);
  });
}

module.exports = {
  init: init
}
},{}],3:[function(require,module,exports){
var urlAPI;

var $filtersPublico = $('#filter-list-publico-alvo');
var $filtersNiveis = $('#filter-list-nivel-escolaridade');
var $filtersLinguagem = $('#filter-list-linguagem-genero');
var $filtersTematica = $('#filter-list-tematica');
var $filtersRegiao = $('#filter-list-regiao');

var tematicaDefault = true;
var bgTematicaDefault = 'assets/img/bg-default.jpg';

var tematicas = [
  {
    name: 'HistÃ³rica',
    slug: 'historica',
    bg: 'assets/img/bg-tematica-historica.jpg',
    otherImages: [
      {
        src: 'assets/img/ilustras-tematicas/historica-01.png'
      }
    ]
  },
  {
    name: 'SociopolÃ­tica',
    slug: 'socio-politica',
    bg: 'assets/img/bg-tematica-socio-politica.jpg',
    otherImages: [
      {
        src: 'assets/img/ilustras-tematicas/socio-politica-01.png'
      }
    ]
  },
  {
    name: 'Amorosa',
    slug: 'amorosa',
    bg: 'assets/img/bg-tematica-amorosa.jpg',
    otherImages: [
      {
        src: 'assets/img/ilustras-tematicas/amorosa-01.png'
      },
      {
        src: 'assets/img/ilustras-tematicas/amorosa-02.png'
      }
    ]
  },
  {
    name: 'Existencial',
    slug: 'existencial',
    bg: 'assets/img/bg-tematica-existencial.jpg',
    otherImages: [
      {
        src: 'assets/img/ilustras-tematicas/existencial-01.png'
      }
    ]
  },
  {
    name: 'Regional',
    slug: 'regional',
    bg: 'assets/img/bg-tematica-regional.jpg',
    otherImages: [
      {
        src: 'assets/img/ilustras-tematicas/regional-01.png'
      },
      {
        src: 'assets/img/ilustras-tematicas/regional-02.png'
      }
    ]
  },
  {
    name: 'Afro-brasileira',
    slug: 'afro-brasileira',
    bg: 'assets/img/bg-tematica-afro-brasileira.jpg',
    otherImages: [
      {
        src: 'assets/img/ilustras-tematicas/afro-brasileira-01.png'
      }
    ]
  },
  {
    name: 'IndÃ­gena',
    slug: 'indigena',
    bg: 'assets/img/bg-tematica-indigena.jpg',
    otherImages: [
      {
        src: 'assets/img/ilustras-tematicas/indigena-01.png'
      },
      {
        src: 'assets/img/ilustras-tematicas/indigena-02.png'
      }
    ]
  },
  {
    name: 'Literatura perifÃ©rica',
    slug: 'literatura-periferica',
    bg: 'assets/img/bg-tematica-literatura-periferica.jpg',
    otherImages: []
  },
  {
    name: 'Homoafetiva',
    slug: 'homoafetiva',
    bg: 'assets/img/bg-tematica-homoafetiva.jpg',
    otherImages: []
  },
  {
    name: 'Outras temÃ¡ticas',
    slug: 'outras-tematicas',
    bg: 'assets/img/bg-default.jpg',
    otherImages: []
  }
]

function init (API) {
  urlAPI = API;
  initMap();
};

function initMap () {
  $.get(urlAPI + 'obras/list', function (response) {
    if(typeof response != 'undefined' && response.ok) {
      placePins(response.obras);
      initFilters(response);

    }
  }, 'json');

  initPins();
};

function placePins (list) {
  var htmlPin;
  var filters;
  var item;
  $('#home-mapa').fadeOut(200, function () {
    $('.home-mapa-pin').remove();

    for(var i in list) {
      pin = list[i];
      filters = '';
      filters += ' filter-publico-' + pin.publico_id;
      filters += ' filter-linguagem-' + pin.linguagem_id;
      filters += ' filter-tematica-' + pin.tematica_id;
      filters += ' filter-regiao-' + pin.regiao_id;

      for(var y in pin.niveis_escolaridade) {
        item = pin.niveis_escolaridade[y];
        filters += ' filter-nivel-' + item.id;
      }

      htmlPin = '<a href="' + pin.slug + '" class="home-mapa-pin active home-mapa-pin-' + pin.tematica_slug + filters + '" id="obra-' + pin.id + '" style="top:' + pin.mapa_pos_top + 'px;left:' + pin.mapa_pos_left + 'px;"></a>';
      $('#home-mapa').append(htmlPin);
    }

    $('#home-mapa').fadeIn(200);

    verifyHash();
  });
};

function verifyHash () {
  var hash = window.location.hash;
  if (hash.indexOf('obra-') >= 0) {
    $(hash).click();
  }

  $('#link-mapa-barco').click(function (e) {
    e.preventDefault();
    $($(this).attr('href')).click();
  })
}

function initPins () {
  $('body').on('click', '.home-mapa-pin', function (e) {
    e.preventDefault();
    var slug = $(this).attr('href');
    var img;
    $(this).addClass('clicked');
    $.get(urlAPI + 'obras/get/' + slug, function (data) {
      if(typeof data != 'undefined' && data.ok) {
        var obra = data.obra;

        if(obra.imagem && obra.imagem != '') {
          img = 'upload/' + obra.imagem;
        } else {
          img = 'assets/img/obra-sem-imagem.jpg';
        }

        $('#box-info-img').attr('src', img);
        $('#box-info-title').html(obra.titulo_obra);
        $('#box-info-autor').html(obra.autor_obra);

        var tags = '';

        tags += '<label class="lbl-tematica">' + obra.tematica_nome + '</label>';
        tags += '<label class="lbl-regiao">' + obra.regiao_nome + '</label>';
        tags += '<label class="lbl-publico-alvo">' + obra.publico_nome + '</label>';
        tags += '<label class="lbl-linguagem-genero">' + obra.linguagem_nome + '</label>';
        for(var i in obra.niveis_escolaridade) {
          var ln = obra.niveis_escolaridade[i];
          tags += '<label class="lbl-nivel-escolaridade">' + ln.nome + '</label>';
        }

        $('#box-info-tags').html(tags);
        $('#box-info-text').html(obra.descricao);


        $('#box-info').addClass('active');

        $('html, body').animate({scrollTop: 0}, 200);
      } else {
        alert(data.msg);
      }
    }, 'json');
  });

  $('body').on('click', '#box-info-close', function (e) {
    e.preventDefault();

    $('#box-info').removeClass('active');
  });
};

function initFilters (data) {
  $filtersPublico.html('');
  $filtersNiveis.html('');
  $filtersLinguagem.html('');
  $filtersTematica.html('');
  $filtersRegiao.html('');
  var htmlFilter, item, icon, css_class;

  for(var i in data.publicos_alvo) {
    item = data.publicos_alvo[i];
    htmlFilter = '<a href="#" class="filter-item active" rel="filter-publico-' + item.id + '">' + item.nome + '</a>';
    $filtersPublico.append(htmlFilter);
  }

  for(var i in data.niveis_escolaridade) {
    item = data.niveis_escolaridade[i];
    css_class = '';
    if(item.id == 1) { //gambeta
      css_class = ' two-lines'
    }
    htmlFilter = '<a href="#" class="filter-item active' + css_class + '" rel="filter-nivel-' + item.id + '">' + item.nome + '</a>';
    $filtersNiveis.append(htmlFilter);
  }

  for(var i in data.linguagens_generos) {
    item = data.linguagens_generos[i];
    htmlFilter = '<a href="#" class="filter-item active" rel="filter-linguagem-' + item.id + '">' + item.nome + '</a>';
    $filtersLinguagem.append(htmlFilter);
  }

  for(var i in data.tematicas) {
    item = data.tematicas[i];
    css_class = '';
    if(item.id == 8 || item.id == 10) { //gambeta
      css_class = ' two-lines'
    }
    icon = item.icone.replace('icon-tematica-', '');
    htmlFilter = '<a href="' + i + '" class="filter-item filter-item-tematica active filter-item-' + icon + css_class + '" rel="filter-tematica-' + item.id + '">' + item.nome + '</a>';
    $filtersTematica.append(htmlFilter);
  }

  for(var i in data.regioes) {
    item = data.regioes[i];
    htmlFilter = '<a href="#" class="filter-item active" rel="filter-regiao-' + item.id + '">' + item.nome + '</a>';
    $filtersRegiao.append(htmlFilter);
  }

  $('body').on('click', '.filter-item', function (e) {
    e.preventDefault();

    var $list = $(this).closest('.filter-list');
    var clicked = false;//$list.attr('data-clicked') == undefined ? false : true;

    if($list.find('.filter-item:not(.active)').length == 0 && !clicked) {
      $list.attr('data-clicked', 'true');
      $(this).addClass('active').siblings().removeClass('active');
      turnOffPins();
    } else {
      if($(this).hasClass('active')) {
        if($list.find('.filter-item.active').length > 1) {
          $(this).removeClass('active');
          //desliga
          turnOffPins();
        }
      } else {
        $(this).addClass('active');
        //liga
        turnOnPins();
      }
    }

    verifyTematicas();
  });
};

function verifyTematicas () {
  if($('.filter-item-tematica.active').length == 1) {

    var $filter = $($('.filter-item-tematica.active')[0]);
    var href = $filter.attr('href');
    var img, html;
    var tematica = tematicas[href];

    bg = tematica.bg;

    $('#mapa-ilustra').html('').removeClass('animate');
    $('#mapa-bg').fadeOut(300, function() {
      $('#mapa-bg').attr('src', bg).fadeIn(300, function () {
        for(var i in tematica.otherImages) {
          img = tematica.otherImages[i];
          html = '<img src="' + img.src + '" class="ilustra-' + tematica.slug + '-' + (parseInt(i) + 1) + '">';
          $('#mapa-ilustra').append(html);
        }
        setTimeout(function () {
          $('#mapa-ilustra').addClass('animate');
        }, 200);
      });
      $('#main-tematica').html(tematica.name);
    });

    if(tematica.slug == 'historica') {
      $('#link-mapa-barco').fadeIn(200);
    } else {
      $('#link-mapa-barco').fadeOut(200);
    }

    tematicaDefault = false;
  } else {
    if(!tematicaDefault) {
      $('#mapa-ilustra').html('').removeClass('animate');
      $('#mapa-bg').fadeOut(300, function() {
        $('#mapa-bg').attr('src', bgTematicaDefault).fadeIn(300);
        $('#main-tematica').html('Geral');
        tematicaDefault = true;
      });
    }

    $('#link-mapa-barco').fadeOut(200);
  }
};

function turnOffPins () {
  var selector = getOffFilterSelector('.home-mapa-pin');
  $(selector).fadeOut(200);
};

function turnOnPins () {
  $('.home-mapa-pin').fadeIn(200);
  var selector = getOffFilterSelector('.home-mapa-pin');
  $(selector).hide();
}

function getOnFilterSelector (selector) {
  var sel = '';

  var sel = '', rel, comma = '';
  $('.filter-item.active').each(function (i) {
    if(i > 0) {
      comma = ',';
    }
    rel = $(this).attr('rel');
    sel += comma + ' ' + selector + '.' + rel;
  });

  return sel;

};

function getOffFilterSelector (selector) {
  var sel = '', rel, comma = '';
  var filtersNivel = [];
  $('.filter-item:not(.active)').each(function (i) {
    if(i > 0) {
      comma = ',';
    }
    rel = $(this).attr('rel');

    if(rel.indexOf('filter-nivel') == -1) {
      sel += comma + ' ' + selector + '.' + rel;
    } else {
      filtersNivel.push(rel);
    }
  });

  if(filtersNivel.length > 0) {
    aux = '';
    $('#filter-list-nivel-escolaridade .filter-item.active').each(function (i) {
      aux += ':not(.' + $(this).attr('rel') + ')';
    });
    comma = '';
    if(sel.length > 0) {
      comma = ',';
    }

    sel += comma + ' ' + selector + aux;
  }

  return sel;
};

module.exports = {
  init: init
};
},{}],4:[function(require,module,exports){
function imagemRevelada ($elem) {

}


function init () {
  $('.timeline').each(function () {
    var statelist = $(this).find('.timeline-state');
    var barFill = $(this).find('.timeline-bar-fill');
    var states = [];
    var tbf = 0;

    function setupElements () {
      for (var i = 0; i < statelist.length; i++) {
        states[i] = {};
        states[i]['top'] = $(statelist[i]).offset().top + 200;
        states[i]['elm'] = $(statelist[i]);
      };

      revealElements();
    }

    function revealElements () {
      var windowtop = $(window).scrollTop();
      var windowbtm = windowtop + $(window).height();

      for( var i = 0; i < states.length; i++) {

        if( states[i].top > windowtop && states[i].top < windowbtm ){
          if ( $.isFunction( imagemRevelada ) ) {
            imagemRevelada( this, states[i].elm );
          }

          states[i].elm.addClass( 'timeline-animate' );
          var h = states[i].elm.position().top;

          if( h > tbf ) {
            tbf = h;
          }

          barFill.height( tbf );
        }
      };
    }

    $(window).on('scroll',revealElements);
    $(window).on('load',setupElements)
  });
}

module.exports = {
  init: init
}
},{}],5:[function(require,module,exports){
var urlAPI;

var $filtersPublico = $('#filter-list-publico-alvo');
var $filtersNiveis = $('#filter-list-nivel-escolaridade');
var $filtersLinguagem = $('#filter-list-linguagem-genero');
var $filtersTematica = $('#filter-list-tematica');
var $filtersRegiao = $('#filter-list-regiao');

var tematicaDefault = true;
var bgTematicaDefault = 'assets/img/bg-default.jpg';

var tematicas = [
  {
    name: 'HistÃ³rica',
    slug: 'historica',
    bg: 'assets/img/bg-tematica-historica.jpg',
    otherImages: [
      {
        src: 'assets/img/ilustras-tematicas/historica-01.png'
      }
    ]
  },
  {
    name: 'SociopolÃ­tica',
    slug: 'socio-politica',
    bg: 'assets/img/bg-tematica-socio-politica.jpg',
    otherImages: [
      {
        src: 'assets/img/ilustras-tematicas/socio-politica-01.png'
      }
    ]
  },
  {
    name: 'Amorosa',
    slug: 'amorosa',
    bg: 'assets/img/bg-tematica-amorosa.jpg',
    otherImages: [
      {
        src: 'assets/img/ilustras-tematicas/amorosa-01.png'
      },
      {
        src: 'assets/img/ilustras-tematicas/amorosa-02.png'
      }
    ]
  },
  {
    name: 'Existencial',
    slug: 'existencial',
    bg: 'assets/img/bg-tematica-existencial.jpg',
    otherImages: [
      {
        src: 'assets/img/ilustras-tematicas/existencial-01.png'
      }
    ]
  },
  {
    name: 'Regional',
    slug: 'regional',
    bg: 'assets/img/bg-tematica-regional.jpg',
    otherImages: [
      {
        src: 'assets/img/ilustras-tematicas/regional-01.png'
      },
      {
        src: 'assets/img/ilustras-tematicas/regional-02.png'
      }
    ]
  },
  {
    name: 'Afro-brasileira',
    slug: 'afro-brasileira',
    bg: 'assets/img/bg-tematica-afro-brasileira.jpg',
    otherImages: [
      {
        src: 'assets/img/ilustras-tematicas/afro-brasileira-01.png'
      }
    ]
  },
  {
    name: 'IndÃ­gena',
    slug: 'indigena',
    bg: 'assets/img/bg-tematica-indigena.jpg',
    otherImages: [
      {
        src: 'assets/img/ilustras-tematicas/indigena-01.png'
      },
      {
        src: 'assets/img/ilustras-tematicas/indigena-02.png'
      }
    ]
  },
  {
    name: 'Literatura perifÃ©rica',
    slug: 'literatura-periferica',
    bg: 'assets/img/bg-tematica-literatura-periferica.jpg',
    otherImages: []
  },
  {
    name: 'Homoafetiva',
    slug: 'homoafetiva',
    bg: 'assets/img/bg-tematica-homoafetiva.jpg',
    otherImages: []
  },
  {
    name: 'Outras temÃ¡ticas',
    slug: 'outras-tematicas',
    bg: 'assets/img/bg-default.jpg',
    otherImages: []
  }
]

function init (API) {
  urlAPI = API;
  initMap();
};

function initMap () {
  $.get(urlAPI + 'obras-leitores/list', function (response) {
    if(typeof response != 'undefined' && response.ok) {
      placePins(response.obras);
      initFilters(response);

    }
  }, 'json');

  initPins();
};

function placePins (list) {
  var htmlPin;
  var filters;
  var item;
  $('#home-mapa').fadeOut(200, function () {
    $('.home-mapa-pin').remove();

    for(var i in list) {
      pin = list[i];
      filters = '';
      filters += ' filter-publico-' + pin.publico_id;
      filters += ' filter-linguagem-' + pin.linguagem_id;
      filters += ' filter-tematica-' + pin.tematica_id;
      filters += ' filter-regiao-' + pin.regiao_id;

      for(var y in pin.niveis_escolaridade) {
        item = pin.niveis_escolaridade[y];
        filters += ' filter-nivel-' + item.id;
      }

      htmlPin = '<a href="' + pin.slug + '" class="home-mapa-pin active home-mapa-pin-' + pin.tematica_slug + filters + '" style="top:' + pin.mapa_pos_top + 'px;left:' + pin.mapa_pos_left + 'px;"></a>';
      $('#home-mapa').append(htmlPin);
    }

    $('#home-mapa').fadeIn(200);
  });
};

function initPins () {
  $('body').on('click', '.home-mapa-pin', function (e) {
    e.preventDefault();
    var slug = $(this).attr('href');
    var img;
    $(this).addClass('clicked');
    $.get(urlAPI + 'obras-leitores/get/' + slug, function (data) {
      if(typeof data != 'undefined' && data.ok) {
        var obra = data.obra;

        if(obra.imagem && obra.imagem != '') {
          img = 'upload/' + obra.imagem;
        } else {
          img = 'assets/img/obra-sem-imagem.jpg';
        }

        $('#box-info-img').attr('src', img);
        $('#box-info-title').html(obra.titulo_obra);
        $('#box-info-autor').html(obra.autor_obra);

        var tags = '';

        tags += '<label class="lbl-tematica">' + obra.tematica_nome + '</label>';
        tags += '<label class="lbl-regiao">' + obra.regiao_nome + '</label>';
        tags += '<label class="lbl-publico-alvo">' + obra.publico_nome + '</label>';
        tags += '<label class="lbl-linguagem-genero">' + obra.linguagem_nome + '</label>';
        for(var i in obra.niveis_escolaridade) {
          var ln = obra.niveis_escolaridade[i];
          tags += '<label class="lbl-nivel-escolaridade">' + ln.nome + '</label>';
        }

        $('#box-info-tags').html(tags);

        text = 'Indicado por: ' + obra.por_nome + '<br><br>' + obra.descricao;

        $('#box-info-text').html(text);


        $('#box-info').addClass('active');
      } else {
        alert(data.msg);
      }
    }, 'json');
  });

  $('body').on('click', '#box-info-close', function (e) {
    e.preventDefault();

    $('#box-info').removeClass('active');
  });
};

function initFilters (data) {
  $filtersPublico.html('');
  $filtersNiveis.html('');
  $filtersLinguagem.html('');
  $filtersTematica.html('');
  $filtersRegiao.html('');
  var htmlFilter, item, icon, css_class;

  for(var i in data.publicos_alvo) {
    item = data.publicos_alvo[i];
    htmlFilter = '<a href="#" class="filter-item active" rel="filter-publico-' + item.id + '">' + item.nome + '</a>';
    $filtersPublico.append(htmlFilter);
  }

  for(var i in data.niveis_escolaridade) {
    item = data.niveis_escolaridade[i];
    css_class = '';
    if(item.id == 1) { //gambeta
      css_class = ' two-lines'
    }
    htmlFilter = '<a href="#" class="filter-item active' + css_class + '" rel="filter-nivel-' + item.id + '">' + item.nome + '</a>';
    $filtersNiveis.append(htmlFilter);
  }

  for(var i in data.linguagens_generos) {
    item = data.linguagens_generos[i];
    htmlFilter = '<a href="#" class="filter-item active" rel="filter-linguagem-' + item.id + '">' + item.nome + '</a>';
    $filtersLinguagem.append(htmlFilter);
  }

  for(var i in data.tematicas) {
    item = data.tematicas[i];
    css_class = '';
    if(item.id == 8 || item.id == 10) { //gambeta
      css_class = ' two-lines'
    }
    icon = item.icone.replace('icon-tematica-', '');
    htmlFilter = '<a href="' + i + '" class="filter-item filter-item-tematica active filter-item-' + icon + css_class + '" rel="filter-tematica-' + item.id + '">' + item.nome + '</a>';
    $filtersTematica.append(htmlFilter);
  }

  for(var i in data.regioes) {
    item = data.regioes[i];
    htmlFilter = '<a href="#" class="filter-item active" rel="filter-regiao-' + item.id + '">' + item.nome + '</a>';
    $filtersRegiao.append(htmlFilter);
  }

  $('body').on('click', '.filter-item', function (e) {
    e.preventDefault();

    var $list = $(this).closest('.filter-list');
    var clicked = false;//$list.attr('data-clicked') == undefined ? false : true;

    if($list.find('.filter-item:not(.active)').length == 0 && !clicked) {
      $list.attr('data-clicked', 'true');
      $(this).addClass('active').siblings().removeClass('active');
      turnOffPins();
    } else {
      if($(this).hasClass('active')) {
        if($list.find('.filter-item.active').length > 1) {
          $(this).removeClass('active');
          //desliga
          turnOffPins();
        }
      } else {
        $(this).addClass('active');
        //liga
        turnOnPins();
      }
    }

    verifyTematicas();
  });
};

function verifyTematicas () {
  if($('.filter-item-tematica.active').length == 1) {

    var $filter = $($('.filter-item-tematica.active')[0]);
    var href = $filter.attr('href');
    var img, html;
    var tematica = tematicas[href];

    bg = tematica.bg;

    $('#mapa-ilustra').html('').removeClass('animate');
    $('#mapa-bg').fadeOut(300, function() {
      $('#mapa-bg').attr('src', bg).fadeIn(300, function () {
        for(var i in tematica.otherImages) {
          img = tematica.otherImages[i];
          html = '<img src="' + img.src + '" class="ilustra-' + tematica.slug + '-' + (parseInt(i) + 1) + '">';
          $('#mapa-ilustra').append(html);
        }
        setTimeout(function () {
          $('#mapa-ilustra').addClass('animate');
        }, 200);
      });
      $('#main-tematica').html(tematica.name);
    });

    tematicaDefault = false;
  } else {
    if(!tematicaDefault) {
      $('#mapa-ilustra').html('').removeClass('animate');
      $('#mapa-bg').fadeOut(300, function() {
        $('#mapa-bg').attr('src', bgTematicaDefault).fadeIn(300);
        $('#main-tematica').html('Geral');
        tematicaDefault = true;
      });
    }
  }
};

function turnOffPins () {
  var selector = getOffFilterSelector('.home-mapa-pin');
  $(selector).fadeOut(200);
};

function turnOnPins () {
  $('.home-mapa-pin').fadeIn(200);
  var selector = getOffFilterSelector('.home-mapa-pin');
  $(selector).hide();
}

function getOnFilterSelector (selector) {
  var sel = '', rel, comma = '';
  $('.filter-item.active').each(function (i) {
    if(i > 0) {
      comma = ',';
    }
    rel = $(this).attr('rel');
    sel += comma + ' ' + selector + '.' + rel;
  });

  return sel;
};

function getOffFilterSelector (selector) {
  var sel = '', rel, comma = '';
  var filtersNivel = [];
  $('.filter-item:not(.active)').each(function (i) {
    if(i > 0) {
      comma = ',';
    }
    rel = $(this).attr('rel');

    if(rel.indexOf('filter-nivel') == -1) {
      sel += comma + ' ' + selector + '.' + rel;
    } else {
      filtersNivel.push(rel);
    }
  });

  if(filtersNivel.length > 0) {
    aux = '';
    $('#filter-list-nivel-escolaridade .filter-item.active').each(function (i) {
      aux += ':not(.' + $(this).attr('rel') + ')';
    });
    comma = '';
    if(sel.length > 0) {
      comma = ',';
    }

    sel += comma + ' ' + selector + aux;
  }

  return sel;
};

module.exports = {
  init: init
};
},{}]},{},[1]);