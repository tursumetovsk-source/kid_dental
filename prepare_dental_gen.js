const fs = require("fs");
const path = require("path");
const QRCode = require("qrcode");

let qrCodeSvg = "";
QRCode.toString("https://dentalgen.pro", {
  type: "svg",
  margin: 0,
  color: {
    dark: "#2f2076",
    light: "#ffffff"
  }
}, (err, svg) => {
  if (!err) qrCodeSvg = svg.replace(/[\r\n]+/g, "").trim();
});

const target = path.join(__dirname, "index.html");
const kidsGamePath = path.join(__dirname, "kids-game.html");
const kidsGameHtml = fs.existsSync(kidsGamePath) ? fs.readFileSync(kidsGamePath, "utf8") : "";
let html = fs.readFileSync(target, "utf8");

const sourceReplacements = [
  ["Maggie App | Free Activities for Mums and Kids Near You", "DENTAL GEN | Детская стоматология в Иваново"],
  ["Maggie is a free app that helps mums find local activities, events, and things to do with their kids. Made by mums, for mums - discover what’s on near you, fast.", "Детская стоматология DENTAL GEN в Иваново. Профилактика, лечение и сопровождение детей от первых зубов до школы."],
  ["https://apps.apple.com/au/app/maggie/id6744465756", "tel:+79109900060"],
  ["https://www.instagram.com/the.maggie.app/", "https://dentalgen.pro"],
  ["https://www.tiktok.com/@the.maggie.app?is_from_webapp=1&sender_device=pc", "https://dentalgen.pro"],
  ["https://framerusercontent.com/images/cPnGqHhtwBpGrXXtBcKiQc0AK24.svg", "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E"],
  ["https://framerusercontent.com/images/WxwG65LkMnPfhgxSlyow6l2YfI.webp", "assets/dental-gen/first-teeth.jpg"],
  ["https://framerusercontent.com/images/82HvwLj8KJ9opS3N2jwyEddSqU.webp", "assets/dental-gen/protected-smile.jpg"],
  ["https://framerusercontent.com/images/XCBp0qK3erxlToFfQCiUPPtpLIY.webp", "assets/dental-gen/straight-smile.jpg"],
  ["https://framerusercontent.com/images/asdTVq5eB5kVUD6YXq9TX8LwkWg.jpg", "assets/dental-gen/first-teeth.jpg"],
  ["https://framerusercontent.com/images/AIzczk3gvJhgMHTQ0URn2fAyri8.jpg", "assets/dental-gen/programs-family.jpg"],
  ["https://framerusercontent.com/images/0jlYoHSHgRVur8HQ9A4geAdDkg.webp", "assets/dental-gen/protected-smile.jpg"],
  ["https://framerusercontent.com/images/75zbzaCkMonr3FlE4QsbWsKEJgM.webp", "assets/dental-gen/about-family.jpg"],
  ["https://framerusercontent.com/images/Cs4Q3UrszrYx8F7vZqwPXaT44.jpg", "assets/dental-gen/straight-smile.jpg"],
  ["https://framerusercontent.com/images/l4jcjPXQacAxMYP4yPewOtxLmU.jpg", "assets/dental-gen/contact.jpg"],
  ["https://framerusercontent.com/images/B78M0IdC6u4wmJdlwHrwDS7Ss.jpg", "assets/dental-gen/first-teeth.jpg"],
  ["https://framerusercontent.com/images/3qagTfcy987zODTJlMq8rgK2IO4.webp", "assets/dental-gen/programs.jpg"],
  ["https://framerusercontent.com/images/r2k4Pm177d1uTwd03VSiPwXuDc.jpg", "assets/dental-gen/straight-smile.jpg"],
  ["https://framerusercontent.com/images/zSolWhtGIr9vVEf34WY6vkVsOUY.jpg", "assets/dental-gen/about-family.jpg"],

  // Header and Navigation
  [">FAQS<", ">ПРОГРАММЫ<"],
  [">FAQ<", ">ПРОГРАММЫ<"],
  [">ABOUT<", ">О КЛИНИКЕ<"],
  [">About<", ">О клинике<"],
  [">CONTACT<", ">КОНТАКТЫ<"],
  [">Contact<", ">Контакты<"],
  [">ADD VENUE<", ">ЧЕКАП<"],
  [">Add venue<", ">Чекап<"],
  [">POLICIES<", ">КОНТАКТЫ<"],
  [">Policies<", ">Контакты<"],

  // Hero & Sub-banner
  ["meet maggie", "детская стоматология DENTAL GEN"],
  ["Meet Maggie", "Детская стоматология DENTAL GEN"],
  ["MEET MAGGIE", "ДЕТСКАЯ СТОМАТОЛОГИЯ DENTAL GEN"],
  ["Ваш карманный гид по родительству: одно занятие за раз.", "Здоровая улыбка сегодня — уверенность и счастье на всю жизнь!"],
  ["ВАШ КАРМАННЫЙ ГИД ПО РОДИТЕЛЬСТВУ: ОДНО ЗАНЯТИЕ ЗА РАЗ.", "ЗДОРОВАЯ УЛЫБКА СЕГОДНЯ — УВЕРЕННОСТЬ И СЧАСТЬЕ НА ВСЮ ЖИЗНЬ!"],
  ["Ваш карманный", "Здоровая улыбка"],
  ["ВАШ КАРМАННЫЙ", "ЗДОРОВАЯ УЛЫБКА"],
  ["гид по родительству:", "сегодня — уверенность"],
  ["ГИД ПО РОДИТЕЛЬСТВУ:", "СЕГОДНЯ — УВЕРЕННОСТЬ"],
  ["гид по", "сегодня —"],
  ["родительству:", "уверенность"],
  ["одно занятие", "и счастье"],
  ["ОДНО ЗАНЯТИЕ", "И СЧАСТЬЕ"],
  ["за раз.", "на всю жизнь!"],
  ["ЗА РАЗ.", "НА ВСЮ ЖИЗНЬ!"],
  ["за раз", "на всю жизнь!"],
  ["ЗА РАЗ", "НА ВСЮ ЖИЗНЬ!"],
  ["Your pocket guide to surviving parenthood, one activity at a time.", "Здоровая улыбка сегодня — уверенность на всю жизнь."],
  ["YOUR POCKET GUIDE TO SURVIVING PARENTHOOD, ONE ACTIVITY AT A TIME.", "ЗДОРОВАЯ УЛЫБКА СЕГОДНЯ — УВЕРЕННОСТЬ НА ВСЮ ЖИЗНЬ."],
  ["Your pocket", "Здоровая улыбка"],
  ["guide to", "сегодня —"],
  ["surviving", "уверенность"],
  ["parenthood,", "и счастье"],
  ["one activity", "на всю"],
  ["at a time.", "жизнь!"],
  ["YOUR POCKET", "ЗДОРОВАЯ УЛЫБКА"],
  ["GUIDE TO", "СЕГОДНЯ —"],
  ["SURVIVING", "УВЕРЕННОСТЬ"],
  ["PARENTHOOD,", "И СЧАСТЬЕ"],
  ["ONE ACTIVITY", "НА ВСЮ"],
  ["AT A TIME.", "ЖИЗНЬ!"],
  ["AT A TIME", "ЖИЗНЬ!"],
  ["FIND FREE SANITY—SAVING ACTIVITIES FASTER THAN YOUR TODDLER CAN EMPTY THE TUPPERWARE DRAWER", "РАСТЁМ СО ЗДОРОВОЙ УЛЫБКОЙ БЫСТРЕЕ, ЧЕМ ВАШ МАЛЫШ ДОЙДЕТ ДО ШКОЛЬНОЙ СКАМЬИ!"],
  ["FIND FREE SANITY-SAVING ACTIVITIES FASTER THAN YOUR TODDLER CAN EMPTY THE TUPPERWARE DRAWER", "РАСТЁМ СО ЗДОРОВОЙ УЛЫБКОЙ БЫСТРЕЕ, ЧЕМ ВАШ МАЛЫШ ДОЙДЕТ ДО ШКОЛЬНОЙ СКАМЬИ!"],
  ["FIND FREE", "РАСТЁМ СО"],
  ["SANITY—SAVING", "ЗДОРОВОЙ"],
  ["SANITY-SAVING", "ЗДОРОВОЙ"],
  ["ACTIVITIES", "УЛЫБКОЙ"],
  ["FASTER THAN", "ОТ ПЕРВЫХ"],
  ["YOUR TODDLER", "ЗУБОВ ДО"],
  ["Can EMPTY THE", "ШКОЛЬНОЙ"],
  ["CAN EMPTY THE", "ШКОЛЬНОЙ"],
  ["EMPTY THE", "ШКОЛЬНОЙ"],
  ["TUPPERWARE", "СКАМЬИ"],
  ["DRAWER", "ВМЕСТЕ"],
  ["Drawer", "Вместе"],
  ["You're welcome !", "DENTAL GEN рядом!"],
  ["You're welcome!", "DENTAL GEN рядом!"],

  // Mission & Intro
  ["С MAGGIE ВЫ МОЖЕТЕ:", "С DENTAL GEN ВЫ МОЖЕТЕ:"],
  ["С MAGGIE", "С DENTAL GEN"],
  ["WITH MAGGIE YOU CAN:", "С DENTAL GEN ВЫ МОЖЕТЕ:"],
  ["WITH MAGGIE", "С DENTAL GEN"],
  ["YOU CAN:", "ВЫ МОЖЕТЕ:"],
  ["FIND ACTIVITIES IN YOUR LOCAL AREA", "3 ПРОГРАММЫ ПО ВОЗРАСТУ ДЛЯ ЗДОРОВЫХ ЗУБОК"],
  ["FIND ACTIVITIES", "3 ПРОГРАММЫ"],
  ["in your Local area", "по возрасту"],
  ["IN YOUR LOCAL AREA", "ПО ВОЗРАСТУ"],
  ["pack the drinks", "чистим зубки"],
  ["pack the", "чистим"],
  [">drinks<", ">зубки<"],
  [">breakfast<", ">завтрак<"],
  ["ballet class", "урок гигиены"],
  [">ballet<", ">урок<"],
  [">class<", ">гигиены<"],
  ["Because making memories shouldn't be another thing on your to-do list.", "Три программы по возрасту помогают вовремя заботиться о зубах и прикусе ребёнка."],
  ["snaaacks", "перекусы"],
  ["pack the dummy", "взять соску"],
  [">dummy<", ">соска<"],
  ["mooore snacks", "полезные фрукты"],
  [">mooore<", ">полезные<"],
  [">snacks<", ">фрукты<"],

  // Mission Headline Text Block (Mobile + Desktop)
  ["OUR APP is oN", "DENTAL GEN"],
  ["OUR APP IS ON", "DENTAL GEN"],
  ["Our app is on", "DENTAL GEN"],
  ["A mission to", "ПОМОГАЕТ"],
  ["A MISSION TO", "ПОМОГАЕТ"],
  ["a mission to", "помогает"],
  ["help lighten", "РАСТИТЬ"],
  ["HELP LIGHTEN", "РАСТИТЬ"],
  ["parents'", "ЗДОРОВУЮ"],
  ["PARENTS'", "ЗДОРОВУЮ"],
  ["Mental load", "УЛЫБКУ"],
  ["MENTAL LOAD", "УЛЫБКУ"],
  ["mental load", "улыбку"],
  ["OUR APP IS ON \nA MISSION TO \nHELP LIGHTEN \nPARENTS'\nMENTAL LOAD", "DENTAL GEN \nПОМОГАЕТ \nРАСТИТЬ \nЗДОРОВУЮ \nУЛЫБКУ"],
  ["OUR APP IS ON A MISSION TO HELP LIGHTEN PARENTS' MENTAL LOAD", "DENTAL GEN ПОМОГАЕТ РАСТИТЬ ЗДОРОВУЮ УЛЫБКУ"],

  // Our Story
  ["Maggie started with two mums, a few wines, and one big idea:", "DENTAL GEN растёт вместе с вашим ребёнком:"],
  ["MAGGIE STARTED WITH TWO MUMS, A FEW WINES, AND ONE BIG IDEA:", "DENTAL GEN РАСТЁТ ВМЕСТЕ С ВАШИМ РЕБЁНКОМ:"],
  ["MAGGIE НАЧАЛОСЬ С ДВУХ МАМ, БОКАЛА ЧАЯ И ОДНОЙ БОЛЬШОЙ ИДЕИ:", "DENTAL GEN РАСТЁТ ВМЕСТЕ С ВАШИМ РЕБЁНКОМ:"],
  ["MAGGIE НАЧАЛОСЬ С ДВУХ МАМ", "DENTAL GEN РАСТЁТ"],
  ["БОКАЛА ЧАЯ И ОДНОЙ БОЛЬШОЙ ИДЕИ:", "ВМЕСТЕ С ВАШИМ РЕБЁНКОМ:"],
  ["БОКАЛА ЧАЯ И ОДНОЙ БОЛЬШОЙ ИДЕИ", "ВМЕСТЕ С ВАШИМ РЕБЁНКОМ"],
  ["A FEW WINES, AND ONE BIG IDEA:", "ВМЕСТЕ С ВАШИМ РЕБЁНКОМ:"],
  ["A FEW WINES, AND ONE BIG IDEA", "ВМЕСТЕ С ВАШИМ РЕБЁНКОМ"],
  ["Maggie is for every parent who has ever felt overwhelmed, isolated, or just out of ideas.", "Для каждого возраста — свой план профилактики, лечения и спокойного знакомства со стоматологом."],
  ["Maggie is for every parent", "Для каждого возраста"],
  ["who has ever felt overwhelmed, isolated, or just out of ideas.", "свой план заботы и лечения без слёз и страха."],
  ["is for every", "для каждого"],
  ["parent who", "родителя,"],
  ["has ever felt", "кто заботится"],
  ["overwhelmed,", "о здоровье"],
  ["isolated, or", "и красивой"],
  ["just out", "улыбке"],
  ["of ideas.", "малыша."],
  ["Learn more about our story", "Подберите программу для ребёнка"],
  ["LEARN MORE ABOUT OUR STORY", "ПОДБЕРИТЕ ПРОГРАММУ ДЛЯ РЕБЁНКА"],
  ["Learn more about", "Подберите программу"],
  ["our story", "для ребёнка"],
  ["READ MORE", "ВЫБРАТЬ ПРОГРАММУ"],
  ["Read More", "Выбрать программу"],
  ["Read more", "Выбрать программу"],

  // 5000 Activities / Stats
  ["MORE\nTHAN", "БОЛЕЕ"],
  ["MORE THAN", "БОЛЕЕ"],
  ["Free activities and kid-friendly parks across Australia.", "Причин улыбнуться — и у каждого ребёнка своя."],
  ["FREE ACTIVITIES AND KID-FRIENDLY PARKS ACROSS AUSTRALIA.", "ПРИЧИН УЛЫБНУТЬСЯ — И У КАЖДОГО РЕБЁНКА СВОЯ."],
  ["Maggie has you covered", "DENTAL GEN всегда рядом"],
  ["Maggie has you covered.", "DENTAL GEN всегда рядом."],
  ["MAGGIE HAS YOU COVERED", "DENTAL GEN ВСЕГДА РЯДОМ"],

  // Footer & Download & Actions
  ["turn chaos into chuckles with Maggie!", "Здоровая улыбка — уверенность на всю жизнь!"],
  ["TURN CHAOS INTO CHUCKLES WITH MAGGIE!", "ЗДОРОВАЯ УЛЫБКА — УВЕРЕННОСТЬ НА ВСЮ ЖИЗНЬ!"],
  ["turn chaos", "здоровая улыбка"],
  ["into chuckles", "сегодня —"],
  ["with Maggie!", "уверенность на всю жизнь!"],
  ["TURN CHAOS", "ЗДОРОВАЯ УЛЫБКА"],
  ["INTO CHUCKLES", "СЕГОДНЯ —"],
  ["Download on the", "ЗАПИСАТЬСЯ"],
  ["Download on the ", "ЗАПИСАТЬСЯ "],
  ["Download on", "ЗАПИСАТЬСЯ"],
  ["DOWNLOAD ON THE", "ЗАПИСАТЬСЯ"],
  ["DOWNLOAD ON", "ЗАПИСАТЬСЯ"],
  ["Скачать в", "ЗАПИСАТЬСЯ"],
  ["скачать в", "записаться"],
  ["СКАЧАТЬ В", "ЗАПИСАТЬСЯ"],
  ["Скачать", "ЗАПИСАТЬСЯ"],
  ["скачать", "записаться"],
  ["СКАЧАТЬ", "ЗАПИСАТЬСЯ"],
  ["request", "ПОЗВОНИТЬ"],
  ["REQUEST", "ПОЗВОНИТЬ"],
  ["© 2025 Maggie", "© 2026 DENTAL GEN"],
  ["© 2026 Maggie", "© 2026 DENTAL GEN"]
];

for (const [from, to] of sourceReplacements) html = html.split(from).join(to);
html = html.replace(/\s*<!-- Start of HubSpot Embed Code -->[\s\S]*?<!-- End of HubSpot Embed Code -->\s*/g, "\n");
if (!html.includes('rel="preload" href="https://framerusercontent.com/assets/9l4OI1VWlPcLpOtefC36ItDWgI.woff2"')) {
  html = html.replace('<meta charset="utf-8">', '<meta charset="utf-8">\n\t<link rel="preload" href="https://framerusercontent.com/assets/9l4OI1VWlPcLpOtefC36ItDWgI.woff2" as="font" type="font/woff2" crossorigin>');
}

// Strip existing enhancement block if present to ensure clean rebuild
html = html.replace(/<!-- DENTAL_GEN_LANDING_BEGIN -->[\s\S]*?<!-- DENTAL_GEN_LANDING_END -->\n?/gi, "");

