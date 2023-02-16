const languageSelector = document.getElementById("language-selector");

// Add translations here, lookup by "id"
const translations = {
        
  en: {
    banner: {
      title: "CITIZENSHIP",
      body: "BY INVESTMENT PROGRAMME",
      button: "Get Started",
    },
    citizenship: {
      title: "Saint Kitts and Nevis Citizenship",
      body: "The Saint Kitts and Nevis Citizenship by Investment Program was <b>established in 1984</b>, making it the oldest program of this kind in the world. In close to 40 years of operation, it has distinguished itself by its investment options and due diligence procedures. To this day, Saint Kitts and Nevis remains the world’s most reputable jurisdiction for the conferral of citizenship by investment.",
    },
    learnButton: "Learn more",
    jurisdiction: {
      title: "Jurisdiction",
      body: "Saint Kitts and Nevis, also known as <b>‘Saint Christopher and Nevis’</b> forms part of the group of islands known as the Lesser Antilles, located some 2,000 km to the southeast of the state of Florida. Saint Kitts and Nevis was home to the first British and French colonies in the Caribbean, and thus has also been titled \"The Mother Colony of the West Indies\". The country has beautiful beaches, reefs, wonderful cool climate, enjoyable throughout the year. The country is also well connected by easy and <b>direct flights</b> from Europe, Canada, multiple cities in the US, and most Caribbean airliners.",
    },
    business: {
      title: "Business Practices",
      body: {
         one: "Our firm specializes in the processing of citizenship applications directly in Saint Kitts and Nevis, enabling us to be apprised of all new developments, so our clients are always well-informed in advance of any changes, and can rely on our support and expertise throughout the procedure.",
         two: "Our team also offers <b>full linguistic support</b> throughout the application process and until completion in the following languages: <b>English, French, Japanese, Spanish, and Chinese</b>.",
         three: "If your current nationality is limiting your ability to freely travel, bank, invest or feel secure, a second citizenship/passport will open up a world of new possibilities for you and your family. Qualified applicants can enjoy greater freedom and increased stability for themselves, their spouse, and any number of dependent (children, siblings, parents, etc).",
      },
    },
    record: {
      title: "Successful Track Record",
      body: {
         one: "Our team already has a lengthy proven track-record of applicants, and we have assisted numerous clients from around the world, including applicants from jurisdictions such as <b>Lebanon</b>, <b>Nigeria</b>, <b>Canada</b>, <b>China</b>, <b>Libya</b>, <b>Germany</b>, <b>Japan</b>, etc., to obtain citizenship.",
         two: "Our team also facilitates citizenship applications in any country that currently offers reputable economic citizenship programs <br>(currently including <i>Saint Lucia</i>, <i>Antigua and Barbuda</i>, <i>Dominica</i>, <i>Grenada</i>, <i>Turkey</i>, <i>Malta</i>, and <i>Vanuatu</i>).",
      },
    },
    benefits: {
      title: "Why Saint Kitts and Nevis?",
      one: {
         title: "Ease of Traveling",
         body: "Visa-free access to nearly 150 countries, including the United Kingdom (180 days for tourism, conferences, family, etc), the <b>(<a href=\"https://www.schengenvisainfo.com/schengen-visa-countries-list\" target=\"_blank\">Schengen Area</a></b>, for a period of 3 months during a 6 months period with ETIAS), HK, Singapore, etc., ease of residency applications in all <b><a href=\"https://caricom.org/member-states-and-associate-members\" target=\"_blank\">CARICOM</a></b> member countries, as well as opportunities to travel (or even work) in any of the <b><a href=\"https://www.oecs.org/en/who-we-are/about-us\" target=\"_blank\">OECS</a></b> member states.",
      },
      two: {
         title: "Required Residency",
         body: "There is no requirement to live or reside in Saint Kitts and Nevis, but you are entitled to live there, as such residency is <b>optional</b> and not mandatory, there are no visitation requirements to apply and obtain the Saint Kitts and Nevis citizenship, and the jurisdiction permits dual/multiple citizenship.",
      },
      three: {
         title: "Dependents",
         body: "You, your spouse, your dependents (depending on age and economical relationship <b>siblings</b>, <b>children</b>, <b>parents</b>, etc.) as well as your <b>descendants</b> can enjoy citizenship for life, family members can also be added later, a second passport also increases chances for children to attend international universities with admission policies based on citizenship quota, etc.",
      },
      four: {
         title: "Discretion",
         body: "Discretion with respect to citizenship, ensuring that one’s citizenship status is not disclosed to third parties, the program represents a short-term investment in exchange for a lifetime multigenerational citizenship, and a potential safety net for the family in an unpredictable word.",
      },
      five: {
         title: "Stability",
         body: "A low tax regime, exempting taxes on worldwide income, capital gains and inheritance, security and peace of mind of being a citizen of a country with a stable government and economy, Saint Kitts and Nevis citizens are fluent English speakers, providing ease of traveling along with increased chances of international visa approvals.",
      },
      six: {
         title: "Wealth Management",
         body: "An environment conducive to starting a business, managing wealth and nurturing an investment, the ability to own property in multiple jurisdictions, giving family legacy with rights such as citizenship by descent, granting greater future educational opportunities for children.",
      },
      seven: {
         title: "Efficient Process",
         body: "A hassle-free and <b>efficient application process</b>, which rapidly confirms the outcome of your application. There are no requirements for previous investor or business experience, nor English language proficiency, or for attending any interview at any stage during the application process.",
      },
      eight: {
         title: "Accelerated Process",
         body: "There is also an <b>Accelerated Application Process (AAP)</b> approved by the Government of Saint Kitts and Nevis which allows applications to be fast-tracked. Interested applicants will still be required to meet all criteria and submit the necessary documents.",
      },
      nine: {
         title: "Pristine Environment",
         body: "Saint Kitts and Nevis, an independent <b>member of the Commonwealth since 1983</b> following independence from Britain, is well known and famous for its beautiful beaches, pristine tropical forests and friendly locals, Saint Kitts and Nevis is also very safe, walkable and has great weather.",
      },
    },
  },
  
  fr: {
    banner: {
      title: "PROGRAMME DE CITOYENNETÉ",
      body: "PAR INVESTISSEMENT",
      button: "Commencez",
    },
    citizenship: {
      title: "Citoyenneté de Saint-Kitts-et-Nevis",
      body: "Le programme de citoyenneté par investissement de Saint-Kitts-et-Nevis a été <b>établi en 1984</b>, ce qui en fait le plus ancien programme de ce type au monde. En près de 40 ans de fonctionnement, il s'est distingué par ses options d'investissement et ses procédures de diligence raisonnable. À ce jour, Saint-Kitts-et-Nevis reste la juridiction la plus réputée au monde pour l'octroi de la citoyenneté par investissement.",
    },
    learnButton: "En savoir plus",
    jurisdiction: {
      title: "Compétence",
      body: "Saint-Kitts-et-Nevis, également connu sous le nom de \"Saint-Christophe-et-Nevis\", fait partie du groupe d'îles connu sous le nom de Petites Antilles, situé à environ 2 000 km au sud-est de l'État de Floride. Saint-Kitts-et-Nevis a abrité les premières colonies britanniques et françaises dans les Caraïbes, ce qui lui a valu le titre de \"colonie mère des Antilles\". The country has beautiful beaches, reefs, wonderful cool climate, enjoyable throughout the year. Le pays est également bien desservi par des vols faciles et directs depuis l'Europe, le Canada, plusieurs villes des États-Unis et la plupart des compagnies aériennes des Caraïbes.",
    },
    business: {
      title: "Pratiques commerciales",
      body: {
         one: "Notre cabinet est spécialisé dans le traitement des demandes de citoyenneté directement à Saint-Kitts-et-Nevis, ce qui nous permet d'être au courant de tous les nouveaux développements. Nos clients sont donc toujours bien informés à l'avance de tout changement et peuvent compter sur notre soutien et notre expertise tout au long de la procédure.",
         two: "Notre équipe offre également un soutien linguistique complet tout au long du processus de candidature et jusqu'à son achèvement dans les langues suivantes : anglais, français, japonais, espagnol et chinois.",
         three: "Si votre nationalité actuelle limite votre capacité à voyager librement, à effectuer des opérations bancaires, à investir ou à vous sentir en sécurité, une deuxième citoyenneté/un deuxième passeport vous ouvrira un monde de nouvelles possibilités pour vous et votre famille. Les candidats qualifiés peuvent bénéficier d'une plus grande liberté et d'une stabilité accrue pour eux-mêmes, leur conjoint et un nombre quelconque de personnes à charge (enfants, frères et sœurs, parents, etc.).",
      },
    },
    record: {
      title: "Des résultats probants",
      body: {
         one: "Notre équipe a déjà fait ses preuves auprès de nombreux demandeurs, et nous avons aidé de nombreux clients du monde entier, y compris des demandeurs provenant de juridictions telles que le Liban, le Nigeria, le Canada, la Chine, la Libye, l'Allemagne, le Japon, etc. à obtenir la citoyenneté.",
         two: "Notre équipe facilite également les demandes de citoyenneté dans tout pays qui offre actuellement des programmes de citoyenneté économique réputés (comprenant actuellement Sainte-Lucie, Antigua-et-Barbuda, la Dominique, la Grenade, la Turquie, Malte et Vanuatu).",
      },
    },       
    benefits: {
      title: "Pourquoi Saint-Christophe-et-Niévès?",
      one: {
         title: "Facilité de déplacement",
         body: "Accès sans visa à près de 150 pays, dont le Royaume-Uni (180 jours pour le tourisme, les conférences, la famille, etc.), la (zone Schengen, pour une période de 3 mois au cours d'une période de 6 mois avec ETIAS), HK, Singapour, etc., facilité des demandes de résidence dans tous les pays membres du CARICOM, ainsi que la possibilité de voyager (voire de travailler) dans n'importe lequel des États membres de l'OECS.",
      },
      two: {
         title: "Résidence requise",
         body: "Il n'y a aucune obligation de vivre ou de résider à Saint-Kitts-et-Nevis, mais vous avez le droit d'y vivre. La résidence est facultative et non obligatoire, il n'y a aucune obligation de visite pour demander et obtenir la citoyenneté de Saint-Kitts-et-Nevis, et la juridiction autorise la double/multiple citoyenneté.",
      },
      three: {
         title: "Personnes à charge",
         body: "Vous, votre conjoint, les personnes à votre charge (en fonction de l'âge et du lien économique : frères et sœurs, enfants, parents, etc.) ainsi que vos descendants peuvent bénéficier de la citoyenneté à vie, les membres de la famille peuvent également être ajoutés ultérieurement, un second passeport augmente également les chances des enfants de fréquenter des universités internationales dont les politiques d'admission sont basées sur des quotas de citoyenneté, etc.",
      },
      four: {
         title: "Discrétion",
         body: "Le programme représente un investissement à court terme en échange d'une citoyenneté multigénérationnelle à vie, et un filet de sécurité potentiel pour la famille dans un monde imprévisible.",
      },
      five: {
         title: "Stabilité",
         body: "Un régime fiscal avantageux, exempt d'impôts sur les revenus mondiaux, les plus-values et les héritages, la sécurité et la tranquillité d'esprit que procure le fait d'être citoyen d'un pays dont le gouvernement et l'économie sont stables. Les citoyens de Saint-Kitts-et-Nevis parlent couramment l'anglais, ce qui facilite les voyages et augmente les chances d'obtenir des visas internationaux.",
      },
      six: {
         title: "Gestion de patrimoine",
         body: "Un environnement propice au lancement d'une entreprise, à la gestion du patrimoine et à l'entretien d'un investissement, la possibilité de posséder des biens dans plusieurs juridictions, l'octroi d'un héritage familial avec des droits tels que la citoyenneté par filiation, l'octroi de meilleures possibilités d'éducation future pour les enfants.",
      },
      seven: {
         title: "Un processus efficace",
         body: "Un processus de candidature efficace et sans tracas, qui confirme rapidement le résultat de votre demande. Il n'est pas nécessaire d'avoir une expérience préalable en tant qu'investisseur ou en tant qu'entreprise, ni de maîtriser l'anglais, ni de participer à un entretien à quelque stade que ce soit du processus de candidature.",
      },
      eight: {
         title: "Processus accéléré",
         body: "Il existe également un processus de demande accéléré (AAP) approuvé par le gouvernement de Saint-Kitts-et-Nevis, qui permet d'accélérer le traitement des demandes. Les candidats intéressés devront toujours répondre à tous les critères et soumettre les documents nécessaires.",
      },
      nine: {
         title: "Un environnement vierge",
         body: "Saint-Christophe-et-Niévès, membre indépendant du Commonwealth depuis 1983 après son indépendance de la Grande-Bretagne, est bien connu et célèbre pour ses belles plages, ses forêts tropicales vierges et ses habitants sympathiques. Saint-Christophe-et-Niévès est également très sûr, praticable à pied et bénéficie d'un temps magnifique.",
      },
    },
  },
        
  sp: {
    banner: {
      title: "PROGRAMA DE CIUDADANÍA",
      body: "POR INVERSIÓN",
      button: "Comenzar",
    },
    citizenship: {
      title: "Ciudadanía de San Cristóbal y Nieves",
      body: "El Programa de Ciudadanía por Inversión de San Cristóbal y Nieves se <b>estableció en 1984</b>, lo que lo convierte en el programa de este tipo más antiguo del mundo. En sus casi 40 años de funcionamiento, se ha distinguido por sus opciones de inversión y sus procedimientos de diligencia debida. A día de hoy, San Cristóbal y Nieves sigue siendo la jurisdicción más reputada del mundo para la concesión de la ciudadanía por inversión.",
    },
    learnButton: "Más información",
    jurisdiction: {
      title: "Jurisdicción",
      body: "San Cristóbal y Nieves forma parte del grupo de islas conocido como Antillas Menores, situado a unos 2.000 km al sureste del estado de Florida. San Cristóbal y Nieves fue sede de las primeras colonias británicas y francesas en el Caribe, por lo que también se la ha titulado \"La Colonia Madre de las Indias Occidentales\". El país cuenta con hermosas playas, arrecifes y un maravilloso clima fresco, agradable durante todo el año. Además, el país está bien comunicado por vuelos fáciles y directos desde Europa, Canadá, múltiples ciudades de EE UU y la mayoría de las líneas aéreas del Caribe.",
    },
    business: {
      title: "Prácticas empresariales",
      body: {
         one: "Nuestro bufete está especializado en la tramitación de solicitudes de ciudadanía directamente en San Cristóbal y Nieves, lo que nos permite estar al tanto de todas las novedades, de modo que nuestros clientes siempre están bien informados de antemano de cualquier cambio, y pueden contar con nuestro apoyo y experiencia durante todo el procedimiento.",
         two: "Our team also offers full linguistic support throughout the application process and until completion in the following languages: inglés, francés, japonés, español y chino.",
         three: "Si su nacionalidad actual limita su capacidad para viajar libremente, realizar operaciones bancarias, invertir o sentirse seguro, un segundo pasaporte o nacionalidad le abrirá un mundo de nuevas posibilidades para usted y su familia. Los solicitantes cualificados pueden disfrutar de mayor libertad y estabilidad para sí mismos, su cónyuge y cualquier número de personas a su cargo (hijos, hermanos, padres, etc.).",
      },
    },
    record: {
      title: "Exitosa trayectoria",
      body: {
         one: "Nuestro equipo ya cuenta con un largo historial probado de solicitantes, y hemos ayudado a obtener la nacionalidad a numerosos clientes de todo el mundo, incluidos solicitantes de jurisdicciones como Líbano, Nigeria, Canadá, China, Libia, Alemania, Japón, etc.",
         two: "Nuestro equipo también facilita las solicitudes de ciudadanía en cualquier país que ofrezca actualmente programas de ciudadanía económica acreditados (entre los que se incluyen actualmente Santa Lucía, Antigua y Barbuda, Dominica, Granada, Turquía, Malta y Vanuatu).",
      },
    },
    benefits: {
      title: "¿Por qué San Cristóbal y Nieves?",
      one: {
         title: "Facilidad para viajar",
         body: "Acceso sin visado a cerca de 150 países, entre ellos el Reino Unido (180 días para turismo, conferencias, familia, etc.), el espacio Schengen, por un periodo de 3 meses durante un periodo de 6 meses con ETIAS), HK, Singapur, etc., facilidad para solicitar la residencia en todos los países miembros de la CARICOM, así como oportunidades para viajar (o incluso trabajar) en cualquiera de los Estados miembros de la OECO.",
      },
      two: {
         title: "Residencia requerida",
         body: "No existe ningún requisito para vivir o residir en Saint Kitts y Nevis, pero tiene derecho a vivir allí, ya que la residencia es opcional y no obligatoria, no hay requisitos de visita para solicitar y obtener la ciudadanía de Saint Kitts y Nevis, y la jurisdicción permite la doble/múltiple ciudadanía.",
      },
      three: {
         title: "Dependientes",
         body: "Usted, su cónyuge, las personas a su cargo (en función de la edad y la relación económica hermanos, hijos, padres, etc.) así como sus descendientes pueden disfrutar de la nacionalidad de por vida, también se pueden añadir miembros de la familia más adelante, un segundo pasaporte también aumenta las posibilidades de que los hijos asistan a universidades internacionales con políticas de admisión basadas en cuotas de ciudadanía, etc.",
      },
      four: {
         title: "Discreción",
         body: "Discreción con respecto a la ciudadanía, garantía de que no se revele a terceros la condición de ciudadano, el programa representa una inversión a corto plazo a cambio de una ciudadanía multigeneracional para toda la vida, y una potencial red de seguridad para la familia en un mundo impredecible.",
      },
      five: {
         title: "Estabilidad",
         body: "Un régimen fiscal bajo, que exime de impuestos sobre la renta mundial, las ganancias de capital y las herencias, la seguridad y la tranquilidad de ser ciudadano de un país con un gobierno y una economía estables, los ciudadanos de San Cristóbal y Nieves hablan inglés con fluidez, lo que facilita los viajes y aumenta las posibilidades de que se aprueben visados internacionales.",
      },
      six: {
         title: "Gestión de patrimonios",
         body: "Un entorno propicio para crear una empresa, gestionar el patrimonio y alimentar una inversión, la posibilidad de poseer propiedades en múltiples jurisdicciones, dotar al legado familiar de derechos como la ciudadanía por descendencia, conceder mayores oportunidades educativas futuras a los hijos.",
      },
      seven: {
         title: "Proceso eficiente",
         body: "Un proceso de solicitud eficiente y sin complicaciones, que confirma rápidamente el resultado de su solicitud. No hay requisitos de experiencia previa como inversor o empresario, ni de dominio de la lengua inglesa, ni de asistencia a ninguna entrevista en ninguna fase del proceso de solicitud.",
      },
      eight: {
         title: "Proceso acelerado",
         body: "También existe un Proceso de Solicitud Acelerado (AAP) aprobado por el Gobierno de San Cristóbal y Nieves que permite acelerar las solicitudes. Los solicitantes interesados deberán cumplir todos los requisitos y presentar los documentos necesarios.",
      },
      nine: {
         title: "Entorno prístino",
         body: "San Cristóbal y Nieves, miembro independiente de la Commonwealth desde 1983 tras independizarse de Gran Bretaña, es conocida y famosa por sus hermosas playas, sus bosques tropicales vírgenes y sus amables habitantes. San Cristóbal y Nieves es también muy segura, se puede recorrer a pie y goza de un clima estupendo.",
      },
    },
  },
        
  jp: {
    banner: {
      title: "市民権",
      body: "投資プログラム",
      button: "はじめに",
    },
    citizenship: {
      title: "セントクリストファー・ネイビスの市民権について",
      body: "セントクリストファー・ネイビスの投資による市民権プログラムは、1984年に設立され、この種のプログラムとしては世界で最も古いものです。40年近い運営期間中、その投資オプションとデューデリジェンス手続きにより、際立った存在となっています。今日に至るまで、セントクリストファー・ネイビスは、投資による市民権授与において世界で最も評判の高い司法機関となっています。",
    },
    learnButton: "もっと詳しく",
    jurisdiction: {
      title: "管轄区域",
      body: "セントクリストファー・ネイビス」としても知られるセントクリストファー・ネイビスは、小アンティル諸島と呼ばれる島々の一部を構成し、フロリダ州の南東約2,000kmに位置しています。セントクリストファー・ネイビスは、カリブ海で最初のイギリスとフランスの植民地があったため、「西インド諸島のマザーコロニー」とも呼ばれています。美しいビーチ、サンゴ礁、素晴らしい冷涼な気候があり、一年を通して楽しむことができる国です。また、ヨーロッパ、カナダ、アメリカの複数の都市、そしてほとんどのカリブ海の航空会社から簡単な直行便が就航しています。",
    },
    business: {
      title: "ビジネスプラクティス",
      body: {
         one: "当事務所は、セントクリストファー・ネイビスでの市民権申請手続きに特化しているため、あらゆる新しい動向を把握することができ、クライアントはいかなる変更に対しても常に事前に十分な情報を得ることができ、手続き全体を通して当事務所のサポートと専門知識を頼りにすることが可能です。",
         two: "また、応募から完了まで、以下の言語で完全な言語サポートを提供します。英語、フランス語、日本語、スペイン語、中国語。",
         three: "もし現在の国籍が、自由な旅行、銀行、投資、安全な生活の実現を妨げているとしたら、第二の国籍・パスポートは、あなたとあなたの家族のために新しい可能性の世界を切り開くことでしょう。申請者は、自分自身と配偶者、そして何人かの扶養家族（子供、兄弟、両親など）に対して、より大きな自由と安定を享受することができます。",
      },
    },
    record: {
      title: "成功の実績",
      body: {
         one: "私たちのチームは、すでに申請者の長年の実績があり、レバノン、ナイジェリア、カナダ、中国、リビア、ドイツ、日本などの管轄地域からの申請者を含む世界中の多くのクライアントの市民権取得をサポートしています。",
         two: "また、現在評判の高い経済的市民権プログラムを提供している国（セントルシア、アンティグア・バーブーダ、ドミニカ、グレナダ、トルコ、マルタ、バヌアツなど）での市民権申請も行っています。",
      },
    },
    benefits: {
      title: "なぜセントクリストファー・ネイビスなのか？",
      one: {
         title: "移動のしやすさ",
         body: "イギリス（観光、会議、家族などで180日間）、シェンゲン圏、香港、シンガポールなど約150カ国へのビザなしアクセス、すべてのカリコム加盟国での居住申請の容易さ、さらにOECS加盟国への旅行（あるいは就労）の機会もあります。",
      },
      two: {
         title: "必要な居住地",
         body: "セントクリストファー・ネイビスに居住または居住する義務はありませんが、そのような居住は<b>任意</b>で義務ではないため、そこに住む権利があります。セントクリストファー・ネイビスの市民権を申請し取得するための訪問義務はなく、司法権は二重/多重市民権を許可しています。",
      },
      three: {
         title: "扶養家族",
         body: "本人、配偶者、扶養家族（年齢や経済的な関係により、兄弟姉妹、子供、両親など）、子孫は終身市民権を取得でき、後から家族を追加することも可能で、セカンドパスポートがあれば、子供が市民権枠で入学できる国際大学への進学のチャンスも増える、など。",
      },
      four: {
         title: "裁量権",
         body: "市民権に関する裁量権、自分の市民権状況が第三者に開示されないことを保証し、このプログラムは生涯の多世代市民権と引き換えに短期投資を意味し、予測不可能な言葉の中で家族のための潜在的セーフティネットとなる。",
      },
      five: {
         title: "安定性",
         body: "セントクリストファー・ネイビスの国民は英語が堪能で、国際ビザの取得が容易であるため、旅行がしやすい。",
      },
      six: {
         title: "ウェルス・マネジメント",
         body: "起業、資産運用、投資育成に適した環境、複数の国・地域に財産を所有できること、家督相続などの権利で家族に遺産を与えること、子供たちに将来、より大きな教育機会を与えること、などが挙げられます。",
      },
      seven: {
         title: "効率的なプロセス",
         body: "面倒な手続きは必要なく、効率的な申請プロセスで、迅速に申請結果を確認できます。投資経験やビジネス経験、英語力、面接などの要件は一切ありません。",
      },
      eight: {
         title: "高速化されたプロセス",
         body: "また、セントクリストファー・ネイビス政府が承認したAccelerated Application Process (AAP)があり、申請を迅速に行うことができます。この場合でも、応募者はすべての条件を満たし、必要な書類を提出する必要があります。",
      },
      nine: {
         title: "手つかずの環境",
         body: "セントクリストファー・ネイビスは、イギリスからの独立後、1983年から英連邦の独立メンバーとして、美しいビーチ、手つかずの熱帯林、フレンドリーな地元の人々でよく知られ有名です。また、セントクリストファー・ネイビスは非常に安全で歩きやすく、素晴らしい気候です。",
      },
    },
  },
        
  cn: {
    banner: {
      title: "公民身份",
      body: "按投资方案",
      button: "开始吧",
    },
    citizenship: {
      title: "圣基茨和尼维斯公民身份",
      body: "圣基茨和尼维斯投资入籍计划成立于1984年<b>，是世界上最古老的此类计划。在近40年的运作中，它以其投资选择和尽职调查程序而闻名。时至今日，圣基茨和尼维斯仍然是世界上最有信誉的投资入籍管辖区。",
    },
    learnButton: "了解更多",
    jurisdiction: {
      title: "管辖权",
      body: "圣基茨和尼维斯，也被称为 \"圣克里斯托弗和尼维斯\"，是被称为小安的列斯群岛的一部分，位于佛罗里达州东南方向约2000公里处。圣基茨和尼维斯是英国和法国在加勒比地区的第一批殖民地，因此也被称为 \"西印度群岛的母亲殖民地\"。这个国家有美丽的海滩、珊瑚礁、美妙的凉爽气候，一年四季都很愉快。该国的交通也很便利，有来自欧洲、加拿大、美国多个城市和大多数加勒比海客机的便捷直达航班。",
    },
    business: {
      title: "商业惯例",
      body: {
         one: "我们公司专门在圣基茨和尼维斯直接处理入籍申请，使我们能够了解所有的新发展，因此我们的客户总是能够提前充分了解任何变化，并且在整个程序中可以依靠我们的支持和专业知识。",
         two: "我们的团队还在整个申请过程中提供全面的语言支持，直至完成申请，并提供以下语言支持。英语、法语、日语、西班牙语和中文。",
         three: "如果你目前的国籍限制了你自由旅行、银行、投资或安全感的能力，第二国籍/护照将为你和你的家人打开一个新的世界。合格的申请人可以为自己、配偶和任何数量的受抚养人（子女、兄弟姐妹、父母等）享受更大的自由和更大的稳定性。",
      },
    },
    record: {
      title: "成功的业绩记录",
      body: {
         one: "我们的团队已经有一个漫长的经过验证的申请人记录，我们已经协助来自世界各地的众多客户，包括来自黎巴嫩、尼日利亚、加拿大、中国、利比亚、德国、日本等司法管辖区的申请人，获得公民身份。",
         two: "我们的团队还为任何目前提供信誉良好的经济公民项目的国家（目前包括圣卢西亚、安提瓜和巴布达、多米尼克、格林纳达、土耳其、马耳他和瓦努阿图）的公民身份申请提供便利。",
      },
    },
    benefits: {
      title: "为什么是圣基茨和尼维斯？",
      one: {
         title: "旅行的便利性",
         body: "免签证进入近150个国家，包括英国（180天用于旅游、会议、探亲等），申根地区，在使用ETIAS的6个月期间可停留3个月），香港，新加坡等，在所有加共体成员国的居住申请容易，以及在东加组织任何成员国旅行（甚至工作）的机会。",
      },
      two: {
         title: "要求的居住地",
         body: "没有要求在圣基茨和尼维斯生活或居住，但你有权在那里居住，因为这种居住权是<b>可选择的</b>，而不是强制性的，申请和获得圣基茨和尼维斯公民身份没有访问要求，而且该司法管辖区允许双重/多重公民身份。",
      },
      three: {
         title: "受扶养人",
         body: "您、您的配偶、您的家属（根据年龄和经济关系，兄弟姐妹、子女、父母等）以及您的后代可以终身享受公民身份，家庭成员也可以在以后增加，第二本护照也增加了子女上国际大学的机会，这些大学有基于公民身份的录取政策，等等。",
      },
      four: {
         title: "自由裁量权",
         body: "在公民身份方面的自由裁量权，确保一个人的公民身份不被透露给第三方，该计划代表了一种短期投资，以换取终身的多代公民身份，以及在一个不可预测的词中为家庭提供潜在的安全网。",
      },
      five: {
         title: "稳定性",
         body: "圣基茨和尼维斯实行低税制，免除全球收入、资本收益和遗产税，作为一个政府和经济稳定的国家的公民，安全和安心，圣基茨和尼维斯公民讲流利的英语，为旅行提供便利，并增加国际签证审批的机会。",
      },
      six: {
         title: "财富管理",
         body: "一个有利于创业、管理财富和培育投资的环境，在多个司法管辖区拥有财产的能力，赋予家族遗产以公民身份等权利，给予孩子更大的未来教育机会。",
      },
      seven: {
         title: "高效流程",
         body: "无忧无虑和高效的申请过程，迅速确认你的申请结果。对以前的投资者或商业经验没有要求，也不要求英语水平，或在申请过程的任何阶段参加任何面试。",
      },
      eight: {
         title: "加速的过程",
         body: "还有一个由圣基茨和尼维斯政府批准的加速申请程序（AAP），该程序允许申请被快速跟踪。有兴趣的申请人仍需满足所有标准并提交必要的文件。",
      },
      nine: {
         title: "质朴的环境",
         body: "圣基茨和尼维斯自1983年从英国独立后成为英联邦的独立成员，因其美丽的海滩、原始的热带森林和友好的当地人而闻名遐迩，圣基茨和尼维斯也非常安全，适合步行，并拥有良好的天气。",
      },
    },
   },
};

