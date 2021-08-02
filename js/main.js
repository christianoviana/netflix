var movies = [
    { id:1, title:"Mad Max: Estrada da Fúria (2015)", description:"Em um mundo apocalíptico, Max Rockatansky acredita que a melhor forma de sobreviver é não depender de ninguém. Porém, após ser capturado pelo tirano Immortan Joe e seus rebeldes, Max se vê no meio de uma guerra mortal, iniciada pela imperatriz Furiosa que tenta salvar um grupo de garotas. Também tentando fugir, Max aceita ajudar Furiosa. Dessa vez, o tirano Joe está ainda mais implacável pois teve algo insubstituível roubado.", image_background:"tH64gzAHDFg7EFcgfkkZyHdGM5P.jpg", image_cover:"tH64gzAHDFg7EFcgfkkZyHdGM5P_cover.jpg", group:"Watch It Again"},
    { id:2, title:"Deadpool (2016)", description:"Baseado no anti-herói não convencional da Marvel Comics, Deadpool conta a história da origem do ex-agente das Forças Especiais que se tornou o mercenário Wade Wilson. Depois de ser submetido a um desonesto experimento que o deixa com poderes de cura acelerada, Wade adota o alter ego de Deadpool. Armado com suas novas habilidades e um senso de humor negro e distorcido, Deadpool persegue o homem que quase destruiu sua vida.", image_background:"swS3PsQYD3wGEWZwtgpUlGRMv1G.jpg", image_cover:"swS3PsQYD3wGEWZwtgpUlGRMv1G_cover.jpg", group:"Watch It Again" },
    { id:3, title:"Viúva Negra (2021)", description:"Natasha Romanoff \"Viúva Negra\" precisa confrontar partes de sua história quando surge uma conspiração perigosa ligada ao seu passado. Perseguida por uma força que não irá parar até derrotá-la, Natasha terá que lidar com sua antiga vida de espiã, e também reencontrar membros de sua família que deixou para trás antes de se tornar parte dos Vingadores.", image_background:"rKq1Vlw0Bqe2EEvdmIkkkgPQAGf.jpg", image_cover:"rKq1Vlw0Bqe2EEvdmIkkkgPQAGf_cover.jpg", group:"Watch It Again" },
    { id:4, title:"Homem-Formiga (2015)", description:"Dr. Hank Pym (Michael Douglas), o inventor da fórmula/traje que permite o encolhimento, anos depois da descoberta, precisa impedir que seu ex-pupilo Darren Cross (Corey Stoll), consiga replicar o feito e vender a tecnologia para uma organização do mal. Depois de sair da cadeia, o trambiqueiro Scott Lang (Paul Rudd) está disposto a reconquistar o respeito da ex-mulher, Maggie (Judy Greer) e, principalmente, da filha. Com dificuldades de arrumar um emprego honesto, ele aceita praticar um último golpe. O que ele não sabia era que tudo não passava de um plano do Dr. Pym que, depois de anos observando o hábil ladrão, o escolhe para vestir o traje do Homem-Formiga.", image_background:"yiLqv1gwBENjbqTAdPxW4LhX6aA.jpg", image_cover:"yiLqv1gwBENjbqTAdPxW4LhX6aA_cover.jpg", group:"Watch It Again" },
    { id:5, title:"Homem de Ferro (2008)", description:"Tony Stark (Robert Downey Jr.) é um industrial bilionário, que também é um brilhante inventor. Ao ser sequestrado ele é obrigado por terroristas a construir uma arma devastadora mas, ao invés disto, constrói uma armadura de alta tecnologia que permite que fuja de seu cativeiro. A partir de então ele passa a usá-la para combater o crime, sob o alter-ego do Homem de Ferro.", image_background:"imYhKyT1tjFX3QLgzwIDa7JZhxi.jpg", image_cover:"imYhKyT1tjFX3QLgzwIDa7JZhxi_cover.jpg", group:"Watch It Again" },
    { id:6, title:"Forrest Gump: O Contador de Histórias (1994)", description:"Tom Hanks tem uma impressionante interpretação como Forrest, um homem comum cuja simplicidade e inocência personificam uma geração. Ao lado de sua mãe, seu melhor amigo Bubba e sua favorita Jenny, Forrest tem lugar privílegiado nos mais memoráveis acontecimentos da segunda metade do século 20.", image_background:"bfeIonJ9AGC0kkNK0d69oIyqZMs.jpg", image_cover:"bfeIonJ9AGC0kkNK0d69oIyqZMs_cover.jpg", group:"Watch It Again" },
    { id:7, title:"A Vida é Bela (1997)", description:"Durante a Segunda Guerra Mundial na Itália, o judeu Guido (Roberto Benigni) e seu filho Giosué são levados para um campo de concentração nazista. Afastado da mulher, ele tem que usar sua imaginação para fazer o menino acreditar que estão participando de uma grande brincadeira, com o intuito de protegê-lo do terror e da violência que os cercam.", image_background:"h8PEObIiYUo4wHGo2qgWge2wqzv.jpg", image_cover:"h8PEObIiYUo4wHGo2qgWge2wqzv_cover.jpg", group:"Watch It Again" },
    { id:8, title:"Vingadores: Guerra Infinita (2018)", description:"Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas, Thanos planeja usá-las para infligir sua vontade maléfica sobre a realidade.", image_background:"89QTZmn34iwXYeCpVxhC9UrT8sX.jpg", image_cover:"89QTZmn34iwXYeCpVxhC9UrT8sX_cover.jpg", group:"Watch It Again" },

    { id:9, title:"A Guerra do Amanhã (2021)", description:"Em 2051, a humanidade está perdendo uma guerra global contra uma espécie mortal de alienígenas. Para garantir a sobrevivência dos humanos, soldados e civis do presente são transportados para o futuro e se juntam à luta, entre eles Dan Forester, um pai de família determinado a salvar o mundo para sua filha.", image_background:"lWQ3hI78Az2RHfzDpEuvougqUz7.jpg", image_cover:"lWQ3hI78Az2RHfzDpEuvougqUz7_cover.jpg", group:"Trending Now" },
    { id:10, title:"Luca (2021)", description:"Ambientado na bela Riviera Italiana, este longa-metragem da Disney e da Pixar acompanha as aventuras do garoto Luca durante um verão inesquecível repleto de macarronadas, gelatos e passeios incríveis de motoneta ao lado de seu novo amigo Alberto. Mas um grande segredo ameaça colocar fim à diversão: abaixo da superfície da água, eles são monstros marinhos!", image_background:"9jPa6SlUYxPFMVZlEuceiPPAA15.jpg", image_cover:"9jPa6SlUYxPFMVZlEuceiPPAA15_cover.jpg", group:"Trending Now" },
    { id:11, title:"The Flash (2014)", description:"Um perito forense desperta de um coma com poderes especiais que serão postos à prova na luta contra forças que ameaçam a cidade.", image_background:"wHa6KOJAoNTFLFtp7wguUJKSnju.jpg", image_cover:"wHa6KOJAoNTFLFtp7wguUJKSnju_cover.jpg", group:"Trending Now" },
    { id:12, title:"Grey's Anatomy (2005)", description:"Os médicos do Grey Sloan Memorial Hospital lidam diariamente com casos e consequências de vida ou morte. É um no outro que eles encontram apoio, conforto, amizade e, às vezes, até mais que amizade... Juntos, eles descobrem o quanto a vida profissional e a pessoal podem ser complicadas e se misturarem no meio do caminho.", image_background:"1HAm7sxXu9eGVvs8BIAlkCKGaTd.jpg", image_cover:"1HAm7sxXu9eGVvs8BIAlkCKGaTd_cover.jpg", group:"Trending Now" },
    { id:13, title:"Game of Thrones (2011)", description:"Em uma terra onde os verões podem durar vários anos e o inverno toda uma vida, sete nobres famílias lutam pelo controle da mítica terra de Westeros, dividida depois de uma guerra. Num cenário que lembra a Europa medieval, reis, rainhas, cavaleiros e renegados usam todos os meios possíveis em um jogo político pela disputa do Trono de Ferro, o símbolo do poder absoluto.", image_background:"mQ9cyw1gfpK1M3a69cgXFHvWkih.jpg", image_cover:"mQ9cyw1gfpK1M3a69cgXFHvWkih_cover.jpg", group:"Trending Now" },
    { id:14, title:"Caçadores de Trolls: A Ascensão dos Titãs (2021)", description:"Arcádia pode parecer uma cidade comum, mas está no centro de linhas mágicas e místicas que a tornam um nexo para muitas batalhas entre criaturas de outro mundo, incluindo trolls, alienígenas e magos. Agora, vários heróis se unirão em uma aventura épica onde devem lutar contra a Ordem Arcana pelo controle da magia que os une.", image_background:"ypPh0GKzLIP9vyO8eFmu4jCzkHi.jpg", image_cover:"ypPh0GKzLIP9vyO8eFmu4jCzkHi_cover.jpg", group:"Trending Now" },
    { id:15, title:"Dr. House (2004)", description:"Um médico dissidente e anti-social, que se especializou em medicina de diagnóstico. Faz o que for preciso para resolver casos intrigantes que estão no seu caminho, usando a sua equipe de médicos e sua inteligência.", image_background:"lW7MvZ4m49IUj2UrUu4z0xVVl81.jpg", image_cover:"lW7MvZ4m49IUj2UrUu4z0xVVl81_cover.jpg", group:"Trending Now" },    
    { id:16, title:"Expresso do Amanhã (2013)", description:"Em um mundo pós-apocalíptico, uma nova onda de gelo causada por um experimento sem sucesso quase exterminou a vida na Terra. Os sobreviventes vivem em um trem máquina chamado Snowpiercer que separa os passageiros por classes sociais, mas nem todos estão satisfeitos com essa divisão.", image_background:"9rtJNrpDuxHJiRormrY5S3GXwEu.jpg", image_cover:"9rtJNrpDuxHJiRormrY5S3GXwEu_cover.jpg", group:"Trending Now" }    
]

