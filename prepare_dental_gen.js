const fs = require("fs");
const path = require("path");

const target = path.join(__dirname, "index.html");
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
  html { scroll-behavior: auto !important; }
  body { background: #fffdf5; color: #2f2076; }
  body, body.framer-cursor-none { cursor: auto !important; }
  body * { cursor: default !important; }
  a, button, [role="button"] { cursor: pointer !important; }
  input, textarea { cursor: text !important; }
  html, body, #main, [data-framer-root],
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

  /* Interactive Programs Carousel */
  [data-framer-name^="Feature"] {
    position: relative !important;
    overflow: visible !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    background-color: var(--token-4e62a4ec-2401-4414-9211-46bb168422e7, #fff0a8) !important;
  }
  [data-framer-name^="Feature"] [data-framer-name="Active Card"],
  [data-framer-name^="Feature"] [data-framer-name="Right Peek"],
  [data-framer-name^="Feature"] [data-framer-name="Left Peek"],
  [data-framer-name^="Feature"] [data-framer-name="Controls"],
  [data-framer-name="App Cropped"] {
    display: none !important;
  }
  
  .dg-programs-carousel {
    position: relative;
    width: min(1120px, 94vw);
    margin: 0 auto;
    padding: clamp(20px, 3.5vw, 40px) 0;
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
    width: min(860px, 100%);
    height: min(780px, 92vh);
    background: #dff4ff;
    border: 3px solid #2f2076;
    border-radius: clamp(24px, 4vw, 36px);
    box-shadow: -6px 10px 0 #2f2076;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transform: scale(0.92);
    transition: transform .25s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .dg-game-modal.is-open .dg-game-modal__container {
    transform: scale(1);
  }
  .dg-game-modal__close {
    position: absolute;
    top: 14px;
    right: 14px;
    z-index: 50;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #fff;
    border: 2.5px solid #2f2076;
    box-shadow: -3px 3px 0 #2f2076;
    color: #2f2076;
    font: 900 20px/1 "Rubik", sans-serif;
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
  .dg-game-modal__frame {
    width: 100%;
    height: 100%;
    border: 0;
    background: transparent;
    overflow: hidden;
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
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
    grid-template-areas: "social record contact";
    align-items: end;
    gap: 14px;
    pointer-events: none;
    isolation: isolate;
    transition: opacity .2s ease;
  }
  body:has(.framer-6mir23-container [data-framer-name^="Default"]) .dg-floating-actions { opacity: 0; }
  .dg-floating-actions a {
    pointer-events: auto;
    color: #2f2076;
    text-decoration: none;
    border: 2px solid #2f2076;
    box-shadow: -4px 4px 0 #2f2076;
    transition: transform .18s ease, box-shadow .18s ease;
  }
  .dg-floating-actions a:hover { transform: translate(1px, -1px); box-shadow: -5px 5px 0 #2f2076; }
  .dg-floating-actions a:focus-visible { outline: 3px solid #fff; outline-offset: 3px; }
  .dg-floating-socials { grid-area: social; justify-self: start; display: flex; gap: 10px; }
  .dg-floating-social { width: 50px; height: 50px; display: grid; place-items: center; border-radius: 999px; }
  .dg-floating-social:first-child { background: #ffe0ed; }
  .dg-floating-social:last-child { background: #dff4ff; }
  .dg-floating-social svg { width: 22px; height: 22px; }
  .dg-floating-record {
    grid-area: record;
    justify-self: center;
    width: 228px;
    min-height: 56px;
    display: grid;
    place-items: center;
    border-radius: 999px;
    background: #ffe59a;
    font: 800 17px/1 "Montserrat", "Rubik", sans-serif;
    letter-spacing: .01em;
  }
  .dg-floating-contact {
    grid-area: contact;
    justify-self: end;
    min-width: 132px;
    min-height: 50px;
    display: grid;
    place-items: center;
    padding: 0 22px;
    border-radius: 999px;
    background: #ffe59a;
    font: 700 14px/1 "Montserrat", "Rubik", sans-serif;
  }

  @media (max-width: 809px) {
    .dg-floating-actions {
      left: max(12px, env(safe-area-inset-left));
      right: max(12px, env(safe-area-inset-right));
      bottom: max(12px, env(safe-area-inset-bottom));
      grid-template-columns: minmax(0, 1fr) auto;
      grid-template-areas: "record record" "social contact";
      row-gap: 12px;
    }
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

    const replaceIntroStory = () => {
      const intro = document.querySelector('[data-framer-name="Intro"]');
      if (!intro || intro.querySelector(".dg-parent-story")) return;
      intro.classList.add("dg-parent-story-section");
      intro.id = "parent-story";
      intro.innerHTML = '<div class="dg-parent-story">' +
        '<span class="dg-story-spark dg-story-spark--left" aria-hidden="true">⭐</span>' +
        '<span class="dg-story-spark dg-story-spark--right" aria-hidden="true">🪐</span>' +
        '<div class="dg-story-card-wrapper">' +
          '<span class="dg-story-card-badge">💡 ЧАСТЫЕ ВОПРОСЫ РОДИТЕЛЕЙ</span>' +
          '<div class="dg-story-questions">' +
            '<article class="dg-story-question"><span class="dg-story-question__mark" aria-hidden="true">?</span><p>Как стать уверенным родителем при появлении малыша и заботиться о его зубах?</p></article>' +
            '<article class="dg-story-question"><span class="dg-story-question__mark" aria-hidden="true">?</span><p>Как не переживать, всё ли в порядке с зубками вашего ребёнка?</p></article>' +
            '<article class="dg-story-question"><span class="dg-story-question__mark" aria-hidden="true">?</span><p>Правильно ли развивается его ротовая полость и как помочь, если возникают проблемы?</p></article>' +
          '</div>' +
        '</div>' +
        '<div class="dg-story-copy">' +
          '<p>Вопросов у родителей всегда много. Ведь здоровье ребёнка начинается с внимания к мелочам, а здоровая улыбка — с самых первых зубов. Мы создали программы <strong>«Растём с улыбкой»</strong>, чтобы вы были уверены: развитие зубов проходит правильно, а рядом всегда есть детский стоматолог, готовый поддержать и ответить на любые вопросы.</p>' +
          '<p><span class="dg-story-heart" aria-hidden="true">♥</span>Мы покажем, как годовые программы сопровождения помогают семьям на разных этапах взросления ребёнка. История вымышленная, а ситуации — самые настоящие.</p>' +
          '<div class="dg-story-actions">' +
            '<a href="tel:+79109900060">Задать вопрос доктору</a>' +
            '<button type="button" class="dg-story-game-btn" id="storyOpenGameBtn">🎮 Игра «Почисти зубик»</button>' +
            '<a href="#programs">Наши программы</a>' +
          '</div>' +
        '</div>' +
        '<span class="dg-story-spark dg-story-spark--bottom" aria-hidden="true">✨</span>' +
      '</div>';
    };

    window.openGameModal = () => {
      let modal = document.getElementById("gameModal");
      if (!modal) {
        addKidsGame();
        modal = document.getElementById("gameModal");
      }
      if (!modal) return;
      modal.classList.add("is-open");
      document.body.classList.add("dg-modal-open");
      const frame = modal.querySelector("#gameIframe");
      if (frame && (!frame.src || frame.src === "about:blank")) {
        frame.src = "kids-game.html";
      }
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
        // Prev button
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
        // Game Modal
        if (e.target.closest("#openGameModalBtn") || e.target.closest("#openGameModalPreview") || e.target.closest("#storyOpenGameBtn")) {
          e.preventDefault();
          window.openGameModal();
          return;
        }
        if (e.target.closest("#closeGameModalBtn") || e.target.closest("#gameModalBackdrop")) {
          e.preventDefault();
          window.closeGameModal();
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

    const enhanceProgramsCarousel = () => {
      const featureContainer = document.querySelector('[data-framer-name^="Feature"]');
      if (!featureContainer || featureContainer.querySelector(".dg-programs-carousel")) return;

      const carousel = document.createElement("div");
      carousel.className = "dg-programs-carousel";
      carousel.id = "programsCarousel";
      carousel.innerHTML = '<div class="dg-carousel-cards-wrapper" id="carouselCardsWrapper">' +
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
                '<li><span class="dg-pcard__icon">📐</span><span><strong>Осмотр ортодонта</strong> и контроль развития челюстей</span></li>' +
                '<li><span class="dg-pcard__icon">🦷</span><span><strong>Контроль смены зубов</strong> на постоянные крепкие зубки</span></li>' +
                '<li><span class="dg-pcard__icon">🌟</span><span><strong>ИИ-диагностика Diagnocat</strong> для точной оценки прикуса</span></li>' +
              '</ul>' +
              '<a class="dg-pcard__cta" href="tel:+79109900060">Записаться на программу</a>' +
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
      '</div>';

      featureContainer.appendChild(carousel);
    };

    const replaceOurStoryPhoto = () => {
      const photoContainer = document.querySelector('[data-framer-name="Our Story"] [data-framer-name="Photo"]');
      if (!photoContainer || photoContainer.querySelector(".dg-parent-questions-card")) return;

      const card = document.createElement("div");
      card.className = "dg-parent-questions-card";
      card.innerHTML = '<span class="dg-pq-sparkle dg-pq-sparkle--1">⭐</span><span class="dg-pq-sparkle dg-pq-sparkle--2">🪐</span><div class="dg-pq-bubble dg-pq-bubble--1"><span class="dg-pq-qmark">?</span><p>Как стать уверенным родителем при появлении малыша и заботиться о его зубах?</p></div><div class="dg-pq-bubble dg-pq-bubble--2"><span class="dg-pq-qmark">?</span><p>Как не переживать, всё ли в порядке с зубками вашего ребёнка?</p></div><div class="dg-pq-bubble dg-pq-bubble--3"><span class="dg-pq-qmark">?</span><p>Правильно ли развивается его ротовая полость и как помочь, если возникают проблемы?</p></div><span class="dg-pq-sparkle dg-pq-sparkle--3">✨</span>';

      photoContainer.appendChild(card);
    };

    const addKidsGame = () => {
      const intro = document.querySelector('[data-framer-name="Intro"]');
      if (!intro) return;

      // 1. Teaser Section
      if (!document.querySelector(".dg-game-teaser")) {
        const teaser = document.createElement("section");
        teaser.className = "dg-game-teaser";
        teaser.id = "game-teaser";
        teaser.setAttribute("aria-label", "Детская интерактивная игра Почисти Зубик!");
        teaser.innerHTML = '<div class="dg-shell"><div class="dg-game-teaser__card"><div class="dg-game-teaser__left"><span class="dg-game-teaser__badge">🌟 ДЛЯ МАЛЫШЕЙ</span><h3>Интерактивная игра «Почисти Зубик!»</h3><p>Почистите щёточкой, смойте пенку водичкой и угостите зубик хрустящим яблочком! Весёлая игра, развивающая полезные привычки у детей.</p><button class="dg-game-teaser__btn" id="openGameModalBtn" type="button"><span>🎮</span> <span>СЫГРАТЬ В ИГРУ</span></button></div><div class="dg-game-teaser__right" id="openGameModalPreview" title="Нажмите, чтобы сыграть!"><div class="dg-teaser-tooth-preview"><span class="dg-teaser-crown">👑</span><span class="dg-teaser-tooth-icon">🦷</span><span class="dg-teaser-sparkle">✨</span></div></div></div></div>';
        intro.insertAdjacentElement("afterend", teaser);
      }

      // 2. Modal Overlay
      if (!document.getElementById("gameModal")) {
        const modal = document.createElement("div");
        modal.className = "dg-game-modal";
        modal.id = "gameModal";
        modal.setAttribute("role", "dialog");
        modal.setAttribute("aria-modal", "true");
        modal.setAttribute("aria-label", "Игра Почисти Зубик");
        modal.innerHTML = '<div class="dg-game-modal__backdrop" id="gameModalBackdrop"></div><div class="dg-game-modal__container"><button class="dg-game-modal__close" id="closeGameModalBtn" aria-label="Закрыть игру" title="Закрыть">✕</button><iframe class="dg-game-modal__frame" id="gameIframe" title="Детская игра Почисти Зубик!" loading="lazy" src="kids-game.html"></iframe></div>';
        document.body.appendChild(modal);
      }
    };

    const addLandingSections = () => {
      const intro = document.querySelector('[data-framer-name="Intro"]');
      const footer = document.querySelector('[data-framer-name="Footer"]');
      if (intro && !document.querySelector(".dg-programs")) {
        const section = document.createElement("section");
        section.className = "dg-programs";
        section.id = "programs";
        section.innerHTML = '<div class="dg-shell"><p class="dg-kicker">Растём с улыбкой</p><h2>Три программы — забота на каждом этапе</h2><div class="dg-grid"><article class="dg-card"><img loading="lazy" decoding="async" src="assets/dental-gen/first-teeth.jpg" alt="Программа Первые зубки"><div class="dg-card__body"><span class="dg-age">1–3 года</span><h3>Первые зубки</h3><p>Формируем полезные привычки и основу здоровья зубов.</p></div></article><article class="dg-card"><img loading="lazy" decoding="async" src="assets/dental-gen/protected-smile.jpg" alt="Программа Под защитой улыбки"><div class="dg-card__body"><span class="dg-age">3–5 лет</span><h3>Под защитой улыбки</h3><p>Вовремя лечим и сохраняем здоровые молочные зубы.</p></div></article><article class="dg-card"><img loading="lazy" decoding="async" src="assets/dental-gen/straight-smile.jpg" alt="Программа Ровная улыбка"><div class="dg-card__body"><span class="dg-age">5–7 лет</span><h3>Ровная улыбка</h3><p>Следим за развитием прикуса и формируем красивую улыбку.</p></div></article></div><div class="dg-checkup" id="checkup"><img loading="lazy" decoding="async" src="assets/dental-gen/programs.jpg" alt="Три программы DENTAL GEN"><div><p class="dg-kicker">Детский чек-ап</p><h3>Проверьте здоровье зубов и прикуса</h3><p>Консультация детского стоматолога и ортодонта, компьютерная диагностика с анализом программы Diagnocat.</p><span class="dg-price">5 775 ₽</span><br><a href="tel:+79109900060">Записаться на консультацию</a></div></div></div>';
        if (footer) footer.parentNode.insertBefore(section, footer);
        else document.body.appendChild(section);
      }

      if (!document.querySelector(".dg-contact")) {
        const section = document.createElement("section");
        section.className = "dg-contact";
        section.id = "contacts";
        section.setAttribute("aria-label", "Контакты DENTAL GEN");
        section.innerHTML = '<div class="dg-contact__inner"><div><h2>DENTAL GEN</h2><p>Детская стоматология</p><p>г. Иваново, ул. Профсоюзная, 4</p></div><div class="dg-contact__actions"><a href="tel:+79109900060">+7 (910) 990-00-60</a><a href="https://dentalgen.pro">dentalgen.pro</a></div></div>';
        if (footer) footer.parentNode.insertBefore(section, footer);
        else document.body.appendChild(section);
      }
    };

    const addFloatingActions = () => {
      if (document.querySelector(".dg-floating-actions")) return;
      const actions = document.createElement("nav");
      actions.className = "dg-floating-actions";
      actions.setAttribute("aria-label", "Быстрые действия DENTAL GEN");
      actions.innerHTML = '<div class="dg-floating-socials"><a class="dg-floating-social" href="https://dentalgen.pro" target="_blank" rel="noopener" aria-label="Instagram DENTAL GEN" title="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"></circle></svg></a><a class="dg-floating-social" href="https://dentalgen.pro" target="_blank" rel="noopener" aria-label="TikTok DENTAL GEN" title="TikTok"><svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4v10.5a4.5 4.5 0 1 1-4-4.47"></path><path d="M14 4c.8 2.4 2.5 3.8 5 4"></path></svg></a></div><a class="dg-floating-record" href="tel:+79109900060">ЗАПИСАТЬСЯ</a><a class="dg-floating-contact" href="#contacts">КОНТАКТЫ</a>';
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
      replaceIntroStory();
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