const urlParams = new URLSearchParams(window.location.search);
const selectedLanguage = urlParams.get("lang") || "en";

languageSelector.value = selectedLanguage;

document.getElementById("banner-title").innerHTML = translations[selectedLanguage].banner.title;
document.getElementById("banner-body").innerHTML = translations[selectedLanguage].banner.body;
document.getElementById("banner-button").innerHTML = translations[selectedLanguage].banner.button;

document.getElementById("citizenship-title").innerHTML = translations[selectedLanguage].citizenship.title;
document.getElementById("citizenship-body").innerHTML = translations[selectedLanguage].citizenship.body;
document.getElementById("citizenship-button").innerHTML = translations[selectedLanguage].learnButton;

document.getElementById("jurisdiction-title").innerHTML = translations[selectedLanguage].jurisdiction.title;
document.getElementById("jurisdiction-body").innerHTML = translations[selectedLanguage].jurisdiction.body;
document.getElementById("jurisdiction-button").innerHTML = translations[selectedLanguage].learnButton;

document.getElementById("business-title").innerHTML = translations[selectedLanguage].business.title;
document.getElementById("business-body-one").innerHTML = translations[selectedLanguage].business.body.one;
document.getElementById("business-body-two").innerHTML = translations[selectedLanguage].business.body.two;
document.getElementById("business-body-three").innerHTML = translations[selectedLanguage].business.body.three;
document.getElementById("business-button").innerHTML = translations[selectedLanguage].learnButton;