var changeMovie = function(targetId){
    var movie = movies.find(m => m.id == targetId);

   
   var imgBackgroundCover = document.getElementsByClassName('principal-movie')[0];
   var imgCover = document.getElementById('movieCover');
   var title = document.getElementById('movieTitle');
   var description = document.getElementById('movieDescription');
   
   imgBackgroundCover.style.background = `url(img/${movie.image_background}) no-repeat`;
   imgBackgroundCover.style.backgroundSize = '100% 100%';

   title.innerHTML = `<span class="bold">${movie.title}</span>`;
   description.innerText = movie.description;

   imgCover.setAttribute('src', `img/${movie.image_cover}`)
}

var createMovieSection = function(title, moviesItems){
    var moviesSection = document.getElementsByClassName('movies')[0];

    var container = document.createElement('div');
    var containerMovies = document.createElement('div');

    container.setAttribute('class', 'container');
    containerMovies.setAttribute('class', 'container-movies owl-carousel owl-theme');

    var heading = document.createElement('h6');
    heading.innerHTML = title;

    container.appendChild(heading);

    moviesItems.forEach(m => {
        var movie = document.createElement('div');    
        movie.setAttribute('class', 'movie item');

        movie.innerHTML = `<img id=${m.id} src=img/${m.image_cover} onClick="changeMovie(${m.id})">`

        containerMovies.appendChild(movie);
    });  

    container.appendChild(containerMovies);
    moviesSection.appendChild(container)
} 

var ramdonMovie = movies[Math.floor(Math.random() * movies.length)];
changeMovie(ramdonMovie.id);

createMovieSection('Trending Now', movies.filter(m => m.group === 'Trending Now'));
createMovieSection('Watch It Again', movies.filter(m => m.group === 'Watch It Again'));

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:2,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:2
        },
        400:{
            items:2
        },
        600:{
            items:3
        },
        800:{
            items:4
        },
        1200:{
            items:6
        }
    }
})