const enhancement = String.raw`
<!-- DENTAL_GEN_LANDING_BEGIN -->
<style>
  :root, body, .framer-body {
    --token-b046c22b-c137-497c-96ff-f3a9a46997c0: #2f2076 !important;
    --token-4e62a4ec-2401-4414-9211-46bb168422e7: #fff0a8 !important;
    --token-288746f0-d590-4619-a720-61d6ac501a74: #e9dcff !important;
    --token-79490f52-792b-4c44-b60e-f24a02163a28: #ffe0ed !important;
    --token-395b9473-9876-463e-9de4-2f87fbd8a1d3: #dff4ff !important;
    --token-4c81cc5a-0ef3-499f-8b97-80de09631c0a: #ffe59a !important;
    --token-3cf441d7-edfe-47fb-95dc-1899b0597681: #fffdf5 !important;
  }
  html, body, #main, [data-framer-root], #main > div,
  .framer-e1aT5, .framer-72rtr7, .framer-5zf2A, .framer-PNpUn, .framer-qYJia, .framer-ZpczY {
    height: auto !important;
    min-height: 0 !important;
    max-height: none !important;
  }
  html body [data-framer-cursor],
  html body [data-framer-cursor] * { cursor: auto !important; }
  html body a, html body button, html body [role="button"],
  html body .dg-safe-arrow { cursor: pointer !important; }
  html body input, html body textarea { cursor: text !important; }
  /* Header Nav Center DG Menu Button */
  [data-framer-name="Header Nav"] .framer-1w10930-container {
    width: 60px !important;
    height: 60px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
  [data-framer-name="Header Nav"] .framer-1w10930-container a {
    width: 100% !important;
    height: 100% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    border-radius: 50% !important;
    text-decoration: none !important;
  }
  [data-framer-name="Header Nav"] .framer-1w10930-container [data-framer-name="Button Shape"] {
    width: 54px !important;
    height: 54px !important;
    min-width: 54px !important;
    min-height: 54px !important;
    border-radius: 50% !important;
    border: 2.5px solid #2f2076 !important;
    background: #ffe59a !important;
    box-shadow: -3px 3px 0 #2f2076 !important;
    padding: 0 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    transition: transform .18s ease, box-shadow .18s ease, background .18s ease !important;
  }
  [data-framer-name="Header Nav"] .framer-1w10930-container a:hover [data-framer-name="Button Shape"] {
    transform: scale(1.08) translate(-1px, -1px) !important;
    box-shadow: -5px 5px 0 #2f2076 !important;
    background: #fffdf5 !important;
  }
  [data-framer-name="Header Nav"] .framer-1w10930-container [data-framer-name="Logo"] {
    position: static !important;
    width: auto !important;
    height: auto !important;
    border: none !important;
    background: none !important;
    box-shadow: none !important;
    margin: 0 !important;
  }
  [data-framer-name="Header Nav"] .framer-1w10930-container [data-framer-name="Logo"] img {
    display: none !important;
  }
  [data-framer-name="Header Nav"] .framer-1w10930-container [data-framer-name="Logo"]::after {
    content: "DG";
    display: block !important;
    color: #2f2076 !important;
    font: 900 22px/1 "Montserrat", "Rubik", sans-serif !important;
    letter-spacing: -0.04em !important;
    text-align: center !important;
  }
  .framer-6mir23-container [data-framer-name="Logo"] img[src*="framerusercontent"] { opacity: 0 !important; }
  .framer-6mir23-container [data-framer-name="Logo Mobile"],
  [data-framer-name="Logo Mobile"],
  .framer-o5vylo,
  img[src*="cPnGqHhtwBpGrXXtBcKiQc0AK24"] {
    opacity: 0 !important;
    display: none !important;
    visibility: hidden !important;
    pointer-events: none !important;
  }
  .framer-6mir23-container [data-framer-name="Logo"] {
    opacity: 0 !important;
    position: absolute !important;
    top: 50% !important;
    left: 50% !important;
    right: auto !important;
    bottom: auto !important;
    width: 94vw !important;
    height: auto !important;
    min-height: clamp(110px, 20vw, 380px) !important;
    transform: translate(-50%, -50%) !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    overflow: visible !important;
  }
  .framer-6mir23-container [data-framer-name="Logo"] > * { visibility: hidden !important; }
  .framer-6mir23-container::after {
    content: "DENTAL GEN";
    position: fixed;
    inset: 0;
    z-index: 2;
    display: grid;
    place-items: center;
    white-space: nowrap;
    color: #2f2076;
    font-family: "BN Dime Display Regular", "Rubik", "Arial Black", sans-serif;
    font-size: clamp(34px, 11vw, 360px);
    font-weight: 900;
    line-height: .78;
    letter-spacing: -.035em;
    text-align: center;
    pointer-events: none;
    transition: opacity .22s ease;
  }
  .framer-6mir23-container:has([data-framer-name^="Hidden"])::after { opacity: 0; }
  [data-framer-name="App Store"] svg,
  [data-framer-name="Android"] svg { display: none !important; }
  /* Desktop & Mobile Old Template Hero Elements - Completely Hidden & Zero Height */
  [data-framer-name="Hero"] > *:not(.dg-hero-custom-canvas) {
    display: none !important;
    height: 0 !important;
    min-height: 0 !important;
    max-height: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
    border: none !important;
    opacity: 0 !important;
    visibility: hidden !important;
    pointer-events: none !important;
    overflow: hidden !important;
  }

  /* Custom Hero Canvas matching the illustration */
  [data-framer-name="Hero"] {
    position: relative !important;
    width: 100% !important;
    min-height: auto !important;
    height: auto !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: flex-start !important;
    background: #fff7d6 !important;
    padding: clamp(8px, 1.2vw, 18px) 16px clamp(12px, 2vw, 24px) !important;
    margin-top: 0 !important;
    box-sizing: border-box !important;
    overflow: hidden !important;
  }

  .dg-hero-custom-canvas {
    position: relative;
    width: min(920px, 100%);
    margin: 0 auto !important;
    padding-top: 0 !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    z-index: 10;
  }

  /* Surrounding Doodles */
  .dg-hero-doodles {
    position: absolute;
    inset: -10px;
    pointer-events: none;
    z-index: 1;
  }
  .dg-doodle {
    position: absolute;
    pointer-events: none;
  }
  .dg-doodle-star-tl {
    top: -10px;
    left: 3%;
    width: clamp(34px, 4.5vw, 50px);
    height: clamp(34px, 4.5vw, 50px);
    animation: dgFloatSlow 6s ease-in-out infinite alternate;
  }
  .dg-doodle-star-tc {
    top: -28px;
    left: 49%;
    width: clamp(26px, 3.5vw, 38px);
    height: clamp(26px, 3.5vw, 38px);
    animation: dgFloatSlow 5s ease-in-out infinite alternate-reverse;
  }
  .dg-doodle-star-tr {
    top: -12px;
    right: 7%;
    width: clamp(32px, 4vw, 46px);
    height: clamp(32px, 4vw, 46px);
    animation: dgFloatSlow 7s ease-in-out infinite alternate;
  }
  .dg-doodle-heart-tr {
    top: 2px;
    right: 3%;
    width: clamp(32px, 4.2vw, 46px);
    height: clamp(30px, 4vw, 42px);
    animation: dgFloatSlow 5.5s ease-in-out infinite alternate;
  }
  .dg-doodle-star-mr {
    top: 32%;
    right: 3%;
    width: clamp(30px, 3.8vw, 42px);
    height: clamp(30px, 3.8vw, 42px);
    animation: dgFloatSlow 6.5s ease-in-out infinite alternate-reverse;
  }
  .dg-doodle-planet {
    top: 26%;
    left: 0%;
    width: clamp(60px, 8vw, 95px);
    height: clamp(46px, 6.5vw, 75px);
    animation: dgFloatPlanet 8s ease-in-out infinite alternate;
  }
  .dg-doodle-trail {
    top: 28%;
    left: 8%;
    width: clamp(260px, 60vw, 680px);
    height: clamp(90px, 18vw, 200px);
    opacity: 0.85;
  }
  .dg-doodle-rocket {
    top: 28%;
    right: 12%;
    width: clamp(55px, 8vw, 85px);
    height: clamp(55px, 8vw, 85px);
    animation: dgRocketHover 4s ease-in-out infinite alternate;
  }

  @keyframes dgFloatSlow {
    0% { transform: translateY(0) rotate(0deg); }
    100% { transform: translateY(-8px) rotate(6deg); }
  }
  @keyframes dgFloatPlanet {
    0% { transform: translateY(0) rotate(-4deg); }
    100% { transform: translateY(-10px) rotate(4deg); }
  }
  @keyframes dgRocketHover {
    0% { transform: translate(0, 0) rotate(0deg); }
    100% { transform: translate(6px, -8px) rotate(4deg); }
  }

  /* Main Handwritten Headline */
  .dg-hero-headline-wrap {
    position: relative;
    z-index: 2;
    text-align: center;
    margin-top: 0 !important;
    margin-bottom: clamp(14px, 2vw, 26px) !important;
    max-width: 860px;
    width: 100%;
  }
  .dg-hero-cursive-title,
  h1.dg-hero-cursive-title,
  div.dg-hero-cursive-title {
    display: flex !important;
    opacity: 1 !important;
    visibility: visible !important;
    pointer-events: auto !important;
    margin: 0 auto !important;
    font-family: "Caveat", cursive, sans-serif !important;
    font-size: clamp(36px, 5.2vw, 70px) !important;
    font-weight: 700 !important;
    line-height: 1.15 !important;
    color: #17184f !important;
    letter-spacing: -0.01em !important;
    text-shadow: 0 1px 0 rgba(255,255,255,0.6);
    flex-direction: column !important;
    align-items: center !important;
    text-align: center !important;
  }
  .dg-hero-cursive-title span,
  .dg-hero-cursive-title .dg-hct-line {
    display: block !important;
    opacity: 1 !important;
    visibility: visible !important;
    color: #17184f !important;
  }
  .dg-hct-line-1 { font-size: 1.04em !important; }
  .dg-hct-line-2 { font-size: 1em !important; }
  .dg-hct-line-3 { font-size: 0.95em !important; }
  .dg-hct-line-4 { font-size: 1.08em !important; }

  /* Bottom Card */
  .dg-hero-bottom-card {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 780px;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: clamp(14px, 2.5vw, 28px);
    align-items: center;
    padding: clamp(4px, 1vw, 10px) 10px;
    margin-top: 0 !important;
    box-sizing: border-box;
  }

  /* Contacts Column */
  .dg-hero-contacts-col {
    display: flex;
    flex-direction: column;
    gap: clamp(14px, 2vw, 22px);
  }
  .dg-hero-contact-item {
    display: flex;
    align-items: center;
    gap: clamp(10px, 1.6vw, 16px);
    text-decoration: none;
    color: #17184f;
    transition: transform .2s ease;
  }
  a.dg-hero-contact-item:hover {
    transform: translateX(4px);
  }
  .dg-hero-icon-badge {
    width: clamp(38px, 4.5vw, 48px);
    height: clamp(38px, 4.5vw, 48px);
    min-width: clamp(38px, 4.5vw, 48px);
    border-radius: 50%;
    background: #ffdf70;
    display: grid;
    place-items: center;
    box-shadow: 0 3px 8px rgba(230, 126, 34, 0.15);
  }
  .dg-hero-icon-badge svg {
    width: clamp(20px, 2.4vw, 26px);
    height: clamp(20px, 2.4vw, 26px);
  }
  .dg-hero-contact-text {
    font-family: "Rubik", "Montserrat", sans-serif;
    font-size: clamp(15px, 1.8vw, 21px);
    font-weight: 700;
    line-height: 1.3;
    color: #17184f;
    letter-spacing: -0.01em;
  }

  /* Divider */
  .dg-hero-divider {
    position: relative;
    width: 2px;
    height: clamp(120px, 16vw, 180px);
    background: #c5b5ee;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
  }
  .dg-hero-divider-star {
    background: #fff7d6;
    color: #8e78db;
    font-size: 16px;
    padding: 4px 0;
    display: block;
  }

  /* QR Column */
  .dg-hero-qr-col {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: clamp(12px, 2vw, 22px);
  }
  .dg-hero-qr-caption-wrap {
    position: relative;
    text-align: right;
  }
  .dg-hero-qr-caption {
    margin: 0;
    font-family: "Caveat", cursive, sans-serif;
    font-size: clamp(18px, 2.2vw, 25px);
    font-weight: 700;
    line-height: 1.15;
    color: #6b52ae;
  }
  .dg-hero-qr-arrow {
    position: absolute;
    right: -14px;
    bottom: -24px;
    width: 38px;
    height: 38px;
    pointer-events: none;
  }
  .dg-hero-qr-box {
    width: clamp(130px, 15vw, 170px);
    height: clamp(130px, 15vw, 170px);
    min-width: clamp(130px, 15vw, 170px);
    border: 2.5px solid #8e78db;
    border-radius: 24px;
    background: #ffffff;
    padding: 10px;
    box-sizing: border-box;
    display: grid;
    place-items: center;
    box-shadow: 0 8px 20px rgba(142, 120, 219, 0.15);
    transition: transform .25s ease, box-shadow .25s ease;
    text-decoration: none;
  }
  .dg-hero-qr-box:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 28px rgba(142, 120, 219, 0.25);
  }
  .dg-hero-qr-img {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .dg-hero-qr-img svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  /* Responsive for mobile */
  @media (max-width: 767px) {
    .dg-hero-bottom-card {
      grid-template-columns: 1fr;
      gap: 28px;
      justify-items: center;
      padding: 10px;
    }
    .dg-hero-contacts-col {
      width: 100%;
      align-items: flex-start;
      gap: 16px;
    }
    .dg-hero-divider {
      width: 80%;
      height: 2px;
      margin: 4px 0;
    }
    .dg-hero-divider-star {
      padding: 0 6px;
    }
    .dg-hero-qr-col {
      width: 100%;
      justify-content: center;
      flex-direction: row;
      gap: 18px;
    }
    .dg-hero-qr-caption-wrap {
      text-align: left;
    }
    .dg-hero-qr-arrow {
      right: -20px;
      bottom: -15px;
      transform: rotate(-10deg);
    }
    .dg-doodle-planet {
      top: 36%;
      left: -8px;
      width: 58px;
    }
    .dg-doodle-rocket {
      top: 38%;
      right: 2%;
      width: 52px;
    }
    .dg-doodle-trail {
      display: none;
    }
  }
  /* Intro & Mission Headline - Hidden as requested */
  [data-framer-name="Intro"],
  #intro-block,
  .framer-hhon,
  [data-framer-name="Intro"] [data-framer-name="Content"],
  [data-framer-name="Intro"] h1,
  [data-framer-name="Mission Headline"],
  .framer-1j6imtw,
  [data-framer-name="Headline"],
  [data-framer-name="Android"],
  .dg-remove-google,
  [data-framer-name="Intro"] img,
  [data-framer-name="Intro"] [data-framer-name^="Rectangle"],
  [data-framer-name="Stickers L"],
  [data-framer-name="Stickers R"],
  [data-framer-name="Breakfast"],
  [data-framer-name="Drinks"],
  [data-framer-name="Banana"],
  [data-framer-name="Dummy"],
  [data-framer-name="Dress"],
  [data-framer-name="Snaaacks"],
  [data-framer-name*="Sticker"],
  [data-framer-name="5000 Activities"] [data-framer-name*="Sticker"],
  .framer-1ymkmky,
  .framer-ymzrbp,
  .framer-dxh1mn,
  .framer-1pzn978,
  .framer-1gbadff,
  .framer-1250tq,
  .framer-13x6f8b,
  .framer-12pk2gu,
  .framer-1i7tb2a-container,
  .framer-1tqddnu,
  [data-framer-name="Mission"] .framer-1tqddnu,
  [data-framer-name="Mission"] h2,
  [data-framer-name="Mission"] [data-framer-name*="While we can"],
  [data-framer-name="Our Story"],
  [data-framer-name="5000 Activities"],
  #our-story { display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important; height: 0 !important; min-height: 0 !important; max-height: 0 !important; margin: 0 !important; padding: 0 !important; overflow: hidden !important; }
  [data-framer-name="CTA"],
  [data-framer-name="Footer"] { visibility: hidden !important; pointer-events: none !important; display: none !important; }
  /* Mission & Big Headings - Compact spacing without letter overlap */
  .framer-1ns25zk,
  [data-framer-name="Text Block"] [data-framer-name="Text"],
  [data-framer-name="Mission"] [data-framer-name="Text"] {
    display: flex !important;
    flex-direction: column !important;
    gap: clamp(2px, 0.4vw, 6px) !important;
    overflow: visible !important;
  }

  .framer-1zvc67,
  [data-framer-name="Text Block"] [data-framer-component-type="RichTextContainer"],
  [data-framer-name="Mission"] [data-framer-component-type="RichTextContainer"] {
    display: flex !important;
    flex-direction: column !important;
    gap: clamp(2px, 0.4vw, 6px) !important;
    overflow: visible !important;
  }

  .framer-styles-preset-1vtes3p,
  .framer-styles-preset-1vtes3p:not(.rich-text-wrapper),
  .framer-styles-preset-1vtes3p.rich-text-wrapper h1,
  [data-styles-preset="enPo6VwCM"],
  [data-styles-preset="enPo6VwCM"] h1,
  [data-framer-name="Text Block"] h1,
  [data-framer-name="Mission"] h1,
  #mission-block h1,
  .framer-fit-text h1 {
    --framer-line-height: 0.98 !important;
    --framer-paragraph-spacing: 0px !important;
    line-height: 0.98 !important;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  /* SVG ForeignObject line height for mobile/desktop */
  svg foreignObject,
  [data-framer-name="Mission"] svg foreignObject,
  [data-framer-name="Text Block"] svg foreignObject {
    overflow: visible !important;
  }

  svg foreignObject h1,
  svg foreignObject .framer-text,
  .framer-fit-text h1,
  .framer-fit-text .framer-text {
    line-height: 0.98 !important;
    --framer-line-height: 98% !important;
  }

  svg foreignObject h1 span,
  svg foreignObject .framer-text span {
    line-height: 0.98 !important;
    display: inline-block !important;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  [data-framer-name="Header Nav"] [data-framer-name="Left"],
  [data-framer-name="Header Nav"] [data-framer-name="Right"] {
    display: flex !important;
    align-items: center !important;
    gap: 10px !important;
  }
  [data-framer-name="Header Nav"] [data-framer-name="Left"] > *,
  [data-framer-name="Header Nav"] [data-framer-name="Right"] > * {
    margin: 0 !important;
  }
  [data-framer-name="Header Nav"] [data-framer-name="About"] {
    margin: 0 !important;
  }
  [data-framer-name="Header Nav"] a,
  [data-framer-name="Header Nav"] [data-framer-name="Button Shape"],
  [data-framer-name="Header Nav"] .framer-mabw1n-container,
  [data-framer-name="Header Nav"] .framer-1h31bhu-container,
  [data-framer-name="Header Nav"] .framer-1l11jz8-container,
  [data-framer-name="Header Nav"] .framer-1yjcmra-container {
    width: auto !important;
    min-width: max-content !important;
    white-space: nowrap !important;
  }
  [data-framer-name="Intro"] *,
  [data-framer-name="Our Story"] *,
  [data-framer-name^="Feature"] * { will-change: auto !important; }

  /* Hide residual template feature sliders */
  .framer-1ugzc8k-container,
  .framer-1a733vd-container,
  .framer-6mir23-container,
  [data-framer-name^="Feature"] {
    display: none !important;
  }

  [data-framer-name="Intro"].dg-parent-story-section {
    width: 100% !important;
    height: auto !important;
    min-height: 0 !important;
    padding: clamp(72px, 8vw, 124px) 24px clamp(110px, 11vw, 168px) !important;
    box-sizing: border-box !important;
    overflow: hidden !important;
    background: #ffe9ed !important;
    color: #17184f !important;
  }
  .dg-parent-story {
    position: relative;
    width: min(1160px, 100%);
    margin: 0 auto;
    font-family: "BN Dime Display Regular", "Rubik", sans-serif;
  }
  /* Header Nav (No white background bar, transparent/natural) */
  [data-framer-name="Header Nav"] {
    background: transparent !important;
    border-bottom: none !important;
    box-shadow: none !important;
  }

  /* Compact Parent Questions Card in Our Story */
  [data-framer-name="Our Story"],
  .framer-i8ark0,
  [data-framer-name="Our Story"] [data-framer-name="Photo"],
  .framer-1w90jnq,
  .framer-1vj2nrk,
  .framer-1qol9e7,
  .framer-u8d1dt,
  .framer-135qynf {
    height: auto !important;
    min-height: 0 !important;
    max-height: none !important;
    overflow: visible !important;
    place-content: center !important;
    align-items: center !important;
  }

  [data-framer-name="Our Story"] [data-framer-name="Photo"],
  .framer-1w90jnq {
    position: relative !important;
    width: 100% !important;
    max-width: 860px !important;
    margin: 0 auto !important;
    height: auto !important;
    padding: clamp(20px, 3.5vw, 44px) 16px !important;
    box-sizing: border-box !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    overflow: visible !important;
  }

  [data-framer-name="Our Story"] [data-framer-name="Photo"] [data-framer-name="Photo Frame"],
  [data-framer-name="Our Story"] [data-framer-name="Photo"] img {
    display: none !important;
  }

  .dg-parent-questions-section {
    position: relative !important;
    width: 100% !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    background: #ffffff !important;
    padding: clamp(24px, 3.5vw, 44px) 20px clamp(28px, 4vw, 52px) !important;
    box-sizing: border-box !important;
    z-index: 5 !important;
    overflow: hidden !important;
  }

  .dg-pq-container {
    position: relative;
    width: min(1040px, 100%);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    z-index: 2;
  }

  /* Surrounding Doodles */
  .dg-pq-doodles {
    position: absolute;
    inset: -20px;
    pointer-events: none;
    z-index: 1;
  }
  .dg-pq-doodle {
    position: absolute;
    pointer-events: none;
  }
  .dg-pq-doodle-star-tl {
    top: 0%;
    left: -20px;
    width: 36px;
    height: 36px;
    animation: gentleFloat 3s infinite alternate ease-in-out;
  }
  .dg-pq-doodle-star-tr {
    top: 2%;
    right: 20px;
    width: 34px;
    height: 34px;
    animation: gentleFloat 3.5s infinite alternate-reverse ease-in-out;
  }
  .dg-pq-doodle-planet-tr {
    top: 10%;
    right: -25px;
    width: 54px;
    height: 40px;
  }
  .dg-pq-doodle-star-ml {
    top: 24%;
    left: -28px;
    width: 34px;
    height: 34px;
  }
  .dg-pq-doodle-heart-ml {
    top: 42%;
    left: -32px;
    width: 34px;
    height: 30px;
    animation: gentleFloat 4s infinite alternate ease-in-out;
  }
  .dg-pq-doodle-star-mr {
    top: 32%;
    right: -25px;
    width: 36px;
    height: 36px;
  }
  .dg-pq-doodle-star-ry {
    top: 38%;
    right: -10px;
    width: 26px;
    height: 26px;
  }
  .dg-pq-doodle-star-ll {
    top: 56%;
    left: -25px;
    width: 32px;
    height: 32px;
  }
  .dg-pq-doodle-shooting-star {
    top: 58%;
    right: -20px;
    width: 70px;
    height: 50px;
  }
  .dg-pq-doodle-star-bl {
    bottom: -10px;
    left: -15px;
    width: 34px;
    height: 34px;
  }
  .dg-pq-doodle-moon-bc {
    bottom: -15px;
    left: 48%;
    transform: translateX(-50%);
    width: 44px;
    height: 44px;
  }
  .dg-pq-doodle-star-br {
    bottom: -10px;
    right: -15px;
    width: 34px;
    height: 34px;
  }

  /* 3 Speech Bubbles - Checkerboard Staggered (Шахматный порядок) */
  .dg-pq-bubbles-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: clamp(10px, 1.4vw, 16px);
    margin-bottom: clamp(18px, 2.5vw, 28px);
  }
  .dg-pq-speech-bubble {
    position: relative;
    background: #ffffff;
    border-radius: 22px;
    padding: clamp(10px, 1.2vw, 15px) clamp(16px, 2vw, 24px);
    display: flex;
    align-items: center;
    gap: clamp(10px, 1.5vw, 18px);
    box-sizing: border-box;
    transition: transform .2s ease;
  }
  .dg-pq-speech-bubble:hover {
    transform: translateY(-2px);
  }
  /* Card 1: Left */
  .dg-pq-speech-bubble--purple {
    border: 2.2px solid #8e62d4;
    border-bottom-left-radius: 4px;
    align-self: flex-start;
    width: min(640px, 86%);
    box-shadow: 0 3px 12px rgba(142, 98, 212, 0.07);
  }
  /* Card 2: Right */
  .dg-pq-speech-bubble--teal {
    border: 2.2px solid #00b4a7;
    border-bottom-left-radius: 4px;
    align-self: flex-end;
    width: min(640px, 86%);
    box-shadow: 0 3px 12px rgba(0, 180, 167, 0.07);
  }
  /* Card 3: Left / center offset */
  .dg-pq-speech-bubble--pink {
    border: 2.2px solid #f04d6f;
    border-bottom-left-radius: 4px;
    align-self: flex-start;
    margin-left: clamp(20px, 4.5vw, 64px);
    width: min(640px, 86%);
    box-shadow: 0 3px 12px rgba(240, 77, 111, 0.07);
  }

  .dg-pq-bubble-qmark {
    font-family: "Caveat", cursive, sans-serif;
    font-size: clamp(32px, 4vw, 46px);
    font-weight: 700;
    line-height: 0.8;
    flex-shrink: 0;
  }
  .dg-pq-speech-bubble--purple .dg-pq-bubble-qmark { color: #8e62d4; }
  .dg-pq-speech-bubble--teal .dg-pq-bubble-qmark { color: #00b4a7; }
  .dg-pq-speech-bubble--pink .dg-pq-bubble-qmark { color: #f04d6f; }

  .dg-pq-bubble-text {
    font-family: "Rubik", "Montserrat", sans-serif;
    font-size: clamp(14px, 1.4vw, 17px);
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.01em;
    color: #17184f;
  }
  .dg-pq-speech-bubble--purple .dg-pq-bubble-text { color: #17184f; }
  .dg-pq-speech-bubble--teal .dg-pq-bubble-text { color: #00796b; }
  .dg-pq-speech-bubble--pink .dg-pq-bubble-text { color: #c2185b; }

  /* Body Text - Wide 2-column or clean wide grid */
  .dg-pq-text-body {
    width: 100%;
    margin-bottom: clamp(18px, 2.5vw, 28px);
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: clamp(14px, 2.5vw, 32px);
    align-items: center;
  }
  .dg-pq-text-body p {
    margin: 0;
    font-family: "Rubik", sans-serif;
    font-size: clamp(13.5px, 1.3vw, 15.5px);
    line-height: 1.5;
    color: #2d3436;
    text-align: left;
  }
  .dg-pq-highlight {
    color: #17184f;
    font-weight: 800;
  }

  /* Meet Family Header */
  .dg-pq-family-header {
    align-self: flex-start;
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: clamp(14px, 2vw, 20px);
  }
  .dg-pq-intro-pill {
    background: #e8ddfc;
    color: #4a2882;
    font-family: "Caveat", cursive, sans-serif;
    font-size: clamp(26px, 3.2vw, 34px);
    font-weight: 700;
    padding: 2px 20px;
    border-radius: 30px;
    line-height: 1.1;
  }
  .dg-pq-intro-arrow {
    width: 48px;
    height: 30px;
  }

  /* 4 Characters Grid */
  .dg-pq-characters-grid {
    width: 100%;
    max-width: 840px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: clamp(10px, 2vw, 24px);
    align-items: flex-end;
  }
  .dg-pq-char-card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .dg-pq-char-avatar-wrap {
    width: 100%;
    max-width: 125px;
    aspect-ratio: 1/1.18;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .dg-pq-char-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 3px 6px rgba(0,0,0,0.06));
  }
  .dg-pq-char-pill {
    width: 100%;
    max-width: 125px;
    padding: 5px 8px;
    border-radius: 20px;
    font-family: "Rubik", sans-serif;
    font-size: clamp(11px, 1.2vw, 13.5px);
    font-weight: 700;
    text-align: center;
    margin-top: 6px;
    box-sizing: border-box;
    white-space: nowrap;
  }
  .dg-pq-char-pill--yellow {
    background: #fff0b3;
    color: #17184f;
  }
  .dg-pq-char-pill--blue {
    background: #d6f2fe;
    color: #17184f;
  }
  .dg-pq-char-pill--purple {
    background: #ece3fc;
    color: #17184f;
  }

  @media (max-width: 767px) {
    .dg-pq-text-body {
      grid-template-columns: 1fr;
      gap: 12px;
    }
    .dg-pq-speech-bubble--pink {
      margin-left: 0;
    }
    .dg-pq-speech-bubble {
      width: 100% !important;
      border-radius: 18px;
      border-bottom-left-radius: 4px;
      padding: 10px 14px;
      gap: 10px;
    }
    .dg-pq-bubble-qmark {
      font-size: 32px;
    }
    .dg-pq-bubble-text {
      font-size: 13.5px;
    }
    .dg-pq-characters-grid {
      gap: 6px;
    }
    .dg-pq-char-pill {
      font-size: 9.5px;
      padding: 3px 2px;
      border-radius: 10px;
    }
    .dg-pq-doodles {
      display: none;
    }
  }

  @keyframes gentleFloat {
    0% { transform: translateY(0) rotate(0deg); }
    100% { transform: translateY(-6px) rotate(12deg); }
  }

  /* Intro Section Story Card */
  .dg-story-card-wrapper {
    position: relative;
    background: #fffdf5;
    border: 3px solid #2f2076;
    border-radius: clamp(28px, 4vw, 38px);
    box-shadow: -6px 8px 0 #2f2076;
    padding: clamp(24px, 3.5vw, 38px) clamp(20px, 3.5vw, 36px);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .dg-story-card-badge {
    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #7048c4;
    color: #fff;
    padding: 6px 16px;
    border-radius: 999px;
    font: 900 13.5px/1 "Montserrat", "Rubik", sans-serif;
    letter-spacing: .04em;
    margin-bottom: 6px;
  }
  .dg-story-questions {
    display: flex;
    flex-direction: column;
    gap: clamp(12px, 1.8vw, 18px);
  }
  .dg-story-question {
    position: relative;
    display: grid;
    grid-template-columns: 36px minmax(0, 1fr);
    gap: 14px;
    align-items: center;
    min-height: 0;
    padding: clamp(14px, 1.8vw, 20px) clamp(16px, 2vw, 24px);
    box-sizing: border-box;
    border-radius: 20px;
    background: #fff;
    box-shadow: 0 4px 12px rgba(47, 32, 118, 0.05);
    transition: transform .2s ease;
  }
  .dg-story-question:hover {
    transform: translateY(-2px);
  }
  .dg-story-question:nth-child(1) {
    border: 2px dashed #7048c4;
    color: #7048c4;
  }
  .dg-story-question:nth-child(2) {
    border: 2px solid #04b8d4;
    color: #04b8d4;
  }
  .dg-story-question:nth-child(3) {
    border: 2px solid #ff3f62;
    color: #ff3f62;
  }
  .dg-story-question__mark {
    font: 900 clamp(32px, 4vw, 44px)/.8 "Montserrat", "Arial Black", sans-serif;
    text-align: center;
  }
  .dg-story-question p {
    margin: 0;
    color: #2f2076;
    font-size: clamp(16px, 1.6vw, 19.5px);
    font-weight: 700;
    line-height: 1.35;
    letter-spacing: -.01em;
  }
  .dg-story-copy {
    width: min(840px, 100%);
    margin: clamp(36px, 4.5vw, 54px) auto 0;
  }
  .dg-story-copy p {
    margin: 0;
    font-size: clamp(16.5px, 1.7vw, 20px);
    font-weight: 500;
    line-height: 1.55;
    color: #3b2d6a;
  }
  .dg-story-copy p + p {
    margin-top: 20px;
  }
  .dg-story-copy strong {
    color: #7048c4;
    font-weight: 800;
  }
  .dg-story-heart {
    display: inline-block;
    margin-right: 6px;
    color: #9a42e8;
    font-size: 1.25em;
    vertical-align: -.06em;
  }
  .dg-story-actions {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-top: 36px;
    flex-wrap: wrap;
  }
  .dg-story-actions a, .dg-story-actions button {
    min-width: 220px;
    padding: 16px 26px;
    border: 2.5px solid #2f2076;
    border-radius: 999px;
    background: #fff;
    color: #2f2076;
    box-shadow: -4px 4px 0 #2f2076;
    font: 800 17px/1 "Rubik", sans-serif;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    transition: transform .18s ease, box-shadow .18s ease;
  }
  .dg-story-actions a:first-child {
    background: #7048c4;
    color: #fff;
    border-color: #2f2076;
  }
  .dg-story-game-btn {
    border-color: #2f2076 !important;
    background: #ffe59a !important;
    color: #2f2076 !important;
  }
  .dg-story-actions a:hover, .dg-story-actions button:hover {
    transform: translate(-2px, -2px);
    box-shadow: -6px 6px 0 #2f2076;
  }
  .dg-story-spark {
    position: absolute;
    z-index: 0;
    font-size: clamp(24px, 3vw, 38px);
    line-height: 1;
    pointer-events: none;
  }
  .dg-story-spark--left { top: -20px; left: -16px; }
  .dg-story-spark--right { top: 4px; right: 2%; }
  .dg-story-spark--bottom { right: 1%; bottom: -24px; }

  .dg-pq-game-btn {
    width: 100%;
    margin-top: 4px;
    padding: 14px 20px;
    border-radius: 999px;
    border: 2.5px solid #2f2076;
    background: #ffe59a;
    color: #2f2076;
    box-shadow: -3px 3px 0 #2f2076;
    font: 900 clamp(14px, 2vw, 17px)/1.2 "BN Dime Display Regular", "Rubik", sans-serif;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: transform .18s ease, box-shadow .18s ease, background .18s ease;
  }
  .dg-pq-game-btn:hover {
    transform: translate(-2px, -2px);
    box-shadow: -5px 5px 0 #2f2076;
    background: #fff;
  }
  .dg-pq-game-btn:active {
    transform: translate(1px, 1px);
    box-shadow: -1px 1px 0 #2f2076;
  }

  /* Interactive Programs Carousel Section */
  .dg-programs-carousel-section {
    position: relative;
    width: 100%;
    background: #ffe59a;
    padding: clamp(50px, 6vw, 84px) 20px clamp(70px, 8vw, 100px);
    box-sizing: border-box;
    overflow: hidden;
    z-index: 10;
  }
  .dg-carousel-headline {
    text-align: center;
    margin-bottom: clamp(28px, 4vw, 44px);
  }
  .dg-carousel-headline h3 {
    margin: 0 0 10px;
    font: 900 clamp(36px, 5.5vw, 64px)/1 "BN Dime Display Regular", "Rubik", "Arial Black", sans-serif;
    letter-spacing: -0.03em;
    color: #2f2076;
    text-transform: uppercase;
  }
  .dg-carousel-headline p {
    margin: 0;
    font: 800 clamp(16px, 2vw, 22px)/1.3 "BN Dime Display Regular", "Rubik", sans-serif;
    letter-spacing: 0.02em;
    color: #2f2076;
    text-transform: uppercase;
    opacity: 0.9;
  }
  /* Hide Framer Old Feature / 5000 Activities / Footer Frame */
  [data-framer-name^="Feature"],
  [data-framer-name="5000 Activities"],
  [data-framer-name="5000 Activities"] *,
  [data-framer-name="Footer Frame"],
  [data-framer-name="Hidden (L)"] {
    display: none !important;
    height: 0 !important;
    min-height: 0 !important;
    pointer-events: none !important;
  }
  
  .dg-programs-carousel {
    position: relative;
    width: min(1120px, 94vw);
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Rubik", sans-serif;
  }
  .dg-carousel-cards-wrapper {
    position: relative;
    width: min(980px, 100%);
    min-height: 530px;
    display: grid;
    place-items: center;
  }
  .dg-pcard {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 3px solid #2f2076;
    border-radius: clamp(32px, 5vw, 48px);
    box-shadow: -8px 10px 0 #2f2076;
    padding: clamp(28px, 4vw, 46px);
    box-sizing: border-box;
    opacity: 0;
    visibility: hidden;
    transform: scale(0.92) translateY(14px);
    transition: opacity .32s ease, transform .32s cubic-bezier(0.34, 1.56, 0.64, 1), visibility .32s ease;
    pointer-events: none;
    z-index: 1;
  }
  .dg-pcard.is-active {
    opacity: 1;
    visibility: visible;
    transform: scale(1) translateY(0);
    pointer-events: auto;
    z-index: 2;
  }
  .dg-pcard--1 { background: #ffe0ed; }
  .dg-pcard--2 { background: #fff4bd; }
  .dg-pcard--3 { background: #dff4ff; }

  .dg-pcard__inner {
    display: grid;
    grid-template-columns: 0.85fr 1.15fr;
    gap: clamp(24px, 4vw, 48px);
    align-items: center;
    height: 100%;
  }
  .dg-pcard__media {
    display: grid;
    place-items: center;
    padding: 10px;
  }
  .dg-pcard__img {
    width: 100%;
    max-width: clamp(200px, 24vw, 290px);
    aspect-ratio: 1 / 1;
    object-fit: contain;
    filter: drop-shadow(-3px 5px 0 #2f2076);
    animation: gentleBob 3s infinite ease-in-out alternate;
  }
  @keyframes gentleBob {
    0% { transform: translateY(0); }
    100% { transform: translateY(-8px); }
  }

  .dg-pcard__body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #2f2076;
  }
  .dg-pcard__badge {
    align-self: flex-start;
    display: inline-block;
    padding: 6px 18px;
    border-radius: 999px;
    background: #2f2076;
    color: #fff;
    font: 900 15px/1 "Montserrat", "Rubik", sans-serif;
    letter-spacing: .04em;
    margin-bottom: 14px;
    box-shadow: -2px 3px 0 rgba(0,0,0,0.15);
  }
  .dg-pcard--2 .dg-pcard__badge { background: #7048c4; }
  .dg-pcard--3 .dg-pcard__badge { background: #1c6aa6; }

  .dg-pcard__title {
    margin: 0 0 12px;
    font: 900 clamp(32px, 4.2vw, 46px)/1.05 "Montserrat", "Rubik", sans-serif;
    letter-spacing: -0.04em;
    color: #2f2076;
  }
  .dg-pcard__lead {
    margin: 0 0 18px;
    font-size: clamp(16px, 1.7vw, 18.5px);
    line-height: 1.45;
    font-weight: 500;
    color: #3b2d6a;
  }
  .dg-pcard__list {
    list-style: none;
    padding: 0;
    margin: 0 0 24px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .dg-pcard__list li {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: clamp(15px, 1.55vw, 17px);
    line-height: 1.35;
    color: #2f2076;
  }
  .dg-pcard__icon {
    flex-shrink: 0;
    font-size: 1.25em;
    line-height: 1;
    margin-top: 1px;
  }
  .dg-pcard__cta {
    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 16px 32px;
    border: 2.5px solid #2f2076;
    border-radius: 999px;
    background: #ffe59a;
    color: #2f2076;
    box-shadow: -4px 4px 0 #2f2076;
    font: 800 clamp(16px, 1.8vw, 18px)/1 "Rubik", sans-serif;
    text-decoration: none;
    cursor: pointer;
    transition: transform .18s ease, box-shadow .18s ease;
  }
  .dg-pcard__cta:hover {
    transform: translate(-2px, -2px);
    box-shadow: -6px 6px 0 #2f2076;
  }
  .dg-pcard__cta:active {
    transform: translate(2px, 2px);
    box-shadow: -2px 2px 0 #2f2076;
  }

  /* Carousel Arrows */
  .dg-carousel-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    width: clamp(48px, 5.5vw, 64px);
    height: clamp(48px, 5.5vw, 64px);
    border-radius: 50%;
    background: #ffe59a;
    border: 3px solid #2f2076;
    box-shadow: -4px 5px 0 #2f2076;
    color: #2f2076;
    display: grid;
    place-items: center;
    cursor: pointer;
    transition: transform .18s ease, box-shadow .18s ease, background .18s ease;
  }
  .dg-carousel-arrow--prev { left: -24px; }
  .dg-carousel-arrow--next { right: -24px; }
  .dg-carousel-arrow:hover {
    transform: translateY(-50%) scale(1.08);
    box-shadow: -5px 7px 0 #2f2076;
    background: #fff;
  }
  .dg-carousel-arrow:active {
    transform: translateY(-50%) scale(0.95);
    box-shadow: -2px 2px 0 #2f2076;
  }

  /* Carousel Dots */
  .dg-carousel-dots {
    display: flex;
    gap: 12px;
    margin-top: 24px;
    z-index: 5;
  }
  .dg-carousel-dot {
    width: 16px;
    height: 16px;
    border-radius: 999px;
    border: 2px solid #2f2076;
    background: #fff;
    cursor: pointer;
    transition: all .25s ease;
    padding: 0;
  }
  .dg-carousel-dot.is-active {
    width: 42px;
    background: #2f2076;
  }

  /* Game Teaser Section */
  .dg-game-teaser {
    position: relative;
    z-index: 20;
    width: 100%;
    padding: clamp(48px, 6vw, 84px) 24px;
    box-sizing: border-box;
    background: #dff4ff;
    color: #2f2076;
    font-family: "Rubik", sans-serif;
  }
  .dg-game-teaser__card {
    width: min(1120px, 100%);
    margin: 0 auto;
    background: #fffdf5;
    border: 3px solid #2f2076;
    border-radius: 36px;
    box-shadow: -6px 8px 0 #2f2076;
    padding: clamp(28px, 5vw, 48px);
    display: grid;
    grid-template-columns: 1.35fr 0.65fr;
    gap: 32px;
    align-items: center;
  }
  .dg-game-teaser__badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #7048c4;
    color: #fff;
    padding: 6px 16px;
    border-radius: 999px;
    font-size: 14px;
    font-weight: 900;
    letter-spacing: 0.05em;
    margin-bottom: 12px;
  }
  .dg-game-teaser h3 {
    margin: 0 0 12px;
    font: 900 clamp(28px, 4vw, 44px)/1.05 "Montserrat", "Rubik", sans-serif;
    letter-spacing: -0.04em;
    color: #2f2076;
  }
  .dg-game-teaser p {
    margin: 0 0 24px;
    font-size: clamp(17px, 2vw, 21px);
    line-height: 1.45;
    color: #4a3e7a;
    max-width: 580px;
  }
  .dg-game-teaser__btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 18px 36px;
    border: 3px solid #2f2076;
    border-radius: 999px;
    background: #ffe59a;
    color: #2f2076;
    box-shadow: -4px 5px 0 #2f2076;
    font: 900 clamp(18px, 2.5vw, 22px)/1 "Rubik", sans-serif;
    cursor: pointer;
    transition: transform .18s ease, box-shadow .18s ease;
  }
  .dg-game-teaser__btn:hover {
    transform: translate(-2px, -2px);
    box-shadow: -6px 7px 0 #2f2076;
  }
  .dg-game-teaser__btn:active {
    transform: translate(2px, 2px);
    box-shadow: -2px 3px 0 #2f2076;
  }
  .dg-game-teaser__right {
    display: grid;
    place-items: center;
    cursor: pointer;
  }

  /* Interactive 4-Cards Fan & Mascot Component */
  .dg-interactive-mascot-cards {
    position: relative;
    width: min(300px, 100%);
    height: 250px;
    margin: 0 auto;
    cursor: pointer;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    user-select: none;
  }

  .dg-fan-card {
    position: absolute;
    width: 95px;
    height: 95px;
    border-radius: 22px;
    border: 1.5px solid #03594d;
    box-shadow: -3px 4px 0 #03594d;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    box-sizing: border-box;
    transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
    will-change: transform;
    bottom: 35px;
  }
  .dg-fan-card img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    pointer-events: none;
  }

  /* 4 Fan Cards default positions */
  .dg-fan-card--tree {
    background: #ff9124;
    transform: translate(-55px, -12px) rotate(-17deg);
    z-index: 1;
  }
  .dg-fan-card--ball {
    background: #589af0;
    transform: translate(-20px, -24px) rotate(-6deg);
    z-index: 2;
  }
  .dg-fan-card--book {
    background: #ff6b8b;
    transform: translate(20px, -24px) rotate(6deg);
    z-index: 2;
  }
  .dg-fan-card--drum {
    background: #a288e3;
    transform: translate(55px, -12px) rotate(17deg);
    z-index: 1;
  }

  /* Hover Fan-out state */
  .dg-interactive-mascot-cards:hover .dg-fan-card--tree,
  .dg-game-teaser__card:hover .dg-fan-card--tree {
    transform: translate(-105px, -45px) rotate(-28deg) scale(1.08);
    box-shadow: -5px 6px 0 #03594d;
  }
  .dg-interactive-mascot-cards:hover .dg-fan-card--ball,
  .dg-game-teaser__card:hover .dg-fan-card--ball {
    transform: translate(-38px, -68px) rotate(-10deg) scale(1.08);
    box-shadow: -5px 6px 0 #03594d;
  }
  .dg-interactive-mascot-cards:hover .dg-fan-card--book,
  .dg-game-teaser__card:hover .dg-fan-card--book {
    transform: translate(38px, -68px) rotate(10deg) scale(1.08);
    box-shadow: -5px 6px 0 #03594d;
  }
  .dg-interactive-mascot-cards:hover .dg-fan-card--drum,
  .dg-game-teaser__card:hover .dg-fan-card--drum {
    transform: translate(105px, -45px) rotate(28deg) scale(1.08);
    box-shadow: -5px 6px 0 #03594d;
  }

  /* Foreground Pink Mascot Card */
  .dg-mascot-main-card {
    position: relative;
    z-index: 5;
    width: 210px;
    height: 155px;
    background: #fccddc;
    border: 2px solid #03594d;
    border-radius: 44px 44px 22px 22px;
    box-shadow: -4px 5px 0 #03594d;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 0;
    overflow: visible;
    transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
  }
  .dg-interactive-mascot-cards:hover .dg-mascot-main-card,
  .dg-game-teaser__card:hover .dg-mascot-main-card {
    transform: scale(1.03);
    box-shadow: -6px 7px 0 #03594d;
  }

  /* Mascot SVG inside card */
  .dg-mascot-svg-wrap {
    width: 96px;
    height: 130px;
    position: relative;
    bottom: -2px;
    transition: transform 0.3s ease;
  }
  .dg-interactive-mascot-cards:hover .dg-mascot-svg-wrap,
  .dg-game-teaser__card:hover .dg-mascot-svg-wrap {
    transform: translateY(-5px);
  }

  /* Green Pointer */
  .dg-mascot-pointer {
    position: absolute;
    top: 20px;
    right: 18px;
    width: 34px;
    height: 34px;
    z-index: 6;
    animation: dgPointerBounce 2.4s ease-in-out infinite;
    filter: drop-shadow(-2px 3px 0 #03594d);
    transition: transform 0.25s ease;
  }
  .dg-interactive-mascot-cards:hover .dg-mascot-pointer,
  .dg-game-teaser__card:hover .dg-mascot-pointer {
    transform: scale(1.2) rotate(-8deg);
  }

  @keyframes dgPointerBounce {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(3px, -5px); }
  }
  @keyframes crownFloat {
    0% { transform: translateY(0) rotate(-6deg); }
    100% { transform: translateY(-8px) rotate(6deg); }
  }
  @keyframes sparkleSpin {
    0% { transform: scale(0.8) rotate(0deg); }
    50% { transform: scale(1.2) rotate(180deg); }
    100% { transform: scale(0.8) rotate(360deg); }
  }

  /* Game Modal Overlay */
  .dg-game-modal {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    z-index: 2147483640 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding: clamp(10px, 2.5vw, 24px) !important;
    box-sizing: border-box !important;
    isolation: isolate !important;
    opacity: 0 !important;
    visibility: hidden !important;
    pointer-events: none !important;
    transition: opacity .25s ease, visibility .25s ease !important;
  }
  .dg-game-modal.is-open {
    opacity: 1 !important;
    visibility: visible !important;
    pointer-events: auto !important;
  }
  body.dg-modal-open {
    overflow: hidden !important;
  }
  .dg-game-modal__backdrop {
    position: absolute;
    inset: 0;
    background: rgba(23, 24, 79, 0.72);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
  .dg-game-modal__container {
    position: relative;
    z-index: 2;
    width: min(640px, 95vw);
    max-height: min(780px, 94vh);
    background: #dff4ff;
    border: 3px solid #2f2076;
    border-radius: clamp(22px, 4vw, 32px);
    box-shadow: -6px 10px 0 #2f2076;
    overflow-y: auto;
    overflow-x: hidden;
    padding: clamp(14px, 2.5vw, 24px) clamp(10px, 2vw, 20px);
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    transform: scale(0.92);
    transition: transform .25s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .dg-game-modal.is-open .dg-game-modal__container {
    transform: scale(1);
  }
  .game-wrapper {
    width: min(560px, 100%);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 10;
    font-family: "Rubik", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  }
  .game-header {
    text-align: center;
    margin-bottom: 8px;
    position: relative;
    width: 100%;
    padding: 0 4px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .game-header-top-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 42px;
    margin-bottom: 6px;
  }
  .game-header-actions {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: auto;
  }
  .dg-game-modal__close {
    position: relative;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #fff;
    border: 2px solid #2f2076;
    box-shadow: -2px 2px 0 #2f2076;
    color: #2f2076;
    font: 900 18px/1 "Rubik", sans-serif;
    display: grid;
    place-items: center;
    cursor: pointer;
    transition: transform .15s ease, background .15s ease;
    z-index: 20;
    touch-action: manipulation;
  }
  .dg-game-modal__close:hover {
    transform: scale(1.1) rotate(90deg);
    background: #ffe0ed;
  }
  .dg-game-modal__close:active {
    transform: scale(0.92);
  }
  .sound-toggle {
    position: relative;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #fff;
    border: 2px solid #2f2076;
    box-shadow: -2px 2px 0 #2f2076;
    font-size: 16px;
    display: grid;
    place-items: center;
    cursor: pointer;
    transition: transform 0.15s ease, background 0.15s ease;
    z-index: 20;
    touch-action: manipulation;
  }
  .sound-toggle:hover { transform: scale(1.06); }
  .sound-toggle:active { transform: scale(0.92); }
  .game-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #7048c4;
    color: #fff;
    padding: 4px 14px;
    border-radius: 999px;
    font-size: clamp(10.5px, 2.2vw, 13px);
    font-weight: 900;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    box-shadow: 0 4px 12px rgba(112, 72, 196, 0.25);
    margin-bottom: 4px;
  }
  .game-title {
    margin: 0;
    font-size: clamp(18px, 4.2vw, 28px);
    font-weight: 900;
    line-height: 1.15;
    letter-spacing: -0.03em;
    color: #2f2076;
    text-align: center;
  }
  .game-card {
    width: 100%;
    background: #fffdf5;
    border: 3px solid #2f2076;
    border-radius: clamp(18px, 4vw, 26px);
    box-shadow: -4px 6px 0 #2f2076;
    padding: clamp(12px, 2.5vw, 20px) clamp(10px, 2vw, 18px);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
    z-index: 10;
    box-sizing: border-box;
  }
  .step-tracker {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: clamp(6px, 1.8vw, 10px);
    width: 100%;
    max-width: 480px;
    margin-bottom: 8px;
  }
  .step-pill {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: clamp(6px, 1.5vw, 9px) 4px;
    background: #fff;
    border: 2px solid #d4cfef;
    border-radius: 999px;
    font-size: clamp(11.5px, 2.3vw, 13.5px);
    font-weight: 800;
    color: #928ca8;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .step-pill.active {
    background: #ffe59a;
    border-color: #2f2076;
    color: #2f2076;
    box-shadow: -2px 2px 0 #2f2076;
    transform: scale(1.03);
  }
  .step-pill.completed {
    background: #e6fcf5;
    border-color: #37b24d;
    color: #37b24d;
  }
  .hint-banner {
    background: #fff;
    border: 2px solid #2f2076;
    border-radius: 999px;
    padding: 5px 16px;
    font-size: clamp(13px, 2.6vw, 16px);
    font-weight: 900;
    color: #2f2076;
    display: flex;
    align-items: center;
    gap: 6px;
    box-shadow: -2px 2px 0 #2f2076;
    margin-bottom: 6px;
  }
  .stage {
    position: relative;
    width: 100%;
    max-width: min(320px, 85vw);
    min-height: min(230px, 58vw);
    margin: 4px auto 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    touch-action: manipulation;
  }
  .tooth-svg {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 6px 14px rgba(47, 32, 118, 0.12));
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    pointer-events: none;
  }
  .tooth-svg.happy { animation: toothWiggle 0.6s ease-in-out; }
  .tooth-svg.super-sparkle { animation: toothDance 1.2s infinite alternate ease-in-out; }
  .tooth-svg.chewing { animation: toothChew 0.4s 4 ease-in-out; }
  @keyframes toothWiggle {
    0%, 100% { transform: rotate(0deg) scale(1); }
    25% { transform: rotate(-6deg) scale(1.05); }
    75% { transform: rotate(6deg) scale(1.05); }
  }
  @keyframes toothDance {
    0% { transform: translateY(0) rotate(-4deg) scale(1.03); }
    100% { transform: translateY(-10px) rotate(4deg) scale(1.08); }
  }
  @keyframes toothChew {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.08, 0.92); }
  }
  .game-item {
    position: absolute;
    width: clamp(44px, 11vw, 62px);
    height: clamp(44px, 11vw, 62px);
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-size: clamp(28px, 7vw, 38px);
    cursor: pointer;
    z-index: 15;
    transform: translate(-50%, -50%) scale(1);
    transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.25s ease;
    touch-action: none;
    filter: drop-shadow(0 3px 5px rgba(0,0,0,0.15));
    pointer-events: auto;
  }
  .game-item:hover { transform: translate(-50%, -50%) scale(1.12); }
  .game-item:active { transform: translate(-50%, -50%) scale(0.88); }
  .game-item.popped {
    transform: translate(-50%, -50%) scale(0) rotate(180deg);
    opacity: 0;
    pointer-events: none;
  }
  .item-bubble {
    position: absolute;
    inset: -3px;
    border-radius: 50%;
    border: 2px dashed #7048c4;
    animation: rotateBorder 4s linear infinite;
    pointer-events: none;
    opacity: 0.6;
  }
  .foam-bubble {
    position: absolute;
    inset: -3px;
    border-radius: 50%;
    border: 2px solid #4dabf7;
    background: rgba(227, 244, 255, 0.6);
    pointer-events: none;
    animation: foamPulse 1.6s infinite alternate ease-in-out;
  }
  @keyframes rotateBorder {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  @keyframes foamPulse {
    0% { transform: scale(0.95); opacity: 0.7; }
    100% { transform: scale(1.08); opacity: 1; }
  }
  .feed-apple-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 25;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: appleBounce 1.4s infinite alternate ease-in-out;
  }
  .feed-apple {
    font-size: clamp(58px, 14vw, 78px);
    line-height: 1;
    filter: drop-shadow(0 6px 12px rgba(255, 63, 98, 0.35));
    transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .feed-apple-wrapper:hover .feed-apple {
    transform: scale(1.15) rotate(8deg);
  }
  .feed-apple-wrapper:active .feed-apple {
    transform: scale(0.85);
  }
  .apple-tap-badge {
    background: #ffe59a;
    border: 2px solid #2f2076;
    border-radius: 999px;
    padding: 3px 10px;
    font-size: clamp(11.5px, 2.4vw, 13.5px);
    font-weight: 900;
    color: #2f2076;
    margin-top: 2px;
    white-space: nowrap;
    box-shadow: -2px 2px 0 #2f2076;
  }
  @keyframes appleBounce {
    0% { transform: translate(-50%, -50%) translateY(0) scale(1); }
    100% { transform: translate(-50%, -50%) translateY(-8px) scale(1.06); }
  }
  .particle-canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 8;
  }
  .tools-palette {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: clamp(6px, 1.8vw, 12px);
    width: 100%;
    max-width: 480px;
    margin-top: 4px;
    z-index: 10;
  }
  /* Mode Tabs */
  .game-mode-tabs {
    display: flex;
    gap: 8px;
    background: #eef2ff;
    padding: 4px;
    border-radius: 999px;
    border: 2px solid #2f2076;
    margin: 4px auto 10px;
    width: fit-content;
    max-width: 100%;
  }
  .mode-tab-btn {
    border: none;
    background: transparent;
    padding: 6px 14px;
    border-radius: 999px;
    cursor: pointer;
    font: 900 12px/1.2 "Rubik", sans-serif;
    color: #2f2076;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: all 0.2s ease;
  }
  .mode-tab-btn span { font-size: 13px; font-weight: 900; }
  .mode-tab-btn.active {
    background: #ffe59a;
    box-shadow: -2px 2px 0 #2f2076;
    border: 1.5px solid #2f2076;
  }

  .tool-btn {
    position: relative;
    min-height: clamp(64px, 14vw, 80px);
    border: 2.5px solid #2f2076;
    border-radius: clamp(14px, 3vw, 20px);
    background: #fff;
    box-shadow: -3px 4px 0 #2f2076;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    cursor: pointer;
    transition: transform 0.15s ease, background 0.15s ease, box-shadow 0.15s ease;
    touch-action: manipulation;
    pointer-events: auto;
  }
  .tool-btn:hover {
    transform: translateY(-2px);
    box-shadow: -4px 6px 0 #2f2076;
  }
  .tool-btn:active, .tool-btn.selected {
    transform: translateY(2px) translateX(-2px);
    box-shadow: -1px 1.5px 0 #2f2076;
  }
  .tool-btn.brush-btn { background: #ffe9f2; }
  .tool-btn.water-btn { background: #e3f4ff; }
  .tool-btn.apple-btn { background: #e6fcf5; }
  .tool-btn.brush-btn.selected { background: #ffc9db; border-color: #ff3f62; }
  .tool-btn.water-btn.selected { background: #bfe7ff; border-color: #04b8d4; }
  .tool-btn.apple-btn.selected { background: #b2f2bb; border-color: #37b24d; }

  .tool-btn.puzzle-btn { background: #fff3bf; }
  .tool-btn.puzzle-btn.selected { background: #ffe066; border-color: #f08c00; }
  .tool-btn.memory-btn { background: #f3d9fa; }
  .tool-btn.memory-btn.selected { background: #eebefa; border-color: #ae3ec9; }
  .tool-btn.sorter-btn { background: #d3f9d8; }
  .tool-btn.sorter-btn.selected { background: #b2f2bb; border-color: #2b8a3e; }

  .tool-icon {
    font-size: clamp(24px, 5.5vw, 32px);
    line-height: 1;
    pointer-events: none;
  }
  .tool-label {
    font-size: clamp(10px, 2vw, 12px);
    font-weight: 900;
    color: #2f2076;
    letter-spacing: -0.01em;
    pointer-events: none;
    text-align: center;
  }

  /* 5-7 Years Educational Stage */
  .stage-older-edu {
    position: relative;
    width: 100%;
    min-height: 220px;
    margin: 4px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  /* 1. Puzzle Styles */
  .puzzle-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    animation: fadeIn 0.3s ease;
  }
  .puzzle-board {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 6px;
    width: min(200px, 52vw);
    height: min(200px, 52vw);
    background: #eef2ff;
    border: 2.5px dashed #7048c4;
    border-radius: 18px;
    padding: 6px;
    box-sizing: border-box;
  }
  .puzzle-slot {
    position: relative;
    background: #fff;
    border: 2px solid #d4cfef;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: inset 0 2px 4px rgba(47, 32, 118, 0.06);
  }
  .puzzle-slot.highlight {
    border-color: #ffd43b;
    background: #fff9db;
    transform: scale(1.04);
    box-shadow: 0 0 12px rgba(255, 212, 59, 0.8);
  }
  .puzzle-slot.filled {
    background: #f8f0fc;
    border-color: #845ef7;
    box-shadow: -2px 2px 0 #2f2076;
    animation: puzzleSnap 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .puzzle-slot__label {
    font: 900 9.5px/1 "Rubik", sans-serif;
    color: #928ca8;
    margin-top: 2px;
  }
  .puzzle-slot.filled .puzzle-slot__label {
    color: #7048c4;
  }
  @keyframes puzzleSnap {
    0% { transform: scale(0.85) rotate(-6deg); }
    100% { transform: scale(1) rotate(0); }
  }

  .puzzle-tray {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 8px;
    flex-wrap: wrap;
  }
  .puzzle-piece-btn {
    width: clamp(40px, 11vw, 48px);
    height: clamp(40px, 11vw, 48px);
    border-radius: 12px;
    background: #fff;
    border: 2px solid #2f2076;
    box-shadow: -2px 2px 0 #2f2076;
    font-size: 20px;
    display: grid;
    place-items: center;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
    touch-action: manipulation;
  }
  .puzzle-piece-btn:hover {
    transform: translateY(-2px);
  }
  .puzzle-piece-btn.selected {
    background: #ffe59a;
    transform: scale(1.12) translateY(-3px);
    border-color: #f08c00;
    box-shadow: -3px 4px 0 #2f2076;
  }
  .puzzle-piece-btn.placed {
    opacity: 0.25;
    pointer-events: none;
    transform: scale(0.85);
  }

  /* 2. Memory Cards Styles */
  .memory-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    animation: fadeIn 0.3s ease;
  }
  .memory-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: clamp(6px, 1.8vw, 10px);
    width: min(290px, 78vw);
    padding: 6px;
    box-sizing: border-box;
  }
  .memory-card {
    position: relative;
    aspect-ratio: 1;
    perspective: 800px;
    cursor: pointer;
    touch-action: manipulation;
  }
  .memory-card__inner {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border-radius: 14px;
    border: 2px solid #2f2076;
    box-shadow: -2px 3px 0 #2f2076;
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    transform-style: preserve-3d;
  }
  .memory-card.flipped .memory-card__inner, .memory-card.matched .memory-card__inner {
    transform: rotateY(180deg);
  }
  .memory-card__front, .memory-card__back {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    display: grid;
    place-items: center;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }
  .memory-card__back {
    background: #7048c4;
    color: #ffe59a;
    font: 900 16px/1 "Rubik", sans-serif;
  }
  .memory-card__front {
    background: #fff;
    font-size: clamp(22px, 5.5vw, 30px);
    transform: rotateY(180deg);
  }
  .memory-card.matched .memory-card__inner {
    border-color: #37b24d;
    background: #d3f9d8;
    box-shadow: 0 0 10px rgba(55, 178, 77, 0.6);
  }

  /* 3. Sorter Styles */
  .sorter-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 6px;
    animation: fadeIn 0.3s ease;
  }
  .sorter-basket {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    width: min(280px, 80vw);
    min-height: 38px;
    background: #e6fcf5;
    border: 2px solid #0ca678;
    border-radius: 999px;
    padding: 4px 12px;
    box-shadow: -2px 2px 0 #0ca678;
    font: 900 12px/1 "Rubik", sans-serif;
    color: #0ca678;
    box-sizing: border-box;
  }
  .sorter-items-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 6px;
    width: min(260px, 75vw);
  }
  .sorter-item-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 6px 8px;
    background: #fff;
    border: 2px solid #2f2076;
    border-radius: 12px;
    box-shadow: -2px 2px 0 #2f2076;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
    min-width: 54px;
    touch-action: manipulation;
  }
  .sorter-item-btn:hover {
    transform: translateY(-2px);
    background: #fff9db;
  }
  .sorter-item-btn.collected {
    opacity: 0.3;
    pointer-events: none;
    transform: scale(0.85);
  }
  .sorter-item-btn.bad-shake {
    animation: badShake 0.4s ease-in-out;
    border-color: #ff3f62;
    background: #ffe3e3;
  }
  @keyframes badShake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-6px); }
    75% { transform: translateX(6px); }
  }
  .sorter-item-icon {
    font-size: 24px;
    line-height: 1;
    margin-bottom: 2px;
  }
  .sorter-item-label {
    font: 900 10.5px/1 "Rubik", sans-serif;
    color: #2f2076;
  }

  /* =========================================
     🎮 GAME HUB (Каталог всех детских игр)
     ========================================= */
  .game-hub-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    animation: fadeIn 0.3s ease;
  }
  .hub-header-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 2px;
  }
  .hub-title {
    font: 900 clamp(16px, 3.8vw, 22px)/1.1 "Rubik", sans-serif;
    color: #2f2076;
    margin: 0;
  }
  .hub-filters {
    display: flex;
    justify-content: center;
    gap: 6px;
    flex-wrap: wrap;
    margin-bottom: 6px;
  }
  .hub-filter-btn {
    font: 900 clamp(10px, 2.2vw, 12px)/1 "Rubik", sans-serif;
    padding: 6px 12px;
    border-radius: 999px;
    border: 1.5px solid #2f2076;
    background: #fff;
    color: #2f2076;
    cursor: pointer;
    transition: all 0.2s ease;
    touch-action: manipulation;
  }
  .hub-filter-btn.active {
    background: #ffe59a;
    box-shadow: -2px 2px 0 #2f2076;
  }
  .hub-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    width: 100%;
    max-height: min(330px, 52vh);
    overflow-y: auto;
    padding: 4px;
    box-sizing: border-box;
    scrollbar-width: thin;
  }
  .hub-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 10px 8px;
    background: #fff;
    border: 2px solid #2f2076;
    border-radius: 16px;
    box-shadow: -2px 3px 0 #2f2076;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
    text-align: left;
    touch-action: manipulation;
  }
  .hub-card:hover {
    transform: translateY(-2px);
    box-shadow: -3px 5px 0 #2f2076;
    background: #fffdf5;
  }
  .hub-card-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 4px;
  }
  .hub-card-icon {
    font-size: clamp(22px, 5vw, 28px);
    line-height: 1;
  }
  .hub-card-age {
    font: 900 9px/1 "Rubik", sans-serif;
    padding: 3px 6px;
    border-radius: 999px;
    background: #eef2ff;
    color: #7048c4;
    border: 1px solid #7048c4;
    white-space: nowrap;
  }
  .hub-card-title {
    font: 900 clamp(11.5px, 2.6vw, 13.5px)/1.15 "Rubik", sans-serif;
    color: #2f2076;
    margin: 2px 0 3px;
  }
  .hub-card-desc {
    font: 600 clamp(9.5px, 2vw, 11px)/1.25 "Rubik", sans-serif;
    color: #7a7593;
    margin: 0 0 6px;
    flex-grow: 1;
  }
  .hub-card-btn {
    font: 900 10px/1 "Rubik", sans-serif;
    color: #2f2076;
    background: #ffe59a;
    border: 1.5px solid #2f2076;
    border-radius: 999px;
    padding: 4px 8px;
    margin-top: auto;
    pointer-events: none;
    align-self: flex-start;
  }

  /* Navigation in Active Game */
  .game-top-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 6px;
  }
  .game-back-btn {
    position: relative;
    font: 900 11.5px/1 "Rubik", sans-serif;
    padding: 7px 14px;
    border-radius: 999px;
    border: 2px solid #2f2076;
    background: #ffe59a;
    color: #2f2076;
    box-shadow: -2px 2px 0 #2f2076;
    cursor: pointer;
    transition: all 0.15s ease;
    display: flex;
    align-items: center;
    gap: 5px;
    z-index: 25;
    touch-action: manipulation;
  }
  .game-back-btn:hover {
    background: #ffd43b;
    transform: scale(1.04);
  }

  /* =========================================
     4. ⚡ КАРИЕС-БЛАСТЕР (Blaster Arcade)
     ========================================= */
  .blaster-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;
  }
  .blaster-hud {
    font: 900 12px/1 "Rubik", sans-serif;
    color: #2f2076;
    background: #fff3bf;
    border: 1.5px solid #2f2076;
    padding: 4px 10px;
    border-radius: 999px;
    margin-bottom: 8px;
  }
  .blaster-stage-row {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: 100%;
    min-height: 180px;
  }
  .blaster-tooth {
    position: relative;
    width: clamp(52px, 12vw, 68px);
    height: clamp(74px, 16vw, 92px);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .blaster-monster-target {
    position: absolute;
    top: -24px;
    font-size: clamp(28px, 6.5vw, 36px);
    animation: monsterFloat 1.2s infinite alternate ease-in-out;
    cursor: pointer;
    z-index: 25;
    transition: transform 0.2s ease, opacity 0.2s ease;
    touch-action: manipulation;
  }
  .blaster-monster-target.defeated {
    transform: scale(1.6) rotate(90deg);
    opacity: 0;
    pointer-events: none;
  }

  /* =========================================
     5. 🎨 СМАЙЛ-СТИЛИСТ (Stylist Decorator)
     ========================================= */
  .stylist-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 8px;
  }
  .stylist-avatar-wrap {
    position: relative;
    width: min(170px, 44vw);
    height: min(170px, 44vw);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .stylist-accessory-crown {
    position: absolute;
    top: -14px;
    font-size: 38px;
    z-index: 20;
    animation: bounce 1s infinite alternate;
  }
  .stylist-accessory-glasses {
    position: absolute;
    top: 42%;
    font-size: 34px;
    z-index: 20;
  }
  .stylist-accessory-braces {
    position: absolute;
    bottom: 24%;
    font: 900 13px/1 "Rubik", sans-serif;
    background: #845ef7;
    color: #fff;
    padding: 3px 8px;
    border-radius: 999px;
    border: 1.5px solid #2f2076;
    box-shadow: 0 0 8px #845ef7;
    z-index: 20;
  }
  .stylist-categories {
    display: flex;
    justify-content: center;
    gap: 6px;
    flex-wrap: wrap;
  }
  .stylist-chip {
    font: 900 10.5px/1 "Rubik", sans-serif;
    padding: 5px 9px;
    border-radius: 10px;
    background: #fff;
    border: 1.5px solid #2f2076;
    cursor: pointer;
    transition: all 0.15s ease;
    touch-action: manipulation;
  }
  .stylist-chip:hover, .stylist-chip.active {
    background: #ffe59a;
    transform: scale(1.05);
  }
  .stylist-photo-btn {
    font: 900 11px/1 "Rubik", sans-serif;
    padding: 6px 14px;
    border-radius: 999px;
    background: #51cf66;
    color: #fff;
    border: 2px solid #2f2076;
    box-shadow: -2px 2px 0 #2f2076;
    cursor: pointer;
    margin-top: 4px;
  }

  /* =========================================
     6. 🔍 ДЕТЕКТИВ С ЛУПОЙ (Hidden Germs)
     ========================================= */
  .detective-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;
  }
  .detective-board {
    position: relative;
    width: min(280px, 76vw);
    height: 170px;
    background: #2b254a;
    border: 2.5px solid #2f2076;
    border-radius: 18px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .detective-spot {
    position: absolute;
    font-size: 26px;
    cursor: pointer;
    opacity: 0.35;
    transition: all 0.25s ease;
    animation: monsterFloat 1.5s infinite alternate ease-in-out;
    padding: 8px;
    touch-action: manipulation;
  }
  .detective-spot:hover, .detective-spot:active {
    opacity: 0.95;
    transform: scale(1.2);
  }
  .detective-spot.found {
    opacity: 1 !important;
    transform: scale(1.3) !important;
    filter: drop-shadow(0 0 10px #51cf66);
    pointer-events: none;
  }

  /* =========================================
     7. 🎶 МУЗЫКАЛЬНЫЕ ЗУБКИ (Musical Teeth)
     ========================================= */
  .music-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 8px;
  }
  .music-teeth-row {
    display: flex;
    justify-content: center;
    gap: clamp(4px, 1.2vw, 8px);
    width: 100%;
  }
  .music-tooth-btn {
    width: clamp(42px, 10.5vw, 50px);
    height: clamp(68px, 15vw, 86px);
    border-radius: 14px;
    border: 2px solid #2f2076;
    box-shadow: -2px 3px 0 #2f2076;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.1s ease, box-shadow 0.1s ease;
    touch-action: manipulation;
  }
  .music-tooth-btn:active, .music-tooth-btn.jumpNote {
    transform: translateY(-8px) scale(1.08);
    box-shadow: 0 0 12px rgba(255, 212, 59, 0.9);
  }
  .music-note-name {
    font: 900 11px/1 "Rubik", sans-serif;
    color: #2f2076;
    margin-top: 4px;
  }
  .music-auto-play-btn {
    font: 900 11px/1 "Rubik", sans-serif;
    padding: 6px 12px;
    border-radius: 999px;
    background: #ffe59a;
    color: #2f2076;
    border: 1.5px solid #2f2076;
    cursor: pointer;
    margin-top: 4px;
  }

  .victory-overlay {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background: #fffdf5 !important;
    border-radius: inherit !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px 16px;
    z-index: 100 !important;
    opacity: 0;
    pointer-events: none;
    transform: scale(0.95);
    transition: opacity 0.25s ease, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-sizing: border-box;
  }
  .victory-overlay.active {
    opacity: 1 !important;
    pointer-events: auto !important;
    transform: scale(1) !important;
  }
  .victory-tooth {
    font-size: clamp(48px, 11vw, 68px);
    line-height: 1;
    animation: victoryJump 1s infinite alternate cubic-bezier(0.34, 1.56, 0.64, 1);
    margin-bottom: 8px;
    pointer-events: none;
  }
  .victory-title {
    font-size: clamp(19px, 4.2vw, 28px);
    font-weight: 900;
    color: #2f2076;
    margin: 0 0 6px;
    text-align: center;
    line-height: 1.1;
    pointer-events: none;
  }
  .victory-sub {
    font-size: clamp(12px, 2.5vw, 15px);
    font-weight: 700;
    color: #7048c4;
    margin: 0 0 16px;
    text-align: center;
    max-width: 380px;
    line-height: 1.35;
    pointer-events: none;
  }
  .replay-btn {
    min-width: clamp(160px, 46vw, 220px);
    padding: clamp(12px, 2.6vw, 15px) 18px;
    border: 2.5px solid #2f2076;
    border-radius: 999px;
    background: #ffe59a;
    color: #2f2076;
    box-shadow: -3px 4px 0 #2f2076;
    font: 900 clamp(15px, 3.2vw, 18px)/1 "Rubik", sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    cursor: pointer;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
    touch-action: manipulation;
    pointer-events: auto;
  }
  .replay-btn:hover {
    transform: translateY(-2px);
    box-shadow: -4px 6px 0 #2f2076;
  }
  .replay-btn:active {
    transform: translateY(2px);
    box-shadow: -1px 2px 0 #2f2076;
  }
  .sparkle-pop {
    position: absolute;
    font-size: 22px;
    pointer-events: none;
    animation: floatUpFade 0.7s forwards ease-out;
    z-index: 70;
  }

  .dg-pcard__game-btn {
    width: 100%;
    margin-top: 8px;
    padding: 10px 16px;
    border-radius: 999px;
    border: 2px dashed #2f2076;
    background: #fffdf5;
    color: #2f2076;
    font: 900 13px/1.2 "Rubik", sans-serif;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    transition: all .15s ease;
  }
  .dg-pcard__game-btn:hover {
    background: #ffe59a;
    border-style: solid;
    transform: translateY(-2px);
    box-shadow: -2px 3px 0 #2f2076;
  }

  .dg-game-teaser__badges {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 12px;
  }
  .dg-game-teaser__badge--older {
    background: #04b8d4 !important;
  }
  .dg-game-teaser__buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 8px;
  }
  .dg-game-teaser__btn--older {
    background: #dff4ff !important;
  }
  .dg-teaser-braces-badge {
    position: absolute;
    bottom: -10px;
    background: #845ef7;
    color: #fff;
    font: 900 12px/1 "Rubik", sans-serif;
    padding: 4px 10px;
    border-radius: 999px;
    border: 2px solid #2f2076;
    box-shadow: -2px 2px 0 #2f2076;
  }

  .dg-simple-cta [data-framer-name="Button Shape"] {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    min-width: 220px;
  }
  .dg-simple-cta { width: 220px !important; }
  body:has(.dg-floating-actions) .dg-simple-cta { visibility: hidden !important; pointer-events: none !important; }
  .dg-simple-cta [data-framer-name="Button Shape"] > :not(.dg-button-label) { display: none !important; }
  .dg-button-label {
    position: relative;
    z-index: 1;
    color: #2f2076;
    font: 500 17px/1 "Montserrat", "Rubik", sans-serif;
    letter-spacing: .01em;
  }

  .dg-programs, .dg-contact {
    order: 10;
    position: relative;
    z-index: 20;
    width: 100%;
    box-sizing: border-box;
    color: #2f2076;
    font-family: "Rubik", sans-serif;
    content-visibility: auto;
    contain-intrinsic-size: auto 900px;
  }
  .dg-programs { padding: 88px 24px 96px; background: #fffdf5; }
  .dg-shell { width: min(1180px, 100%); margin: 0 auto; }
  .dg-kicker { margin: 0 0 12px; color: #7650b8; font: 700 22px/1 "Caveat", cursive; }
  .dg-programs h2, .dg-contact h2 {
    margin: 0;
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
    letter-spacing: -0.06em;
  }
  .dg-programs h2 { max-width: 920px; font-size: clamp(48px, 7vw, 92px); line-height: 0.92; }
  .dg-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; margin-top: 46px; }
  .dg-card {
    overflow: hidden;
    border: 2px solid #2f2076;
    border-radius: 28px;
    box-shadow: -6px 7px 0 #2f2076;
    background: #fff;
  }
  .dg-card:nth-child(1) { background: #fff7d8; }
  .dg-card:nth-child(2) { background: #ffe4ee; }
  .dg-card:nth-child(3) { background: #e3f4ff; }
  .dg-card img { display: block; width: 100%; aspect-ratio: 1 / 1; object-fit: cover; object-position: top center; border-bottom: 2px solid #2f2076; }
  .dg-card__body { padding: 24px 22px 28px; }
  .dg-age { display: inline-block; margin-bottom: 12px; padding: 7px 13px; border-radius: 999px; background: #fff; font-weight: 800; }
  .dg-card h3 { margin: 0 0 10px; font: 800 30px/0.98 "Montserrat", sans-serif; letter-spacing: -0.04em; }
  .dg-card p { margin: 0; font-size: 17px; line-height: 1.45; }
  .dg-checkup {
    display: grid;
    grid-template-columns: 1.15fr 0.95fr;
    gap: clamp(24px, 3.5vw, 44px);
    align-items: stretch;
    margin-top: 34px;
    padding: clamp(20px, 3vw, 36px);
    border: 2.5px solid #2f2076;
    border-radius: 36px;
    background: #f7efff;
    box-shadow: -7px 8px 0 #2f2076;
  }

  /* Left Vector Card */
  .dg-checkup-card-left {
    background: #ffffff;
    border: 2px solid #2f2076;
    border-radius: 28px;
    box-shadow: -4px 5px 0 #2f2076;
    padding: clamp(18px, 2.5vw, 28px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
  }

  .dg-checkup-card-badge-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
  }
  .dg-checkup-pill {
    display: inline-flex;
    align-items: center;
    padding: 6px 14px;
    border: 1.5px solid #2f2076;
    border-radius: 999px;
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
    font-size: 13px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }
  .dg-checkup-pill--purple {
    background: #e9dcff;
    color: #2f2076;
  }
  .dg-checkup-pill--yellow {
    background: #ffe59a;
    color: #2f2076;
  }

  .dg-checkup-card-hero {
    display: flex;
    align-items: center;
    gap: 18px;
    padding-bottom: 8px;
    border-bottom: 1.5px dashed #d1c4e9;
  }
  .dg-checkup-mascot-box {
    width: 90px;
    height: 95px;
    flex-shrink: 0;
    filter: drop-shadow(0 4px 8px rgba(112, 72, 196, 0.18));
  }
  .dg-checkup-mascot-svg {
    width: 100%;
    height: 100%;
    display: block;
  }
  .dg-checkup-card-title-wrap h4 {
    margin: 0 0 4px;
    font: 900 clamp(20px, 2.2vw, 26px)/1.1 "Montserrat", sans-serif;
    color: #2f2076;
    letter-spacing: -0.03em;
  }
  .dg-checkup-card-title-wrap p {
    margin: 0;
    font-size: 14px;
    line-height: 1.35;
    color: #594f8a;
  }

  /* Checklist of items */
  .dg-checkup-checklist {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .dg-checkup-check-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 8px 12px;
    border-radius: 14px;
    background: #fbf9ff;
    border: 1px solid #ede7f6;
  }
  .dg-checkup-check-icon {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    margin-top: 2px;
  }
  .dg-checkup-check-icon svg {
    width: 100%;
    height: 100%;
  }
  .dg-checkup-check-content {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .dg-checkup-check-content strong {
    font-size: 14px;
    font-weight: 800;
    color: #2f2076;
    line-height: 1.3;
  }
  .dg-checkup-check-content span {
    font-size: 12.5px;
    color: #6c6396;
    line-height: 1.35;
  }

  /* Price box in card */
  .dg-checkup-price-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    background: #fff9e6;
    border: 1.5px solid #ffe082;
    border-radius: 18px;
    margin-top: 4px;
  }
  .dg-checkup-price-left {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .dg-checkup-price-label {
    font-size: 12px;
    font-weight: 700;
    color: #795548;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }
  .dg-checkup-price-val {
    display: flex;
    align-items: baseline;
    gap: 8px;
  }
  .dg-checkup-price-current {
    font: 900 24px/1 "Montserrat", sans-serif;
    color: #2f2076;
  }
  .dg-checkup-price-old {
    font: 700 15px/1 "Montserrat", sans-serif;
    color: #9e9e9e;
    text-decoration: line-through;
  }
  .dg-checkup-saving-badge {
    padding: 6px 12px;
    background: #e8faf6;
    border: 1.5px solid #2f2076;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 800;
    color: #03594d;
    box-shadow: -2px 2px 0 #2f2076;
  }

  /* Right content block */
  .dg-checkup-content-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
  }
  .dg-checkup-content-right h3 {
    margin: 0;
    font: 900 clamp(32px, 4.5vw, 56px)/0.96 "Montserrat", sans-serif;
    letter-spacing: -0.05em;
    color: #2f2076;
  }
  .dg-checkup-desc {
    margin: 0;
    font-size: clamp(16px, 1.4vw, 19px);
    line-height: 1.45;
    color: #3b306b;
  }
  .dg-checkup-features-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 4px;
  }
  .dg-checkup-feat {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 7px 14px;
    background: #ffffff;
    border: 1.5px solid #2f2076;
    border-radius: 999px;
    font-size: 13.5px;
    font-weight: 800;
    color: #2f2076;
    box-shadow: -2px 2px 0 #2f2076;
  }
  .dg-checkup-action-wrap {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  .dg-checkup-btn {
    display: inline-block;
    padding: 18px 36px;
    border: 2.5px solid #2f2076;
    border-radius: 999px;
    background: #ffe59a;
    color: #2f2076;
    box-shadow: -5px 5px 0 #2f2076;
    font: 900 19px/1 "Montserrat", sans-serif;
    text-align: center;
    text-decoration: none;
    transition: transform .2s ease, box-shadow .2s ease;
  }
  .dg-checkup-btn:hover {
    transform: translateY(-2px);
    box-shadow: -6px 7px 0 #2f2076;
  }
  .dg-checkup-note {
    font-size: 13.5px;
    color: #6c6396;
  }
  .dg-checkup-note strong {
    color: #2f2076;
  }

  @media (max-width: 900px) {
    .dg-checkup {
      grid-template-columns: 1fr;
      padding: 20px 16px;
      border-radius: 28px;
    }
    .dg-checkup-card-left {
      padding: 18px 14px;
    }
  }

  .dg-checkup-section { padding: clamp(50px, 6vw, 84px) 24px clamp(60px, 7vw, 96px); background: #fff8d9; border-top: 2px solid #2f2076; }
  .dg-contact { padding: 64px 24px 72px; background: #fff8d9; border-top: 2px solid #2f2076; }
  .dg-contact__inner { width: min(1120px, 100%); margin: auto; display: grid; grid-template-columns: 1.25fr 1fr; gap: 32px; align-items: end; }
  .dg-contact h2 { margin-bottom: 18px; font-size: clamp(40px, 7vw, 88px); line-height: 0.9; }
  .dg-contact p { margin: 6px 0; font-size: clamp(18px, 2vw, 25px); line-height: 1.35; }
  .dg-contact__actions { display: grid; gap: 14px; }
  .dg-contact a:last-child { background: #e9dcff; }

  .dg-floating-actions {
    position: fixed;
    z-index: 2147483000;
    left: max(16px, env(safe-area-inset-left));
    right: max(16px, env(safe-area-inset-right));
    bottom: max(16px, env(safe-area-inset-bottom));
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    pointer-events: none;
    isolation: isolate;
    transition: opacity .2s ease;
  }
  body:has(.framer-6mir23-container [data-framer-name^="Default"]) .dg-floating-actions { opacity: 0; }
  .dg-floating-actions a,
  .dg-floating-actions button {
    pointer-events: auto;
    color: #2f2076;
    text-decoration: none;
    border: 2.5px solid #2f2076;
    box-shadow: -3px 3px 0 #2f2076;
    transition: transform .18s ease, box-shadow .18s ease, background .18s ease;
  }
  .dg-floating-actions a:hover,
  .dg-floating-actions button:hover { transform: translate(1px, -1px); box-shadow: -4px 4px 0 #2f2076; }
  .dg-floating-actions a:focus-visible,
  .dg-floating-actions button:focus-visible { outline: 3px solid #fff; outline-offset: 3px; }
  .dg-floating-socials { display: flex; gap: 8px; }
  .dg-floating-social { width: 46px; height: 46px; display: grid; place-items: center; border-radius: 999px; }
  .dg-floating-social:first-child { background: #ffe0ed; }
  .dg-floating-social:last-child { background: #dff4ff; }
  .dg-floating-social svg { width: 20px; height: 20px; }
  .dg-floating-game {
    min-height: 48px;
    padding: 0 16px;
    border-radius: 999px;
    background: #ffe59a;
    font: 900 14px/1 "BN Dime Display Regular", "Rubik", sans-serif;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    cursor: pointer;
  }
  .dg-floating-record {
    width: clamp(160px, 18vw, 220px);
    min-height: 52px;
    display: grid;
    place-items: center;
    border-radius: 999px;
    background: #ffe59a;
    font: 800 16px/1 "Montserrat", "Rubik", sans-serif;
    letter-spacing: .01em;
  }
  .dg-floating-contact {
    min-width: 110px;
    min-height: 48px;
    display: grid;
    place-items: center;
    padding: 0 18px;
    border-radius: 999px;
    background: #ffe59a;
    font: 700 13px/1 "Montserrat", "Rubik", sans-serif;
  }

  @media (max-width: 809px) {
    body { padding-bottom: 74px; }

    /* Floating Header Nav (Top-Left Logo + Top-Right Burger) across all blocks */
    .framer-1qb073z,
    [data-framer-name="Header Nav"],
    .framer-1dukmsl {
      position: fixed !important;
      top: max(8px, env(safe-area-inset-top)) !important;
      left: 0 !important;
      right: 0 !important;
      width: 100% !important;
      max-width: 100vw !important;
      z-index: 2147483600 !important;
      pointer-events: none !important;
      margin: 0 !important;
      padding: 0 14px !important;
      box-sizing: border-box !important;
      background: transparent !important;
    }
    .framer-1qb073z .framer-1a1fuhe-container,
    [data-framer-name="Header Nav"] .framer-1a1fuhe-container {
      opacity: 1 !important;
    }
    .framer-1qb073z > *,
    [data-framer-name="Header Nav"] > *,
    [data-framer-name="Header Nav"] a,
    [data-framer-name="Header Nav"] button,
    [data-framer-name="Header Nav"] [data-framer-name="Button Shape"],
    [data-framer-name="Header Nav"] [data-framer-name="Menu (mobile)"],
    [data-framer-name="Header Nav"] [data-framer-name="Logo"],
    [data-framer-name="Header Nav"] [data-framer-name="Mobile Menu"],
    [data-framer-name="Header Nav"] .framer-1a1fuhe-container,
    [data-framer-name="Header Nav"] .framer-UClOR,
    [data-framer-name="Header Nav"] [data-framer-name*="Primary"],
    [data-framer-name="Header Nav"] [data-framer-name*="Primary"] * {
      pointer-events: auto !important;
    }
    [data-framer-name*="Open"] [data-framer-name="Left"],
    [data-framer-name*="Open"] [data-framer-name="Right"],
    [data-framer-name*="Primary"] [data-framer-name="Left"],
    [data-framer-name*="Primary"] [data-framer-name="Right"] {
      display: flex !important;
      flex-direction: column !important;
      align-items: stretch !important;
      gap: 10px !important;
      width: 100% !important;
      opacity: 1 !important;
      visibility: visible !important;
    }
    [data-framer-name*="Open"] [data-framer-name="FAQS"],
    [data-framer-name*="Open"] [data-framer-name="About"],
    [data-framer-name*="Open"] [data-framer-name="Add venue"],
    [data-framer-name*="Open"] [data-framer-name="Contact"],
    [data-framer-name*="Primary"] [data-framer-name="FAQS"],
    [data-framer-name*="Primary"] [data-framer-name="About"],
    [data-framer-name*="Primary"] [data-framer-name="Add venue"],
    [data-framer-name*="Primary"] [data-framer-name="Contact"],
    [data-framer-name*="Primary"] .framer-mabw1n-container,
    [data-framer-name*="Primary"] .framer-1h31bhu-container,
    [data-framer-name*="Primary"] .framer-1yjcmra-container,
    [data-framer-name*="Primary"] .framer-1l11jz8-container {
      display: block !important;
      opacity: 1 !important;
      visibility: visible !important;
      width: 100% !important;
      height: auto !important;
    }
    [data-framer-name*="Open"] a,
    [data-framer-name*="Primary"] [data-framer-name="Left"] a,
    [data-framer-name*="Primary"] [data-framer-name="Right"] a {
      display: block !important;
      width: 100% !important;
      opacity: 1 !important;
      visibility: visible !important;
    }
    [data-framer-name*="Open"] [data-framer-name="Button Shape"],
    [data-framer-name*="Primary"] [data-framer-name="Left"] [data-framer-name="Button Shape"],
    [data-framer-name*="Primary"] [data-framer-name="Right"] [data-framer-name="Button Shape"] {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      padding: 14px 20px !important;
      min-height: 50px !important;
      border-radius: 999px !important;
      border: 2px solid #2f2076 !important;
      box-shadow: -3px 3px 0 #2f2076 !important;
      opacity: 1 !important;
      visibility: visible !important;
    }
    [data-framer-name*="Open"] [data-framer-name="FAQS"] [data-framer-name="Button Shape"],
    [data-framer-name*="Primary"] [data-framer-name="FAQS"] [data-framer-name="Button Shape"] {
      background-color: #f6bbfd !important;
    }
    [data-framer-name*="Open"] [data-framer-name="About"] [data-framer-name="Button Shape"],
    [data-framer-name*="Primary"] [data-framer-name="About"] [data-framer-name="Button Shape"] {
      background-color: #fccddc !important;
    }
    [data-framer-name*="Open"] [data-framer-name="Add venue"] [data-framer-name="Button Shape"],
    [data-framer-name*="Primary"] [data-framer-name="Add venue"] [data-framer-name="Button Shape"] {
      background-color: #aefbff !important;
    }
    [data-framer-name*="Open"] [data-framer-name="Contact"] [data-framer-name="Button Shape"],
    [data-framer-name*="Primary"] [data-framer-name="Contact"] [data-framer-name="Button Shape"] {
      background-color: #82eda6 !important;
    }
    [data-framer-name*="Open"] h4,
    [data-framer-name*="Primary"] [data-framer-name="Left"] h4,
    [data-framer-name*="Primary"] [data-framer-name="Right"] h4 {
      color: #2f2076 !important;
      font-size: 16px !important;
      font-weight: 900 !important;
      letter-spacing: 0.04em !important;
      margin: 0 !important;
    }

    .dg-floating-actions {
      left: 10px;
      right: 10px;
      bottom: max(10px, env(safe-area-inset-bottom));
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 6px;
      background: rgba(255, 253, 245, 0.95);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      padding: 6px 8px;
      border-radius: 999px;
      border: 2px solid #2f2076;
      box-shadow: 0 8px 24px rgba(47, 32, 118, 0.18), -3px 3px 0 #2f2076;
    }
    .dg-floating-socials { display: none !important; }
    .dg-floating-game {
      flex: 1 1 auto;
      min-height: 42px;
      padding: 0 10px;
      font-size: 12px;
      font-weight: 900;
      border-radius: 999px;
      box-shadow: none;
      border: 1.5px solid #2f2076;
      white-space: nowrap;
    }
    .dg-floating-record {
      flex: 2 1 auto;
      min-height: 42px;
      width: auto;
      padding: 0 12px;
      font-size: 13px;
      font-weight: 900;
      border-radius: 999px;
      box-shadow: none;
      border: 1.5px solid #2f2076;
      white-space: nowrap;
      text-align: center;
    }
    .dg-floating-contact {
      flex: 1 1 auto;
      min-height: 42px;
      min-width: 0;
      padding: 0 10px;
      font-size: 12px;
      font-weight: 800;
      border-radius: 999px;
      box-shadow: none;
      border: 1.5px solid #2f2076;
      white-space: nowrap;
      text-align: center;
    }
    [data-framer-name="Header Nav"] [data-framer-name="Logo"]::after { font-size: 10px; }
    .dg-programs { padding: 48px 16px 60px; }
    .dg-programs h2 { font-size: clamp(34px, 10vw, 56px); }
    .dg-grid { grid-template-columns: 1fr; margin-top: 24px; }
    .dg-checkup { grid-template-columns: 1fr; padding: 16px; border-radius: 24px; }
    .dg-contact { padding: 40px 16px 50px; }
    .dg-contact__inner { grid-template-columns: 1fr; align-items: start; }
    .dg-contact h2 { font-size: clamp(34px, 10vw, 52px); }
    [data-framer-name="Intro"].dg-parent-story-section { padding: 44px 14px 90px !important; }
    .dg-story-questions { gap: 16px; }
    .dg-story-question,
    .dg-story-question:nth-child(1),
    .dg-story-question:nth-child(2),
    .dg-story-question:nth-child(3) { width: 100%; margin-left: 0; padding: 18px 16px; border-radius: 22px; transform: none; }
    .dg-story-question { grid-template-columns: 30px minmax(0, 1fr); gap: 8px; min-height: 0; }
    .dg-story-question__mark { font-size: 40px; }
    .dg-story-question p { font-size: clamp(16px, 4.8vw, 19px); line-height: 1.25; }
    .dg-story-copy { width: 100%; margin-top: 40px; }
    .dg-story-copy p { font-size: 17px; line-height: 1.5; }
    .dg-story-copy p + p { margin-top: 20px; }
    .dg-story-actions { flex-direction: column; gap: 12px; margin-top: 30px; }
    .dg-story-actions a, .dg-story-actions button { min-width: 0; padding: 16px 20px; border-radius: 20px; font-size: 16px; }
    .dg-story-spark--left { left: 2px; }
    .dg-story-spark--right { right: 0; top: -38px; }
    .dg-story-spark--bottom { display: none; }
    .dg-programs-carousel { padding: 6px 12px 28px; }
    .dg-carousel-cards-wrapper { min-height: 570px; width: 100%; }
    .dg-pcard { padding: 18px 18px 20px; border-radius: 24px; box-shadow: -4px 5px 0 #2f2076; }
    .dg-pcard__inner { grid-template-columns: 1fr; gap: 10px; }
    .dg-pcard__media { padding: 0; }
    .dg-pcard__img { max-width: 100px; }
    .dg-pcard__title { font-size: 23px; margin-bottom: 6px; }
    .dg-pcard__lead { font-size: 13.5px; margin-bottom: 10px; line-height: 1.35; }
    .dg-pcard__list { margin-bottom: 14px; gap: 6px; }
    .dg-pcard__list li { font-size: 13px; }
    .dg-pcard__cta { width: 100%; text-align: center; font-size: 15px; padding: 12px 18px; }
    .dg-pcard__game-btn { font-size: 12.5px; padding: 9px 12px; }
    .dg-carousel-arrow {
      width: 38px;
      height: 38px;
      top: 50%;
      bottom: auto;
      transform: translateY(-50%);
      z-index: 20;
      box-shadow: -2px 3px 0 #2f2076;
    }
    .dg-carousel-arrow--prev { left: -8px; }
    .dg-carousel-arrow--next { right: -8px; }
    .dg-carousel-arrow:hover { transform: translateY(-50%) scale(1.05); }
    .dg-carousel-arrow:active { transform: translateY(-50%) scale(0.95); }
    .dg-carousel-dots { margin-top: 14px; margin-bottom: 20px; }
    .dg-game-teaser { padding: 28px 14px 36px; }
    .dg-game-teaser__card { grid-template-columns: 1fr; gap: 16px; padding: 20px 16px; border-radius: 22px; }
    .dg-game-teaser__right { order: -1; }
    .dg-game-teaser__left h3 { font-size: clamp(22px, 5.5vw, 28px); margin: 0 0 8px; }
    .dg-game-teaser__left p { font-size: 13.5px; line-height: 1.4; margin: 0 0 12px; }
    .dg-game-teaser__buttons { flex-direction: column; width: 100%; gap: 8px; }
    .dg-game-teaser__btn { width: 100%; font-size: 15px; padding: 12px 16px; min-height: 44px; }
    .dg-game-modal { padding: 6px; }
    .dg-game-modal__container { width: 100%; max-width: 100%; height: min(720px, 94vh); border-radius: 22px; padding: 10px 8px; }
    .game-card { padding: 10px 8px; border-radius: 20px; }
    .hint-banner { font-size: 12px; padding: 4px 10px; }
    .stage { width: min(240px, 68vw); height: min(240px, 68vw); }
    .hub-grid { grid-template-columns: 1fr; gap: 8px; max-height: 56vh; padding: 2px; }
    .hub-card {
      display: grid;
      grid-template-columns: 36px 1fr auto;
      grid-template-rows: auto auto;
      column-gap: 10px;
      row-gap: 2px;
      align-items: center;
      padding: 8px 10px;
      border-radius: 14px;
    }
    .hub-card-top {
      grid-column: 1;
      grid-row: 1 / 3;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 0;
    }
    .hub-card-icon { font-size: 26px; }
    .hub-card-age { display: inline-block; font-size: 8.5px; padding: 2px 4px; margin-top: 2px; }
    .hub-card-title { grid-column: 2; grid-row: 1; font-size: 12.5px; margin: 0; }
    .hub-card-desc { grid-column: 2; grid-row: 2; font-size: 10px; margin: 0; line-height: 1.2; }
    .hub-card-btn { grid-column: 3; grid-row: 1 / 3; font-size: 10px; padding: 6px 9px; margin: 0; align-self: center; }
    .music-teeth-row { gap: 4px; }
    .music-tooth-btn { width: clamp(34px, 12vw, 44px); height: clamp(60px, 17vw, 76px); border-radius: 11px; }
    .music-note-name { font-size: 10px; }
    .blaster-stage-row { min-height: 140px; gap: 6px; }
    .blaster-tooth { width: clamp(44px, 11vw, 56px); height: clamp(60px, 14vw, 76px); }
    .blaster-monster-target { font-size: 26px; top: -18px; }
    .stylist-avatar-wrap { width: min(140px, 40vw); height: min(140px, 40vw); }
    .stylist-chip { padding: 4px 7px; font-size: 9.5px; }
    .detective-board { width: 100%; max-width: 290px; height: 145px; }
  }
</style>
<script>
  (() => {
    const globalRussianMap = {
      "OUR APP is oN": "DENTAL GEN", "OUR APP IS ON": "DENTAL GEN", "Our app is on": "DENTAL GEN", "our app is on": "dental gen",
      "A mission to": "ПОМОГАЕТ", "A MISSION TO": "ПОМОГАЕТ", "a mission to": "помогает",
      "help lighten": "РАСТИТЬ", "HELP LIGHTEN": "РАСТИТЬ",
      "parents'": "ЗДОРОВУЮ", "PARENTS'": "ЗДОРОВУЮ", "Parents'": "Здоровую",
      "Mental load": "УЛЫБКУ", "MENTAL LOAD": "УЛЫБКУ", "mental load": "улыбку",
      "pack the drinks": "чистим зубки", "pack the": "чистим", "drinks": "зубки",
      "breakfast": "вкусный завтрак", "ballet class": "урок гигиены", "ballet": "урок", "class": "гигиены",
      "snaaacks": "перекусы", "dummy": "соска", "mooore": "полезные", "snacks": "фрукты",
      "meet maggie": "детская стоматология DENTAL GEN", "Meet Maggie": "Детская стоматология DENTAL GEN", "MEET MAGGIE": "ДЕТСКАЯ СТОМАТОЛОГИЯ DENTAL GEN",
      "Your pocket": "Здоровая улыбка", "guide to": "сегодня —", "surviving": "уверенность", "parenthood,": "и счастье", "one activity": "на всю", "at a time.": "жизнь!",
      "YOUR POCKET": "ЗДОРОВАЯ УЛЫБКА", "GUIDE TO": "СЕГОДНЯ —", "SURVIVING": "УВЕРЕННОСТЬ", "PARENTHOOD,": "И СЧАСТЬЕ", "ONE ACTIVITY": "НА ВСЮ", "AT A TIME.": "ЖИЗНЬ!",
      "FIND FREE": "РАСТЁМ СО", "FIND": "РАСТЁМ", "FREE": "СО", "SANITY—SAVING": "ЗДОРОВОЙ", "SANITY-SAVING": "ЗДОРОВОЙ", "ACTIVITIES": "УЛЫБКОЙ",
      "FASTER THAN": "ОТ ПЕРВЫХ", "FASTER": "ОТ", "THAN": "ПЕРВЫХ", "YOUR TODDLER": "ЗУБОВ ДО", "YOUR": "ЗУБОВ", "TODDLER": "ДО",
      "Can EMPTY THE": "ШКОЛЬНОЙ", "CAN EMPTY THE": "ШКОЛЬНОЙ", "EMPTY": "ШКОЛЬНОЙ", "THE": "ВЕСЬ", "TUPPERWARE": "СКАМЬИ", "DRAWER": "ВМЕСТЕ", "Drawer": "Вместе",
      "You're welcome !": "DENTAL GEN рядом!", "You're welcome!": "DENTAL GEN рядом!",
      "WITH MAGGIE": "С DENTAL GEN", "С MAGGIE": "С DENTAL GEN", "С MAGGIE ВЫ МОЖЕТЕ:": "С DENTAL GEN ВЫ МОЖЕТЕ:", "WITH MAGGIE YOU CAN:": "С DENTAL GEN ВЫ МОЖЕТЕ:", "YOU CAN:": "ВЫ МОЖЕТЕ:", "ВЫ МОЖЕТЕ:": "ВЫ МОЖЕТЕ:", "FIND ACTIVITIES": "3 ПРОГРАММЫ", "in your Local area": "по возрасту", "IN YOUR LOCAL AREA": "ПО ВОЗРАСТУ",
      "Maggie started with two mums, a few wines, and one big idea:": "DENTAL GEN растёт вместе с вашим ребёнком:",
      "MAGGIE STARTED WITH TWO MUMS, A FEW WINES, AND ONE BIG IDEA:": "DENTAL GEN РАСТЁТ ВМЕСТЕ С ВАШИМ РЕБЁНКОМ:",
      "Maggie is for every parent": "Для каждого возраста — свой план",
      "who has ever felt overwhelmed, isolated, or just out of ideas.": "профилактики, лечения и спокойного знакомства со стоматологом.",
      "is for every": "для каждого", "parent who": "родителя,", "has ever felt": "кто заботится", "overwhelmed,": "о здоровье", "isolated, or": "и красивой", "just out": "улыбке", "of ideas.": "малыша.",
      "Learn more about our story": "Подберите программу для ребёнка", "LEARN MORE ABOUT OUR STORY": "ПОДБЕРИТЕ ПРОГРАММУ ДЛЯ РЕБЁНКА",
      "Learn more about": "Подберите программу", "our story": "для ребёнка",
      "READ MORE": "ВЫБРАТЬ ПРОГРАММУ", "Read More": "Выбрать программу", "Read more": "Выбрать программу",
      "MORE THAN": "БОЛЕЕ", "MORE": "БОЛЕЕ", "THAN": "ПРИЧИН",
      "Free activities and kid-friendly parks across Australia.": "Причин улыбнуться — и у каждого ребёнка своя.",
      "FREE ACTIVITIES AND KID-FRIENDLY PARKS ACROSS AUSTRALIA.": "ПРИЧИН УЛЫБНУТЬСЯ — И У КАЖДОГО РЕБЁНКА СВОЯ.",
      "Maggie has you covered": "DENTAL GEN всегда рядом", "Maggie has you covered.": "DENTAL GEN всегда рядом.", "MAGGIE HAS YOU COVERED": "DENTAL GEN ВСЕГДА РЯДОМ",
      "turn chaos into chuckles with Maggie!": "Здоровая улыбка — уверенность на всю жизнь!",
      "TURN CHAOS INTO CHUCKLES WITH MAGGIE!": "ЗДОРОВАЯ УЛЫБКА — УВЕРЕННОСТЬ НА ВСЮ ЖИЗНЬ!",
      "turn chaos": "здоровая улыбка", "into chuckles": "сегодня —", "with Maggie!": "уверенность на всю жизнь!",
      "TURN CHAOS": "ЗДОРОВАЯ УЛЫБКА", "INTO CHUCKLES": "СЕГОДНЯ —", "WITH MAGGIE!": "УВЕРЕННОСТЬ НА ВСЮ ЖИЗНЬ!",
      "Download on the": "ЗАПИСАТЬСЯ", "Download on the ": "ЗАПИСАТЬСЯ ", "request": "ПОЗВОНИТЬ", "REQUEST": "ПОЗВОНИТЬ",
      "© 2025 Maggie": "© 2026 DENTAL GEN", "© 2026 Maggie": "© 2026 DENTAL GEN",
      "POLICIES": "КОНТАКТЫ", "Policies": "Контакты",
      "FAQS": "ПРОГРАММЫ", "FAQ": "ПРОГРАММЫ", "ABOUT": "О КЛИНИКЕ", "About": "О клинике", "ADD VENUE": "ЧЕКАП", "Add venue": "Чекап", "CONTACT": "КОНТАКТЫ", "Contact": "Контакты"
    };

    const scopedText = {
      "Header Nav": {
        "FAQ": "ПРОГРАММЫ", "FAQS": "ПРОГРАММЫ", "О НАС": "О КЛИНИКЕ", "ABOUT": "О КЛИНИКЕ",
        "ДОБАВИТЬ": "ЧЕКАП", "ADD VENUE": "ЧЕКАП", "КОНТАКТЫ": "КОНТАКТЫ", "CONTACT": "КОНТАКТЫ"
      },
      "Intro": {
        "НАХОДИТЕ": "РАСТЁМ", "FIND": "РАСТЁМ", "БЕСПЛАТНЫЕ": "СО", "FREE": "СО",
        "СПАСИТЕЛЬНЫЕ": "ЗДОРОВОЙ", "SANITY—SAVING": "ЗДОРОВОЙ", "ЗАНЯТИЯ": "УЛЫБКОЙ", "ACTIVITIES": "УЛЫБКОЙ",
        "БЫСТРЕЕ": "ОТ", "FASTER": "ОТ", "ЧЕМ": "ПЕРВЫХ", "THAN": "ПЕРВЫХ", "ВАШ": "ЗУБОВ", "YOUR": "ЗУБОВ",
        "МАЛЫШ": "ДО", "TODDLER": "ДО", "СМОЖЕТ ОПУСТОШИТЬ": "ШКОЛЬНОЙ", "CAN EMPTY THE": "ШКОЛЬНОЙ",
        "ЯЩИК С": "СКАМЬИ", "TUPPERWARE": "СКАМЬИ", "ПОСУДОЙ": "ВМЕСТЕ", "DRAWER": "ВМЕСТЕ",
        "Всегда пожалуйста!": "DENTAL GEN рядом!", "You're welcome!": "DENTAL GEN рядом!"
      },
      "Mission Headline": {
        "С MAGGIE": "С DENTAL GEN", "WITH MAGGIE": "С DENTAL GEN", "ВЫ МОЖЕТЕ:": "ВЫ МОЖЕТЕ:", "YOU CAN:": "ВЫ МОЖЕТЕ:",
        "OUR APP is oN": "DENTAL GEN", "OUR APP IS ON": "DENTAL GEN", "A mission to": "ПОМОГАЕТ", "A MISSION TO": "ПОМОГАЕТ",
        "help lighten": "РАСТИТЬ", "HELP LIGHTEN": "РАСТИТЬ", "parents'": "ЗДОРОВУЮ", "PARENTS'": "ЗДОРОВУЮ", "Mental load": "УЛЫБКУ", "MENTAL LOAD": "УЛЫБКУ"
      },
      "Mission": {
        "Создание воспоминаний не должно быть еще одной задачей в списке дел.": "Три программы по возрасту помогают вовремя заботиться о зубах и прикусе ребёнка.",
        "Because making memories shouldn't be another thing on your to-do list.": "Три программы по возрасту помогают вовремя заботиться о зубах и прикусе ребёнка.",
        "OUR APP is oN": "DENTAL GEN", "OUR APP IS ON": "DENTAL GEN", "A mission to": "ПОМОГАЕТ", "A MISSION TO": "ПОМОГАЕТ",
        "help lighten": "РАСТИТЬ", "HELP LIGHTEN": "РАСТИТЬ", "parents'": "ЗДОРОВУЮ", "PARENTS'": "ЗДОРОВУЮ", "Mental load": "УЛЫБКУ", "MENTAL LOAD": "УЛЫБКУ",
        "pack the drinks": "чистим зубки", "breakfast": "вкусный завтрак", "ballet class": "урок гигиены", "snaaacks": "перекусы"
      },
      "Our Story": {
        "MAGGIE НАЧАЛОСЬ С ДВУХ МАМ, БОКАЛА ЧАЯ И ОДНОЙ БОЛЬШОЙ ИДЕИ:": "DENTAL GEN РАСТЁТ ВМЕСТЕ С ВАШИМ РЕБЁНКОМ:",
        "MAGGIE STARTED WITH TWO MUMS, A FEW WINES, AND ONE BIG IDEA:": "DENTAL GEN РАСТЁТ ВМЕСТЕ С ВАШИМ РЕБЁНКОМ:",
        "parenting": "забота", "should feel": "без", "lighter": "страха", "LIGHTER": "БЕЗ СТРАХА",
        "MAGGIE —": "DENTAL GEN —", "ДЛЯ КАЖДОГО,": "ЗАБОТА,", "КТО КОГДА-ЛИБО": "КОТОРАЯ", "ЧУВСТВОВАЛ": "РАСТЁТ",
        "УСТАЛОСТЬ": "ВМЕСТЕ", "ИЛИ НЕ ЗНАЛ,": "С ВАШИМ", "ЧЕМ ЗАНЯТЬ": "РЕБЁНКОМ", "МАЛЫША.": "И ЕГО УЛЫБКОЙ.",
        "Maggie is for every parent": "Для каждого возраста — свой план", "who has ever felt overwhelmed, isolated, or just out of ideas.": "профилактики, лечения и спокойного знакомства со стоматологом.",
        "Узнайте больше о нашей истории": "Подберите программу для ребёнка", "Learn more about our story": "Подберите программу для ребёнка",
        "ПОДРОБНЕЕ": "ВЫБРАТЬ ПРОГРАММУ", "READ MORE": "ВЫБРАТЬ ПРОГРАММУ"
      },
      "5000 Activities": {
        "БЕСПЛАТНЫХ МЕРОПРИЯТИЙ И ДЕТСКИХ ПАРКОВ ПО ВСЕЙ СТРАНЕ.": "ПРИЧИН УЛЫБНУТЬСЯ — И У КАЖДОГО РЕБЁНКА СВОЯ.",
        "FREE ACTIVITIES AND KID-FRIENDLY PARKS ACROSS AUSTRALIA.": "ПРИЧИН УЛЫБНУТЬСЯ — И У КАЖДОГО РЕБЁНКА СВОЯ.",
        "Maggie всегда рядом": "DENTAL GEN рядом", "Maggie has you covered": "DENTAL GEN рядом"
      },
      "Footer": {
        "ПРЕВРАЩАЙТЕ ХАОС В УЛЫБКИ ВМЕСТЕ С MAGGIE!": "ЗДОРОВАЯ УЛЫБКА — УВЕРЕННОСТЬ НА ВСЮ ЖИЗНЬ!",
        "TURN CHAOS INTO CHUCKLES WITH MAGGIE!": "ЗДОРОВАЯ УЛЫБКА — УВЕРЕННОСТЬ НА ВСЮ ЖИЗНЬ!",
        "ПРЕВРАЩАЙТЕ ХАОС": "ЗДОРОВАЯ УЛЫБКА", "В УЛЫБКИ": "СЕГОДНЯ —", "ВМЕСТЕ С MAGGIE!": "УВЕРЕННОСТЬ НА ВСЮ ЖИЗНЬ!",
        "Скачать в": "ЗАПИСАТЬСЯ", "Download on the": "ЗАПИСАТЬСЯ", "заявка": "ПОЗВОНИТЬ", "request": "ПОЗВОНИТЬ",
        "© 2026 Maggie": "© 2026 DENTAL GEN", "© 2025 Maggie": "© 2026 DENTAL GEN", "ПОЛИТИКА": "КОНТАКТЫ", "POLICIES": "КОНТАКТЫ"
      }
    };

    const replaceTextNodes = (root, map) => {
      if (!root) return;
      const elements = [root, ...root.querySelectorAll("*")];
      for (const element of elements) {
        if (element.tagName === "SCRIPT" || element.tagName === "STYLE") continue;
        if (element.closest && (element.closest(".dg-hero-custom-canvas") || element.closest('[data-framer-name="Hero"]'))) continue;
        for (const node of element.childNodes) {
          if (node.nodeType !== 3 || !node.nodeValue) continue;
          const key = node.nodeValue.trim();
          if (!key || !map[key]) continue;
          if (node.nodeValue !== map[key]) {
            node.nodeValue = node.nodeValue.replace(key, map[key]);
          }
        }
      }
    };

    const setAnimatedWords = (heading, words) => {
      if (!heading) return;
      const groups = [...heading.children].filter((element) => element.tagName === "SPAN" && element.querySelector("span"));
      groups.forEach((group, groupIndex) => {
        const letters = [...group.querySelectorAll("span")].filter((element) => element.children.length === 0);
        const word = words[groupIndex] || "";
        letters.forEach((letter, index) => {
          const next = index === 0 ? word : "";
          if (letter.textContent !== next) letter.textContent = next;
        });
      });
    };

    const rewriteLinks = () => {
      for (const link of document.querySelectorAll("a")) {
        const href = link.getAttribute("href") || "";
        if (/apps\.apple\.com|android(?:\.html)?$/i.test(href)) link.setAttribute("href", "tel:+79109900060");
        else if (/faqs(?:\.html)?$/i.test(href)) link.setAttribute("href", "#programs");
        else if (/about(?:\.html)?$/i.test(href)) link.setAttribute("href", "#about");
        else if (/forbusiness(?:\.html)?$/i.test(href)) link.setAttribute("href", "#checkup");
        else if (/contact(?:\.html)?$/i.test(href)) link.setAttribute("href", "#contacts");
        else if (/policies(?:\.html)?$/i.test(href)) link.setAttribute("href", "#contacts");
        else if (/instagram\.com\/the\.maggie|tiktok\.com\/@the\.maggie/i.test(href)) link.setAttribute("href", "https://dentalgen.pro");

        if (link.closest?.('[data-framer-name="Logo"]')) {
          link.setAttribute("href", "#top");
        }
      }

      // Explicitly wire mobile drawer items
      const drawerFaqs = document.querySelector('[data-framer-name="Primary (S)"] [data-framer-name="FAQS"] a, [data-framer-name="Header Nav"] [name="FAQS"] a');
      if (drawerFaqs) drawerFaqs.setAttribute("href", "#programs");
      const drawerAbout = document.querySelector('[data-framer-name="Primary (S)"] [data-framer-name="About"] a, [data-framer-name="Header Nav"] [name="About"] a');
      if (drawerAbout) drawerAbout.setAttribute("href", "#about");
      const drawerCheckup = document.querySelector('[data-framer-name="Primary (S)"] [data-framer-name="Add venue"] a, [data-framer-name="Header Nav"] [name="Add venue"] a');
      if (drawerCheckup) drawerCheckup.setAttribute("href", "#checkup");
      const drawerContact = document.querySelector('[data-framer-name="Primary (S)"] [data-framer-name="Contact"] a, [data-framer-name="Header Nav"] [name="Contact"] a');
      if (drawerContact) drawerContact.setAttribute("href", "#contacts");
    };

    const wireAnchors = () => {
      if (document.documentElement.dataset.dgAnchors === "ready") return;
      document.documentElement.dataset.dgAnchors = "ready";

      const handleNavClick = (event) => {
        const link = event.target.closest?.('a');
        if (!link) return;
        const nav = link.closest?.('[data-framer-name="Header Nav"], .framer-1qb073z');
        if (!nav) return;

        // Is it the burger menu toggle?
        if (link.closest?.('[data-framer-name="Menu (mobile)"], [name="Menu (mobile)"]')) {
          return;
        }

        // Is it the logo button?
        if (link.closest?.('[data-framer-name="Logo"]')) {
          event.preventDefault();
          event.stopPropagation();
          event.stopImmediatePropagation();
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }

        // Is it one of the nav items?
        let targetSelector = null;
        if (link.closest?.('[data-framer-name="FAQS"], [name="FAQS"]') || link.textContent.includes("ПРОГРАММЫ")) {
          targetSelector = "#programs";
        } else if (link.closest?.('[data-framer-name="About"], [name="About"]') || link.textContent.includes("О КЛИНИКЕ")) {
          targetSelector = "#about";
        } else if (link.closest?.('[data-framer-name="Add venue"], [name="Add venue"]') || link.textContent.includes("ЧЕКАП")) {
          targetSelector = "#checkup";
        } else if (link.closest?.('[data-framer-name="Contact"], [name="Contact"]') || link.textContent.includes("КОНТАКТЫ")) {
          targetSelector = "#contacts";
        } else {
          const href = link.getAttribute("href") || "";
          if (href.startsWith("#")) targetSelector = href;
          else if (/faqs/i.test(href)) targetSelector = "#programs";
          else if (/about/i.test(href)) targetSelector = "#about";
          else if (/forbusiness/i.test(href)) targetSelector = "#checkup";
          else if (/contact|policies/i.test(href)) targetSelector = "#contacts";
        }

        if (targetSelector) {
          event.preventDefault();
          event.stopPropagation();
          event.stopImmediatePropagation();

          const targetEl = document.querySelector(targetSelector);
          if (targetEl) {
            const navHeight = 70;
            const targetTop = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight;
            window.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
          }

          // If mobile drawer is open, close it
          setTimeout(() => {
            const closeBurger = document.querySelector('[data-framer-name="Menu (mobile)"] a, .framer-tcgh7q-container a');
            const isDrawerOpen = document.querySelector('[data-framer-name*="Open"]');
            if (isDrawerOpen && closeBurger) {
              closeBurger.click();
            }
          }, 50);
        }
      };

      const followAnchor = (event) => {
        const link = event.target.closest?.('a[href^="#"]');
        if (!link) return;
        const targetHref = link.getAttribute("href");
        if (targetHref === "#game" || targetHref === "#kids-game") {
          event.preventDefault();
          window.openGameModal();
          return;
        }
        if (targetHref === "#" || targetHref === "#top") {
          event.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
        if (event.type === "keydown" && event.key !== "Enter" && event.key !== " ") return;
        const target = document.querySelector(targetHref);
        if (!target) return;
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();

        // If mobile drawer is open, auto close it
        const closeBtn = document.querySelector('[data-framer-name="Menu (mobile)"] a, .framer-tcgh7q-container a');
        const drawerOpenIndicator = document.querySelector('[data-framer-name*="Open"]');
        if (drawerOpenIndicator && closeBtn) {
          closeBtn.click();
        }

        const navHeight = 64;
        const targetTop = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
      };

      window.addEventListener("click", handleNavClick, true);
      window.addEventListener("click", followAnchor, true);
    };

    const simplifyControls = () => {
      document.body?.classList.remove("framer-cursor-none");
      document.documentElement.style.cursor = "auto";
      for (const element of document.querySelectorAll("[data-framer-cursor]")) {
        element.removeAttribute("data-framer-cursor");
      }
      for (const el of document.querySelectorAll('[data-framer-name*="Sticker"], [data-framer-name="Breakfast"], [data-framer-name="Drinks"], [data-framer-name="Banana"], [data-framer-name="Dummy"], [data-framer-name="Dress"], [data-framer-name="Snaaacks"], .framer-1ymkmky, .framer-ymzrbp, .framer-dxh1mn, .framer-1pzn978, .framer-1gbadff, .framer-1ugzc8k-container, .framer-1a733vd-container, .framer-6mir23-container, [data-framer-name^="Feature"], .framer-12pk2gu, .framer-1i7tb2a-container, [data-framer-name="Our Story"] .framer-1i7tb2a-container, [data-framer-name="Our Story"] a[href*="about"], [data-framer-name="Our Story"] [data-framer-name="Contact"], [data-framer-name="Our Story"] [data-framer-name="ABOUT"]')) {
        el.remove();
      }
      for (const google of document.querySelectorAll('[data-framer-name="Google Play"]')) {
        const link = google.closest("a");
        const wrapper = link?.closest('[data-framer-name="Android"]') || link?.parentElement?.parentElement;
        wrapper?.classList.add("dg-remove-google");
      }
      for (const link of document.querySelectorAll('a[href="tel:+79109900060"]')) {
        if (link.querySelector('[data-framer-name="Google Play"]')) continue;
        const shape = link.querySelector('[data-framer-name="Button Shape"]');
        if (!shape || (!link.querySelector('[data-framer-name="App Store"]') && !link.classList.contains("dg-simple-cta"))) continue;
        link.classList.add("dg-simple-cta");
        if (!shape.querySelector(".dg-button-label")) shape.insertAdjacentHTML("beforeend", '<span class="dg-button-label">ЗАПИСАТЬСЯ</span>');
      }
    };

    const imageMap = {
      "WxwG65LkMnPfhgxSlyow6l2YfI": "assets/dental-gen/first-teeth.jpg",
      "82HvwLj8KJ9opS3N2jwyEddSqU": "assets/dental-gen/protected-smile.jpg",
      "XCBp0qK3erxlToFfQCiUPPtpLIY": "assets/dental-gen/straight-smile.jpg",
      "asdTVq5eB5kVUD6YXq9TX8LwkWg": "assets/dental-gen/first-teeth.jpg",
      "AIzczk3gvJhgMHTQ0URn2fAyri8": "assets/dental-gen/programs-family.jpg",
      "0jlYoHSHgRVur8HQ9A4geAdDkg": "assets/dental-gen/protected-smile.jpg",
      "75zbzaCkMonr3FlE4QsbWsKEJgM": "assets/dental-gen/about-family.jpg",
      "Cs4Q3UrszrYx8F7vZqwPXaT44": "assets/dental-gen/straight-smile.jpg",
      "l4jcjPXQacAxMYP4yPewOtxLmU": "assets/dental-gen/contact.jpg",
      "B78M0IdC6u4wmJdlwHrwDS7Ss": "assets/dental-gen/first-teeth.jpg",
      "3qagTfcy987zODTJlMq8rgK2IO4": "assets/dental-gen/programs.jpg",
      "r2k4Pm177d1uTwd03VSiPwXuDc": "assets/dental-gen/straight-smile.jpg",
      "zSolWhtGIr9vVEf34WY6vkVsOUY": "assets/dental-gen/about-family.jpg"
    };

    const rewriteImages = () => {
      for (const image of document.images) {
        for (const [hash, local] of Object.entries(imageMap)) {
          if (!(image.src || "").includes(hash)) continue;
          image.removeAttribute("srcset");
          image.removeAttribute("sizes");
          image.loading = "lazy";
          image.decoding = "async";
          image.src = local;
          break;
        }
      }
    };

    const rewriteLoader = () => {
      setTimeout(() => {
        const loader = document.querySelector('.framer-6mir23-container');
        if (loader) {
          loader.style.transition = 'opacity 0.4s ease';
          loader.style.opacity = '0';
          setTimeout(() => { loader.style.display = 'none'; }, 400);
        }
      }, 1400);
      const letters = ["letter-d.svg", "letter-e.svg", "letter-n.svg", "letter-t.svg", "letter-a.svg", "letter-l-gen.svg"];
      for (const logo of document.querySelectorAll('.framer-6mir23-container [data-framer-name="Logo"], [data-framer-name="Logo Mobile"], .framer-o5vylo')) {
        if (logo.getAttribute('data-framer-name') === 'Logo Mobile' || logo.classList.contains('framer-o5vylo')) {
          logo.style.display = 'none';
          continue;
        }
        [...logo.children].forEach((container, index) => {
          const image = container.querySelector("img");
          const file = letters[index];
          if (!image || !file) return;
          const next = "assets/dental-gen/" + file;
          image.removeAttribute("srcset");
          image.removeAttribute("sizes");
          if (!image.src.endsWith(next)) image.src = next;
        });
      }
    };

    // ==========================================
    // 🎮 DENTAL GEN KIDS GAME CLUB (8 Games & Hub)
    // ==========================================
    let gameAudioCtx = null;
    let gameSoundEnabled = true;
    let currentGameId = 'hub';
    let currentHubFilter = 'all';

    // Game Specific States
    let toddlerStep = 1;
    let toddlerGermsLeft = 4;
    let toddlerFoamsLeft = 4;
    let toddlerBites = 0;

    let selectedPuzzlePiece = null;
    let puzzlePiecesLeft = 4;

    let memoryFlippedCards = [];
    let memoryMatchedPairs = 0;
    let memoryIsLocked = false;

    let sorterHealthyCollected = 0;

    let blasterScore = 0;
    const blasterTargetScore = 6;
    let blasterInterval = null;

    let stylistCrown = '👑';
    let stylistGlasses = '🕶️';
    let stylistBraces = '⭐ ЗОЛОТЫЕ';

    let detectiveFound = 0;
    const detectiveTarget = 4;

    let musicIsAutoPlaying = false;

    let gameParticles = [];
    let gameAnimFrame = null;

    const DG_GAMES = [
      {
        id: "toddler_spa",
        category: "toddler",
        icon: "🪥",
        age: "1–4 года",
        title: "Почисти зубик!",
        desc: "Щётка, мыльные пузырьки и хрустящее яблочко",
        badge: "👶 1–4 ГОДА: СПА ДЛЯ ЗУБИКА",
        hintEmoji: "🪥",
        hintText: "1. Почисти пятнышки щёточкой! (Тапай на монстриков)"
      },
      {
        id: "musical_teeth",
        category: "toddler",
        icon: "🎶",
        age: "1–7 лет",
        title: "Музыкальные зубки",
        desc: "Зубной ксилофон, звонкие нотки и песенка улыбки",
        badge: "🎶 1–7 ЛЕТ: ЗУБНОЙ КСИЛОФОН",
        hintEmoji: "🎹",
        hintText: "Нажимай на цветные зубки, чтобы играть нотки!"
      },
      {
        id: "puzzle",
        category: "older",
        icon: "🧩",
        age: "5–7 лет",
        title: "Зубной Пазл",
        desc: "Собери супер-улыбку из 4 фигурных деталей",
        badge: "🧩 5–7 ЛЕТ: ИНТЕРАКТИВНЫЙ ПАЗЛ",
        hintEmoji: "🧩",
        hintText: "Собери кусочки пазла в рамочку! (Тапай на детальки)"
      },
      {
        id: "memory",
        category: "older",
        icon: "🧠",
        age: "5–7 лет",
        title: "Мемори: Пары",
        desc: "Тренировка памяти и поиск парных картинок",
        badge: "🧠 5–7 ЛЕТ: ТРЕНИРОВКА ПАМЯТИ",
        hintEmoji: "🧠",
        hintText: "Переворачивай карточки и находи одинаковые пары!"
      },
      {
        id: "sorter",
        category: "older",
        icon: "🍎",
        age: "5–7 лет",
        title: "Умная Сортировка",
        desc: "Выбирай кальций и витамины для крепкой эмали",
        badge: "🍎 5–7 ЛЕТ: УМНАЯ СОРТИРОВКА",
        hintEmoji: "🍎",
        hintText: "Собери 3 полезных продукта в корзинку здоровья!"
      },
      {
        id: "blaster",
        category: "arcade",
        icon: "⚡",
        age: "4–7 лет",
        title: "Кариес-Бластер",
        desc: "Аркада: защити зубки лазером от кариесных монстриков",
        badge: "⚡ 4–7 ЛЕТ: ЗАЩИТНИК ЭМАЛИ",
        hintEmoji: "⚡",
        hintText: "Тапай по кариесным монстрикам лазером!"
      },
      {
        id: "stylist",
        category: "arcade",
        icon: "🎨",
        age: "3–7 лет",
        title: "Смайл-Стилист",
        desc: "Примерь брекеты, корону, очки и стикеры на зубик",
        badge: "🎨 3–7 ЛЕТ: СТИЛИСТ УЛЫБОК",
        hintEmoji: "✨",
        hintText: "Выбирай крутые брекеты и аксессуары для зубика!"
      },
      {
        id: "detective",
        category: "arcade",
        icon: "🔍",
        age: "4–7 лет",
        title: "Детектив с лупой",
        desc: "Найди скрытых микробов волшебным сканером",
        badge: "🔍 4–7 ЛЕТ: ДЕТЕКТИВ ЗДОРОВЬЯ",
        hintEmoji: "🔍",
        hintText: "Найди 4 спрятанных микроба в зубном ряду!"
      }
    ];

    function initGameAudio() {
      if (!gameAudioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) gameAudioCtx = new AudioContext();
      }
      if (gameAudioCtx && gameAudioCtx.state === 'suspended') {
        gameAudioCtx.resume();
      }
    }

    function playMusicalNote(freq) {
      if (!gameSoundEnabled) return;
      try {
        initGameAudio();
        if (!gameAudioCtx) return;
        const now = gameAudioCtx.currentTime;
        const osc = gameAudioCtx.createOscillator();
        const gain = gameAudioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
        osc.connect(gain);
        gain.connect(gameAudioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.45);
      } catch (e) {
        console.warn('Note audio error:', e);
      }
    }

    function playGameSound(type) {
      if (!gameSoundEnabled) return;
      try {
        initGameAudio();
        if (!gameAudioCtx) return;
        const now = gameAudioCtx.currentTime;
        if (type === 'brush') {
          const osc = gameAudioCtx.createOscillator();
          const gain = gameAudioCtx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(550, now);
          osc.frequency.linearRampToValueAtTime(750, now + 0.04);
          osc.frequency.linearRampToValueAtTime(600, now + 0.09);
          gain.gain.setValueAtTime(0.25, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
          osc.connect(gain);
          gain.connect(gameAudioCtx.destination);
          osc.start(now);
          osc.stop(now + 0.1);
        } else if (type === 'water') {
          [520, 680, 840].forEach((freq, i) => {
            const osc = gameAudioCtx.createOscillator();
            const gain = gameAudioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + i * 0.03);
            osc.frequency.exponentialRampToValueAtTime(freq * 1.6, now + i * 0.03 + 0.16);
            gain.gain.setValueAtTime(0.22, now + i * 0.03);
            gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.03 + 0.18);
            osc.connect(gain);
            gain.connect(gameAudioCtx.destination);
            osc.start(now + i * 0.03);
            osc.stop(now + i * 0.03 + 0.18);
          });
        } else if (type === 'crunch') {
          const osc = gameAudioCtx.createOscillator();
          const gain = gameAudioCtx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(800, now);
          osc.frequency.exponentialRampToValueAtTime(200, now + 0.12);
          gain.gain.setValueAtTime(0.35, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.14);
          osc.connect(gain);
          gain.connect(gameAudioCtx.destination);
          osc.start(now);
          osc.stop(now + 0.14);

          const osc2 = gameAudioCtx.createOscillator();
          const gain2 = gameAudioCtx.createGain();
          osc2.type = 'sine';
          osc2.frequency.setValueAtTime(950, now + 0.05);
          osc2.frequency.exponentialRampToValueAtTime(450, now + 0.18);
          gain2.gain.setValueAtTime(0.3, now + 0.05);
          gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
          osc2.connect(gain2);
          gain2.connect(gameAudioCtx.destination);
          osc2.start(now + 0.05);
          osc2.stop(now + 0.2);
        } else if (type === 'puzzle_snap') {
          const osc = gameAudioCtx.createOscillator();
          const gain = gameAudioCtx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(440, now);
          osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);
          gain.gain.setValueAtTime(0.3, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.14);
          osc.connect(gain);
          gain.connect(gameAudioCtx.destination);
          osc.start(now);
          osc.stop(now + 0.14);
        } else if (type === 'card_flip') {
          const osc = gameAudioCtx.createOscillator();
          const gain = gameAudioCtx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(600, now);
          osc.frequency.exponentialRampToValueAtTime(1000, now + 0.08);
          gain.gain.setValueAtTime(0.2, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.09);
          osc.connect(gain);
          gain.connect(gameAudioCtx.destination);
          osc.start(now);
          osc.stop(now + 0.09);
        } else if (type === 'match') {
          [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
            const osc = gameAudioCtx.createOscillator();
            const gain = gameAudioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + i * 0.06);
            gain.gain.setValueAtTime(0.26, now + i * 0.06);
            gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.06 + 0.22);
            osc.connect(gain);
            gain.connect(gameAudioCtx.destination);
            osc.start(now + i * 0.06);
            osc.stop(now + i * 0.06 + 0.22);
          });
        } else if (type === 'basket') {
          [650, 880, 1174].forEach((freq, i) => {
            const osc = gameAudioCtx.createOscillator();
            const gain = gameAudioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + i * 0.05);
            gain.gain.setValueAtTime(0.24, now + i * 0.05);
            gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.05 + 0.18);
            osc.connect(gain);
            gain.connect(gameAudioCtx.destination);
            osc.start(now + i * 0.05);
            osc.stop(now + i * 0.05 + 0.18);
          });
        } else if (type === 'wrong') {
          const osc = gameAudioCtx.createOscillator();
          const gain = gameAudioCtx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(220, now);
          osc.frequency.exponentialRampToValueAtTime(150, now + 0.18);
          gain.gain.setValueAtTime(0.25, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
          osc.connect(gain);
          gain.connect(gameAudioCtx.destination);
          osc.start(now);
          osc.stop(now + 0.2);
        } else if (type === 'laser') {
          const osc = gameAudioCtx.createOscillator();
          const gain = gameAudioCtx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(1200, now);
          osc.frequency.exponentialRampToValueAtTime(180, now + 0.14);
          gain.gain.setValueAtTime(0.3, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.14);
          osc.connect(gain);
          gain.connect(gameAudioCtx.destination);
          osc.start(now);
          osc.stop(now + 0.14);
        } else if (type === 'step_complete') {
          [587.33, 739.99, 880.00].forEach((note, i) => {
            const osc = gameAudioCtx.createOscillator();
            const gain = gameAudioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(note, now + i * 0.08);
            gain.gain.setValueAtTime(0.28, now + i * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.08 + 0.22);
            osc.connect(gain);
            gain.connect(gameAudioCtx.destination);
            osc.start(now + i * 0.08);
            osc.stop(now + i * 0.08 + 0.22);
          });
        } else if (type === 'victory') {
          [523.25, 659.25, 783.99, 1046.50, 1318.51].forEach((note, i) => {
            const osc = gameAudioCtx.createOscillator();
            const gain = gameAudioCtx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(note, now + i * 0.11);
            gain.gain.setValueAtTime(0.32, now + i * 0.11);
            gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.11 + (i === 4 ? 0.7 : 0.22));
            osc.connect(gain);
            gain.connect(gameAudioCtx.destination);
            osc.start(now + i * 0.11);
            osc.stop(now + i * 0.11 + (i === 4 ? 0.7 : 0.22));
          });
        }
      } catch (e) {
        console.warn('Game audio error:', e);
      }
    }

    function createGameParticles(x, y, count, type) {
      const colors = ['#FFD166', '#06D6A0', '#118AB2', '#EF476F', '#8338EC', '#3A86FF', '#FFB3C6'];
      for (let i = 0; i < (count || 12); i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 2 + Math.random() * 6;
        gameParticles.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1.5,
          size: 4 + Math.random() * 7,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 1,
          decay: 0.02 + Math.random() * 0.03,
          type: type || 'bubble'
        });
      }
    }

    function updateGameParticles() {
      const canvas = document.getElementById("dgGameParticleCanvas");
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = gameParticles.length - 1; i >= 0; i--) {
        const p = gameParticles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.12;
        p.alpha -= p.decay;
        if (p.alpha <= 0) {
          gameParticles.splice(i, 1);
          continue;
        }
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        if (p.type === 'bubble') {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = '#E3F4FF';
          ctx.fill();
          ctx.lineWidth = 1.5;
          ctx.strokeStyle = '#3A86FF';
          ctx.stroke();
        } else if (p.type === 'water') {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.9, 0, Math.PI * 2);
          ctx.fillStyle = '#04B8D4';
          ctx.fill();
        } else if (p.type === 'laser') {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 1.2, 0, Math.PI * 2);
          ctx.fillStyle = '#FFD43B';
          ctx.fill();
        } else {
          ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size * 1.5);
        }
        ctx.restore();
      }
      if (gameParticles.length > 0) gameAnimFrame = requestAnimationFrame(updateGameParticles);
      else gameAnimFrame = null;
    }

    function triggerGameParticles(x, y, count, type) {
      createGameParticles(x, y, count, type);
      if (!gameAnimFrame) gameAnimFrame = requestAnimationFrame(updateGameParticles);
    }

    function showGameSparkleFloat(x, y, emoji) {
      const stage = document.getElementById("dgGameStage");
      if (!stage) return;
      const span = document.createElement('span');
      span.className = 'sparkle-pop';
      span.textContent = emoji || '✨';
      span.style.left = x + 'px';
      span.style.top = y + 'px';
      stage.appendChild(span);
      setTimeout(() => span.remove(), 750);
    }

    function resizeGameCanvas() {
      const stage = document.getElementById("dgGameStage");
      const canvas = document.getElementById("dgGameParticleCanvas");
      if (!stage || !canvas) return;
      const rect = stage.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = (rect.width || 300) * dpr;
      canvas.height = (rect.height || 260) * dpr;
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.scale(dpr, dpr);
    }

    // ==========================================
    // 🌟 GAME HUB ROUTER
    // ==========================================
    function showGameHub(filter) {
      currentGameId = 'hub';
      if (filter) currentHubFilter = filter;

      const hubView = document.getElementById("dgGameHubView");
      const activeView = document.getElementById("dgGameActiveView");
      const backBtn = document.getElementById("dgBackToHubBtn");
      const badge = document.getElementById("dgGameBadge");
      const title = document.getElementById("dgGameTitle");
      const victoryModal = document.getElementById("dgGameVictoryModal");

      if (victoryModal) victoryModal.classList.remove('active');
      if (hubView) hubView.style.display = 'flex';
      if (activeView) activeView.style.display = 'none';
      if (backBtn) backBtn.style.display = 'none';
      if (badge) badge.textContent = "🎮 ДЕТСКИЙ ИГРОВОЙ КЛУБ";
      if (title) title.textContent = "Выбери развивающую игру!";

      // Update Filter Pills
      document.querySelectorAll(".hub-filter-btn").forEach(btn => {
        if (btn.dataset.filter === currentHubFilter) btn.classList.add("active");
        else btn.classList.remove("active");
      });

      // Render Hub Grid Cards
      const grid = document.getElementById("dgHubGrid");
      if (!grid) return;
      grid.innerHTML = '';

      const filtered = DG_GAMES.filter(g => currentHubFilter === 'all' || g.category === currentHubFilter || (currentHubFilter === 'toddler' && g.id === 'musical_teeth'));

      filtered.forEach(g => {
        const card = document.createElement("div");
        card.className = "hub-card";
        card.dataset.gameId = g.id;
        card.innerHTML =
          '<div class="hub-card-top">' +
            '<span class="hub-card-icon">' + g.icon + '</span>' +
            '<span class="hub-card-age">' + g.age + '</span>' +
          '</div>' +
          '<h3 class="hub-card-title">' + g.title + '</h3>' +
          '<p class="hub-card-desc">' + g.desc + '</p>' +
          '<button class="hub-card-btn" type="button">Играть ▶️</button>';

        const handler = (e) => {
          e.preventDefault();
          launchGame(g.id);
        };
        card.addEventListener('click', handler);
        card.addEventListener('pointerdown', handler);
        grid.appendChild(card);
      });
    }

    function launchGame(gameId) {
      initGameAudio();
      playGameSound('step_complete');
      currentGameId = gameId;

      const gameData = DG_GAMES.find(g => g.id === gameId) || DG_GAMES[0];
      const hubView = document.getElementById("dgGameHubView");
      const activeView = document.getElementById("dgGameActiveView");
      const backBtn = document.getElementById("dgBackToHubBtn");
      const badge = document.getElementById("dgGameBadge");
      const title = document.getElementById("dgGameTitle");
      const hintEmoji = document.getElementById("dgGameHintEmoji");
      const hintText = document.getElementById("dgGameHintText");
      const victoryModal = document.getElementById("dgGameVictoryModal");
      const stage = document.getElementById("dgDynamicGameStage");
      const itemsLayer = document.getElementById("dgGameItemsLayer");
      const bottomBar = document.getElementById("dgBottomControlsBar");

      if (victoryModal) victoryModal.classList.remove('active');
      if (hubView) hubView.style.display = 'none';
      if (activeView) activeView.style.display = 'block';
      if (backBtn) backBtn.style.display = 'flex';
      if (badge) badge.textContent = gameData.badge;
      if (title) title.textContent = gameData.title;
      if (hintEmoji) hintEmoji.textContent = gameData.hintEmoji;
      if (hintText) hintText.textContent = gameData.hintText;
      if (itemsLayer) itemsLayer.innerHTML = '';
      if (stage) stage.innerHTML = '';
      if (bottomBar) bottomBar.innerHTML = '';

      resizeGameCanvas();

      // Launch selected game engine
      if (gameId === 'toddler_spa') startToddlerSpaGame();
      else if (gameId === 'musical_teeth') startMusicalTeethGame();
      else if (gameId === 'puzzle') startPuzzleGame();
      else if (gameId === 'memory') startMemoryGame();
      else if (gameId === 'sorter') startSorterGame();
      else if (gameId === 'blaster') startBlasterGame();
      else if (gameId === 'stylist') startStylistGame();
      else if (gameId === 'detective') startDetectiveGame();
      else startPuzzleGame();
    }

    function onGameVictory(icon, title, sub) {
      setTimeout(() => {
        playGameSound('victory');
        const modal = document.getElementById("dgGameVictoryModal");
        const vicIcon = document.getElementById("dgVictoryIcon");
        const vicTitle = document.getElementById("dgVictoryTitle");
        const vicSub = document.getElementById("dgVictorySub");

        if (vicIcon) vicIcon.textContent = icon || "🏆✨🦷🥇";
        if (vicTitle) vicTitle.textContent = title || "УРА! ТЫ ПОБЕДИЛ!";
        if (vicSub) vicSub.textContent = sub || "Твои зубки здоровые, крепкие и сияют на 100%! 🌟";

        const stage = document.getElementById("dgGameStage");
        const stageRect = stage ? stage.getBoundingClientRect() : { width: 300, height: 260 };
        for (let i = 0; i < 6; i++) {
          setTimeout(() => {
            triggerGameParticles(
              stageRect.width * (0.15 + Math.random() * 0.7),
              stageRect.height * (0.15 + Math.random() * 0.7),
              22,
              'confetti'
            );
          }, i * 140);
        }

        setTimeout(() => {
          if (modal) modal.classList.add('active');
        }, 700);
      }, 250);
    }

    // ==========================================
    // 1. 🪥 GAME: TODDLER SPA (1-4 года)
    // ==========================================
    function startToddlerSpaGame() {
      toddlerStep = 1;
      toddlerGermsLeft = 4;
      toddlerFoamsLeft = 4;
      toddlerBites = 0;

      const stage = document.getElementById("dgDynamicGameStage");
      const bottomBar = document.getElementById("dgBottomControlsBar");
      const hintEmoji = document.getElementById("dgGameHintEmoji");
      const hintText = document.getElementById("dgGameHintText");

      if (hintEmoji) hintEmoji.textContent = '🪥';
      if (hintText) hintText.textContent = '1. Почисти пятнышки щёточкой! (Тапай на монстриков)';

      if (stage) {
        stage.innerHTML =
          '<svg class="tooth-svg" id="dgSpaToothChar" viewBox="0 0 240 260" fill="none">' +
            '<path d="M120 18 C175 18, 218 55, 212 118 C208 160, 192 238, 158 244 C136 248, 128 208, 120 208 C112 208, 104 248, 82 244 C48 238, 32 160, 28 118 C22 55, 65 18, 120 18 Z" fill="#FFFFFF" stroke="#2F2076" stroke-width="8" stroke-linejoin="round"/>' +
            '<path d="M60 48 C78 34, 104 30, 120 30 C136 30, 162 34, 180 48 C160 38, 132 34, 120 34 C108 34, 80 38, 60 48 Z" fill="#E3F4FF" opacity="0.9"/>' +
            '<ellipse cx="64" cy="74" rx="12" ry="24" transform="rotate(-25 64 74)" fill="#E3F4FF" opacity="0.8"/>' +
            '<ellipse cx="62" cy="142" rx="14" ry="9" fill="#FFB3C6" opacity="0.75"/>' +
            '<ellipse cx="178" cy="142" rx="14" ry="9" fill="#FFB3C6" opacity="0.75"/>' +
            '<g id="dgSpaToothEyes">' +
              '<ellipse cx="82" cy="116" rx="10" ry="14" fill="#2F2076"/>' +
              '<circle cx="85" cy="111" r="4.5" fill="#FFFFFF"/>' +
              '<ellipse cx="158" cy="116" rx="10" ry="14" fill="#2F2076"/>' +
              '<circle cx="161" cy="111" r="4.5" fill="#FFFFFF"/>' +
            '</g>' +
            '<path id="dgSpaToothMouth" d="M96 142 Q120 166 144 142" stroke="#2F2076" stroke-width="7" stroke-linecap="round" fill="#FF85A1"/>' +
            '<g id="dgSpaToothCrown" style="display: none;">' +
              '<path d="M80 34 L96 6 L120 28 L144 6 L160 34 Z" fill="#FFE59A" stroke="#2F2076" stroke-width="6" stroke-linejoin="round"/>' +
              '<circle cx="96" cy="6" r="4" fill="#FF3F62"/>' +
              '<circle cx="120" cy="28" r="4" fill="#04B8D4"/>' +
              '<circle cx="144" cy="6" r="4" fill="#8C5CFF"/>' +
            '</g>' +
          '</svg>';
      }

      if (bottomBar) {
        bottomBar.innerHTML =
          '<div class="tools-palette" role="toolbar">' +
            '<button class="tool-btn brush-btn selected" id="dgBtnStepBrush"><span class="tool-icon">🪥</span><span class="tool-label">1. ЩЁТКА</span></button>' +
            '<button class="tool-btn water-btn" id="dgBtnStepWater"><span class="tool-icon">💧</span><span class="tool-label">2. ВОДА</span></button>' +
            '<button class="tool-btn apple-btn" id="dgBtnStepApple"><span class="tool-icon">🍎</span><span class="tool-label">3. ЯБЛОКО</span></button>' +
          '</div>';
      }

      const layer = document.getElementById("dgGameItemsLayer");
      if (!layer) return;
      layer.innerHTML =
        '<div class="game-item" id="dgSpaGerm1" style="top: 26%; left: 30%;"><div class="item-bubble"></div><span>👾</span></div>' +
        '<div class="game-item" id="dgSpaGerm2" style="top: 28%; left: 70%;"><div class="item-bubble"></div><span>🍭</span></div>' +
        '<div class="game-item" id="dgSpaGerm3" style="top: 66%; left: 34%;"><div class="item-bubble"></div><span>🍫</span></div>' +
        '<div class="game-item" id="dgSpaGerm4" style="top: 64%; left: 66%;"><div class="item-bubble"></div><span>🦠</span></div>';

      layer.querySelectorAll('.game-item').forEach(germ => {
        const handler = (e) => {
          e.preventDefault();
          if (germ.classList.contains('popped')) return;
          germ.classList.add('popped');
          playGameSound('brush');

          const tooth = document.getElementById("dgSpaToothChar");
          const rect = germ.getBoundingClientRect();
          const stageRect = stage.getBoundingClientRect();
          const lx = rect.left - stageRect.left + 22;
          const ly = rect.top - stageRect.top + 22;

          triggerGameParticles(lx, ly, 16, 'bubble');
          showGameSparkleFloat(lx, ly, '🫧🪥');

          if (tooth) {
            tooth.classList.remove('happy');
            void tooth.offsetWidth;
            tooth.classList.add('happy');
          }

          toddlerGermsLeft--;
          if (toddlerGermsLeft <= 0) {
            playGameSound('step_complete');
            setTimeout(startToddlerSpaStep2, 600);
          }
        };
        germ.addEventListener('click', handler);
        germ.addEventListener('pointerdown', handler);
      });
    }

    function startToddlerSpaStep2() {
      toddlerStep = 2;
      toddlerFoamsLeft = 4;

      const hintEmoji = document.getElementById("dgGameHintEmoji");
      const hintText = document.getElementById("dgGameHintText");
      if (hintEmoji) hintEmoji.textContent = '💧';
      if (hintText) hintText.textContent = '2. Смой пенку водичкой!';

      document.querySelectorAll(".tool-btn").forEach(t => t.classList.remove('selected'));
      const btnWater = document.getElementById("dgBtnStepWater");
      if (btnWater) btnWater.classList.add('selected');

      const layer = document.getElementById("dgGameItemsLayer");
      if (!layer) return;
      layer.innerHTML =
        '<div class="game-item" id="dgSpaFoam1" style="top: 28%; left: 32%;"><div class="foam-bubble"></div><span>🫧</span></div>' +
        '<div class="game-item" id="dgSpaFoam2" style="top: 26%; left: 68%;"><div class="foam-bubble"></div><span>🫧</span></div>' +
        '<div class="game-item" id="dgSpaFoam3" style="top: 64%; left: 36%;"><div class="foam-bubble"></div><span>🫧</span></div>' +
        '<div class="game-item" id="dgSpaFoam4" style="top: 66%; left: 64%;"><div class="foam-bubble"></div><span>🫧</span></div>';

      layer.querySelectorAll('.game-item').forEach(foam => {
        const handler = (e) => {
          e.preventDefault();
          if (foam.classList.contains('popped')) return;
          foam.classList.add('popped');
          playGameSound('water');

          const tooth = document.getElementById("dgSpaToothChar");
          const rect = foam.getBoundingClientRect();
          const stage = document.getElementById("dgGameStage");
          const stageRect = stage ? stage.getBoundingClientRect() : { left: 0, top: 0 };
          const lx = rect.left - stageRect.left + 22;
          const ly = rect.top - stageRect.top + 22;

          triggerGameParticles(lx, ly, 18, 'water');
          showGameSparkleFloat(lx, ly, '💦✨');

          if (tooth) {
            tooth.classList.remove('happy');
            void tooth.offsetWidth;
            tooth.classList.add('happy');
          }

          toddlerFoamsLeft--;
          if (toddlerFoamsLeft <= 0) {
            playGameSound('step_complete');
            setTimeout(startToddlerSpaStep3, 600);
          }
        };
        foam.addEventListener('click', handler);
        foam.addEventListener('pointerdown', handler);
      });
    }

    function startToddlerSpaStep3() {
      toddlerStep = 3;
      toddlerBites = 0;

      const hintEmoji = document.getElementById("dgGameHintEmoji");
      const hintText = document.getElementById("dgGameHintText");
      if (hintEmoji) hintEmoji.textContent = '🍎';
      if (hintText) hintText.textContent = '3. Угости зубик сочным яблочком! (Тапай на яблоко)';

      document.querySelectorAll(".tool-btn").forEach(t => t.classList.remove('selected'));
      const btnApple = document.getElementById("dgBtnStepApple");
      if (btnApple) btnApple.classList.add('selected');

      const layer = document.getElementById("dgGameItemsLayer");
      if (!layer) return;
      layer.innerHTML =
        '<div class="feed-apple-wrapper" id="dgFeedAppleBtn">' +
          '<div class="feed-apple" id="dgAppleEmoji">🍎</div>' +
          '<div class="apple-tap-badge" id="dgAppleBadge">👆 ХРУМ!</div>' +
        '</div>';

      const appleBtn = document.getElementById("dgFeedAppleBtn");
      const appleEmoji = document.getElementById("dgAppleEmoji");
      const appleBadge = document.getElementById("dgAppleBadge");
      const tooth = document.getElementById("dgSpaToothChar");

      if (appleBtn) {
        const handler = (e) => {
          e.preventDefault();
          toddlerBites++;
          playGameSound('crunch');

          const stage = document.getElementById("dgGameStage");
          const stageRect = stage ? stage.getBoundingClientRect() : { width: 250, height: 250 };
          const lx = stageRect.width / 2;
          const ly = stageRect.height / 2 + 10;

          triggerGameParticles(lx, ly, 18, 'confetti');
          showGameSparkleFloat(lx, ly, '🍏💖');

          if (tooth) {
            tooth.classList.remove('chewing');
            void tooth.offsetWidth;
            tooth.classList.add('chewing');
          }

          if (toddlerBites === 1) {
            if (appleBadge) appleBadge.textContent = '👆 Ещё кусочек!';
            if (appleEmoji) appleEmoji.textContent = '🍏';
          } else if (toddlerBites >= 2) {
            appleBtn.style.display = 'none';
            const crown = document.getElementById("dgSpaToothCrown");
            const mouth = document.getElementById("dgSpaToothMouth");
            if (crown) crown.style.display = 'block';
            if (mouth) {
              mouth.setAttribute('d', 'M84 136 Q120 184 156 136 Z');
              mouth.setAttribute('fill', '#FF3F62');
            }
            if (tooth) tooth.classList.add('super-sparkle');

            onGameVictory("✨🦷👑🍎✨", "УРА! ЗУБИК ЧИСТЫЙ И СЫТЫЙ!", "Ты супер-молодец! Зубик сияет от счастья и говорит спасибо! 🎉");
          }
        };
        appleBtn.addEventListener('click', handler);
        appleBtn.addEventListener('pointerdown', handler);
      }
    }

    // ==========================================
    // 2. 🎶 GAME: MUSICAL TEETH (1-7 лет)
    // ==========================================
    const MUSIC_NOTES = [
      { id: "c", note: "До", freq: 261.63, color: "#ff6b6b", bg: "#ffe3e3" },
      { id: "d", note: "Ре", freq: 293.66, color: "#f76707", bg: "#ffe8cc" },
      { id: "e", note: "Ми", freq: 329.63, color: "#fcc419", bg: "#fff9db" },
      { id: "f", note: "Фа", freq: 349.23, color: "#51cf66", bg: "#d3f9d8" },
      { id: "g", note: "Соль", freq: 392.00, color: "#22b8cf", bg: "#c5f6fa" },
      { id: "a", note: "Ля", freq: 440.00, color: "#845ef7", bg: "#eebefa" }
    ];

    function startMusicalTeethGame() {
      musicIsAutoPlaying = false;
      const stage = document.getElementById("dgDynamicGameStage");
      const bottomBar = document.getElementById("dgBottomControlsBar");

      if (stage) {
        let teethHtml = '<div class="music-container"><div class="music-teeth-row" id="dgMusicTeethRow">';
        MUSIC_NOTES.forEach((n, idx) => {
          teethHtml +=
            '<button class="music-tooth-btn" id="dgNote_' + n.id + '" data-freq="' + n.freq + '" data-idx="' + idx + '" style="background: ' + n.bg + '; border-color: ' + n.color + ';" type="button">' +
              '<span style="font-size: 26px; line-height: 1;">🦷</span>' +
              '<span class="music-note-name" style="color: ' + n.color + ';">' + n.note + '</span>' +
            '</button>';
        });
        teethHtml += '</div></div>';
        stage.innerHTML = teethHtml;

        MUSIC_NOTES.forEach(n => {
          const btn = document.getElementById("dgNote_" + n.id);
          if (btn) {
            const trigger = (e) => {
              e.preventDefault();
              playMusicalNote(n.freq);
              btn.classList.remove('jumpNote');
              void btn.offsetWidth;
              btn.classList.add('jumpNote');

              const rect = btn.getBoundingClientRect();
              const s = document.getElementById("dgGameStage");
              const sRect = s ? s.getBoundingClientRect() : { left: 0, top: 0 };
              const lx = rect.left - sRect.left + 22;
              const ly = rect.top - sRect.top - 10;
              triggerGameParticles(lx, ly, 10, 'bubble');
              showGameSparkleFloat(lx, ly, '🎵 ' + n.note);
            };
            btn.addEventListener('click', trigger);
            btn.addEventListener('pointerdown', trigger);
          }
        });
      }

      if (bottomBar) {
        bottomBar.innerHTML =
          '<div style="display: flex; gap: 8px; justify-content: center; width: 100%;">' +
            '<button class="music-auto-play-btn" id="dgMusicMelodyBtn" type="button"><span>🎵</span> <span>Сыграть песенку улыбки</span></button>' +
          '</div>';

        const melBtn = document.getElementById("dgMusicMelodyBtn");
        if (melBtn) {
          melBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (musicIsAutoPlaying) return;
            musicIsAutoPlaying = true;
            melBtn.textContent = '🎶 Играет мелодия...';

            const melody = [
              { id: "c", delay: 0 },
              { id: "e", delay: 300 },
              { id: "g", delay: 600 },
              { id: "e", delay: 900 },
              { id: "g", delay: 1200 },
              { id: "a", delay: 1500 },
              { id: "g", delay: 1800 },
              { id: "e", delay: 2200 },
              { id: "c", delay: 2600 }
            ];

            melody.forEach(m => {
              setTimeout(() => {
                const note = MUSIC_NOTES.find(x => x.id === m.id);
                const btn = document.getElementById("dgNote_" + m.id);
                if (note && btn) {
                  playMusicalNote(note.freq);
                  btn.classList.remove('jumpNote');
                  void btn.offsetWidth;
                  btn.classList.add('jumpNote');
                  const rect = btn.getBoundingClientRect();
                  const s = document.getElementById("dgGameStage");
                  const sRect = s ? s.getBoundingClientRect() : { left: 0, top: 0 };
                  showGameSparkleFloat(rect.left - sRect.left + 22, rect.top - sRect.top - 10, '✨🎵');
                }
              }, m.delay);
            });

            setTimeout(() => {
              musicIsAutoPlaying = false;
              if (melBtn) melBtn.innerHTML = '<span>🎵</span> <span>Сыграть ещё раз!</span>';
              onGameVictory("🎶✨🦷🎹🥇", "БРАВО, МАЭСТРО УЛЫБОК!", "Ты сыграл замечательную мелодию чистых и здоровых зубок! 🌟");
            }, 3200);
          });
        }
      }
    }

    // ==========================================
    // 3. 🧩 GAME: PUZZLE (5-7 лет)
    // ==========================================
    const PUZZLE_ITEMS = [
      { id: "p1", slot: "s1", icon: "👑", label: "Корона" },
      { id: "p2", slot: "s2", icon: "👓", label: "Глазки" },
      { id: "p3", slot: "s3", icon: "💎", label: "Элайнеры" },
      { id: "p4", slot: "s4", icon: "🛡️", label: "Защита" }
    ];

    function startPuzzleGame() {
      puzzlePiecesLeft = 4;
      selectedPuzzlePiece = null;

      const stage = document.getElementById("dgDynamicGameStage");
      const bottomBar = document.getElementById("dgBottomControlsBar");

      if (stage) {
        stage.innerHTML =
          '<div class="puzzle-container" id="dgPuzzleContainer">' +
            '<div class="puzzle-board" id="dgPuzzleBoard">' +
              '<div class="puzzle-slot" id="dgSlot_s1" data-slot="s1"><span class="puzzle-slot__label">👑 1. Корона</span></div>' +
              '<div class="puzzle-slot" id="dgSlot_s2" data-slot="s2"><span class="puzzle-slot__label">👓 2. Глазки</span></div>' +
              '<div class="puzzle-slot" id="dgSlot_s3" data-slot="s3"><span class="puzzle-slot__label">💎 3. Элайнеры</span></div>' +
              '<div class="puzzle-slot" id="dgSlot_s4" data-slot="s4"><span class="puzzle-slot__label">🛡️ 4. Защита</span></div>' +
            '</div>' +
            '<div class="puzzle-tray" id="dgPuzzleTray"></div>' +
          '</div>';

        const tray = document.getElementById("dgPuzzleTray");
        const shuffled = [...PUZZLE_ITEMS].sort(() => Math.random() - 0.5);

        shuffled.forEach(p => {
          const btn = document.createElement("button");
          btn.className = "puzzle-piece-btn";
          btn.id = "dgPiece_" + p.id;
          btn.dataset.pieceId = p.id;
          btn.dataset.targetSlot = p.slot;
          btn.textContent = p.icon;
          btn.title = p.label;
          btn.type = "button";

          const clickHandler = (e) => {
            e.preventDefault();
            if (btn.classList.contains("placed")) return;

            playGameSound('card_flip');
            document.querySelectorAll(".puzzle-piece-btn").forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");
            selectedPuzzlePiece = p;

            document.querySelectorAll(".puzzle-slot").forEach(s => s.classList.remove("highlight"));
            const targetSlotEl = document.getElementById("dgSlot_" + p.slot);
            if (targetSlotEl && !targetSlotEl.classList.contains("filled")) {
              targetSlotEl.classList.add("highlight");
            }
          };

          btn.addEventListener('click', clickHandler);
          btn.addEventListener('pointerdown', clickHandler);
          tray.appendChild(btn);
        });

        document.querySelectorAll(".puzzle-slot").forEach(slotEl => {
          const slotHandler = (e) => {
            e.preventDefault();
            if (slotEl.classList.contains("filled")) return;

            const slotId = slotEl.dataset.slot;
            let pieceToPlace = selectedPuzzlePiece;

            if (!pieceToPlace || pieceToPlace.slot !== slotId) {
              const match = PUZZLE_ITEMS.find(p => p.slot === slotId);
              const matchBtn = document.getElementById("dgPiece_" + match.id);
              if (matchBtn && !matchBtn.classList.contains("placed")) {
                pieceToPlace = match;
              }
            }

            if (pieceToPlace && pieceToPlace.slot === slotId) {
              const pieceBtn = document.getElementById("dgPiece_" + pieceToPlace.id);
              if (pieceBtn) {
                pieceBtn.classList.remove("selected");
                pieceBtn.classList.add("placed");
              }
              slotEl.classList.remove("highlight");
              slotEl.classList.add("filled");
              slotEl.innerHTML = '<span style="font-size: 38px; line-height: 1;">' + pieceToPlace.icon + '</span><span class="puzzle-slot__label">' + pieceToPlace.label + '</span>';

              playGameSound('puzzle_snap');

              const rect = slotEl.getBoundingClientRect();
              const s = document.getElementById("dgGameStage");
              const sRect = s ? s.getBoundingClientRect() : { left: 0, top: 0 };
              const lx = rect.left - sRect.left + (rect.width || 80) / 2;
              const ly = rect.top - sRect.top + (rect.height || 80) / 2;

              triggerGameParticles(lx, ly, 18, 'laser');
              showGameSparkleFloat(lx, ly, '✨ ' + pieceToPlace.icon);

              selectedPuzzlePiece = null;
              puzzlePiecesLeft--;

              if (puzzlePiecesLeft <= 0) {
                onGameVictory("🧩✨👑💎🥇", "УРА! ПАЗЛ ПОЛНОСТЬЮ СОБРАН!", "Ты собрал супер-улыбку DENTAL GEN! Отличная логика и внимательность! 🌟");
              }
            } else {
              playGameSound('wrong');
            }
          };

          slotEl.addEventListener('click', slotHandler);
          slotEl.addEventListener('pointerdown', slotHandler);
        });
      }
    }

    // ==========================================
    // 4. 🧠 GAME: MEMORY MATCH (5-7 лет)
    // ==========================================
    const MEMORY_SYMBOLS = [
      { sym: "tooth", icon: "🦷" },
      { sym: "brush", icon: "🪥" },
      { sym: "apple", icon: "🍎" },
      { sym: "align", icon: "💎" }
    ];

    function startMemoryGame() {
      memoryFlippedCards = [];
      memoryMatchedPairs = 0;
      memoryIsLocked = false;

      const stage = document.getElementById("dgDynamicGameStage");
      if (!stage) return;

      const deck = [...MEMORY_SYMBOLS, ...MEMORY_SYMBOLS]
        .map((item, idx) => ({ ...item, uniqueId: idx }))
        .sort(() => Math.random() - 0.5);

      let gridHtml = '<div class="memory-container"><div class="memory-grid" id="dgMemoryGrid">';
      deck.forEach(card => {
        gridHtml +=
          '<div class="memory-card" data-sym="' + card.sym + '" data-uid="' + card.uniqueId + '">' +
            '<div class="memory-card__inner">' +
              '<div class="memory-card__back">?</div>' +
              '<div class="memory-card__front">' + card.icon + '</div>' +
            '</div>' +
          '</div>';
      });
      gridHtml += '</div></div>';
      stage.innerHTML = gridHtml;

      const grid = document.getElementById("dgMemoryGrid");
      grid.querySelectorAll(".memory-card").forEach(card => {
        const cardHandler = (e) => {
          e.preventDefault();
          if (memoryIsLocked || card.classList.contains("flipped") || card.classList.contains("matched")) return;

          card.classList.add("flipped");
          playGameSound('card_flip');
          memoryFlippedCards.push(card);

          if (memoryFlippedCards.length === 2) {
            memoryIsLocked = true;
            const [c1, c2] = memoryFlippedCards;
            if (c1.dataset.sym === c2.dataset.sym) {
              setTimeout(() => {
                c1.classList.add("matched");
                c2.classList.add("matched");
                playGameSound('match');

                const rect = c2.getBoundingClientRect();
                const s = document.getElementById("dgGameStage");
                const sRect = s ? s.getBoundingClientRect() : { left: 0, top: 0 };
                triggerGameParticles(rect.left - sRect.left + 20, rect.top - sRect.top + 20, 16, 'laser');
                showGameSparkleFloat(rect.left - sRect.left + 20, rect.top - sRect.top + 20, '⭐ ПАРА!');

                memoryMatchedPairs++;
                memoryFlippedCards = [];
                memoryIsLocked = false;

                if (memoryMatchedPairs === 4) {
                  onGameVictory("🧠✨💎🦷🥇", "СУПЕР-ПАМЯТЬ НА 100%!", "Ты нашёл все пары карточек без ошибок! Настоящий чемпион! 🌟");
                }
              }, 250);
            } else {
              setTimeout(() => {
                c1.classList.remove("flipped");
                c2.classList.remove("flipped");
                playGameSound('wrong');
                memoryFlippedCards = [];
                memoryIsLocked = false;
              }, 700);
            }
          }
        };
        card.addEventListener('click', cardHandler);
        card.addEventListener('pointerdown', cardHandler);
      });
    }

    // ==========================================
    // 5. 🍎 GAME: FOOD SORTER (5-7 лет)
    // ==========================================
    const SORTER_FOODS = [
      { id: "f1", icon: "🧀", name: "Сыр (Кальций)", isHealthy: true },
      { id: "f2", icon: "🍎", name: "Яблоко (Очищение)", isHealthy: true },
      { id: "f3", icon: "🥕", name: "Морковь (Дёсны)", isHealthy: true },
      { id: "f4", icon: "🍭", name: "Леденец (Сахар)", isHealthy: false, tip: "⚠️ Сахар вредит эмали!" },
      { id: "f5", icon: "🥤", name: "Газировка (Кислота)", isHealthy: false, tip: "⚠️ Кислота разрушает зубки!" }
    ];

    function startSorterGame() {
      sorterHealthyCollected = 0;
      const stage = document.getElementById("dgDynamicGameStage");
      if (!stage) return;

      const foods = [...SORTER_FOODS].sort(() => Math.random() - 0.5);

      stage.innerHTML =
        '<div class="sorter-container" id="dgSorterContainer">' +
          '<div class="sorter-basket" id="dgSorterBasket">' +
            '<span>🧺</span> <span id="dgBasketCount">Собрано полезных: 0 / 3</span>' +
          '</div>' +
          '<div class="sorter-items-row" id="dgSorterItemsRow"></div>' +
        '</div>';

      const row = document.getElementById("dgSorterItemsRow");
      const basketCountEl = document.getElementById("dgBasketCount");

      foods.forEach(f => {
        const btn = document.createElement("button");
        btn.className = "sorter-item-btn";
        btn.id = "dgFood_" + f.id;
        btn.type = "button";
        btn.innerHTML =
          '<span class="sorter-item-icon">' + f.icon + '</span>' +
          '<span class="sorter-item-label">' + f.name + '</span>';

        const foodHandler = (e) => {
          e.preventDefault();
          if (btn.classList.contains("collected")) return;

          if (f.isHealthy) {
            btn.classList.add("collected");
            playGameSound('basket');

            const rect = btn.getBoundingClientRect();
            const s = document.getElementById("dgGameStage");
            const sRect = s ? s.getBoundingClientRect() : { left: 0, top: 0 };
            triggerGameParticles(rect.left - sRect.left + 30, rect.top - sRect.top + 20, 18, 'bubble');
            showGameSparkleFloat(rect.left - sRect.left + 30, rect.top - sRect.top + 20, '🧺 ' + f.icon);

            sorterHealthyCollected++;
            if (basketCountEl) {
              basketCountEl.textContent = 'Корзинка Здоровья: собрано ' + sorterHealthyCollected + ' / 3';
            }

            if (sorterHealthyCollected >= 3) {
              onGameVictory("🍎✨🧀🥕🥇", "ЭКСПЕРТ ЗДОРОВОГО ПИТАНИЯ!", "Ты собрал все самые полезные продукты для крепких зубов и эмали! 🌟");
            }
          } else {
            btn.classList.remove("bad-shake");
            void btn.offsetWidth;
            btn.classList.add("bad-shake");
            playGameSound('wrong');

            const rect = btn.getBoundingClientRect();
            const s = document.getElementById("dgGameStage");
            const sRect = s ? s.getBoundingClientRect() : { left: 0, top: 0 };
            showGameSparkleFloat(rect.left - sRect.left + 30, rect.top - sRect.top + 10, f.tip);
          }
        };

        btn.addEventListener('click', foodHandler);
        btn.addEventListener('pointerdown', foodHandler);
        row.appendChild(btn);
      });
    }

    // ==========================================
    // 6. ⚡ GAME: CARIES BLASTER ARCADE (4-7 лет)
    // ==========================================
    const BLASTER_MONSTERS = ['👾', '🦠', '🍭', '🍫', '🥤', '🍩'];

    function startBlasterGame() {
      blasterScore = 0;
      const stage = document.getElementById("dgDynamicGameStage");
      if (!stage) return;

      stage.innerHTML =
        '<div class="blaster-container">' +
          '<div class="blaster-hud" id="dgBlasterHud">⚡ Побеждено монстриков: 0 / ' + blasterTargetScore + '</div>' +
          '<div class="blaster-stage-row" id="dgBlasterRow">' +
            '<div class="blaster-tooth" id="dgBT1">🦷</div>' +
            '<div class="blaster-tooth" id="dgBT2">🦷</div>' +
            '<div class="blaster-tooth" id="dgBT3">🦷</div>' +
            '<div class="blaster-tooth" id="dgBT4">🦷</div>' +
          '</div>' +
        '</div>';

      function spawnMonster() {
        if (currentGameId !== 'blaster') return;
        const row = document.getElementById("dgBlasterRow");
        if (!row) return;

        const toothIdx = Math.floor(Math.random() * 4) + 1;
        const toothEl = document.getElementById("dgBT" + toothIdx);
        if (!toothEl || toothEl.querySelector(".blaster-monster-target")) {
          setTimeout(spawnMonster, 300);
          return;
        }

        const monster = document.createElement("div");
        monster.className = "blaster-monster-target";
        monster.textContent = BLASTER_MONSTERS[Math.floor(Math.random() * BLASTER_MONSTERS.length)];

        const zapHandler = (e) => {
          e.preventDefault();
          e.stopPropagation();
          if (monster.classList.contains("defeated")) return;
          monster.classList.add("defeated");
          playGameSound('laser');

          const rect = monster.getBoundingClientRect();
          const s = document.getElementById("dgGameStage");
          const sRect = s ? s.getBoundingClientRect() : { left: 0, top: 0 };
          const lx = rect.left - sRect.left + 15;
          const ly = rect.top - sRect.top + 15;

          triggerGameParticles(lx, ly, 20, 'laser');
          showGameSparkleFloat(lx, ly, '💥 -1 Кариес!');

          blasterScore++;
          const hud = document.getElementById("dgBlasterHud");
          if (hud) hud.textContent = '⚡ Побеждено монстриков: ' + blasterScore + ' / ' + blasterTargetScore;

          setTimeout(() => monster.remove(), 250);

          if (blasterScore >= blasterTargetScore) {
            onGameVictory("⚡🏆✨🦷🥇", "УРА! ТЫ — СУПЕР-ЗАЩИТНИК ЭМАЛИ!", "Все кариесные монстрики повержены! Зубки под 100% защитой бластера! 🌟");
          } else {
            setTimeout(spawnMonster, 600);
          }
        };

        monster.addEventListener('click', zapHandler);
        monster.addEventListener('pointerdown', zapHandler);
        toothEl.appendChild(monster);

        setTimeout(() => {
          if (monster.parentElement && !monster.classList.contains("defeated")) {
            monster.remove();
            if (blasterScore < blasterTargetScore) setTimeout(spawnMonster, 400);
          }
        }, 2200);
      }

      spawnMonster();
      setTimeout(spawnMonster, 700);
    }

    // ==========================================
    // 7. 🎨 GAME: SMILE STYLIST (3-7 лет)
    // ==========================================
    function startStylistGame() {
      stylistCrown = '👑';
      stylistGlasses = '🕶️';
      stylistBraces = '⭐ ЗОЛОТЫЕ';

      const stage = document.getElementById("dgDynamicGameStage");
      const bottomBar = document.getElementById("dgBottomControlsBar");
      if (!stage) return;

      stage.innerHTML =
        '<div class="stylist-container">' +
          '<div class="stylist-avatar-wrap" id="dgStylistWrap">' +
            '<div class="stylist-accessory-crown" id="dgStyleCrown">' + stylistCrown + '</div>' +
            '<svg class="tooth-svg" id="dgStylistTooth" viewBox="0 0 240 260" fill="none" style="width: 100%; height: 100%;">' +
              '<path d="M120 18 C175 18, 218 55, 212 118 C208 160, 192 238, 158 244 C136 248, 128 208, 120 208 C112 208, 104 248, 82 244 C48 238, 32 160, 28 118 C22 55, 65 18, 120 18 Z" fill="#FFFFFF" stroke="#2F2076" stroke-width="8" stroke-linejoin="round"/>' +
              '<ellipse cx="62" cy="142" rx="14" ry="9" fill="#FFB3C6" opacity="0.75"/>' +
              '<ellipse cx="178" cy="142" rx="14" ry="9" fill="#FFB3C6" opacity="0.75"/>' +
              '<g id="dgStylistEyes">' +
                '<ellipse cx="82" cy="116" rx="10" ry="14" fill="#2F2076"/>' +
                '<circle cx="85" cy="111" r="4.5" fill="#FFFFFF"/>' +
                '<ellipse cx="158" cy="116" rx="10" ry="14" fill="#2F2076"/>' +
                '<circle cx="161" cy="111" r="4.5" fill="#FFFFFF"/>' +
              '</g>' +
              '<path d="M84 136 Q120 184 156 136 Z" fill="#FF3F62" stroke="#2F2076" stroke-width="5"/>' +
            '</svg>' +
            '<div class="stylist-accessory-glasses" id="dgStyleGlasses">' + stylistGlasses + '</div>' +
            '<div class="stylist-accessory-braces" id="dgStyleBraces">' + stylistBraces + '</div>' +
          '</div>' +
        '</div>';

      if (bottomBar) {
        bottomBar.innerHTML =
          '<div style="display: flex; flex-direction: column; gap: 6px; width: 100%; align-items: center;">' +
            '<div class="stylist-categories">' +
              '<button class="stylist-chip" data-type="hat" data-val="👑">👑 Корона</button>' +
              '<button class="stylist-chip" data-type="hat" data-val="🎓">🎓 Шапочка</button>' +
              '<button class="stylist-chip" data-type="hat" data-val="👨‍🚀">👨‍🚀 Шлем</button>' +
              '<button class="stylist-chip" data-type="hat" data-val="🧢">🧢 Кепка</button>' +
            '</div>' +
            '<div class="stylist-categories">' +
              '<button class="stylist-chip" data-type="glass" data-val="🕶️">🕶️ Крутые очки</button>' +
              '<button class="stylist-chip" data-type="glass" data-val="👓">👓 Умные очки</button>' +
              '<button class="stylist-chip" data-type="glass" data-val="🎀">🎀 Бантик</button>' +
              '<button class="stylist-chip" data-type="glass" data-val="🪄">🪄 Палочка</button>' +
            '</div>' +
            '<div class="stylist-categories">' +
              '<button class="stylist-chip" data-type="brace" data-val="⭐ ЗОЛОТЫЕ">⭐ Золотые</button>' +
              '<button class="stylist-chip" data-type="brace" data-val="💎 АЛМАЗНЫЕ">💎 Алмазные</button>' +
              '<button class="stylist-chip" data-type="brace" data-val="💜 СЕРДЕЧКИ">💜 Сердечки</button>' +
              '<button class="stylist-chip" data-type="brace" data-val="🌈 НЕОН">🌈 Неон</button>' +
            '</div>' +
            '<button class="stylist-photo-btn" id="dgStylePhotoBtn" type="button"><span>📸</span> <span>Сохранить стильный образ!</span></button>' +
          '</div>';

        document.querySelectorAll(".stylist-chip").forEach(chip => {
          chip.addEventListener('click', (e) => {
            e.preventDefault();
            playGameSound('puzzle_snap');
            const type = chip.dataset.type;
            const val = chip.dataset.val;

            if (type === 'hat') {
              const el = document.getElementById("dgStyleCrown");
              if (el) el.textContent = val;
            } else if (type === 'glass') {
              const el = document.getElementById("dgStyleGlasses");
              if (el) el.textContent = val;
            } else if (type === 'brace') {
              const el = document.getElementById("dgStyleBraces");
              if (el) el.textContent = val;
            }

            const wrap = document.getElementById("dgStylistWrap");
            const rect = wrap ? wrap.getBoundingClientRect() : { left: 0, top: 0, width: 150, height: 150 };
            const s = document.getElementById("dgGameStage");
            const sRect = s ? s.getBoundingClientRect() : { left: 0, top: 0 };
            triggerGameParticles(rect.left - sRect.left + 75, rect.top - sRect.top + 75, 14, 'laser');
          });
        });

        const photoBtn = document.getElementById("dgStylePhotoBtn");
        if (photoBtn) {
          photoBtn.addEventListener('click', (e) => {
            e.preventDefault();
            playGameSound('match');
            const wrap = document.getElementById("dgStylistWrap");
            if (wrap) wrap.classList.add("super-sparkle");
            onGameVictory("🎨✨👑💎🥇", "СУПЕР-СТИЛИСТ УЛЫБОК!", "Твой персональный Зубик выглядит невероятно стильно и ярко! 🌟");
          });
        }
      }
    }

    // ==========================================
    // 8. 🔍 GAME: MICROBES DETECTIVE (4-7 лет)
    // ==========================================
    function startDetectiveGame() {
      detectiveFound = 0;
      const stage = document.getElementById("dgDynamicGameStage");
      if (!stage) return;

      const spots = [
        { id: "d1", icon: "👾", top: "22%", left: "18%" },
        { id: "d2", icon: "🦠", top: "68%", left: "28%" },
        { id: "d3", icon: "👾", top: "25%", left: "75%" },
        { id: "d4", icon: "🦠", top: "70%", left: "80%" }
      ];

      stage.innerHTML =
        '<div class="detective-container">' +
          '<div class="blaster-hud" id="dgDetectiveHud">🔍 Найдено микробов: 0 / ' + detectiveTarget + '</div>' +
          '<div class="detective-board" id="dgDetectiveBoard">' +
            '<div style="font-size: clamp(28px, 6.5vw, 42px); opacity: 0.85; filter: drop-shadow(0 0 10px #7048c4); white-space: nowrap; letter-spacing: 4px;">🦷 🦷 🦷 🦷</div>' +
            '<div id="dgDetectiveSpotsLayer"></div>' +
          '</div>' +
        '</div>';

      const spotsLayer = document.getElementById("dgDetectiveSpotsLayer");
      spots.forEach(sp => {
        const spot = document.createElement("div");
        spot.className = "detective-spot";
        spot.id = "dgDetSpot_" + sp.id;
        spot.style.top = sp.top;
        spot.style.left = sp.left;
        spot.textContent = sp.icon;

        const findHandler = (e) => {
          e.preventDefault();
          if (spot.classList.contains("found")) return;
          spot.classList.add("found");
          playGameSound('card_flip');

          const rect = spot.getBoundingClientRect();
          const s = document.getElementById("dgGameStage");
          const sRect = s ? s.getBoundingClientRect() : { left: 0, top: 0 };
          triggerGameParticles(rect.left - sRect.left + 15, rect.top - sRect.top + 15, 18, 'bubble');
          showGameSparkleFloat(rect.left - sRect.left + 15, rect.top - sRect.top + 15, '🔍 НАЙДЕН!');

          detectiveFound++;
          const hud = document.getElementById("dgDetectiveHud");
          if (hud) hud.textContent = '🔍 Найдено микробов: ' + detectiveFound + ' / ' + detectiveTarget;

          if (detectiveFound >= detectiveTarget) {
            onGameVictory("🔍✨🏆🦷🥇", "ГЛАВНЫЙ ДЕТЕКТИВ ЗДОРОВЬЯ!", "Ты отыскал всех скрытых микробов! Теперь зубки в полной безопасности! 🌟");
          }
        };

        spot.addEventListener('click', findHandler);
        spot.addEventListener('pointerdown', findHandler);
        spotsLayer.appendChild(spot);
      });
    }

    function resetEmbeddedGame() {
      if (currentGameId === 'hub') showGameHub();
      else launchGame(currentGameId);
    }

    window.openGameModal = (gameOrMode) => {
      let modal = document.getElementById("gameModal");
      if (!modal) {
        addKidsGame();
        modal = document.getElementById("gameModal");
      }
      if (!modal) return;
      modal.classList.add("is-open");
      document.body.classList.add("dg-modal-open");

      setTimeout(() => {
        resizeGameCanvas();
        if (!gameOrMode || gameOrMode === 'hub') {
          showGameHub('all');
        } else if (gameOrMode === 'toddler') {
          launchGame('toddler_spa');
        } else if (gameOrMode === 'older') {
          launchGame('puzzle');
        } else {
          launchGame(gameOrMode);
        }
      }, 50);
    };

    window.closeGameModal = () => {
      const modal = document.getElementById("gameModal");
      if (!modal) return;
      modal.classList.remove("is-open");
      document.body.classList.remove("dg-modal-open");
    };

    window.__dgCurrentSlide = 0;
    window.setProgramSlide = (index) => {
      const cards = document.querySelectorAll(".dg-pcard");
      const dots = document.querySelectorAll(".dg-carousel-dot");
      if (!cards.length) return;
      const normalized = ((index % cards.length) + cards.length) % cards.length;
      cards.forEach((card, i) => {
        if (i === normalized) card.classList.add("is-active");
        else card.classList.remove("is-active");
      });
      dots.forEach((dot, i) => {
        if (i === normalized) dot.classList.add("is-active");
        else dot.classList.remove("is-active");
      });
      window.__dgCurrentSlide = normalized;
    };

    window.nextProgramSlide = () => {
      const current = window.__dgCurrentSlide || 0;
      window.setProgramSlide(current + 1);
    };

    window.prevProgramSlide = () => {
      const current = window.__dgCurrentSlide || 0;
      window.setProgramSlide(current - 1);
    };

    if (!window.__dgEventsBound) {
      window.__dgEventsBound = true;
      document.addEventListener("click", (e) => {
        // Hub Filters
        const filterBtn = e.target.closest(".hub-filter-btn");
        if (filterBtn && filterBtn.dataset.filter) {
          e.preventDefault();
          showGameHub(filterBtn.dataset.filter);
          return;
        }

        // Back to Hub Button
        if (e.target.closest("#dgBackToHubBtn") || e.target.closest("#dgHubReturnBtn")) {
          e.preventDefault();
          showGameHub();
          return;
        }

        // Prev slide button
        if (e.target.closest("#carouselPrevBtn") || e.target.closest(".framer-bayurr-container a")) {
          e.preventDefault();
          e.stopPropagation();
          window.prevProgramSlide();
          return;
        }
        // Next button
        if (e.target.closest("#carouselNextBtn") || e.target.closest(".framer-1kxwop3-container a")) {
          e.preventDefault();
          e.stopPropagation();
          window.nextProgramSlide();
          return;
        }
        // Dots
        const dot = e.target.closest(".dg-carousel-dot");
        if (dot && dot.dataset.index !== undefined) {
          e.preventDefault();
          e.stopPropagation();
          window.setProgramSlide(parseInt(dot.dataset.index, 10));
          return;
        }
        // Game Modal Open
        const openBtn = e.target.closest(".dg-open-game-btn") || e.target.closest("#openGameModalBtn") || e.target.closest("#openGameModalPreview") || e.target.closest("#storyOpenGameBtn") || e.target.closest("#floatingGameBtn");
        if (openBtn) {
          e.preventDefault();
          const mode = openBtn.dataset?.gameMode || (openBtn.id === 'openGameModalBtn' ? 'older' : undefined);
          window.openGameModal(mode);
          return;
        }
        // Game Modal Close
        if (e.target.closest("#closeGameModalBtn") || e.target.closest("#gameModalBackdrop")) {
          e.preventDefault();
          window.closeGameModal();
          return;
        }
        // Embedded Game Controls
        if (e.target.closest("#dgToolBrush")) {
          e.preventDefault();
          if (gameStep === 1) startEmbeddedStep1();
          return;
        }
        if (e.target.closest("#dgToolWater")) {
          e.preventDefault();
          if (gameStep === 2) startEmbeddedStep2();
          return;
        }
        if (e.target.closest("#dgToolApple")) {
          e.preventDefault();
          if (gameStep === 3) startEmbeddedStep3();
          return;
        }
        if (e.target.closest("#dgToolPuzzle")) {
          e.preventDefault();
          if (gameStep === 1) startOlderStep1();
          return;
        }
        if (e.target.closest("#dgToolMemory")) {
          e.preventDefault();
          if (gameStep === 2) startOlderStep2();
          return;
        }
        if (e.target.closest("#dgToolSorter")) {
          e.preventDefault();
          if (gameStep === 3) startOlderStep3();
          return;
        }
        if (e.target.closest("#dgSoundToggle")) {
          e.preventDefault();
          gameSoundEnabled = !gameSoundEnabled;
          const btn = document.getElementById("dgSoundToggle");
          if (btn) btn.textContent = gameSoundEnabled ? '🔊' : '🔇';
          if (gameSoundEnabled) playGameSound('step_complete');
          return;
        }
        if (e.target.closest("#dgReplayBtn")) {
          e.preventDefault();
          resetEmbeddedGame();
          return;
        }
      }, true);

      let touchStartX = 0;
      let touchStartY = 0;
      document.addEventListener("touchstart", (e) => {
        const wrapper = e.target.closest(".dg-carousel-cards-wrapper, [data-framer-name^='Feature']");
        if (wrapper && e.touches.length === 1) {
          touchStartX = e.touches[0].clientX;
          touchStartY = e.touches[0].clientY;
        }
      }, { passive: true });

      document.addEventListener("touchend", (e) => {
        const wrapper = e.target.closest(".dg-carousel-cards-wrapper, [data-framer-name^='Feature']");
        if (wrapper && e.changedTouches.length === 1) {
          const deltaX = e.changedTouches[0].clientX - touchStartX;
          const deltaY = e.changedTouches[0].clientY - touchStartY;
          if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX < 0) window.nextProgramSlide();
            else window.prevProgramSlide();
          }
        }
      }, { passive: true });

      window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          window.closeGameModal();
        }
        if (e.key === "ArrowLeft") {
          window.prevProgramSlide();
        }
        if (e.key === "ArrowRight") {
          window.nextProgramSlide();
        }
      });
    }

    const insertParentQuestionsSection = () => {
      if (document.querySelector(".dg-parent-questions-section")) return;

      const hero = document.querySelector('[data-framer-name="Hero"]');
      if (!hero) return;

      const section = document.createElement("section");
      section.className = "dg-parent-questions-section";
      section.id = "parent-questions";
      section.innerHTML = '<div class="dg-pq-container">' +
        '<!-- Surrounding Doodles -->' +
        '<div class="dg-pq-doodles" aria-hidden="true">' +
          '<svg class="dg-pq-doodle dg-pq-doodle-star-tl" viewBox="0 0 50 50" fill="none"><path d="M 25 3 L 31 18 L 47 18 L 34 28 L 39 44 L 25 34 L 11 44 L 16 28 L 3 18 L 19 18 Z" stroke="#a288e3" stroke-width="2.2" stroke-linejoin="round"/></svg>' +
          '<svg class="dg-pq-doodle dg-pq-doodle-star-tr" viewBox="0 0 50 50" fill="none"><path d="M 25 3 L 31 18 L 47 18 L 34 28 L 39 44 L 25 34 L 11 44 L 16 28 L 3 18 L 19 18 Z" stroke="#f5b82e" stroke-width="2.2" stroke-linejoin="round"/></svg>' +
          '<div class="dg-pq-doodle dg-pq-doodle-planet-tr"><svg viewBox="0 0 70 50" fill="none"><ellipse cx="35" cy="25" rx="16" ry="16" fill="#f4eeff" stroke="#9d74e8" stroke-width="2"/><ellipse cx="35" cy="25" rx="28" ry="8" stroke="#9d74e8" stroke-width="1.8" stroke-dasharray="4 4" transform="rotate(-15 35 25)"/></svg></div>' +
          '<svg class="dg-pq-doodle dg-pq-doodle-star-ml" viewBox="0 0 50 50" fill="none"><path d="M 25 3 L 31 18 L 47 18 L 34 28 L 39 44 L 25 34 L 11 44 L 16 28 L 3 18 L 19 18 Z" stroke="#00b4a7" stroke-width="2.2" stroke-linejoin="round"/></svg>' +
          '<svg class="dg-pq-doodle dg-pq-doodle-heart-ml" viewBox="0 0 46 42" fill="none"><path d="M 23 38 C 23 38, 5 26, 5 13 C 5 6, 11 2, 17 2 C 21 2, 23 5, 23 5 C 23 5, 25 2, 29 2 C 35 2, 41 6, 41 13 C 41 26, 23 38, 23 38 Z" stroke="#a288e3" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
          '<svg class="dg-pq-doodle dg-pq-doodle-star-mr" viewBox="0 0 50 50" fill="none"><path d="M 25 3 L 31 18 L 47 18 L 34 28 L 39 44 L 25 34 L 11 44 L 16 28 L 3 18 L 19 18 Z" stroke="#f04d6f" stroke-width="2.2" stroke-linejoin="round"/></svg>' +
          '<svg class="dg-pq-doodle dg-pq-doodle-star-ry" viewBox="0 0 40 40" fill="none"><path d="M 20 3 L 24 14 L 36 14 L 26 22 L 30 34 L 20 26 L 10 34 L 14 22 L 4 14 L 16 14 Z" stroke="#f5b82e" stroke-width="2" stroke-linejoin="round"/></svg>' +
          '<svg class="dg-pq-doodle dg-pq-doodle-star-ll" viewBox="0 0 50 50" fill="none"><path d="M 25 3 L 31 18 L 47 18 L 34 28 L 39 44 L 25 34 L 11 44 L 16 28 L 3 18 L 19 18 Z" stroke="#f5b82e" stroke-width="2.2" stroke-linejoin="round"/></svg>' +
          '<div class="dg-pq-doodle dg-pq-doodle-shooting-star"><svg viewBox="0 0 100 70" fill="none"><path d="M 20 60 L 50 35 M 35 65 L 60 40 M 10 50 L 45 28" stroke="#f5b82e" stroke-width="2" stroke-linecap="round"/><path d="M 75 10 L 80 22 L 92 22 L 82 30 L 86 42 L 75 34 L 64 42 L 68 30 L 58 22 L 70 22 Z" stroke="#f5b82e" stroke-width="2.2" stroke-linejoin="round" fill="#fff9db"/></svg></div>' +
          '<svg class="dg-pq-doodle dg-pq-doodle-star-bl" viewBox="0 0 50 50" fill="none"><path d="M 25 3 L 31 18 L 47 18 L 34 28 L 39 44 L 25 34 L 11 44 L 16 28 L 3 18 L 19 18 Z" stroke="#a288e3" stroke-width="2.2" stroke-linejoin="round"/></svg>' +
          '<div class="dg-pq-doodle dg-pq-doodle-moon-bc"><svg viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="22" stroke="#00b4a7" stroke-width="2" fill="#e6faf8"/><circle cx="24" cy="22" r="3" stroke="#00b4a7" stroke-width="1.5"/><circle cx="38" cy="28" r="4.5" stroke="#00b4a7" stroke-width="1.5"/><circle cx="28" cy="38" r="3.5" stroke="#00b4a7" stroke-width="1.5"/></svg></div>' +
          '<svg class="dg-pq-doodle dg-pq-doodle-star-br" viewBox="0 0 50 50" fill="none"><path d="M 25 3 L 31 18 L 47 18 L 34 28 L 39 44 L 25 34 L 11 44 L 16 28 L 3 18 L 19 18 Z" stroke="#f04d6f" stroke-width="2.2" stroke-linejoin="round"/></svg>' +
        '</div>' +

        '<!-- 3 Speech Bubbles -->' +
        '<div class="dg-pq-bubbles-list">' +
          '<div class="dg-pq-speech-bubble dg-pq-speech-bubble--purple">' +
            '<div class="dg-pq-bubble-qmark">?</div>' +
            '<div class="dg-pq-bubble-text">Как стать уверенным родителем при появлении малыша и заботиться о его зубах?</div>' +
          '</div>' +
          '<div class="dg-pq-speech-bubble dg-pq-speech-bubble--teal">' +
            '<div class="dg-pq-bubble-qmark">?</div>' +
            '<div class="dg-pq-bubble-text">Как не переживать, все ли в порядке с зубками вашего ребенка?</div>' +
          '</div>' +
          '<div class="dg-pq-speech-bubble dg-pq-speech-bubble--pink">' +
            '<div class="dg-pq-bubble-qmark">?</div>' +
            '<div class="dg-pq-bubble-text">Правильно ли развивается его ротовая полость и как помочь, если возникают проблемы?</div>' +
          '</div>' +
        '</div>' +

        '<!-- Text Paragraphs -->' +
        '<div class="dg-pq-text-body">' +
          '<p>Вопросов у родителей всегда много. Ведь здоровье ребенка начинается с внимания к мелочам, а здоровая улыбка — с самых первых зубов. Мы создали программы <strong class="dg-pq-highlight">«Растём с улыбкой»</strong>, чтобы вы были уверены: развитие зубов проходит правильно, а рядом всегда есть детский стоматолог, готовый поддержать и ответить на любые вопросы.</p>' +
          '<p>На следующих страницах мы покажем, как годовые программы сопровождения помогают семьям на разных этапах взросления ребенка. История вымышленная, а ситуации — самые настоящие.</p>' +
        '</div>' +

        '<!-- Meet Family Header -->' +
        '<div class="dg-pq-family-header">' +
          '<div class="dg-pq-intro-pill">Знакомьтесь:</div>' +
          '<div class="dg-pq-intro-arrow">' +
            '<svg viewBox="0 0 60 40" fill="none"><path d="M 8 16 C 8 16, 2 11, 2 6 C 2 3, 4 1, 7 1 C 9 1, 10 3, 10 3 C 10 3, 11 1, 13 1 C 16 1, 18 3, 18 6 C 18 11, 8 16, 8 16 Z" stroke="#a288e3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M 22 10 Q 38 10 42 26 L 36 22 M 42 26 L 46 20" stroke="#a288e3" stroke-width="1.8" stroke-dasharray="3 3" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
          '</div>' +
        '</div>' +

        '<!-- 4 Family Character Avatars -->' +
        '<div class="dg-pq-characters-grid">' +
          '<div class="dg-pq-char-card">' +
            '<div class="dg-pq-char-avatar-wrap"><img src="assets/dental-gen/char-mama.png" alt="Мама Ирина" class="dg-pq-char-img"></div>' +
            '<div class="dg-pq-char-pill dg-pq-char-pill--yellow">Мама Ирина</div>' +
          '</div>' +
          '<div class="dg-pq-char-card">' +
            '<div class="dg-pq-char-avatar-wrap"><img src="assets/dental-gen/char-papa.png" alt="Папа Дмитрий" class="dg-pq-char-img"></div>' +
            '<div class="dg-pq-char-pill dg-pq-char-pill--blue">Папа Дмитрий</div>' +
          '</div>' +
          '<div class="dg-pq-char-card">' +
            '<div class="dg-pq-char-avatar-wrap"><img src="assets/dental-gen/char-sasha.png" alt="Саша" class="dg-pq-char-img"></div>' +
            '<div class="dg-pq-char-pill dg-pq-char-pill--purple">Саша</div>' +
          '</div>' +
          '<div class="dg-pq-char-card">' +
            '<div class="dg-pq-char-avatar-wrap"><img src="assets/dental-gen/char-barsik.png" alt="Кот Барсик" class="dg-pq-char-img"></div>' +
            '<div class="dg-pq-char-pill dg-pq-char-pill--yellow">Кот Барсик</div>' +
          '</div>' +
        '</div>' +
      '</div>';

      if (hero.nextSibling) {
        hero.parentNode.insertBefore(section, hero.nextSibling);
      } else {
        hero.parentNode.appendChild(section);
      }
    };

    const enhanceProgramsCarousel = () => {
      if (document.querySelector(".dg-programs-carousel-section")) return;

      const section = document.createElement("section");
      section.className = "dg-programs-carousel-section";
      section.id = "programs";
      section.innerHTML = '<div class="dg-carousel-headline"><h3>С DENTAL GEN ВЫ МОЖЕТЕ:</h3><p>ПОМОГАЮТ ВОВРЕМЯ ЗАБОТИТЬСЯ О ЗУБАХ И ПРИКУСЕ РЕБЁНКА</p></div>' +
        '<div class="dg-programs-carousel" id="programsCarousel">' +
          '<div class="dg-carousel-cards-wrapper" id="carouselCardsWrapper">' +
            '<!-- Card 1: 1-3 года -->' +
            '<article class="dg-pcard dg-pcard--1 is-active" data-index="0">' +
              '<div class="dg-pcard__inner">' +
                '<div class="dg-pcard__media">' +
                  '<img src="assets/dental-gen/slide-baby-tooth.svg" alt="Первые зубки (1-3 года)" class="dg-pcard__img">' +
                '</div>' +
                '<div class="dg-pcard__body">' +
                  '<span class="dg-pcard__badge">1–3 ГОДА</span>' +
                  '<h3 class="dg-pcard__title">«Первые зубки»</h3>' +
                  '<p class="dg-pcard__lead">Бережная забота и формирование правильных привычек с самого первого зубика. Адаптируем малыша к стоматологу без слёз и страха.</p>' +
                  '<ul class="dg-pcard__list">' +
                    '<li><span class="dg-pcard__icon">✨</span><span><strong>Мягкая адаптация</strong> в игровой форме без стресса</span></li>' +
                    '<li><span class="dg-pcard__icon">🪥</span><span><strong>Обучение родителей</strong> правильной технике чистки</span></li>' +
                    '<li><span class="dg-pcard__icon">🦷</span><span><strong>Контроль прорезывания</strong> и здоровья первых зубов</span></li>' +
                  '</ul>' +
                  '<a class="dg-pcard__cta" href="tel:+79109900060">Записаться на программу</a>' +
                  '<button class="dg-pcard__game-btn dg-open-game-btn" data-game-mode="toddler" type="button"><span>👶</span> <span>Сыграть: «Почисти зубик» (1–3 года)</span></button>' +
                '</div>' +
              '</div>' +
            '</article>' +
            '<!-- Card 2: 3-5 лет -->' +
            '<article class="dg-pcard dg-pcard--2" data-index="1">' +
              '<div class="dg-pcard__inner">' +
                '<div class="dg-pcard__media">' +
                  '<img src="assets/dental-gen/slide-protect-tooth.svg" alt="Под защитой улыбки (3-5 лет)" class="dg-pcard__img">' +
                '</div>' +
                '<div class="dg-pcard__body">' +
                  '<span class="dg-pcard__badge">3–5 ЛЕТ</span>' +
                  '<h3 class="dg-pcard__title">«Под защитой улыбки»</h3>' +
                  '<p class="dg-pcard__lead">Сохраняем молочные зубы крепкими и здоровыми. Профилактика кариеса, бережный уход и позитивный опыт визитов.</p>' +
                  '<ul class="dg-pcard__list">' +
                    '<li><span class="dg-pcard__icon">🛡️</span><span><strong>Защита от кариеса</strong> и укрепление зубной эмали</span></li>' +
                    '<li><span class="dg-pcard__icon">🫧</span><span><strong>Бережная гигиена</strong> и полировка без боли</span></li>' +
                    '<li><span class="dg-pcard__icon">🧸</span><span><strong>Индивидуальный подбор</strong> детской щётки и пасты</span></li>' +
                  '</ul>' +
                  '<a class="dg-pcard__cta" href="tel:+79109900060">Записаться на программу</a>' +
                  '<button class="dg-pcard__game-btn dg-open-game-btn" data-game-mode="toddler" type="button"><span>👶</span> <span>Сыграть: «Защита зубика» (3–5 лет)</span></button>' +
                '</div>' +
              '</div>' +
            '</article>' +
            '<!-- Card 3: 5-7 лет -->' +
            '<article class="dg-pcard dg-pcard--3" data-index="2">' +
              '<div class="dg-pcard__inner">' +
                '<div class="dg-pcard__media">' +
                  '<img src="assets/dental-gen/slide-straight-tooth.svg" alt="Ровная улыбка (5-7 лет)" class="dg-pcard__img">' +
                '</div>' +
                '<div class="dg-pcard__body">' +
                  '<span class="dg-pcard__badge">5–7 ЛЕТ</span>' +
                  '<h3 class="dg-pcard__title">«Ровная улыбка»</h3>' +
                  '<p class="dg-pcard__lead">Следим за правильным развитием прикуса и естественной сменой зубов. Формируем здоровую и красивую улыбку к школе.</p>' +
                  '<ul class="dg-pcard__list">' +
                    '<li><span class="dg-pcard__icon">🧩</span><span><strong>Развивающие игры и пазлы</strong> для познания здоровья зубок</span></li>' +
                    '<li><span class="dg-pcard__icon">📐</span><span><strong>Осмотр ортодонта</strong> и контроль развития челюстей</span></li>' +
                    '<li><span class="dg-pcard__icon">🌟</span><span><strong>ИИ-диагностика Diagnocat</strong> для точной оценки прикуса</span></li>' +
                  '</ul>' +
                  '<a class="dg-pcard__cta" href="tel:+79109900060">Записаться на программу</a>' +
                  '<button class="dg-pcard__game-btn dg-open-game-btn" data-game-mode="older" type="button"><span>🧩</span> <span>Сыграть: «Пазлы & Мемори» (5–7 лет)</span></button>' +
                '</div>' +
              '</div>' +
            '</article>' +
          '</div>' +
          '<!-- Arrow Controls -->' +
          '<button class="dg-carousel-arrow dg-carousel-arrow--prev" id="carouselPrevBtn" type="button" aria-label="Предыдущая программа" title="Назад">' +
            '<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>' +
          '</button>' +
          '<button class="dg-carousel-arrow dg-carousel-arrow--next" id="carouselNextBtn" type="button" aria-label="Следующая программа" title="Вперед">' +
            '<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></svg>' +
          '</button>' +
          '<!-- Dots indicators -->' +
          '<div class="dg-carousel-dots" id="carouselDots">' +
            '<button class="dg-carousel-dot is-active" data-index="0" type="button" aria-label="1–3 года: Первые зубки"></button>' +
            '<button class="dg-carousel-dot" data-index="1" type="button" aria-label="3–5 лет: Под защитой улыбки"></button>' +
            '<button class="dg-carousel-dot" data-index="2" type="button" aria-label="5–7 лет: Ровная улыбка"></button>' +
          '</div>' +
        '</div>';

      const mission = document.querySelector('[data-framer-name="Mission"], #mission, #mission-block');
      if (mission && mission.parentNode) {
        if (mission.nextSibling) {
          mission.parentNode.insertBefore(section, mission.nextSibling);
        } else {
          mission.parentNode.appendChild(section);
        }
      } else {
        document.body.appendChild(section);
      }
    };

    const addKidsGame = () => {
      // 1. Teaser Section
      if (!document.querySelector(".dg-game-teaser")) {
        const teaser = document.createElement("section");
        teaser.className = "dg-game-teaser";
        teaser.id = "game-teaser";
        teaser.setAttribute("aria-label", "Детские интерактивные игры DENTAL GEN");
        teaser.innerHTML =
          '<div class="dg-shell">' +
            '<div class="dg-game-teaser__card">' +
              '<div class="dg-game-teaser__left">' +
                '<div class="dg-game-teaser__badges">' +
                  '<span class="dg-game-teaser__badge">🎮 8 ИНТЕРАКТИВНЫХ ИГР</span>' +
                  '<span class="dg-game-teaser__badge dg-game-teaser__badge--older">⭐ 1–7 ЛЕТ</span>' +
                '</div>' +
                '<h3>Детский Игровой Клуб DENTAL GEN</h3>' +
                '<p>Коллекция развивающих игр: от спа-ухода за зубиком и музыкального ксилофона до пазлов, тренировки памяти, аркадного кариес-бластера и стилиста улыбок!</p>' +
                '<div class="dg-game-teaser__buttons">' +
                  '<button class="dg-game-teaser__btn dg-open-game-btn" data-game-mode="hub" type="button"><span>🎮</span> <span>Открыть каталог игр (8)</span></button>' +
                  '<button class="dg-game-teaser__btn dg-game-teaser__btn--older dg-open-game-btn" data-game-mode="older" type="button"><span>🧩</span> <span>Пазлы и логика</span></button>' +
                '</div>' +
              '</div>' +
              '<div class="dg-game-teaser__right dg-open-game-btn" id="openGameModalPreview" data-game-mode="hub" title="Нажмите, чтобы сыграть!">' +
                '<div class="dg-interactive-mascot-cards">' +
                  '<!-- 4 Fan Cards -->' +
                  '<div class="dg-fan-card dg-fan-card--tree">' +
                    '<img src="https://framerusercontent.com/images/o4kG5r9VA6oLyrfl6ZxmYx10vOM.png" alt="Дерево">' +
                  '</div>' +
                  '<div class="dg-fan-card dg-fan-card--ball">' +
                    '<img src="https://framerusercontent.com/images/ss65jCMb9knxIHcQfO5Dgn5k.png" alt="Мячик">' +
                  '</div>' +
                  '<div class="dg-fan-card dg-fan-card--book">' +
                    '<img src="https://framerusercontent.com/images/gjrxncSvy18re4OiuiIFhp0epjM.png" alt="Книжка">' +
                  '</div>' +
                  '<div class="dg-fan-card dg-fan-card--drum">' +
                    '<img src="https://framerusercontent.com/images/BUxkMnZKrNGcfulgLmLHgdGIFE.png" alt="Барабан">' +
                  '</div>' +
                  '<!-- Foreground Pink Card with Mascot & Pointer -->' +
                  '<div class="dg-mascot-main-card">' +
                    '<div class="dg-mascot-pointer">' +
                      '<svg viewBox="0 0 36 36" fill="none">' +
                        '<path d="M6 3 L30 15 L18 20 L13 32 Z" fill="#5fe3b3" stroke="#03594d" stroke-width="2.5" stroke-linejoin="round"/>' +
                      '</svg>' +
                    '</div>' +
                    '<div class="dg-mascot-svg-wrap">' +
                      '<svg viewBox="0 0 121 170" fill="none" style="width: 100%; height: 100%;">' +
                        '<path d="M60.1709 0.0148926C27.0796 0.0148926 0.252441 27.2344 0.252441 60.8097V169.985H55.2744V103.962C55.2744 101.211 57.4723 98.9814 60.1831 98.9814C62.8939 98.9814 65.0918 101.211 65.0918 103.962V169.985H120.102V60.8097C120.102 27.2344 93.2744 0.0148926 60.1831 0.0148926H60.1709Z" fill="#03594d"/>' +
                        '<circle cx="40.5" cy="55" r="7.5" fill="#fccddc"/>' +
                        '<circle cx="79.5" cy="55" r="7.5" fill="#fccddc"/>' +
                        '<circle cx="28" cy="72" r="6" fill="#ffb6c1" opacity="0.9"/>' +
                        '<circle cx="92" cy="72" r="6" fill="#ffb6c1" opacity="0.9"/>' +
                        '<path d="M52 70 Q60 82 68 70" stroke="#fccddc" stroke-width="4" stroke-linecap="round" fill="none"/>' +
                      '</svg>' +
                    '</div>' +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>';
        const checkup = document.querySelector(".dg-checkup-section");
        const ref = checkup || document.querySelector(".dg-programs-carousel-section");
        if (ref && ref.parentNode) {
          if (ref.nextSibling) {
            ref.parentNode.insertBefore(teaser, ref.nextSibling);
          } else {
            ref.parentNode.appendChild(teaser);
          }
        } else {
          document.body.appendChild(teaser);
        }
      }

      // 2. Modal Overlay with Native Embedded Game (Zero iframe)
      if (!document.getElementById("gameModal")) {
        const modal = document.createElement("div");
        modal.className = "dg-game-modal";
        modal.id = "gameModal";
        modal.setAttribute("role", "dialog");
        modal.setAttribute("aria-modal", "true");
        modal.setAttribute("aria-label", "Детские развивающие игры DENTAL GEN");
        modal.innerHTML =
          '<div class="dg-game-modal__backdrop" id="gameModalBackdrop"></div>' +
          '<div class="dg-game-modal__container">' +
            '<div class="game-wrapper">' +
              '<header class="game-header">' +
                '<div class="game-header-top-bar">' +
                  '<button class="game-back-btn" id="dgBackToHubBtn" style="display: none;" type="button"><span>⬅️</span> <span>Все игры</span></button>' +
                  '<div class="game-header-actions">' +
                    '<button class="sound-toggle" id="dgSoundToggle" aria-label="Включить / выключить звук" title="Звук" type="button">🔊</button>' +
                    '<button class="dg-game-modal__close" id="closeGameModalBtn" aria-label="Закрыть игру" title="Закрыть" type="button">✕</button>' +
                  '</div>' +
                '</div>' +
                '<div class="game-badge" id="dgGameBadge">🎮 ДЕТСКИЙ ИГРОВОЙ КЛУБ</div>' +
                '<h2 class="game-title" id="dgGameTitle">Выбери развивающую игру!</h2>' +
              '</header>' +
              '<!-- 1. HUB VIEW (Каталог игр) -->' +
              '<div class="game-hub-container" id="dgGameHubView">' +
                '<div class="hub-filters">' +
                  '<button class="hub-filter-btn active" data-filter="all"><span>🌟 Все игры (8)</span></button>' +
                  '<button class="hub-filter-btn" data-filter="toddler"><span>👶 1–4 года</span></button>' +
                  '<button class="hub-filter-btn" data-filter="older"><span>🧩 5–7 лет</span></button>' +
                  '<button class="hub-filter-btn" data-filter="arcade"><span>🎨 Творчество & Аркады</span></button>' +
                '</div>' +
                '<div class="hub-grid" id="dgHubGrid"></div>' +
              '</div>' +
              '<!-- 2. ACTIVE GAME VIEW -->' +
              '<div class="game-card" id="dgGameActiveView" style="display: none;">' +
                '<div class="hint-banner" id="dgGameHintBanner">' +
                  '<span id="dgGameHintEmoji">🧩</span> <span id="dgGameHintText">Инструкция к игре</span>' +
                '</div>' +
                '<div class="stage" id="dgGameStage">' +
                  '<canvas class="particle-canvas" id="dgGameParticleCanvas"></canvas>' +
                  '<div id="dgDynamicGameStage" style="width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;"></div>' +
                  '<div id="dgGameItemsLayer"></div>' +
                '</div>' +
                '<div id="dgBottomControlsBar" style="width: 100%; display: flex; justify-content: center; margin-top: 6px;"></div>' +
                '<!-- Victory Overlay -->' +
                '<div class="victory-overlay" id="dgGameVictoryModal">' +
                  '<div class="victory-tooth" id="dgVictoryIcon">🏆✨🎓🦷🥇</div>' +
                  '<h3 class="victory-title" id="dgVictoryTitle">УРА! ТЫ — ПОБЕДИТЕЛЬ!</h3>' +
                  '<p class="victory-sub" id="dgVictorySub">Твои зубки здоровые, крепкие и сияют на все 100%! 🌟</p>' +
                  '<div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; margin-top: 8px;">' +
                    '<button class="replay-btn" id="dgReplayBtn"><span class="replay-icon">🔄</span><span>ЕЩЁ РАЗ!</span></button>' +
                    '<button class="replay-btn" id="dgHubReturnBtn" style="background: #ffe59a; border-color: #2f2076; color: #2f2076;"><span class="replay-icon">🎮</span><span>ВСЕ ИГРЫ</span></button>' +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>';
        document.body.appendChild(modal);
      }
    };

    const buildCustomHeroSection = () => {
      const heroContainer = document.querySelector('[data-framer-name="Hero"]');
      if (!heroContainer || heroContainer.querySelector(".dg-hero-custom-canvas")) return;

      const canvas = document.createElement("div");
      canvas.className = "dg-hero-custom-canvas";
      canvas.innerHTML = '<div class="dg-hero-doodles" aria-hidden="true">' +
        '<svg class="dg-doodle dg-doodle-star-tl" viewBox="0 0 50 50" fill="none"><path d="M 25 3 L 31 18 L 47 18 L 34 28 L 39 44 L 25 34 L 11 44 L 16 28 L 3 18 L 19 18 Z" stroke="#f5b82e" stroke-width="2.5" stroke-linejoin="round" fill="#fff3c4" fill-opacity="0.5"/></svg>' +
        '<svg class="dg-doodle dg-doodle-star-tc" viewBox="0 0 40 40" fill="none"><path d="M 20 3 L 24 14 L 36 14 L 26 22 L 30 34 L 20 26 L 10 34 L 14 22 L 4 14 L 16 14 Z" stroke="#a288e3" stroke-width="2" stroke-linejoin="round"/></svg>' +
        '<svg class="dg-doodle dg-doodle-star-tr" viewBox="0 0 44 44" fill="none"><path d="M 22 3 L 27 16 L 41 16 L 30 25 L 34 39 L 22 30 L 10 39 L 14 25 L 3 16 L 17 16 Z" stroke="#f5b82e" stroke-width="2.2" stroke-linejoin="round" fill="#fff3c4" fill-opacity="0.4"/></svg>' +
        '<svg class="dg-doodle dg-doodle-heart-tr" viewBox="0 0 46 42" fill="none"><path d="M 23 38 C 23 38, 5 26, 5 13 C 5 6, 11 2, 17 2 C 21 2, 23 5, 23 5 C 23 5, 25 2, 29 2 C 35 2, 41 6, 41 13 C 41 26, 23 38, 23 38 Z" stroke="#a288e3" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
        '<div class="dg-doodle dg-doodle-planet"><svg viewBox="0 0 90 70" fill="none"><ellipse cx="45" cy="35" rx="22" ry="22" fill="#ede4ff" stroke="#8566cc" stroke-width="2.2"/><path d="M 32 28 Q 45 22 58 28" stroke="#8566cc" stroke-width="1.8" stroke-linecap="round"/><path d="M 28 38 Q 45 31 62 38" stroke="#8566cc" stroke-width="1.8" stroke-linecap="round"/><path d="M 33 46 Q 45 40 57 46" stroke="#8566cc" stroke-width="1.8" stroke-linecap="round"/><ellipse cx="45" cy="35" rx="38" ry="11" stroke="#8566cc" stroke-width="2.4" transform="rotate(-16 45 35)"/></svg></div>' +
        '<svg class="dg-doodle dg-doodle-star-mr" viewBox="0 0 44 44" fill="none"><path d="M 22 3 L 27 16 L 41 16 L 30 25 L 34 39 L 22 30 L 10 39 L 14 25 L 3 16 L 17 16 Z" stroke="#a288e3" stroke-width="2.2" stroke-linejoin="round"/></svg>' +
        '<svg class="dg-doodle dg-doodle-trail" viewBox="0 0 600 240" fill="none" preserveAspectRatio="none"><path d="M 30 60 C 130 180, 240 210, 310 160 C 350 125, 345 65, 290 80 C 240 95, 255 170, 345 190 C 440 210, 520 160, 575 80" stroke="#a288e3" stroke-width="2.2" stroke-dasharray="7 7" stroke-linecap="round" fill="none"/></svg>' +
        '<div class="dg-doodle dg-doodle-rocket"><svg viewBox="0 0 100 100" fill="none"><path d="M 26 72 Q 16 86 10 92 Q 22 87 28 98 Q 34 87 42 92 Q 35 81 33 70 Z" fill="#ffd13b" stroke="#f59e0b" stroke-width="1.8"/><path d="M 27 74 Q 22 83 20 86 Q 25 83 28 90 Q 31 83 36 86 Q 31 79 30 72 Z" fill="#ff7675"/><path d="M 30 52 L 14 65 Q 11 78 24 80 L 33 73 Z" fill="#8854d0" stroke="#5f27cd" stroke-width="2.2"/><path d="M 56 30 L 72 44 Q 75 58 61 60 L 53 53 Z" fill="#8854d0" stroke="#5f27cd" stroke-width="2.2"/><path d="M 33 73 Q 22 42 47 16 Q 73 38 52 73 Z" fill="#ffffff" stroke="#5f27cd" stroke-width="2.2"/><path d="M 47 16 Q 60 27 52 38 L 43 29 Z" fill="#a55eea" stroke="#5f27cd" stroke-width="2.2"/><circle cx="46" cy="44" r="8" fill="#e8eaf6" stroke="#5f27cd" stroke-width="2"/><circle cx="46" cy="44" r="4.5" fill="#2d3436"/><circle cx="44.5" cy="42.5" r="1.5" fill="#ffffff"/></svg></div>' +
      '</div>' +
      '<div class="dg-hero-headline-wrap">' +
        '<div class="dg-hero-cursive-title">' +
          '<span class="dg-hct-line dg-hct-line-1">Здоровая улыбка</span>' +
          '<span class="dg-hct-line dg-hct-line-2">сегодня — уверенность</span>' +
          '<span class="dg-hct-line dg-hct-line-3">и счастье</span>' +
          '<span class="dg-hct-line dg-hct-line-4">на всю жизнь!</span>' +
        '</div>' +
      '</div>' +
      '<div class="dg-hero-bottom-card">' +
        '<div class="dg-hero-contacts-col">' +
          '<div class="dg-hero-contact-item">' +
            '<div class="dg-hero-icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="#e67e22" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>' +
            '<span class="dg-hero-contact-text">г. Иваново, ул. Профсоюзная, 4</span>' +
          '</div>' +
          '<a class="dg-hero-contact-item" href="tel:+79109900060">' +
            '<div class="dg-hero-icon-badge"><svg viewBox="0 0 24 24" fill="#e67e22"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z"/></svg></div>' +
            '<span class="dg-hero-contact-text">+7 (910) 990-00-60</span>' +
          '</a>' +
          '<a class="dg-hero-contact-item" href="https://dentalgen.pro" target="_blank" rel="noopener">' +
            '<div class="dg-hero-icon-badge"><svg viewBox="0 0 24 24" fill="none" stroke="#e67e22" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></div>' +
            '<span class="dg-hero-contact-text">dentalgen.pro</span>' +
          '</a>' +
        '</div>' +
        '<div class="dg-hero-divider" aria-hidden="true"><span class="dg-hero-divider-star">★</span></div>' +
        '<div class="dg-hero-qr-col">' +
          '<div class="dg-hero-qr-caption-wrap">' +
            '<p class="dg-hero-qr-caption">Сканируйте QR-код,<br>чтобы записаться<br>на консультацию</p>' +
            '<svg class="dg-hero-qr-arrow" viewBox="0 0 50 50" fill="none"><path d="M 10 8 Q 38 12 36 34 L 40 28 M 36 34 L 30 30" stroke="#a288e3" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
          '</div>' +
          '<a class="dg-hero-qr-box" href="https://dentalgen.pro" target="_blank" rel="noopener" title="Записаться на консультацию">' +
            '<div class="dg-hero-qr-img">__QR_CODE_SVG_RAW__</div>' +
          '</a>' +
        '</div>' +
      '</div>';

      heroContainer.appendChild(canvas);
    };

    const addLandingSections = () => {
      if (!document.querySelector(".dg-checkup-section")) {
        const section = document.createElement("section");
        section.className = "dg-checkup-section";
        section.id = "checkup";
        section.innerHTML = '<div class="dg-shell">' +
          '<div class="dg-checkup">' +
            '<!-- Left Vector Card -->' +
            '<div class="dg-checkup-card-left">' +
              '<div class="dg-checkup-card-badge-row">' +
                '<span class="dg-checkup-pill dg-checkup-pill--purple">ДЛЯ ДЕТЕЙ С 5 ЛЕТ</span>' +
                '<span class="dg-checkup-pill dg-checkup-pill--yellow">★ КОМПЛЕКСНЫЙ ЧЕК-АП</span>' +
              '</div>' +
              '<div class="dg-checkup-card-hero">' +
                '<div class="dg-checkup-mascot-box">' +
                  '<svg class="dg-checkup-mascot-svg" viewBox="0 0 160 170" fill="none">' +
                    '<path d="M 40 55 C 20 80, 10 130, 24 150 C 35 165, 55 140, 50 110 Z" fill="#7048c4" stroke="#2f2076" stroke-width="2.5"/>' +
                    '<path d="M 120 55 C 140 80, 150 130, 136 150 C 125 165, 105 140, 110 110 Z" fill="#7048c4" stroke="#2f2076" stroke-width="2.5"/>' +
                    '<path d="M 42 58 Q 80 75 118 58 L 128 145 Q 80 160 32 145 Z" fill="#8854d0" stroke="#2f2076" stroke-width="2.5"/>' +
                    '<path d="M 48 38 C 42 22, 60 14, 80 22 C 100 14, 118 22, 112 38 C 122 55, 126 85, 116 115 C 110 132, 98 138, 92 118 C 88 105, 72 105, 68 118 C 62 138, 50 132, 44 115 C 34 85, 38 55, 48 38 Z" fill="#ffffff" stroke="#2f2076" stroke-width="3.5" stroke-linejoin="round"/>' +
                    '<circle cx="64" cy="56" r="4.5" fill="#2f2076"/>' +
                    '<path d="M 90 54 Q 96 48 102 54" stroke="#2f2076" stroke-width="3" stroke-linecap="round" fill="none"/>' +
                    '<path d="M 72 68 Q 80 80 88 68" stroke="#2f2076" stroke-width="2.8" stroke-linecap="round" fill="#ff7675"/>' +
                    '<circle cx="56" cy="65" r="5" fill="#ffccd5" opacity="0.8"/>' +
                    '<circle cx="104" cy="65" r="5" fill="#ffccd5" opacity="0.8"/>' +
                    '<circle cx="80" cy="90" r="11" fill="#ffe59a" stroke="#2f2076" stroke-width="2"/>' +
                    '<text x="80" y="95" font-family=\"\'Montserrat\', sans-serif\" font-weight=\"900\" font-size=\"13\" fill=\"#2f2076\" text-anchor=\"middle\">D</text>' +
                    '<path d="M 125 25 L 129 35 L 139 39 L 129 43 L 125 53 L 121 43 L 111 39 L 121 35 Z" fill="#ffd13b" stroke="#f59e0b" stroke-width="1.2"/>' +
                    '<path d="M 32 30 L 35 37 L 42 40 L 35 43 L 32 50 L 29 43 L 22 40 L 29 37 Z" fill="#ffd13b" stroke="#f59e0b" stroke-width="1"/>' +
                  '</svg>' +
                '</div>' +
                '<div class="dg-checkup-card-title-wrap">' +
                  '<h4>Детский чек-ап</h4>' +
                  '<p>Проверьте здоровье зубов и прикуса вашего ребёнка</p>' +
                '</div>' +
              '</div>' +
              '<div class="dg-checkup-checklist">' +
                '<div class="dg-checkup-check-item">' +
                  '<div class="dg-checkup-check-icon">' +
                    '<svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" fill="#dff4ff" stroke="#2f2076" stroke-width="1.6"/><path d="M6 10 L9 13 L14 7" stroke="#2f2076" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
                  '</div>' +
                  '<div class="dg-checkup-check-content">' +
                    '<strong>Консультация детского стоматолога</strong>' +
                    '<span>Бережный осмотр зубок и состояния эмали</span>' +
                  '</div>' +
                '</div>' +
                '<div class="dg-checkup-check-item">' +
                  '<div class="dg-checkup-check-icon">' +
                    '<svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" fill="#ffe9ed" stroke="#2f2076" stroke-width="1.6"/><path d="M6 10 L9 13 L14 7" stroke="#2f2076" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
                  '</div>' +
                  '<div class="dg-checkup-check-content">' +
                    '<strong>Консультация стоматолога-ортодонта</strong>' +
                    '<span>Оценка прикуса и симметрии развития челюсти</span>' +
                  '</div>' +
                '</div>' +
                '<div class="dg-checkup-check-item">' +
                  '<div class="dg-checkup-check-icon">' +
                    '<svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" fill="#e8faf6" stroke="#2f2076" stroke-width="1.6"/><path d="M6 10 L9 13 L14 7" stroke="#2f2076" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
                  '</div>' +
                  '<div class="dg-checkup-check-content">' +
                    '<strong>Компьютерная диагностика Diagnocat</strong>' +
                    '<span>Анализ снимков искусственным интеллектом</span>' +
                  '</div>' +
                '</div>' +
              '</div>' +
              '<div class="dg-checkup-price-box">' +
                '<div class="dg-checkup-price-left">' +
                  '<span class="dg-checkup-price-label">Стоимость чек-апа:</span>' +
                  '<div class="dg-checkup-price-val">' +
                    '<span class="dg-checkup-price-current">5 775 ₽</span>' +
                    '<span class="dg-checkup-price-old">6 985 ₽</span>' +
                  '</div>' +
                '</div>' +
                '<div class="dg-checkup-saving-badge">Экономия 1 210 ₽</div>' +
              '</div>' +
            '</div>' +
            '<!-- Right Content -->' +
            '<div class="dg-checkup-content-right">' +
              '<p class="dg-kicker">Детский чек-ап</p>' +
              '<h3>Проверьте здоровье зубов и прикуса</h3>' +
              '<p class="dg-checkup-desc">Полная 360° диагностика зубов и прикуса для детей от 5 лет. Вы получите персональный отчёт и план рекомендаций от детского стоматолога и ортодонта.</p>' +
              '<div class="dg-checkup-features-row">' +
                '<div class="dg-checkup-feat"><span class="dg-checkup-feat-emoji">⏱️</span> 45–60 мин</div>' +
                '<div class="dg-checkup-feat"><span class="dg-checkup-feat-emoji">👶</span> Без слёз и страха</div>' +
                '<div class="dg-checkup-feat"><span class="dg-checkup-feat-emoji">📊</span> Отчёт на руки</div>' +
              '</div>' +
              '<div class="dg-checkup-action-wrap">' +
                '<a href="tel:+79109900060" class="dg-checkup-btn">Записаться на консультацию</a>' +
                '<span class="dg-checkup-note">Либо по тел: <strong>+7 (910) 990-00-60</strong></span>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>';
        const programs = document.querySelector(".dg-programs-carousel-section");
        if (programs && programs.parentNode) {
          if (programs.nextSibling) {
            programs.parentNode.insertBefore(section, programs.nextSibling);
          } else {
            programs.parentNode.appendChild(section);
          }
        } else {
          document.body.appendChild(section);
        }
      }

      if (!document.querySelector(".dg-contact")) {
        const section = document.createElement("section");
        section.className = "dg-contact";
        section.id = "contacts";
        section.setAttribute("aria-label", "Контакты DENTAL GEN");
        section.innerHTML = '<div class="dg-contact__inner"><div><h2>DENTAL GEN</h2><p>Детская стоматология</p><p>г. Иваново, ул. Профсоюзная, 4</p></div><div class="dg-contact__actions"><a href="tel:+79109900060">+7 (910) 990-00-60</a><a href="https://dentalgen.pro">dentalgen.pro</a></div></div>';
        const gameTeaser = document.querySelector(".dg-game-teaser");
        const ref = gameTeaser || document.querySelector(".dg-checkup-section") || document.querySelector(".dg-programs-carousel-section");
        if (ref && ref.parentNode) {
          if (ref.nextSibling) {
            ref.parentNode.insertBefore(section, ref.nextSibling);
          } else {
            ref.parentNode.appendChild(section);
          }
        } else {
          document.body.appendChild(section);
        }
      }
    };

    const addFloatingActions = () => {
      if (document.querySelector(".dg-floating-actions")) return;
      const actions = document.createElement("nav");
      actions.className = "dg-floating-actions";
      actions.setAttribute("aria-label", "Быстрые действия DENTAL GEN");
      actions.innerHTML = '<div class="dg-floating-socials"><a class="dg-floating-social" href="https://dentalgen.pro" target="_blank" rel="noopener" aria-label="Instagram DENTAL GEN" title="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"></circle></svg></a><a class="dg-floating-social" href="https://dentalgen.pro" target="_blank" rel="noopener" aria-label="TikTok DENTAL GEN" title="TikTok"><svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4v10.5a4.5 4.5 0 1 1-4-4.47"></path><path d="M14 4c.8 2.4 2.5 3.8 5 4"></path></svg></a></div><button class="dg-floating-game dg-open-game-btn" id="floatingGameBtn" type="button" aria-label="Сыграть в игру">🎮 ИГРА</button><a class="dg-floating-record" href="tel:+79109900060">ЗАПИСАТЬСЯ</a><a class="dg-floating-contact" href="#contacts">КОНТАКТЫ</a>';
      document.body.appendChild(actions);
    };

    const syncThemeAndBackground = () => {
      let metaTheme = document.querySelector('meta[name="theme-color"]');
      if (!metaTheme) {
        metaTheme = document.createElement("meta");
        metaTheme.name = "theme-color";
        document.head.appendChild(metaTheme);
      }

      const sections = [
        { selector: '[data-framer-name="Hero"]', color: "#fffae6" },
        { selector: '.dg-parent-questions-section', color: "#ffe9ed" },
        { selector: '[data-framer-name="Mission"]', color: "#dff4ff" },
        { selector: '.dg-programs-carousel-section', color: "#ffe59a" },
        { selector: '.dg-checkup-section', color: "#e8faf6" },
        { selector: '.dg-game-teaser', color: "#f6ebff" },
        { selector: '.dg-contact', color: "#17184f" }
      ];

      const updateColor = () => {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        const viewportMiddle = scrollY + 80;
        let activeColor = "#fffae6";

        for (const sec of sections) {
          const el = document.querySelector(sec.selector);
          if (el && el.offsetParent !== null) {
            const rect = el.getBoundingClientRect();
            const top = rect.top + scrollY;
            const bottom = top + el.offsetHeight;
            if (viewportMiddle >= top && viewportMiddle < bottom) {
              activeColor = sec.color;
              break;
            }
          }
        }

        if (document.documentElement.style.backgroundColor !== activeColor) {
          document.documentElement.style.backgroundColor = activeColor;
          document.body.style.backgroundColor = activeColor;
          metaTheme.setAttribute("content", activeColor);
        }
      };

      if (!window.__dgThemeSyncAttached) {
        window.__dgThemeSyncAttached = true;
        window.addEventListener("scroll", updateColor, { passive: true });
        window.addEventListener("resize", updateColor, { passive: true });
      }
      updateColor();
    };

    const apply = () => {
      for (const [name, map] of Object.entries(scopedText)) replaceTextNodes(document.querySelector('[data-framer-name="' + name + '"]'), map);

      const missionHeadings = document.querySelectorAll('[data-framer-name="Mission"] h1, [data-framer-name="Text Block"] h1');
      if (missionHeadings && missionHeadings.length >= 4) {
        setAnimatedWords(missionHeadings[0], ["DENTAL", "GEN", "", ""]);
        setAnimatedWords(missionHeadings[1], ["ПОМОГАЕТ", "", ""]);
        setAnimatedWords(missionHeadings[2], ["РАСТИТЬ", ""]);
        setAnimatedWords(missionHeadings[3], ["ЗДОРОВУЮ", "УЛЫБКУ", ""]);
        for (const mh of missionHeadings) {
          mh.style.setProperty("line-height", "0.98", "important");
          mh.style.setProperty("margin-top", "0", "important");
          mh.style.setProperty("margin-bottom", "0", "important");
        }
      }

      // SVG foreignObjects (mobile and desktop rich texts)
      for (const fo of document.querySelectorAll('foreignObject')) {
        const h1 = fo.querySelector('h1');
        if (h1 && /OUR APP|mission|lighten|parents/i.test(h1.textContent)) {
          h1.innerHTML = '<span class="framer-text" style="line-height:0.98;display:block;">DENTAL GEN<br class="framer-text">ПОМОГАЕТ<br class="framer-text">РАСТИТЬ<br class="framer-text">ЗДОРОВУЮ<br class="framer-text">УЛЫБКУ</span>';
        }
      }

      // Hero Badge and Headline - cleared/hidden as requested
      const heroBadges = document.querySelectorAll('[data-framer-name="Hero"] .framer-7h1n86, [data-framer-name="Hero"] h3');
      for (const b of heroBadges) {
        b.innerHTML = '';
      }

      const heroHeadlines = document.querySelectorAll('[data-framer-name="Hero"] [data-framer-name="Hero Text"], [data-framer-name="Hero"] h1');
      for (const h1 of heroHeadlines) {
        h1.innerHTML = '';
      }

      // Intro, Mission Headline, Mission Subtitles, Our Story & 5000 Activities - Cleared and removed as requested
      const introSections = document.querySelectorAll('[data-framer-name="Intro"], #intro-block, .framer-hhon, [data-framer-name="Mission Headline"], .framer-1j6imtw, [data-framer-name="Headline"], .framer-12pk2gu, .framer-1i7tb2a-container, .framer-1tqddnu, [data-framer-name="Mission"] .framer-1tqddnu, [data-framer-name="Mission"] h2, [data-framer-name="Mission"] [data-framer-name*="While we can"], [data-framer-name="Our Story"], [data-framer-name="5000 Activities"], #our-story, [data-framer-name="Our Story"] a[href*="about"], [data-framer-name="Our Story"] [data-framer-name="Contact"], [data-framer-name="Our Story"] [data-framer-name="ABOUT"]');
      for (const sec of introSections) {
        sec.innerHTML = '';
        sec.remove();
      }

      // Any remaining English phrases in elements
      for (const el of document.querySelectorAll('h1, h2, h3, h4, span, p, a, button, [data-framer-name="App Store"], [data-framer-name="Button Shape"]')) {
        const t = el.textContent.trim();
        if (/our\s+app\s+is\s+on\s+a\s+mission/i.test(t)) {
          el.innerHTML = 'DENTAL GEN<br>ПОМОГАЕТ<br>РАСТИТЬ<br>ЗДОРОВУЮ<br>УЛЫБКУ';
        }
        if (/^\s*(скачать\s+в|скачать|download\s+on\s+the|download\s+on)\s*$/i.test(t)) {
          el.textContent = "ЗАПИСАТЬСЯ";
        }
        if (/maggie/i.test(t)) {
          el.innerHTML = el.innerHTML.replace(/с\s+maggie\s+вы\s+можете:/gi, 'С DENTAL GEN ВЫ МОЖЕТЕ:')
                                     .replace(/с\s+maggie/gi, 'С DENTAL GEN')
                                     .replace(/with\s+maggie\s+you\s+can:/gi, 'С DENTAL GEN ВЫ МОЖЕТЕ:')
                                     .replace(/with\s+maggie/gi, 'С DENTAL GEN')
                                     .replace(/maggie/gi, 'DENTAL GEN');
        }
      }

      document.title = "DENTAL GEN | Детская стоматология в Иваново";
      const metaDescription = "Детская стоматология DENTAL GEN в Иваново. Профилактика, лечение и сопровождение детей от первых зубов до школы.";
      for (const meta of document.querySelectorAll('meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]')) meta.setAttribute("content", metaDescription);
      for (const meta of document.querySelectorAll('meta[property="og:title"], meta[name="twitter:title"]')) meta.setAttribute("content", document.title);

      const marks = [["Hero", "top"], ["Intro", "about"], ["Our Story", "about"], ["Mission", "mission"]];
      for (const [name, id] of marks) {
        const element = document.querySelector('[data-framer-name="' + name + '"]');
        if (element && !element.id) element.id = id;
      }
      rewriteLinks();
      simplifyControls();
      wireAnchors();
      rewriteImages();
      rewriteLoader();
      buildCustomHeroSection();
      insertParentQuestionsSection();
      enhanceProgramsCarousel();
      addKidsGame();
      addLandingSections();
      addFloatingActions();
      syncThemeAndBackground();

      if (!window.__dgNavObserverAttached) {
        window.__dgNavObserverAttached = true;
        const navEl = document.querySelector('[data-framer-name="Header Nav"], .framer-1qb073z');
        if (navEl) {
          let isUpdating = false;
          const obs = new MutationObserver(() => {
            if (isUpdating) return;
            isUpdating = true;
            replaceTextNodes(navEl, scopedText["Header Nav"]);
            rewriteLinks();
            setTimeout(() => { isUpdating = false; }, 300);
          });
          obs.observe(navEl, { childList: true, subtree: true });
        }
      }
    };

    let scheduled = false;
    const scheduleApply = () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => { scheduled = false; apply(); });
    };
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", scheduleApply, { once: true });
    else scheduleApply();
    window.addEventListener("load", scheduleApply, { once: true });
    let passes = 0;
    const timer = setInterval(() => { scheduleApply(); if (++passes >= 10) clearInterval(timer); }, 500);
  })();
</script>
<!-- DENTAL_GEN_LANDING_END -->
`;

html = html.replace("</body>", `${enhancement}</body>`);
html = html.split("__QR_CODE_SVG_RAW__").join(qrCodeSvg);
fs.writeFileSync(target, html);
console.log("Successfully rebuilt index.html with interactive 3-card programs carousel and custom vector teeth!");
