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
  },
  
  fr: {
    banner: {
      title: "CITOYENNETÉ",
      body: "PAR PROGRAMME D'INVESTISSEMENT",
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
  },
        
  sp: {
    banner: {
      title: "CIUDADANÍA",
      body: "POR PROGRAMA DE INVERSIÓN",
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
  },
        
  jp: {
    banner: {
      title: "市民権",
      body: "投資プログラム別",
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

// Add listener to selector to update language
languageSelector.addEventListener("change", function(event) {
  window.location = `?lang=${event.target.value}`;
});
