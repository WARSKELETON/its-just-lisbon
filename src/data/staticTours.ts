import type { Tour } from '../types/tour';

const staticTours: Tour[] = [
  {
    id: 1,
    name: 'De Volksbuurten Wandeling',
    bookName: 'volksbuurten',
    location: 'lisbon',
    photoMobile: 'img/AlfamaNovo.png',
    photoDesktop: 'img/AlfamaNovoBig.png',
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
    timeline: [
      {
        time: '09:30',
        title: 'Ontvangst in Alfama',
        description: 'We ontmoeten elkaar bij Miradouro da Graça en schetsen de geschiedenis van de wijk.'
      },
      {
        time: '10:00',
        title: 'Steegjes en tegels',
        description: 'We dalen af door de smalle straatjes, ontdekken fadohuizen en kleurrijke azulejos.'
      },
      {
        time: '11:00',
        title: 'Sé en uitzichtpunten',
        description: 'We bezoeken de kathedraal en genieten van panorama’s vanaf Senhora do Monte en Santa Luzia.'
      },
      {
        time: '11:45',
        title: 'Beklimming Arco da Rua Augusta',
        description: 'We sluiten de tour af met een wijds uitzicht over het centrum en de Taag.'
      }
    ]
  },
  {
    id: 2,
    name: 'De Tapas Wandeling',
    bookName: 'tapas',
    location: 'lisbon',
    photoMobile: 'img/Culinaire.png',
    photoDesktop: 'img/CulinaireBig.png',
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
    timeline: [
      {
        time: '15:00',
        title: 'Start op de markt',
        description: 'We beginnen bij Mercado da Ribeira en ontdekken typische producten en smaken.'
      },
      {
        time: '15:30',
        title: 'Tapas tussen de locals',
        description: 'Onderweg proef je petiscos in authentieke tavernes en leer je over de herkomst.'
      },
      {
        time: '16:30',
        title: 'Wijn en verhalen',
        description: 'We nippen van geselecteerde wijnen in Chiado en delen verhalen over Portugese gastronomie.'
      },
      {
        time: '17:15',
        title: 'Wine with a view',
        description: 'Op een heuveltop sluiten we af met uitzicht over de stad en een zoete pastel de nata.'
      }
    ]
  },
  {
    id: 3,
    name: 'De Bohemian Wandeling',
    bookName: 'bohemian',
    location: 'lisbon',
    photoMobile: 'img/BairroAlto.png',
    photoDesktop: 'img/BairroAltoBig.png',
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
    timeline: [
      {
        time: '10:00',
        title: 'Ontmoeting bij de markt',
        description: 'We starten in de Mercado da Ribeira en proeven de creatieve sfeer van de wijk.'
      },
      {
        time: '10:30',
        title: 'Tram en ateliers',
        description: 'Met de Ascensor da Bica klimmen we naar boven en bezoeken we lokale ateliers en designwinkels.'
      },
      {
        time: '11:30',
        title: 'Caféstop in Bairro Alto',
        description: 'We genieten van een koffie met pastel de nata en horen over de bohemian geschiedenis.'
      },
      {
        time: '12:00',
        title: 'Panoramische afsluiter',
        description: 'Bij São Pedro de Alcântara hebben we een laatste blik over de stad en tips voor de avond.'
      }
    ]
  },
  {
    id: 4,
    name: 'Een privé Fietstoer',
    bookName: 'fietstoer',
    location: 'lisbon',
    photoMobile: 'img/Fietstoer.png',
    photoDesktop: 'img/FietstoerBig.png',
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
    timeline: [
      {
        time: '09:00',
        title: 'Bike fitting op Praça do Comércio',
        description: 'We stellen de fietsen af, delen veiligheidsinstructies en bespreken de route.'
      },
      {
        time: '09:30',
        title: 'Marktstop en proeverij',
        description: 'In Mercado da Ribeira nemen we een kijkje bij verse producten en lokale snacks.'
      },
      {
        time: '10:15',
        title: 'Rit langs de Taag',
        description: 'We fietsen relaxed langs de rivier, passeren de MAAT en leggen de maritieme historie uit.'
      },
      {
        time: '11:30',
        title: 'Belém en terras break',
        description: 'We bezoeken Torre de Belém en genieten van een drankje op een zonnig terras.'
      }
    ]
  },
  {
    id: 7,
    name: 'De Tram Wandeling',
    bookName: 'tram',
    location: 'lisbon',
    photoMobile: 'img/Tram.png',
    photoDesktop: 'img/TramBig.png',
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
    timeline: [
      {
        time: '15:00',
        title: 'Ontmoeting in Chiado',
        description: 'We starten bij Praça Luís de Camões en stappen samen op de iconische tram 28.'
      },
      {
        time: '15:20',
        title: 'Tramrit met locals',
        description: 'Onderweg delen we verhalen over de wijkjes waar we doorheen rijden en hun highlights.'
      },
      {
        time: '16:00',
        title: 'Basílica da Estrela',
        description: 'We bezoeken de barokke basiliek en ontdekken de verborgen hoekjes van het klooster.'
      },
      {
        time: '16:30',
        title: 'Parlement en park',
        description: 'Via het parlementskwartier lopen we naar Jardim da Estrela voor een drankje op het terras.'
      }
    ]
  },
  {
    id: 9,
    name: 'De Streetart Wandeling',
    bookName: 'streetart',
    location: 'lisbon',
    photoMobile: 'img/Streetart.png',
    photoDesktop: 'img/StreetartBig.png',
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
    timeline: [
      {
        time: '10:00',
        title: 'Start bij LX Factory',
        description: 'We ontmoeten elkaar onder de brug en ontdekken het industriële kunstdistrict.'
      },
      {
        time: '10:45',
        title: 'Straatkunst langs Calçada da Glória',
        description: 'Met de funicular gaan we omhoog en analyseren we de nieuwste werken van lokale artiesten.'
      },
      {
        time: '11:30',
        title: 'Urban art in het centrum',
        description: 'We volgen een route door Baixa en Avenida da Liberdade langs grote muurschilderingen.'
      },
      {
        time: '12:15',
        title: 'Creatieve afsluiter',
        description: 'In een atelier in Bairro Alto drinken we iets en delen we tips voor eigen ontdekking.'
      }
    ]
  },
  {
    id: 5,
    name: 'De Regaleira Wandeling',
    bookName: 'regaleira',
    location: 'sintra',
    photoMobile: 'img/Regaleira.png',
    photoDesktop: 'img/RegaleiraBig.png',
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
    timeline: [
      {
        time: '10:00',
        title: 'Welkom in Sintra',
        description: 'We treffen elkaar in het centrum en schetsen de koninklijke geschiedenis van de stad.'
      },
      {
        time: '10:30',
        title: 'Koninklijke hoogtepunten',
        description: 'Langs het Palácio Nacional delen we verhalen over het hofleven en lokale legendes.'
      },
      {
        time: '11:15',
        title: 'Bezoek aan Quinta da Regaleira',
        description: 'We dwalen door tuinen, grotten en verborgen gangen met volop tijd voor fotografie.'
      },
      {
        time: '12:45',
        title: 'Terraspauze en tips',
        description: 'Onder het genot van een drankje delen we tips voor lunch en andere Sintra bezienswaardigheden.'
      }
    ]
  },
  {
    id: 6,
    name: 'De Mouros Wandeling',
    bookName: 'mouros',
    location: 'sintra',
    photoMobile: 'img/Mouros.png',
    photoDesktop: 'img/MourosBig.png',
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
    timeline: [
      {
        time: '09:00',
        title: 'Verzamelen in Sintra',
        description: 'We ontmoeten elkaar bij het treinstation en bereiden ons voor op de klim.'
      },
      {
        time: '09:30',
        title: 'Pendel naar Castelo dos Mouros',
        description: 'De pendelbus brengt ons de berg op terwijl we de historie van het fort bespreken.'
      },
      {
        time: '10:00',
        title: 'Verkenning van het kasteel',
        description: 'We wandelen over de muren, ontdekken het Moorse verleden en genieten van de uitzichten.'
      },
      {
        time: '11:30',
        title: 'Bosrijke afdaling',
        description: 'Via een schilderachtige trail keren we terug naar het centrum met een welverdiende pauze.'
      }
    ]
  },
  {
    id: 8,
    name: 'De Pena Wandeling',
    bookName: 'pena',
    location: 'sintra',
    photoMobile: 'img/Pena.png',
    photoDesktop: 'img/PenaBig.png',
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
    timeline: [
      {
        time: '09:30',
        title: 'Welkom in Sintra',
        description: 'We verzamelen bij het treinstation en schetsen de sprookjesachtige geschiedenis van de stad.'
      },
      {
        time: '10:00',
        title: 'Pendel naar de top',
        description: 'Met de bus klimmen we naar het Pena-plateau terwijl we de romantische architectuur toelichten.'
      },
      {
        time: '10:30',
        title: 'Bezoek aan het paleis',
        description: 'We nemen ruimschoots de tijd om de verschillende vleugels en terrassen van het paleis te bekijken.'
      },
      {
        time: '12:00',
        title: 'Wandeling door het park',
        description: 'Via de tuinen van Parque da Pena dalen we rustig af en sluiten af in het centrum met lokale tips.'
      }
    ]
  },
  {
    id: 10,
    name: 'Walking Dinner',
    bookName: 'walkingdinner',
    location: 'lisbon',
    photoMobile: 'img/WalkingDinner.png',
    photoDesktop: 'img/WalkingDinnerBig.png',
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
    timeline: [
      {
        time: '18:00',
        title: 'Routebriefing in Baixa',
        description: 'We verzamelen in Baixa, lichten de kaart toe en delen insider tips voor de avond.'
      },
      {
        time: '18:30',
        title: 'Voorgerecht in Chiado',
        description: 'Op een charmante locatie proef je petiscos met een glas Portugese witte wijn.'
      },
      {
        time: '19:45',
        title: 'Hoofdgerecht aan de Taag',
        description: 'Langs Cais do Sodré wacht een visgerecht met bijpassende wijn of bier.'
      },
      {
        time: '21:00',
        title: 'Dessert bij Rossio',
        description: 'We sluiten af in Baixa met een creatief dessert en een laatste glaasje port.'
      }
    ]
  }
];

export const fallbackTours = staticTours;
export default staticTours;
