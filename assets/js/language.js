const languageSelector = document.getElementById("language-selector");

// Add translations here, lookup by "id"
const translations = {
        
  en: {
    title: "CITIZENSHIP BY INVESTMENT PROGRAMME",
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
    faq: {
      title: "Frequently Asked Questions",
      body: "Here are some frequently asked questions and answers you might find useful.",
      one: {
         title: "1. What are the requirements of becoming a Saint Kitts and Nevis citizen by investment?",
         body: "The \"<b>Main Applicant</b>\" (often abbreviated “<b>MA</b>” during the process) must be at least eighteen (18) years of age, must have made an investment in the prescribed amount, and must meet other application requirements.",
      },
      two: {
         title: "2. Can I contact the \"Citizenship by Investment Unit\" (CIU) directly?",
         body: "No, the CIU limits its communication to ‘Authorized Persons’. An ‘Authorized Person’ is an individual or entity approved by the Financial Services Regulatory Commission (FRSC) of Saint Kitts and Nevis licensed to conduct corporate or trust services in Saint Kitts and Nevis. An ‘Authorized Person’ is appointed by the main applicant by way of Limited Power of Attorney to act on their behalf in relation to all matters regarding their Citizenship by Investment application. The ‘Authorized Person’ is required to provide professional advice, assist and give details regarding the process and help with the preparation and submission of an application for Citizenship by investment and its supporting documents. The ‘Authorized Person’ will communicate with the Citizenship by Investment Unit and maintain a point of contact to review all matters surrounding the application, make payments and submit and collect all important correspondences.",
      },
      three: {
         title: "3. Are the application forms available online?",
         body: "No, the application forms for Citizenship by Investment can only be obtained and also submitted to the Citizenship by Investment Unit by an ‘Authorized Person’.",
      },
      four: {
         title: "4. How long does the application process take?",
         body: "The application process may take as little as 60~90 days (counting from the submission and acceptance of all documents) but may be delayed depending on the profile of the applicant. Applicants will be kept informed regularly of the status of their applications through their ‘Authorized Person’.",
      },
      five: {
         title: "5. Can I submit my application in a language other than English?",
         body: "No. All applications and documents that are not in English are not prescribed or accepted by the Citizenship by Investment Unit, and every foreign language document must be submitted along with a <b>certified translated English</b> version.",
      },
      six: {
         title: "6. Can two or more applicants apply for citizenship by investment together?",
         body: "Yes. Two or more applicants may apply for citizenship together by purchasing one piece of real estate, provided each main applicant contributes the minimum investment.",
      },
      seven: {
         title: "7. Can my family be included with my application?",
         body: "Yes. All permitted dependents (spouse, children, siblings, parents, etc.) can easily be included in your application for economic citizenship, providing the relationship with each dependent meets certain specific basic financial criteria (e.g., economic dependency).",
      },
      eight: {
         title: "8. Who are permitted dependents?",
         body: "Permitted dependents include: a spouse of the main applicant; a child if under 18 years of the main applicant or of his/her spouse; a child if between 18 and 30 years of the main applicant or his/her spouse, who is in full-time attendance at a recognized institution of higher learning after his/her 18th birthday, and who is fully supported by the main applicant; parents and/or grandparents of the main applicant or his/her spouse above the age of 55, living with and supported economically by the main applicant; a child if above the age of 18 of the main applicant or his/ her spouse and who is physically or mentally disabled; and a sibling of the main applicant or his/her spouse who is unmarried, childless, 30 years of age or younger and dependent on the applicant for financial support.",
      },
      nine: {
         title: "9. Does the program recognize same sex marriage?",
         body: "No, the laws of Saint Kitts and Nevis currently define “spouse” as the partner of the opposite sex by marriage.",
      },
      ten: {
         title: "10. What is the maximum number of dependents allowed by a main applicant?",
         body: "There is <b>no limit</b> on the number of permitted dependents.",
      },
      eleven: {
         title: ">11. What are the fees involved?",
         body: "All applicants and permitted dependents are required to pay due diligence and processing fees, which will be presented by the ‘Authorized Person’ at application.",
      },
      twelve: {
         title: "12. Can an applicant remit fees directly to the CIU?",
         body: "No, all applicants are required to pay the processing fees, the due diligence fees as well as the Government fees through their chosen ‘Authorized Person’. Wire transfers to the Unit are only applicable for approved applicants for the remittance of Sustainable Growth Fund contributions.",
      },
      thirteen: {
         title: "13. If I am no longer interested in becoming a citizen, will my monies be refunded?",
         body: "A portion of the application fees can indeed be refunded, with the exception of the due diligence fees, the processing fees and perhaps some of the services charges already executed.",
      },
      fourteen: {
         title: "14. Do I have to reside in Saint Kitts and Nevis in order to apply for citizenship?",
         body: "Residing in Saint Kitts and Nevis is <b>not</b> required when applying for citizenship using the Citizenship by Investment Option.",
      },
      fifteen: {
         title: "15. What is a police certificate and who is required to produce a police certificate?",
         body: "A police certificate refers to a statement from a national law enforcement authority on the status of a person’s criminal record. It is also referred to as “certificate of no criminal record” or “police clearance record”. Each main applicant and all permitted dependents 16 years and older are required to produce a police certificate. Our team can easily provide you with support regarding the obtention of the certificate.",
      },
      sixteen: {
         title: "16. What kind of forms and documents need to be submitted to process the application?",
         body: "There are a few forms (in PDF easily editable format) to complete, as well as certificates (e.g. birth certificate, marriage certificate if applicable, police certificate, etc) to submit, copies of current passport as well as new passport-size photos, power of attorney, etc. Our <b>team will guide you along the process</b> and provide you with the full list of elements to assemble, to ensure a successfull application.",
      },
    },
    contact: {
         title: "Get in touch to learn more",
         body: "We can easily arrange online video meetings early into the process, to help provide you with any additional details.",
         name: "Name",
         email: "Email",
         message: "Message",
    },
  },
  
  fr: {
    title: "PROGRAMME DE CITOYENNETÉ PAR INVESTISSEMENT",
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
    faq: {
      title: "Questions fréquemment posées",
      body: "Voici quelques questions fréquemment posées et des réponses qui pourraient vous être utiles.",
      one: {
         title: "1. Quelles sont les conditions à remplir pour devenir un citoyen de Saint-Kitts-et-Nevis par investissement ?",
         body: "Le \"demandeur principal\" (souvent abrégé en \"MA\" au cours du processus) doit être âgé d'au moins dix-huit (18) ans, doit avoir effectué un investissement du montant prescrit et doit satisfaire aux autres exigences de la demande.",
      },
      two: {
         title: "2. Puis-je contacter directement l'unité \"Citoyenneté par l'investissement\" (CIU) ?",
         body: "Non, le SDI limite sa communication aux \"personnes autorisées\". Une \"personne autorisée\" est une personne ou une entité agréée par la Commission de réglementation des services financiers (FRSC) de Saint-Kitts-et-Nevis et autorisée à fournir des services aux entreprises ou des services fiduciaires à Saint-Kitts-et-Nevis. Une \"personne autorisée\" est désignée par le demandeur principal au moyen d'une procuration limitée pour agir en son nom sur toutes les questions relatives à sa demande de citoyenneté par investissement. La \"personne autorisée\" est tenue de fournir des conseils professionnels, d'aider et de donner des détails concernant le processus et d'aider à la préparation et à la présentation d'une demande de citoyenneté par investissement et de ses documents justificatifs. La \"personne autorisée\" communiquera avec l'Unité de la citoyenneté par investissement et maintiendra un point de contact pour examiner toutes les questions relatives à la demande, effectuer les paiements, soumettre et recueillir toutes les correspondances importantes.",
      },
      three: {
         title: "3. Les formulaires de demande sont-ils disponibles en ligne ?",
         body: "Non, les formulaires de demande de citoyenneté par investissement ne peuvent être obtenus et soumis à l'unité de citoyenneté par investissement que par une \"personne autorisée\".",
      },
      four: {
         title: "4. Combien de temps dure la procédure de candidature ?",
         body: "Le processus de candidature peut prendre de 60 à 90 jours (à compter de la soumission et de l'acceptation de tous les documents), mais peut être retardé en fonction du profil du candidat. Les candidats seront régulièrement informés de l'état d'avancement de leur demande par l'intermédiaire de leur \"personne autorisée\".",
      },
      five: {
         title: "5. Puis-je soumettre ma candidature dans une autre langue que l'anglais?",
         body: "Non. Toutes les demandes et tous les documents qui ne sont pas en anglais ne sont pas prescrits ou acceptés par l'unité de citoyenneté par investissement, et chaque document en langue étrangère doit être soumis avec une version anglaise traduite et certifiée.",
      },
      six: {
         title: "6. Deux ou plusieurs demandeurs peuvent-ils présenter ensemble une demande de citoyenneté par investissement ?",
         body: "Oui. Deux demandeurs ou plus peuvent demander la citoyenneté ensemble en achetant un bien immobilier, à condition que chaque demandeur principal apporte l'investissement minimum.",
      },
      seven: {
         title: "7. Ma famille peut-elle être incluse dans ma demande ?",
         body: "Oui. Toutes les personnes à charge autorisées (conjoint, enfants, frères et sœurs, parents, etc.) peuvent facilement être incluses dans votre demande de citoyenneté économique, à condition que la relation avec chaque personne à charge réponde à certains critères financiers de base spécifiques (par exemple, la dépendance économique).",
      },
      eight: {
         title: "8. Qui sont les personnes à charge autorisées ?",
         body: "Les personnes à charge autorisées sont : le conjoint du demandeur principal ; un enfant si le demandeur principal ou son conjoint a moins de 18 ans ; un enfant si le demandeur principal ou son conjoint a entre 18 et 30 ans, qui fréquente à plein temps un établissement d'enseignement supérieur reconnu après son 18e anniversaire, et qui est entièrement pris en charge par le demandeur principal ; les parents et/ou grands-parents du demandeur principal ou de son conjoint âgés de plus de 55 ans, vivant avec le demandeur principal et bénéficiant de son soutien économique ; un enfant âgé de plus de 18 ans du demandeur principal ou de son conjoint et souffrant d'un handicap physique ou mental ; et un frère ou une sœur du demandeur principal ou de son conjoint, célibataire, sans enfant, âgé de 30 ans ou moins et dépendant du demandeur pour son soutien financier.",
      },
      nine: {
         title: "9. Le programme reconnaît-il les mariages entre personnes de même sexe ?",
         body: "Non, les lois de Saint-Kitts-et-Nevis définissent actuellement le \"conjoint\" comme le partenaire du sexe opposé par le mariage.",
      },
      ten: {
         title: "10. Quel est le nombre maximum de personnes à charge autorisé par un demandeur principal?",
         body: "Il n'y a pas de limite au nombre de personnes à charge autorisées.",
      },
      eleven: {
         title: ">11. Quels sont les frais à payer?",
         body: "Tous les demandeurs et les personnes à charge autorisées doivent payer des frais de diligence raisonnable et de traitement, qui seront présentés par la \"personne autorisée\" lors de la demande.",
      },
      twelve: {
         title: "12. Un demandeur peut-il verser les frais directement au SDI?",
         body: "Non, tous les demandeurs doivent payer les frais de traitement, les frais de diligence raisonnable ainsi que les frais gouvernementaux par l'intermédiaire de la \"personne autorisée\" de leur choix. Les virements électroniques à l'Unité ne sont applicables qu'aux demandeurs approuvés pour le versement des contributions au Fonds de croissance durable.",
      },
      thirteen: {
         title: "13. Si je ne suis plus intéressé par l'acquisition de la citoyenneté, mon argent me sera-t-il remboursé?",
         body: "Une partie des frais de dossier peut en effet être remboursée, à l'exception des frais de diligence raisonnable, des frais de traitement et peut-être de certains frais de services déjà exécutés.",
      },
      fourteen: {
         title: "14. Dois-je résider à Saint-Kitts-et-Nevis pour demander la citoyenneté?",
         body: "Il n'est pas nécessaire de résider à Saint-Kitts-et-Nevis pour demander la citoyenneté en utilisant l'option de citoyenneté par investissement.",
      },
      fifteen: {
         title: "15. Qu'est-ce qu'un certificat de police et qui est tenu de produire un certificat de police?",
         body: "Un certificat de police est une déclaration d'une autorité nationale chargée de l'application de la loi sur l'état du casier judiciaire d'une personne. Il est également appelé \"certificat d'absence de casier judiciaire\" ou \"certificat de police\". Chaque demandeur principal et toutes les personnes à charge autorisées âgées de 16 ans ou plus sont tenus de produire un certificat de police. Notre équipe peut facilement vous fournir un soutien concernant l'obtention de ce certificat.",
      },
      sixteen: {
         title: "16. Quels types de formulaires et de documents doivent être soumis pour traiter la demande?",
         body: "Il y a quelques formulaires (en format PDF facilement modifiable) à remplir, ainsi que des certificats (par exemple, certificat de naissance, certificat de mariage le cas échéant, certificat de police, etc.) à soumettre, des copies du passeport actuel ainsi que de nouvelles photos d'identité, une procuration, etc. Notre équipe vous guidera tout au long du processus et vous fournira la liste complète des éléments à réunir, afin de garantir le succès de votre demande.",
      },
    },
    contact: {
         title: "Prenez contact avec nous pour en savoir plus",
         body: "Nous pouvons facilement organiser des réunions vidéo en ligne au début du processus, afin de vous fournir tous les détails supplémentaires.",
         name: "Nom",
         email: "Courriel",
         message: "Message",
    },
  },
        
  sp: {
    title: "PROGRAMA DE CIUDADANÍA POR INVERSIÓN",
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
    faq: {
      title: "Preguntas frecuentes",
      body: "He aquí algunas preguntas y respuestas frecuentes que pueden resultarle útiles.",
      one: {
         title: "1. ¿Cuáles son los requisitos para convertirse en ciudadano de San Cristóbal y Nieves por inversión?",
         body: "El \"Solicitante Principal\" (a menudo abreviado \"MA\" durante el proceso) debe tener al menos dieciocho (18) años, haber realizado una inversión por el importe prescrito y cumplir otros requisitos de la solicitud.",
      },
      two: {
         title: "2. ¿Puedo ponerme en contacto directamente con la \"Unidad de Ciudadanía por Inversión\" (CIU)?",
         body: "No, el CIU limita su comunicación a las \"Personas autorizadas\". Una \"persona autorizada\" es una persona o entidad aprobada por la Comisión Reguladora de Servicios Financieros (FRSC) de San Cristóbal y Nieves con licencia para llevar a cabo servicios corporativos o fiduciarios en San Cristóbal y Nieves. Una \"Persona Autorizada\" es designada por el solicitante principal mediante un Poder Limitado para actuar en su nombre en relación con todas las cuestiones relativas a su solicitud de Ciudadanía por Inversión. La \"Persona Autorizada\" debe proporcionar asesoramiento profesional, ayudar y dar detalles sobre el proceso y ayudar con la preparación y presentación de una solicitud de Ciudadanía por inversión y sus documentos justificativos. La \"Persona Autorizada\" se comunicará con la Unidad de Ciudadanía por Inversión y mantendrá un punto de contacto para revisar todos los asuntos relacionados con la solicitud, efectuar los pagos y presentar y recoger toda la correspondencia importante.",
      },
      three: {
         title: "3. ¿Están disponibles en línea los formularios de solicitud?",
         body: "No, los formularios de solicitud de Ciudadanía por Inversión sólo pueden ser obtenidos y también presentados a la Unidad de Ciudadanía por Inversión por una \"Persona Autorizada\".",
      },
      four: {
         title: "4. ¿Cuánto dura el proceso de solicitud?",
         body: "El proceso de solicitud puede durar entre 60 y 90 días (a contar desde la presentación y aceptación de todos los documentos), pero puede retrasarse en función del perfil del solicitante. Los solicitantes serán informados periódicamente del estado de sus solicitudes a través de su \"persona autorizada\".",
      },
      five: {
         title: "5. ¿Puedo presentar mi solicitud en un idioma distinto del inglés?",
         body: "No. Todas las solicitudes y documentos que no estén en inglés no son prescritos ni aceptados por la Unidad de Ciudadanía por Inversión, y todo documento en lengua extranjera debe presentarse junto con una versión inglesa traducida y certificada.",
      },
      six: {
         title: "6. ¿Pueden dos o más solicitantes pedir juntos la nacionalidad por inversión?",
         body: "Sí. Dos o más solicitantes pueden solicitar la nacionalidad juntos mediante la compra de un bien inmueble, siempre que cada solicitante principal aporte la inversión mínima.",
      },
      seven: {
         title: "7. ¿Puede mi familia acompañar mi solicitud?",
         body: "Sí. Todos los dependientes permitidos (cónyuge, hijos, hermanos, padres, etc.) pueden incluirse fácilmente en su solicitud de ciudadanía económica, siempre que la relación con cada dependiente cumpla determinados criterios económicos básicos específicos (por ejemplo, dependencia económica).",
      },
      eight: {
         title: "8. ¿Quiénes son las personas a cargo autorizadas?",
         body: "Las personas a cargo permitidas son: el cónyuge del solicitante principal; un hijo si es menor de 18 años del solicitante principal o de su cónyuge; un hijo si tiene entre 18 y 30 años del solicitante principal o de su cónyuge, que asista a tiempo completo a una institución de enseñanza superior reconocida después de cumplir los 18 años y que esté totalmente mantenido por el solicitante principal; los padres y/o abuelos del solicitante principal o de su cónyuge mayores de 55 años, que vivan con el solicitante principal y sean mantenidos económicamente por él; un hijo mayor de 18 años del solicitante principal o de su cónyuge y que esté física o mentalmente discapacitado; y un hermano del solicitante principal o de su cónyuge que no esté casado, no tenga hijos, tenga 30 años o menos y dependa económicamente del solicitante.",
      },
      nine: {
         title: "9. ¿Reconoce el programa el matrimonio entre personas del mismo sexo?",
         body: "No, las leyes de San Cristóbal y Nieves definen actualmente \"cónyuge\" como la pareja del sexo opuesto por matrimonio.",
      },
      ten: {
         title: "10. ¿Cuál es el número máximo de personas a cargo que puede tener un solicitante principal?",
         body: "No hay límite en el número de personas a cargo permitidas.",
      },
      eleven: {
         title: ">11. ¿Cuáles son las tasas?",
         body: "Todos los solicitantes y personas a su cargo autorizadas deben abonar las tasas de diligencia debida y tramitación, que serán presentadas por la \"persona autorizada\" en el momento de la solicitud.",
      },
      twelve: {
         title: "12. ¿Puede un solicitante abonar las tasas directamente al CIU?",
         body: "No, todos los solicitantes deben pagar las tasas de tramitación, las tasas de diligencia debida y las tasas gubernamentales a través de la \"persona autorizada\" que hayan elegido. Las transferencias bancarias a la Unidad sólo son aplicables a los solicitantes aprobados para el envío de las contribuciones al Fondo de Crecimiento Sostenible.",
      },
      thirteen: {
         title: "13. Si ya no me interesa hacerme ciudadano, ¿me devolverán el dinero?",
         body: "De hecho, puede devolverse una parte de las tasas de solicitud, a excepción de las tasas de diligencia debida, las tasas de tramitación y tal vez algunos de los cargos por servicios ya ejecutados.",
      },
      fourteen: {
         title: "14. ¿Tengo que residir en San Cristóbal y Nieves para solicitar la nacionalidad?",
         body: "No es necesario residir en San Cristóbal y Nieves para solicitar la nacionalidad mediante la opción de nacionalidad por inversión.",
      },
      fifteen: {
         title: "15. ¿Qué es un certificado policial y quién está obligado a presentarlo?",
         body: "Un certificado policial es una declaración de una autoridad policial nacional sobre el estado de los antecedentes penales de una persona. También se denomina \"certificado de no antecedentes penales\" o \"certificado de antecedentes policiales\". Cada solicitante principal y todos los dependientes permitidos mayores de 16 años deben presentar un certificado policial. Nuestro equipo puede ayudarle fácilmente en la obtención del certificado.",
      },
      sixteen: {
         title: "16. ¿Qué tipo de formularios y documentos hay que presentar para tramitar la solicitud?",
         body: "Hay unos cuantos formularios (en formato PDF fácilmente editable) que rellenar, así como certificados (por ejemplo, partida de nacimiento, certificado de matrimonio si procede, certificado de la policía, etc.) que presentar, copias del pasaporte actual así como nuevas fotos tamaño carné, poder notarial, etc. Nuestro equipo le guiará a lo largo del proceso y le proporcionará la lista completa de elementos que debe reunir, para garantizar el éxito de su solicitud.",
      },
    },
    contact: {
         title: "Más información",
         body: "Podemos organizar fácilmente videoconferencias en línea al principio del proceso, para ayudarle a obtener cualquier detalle adicional.",
         name: "Nombre",
         email: "Correo electrónico",
         message: "Mensaje",
    },
  },
        
  jp: {
    title: "シチズンシップ・バイ・インベストメント・プログラム",
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
    faq: {
      title: "よくある質問",
      body: "よくあるご質問とその回答をご紹介しています。",
      one: {
         title: "1.  投資によってセントクリストファー・ネイビスの国民になるための条件は何ですか？",
         body: "主申請者」（手続き上、しばしば「MA」と略される）は、18歳以上であること、所定の金額を投資していること、その他の申請要件を満たしていることが必要です。",
      },
      two: {
         title: "2. CIUに直接問い合わせることはできますか？",
         body: "いいえ、CIUは「Authorized Persons」への通信を制限しています。Authorized Person」とは、セントクリストファー・ネイビスの金融サービス規制委員会（FRSC）により、セントクリストファー・ネイビスで法人または信託サービスを行うことを認可された個人または団体を指します。Authorized Person」は、投資による市民権（Citizenship by Investment）申請に関するすべての事柄を代理して行動する限定委任状によって、主申請者から任命されます。Authorized Person \"は、専門的なアドバイスを提供し、手続きに関する詳細やCitizenship by Investmentの申請書およびその添付書類の準備・提出を支援することが求められます。Authorized Person」はCitizenship by Investment Unitと連絡を取り、申請に関する全ての事柄の確認、支払い、全ての重要な通信事項の提出・回収を行うための窓口を維持します。",
      },
      three: {
         title: "3. 応募書類はオンラインで入手できますか？",
         body: "投資による市民権」の申請用紙は、「権限のある人」が入手し、「投資による市民権」ユニットに提出する必要があります。",
      },
      four: {
         title: "4. 応募にはどれくらいの時間がかかりますか？",
         body: "申請手続きには最短で60～90日（すべての書類の提出と受理から起算）かかりますが、申請者のプロファイルによっては遅れることがあります。申請者は、「オーソライズド・パーソン」を通じて、申請状況について定期的に知らされます。",
      },
      five: {
         title: "5. 英語以外の言語で応募することはできますか？",
         body: "英語以外の言語で書かれた申請書や書類は、Citizenship by Investment Unitでは規定・受理していません。また、すべての外国語の書類には、<b>認証された翻訳英語版</b>を添えて提出する必要があります。",
      },
      six: {
         title: "6. 2人以上の申請者が一緒に投資によって市民権を申請することは可能ですか？",
         body: "2人以上の申請者が1つの不動産を購入し、一緒に市民権を申請することも可能です（ただし、各主要申請者が最低投資額を負担することが条件）。",
      },
      seven: {
         title: "7. 家族も一緒に応募できますか？",
         body: "はい。許可されたすべての扶養家族（配偶者、子供、兄弟姉妹、両親など）は、各扶養家族との関係が特定の基本的な経済基準（経済的扶養など）を満たしていれば、簡単に経済国籍取得の申請に含めることができます。",
      },
      eight: {
         title: "8. 扶養家族として認められるのは誰ですか？",
         body: "許可される扶養家族は以下の通りです。主申請者の配偶者、主申請者またはその配偶者の18歳未満の子、主申請者またはその配偶者の18歳から30歳までの子で、18歳の誕生日以降に公認高等教育機関に正規に在籍し、主申請者に完全に扶養されている者。主申請者またはその配偶者の55歳以上の両親および/または祖父母で、主申請者と同居し経済的に援助されている者、主申請者またはその配偶者の18歳以上で身体または精神障害のある子、主申請者またはその配偶者の未婚で子供のいない30歳以下の兄弟で経済的に申請者に扶養されている者。",
      },
      nine: {
         title: "9. プログラムは同性婚を認めていますか？",
         body: "いいえ、現在セントクリストファー・ネイビスの法律では、「配偶者」を婚姻による異性のパートナーと定義しています。",
      },
      ten: {
         title: "10. 主申請者の扶養家族の人数は何人までですか？",
         body: "扶養家族として認められる人数に制限はありません。",
      },
      eleven: {
         title: ">11. 料金はどうなっていますか？",
         body: "すべての申請者および許可された扶養家族は、申請時に「認定者」によって提示されるデューディリジェンスおよび処理手数料を支払う必要があります。",
      },
      twelve: {
         title: "12. 申請者が直接CIUに料金を送金することはできますか？",
         body: "いいえ。すべての申請者は、選択した「認定者」を通じて、手続き費用、デューデリジェンス費用、および政府費用を支払う必要があります。ユニットへの電信送金は、持続可能な成長基金の拠出金を送金するために承認された申請者のみに適用されます。",
      },
      thirteen: {
         title: "13. 市民権を取得する気がなくなった場合、お金は戻ってくるのでしょうか？",
         body: "デューデリジェンス費用、プロセシング費用、そしておそらく既に実行されたサービス料金の一部を除き、申請料金の一部は実際に返金されます。",
      },
      fourteen: {
         title: "14. 市民権を申請するためには、セントクリストファー・ネイビスに居住していなければなりませんか？",
         body: "Citizenship by Investment Optionを利用して市民権を申請する場合、セントクリストファー・ネイビスに居住している必要はありません。",
      },
      fifteen: {
         title: "15. 警察証明書とは何ですか？また、警察証明書を作成する必要があるのはどのような人ですか？",
         body: "警察証明書とは、ある人の犯罪歴の状況について、国の法執行機関が発行する証明書を指します。無犯罪証明書」「ポリスクリアランスレコード」とも呼ばれる。主申請者と16歳以上の許可された扶養家族は、それぞれ警察証明書を提出することが義務付けられています。弊社では、この証明書の取得に関するサポートも行っております。",
      },
      sixteen: {
         title: "16. 申請手続きには、どのような書類や資料が必要ですか？",
         body: "いくつかの書類 証明書（出生証明書、結婚証明書、警察証明書など）、現在のパスポートのコピー、新しいパスポートサイズの写真、委任状などが必要です。私たちのチームは、申請を成功させるために必要な要素のリストを提供し、プロセスを指導します。",
      },
    },
    contact: {
         title: "詳細については、お問い合わせください。",
         body: "私たちは、プロセスの早い段階でオンラインビデオミーティングを簡単に手配し、お客様に詳細な情報を提供することができます。",
         name: "名称",
         email: "電子メール",
         message: "メッセージ",
    },
  },
        
  cn: {
    title: "以投资换取公民权方案",
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
    faq: {
      title: "常见问题",
      body: "以下是一些经常被问到的问题和答案，你可能会觉得有用。",
      one: {
         title: "1. 通过投资成为圣基茨和尼维斯公民有哪些要求",
         body: "主申请人\"（在此过程中通常缩写为 \"MA\"）必须至少年满十八（18）岁，必须进行了规定数额的投资，并且必须满足其他申请要求。",
      },
      two: {
         title: "2. 我可以直接联系 \"投资入籍组\"（CIU）吗？",
         body: "不，CIU只限于与 \"被授权人 \"沟通。授权人 \"是指经圣基茨和尼维斯金融服务监管委员会（FRSC）批准的个人或实体，获准在圣基茨和尼维斯开展企业或信托服务。被授权人 \"由主申请人通过有限授权书的方式指定，代表他们处理与投资入籍申请有关的所有事宜。被授权人 \"需要提供专业意见，协助并提供有关程序的细节，并帮助准备和提交投资入籍申请及其支持文件。授权人 \"将与投资入籍部门沟通，并保持一个联络点，以审查所有与申请有关的事项，付款，提交和收集所有重要的信件。",
      },
      three: {
         title: "3. 申请表是否在网上提供？",
         body: "不，投资入籍的申请表格只能由 \"授权人 \"获得并提交给投资入籍部门。",
      },
      four: {
         title: "4. 申请过程需要多长时间？",
         body: "申请过程可能只需要60-90天（从提交和接受所有文件开始计算），但根据申请人的情况可能会推迟。申请人将通过其 \"授权人 \"定期获知其申请的状况。",
      },
      five: {
         title: "5. 我可以用英语以外的语言提交我的申请吗？",
         body: "不可以。所有非英语的申请和文件都不被投资入籍组规定或接受，每一份外语文件都必须与经过认证的英文翻译版本一起提交。",
      },
      six: {
         title: "6. 两个或更多的申请人可以一起申请投资入籍吗？",
         body: "是的，两个或更多的申请人可以通过购买一块房地产来共同申请入籍，前提是每个主要申请人都要贡献最低的投资。",
      },
      seven: {
         title: "7. 我的家人可以和我的申请一起被列入吗？",
         body: "是的。所有允许的家属（配偶、子女、兄弟姐妹、父母等）都可以很容易地包括在你的经济公民权申请中，只要与每个家属的关系符合某些特定的基本财务标准（如经济依赖）。",
      },
      eight: {
         title: "8. 哪些人是允许的家属？",
         body: "允许的家属包括 主申请人的配偶；主申请人或其配偶的18岁以下的子女；主申请人或其配偶的18至30岁的子女，在其18岁生日后在公认的高等教育机构全职学习，并由主申请人完全抚养。主申请人或其配偶的父母和/或祖父母，年龄在55岁以上，与主申请人共同生活并由其提供经济支持；主申请人或其配偶的18岁以上的子女，身体或精神残疾；主申请人或其配偶的兄弟姐妹，未婚、无子女、年龄在30岁或以下，并依靠申请人提供经济支持。",
      },
      nine: {
         title: "9. 该计划是否承认同性婚姻？",
         body: "不，圣基茨和尼维斯的法律目前将 \"配偶 \"定义为婚姻中的异性伴侣。",
      },
      ten: {
         title: "10. 一个主申请人最多允许有多少名家属？",
         body: "对允许的受抚养人数量没有限制。",
      },
      eleven: {
         title: ">11. 所涉及的费用是什么？",
         body: "所有申请人和获准的家属都需要支付尽职调查和处理费用，这些费用将由 \"授权人 \"在申请时出示。",
      },
      twelve: {
         title: "12. 申请人能否直接将费用汇给CIU？",
         body: "不，所有申请人都需要通过他们选择的 \"授权人 \"来支付处理费、尽职调查费以及政府费用。电汇到该单位只适用于获准汇出可持续增长基金捐款的申请人。",
      },
      thirteen: {
         title: "13. 如果我不再对成为公民感兴趣，我的钱会被退还吗？",
         body: "部分申请费确实可以退还，但尽职调查费、处理费以及可能已经执行的一些服务费除外。",
      },
      fourteen: {
         title: "14. 我必须居住在圣基茨和尼维斯才能申请入籍吗？",
         body: "使用投资入籍方案申请入籍时，不需要居住在圣基茨和尼维斯。",
      },
      fifteen: {
         title: "15. 什么是警察证书，谁需要出示警察证书？",
         body: "警方证明是指国家执法机关对一个人的犯罪记录状况的声明。它也被称为 \"无犯罪记录证明 \"或 \"警方清除记录\"。每个主申请人和所有被允许的16岁及以上的受抚养人都需要出具一份警方证明。我们的团队可以很容易地为您提供有关获得该证书的支持。",
      },
      sixteen: {
         title: "16. 处理申请时需要提交什么样的表格和文件？",
         body: "这里有一些 表格（PDF格式，易于编辑），以及需要提交的证书（如出生证、结婚证（如适用）、警察证等）、现有护照的复印件以及新的护照照片、委托书等。我们的团队将指导你完成这一过程，并为你提供完整的要素清单，以确保申请的成功。",
      },
    },
    contact: {
         title: "联系我们以了解更多信息",
         body: "我们可以很容易地在过程的早期安排在线视频会议，以帮助向你提供任何额外的细节。",
         name: "命名",
         email: "电子邮件",
         message: "留言",
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
document.getElementById("benefits-button").innerHTML = translations[selectedLanguage].learnButton;

document.getElementById("faq-title").innerHTML = translations[selectedLanguage].faq.title;
document.getElementById("faq-body").innerHTML = translations[selectedLanguage].faq.body;
document.getElementById("faq-one-title").innerHTML = translations[selectedLanguage].faq.one.title;
document.getElementById("faq-one-body").innerHTML = translations[selectedLanguage].faq.one.body;
document.getElementById("faq-two-title").innerHTML = translations[selectedLanguage].faq.two.title;
document.getElementById("faq-two-body").innerHTML = translations[selectedLanguage].faq.two.body;
document.getElementById("faq-three-title").innerHTML = translations[selectedLanguage].faq.three.title;
document.getElementById("faq-three-body").innerHTML = translations[selectedLanguage].faq.three.body;
document.getElementById("faq-four-title").innerHTML = translations[selectedLanguage].faq.four.title;
document.getElementById("faq-four-body").innerHTML = translations[selectedLanguage].faq.four.body;
document.getElementById("faq-five-title").innerHTML = translations[selectedLanguage].faq.five.title;
document.getElementById("faq-five-body").innerHTML = translations[selectedLanguage].faq.five.body;
document.getElementById("faq-six-title").innerHTML = translations[selectedLanguage].faq.six.title;
document.getElementById("faq-six-body").innerHTML = translations[selectedLanguage].faq.six.body;
document.getElementById("faq-seven-title").innerHTML = translations[selectedLanguage].faq.seven.title;
document.getElementById("faq-seven-body").innerHTML = translations[selectedLanguage].faq.seven.body;
document.getElementById("faq-eight-title").innerHTML = translations[selectedLanguage].faq.eight.title;
document.getElementById("faq-eight-body").innerHTML = translations[selectedLanguage].faq.eight.body;
document.getElementById("faq-nine-title").innerHTML = translations[selectedLanguage].faq.nine.title;
document.getElementById("faq-nine-body").innerHTML = translations[selectedLanguage].faq.nine.body;
document.getElementById("faq-ten-title").innerHTML = translations[selectedLanguage].faq.ten.title;
document.getElementById("faq-ten-body").innerHTML = translations[selectedLanguage].faq.ten.body;
document.getElementById("faq-eleven-title").innerHTML = translations[selectedLanguage].faq.eleven.title;
document.getElementById("faq-eleven-body").innerHTML = translations[selectedLanguage].faq.eleven.body;
document.getElementById("faq-twelve-title").innerHTML = translations[selectedLanguage].faq.twelve.title;
document.getElementById("faq-twelve-body").innerHTML = translations[selectedLanguage].faq.twelve.body;
document.getElementById("faq-thirteen-title").innerHTML = translations[selectedLanguage].faq.thirteen.title;
document.getElementById("faq-thirteen-body").innerHTML = translations[selectedLanguage].faq.thirteen.body;
document.getElementById("faq-fourteen-title").innerHTML = translations[selectedLanguage].faq.fourteen.title;
document.getElementById("faq-fourteen-body").innerHTML = translations[selectedLanguage].faq.fourteen.body;
document.getElementById("faq-fifteen-title").innerHTML = translations[selectedLanguage].faq.fifteen.title;
document.getElementById("faq-fifteen-body").innerHTML = translations[selectedLanguage].faq.fifteen.body;
document.getElementById("faq-sixteen-title").innerHTML = translations[selectedLanguage].faq.sixteen.title;
document.getElementById("faq-sixteen-body").innerHTML = translations[selectedLanguage].faq.sixteen.body;

document.getElementById("contact-title").innerHTML = translations[selectedLanguage].contact.title;
document.getElementById("contact-body").innerHTML = translations[selectedLanguage].contact.body;
document.getElementById("contact-name").innerHTML = translations[selectedLanguage].contact.name;
document.getElementById("contact-email").innerHTML = translations[selectedLanguage].contact.email;
document.getElementById("contact-message").innerHTML = translations[selectedLanguage].contact.message;

// Add listener to selector to update language
languageSelector.addEventListener("change", function(event) {
  window.location = `?lang=${event.target.value}`;
});