document.getElementById("record-title").innerHTML = translations[selectedLanguage].record.title;
document.getElementById("record-body-one").innerHTML = translations[selectedLanguage].record.body.one;
document.getElementById("record-body-two").innerHTML = translations[selectedLanguage].record.body.two;

document.getElementById("benefits-title").innerHTML = translations[selectedLanguage].benefits.title;
document.getElementById("benefits-one-title").innerHTML = translations[selectedLanguage].benefits.one.title;
document.getElementById("benefits-one-body").innerHTML = translations[selectedLanguage].benefits.one.body;
document.getElementById("benefits-two-title").innerHTML = translations[selectedLanguage].benefits.two.title;
document.getElementById("benefits-two-body").innerHTML = translations[selectedLanguage].benefits.two.body;
document.getElementById("benefits-three-title").innerHTML = translations[selectedLanguage].benefits.three.title;
document.getElementById("benefits-three-body").innerHTML = translations[selectedLanguage].benefits.three.body;
document.getElementById("benefits-four-title").innerHTML = translations[selectedLanguage].benefits.four.title;
document.getElementById("benefits-four-body").innerHTML = translations[selectedLanguage].benefits.four.body;
document.getElementById("benefits-five-title").innerHTML = translations[selectedLanguage].benefits.five.title;
document.getElementById("benefits-five-body").innerHTML = translations[selectedLanguage].benefits.five.body;
document.getElementById("benefits-six-title").innerHTML = translations[selectedLanguage].benefits.six.title;
document.getElementById("benefits-six-body").innerHTML = translations[selectedLanguage].benefits.six.body;
document.getElementById("benefits-seven-title").innerHTML = translations[selectedLanguage].benefits.seven.title;
document.getElementById("benefits-seven-body").innerHTML = translations[selectedLanguage].benefits.seven.body;
document.getElementById("benefits-eight-title").innerHTML = translations[selectedLanguage].benefits.eight.title;
document.getElementById("benefits-eight-body").innerHTML = translations[selectedLanguage].benefits.eight.body;
document.getElementById("benefits-nine-title").innerHTML = translations[selectedLanguage].benefits.nine.title;
document.getElementById("benefits-nine-body").innerHTML = translations[selectedLanguage].benefits.nine.body;

// Add listener to selector to update language
languageSelector.addEventListener("change", function(event) {
  window.location = `?lang=${event.target.value}`;
});
