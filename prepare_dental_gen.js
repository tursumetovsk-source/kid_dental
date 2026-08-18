const fs = require("fs");
const path = require("path");

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
  [">FAQS<", ">ПРОГРАММЫ<"],
  [">FAQ<", ">ПРОГРАММЫ<"],
  [">ABOUT<", ">О КЛИНИКЕ<"],
  [">CONTACT<", ">КОНТАКТЫ<"],
  [">ADD VENUE<", ">ЧЕКАП<"],
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
  [data-framer-name="App Store"] { justify-content: center !important; }
  [data-framer-name="Pointer"],
  [data-framer-name="Android"],
  .dg-remove-google,
  [data-framer-name="Hero Screens"],
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
  .framer-13x6f8b { display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important; }
  [data-framer-name="CTA"],
  [data-framer-name="Footer"] { visibility: hidden !important; pointer-events: none !important; display: none !important; }
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
  [data-framer-name="Our Story"] [data-framer-name="Photo"] {
    position: relative !important;
    width: 100% !important;
    max-width: 820px !important;
    margin: 0 auto !important;
    height: auto !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }
  [data-framer-name="Our Story"] [data-framer-name="Photo"] [data-framer-name="Photo Frame"],
  [data-framer-name="Our Story"] [data-framer-name="Photo"] img {
    display: none !important;
  }

  .dg-parent-questions-card {
    position: relative;
    width: 100%;
    max-width: 780px;
    margin: clamp(20px, 3vw, 40px) auto;
    padding: clamp(28px, 4vw, 44px) clamp(20px, 4vw, 36px);
    box-sizing: border-box;
    background: #fffdf5;
    border: 3px solid #2f2076;
    border-radius: clamp(28px, 4vw, 40px);
    box-shadow: -6px 8px 0 #2f2076;
    transform: rotate(-1.5deg);
    display: flex;
    flex-direction: column;
    gap: clamp(16px, 2.5vw, 24px);
    transition: transform .25s ease;
  }
  .dg-parent-questions-card:hover {
    transform: rotate(0deg) scale(1.01);
  }

  .dg-pq-bubble {
    position: relative;
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: clamp(14px, 2vw, 20px);
    align-items: center;
    padding: clamp(16px, 2vw, 22px) clamp(18px, 2.5vw, 26px);
    box-sizing: border-box;
    border-radius: 24px;
    border: 2.5px solid currentColor;
    background: #fff;
  }
  .dg-pq-bubble--1 {
    color: #6b3fe4;
    border-style: dashed;
    transform: rotate(-0.8deg);
  }
  .dg-pq-bubble--2 {
    color: #028fa6;
    border-style: solid;
    transform: rotate(0.9deg);
  }
  .dg-pq-bubble--3 {
    color: #e63255;
    border-style: solid;
    transform: rotate(-0.5deg);
  }

  .dg-pq-qmark {
    font-family: "Montserrat", "Rubik", sans-serif;
    font-size: clamp(34px, 4.5vw, 50px);
    font-weight: 900;
    line-height: 0.8;
  }
  .dg-pq-bubble p {
    margin: 0;
    color: #17184f;
    font-family: "Rubik", sans-serif;
    font-size: clamp(16px, 1.8vw, 21px);
    font-weight: 700;
    line-height: 1.35;
    letter-spacing: -0.01em;
  }

  .dg-pq-sparkle {
    position: absolute;
    font-size: clamp(24px, 3.5vw, 36px);
    line-height: 1;
    pointer-events: none;
  }
  .dg-pq-sparkle--1 {
    top: -18px;
    right: 24px;
    animation: gentleFloat 2.5s infinite alternate ease-in-out;
  }
  .dg-pq-sparkle--2 {
    bottom: -16px;
    left: 20px;
  }
  .dg-pq-sparkle--3 {
    top: 45%;
    right: -18px;
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
  .dg-teaser-tooth-preview {
    position: relative;
    width: clamp(140px, 18vw, 190px);
    height: clamp(140px, 18vw, 190px);
    border-radius: 50%;
    background: #e3f4ff;
    border: 3px solid #2f2076;
    box-shadow: -4px 5px 0 #2f2076;
    display: grid;
    place-items: center;
    transition: transform .25s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .dg-game-teaser__right:hover .dg-teaser-tooth-preview {
    transform: scale(1.08) rotate(6deg);
  }
  .dg-teaser-tooth-icon {
    font-size: clamp(64px, 9vw, 92px);
    line-height: 1;
  }
  .dg-teaser-crown {
    position: absolute;
    top: -12px;
    right: 18px;
    font-size: clamp(32px, 4.5vw, 44px);
    animation: crownFloat 2s infinite alternate ease-in-out;
  }
  .dg-teaser-sparkle {
    position: absolute;
    bottom: 8px;
    left: 12px;
    font-size: clamp(24px, 3.5vw, 34px);
    animation: sparkleSpin 3s infinite linear;
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
  .dg-game-modal__close {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 50;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #fff;
    border: 2.5px solid #2f2076;
    box-shadow: -2px 2px 0 #2f2076;
    color: #2f2076;
    font: 900 18px/1 "Rubik", sans-serif;
    display: grid;
    place-items: center;
    cursor: pointer;
    transition: transform .15s ease, background .15s ease;
  }
  .dg-game-modal__close:hover {
    transform: scale(1.1) rotate(90deg);
    background: #ffe0ed;
  }
  .dg-game-modal__close:active {
    transform: scale(0.92);
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
    margin-bottom: 10px;
    position: relative;
    width: 100%;
    padding: 0 46px;
    box-sizing: border-box;
  }
  .game-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #7048c4;
    color: #fff;
    padding: 4px 14px;
    border-radius: 999px;
    font-size: clamp(11px, 2.2vw, 13px);
    font-weight: 900;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    box-shadow: 0 4px 12px rgba(112, 72, 196, 0.25);
    margin-bottom: 4px;
  }
  .game-title {
    margin: 0;
    font-size: clamp(20px, 4.4vw, 30px);
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: -0.03em;
    color: #2f2076;
  }
  .sound-toggle {
    position: absolute;
    top: 0px;
    right: 44px;
    width: 36px;
    height: 36px;
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
  }
  .sound-toggle:hover { transform: scale(1.06); }
  .sound-toggle:active { transform: scale(0.92); }
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
    width: min(250px, 64vw);
    height: min(250px, 64vw);
    margin: 4px auto 8px;
    display: grid;
    place-items: center;
    touch-action: none;
    cursor: pointer;
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
    gap: 8px;
    width: min(230px, 58vw);
    height: min(230px, 58vw);
    background: #eef2ff;
    border: 3px dashed #7048c4;
    border-radius: 20px;
    padding: 8px;
    box-sizing: border-box;
  }
  .puzzle-slot {
    position: relative;
    background: #fff;
    border: 2.5px solid #d4cfef;
    border-radius: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 30px;
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
    box-shadow: -2px 3px 0 #2f2076;
    animation: puzzleSnap 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .puzzle-slot__label {
    font: 900 11px/1 "Rubik", sans-serif;
    color: #928ca8;
    margin-top: 3px;
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
    margin-top: 10px;
    flex-wrap: wrap;
  }
  .puzzle-piece-btn {
    width: clamp(46px, 12vw, 54px);
    height: clamp(46px, 12vw, 54px);
    border-radius: 14px;
    background: #fff;
    border: 2px solid #2f2076;
    box-shadow: -2px 3px 0 #2f2076;
    font-size: 24px;
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
    gap: 10px;
    animation: fadeIn 0.3s ease;
  }
  .sorter-basket {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: min(290px, 80vw);
    min-height: 48px;
    background: #e6fcf5;
    border: 2.5px solid #0ca678;
    border-radius: 999px;
    padding: 6px 14px;
    box-shadow: -2px 3px 0 #0ca678;
    font: 900 13px/1 "Rubik", sans-serif;
    color: #0ca678;
    box-sizing: border-box;
  }
  .sorter-items-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    max-width: 320px;
  }
  .sorter-item-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8px 10px;
    background: #fff;
    border: 2px solid #2f2076;
    border-radius: 14px;
    box-shadow: -2px 3px 0 #2f2076;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
    min-width: 62px;
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
    position: absolute;
    top: 2px;
    left: 4px;
    font: 900 11px/1 "Rubik", sans-serif;
    padding: 6px 12px;
    border-radius: 999px;
    border: 2px solid #2f2076;
    background: #ffe59a;
    color: #2f2076;
    box-shadow: -2px 2px 0 #2f2076;
    cursor: pointer;
    transition: all 0.15s ease;
    display: flex;
    align-items: center;
    gap: 4px;
    z-index: 25;
  }
  .game-back-btn:hover {
    background: #ffd43b;
    transform: scale(1.05);
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
    grid-template-columns: 0.95fr 1.05fr;
    gap: 30px;
    align-items: center;
    margin-top: 34px;
    padding: 24px;
    border: 2px solid #2f2076;
    border-radius: 32px;
    background: #eee4ff;
    box-shadow: -6px 7px 0 #2f2076;
  }
  .dg-checkup img { width: 100%; border-radius: 22px; }
  .dg-checkup h3 { margin: 0 0 14px; font: 900 clamp(34px, 5vw, 62px)/0.96 "Montserrat", sans-serif; letter-spacing: -0.055em; }
  .dg-checkup p { margin: 8px 0; font-size: 18px; line-height: 1.45; }
  .dg-price { display: inline-block; margin-top: 14px; padding: 10px 18px; border-radius: 999px; background: #fff0a8; font: 900 30px/1 "Montserrat", sans-serif; }
  .dg-checkup a, .dg-contact a {
    display: block;
    padding: 17px 22px;
    border: 2px solid #2f2076;
    border-radius: 999px;
    background: #ffe59a;
    color: #2f2076;
    box-shadow: -4px 4px 0 #2f2076;
    font: 800 18px/1 "Montserrat", sans-serif;
    text-align: center;
    text-decoration: none;
  }
  .dg-checkup a { display: inline-block; margin-top: 20px; }

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
    .dg-floating-actions {
      left: max(10px, env(safe-area-inset-left));
      right: max(10px, env(safe-area-inset-right));
      bottom: max(10px, env(safe-area-inset-bottom));
      display: grid;
      grid-template-columns: auto minmax(0, 1fr) auto;
      grid-template-areas: "game record contact" "social social social";
      gap: 8px;
    }
    .dg-floating-game { grid-area: game; min-height: 44px; padding: 0 12px; font-size: 13px; }
    .dg-floating-record { grid-area: record; width: 100%; min-height: 44px; font-size: 14px; }
    .dg-floating-contact { grid-area: contact; min-width: 0; min-height: 44px; padding: 0 12px; font-size: 12px; }
    .dg-floating-socials { grid-area: social; justify-content: center; }
    .dg-floating-record { width: min(228px, calc(100vw - 32px)); }
    .dg-floating-social { width: 46px; height: 46px; }
    .dg-floating-contact { min-width: 116px; min-height: 46px; padding: 0 18px; font-size: 13px; }
    [data-framer-name="Header Nav"] [data-framer-name="Logo"]::after { font-size: 10px; }
    .dg-programs { padding: 58px 18px 70px; }
    .dg-programs h2 { font-size: clamp(42px, 13vw, 68px); }
    .dg-grid { grid-template-columns: 1fr; margin-top: 32px; }
    .dg-checkup { grid-template-columns: 1fr; padding: 16px; }
    .dg-contact { padding: 46px 18px 56px; }
    .dg-contact__inner { grid-template-columns: 1fr; align-items: start; }
    .dg-contact h2 { font-size: clamp(42px, 14vw, 64px); }
    [data-framer-name="Intro"].dg-parent-story-section { padding: 54px 16px 126px !important; }
    .dg-story-questions { gap: 22px; }
    .dg-story-question,
    .dg-story-question:nth-child(1),
    .dg-story-question:nth-child(2),
    .dg-story-question:nth-child(3) { width: 100%; margin-left: 0; padding: 22px 20px; border-radius: 25px; transform: none; }
    .dg-story-question { grid-template-columns: 34px minmax(0, 1fr); gap: 10px; min-height: 0; }
    .dg-story-question__mark { font-size: 48px; }
    .dg-story-question p { font-size: clamp(18px, 5.3vw, 22px); line-height: 1.24; }
    .dg-story-copy { width: 100%; margin-top: 54px; }
    .dg-story-copy p { font-size: 19px; line-height: 1.55; }
    .dg-story-copy p + p { margin-top: 26px; }
    .dg-story-actions { flex-direction: column; gap: 14px; margin-top: 38px; }
    .dg-story-actions a, .dg-story-actions button { min-width: 0; padding: 19px 22px; border-radius: 22px; font-size: 18px; }
    .dg-story-spark--left { left: 2px; }
    .dg-story-spark--right { right: 0; top: -38px; }
    .dg-story-spark--bottom { display: none; }
    .dg-programs-carousel { padding: 10px 16px 36px; }
    .dg-carousel-cards-wrapper { min-height: 610px; width: 100%; }
    .dg-pcard { padding: 22px 26px 24px; border-radius: 28px; box-shadow: -5px 7px 0 #2f2076; }
    .dg-pcard__inner { grid-template-columns: 1fr; gap: 12px; }
    .dg-pcard__media { padding: 0; }
    .dg-pcard__img { max-width: 115px; }
    .dg-pcard__title { font-size: 26px; margin-bottom: 8px; }
    .dg-pcard__lead { font-size: 14px; margin-bottom: 12px; line-height: 1.4; }
    .dg-pcard__list { margin-bottom: 18px; gap: 8px; }
    .dg-pcard__list li { font-size: 13.5px; }
    .dg-pcard__cta { width: 100%; text-align: center; font-size: 16px; padding: 14px 20px; }
    .dg-carousel-arrow {
      width: 42px;
      height: 42px;
      top: 50%;
      bottom: auto;
      transform: translateY(-50%);
      z-index: 20;
      box-shadow: -3px 4px 0 #2f2076;
    }
    .dg-carousel-arrow--prev { left: -14px; }
    .dg-carousel-arrow--next { right: -14px; }
    .dg-carousel-arrow:hover { transform: translateY(-50%) scale(1.05); }
    .dg-carousel-arrow:active { transform: translateY(-50%) scale(0.95); }
    .dg-carousel-dots { margin-top: 18px; margin-bottom: 24px; }
    .dg-game-teaser { padding: 40px 16px; }
    .dg-game-teaser__card { grid-template-columns: 1fr; gap: 20px; padding: 24px 18px; border-radius: 26px; }
    .dg-game-teaser__right { order: -1; }
    .dg-game-teaser__btn { width: 100%; font-size: 18px; padding: 16px 20px; }
    .dg-game-modal__container { height: min(720px, 94vh); border-radius: 26px; }
  }
</style>
<script>
  (() => {
    const scopedText = {
      "Header Nav": {
        "FAQ": "ПРОГРАММЫ", "FAQS": "ПРОГРАММЫ", "О НАС": "О КЛИНИКЕ", "ABOUT": "О КЛИНИКЕ",
        "ДОБАВИТЬ": "ЧЕКАП", "ADD VENUE": "ЧЕКАП", "КОНТАКТЫ": "КОНТАКТЫ", "CONTACT": "КОНТАКТЫ"
      },
      "Hero": {
        "знакомьтесь с maggie": "детская стоматология DENTAL GEN", "meet maggie": "детская стоматология DENTAL GEN",
        "ВАШ КАРМАННЫЙ ГИД ПО РОДИТЕЛЬСТВУ: ОДНО ЗАНЯТИЕ ЗА РАЗ.": "ЗДОРОВАЯ УЛЫБКА СЕГОДНЯ — УВЕРЕННОСТЬ НА ВСЮ ЖИЗНЬ.",
        "YOUR POCKET GUIDE TO SURVIVING PARENTHOOD, ONE ACTIVITY AT A TIME.": "ЗДОРОВАЯ УЛЫБКА СЕГОДНЯ — УВЕРЕННОСТЬ НА ВСЮ ЖИЗНЬ.",
        "ВАШ КАРМАННЫЙ": "ЗДОРОВАЯ УЛЫБКА", "YOUR POCKET": "ЗДОРОВАЯ УЛЫБКА",
        "ГИД ПО": "СЕГОДНЯ —", "GUIDE TO": "СЕГОДНЯ —", "РОДИТЕЛЬСТВУ:": "УВЕРЕННОСТЬ", "SURVIVING": "УВЕРЕННОСТЬ",
        "ОДНО ЗАНЯТИЕ": "И СЧАСТЬЕ", "PARENTHOOD,": "И СЧАСТЬЕ", "ЗА": "НА ВСЮ", "ONE ACTIVITY": "НА ВСЮ", "РАЗ.": "ЖИЗНЬ!", "AT A TIME.": "ЖИЗНЬ!",
        "Скачать в": "ЗАПИСАТЬСЯ", "Download on the": "ЗАПИСАТЬСЯ", "заявка": "ПОЗВОНИТЬ", "request": "ПОЗВОНИТЬ"
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
        "С MAGGIE": "3 ПРОГРАММЫ", "WITH MAGGIE": "3 ПРОГРАММЫ", "ВЫ МОЖЕТЕ:": "ПО ВОЗРАСТУ:", "YOU CAN:": "ПО ВОЗРАСТУ:"
      },
      "Mission": {
        "Создание воспоминаний не должно быть еще одной задачей в списке дел.": "Три программы по возрасту помогают вовремя заботиться о зубах и прикусе ребёнка.",
        "Because making memories shouldn't be another thing on your to-do list.": "Три программы по возрасту помогают вовремя заботиться о зубах и прикусе ребёнка."
      },
      "Our Story": {
        "MAGGIE НАЧАЛОСЬ С ДВУХ МАМ, БОКАЛА ЧАЯ И ОДНОЙ БОЛЬШОЙ ИДЕИ:": "DENTAL GEN РАСТЁТ ВМЕСТЕ С ВАШИМ РЕБЁНКОМ:",
        "MAGGIE STARTED WITH TWO MUMS, A FEW WINES, AND ONE BIG IDEA:": "DENTAL GEN РАСТЁТ ВМЕСТЕ С ВАШИМ РЕБЁНКОМ:",
        "parenting": "забота", "should feel": "без", "lighter": "страха",
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
        for (const node of element.childNodes) {
          if (node.nodeType !== 3 || !node.nodeValue) continue;
          const key = node.nodeValue.trim();
          if (!key || !map[key]) continue;
          node.nodeValue = node.nodeValue.replace(key, map[key]);
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
      }
    };

    const wireAnchors = () => {
      if (document.documentElement.dataset.dgAnchors === "ready") return;
      document.documentElement.dataset.dgAnchors = "ready";
      const followAnchor = (event) => {
        const link = event.target.closest?.('a[href^="#"]');
        if (!link) return;
        const targetHref = link.getAttribute("href");
        if (targetHref === "#game" || targetHref === "#kids-game") {
          event.preventDefault();
          window.openGameModal();
          return;
        }
        if (event.type === "keydown" && event.key !== "Enter" && event.key !== " ") return;
        const target = document.querySelector(targetHref);
        if (!target) return;
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        target.scrollIntoView({ behavior: "auto", block: "start" });
      };
      window.addEventListener("click", followAnchor, true);
    };

    const simplifyControls = () => {
      document.body?.classList.remove("framer-cursor-none");
      document.documentElement.style.cursor = "auto";
      for (const element of document.querySelectorAll("[data-framer-cursor]")) {
        element.removeAttribute("data-framer-cursor");
      }
      for (const el of document.querySelectorAll('[data-framer-name*="Sticker"], [data-framer-name="Breakfast"], [data-framer-name="Drinks"], [data-framer-name="Banana"], [data-framer-name="Dummy"], [data-framer-name="Dress"], [data-framer-name="Snaaacks"], .framer-1ymkmky, .framer-ymzrbp, .framer-dxh1mn, .framer-1pzn978, .framer-1gbadff')) {
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
            '<span>🧺</span> <span id="dgBasketCount">Корзинка Здоровья: собрано 0 / 3</span>' +
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
            '<div style="font-size: 54px; opacity: 0.85; filter: drop-shadow(0 0 10px #7048c4);">🦷 🦷 🦷 🦷</div>' +
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

    const replaceOurStoryPhoto = () => {
      const photoContainer = document.querySelector('[data-framer-name="Our Story"] [data-framer-name="Photo"]');
      if (!photoContainer || photoContainer.querySelector(".dg-parent-questions-card")) return;

      const card = document.createElement("div");
      card.className = "dg-parent-questions-card";
      card.innerHTML = '<span class="dg-pq-sparkle dg-pq-sparkle--1">⭐</span><span class="dg-pq-sparkle dg-pq-sparkle--2">🪐</span>' +
        '<div class="dg-pq-bubble dg-pq-bubble--1"><span class="dg-pq-qmark">?</span><p>Как стать уверенным родителем при появлении малыша и заботиться о его зубах?</p></div>' +
        '<div class="dg-pq-bubble dg-pq-bubble--2"><span class="dg-pq-qmark">?</span><p>Как не переживать, всё ли в порядке с зубками вашего ребёнка?</p></div>' +
        '<div class="dg-pq-bubble dg-pq-bubble--3"><span class="dg-pq-qmark">?</span><p>Правильно ли развивается его ротовая полость и как помочь, если возникают проблемы?</p></div>' +
        '<button class="dg-pq-game-btn dg-open-game-btn" id="storyOpenGameBtn" data-game-mode="older" type="button"><span>🎮</span> <span>Развивающие игры для детей «Пазлы & Мемори»</span></button>' +
        '<span class="dg-pq-sparkle dg-pq-sparkle--3">✨</span>';

      photoContainer.appendChild(card);
    };

    const enhanceProgramsCarousel = () => {
      if (document.querySelector(".dg-programs-carousel-section")) return;

      const section = document.createElement("section");
      section.className = "dg-programs-carousel-section";
      section.id = "programs";
      section.innerHTML = '<div class="dg-carousel-headline"><h3>3 ПРОГРАММЫ ПО ВОЗРАСТУ:</h3><p>ПОМОГАЮТ ВОВРЕМЯ ЗАБОТИТЬСЯ О ЗУБАХ И ПРИКУСЕ РЕБЁНКА</p></div>' +
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

      document.body.appendChild(section);
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
                '<div class="dg-teaser-tooth-preview">' +
                  '<span class="dg-teaser-crown">👑</span>' +
                  '<span class="dg-teaser-tooth-icon">🦷</span>' +
                  '<span class="dg-teaser-sparkle">✨</span>' +
                  '<div class="dg-teaser-braces-badge">🎮 8 ИГР</div>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>';
        document.body.appendChild(teaser);
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
            '<button class="dg-game-modal__close" id="closeGameModalBtn" aria-label="Закрыть игру" title="Закрыть">✕</button>' +
            '<div class="game-wrapper">' +
              '<header class="game-header">' +
                '<button class="game-back-btn" id="dgBackToHubBtn" style="display: none;"><span>⬅️</span> <span>Все игры</span></button>' +
                '<div class="game-badge" id="dgGameBadge">🎮 ДЕТСКИЙ ИГРОВОЙ КЛУБ</div>' +
                '<h2 class="game-title" id="dgGameTitle">Выбери развивающую игру!</h2>' +
                '<button class="sound-toggle" id="dgSoundToggle" aria-label="Включить / выключить звук" title="Звук">🔊</button>' +
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

    const addLandingSections = () => {
      if (!document.querySelector(".dg-checkup-section")) {
        const section = document.createElement("section");
        section.className = "dg-checkup-section";
        section.id = "checkup";
        section.innerHTML = '<div class="dg-shell"><div class="dg-checkup"><img loading="lazy" decoding="async" src="assets/dental-gen/programs.jpg" alt="Три программы DENTAL GEN"><div><p class="dg-kicker">Детский чек-ап</p><h3>Проверьте здоровье зубов и прикуса</h3><p>Консультация детского стоматолога и ортодонта, компьютерная диагностика с анализом программы Diagnocat.</p><span class="dg-price">5 775 ₽</span><br><a href="tel:+79109900060">Записаться на консультацию</a></div></div></div>';
        document.body.appendChild(section);
      }

      if (!document.querySelector(".dg-contact")) {
        const section = document.createElement("section");
        section.className = "dg-contact";
        section.id = "contacts";
        section.setAttribute("aria-label", "Контакты DENTAL GEN");
        section.innerHTML = '<div class="dg-contact__inner"><div><h2>DENTAL GEN</h2><p>Детская стоматология</p><p>г. Иваново, ул. Профсоюзная, 4</p></div><div class="dg-contact__actions"><a href="tel:+79109900060">+7 (910) 990-00-60</a><a href="https://dentalgen.pro">dentalgen.pro</a></div></div>';
        document.body.appendChild(section);
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

    const apply = () => {
      for (const [name, map] of Object.entries(scopedText)) replaceTextNodes(document.querySelector('[data-framer-name="' + name + '"]'), map);

      replaceTextNodes(document.body, {
        "НАХОДИТЬ ЗАНЯТИЯ": "«ПЕРВЫЕ ЗУБКИ»", "FIND ACTIVITIES": "«ПЕРВЫЕ ЗУБКИ»",
        "В ВАШЕМ РАЙОНЕ": "1–3 ГОДА", "IN YOUR LOCAL AREA": "1–3 ГОДА",
        "Скачать в": "ЗАПИСАТЬСЯ", "Download on the": "ЗАПИСАТЬСЯ",
        "заявка": "ПОЗВОНИТЬ", "request": "ПОЗВОНИТЬ"
      });

      const missionHeadings = document.querySelectorAll('[data-framer-name="Mission"] h1');
      if (missionHeadings && missionHeadings.length >= 4) {
        setAnimatedWords(missionHeadings[0], ["DENTAL", "GEN", "", ""]);
        setAnimatedWords(missionHeadings[1], ["ПОМОГАЕТ", "", ""]);
        setAnimatedWords(missionHeadings[2], ["РАСТИТЬ", ""]);
        setAnimatedWords(missionHeadings[3], ["ЗДОРОВУЮ", "УЛЫБКУ", ""]);
      }

      document.title = "DENTAL GEN | Детская стоматология в Иваново";
      const metaDescription = "Детская стоматология DENTAL GEN в Иваново. Профилактика, лечение и сопровождение детей от первых зубов до школы.";
      for (const meta of document.querySelectorAll('meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]')) meta.setAttribute("content", metaDescription);
      for (const meta of document.querySelectorAll('meta[property="og:title"], meta[name="twitter:title"]')) meta.setAttribute("content", document.title);

      const marks = [["Hero", "top"], ["Our Story", "about"]];
      for (const [name, id] of marks) {
        const element = document.querySelector('[data-framer-name="' + name + '"]');
        if (element && !element.id) element.id = id;
      }
      rewriteLinks();
      simplifyControls();
      wireAnchors();
      rewriteImages();
      rewriteLoader();
      replaceOurStoryPhoto();
      enhanceProgramsCarousel();
      addKidsGame();
      addLandingSections();
      addFloatingActions();
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
fs.writeFileSync(target, html);
console.log("Successfully rebuilt index.html with interactive 3-card programs carousel and custom vector teeth!");
