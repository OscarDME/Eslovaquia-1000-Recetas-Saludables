// lib/copy.js — CELÝ viditeľný obsah landing page.
// Všetky zmeny textu sa robia tu. Komponenty načítavajú dáta výhradne z tohto objektu.

export const copy = {
  metadata: {
    title: "1000 zdravých receptov 2.0",
    description:
      "1000 zdravých receptov 2.0 pre diabetikov: chutné, jednoduché a vytvorené špeciálne pre kontrolu hladiny cukru v krvi. Špeciálna ponuka: 8.90 € + 5 bonusov zadarmo.",
    lang: "sk",
  },

  brand: {
    name: "",
    tagline: "",
  },

  hero: {
    banner: "TÁTO PONUKA + BONUSY ZADARMO VYPRŠIA O:",
    timerLabels: { days: "Dni", hours: "Hod", minutes: "Min", seconds: "Sek" },
    kicker: "Viac ako 2 000 ľudí už zmenilo svoj život",
    headlinePre: "Viac ako 2 000 ľudí",
    headlineHighlight: "si zlepšilo zdravie",
    headlinePost: "vďaka našim 1000 receptom",
    subheadline: "Cukrovka nie je výhovorka, prečo si odopierať dobré jedlo!",
    supporting:
      "Zlepši si zdravie a zároveň si vychutnaj úžasné chute s našimi 1000 zdravými receptami 2.0.",
    cta: "Chcem knihu teraz! 📖",
    imageAlt: "E-kniha 1000 zdravých receptov 2.0 pre diabetikov",
    trustChips: [
      { icon: "⭐", text: "+2 000 ľudí" },
      { icon: "🎁", text: "5 bonusov zadarmo" },
      { icon: "🛡️", text: "7-dňová záruka" },
    ],
  },

  story: {
    headlinePre: "Vedel si, že zlá strava môže zvýšiť riziko",
    headlineHighlight: "komplikácií pri cukrovke",
    headlinePost: "rýchlo a úplne nepozorovane?",
    intro:
      "Na každom jedinom súste záleží. To, čo zješ dnes, rozhoduje o tom, ako sa budeš cítiť zajtra. A keď žiješ s cukrovkou, malé chyby sa nabaľujú potichu a nepozorovane.",
    problemsLead: "Toto hrozí, ak budeš ignorovať svoju stravu a jesť hocičo:",
    problems: [
      {
        title: "Prudké výkyvy cukru v krvi",
        desc: "Zlá strava spôsobuje nebezpečné skoky v hladine cukru, čo vedie k nenávratnému poškodeniu nervov, očí a obličiek.",
      },
      {
        title: "Nekontrolovateľné priberanie",
        desc: "Nezdravé jedlo často vedie k priberaniu na váhe, čo môže výrazne zhoršiť celkový stav tvojej cukrovky.",
      },
      {
        title: "Zvýšené riziko srdcových chorôb",
        desc: "Zlé stravovacie návyky rapídne zvyšujú riziko ochorení srdca, ktoré sú jednou z hlavných príčin úmrtí u diabetikov.",
      },
      {
        title: "Problémy s trávením",
        desc: "Niektoré bežné suroviny môžu spôsobovať intoleranciu, nepríjemnú zápchu, plynatosť a celkový diskomfort po jedle.",
      },
    ],
    visualImage: "/story-apple-donut.webp",
    visualImageAlt: "Jedna ruka so zeleným jablkom a druhá s ružovou šiškou: na výbere záleží",
    solutionBadge: "Riešenie",
    solutionHeadline:
      "Chceš sa naučiť jesť chutne a zdravo bez toho, aby si zanedbával svoju cukrovku?",
  },

  benefits: {
    forYouHeadline: "Táto e-kniha je presne pre teba, ak...",
    forYouItems: [
      {
        icon: "Heart",
        title: "Máš cukrovku alebo sa staráš o niekoho, kto ňou trpí",
        desc: "Nájdeš tu recepty navrhnuté tak, aby udržali cukor na uzde, no bez toho, aby si stratil pôžitok z dobrého jedla.",
      },
      {
        icon: "Sparkles",
        title: "Chceš si zjednodušiť zdravé varenie",
        desc: "Zdravé stravovanie nemusí byť veda: dáme ti jasné, stručné a rýchle postupy.",
      },
      {
        icon: "Users",
        title: "Hľadáš chutné a jednoduché recepty pre celú rodinu",
        desc: "Jedlá, na ktorých si pochutnajú všetci doma, nielen ten, kto má cukrovku.",
      },
    ],
    headline: "Čo všetko získaš vďaka 1000 zdravým receptom 2.0",
    items: [
      {
        icon: "ChefHat",
        title: "Zdravé a chutné jedlá",
        desc: "Ktoré bude tvoja rodina milovať, nech už ide o raňajky, obed alebo večeru.",
      },
      {
        icon: "ListChecks",
        title: "Postupy krok za krokom",
        desc: "Ľahko pochopiteľné, aj keď v kuchyni zrovna neexceluješ.",
      },
      {
        icon: "ShoppingBasket",
        title: "Dostupné a bežné suroviny",
        desc: "Všetko potrebné kúpiš v najbližšom supermarkete za rohom.",
      },
      {
        icon: "Lightbulb",
        title: "Tipy a triky od skúsených kuchárov",
        desc: "Aby si varil s istotou a dokázal jedlo vždy perfektne dochutiť.",
      },
      {
        icon: "Apple",
        title: "Starostlivo vybrané živiny",
        desc: "Naučíš sa dať svojmu telu presne to palivo, ktoré momentálne potrebuje.",
      },
      {
        icon: "Wheat",
        title: "Dokonalú kontrolu nad sacharidmi",
        desc: "Úplne bez odopierania si obľúbenej chuti alebo rozmanitosti na tanieri.",
      },
      {
        icon: "Activity",
        title: "Stabilnú hladinu cukru v krvi",
        desc: "Recepty, ktoré ti pomôžu udržať si čísla pod prísnou kontrolou.",
      },
      {
        icon: "HeartPulse",
        title: "Zlepšenie celkového zdravia",
        desc: "Pocítiš príval energie, lepšie trávenie a oveľa vyššiu kvalitu života.",
      },
    ],
    socialProof:
      "S našimi 1000 zdravými receptami 2.0 pre diabetikov sa ľuďom presne ako si ty podarilo dostať cukor pod kontrolu, zhodiť prebytočné kilá a vrátiť si radosť zo života.",
  },

  features: {
    headline: "Čo všetko táto e-kniha obsahuje?",
    subheadline: "Všetko, čo potrebuješ na to, aby si jedol chutne, zdravo a bez zbytočného stresovania sa.",
    items: [
      {
        icon: "Utensils",
        title: "Chutné a zdravé recepty",
        desc: "Obrovská rozmanitosť vyvážených jedál – od parádnych obedov a večerí až po zdravé omáčky a lahodné krémy.",
      },
      {
        icon: "BookOpen",
        title: "Základy zdravého varenia pre diabetikov",
        desc: "Zistíš, ako presne sú tieto jedlá navrhnuté tak, aby do bodky spĺňali tvoje špecifické potreby.",
      },
      {
        icon: "Lightbulb",
        title: "Praktické kulinárske vychytávky",
        desc: "Objavíš užitočné triky, vďaka ktorým bude čas strávený v kuchyni oveľa príjemnejší a kratší.",
      },
      {
        icon: "Replace",
        title: "Sprievodcu zdravými náhradami",
        desc: "Pochopíš, ktoré suroviny sú najlepší kamoši s cukrovkou a čím múdro nahradiť tie škodlivé.",
      },
      {
        icon: "Gift",
        title: "Extra výhody navyše",
        desc: "K nákupu dnes získaš exkluzívne darčeky a okamžitý prístup do nášho VIP klubu.",
      },
    ],
  },

  bonuses: {
    badge: "BONUSY ZADARMO",
    headline: "Len na obmedzený čas získaš týchto 5 darčekov",
    subheadline: "Súčasťou dnešného nákupu e-knihy sú úplne zadarmo.",
    freeLabel: "ZADARMO!",
    items: [
      {
        image: "/bonuses/sopas.webp",
        tag: "BONUS 1",
        title: "E-kniha: 100 zdravých polievok",
        desc: "Obsahuje 100 výborných receptov na teplé polievky s nízkym obsahom sacharidov a cukrov.",
        value: "15 €",
      },
      {
        image: "/bonuses/batidos.webp",
        tag: "BONUS 2",
        title: "E-kniha: 67 zdravých smoothies",
        desc: "67 receptov na osviežujúce smoothies, ktoré sú chudobné na sacharidy a úplne bez pridaného cukru.",
        value: "15 €",
      },
      {
        image: "/bonuses/snacks.webp",
        tag: "BONUS 3",
        title: "E-kniha: 100 zdravých snackov",
        desc: "100 super nápadov na rýchle a zdravé maškrtenie bez výčitiek pre ľudí s cukrovkou.",
        value: "15 €",
      },
      {
        image: "/bonuses/planificador.webp",
        tag: "BONUS 4",
        title: "E-kniha: Plánovač jedálnička",
        desc: "Šikovný a praktický plánovač, s ktorým si extrémne uľahčíš organizáciu denného menu.",
        value: "15 €",
      },
      {
        image: "/bonuses/membresia.webp",
        tag: "BONUS 5",
        title: "VIP Klub s výhodami",
        desc: "Získaš nárok na budúce aktualizácie, 7-dňovú záruku a trvalú zľavu na ďalšie produkty z nášho katalógu.",
        value: "20 €",
      },
    ],
    totalLabel: "Celková hodnota bonusov: 80 € — Dnes ich máš: ZADARMO",
    footer: "Všetko ti doručíme digitálne a bleskovo priamo na e-mail hneď po nákupe.",
  },

  testimonials: {
    headline: "Čo hovoria naši zákazníci",
    subheadline:
      "Reálni ľudia zdieľajú svoje úprimné skúsenosti s 1000 zdravými receptami 2.0 pre diabetikov.",
    productLabel: "1000 zdravých receptov 2.0 pre diabetikov",
    reviewedLabel: "ohodnotil/a",
    rating: "5★",
    actions: { like: "Páči sa mi to", comment: "Komentovať", share: "Zdieľať" },
    items: [
      {
        name: "Peter Kováč",
        text:
          "Hľadal som jednoduché recepty z bežných surovín. Táto kniha má neskutočne chutné jedlá a stačí pár krokov, aby ste si doma fakt dobre zamaškrtili. Odporúčam všetkými desiatimi!",
      },
      {
        name: "Mária Nováková",
        text:
          "Môj najväčší strach po tom, čo mi diagnostikovali cukrovku bol, že už nikdy nebudem môcť jesť to, čo mi chutí. Tieto recepty sú ale super a keďže je kniha digitálna, mám ju stále v mobile, aj keď idem na nákup.",
      },
      {
        name: "Júlia Tóthová",
        text:
          "Ako mama dieťaťa s cukrovkou bolo pre mňa čisté peklo nájsť jedlo, ktoré by chutilo úplne celej rodine. Táto e-kniha nám priniesla pestrosť a neskutočný pokoj. Doma majú tieto recepty obrovský úspech.",
      },
      {
        name: "Zuzana Vargová",
        text:
          "Keď manželovi zistili cukrovku, táto kniha mi extrémne pomohla. Sú to úplne obyčajné recepty, žiadne drahé a čudné suroviny a chutia výborne. Určite odporúčam!",
      },
      {
        name: "Anna Poláková",
        text:
          "Knihu určite odporúčam: mňamkové a hlavne ľahké recepty. Vďaka za bonusy zadarmo, ten plánovač jedálnička je úplne ideálny na to, aby som mala v strave systém.",
      },
      {
        name: "Ivan Hrubý",
        text:
          "Tento e-book mi úplne zmenil štýl varenia. Predtým som si musel variť prísne oddelene od zvyšku rodiny. Teraz jeme všetci to isté, bez zbytočných komplikácií. Obrovská vďaka!",
      },
    ],
    cta: "CHCEM ZAČAŤ EŠTE DNES",
  },

  finalCta: {
    preHeadline: "TVOJ ČAS JE PRÁVE TERAZ",
    urgencyTop: "ZĽAVA 80%",
    headline:
      "ZÍSKAJ NAŠU DIGITÁLNU KNIHU EŠTE DNES S BRUTÁLNOU ZĽAVOU!",
    subUrgency:
      "Už viac ako 2 000 ľudí si vďaka týmto receptom dalo zdravie dokopy. Dnes si na rade ty.",
    bundleList: [
      "E-kniha: 1000 zdravých receptov 2.0 pre diabetikov",
      "Bonus 1 — 100 zdravých polievok",
      "Bonus 2 — 67 zdravých smoothies",
      "Bonus 3 — 100 zdravých snackov",
      "Bonus 4 — Plánovač jedálnička",
      "Bonus 5 — VIP Klub s výhodami",
    ],
    imageAlt: "Kompletný balíček 1000 zdravých receptov 2.0 + 5 bonusov",
    guaranteeText:
      "Stále váhaš? Nemaj stres, s nami nič neriskuješ! Tvoje zdravie si to zaslúži. Máš našu 100% garanciu vrátenia peňazí na 7 dní.",
    guaranteeImageAlt: "Záruka",
    regularPriceLabel: "Pôvodne",
    regularPrice: "25.00 €",
    offerPrice: "8.90 €",
    discountBadge: "ZĽAVA 80%",
    urgencyText: "PLATBA PREBEHNE BEZPEČNE VO VAŠEJ DOMÁCEJ MENE",
    bottomUrgency: "Táto uvádzacia ponuka vyprší, keď časovač dosiahne nulu.",
    button: "VYUŽI TÚTO PRÍLEŽITOSŤ EŠTE DNES",
    trustRow: "100% bezpečná platba · Okamžitý prístup · 7-dňová záruka",
  },

  faq: {
    authorRole: "Tím pre zdravú výživu",
    authorHeadline: "Chutné jedlo, ktoré sa zároveň stará o tvoje zdravie",
    authorBio:
      "Sme presvedčení, že cukrovka by ťa nikdy nemala pripraviť o radosť z dobrého jedla. Každý jeden recept sme vytvorili tak, aby si si pochutil bez akýchkoľvek výčitiek a pritom si udržal glukózu pevne pod kontrolou.",
    authorImageAlt: "Náš tím",
    worksHeadline: "Pre koho TÁTO e-kniha URČITE NIE JE?",
    doesntWork: [
      "Pre ľudí, ktorí chcú do seba tlačiť nezdravé jedlá a myslia si, že to nebude mať následky",
      "Pre ľudí, ktorí nie sú vôbec ochotní skúšať nové chute",
      "Pre ľudí, ktorí očakávajú zázraky, no nechcú pre to urobiť ani najmenšiu zmenu",
    ],
    worksText:
      "Ale ak hľadáš skutočné, jednoduché, chutné a cukrovke stopercentne prispôsobené recepty, táto kniha je napísaná presne pre teba.",
    headline: "Často Kladené Otázky (FAQ)",
    subheadline: "Všetko, čo potrebuješ vedieť predtým, ako sa do toho pustíš.",
    items: [
      {
        q: "Ako dostanem knihu po zaplatení?",
        a: "Je to bleskovka. Hneď po nákupe ti do mailu cinkne odkaz na stiahnutie. Môžeš ju potom pohodlne čítať v mobile, na tablete alebo rovno v počítači.",
      },
      {
        q: "V akom formáte e-kniha vlastne je?",
        a: "Je to vysokokvalitný PDF formát, prispôsobený na pohodlné čítanie na každom zariadení, takže si ju vôbec nemusíš tlačiť (jedine, ak by si chcel).",
      },
      {
        q: "Sú tieto recepty vhodné pre diabetikov 1. aj 2. typu?",
        a: "Jasné, recepty sú špeciálne navrhnuté tak, aby pomáhali s kontrolou cukru v krvi pri oboch typoch. Vždy však pre istotu odporúčame prebrať radikálne zmeny v jedálničku aj so svojím lekárom.",
      },
      {
        q: "Budem musieť zháňať nejaké divné alebo predražené suroviny?",
        a: "Vôbec nie. Vo všetkých receptoch používame len bežné a overené potraviny, ktoré nájdeš v každom normálnom supermarkete za úplne prijateľné ceny.",
      },
      {
        q: "Mám pri kúpe nejakú záruku?",
        a: "Samozrejme. Dávame ti 7-dňovú plnú garanciu. Ak náhodou nebudeš s receptami spokojný, vrátime ti 100 % peňazí a nebudeme sa ťa na nič pýtať.",
      },
      {
        q: "Môžem platiť vo svojej lokálnej mene?",
        a: "Áno. Suma sa ti počas nákupu v košíku automaticky prepočíta a zobrazí v tvojej domácej mene podľa aktuálneho kurzu.",
      },
    ],
  },

  closing: {
    kicker: "POSLEDNÝ KROK",
    headline: "Tvoje zdravie už nemôže dlhšie čakať",
    subheadline:
      "Už dnes môžeš začať jesť chutne a s radosťou, bez toho, aby si zanedbával svoju cukrovku. Zajtra už táto cena naozaj nemusí byť dostupná.",
    regularPrice: "25.00 €",
    offerPrice: "8.90 €",
    ctaLabel: "VYUŽI TÚTO PRÍLEŽITOSŤ EŠTE DNES",
    trustRow: "Bezpečná platba · Okamžitý prístup · 7-dňová záruka",
  },

  footer: {
    brand: "CREARIS",
    copyright: "Copyright © crearis.online ® 2026",
    disclaimer:
      "Tento web nie je súčasťou webu Facebook ani spoločnosti Facebook Inc. Navyše, tento web NIE JE žiadnym spôsobom schválený, podporovaný ani sponzorovaný spoločnosťou Facebook.",
    trademark: "FACEBOOK je registrovaná ochranná známka spoločnosti FACEBOOK, Inc.",
  },
};