import type { Tour } from '../types/tour';

const staticTours: Tour[] = [
  {
    id: 1,
    name: 'De Volksbuurten Wandeling',
    bookName: 'volksbuurten',
    location: 'lisbon',
    toBook: true,
    description:
      'Bij deze wandeling bekijken we de oudste heuvel van Lissabon, waarbij u aangenaam verrast wordt door de mooiste belvédères en tegelplateaus. Het hoogtepunt van deze wandeling vormt de beklimming van de Arco de Triumfo, met een magnifiek uitzicht over Lissabon.',
    landmarks: [
      'Miradouro da Graça',
      'Miradouro da Senhora do Monte',
      'Sé de Lisboa',
      'Arco da Rua Augusta'
    ],
    included: ['Entréebewijs voor de Arco de Triumfo', 'Nederlandstalige begeleiding'],
    price: '€30,00 pp',
    images: [
      {
        original: 'img/alfama/1.jpg',
        thumbnail: 'img/alfama/1.jpg'
      },
      {
        original: 'img/alfama/2.jpg',
        thumbnail: 'img/alfama/2.jpg'
      },
      {
        original: 'img/alfama/3.jpg',
        thumbnail: 'img/alfama/3.jpg'
      }
    ],
  },
  {
    id: 2,
    name: 'De Tapas Wandeling',
    bookName: 'tapas',
    location: 'lisbon',
    toBook: true,
    description:
      'Bij deze happen en stappen tour maakt u kennis met de heerlijke Portugese gastronomie. We beginnen de dag met een bezoek aan de kleurrijke markt van Lissabon, om een idee te krijgen wat de Portugesen zoal eten. Lopend door de gezellige oude straatjes worden uw smaakpapillen her en der geprikkeld. De excursie sluiten we af met een heerlijke "wine with a view".',
    landmarks: [
      'Mercado da Ribeira',
      'Baixa Pombalina',
      'Chiado pleinen',
      'Miradouro de São Pedro de Alcântara'
    ],
    included: [
      'Diverse portugese tapas',
      'Bijbehorende drankjes',
      'Een pastel de nata',
      'Nederlandstalige begeleiding'
    ],
    price: '€45,00 pp',
    images: [
      {
        original: 'img/culinaire/1.jpg',
        thumbnail: 'img/culinaire/1.jpg'
      },
      {
        original: 'img/culinaire/2.jpg',
        thumbnail: 'img/culinaire/2.jpg'
      },
      {
        original: 'img/culinaire/3.jpg',
        thumbnail: 'img/culinaire/3.jpg'
      }
    ],
  },
  {
    id: 3,
    name: 'De Bohemian Wandeling',
    bookName: 'bohemian',
    location: 'lisbon',
    toBook: true,
    description:
      'De Bairro Alto wordt ook wel gezien als dé Bohemian wijk van Lissabon, de ouderwetse markthal, bijzondere ateliers, de gele trammetjes en 100 jaar oude winkeltjes geven kleur aan deze wijk.',
    landmarks: [
      'Mercado da Ribeira',
      'Ascensor da Bica',
      'Bairro Alto ateliers',
      'Miradouro de São Pedro de Alcântara'
    ],
    included: ['Een consumptie (koffie of frisdrank)', 'Een pastel de nata', 'Nederlandstalige begeleiding'],
    price: '€30,00 pp',
    images: [
      {
        original: 'img/bohemian/1.jpg',
        thumbnail: 'img/bohemian/1.jpg'
      },
      {
        original: 'img/bohemian/2.jpg',
        thumbnail: 'img/bohemian/2.jpg'
      },
      {
        original: 'img/bohemian/3.jpg',
        thumbnail: 'img/bohemian/3.jpg'
      }
    ],
  },
  {
    id: 4,
    name: 'Een privé Fietstoer',
    bookName: 'fietstoer',
    location: 'lisbon',
    toBook: true,
    description:
      'Je bent Nederlander of je bent het niet, waarom niet Lissabon verkennen op de fiets? Hoewel Lissabon, vanwege de vele heuvels, geen fietsstad is zoals we dat in Nederland gewend zijn, heb ik toch een leuke fietsroute voor u uitgestippeld, zonder dat u zichzelf in het zweet hoeft te werken. We beginnen op het mooiste plein van Lissabon met zijn glorieuze Arc de Triumf. Na een kleine tussenstop op de overdekte groente-, fruit- en vismarkt fietsen we vervolgens heerlijk langs de rivier de Taag naar de wijk Belém, waar we kennis gaan maken met de Gouden Eeuw van Portugal. Tussendoor rusten we even uit met een verfrissend drankje op een gezellig terras.',
    landmarks: [
      'Praça do Comércio',
      'Mercado da Ribeira',
      'MAAT en Tejo oever',
      'Torre de Belém'
    ],
    included: ['Fietshuur', 'Een consumptie', 'Nederlandstalige begeleiding'],
    price: '2-3 pers.: €60,00 pp\nvanaf 4 pers.: €45,00 pp',
    images: [
      {
        original: 'img/fietstoer/1.jpg',
        thumbnail: 'img/fietstoer/1.jpg'
      },
      {
        original: 'img/fietstoer/2.jpg',
        thumbnail: 'img/fietstoer/2.jpg'
      },
      {
        original: 'img/fietstoer/3.jpg',
        thumbnail: 'img/fietstoer/3.jpg'
      }
    ],
  },
  {
    id: 7,
    name: 'De Tram Wandeling',
    bookName: 'tram',
    location: 'lisbon',
    toBook: true,
    description:
      "Een bezoek aan Lissabon is niet compleet zonder ouderwets tramritje. Echter bij 'Just Lisbon' gaan we buiten het toeristen boekje om en nemen we plaats naast de locals in zo'n leuk geel trammetje richting een prachtige barokke Basiliek. Via het gezellige Parlement Kwartier met z'n kleine ateliertjes lopen we terug en strijken we nog even neer op een terras in een mooi stadspark.",
    landmarks: [
      'Praça Luís de Camões',
      'Tram 28 traject',
      'Basílica da Estrela',
      'Jardim da Estrela'
    ],
    included: ['Een tramkaartje', 'Een consumptie', 'Nederlandstalige begeleiding'],
    price: '€30,00 pp',
    images: [
      {
        original: 'img/tram/1.jpg',
        thumbnail: 'img/tram/1.jpg'
      },
      {
        original: 'img/tram/2.jpg',
        thumbnail: 'img/tram/2.jpg'
      },
      {
        original: 'img/tram/3.jpg',
        thumbnail: 'img/tram/3.jpg'
      }
    ],
  },
  {
    id: 9,
    name: 'De Streetart Wandeling',
    bookName: 'streetart',
    location: 'lisbon',
    toBook: true,
    description:
      'Dat Lissabon één van de kleurrijkste steden van Europa is, gaat u met deze toer ontdekken. De wandeling voert ons door een gedeelte van Lissabon, waar je met recht kunt spreken van een Openlucht Kunstmuseum. Al wandelend duikt u in de geschiedenis van graffiti en streetart en maakt u kennis met diverse internationale artiesten. Ook bij deze wandeling is er onderweg een gezellige terras stop.',
    landmarks: [
      'LX Factory murals',
      'Calçada da Glória',
      'Avenida da Liberdade streetart',
      'Bairro Alto graffiti steegjes'
    ],
    included: ['Een consumptie', 'Nederlandstalige begeleiding'],
    price: '€30,00 pp',
    images: [
      {
        original: 'img/streetart/1.jpg',
        thumbnail: 'img/streetart/1.jpg'
      },
      {
        original: 'img/streetart/2.jpg',
        thumbnail: 'img/streetart/2.jpg'
      },
      {
        original: 'img/streetart/3.jpg',
        thumbnail: 'img/streetart/3.jpg'
      }
    ],
  },
  {
    id: 5,
    name: 'De Regaleira Wandeling',
    bookName: 'regaleira',
    location: 'sintra',
    toBook: true,
    description:
      'Deze tocht begint in het oude centrum van Sintra, waarbij diverse Portugese koningen de revu passeren. Na een drankje op een zonnig terras, lopen we verder naar het fantastische landgoed, Quinta da Regaleira, waar u een paar unieke uren gaat beleven!',
    landmarks: [
      'Historisch centrum van Sintra',
      'Palácio Nacional de Sintra',
      'Quinta da Regaleira',
      'Initiation Well'
    ],
    included: ['Een consumptie', 'Nederlandstalige begeleiding'],
    price: '€35,00 pp',
    images: [
      {
        original: 'img/regaleira/1.jpg',
        thumbnail: 'img/regaleira/1.jpg'
      },
      {
        original: 'img/regaleira/2.jpg',
        thumbnail: 'img/regaleira/2.jpg'
      },
      {
        original: 'img/regaleira/3.jpg',
        thumbnail: 'img/regaleira/3.jpg'
      }
    ],
  },
  {
    id: 6,
    name: 'De Mouros Wandeling',
    bookName: 'mouros',
    location: 'sintra',
    toBook: true,
    description:
      'Voor deze wandeling moet u over een goede conditie beschikken, want we gaan het prachtige gebergte van Sintra verkennen. In het centrum van Sintra pakken we de pendelbus omhoog het gebergte in, tot aan "Castelo dos Mouros". De bezichtiging van deze eeuwen oude ruines mag natuurlijk niet ontbreken. Via een prachtige bosrijke wandeling lopen we terug naar het pittoreske centrum van Sintra. Tijdens deze toer zijn schitterende vergezichten en een fantastische natuur verzekerd.',
    landmarks: [
      'Centrum van Sintra',
      'Castelo dos Mouros',
      'Serra de Sintra',
      'Miradouro do Castelo'
    ],
    included: ['Pendelbus', 'Nederlandstalige begeleiding'],
    price: '€35,00 pp',
    images: [
      {
        original: 'img/mouros/1.jpg',
        thumbnail: 'img/mouros/1.jpg'
      },
      {
        original: 'img/mouros/2.jpg',
        thumbnail: 'img/mouros/2.jpg'
      },
      {
        original: 'img/mouros/3.jpg',
        thumbnail: 'img/mouros/3.jpg'
      }
    ],
  },
  {
    id: 8,
    name: 'De Pena Wandeling',
    bookName: 'pena',
    location: 'sintra',
    toBook: true,
    description:
      'Ook voor deze wandeling moet u goed ter been zijn, want de dag brengen we door in het prachtige gebergte van Sintra. In het centrum van Sintra pakken we de pendelbus omhoog naar het bijzondere sprookjesachtige Pena paleis. De bezichtiging van dit kleurrijke paleis zal u niet snel vergeten. Via een prachtige bosrijke wandeling lopen we terug naar het pittoreske centrum van Sintra.',
    landmarks: [
      'Centrum van Sintra',
      'Palácio Nacional da Pena',
      'Parque da Pena',
      'Miradouro dos Lagos'
    ],
    included: ['Pendelbus', 'Nederlandstalige begeleiding'],
    price: '€35,00 pp',
    images: [
      {
        original: 'img/pena/1.jpg',
        thumbnail: 'img/pena/1.jpg'
      },
      {
        original: 'img/pena/2.jpg',
        thumbnail: 'img/pena/2.jpg'
      },
      {
        original: 'img/pena/3.jpg',
        thumbnail: 'img/pena/3.jpg'
      }
    ],
  },
  {
    id: 10,
    name: 'Walking Dinner',
    bookName: 'walkingdinner',
    location: 'lisbon',
    toBook: false,
    description:
      'U bent maar een paar dagen in Lissabon en u wilt graag optimaal genieten van de Portugese keuken, dan is onze Walking Dinner echt iets voor u. Via een met smaak uitgezette self guided wandeling loopt u van restaurant naar restaurant. Op drie verschillende sfeervolle locaties wordt een voorgerecht, hoofdgerecht en dessert geserveerd. Bij iedere gang is een glas wijn, bier of frisdrank inbegrepen. Zo maakt u al lopend en etend kennis met het gezellige Lissabon.',
    landmarks: [
      'Baixa Pombalina',
      'Rossio plein',
      'Chiado',
      'Cais do Sodré'
    ],
    included: [
      'Een wandelroute langs diverse highlights van Lissabon',
      '3 gangen diner in 3 verschillende gezellige restaurants',
      'Een glas wijn (of bier of fris) bij elk gerecht'
    ],
    price: '€59,95 pp',
    images: [
      {
        original: 'img/walkingdinner/1.jpg',
        thumbnail: 'img/walkingdinner/1.jpg'
      },
      {
        original: 'img/walkingdinner/2.jpg',
        thumbnail: 'img/walkingdinner/2.jpg'
      },
      {
        original: 'img/walkingdinner/3.jpg',
        thumbnail: 'img/walkingdinner/3.jpg'
      }
    ],
  }
];

export const fallbackTours = staticTours;
export default staticTours;
