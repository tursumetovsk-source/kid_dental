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
];

for (const [from, to] of sourceReplacements) html = html.split(from).join(to);
html = html.replace(/\s*<!-- Start of HubSpot Embed Code -->[\s\S]*?<!-- End of HubSpot Embed Code -->\s*/g, "\n");
if (!html.includes('rel="preload" href="https://framerusercontent.com/assets/9l4OI1VWlPcLpOtefC36ItDWgI.woff2"')) {
  html = html.replace('<meta charset="utf-8">', '<meta charset="utf-8">\n\t<link rel="preload" href="https://framerusercontent.com/assets/9l4OI1VWlPcLpOtefC36ItDWgI.woff2" as="font" type="font/woff2" crossorigin>');
}

if (!html.includes("DENTAL_GEN_LANDING_BEGIN")) {
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
  [data-framer-name="Header Nav"] [data-framer-name="Logo"] img { opacity: 0 !important; }
  .framer-6mir23-container [data-framer-name="Logo"] img[src*="framerusercontent"] { opacity: 0 !important; }
  [data-framer-name="Header Nav"] [data-framer-name="Logo"]::after {
    content: "DG";
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    color: #2f2076;
    font: 900 12px/1 "Montserrat", "Rubik", sans-serif;
    letter-spacing: -0.1em;
    text-align: center;
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
    font-family: "BN Dime Display Regular", "Arial Black", sans-serif;
    font-size: clamp(42px, 14vw, 360px);
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
  [data-framer-name="Intro"] [data-framer-name^="Rectangle"] { display: none !important; }
  [data-framer-name="CTA"],
  [data-framer-name="Footer"] [data-framer-name="Bottom"] { visibility: hidden !important; pointer-events: none !important; }
  [data-framer-name="Header Nav"] [data-framer-name="Left"] { gap: clamp(40px, 3vw, 64px) !important; }
  [data-framer-name="Header Nav"] [data-framer-name="Left"] > * + * { margin-left: clamp(18px, 1.5vw, 32px) !important; }
  [data-framer-name="Header Nav"] [data-framer-name="About"] { margin-left: clamp(48px, 4vw, 80px) !important; }
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
  .dg-story-questions { display: flex; flex-direction: column; gap: clamp(24px, 3vw, 42px); }
  .dg-story-question {
    position: relative;
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: 22px;
    align-items: center;
    min-height: 126px;
    padding: 28px 42px;
    box-sizing: border-box;
    border: 3px solid currentColor;
    border-radius: 34px;
    background: #fff;
    color: #17184f;
  }
  .dg-story-question:nth-child(1) { width: 76%; align-self: flex-start; border-style: dashed; border-color: #8c5cff; transform: rotate(-1.2deg); }
  .dg-story-question:nth-child(2) { width: 78%; align-self: flex-end; border-color: #04b8d4; transform: rotate(1.4deg); }
  .dg-story-question:nth-child(3) { width: 78%; margin-left: 6%; border-color: #ff3f62; transform: rotate(-0.8deg); }
  .dg-story-question__mark { color: #8c5cff; font: 900 62px/.8 "BN Dime Display Regular", "Arial Black", sans-serif; }
  .dg-story-question:nth-child(2) .dg-story-question__mark { color: #04b8d4; }
  .dg-story-question:nth-child(3) .dg-story-question__mark { color: #ff3f62; }
  .dg-story-question p { margin: 0; font-size: clamp(22px, 2.05vw, 31px); font-weight: 800; line-height: 1.25; letter-spacing: .005em; }
  .dg-story-copy { width: min(1030px, 92%); margin: clamp(74px, 8vw, 112px) auto 0; }
  .dg-story-copy p { margin: 0; font-size: clamp(21px, 2.15vw, 30px); font-weight: 650; line-height: 1.65; letter-spacing: .005em; }
  .dg-story-copy p + p { margin-top: 36px; }
  .dg-story-copy strong { color: #7048c4; font-weight: 900; }
  .dg-story-heart { display: inline-block; margin-right: 8px; color: #9a42e8; font-size: 1.4em; vertical-align: -.08em; }
  .dg-story-actions { display: flex; justify-content: center; gap: 22px; margin-top: 56px; }
  .dg-story-actions a {
    min-width: 280px;
    padding: 22px 30px;
    border: 2px solid #e3e3f2;
    border-radius: 28px;
    background: #fff;
    color: #17184f;
    box-shadow: 0 18px 28px rgba(89, 54, 151, .14);
    font-size: 22px;
    font-weight: 800;
    line-height: 1;
    text-align: center;
    text-decoration: none;
    transition: transform .18s ease, box-shadow .18s ease;
  }
  .dg-story-actions a:first-child { border-color: #7048c4; background: #7048c4; color: #fff; }
  .dg-story-actions a:hover { transform: translateY(-2px); box-shadow: 0 20px 32px rgba(89, 54, 151, .2); }
  .dg-story-spark { position: absolute; z-index: 0; font-size: clamp(30px, 4vw, 52px); line-height: 1; pointer-events: none; }
  .dg-story-spark--left { top: -28px; left: -22px; }
  .dg-story-spark--right { top: 6px; right: 4%; }
  .dg-story-spark--bottom { right: 2%; bottom: -34px; }

  .dg-kids-game {
    position: relative;
    width: 100%;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
    background: #dff4ff;
    color: #2f2076;
    font-family: "BN Dime Display Regular", "Rubik", sans-serif;
  }
  .dg-kids-game__shell { width: min(1120px, 100%); margin: 0 auto; }
  .dg-kids-game__frame { display: block; width: 100%; height: 1120px; border: 0; background: #dff4ff; }
  .dg-kids-game__intro { max-width: 860px; margin: 0 auto 46px; text-align: center; }
  .dg-kids-game__eyebrow { margin: 0 0 12px; color: #7048c4; font-size: 20px; font-weight: 900; letter-spacing: .08em; text-transform: uppercase; }
  .dg-kids-game h2 { margin: 0; font-size: clamp(48px, 7vw, 88px); font-weight: 900; line-height: .9; letter-spacing: -.045em; }
  .dg-kids-game__lead { margin: 24px auto 0; max-width: 720px; font-size: clamp(20px, 2.2vw, 28px); font-weight: 700; line-height: 1.35; }
  .dg-kids-game__panel {
    position: relative;
    padding: clamp(24px, 4vw, 48px);
    border: 3px solid #2f2076;
    border-radius: 38px;
    background: #fffdf5;
    box-shadow: -8px 9px 0 #2f2076;
  }
  .dg-kids-game__top { display: grid; grid-template-columns: auto 1fr auto; gap: 22px; align-items: center; margin-bottom: 34px; }
  .dg-kids-game__tooth { width: 82px; height: 82px; display: grid; place-items: center; border-radius: 26px; background: #ffe59a; font-size: 48px; }
  .dg-kids-game__prompt { margin: 0; font-size: clamp(24px, 2.8vw, 36px); font-weight: 900; line-height: 1.12; }
  .dg-kids-game__score { min-width: 112px; padding: 14px 18px; border-radius: 999px; background: #e9dcff; font-size: 19px; font-weight: 900; text-align: center; }
  .dg-kids-game__score span { display: none; }
  .dg-kids-game__score .dg-game-score--0 { display: inline; }
  .dg-kids-game__panel:has(#dg-good-brush:checked):not(:has(#dg-good-water:checked)):not(:has(#dg-good-apple:checked)) .dg-game-score--1,
  .dg-kids-game__panel:has(#dg-good-water:checked):not(:has(#dg-good-brush:checked)):not(:has(#dg-good-apple:checked)) .dg-game-score--1,
  .dg-kids-game__panel:has(#dg-good-apple:checked):not(:has(#dg-good-brush:checked)):not(:has(#dg-good-water:checked)) .dg-game-score--1 { display: inline; }
  .dg-kids-game__panel:has(#dg-good-brush:checked):has(#dg-good-water:checked):not(:has(#dg-good-apple:checked)) .dg-game-score--2,
  .dg-kids-game__panel:has(#dg-good-brush:checked):has(#dg-good-apple:checked):not(:has(#dg-good-water:checked)) .dg-game-score--2,
  .dg-kids-game__panel:has(#dg-good-water:checked):has(#dg-good-apple:checked):not(:has(#dg-good-brush:checked)) .dg-game-score--2 { display: inline; }
  .dg-kids-game__panel:has(#dg-good-brush:checked):has(#dg-good-water:checked):has(#dg-good-apple:checked) .dg-game-score--3 { display: inline; }
  .dg-kids-game__panel:has(.dg-kids-game__toggle--good:checked) .dg-game-score--0 { display: none; }
  .dg-kids-game__progress { height: 12px; margin-bottom: 30px; overflow: hidden; border: 2px solid #2f2076; border-radius: 999px; background: #fff; }
  .dg-kids-game__progress { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; }
  .dg-kids-game__progress span { display: block; height: 100%; background: transparent; transition: background-color .18s ease; }
  .dg-kids-game__toggle { position: absolute; inset: 0; z-index: 2; width: 100%; height: 100%; margin: 0; opacity: 0; cursor: pointer !important; }
  .dg-kids-game__choices { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
  .dg-kids-game__choice {
    position: relative;
    min-height: 142px;
    display: grid;
    grid-template-rows: auto auto;
    place-items: center;
    gap: 8px;
    padding: 18px 14px;
    border: 2px solid #2f2076;
    border-radius: 25px;
    background: #fff;
    color: #2f2076;
    box-shadow: -4px 5px 0 #2f2076;
    font: inherit;
    cursor: pointer !important;
    transition: transform .16s ease, background-color .16s ease, box-shadow .16s ease;
  }
  .dg-kids-game__choice:hover { transform: translateY(-2px); box-shadow: -5px 7px 0 #2f2076; }
  .dg-kids-game__choice:focus-visible { outline: 4px solid #ffbf35; outline-offset: 3px; }
  .dg-kids-game__choice span:first-child { font-size: 46px; line-height: 1; }
  .dg-kids-game__choice span:last-child { font-size: 19px; font-weight: 900; line-height: 1.12; text-align: center; }
  .dg-kids-game__choice:has(.dg-kids-game__toggle--good:checked) { background: #c8f3d0; box-shadow: -4px 5px 0 #278a4b; border-color: #278a4b; color: #185f34; }
  .dg-kids-game__choice:has(.dg-kids-game__toggle--bad:checked) { background: #ffe0ed; box-shadow: -4px 5px 0 #e84d72; border-color: #e84d72; color: #8c2441; }
  .dg-kids-game__panel:has(#dg-good-brush:checked) .dg-kids-game__progress span:nth-child(1),
  .dg-kids-game__panel:has(#dg-good-water:checked) .dg-kids-game__progress span:nth-child(2),
  .dg-kids-game__panel:has(#dg-good-apple:checked) .dg-kids-game__progress span:nth-child(3) { background: #7048c4; }
  .dg-kids-game__feedback { min-height: 32px; margin: 28px 0 0; font-size: 22px; font-weight: 900; line-height: 1.35; text-align: center; }
  .dg-kids-game__feedback span { display: none; }
  .dg-kids-game__feedback .dg-game-feedback--start { display: inline; }
  .dg-kids-game__panel:has(.dg-kids-game__toggle--good:checked) .dg-game-feedback--start { display: none; }
  .dg-kids-game__panel:has(.dg-kids-game__toggle--good:checked) .dg-game-feedback--right { display: inline; }
  .dg-kids-game__panel:has(.dg-kids-game__toggle--bad:checked) .dg-game-feedback--start,
  .dg-kids-game__panel:has(.dg-kids-game__toggle--bad:checked) .dg-game-feedback--right { display: none; }
  .dg-kids-game__panel:has(.dg-kids-game__toggle--bad:checked) .dg-game-feedback--wrong { display: inline; }
  .dg-kids-game__finish { display: none; margin-top: 24px; padding: 24px; border-radius: 26px; background: #fff0a8; text-align: center; }
  .dg-kids-game__panel:has(#dg-good-brush:checked):has(#dg-good-water:checked):has(#dg-good-apple:checked) .dg-kids-game__finish { display: block; }
  .dg-kids-game__panel:has(#dg-good-brush:checked):has(#dg-good-water:checked):has(#dg-good-apple:checked) .dg-kids-game__feedback { display: none; }
  .dg-kids-game__finish strong { display: block; margin-bottom: 8px; font-size: 30px; }
  .dg-kids-game__finish p { margin: 0; font-size: 19px; font-weight: 700; }
  .dg-kids-game__reset { margin-top: 20px; padding: 15px 24px; border: 2px solid #2f2076; border-radius: 999px; background: #ffe59a; color: #2f2076; box-shadow: -3px 4px 0 #2f2076; font: 900 17px/1 "BN Dime Display Regular", "Rubik", sans-serif; }
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
    z-index: 3;
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
    .dg-story-actions a { min-width: 0; padding: 19px 22px; border-radius: 22px; font-size: 18px; }
    .dg-story-spark--left { left: 2px; }
    .dg-story-spark--right { right: 0; top: -38px; }
    .dg-story-spark--bottom { display: none; }
    .dg-kids-game { padding: 0; }
    .dg-kids-game__frame { height: 1320px; }
    .dg-kids-game h2 { font-size: clamp(46px, 13vw, 64px); }
    .dg-kids-game__intro { margin-bottom: 32px; }
    .dg-kids-game__panel { padding: 22px 16px 26px; border-radius: 28px; box-shadow: -5px 6px 0 #2f2076; }
    .dg-kids-game__top { grid-template-columns: 58px minmax(0, 1fr); gap: 12px; margin-bottom: 22px; }
    .dg-kids-game__tooth { width: 58px; height: 58px; border-radius: 18px; font-size: 34px; }
    .dg-kids-game__prompt { font-size: 23px; }
    .dg-kids-game__score { grid-column: 1 / -1; width: max-content; min-width: 0; justify-self: center; padding: 10px 16px; font-size: 17px; }
    .dg-kids-game__progress { margin-bottom: 22px; }
    .dg-kids-game__choices { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
    .dg-kids-game__choice { min-height: 126px; padding: 15px 10px; border-radius: 21px; }
    .dg-kids-game__choice span:first-child { font-size: 39px; }
    .dg-kids-game__choice span:last-child { font-size: 16px; }
    .dg-kids-game__feedback { margin-top: 22px; font-size: 18px; }
    .dg-kids-game__finish { padding: 20px 16px; }
    .dg-kids-game__finish strong { font-size: 25px; }
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
        if (event.type === "keydown" && event.key !== "Enter" && event.key !== " ") return;
        const target = document.querySelector(link.getAttribute("href"));
        if (!target) return;
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        target.scrollIntoView({ behavior: "auto", block: "start" });
      };
      window.addEventListener("click", followAnchor, true);
      window.addEventListener("pointerdown", (event) => {
        if (!event.target.closest?.("a.dg-safe-arrow")) return;
        followAnchor(event);
      }, true);
      window.addEventListener("keydown", (event) => {
        if (!event.target.closest?.("a.dg-safe-arrow")) return;
        followAnchor(event);
      }, true);
    };

    const simplifyControls = () => {
      document.body?.classList.remove("framer-cursor-none");
      document.documentElement.style.cursor = "auto";
      for (const element of document.querySelectorAll("[data-framer-cursor]")) {
        element.removeAttribute("data-framer-cursor");
      }
      for (const link of document.querySelectorAll("a")) {
        const href = (link.getAttribute("href") || "").trim();
        const isArrow = Boolean(link.querySelector('[data-framer-name="Icon"] svg'));
        if (!isArrow || (href && href !== "." && href !== "./")) continue;
        link.setAttribute("href", "#programs");
        link.removeAttribute("target");
        link.classList.add("dg-safe-arrow");
        link.setAttribute("aria-label", "Перейти к программам");
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
      for (const logo of document.querySelectorAll('.framer-6mir23-container [data-framer-name="Logo"]')) {
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
      intro.innerHTML = '<div class="dg-parent-story"><span class="dg-story-spark dg-story-spark--left" aria-hidden="true">⭐</span><span class="dg-story-spark dg-story-spark--right" aria-hidden="true">🪐</span><div class="dg-story-questions"><article class="dg-story-question"><span class="dg-story-question__mark" aria-hidden="true">?</span><p>Как стать уверенным родителем при появлении малыша и заботиться о его зубах?</p></article><article class="dg-story-question"><span class="dg-story-question__mark" aria-hidden="true">?</span><p>Как не переживать, всё ли в порядке с зубками вашего ребёнка?</p></article><article class="dg-story-question"><span class="dg-story-question__mark" aria-hidden="true">?</span><p>Правильно ли развивается его ротовая полость и как помочь, если возникают проблемы?</p></article></div><div class="dg-story-copy"><p>Вопросов у родителей всегда много. Ведь здоровье ребёнка начинается с внимания к мелочам, а здоровая улыбка — с самых первых зубов. Мы создали программы <strong>«Растём с улыбкой»</strong>, чтобы вы были уверены: развитие зубов проходит правильно, а рядом всегда есть детский стоматолог, готовый поддержать и ответить на любые вопросы.</p><p><span class="dg-story-heart" aria-hidden="true">♥</span>Мы покажем, как годовые программы сопровождения помогают семьям на разных этапах взросления ребёнка. История вымышленная, а ситуации — самые настоящие.</p><div class="dg-story-actions"><a href="tel:+79109900060">Задать вопрос доктору</a><a href="#programs">Наши программы</a></div></div><span class="dg-story-spark dg-story-spark--bottom" aria-hidden="true">✨</span></div>';
    };

    const addKidsGame = () => {
      const intro = document.querySelector('[data-framer-name="Intro"]');
      if (!intro || document.querySelector(".dg-kids-game")) return;
      const game = document.createElement("section");
      game.className = "dg-kids-game";
      game.id = "kids-game";
      game.setAttribute("aria-label", "Детская игра Что любит зубик?");
      game.innerHTML = '<iframe class="dg-kids-game__frame" src="kids-game.html" title="Детская игра Что любит зубик?" loading="lazy"></iframe>';
      intro.insertAdjacentElement("afterend", game);
    };

    const addLandingSections = () => {
      const intro = document.querySelector('[data-framer-name="Intro"]');
      const footer = document.querySelector('[data-framer-name="Footer"]');
      if (intro && footer && !document.querySelector(".dg-programs")) {
        const section = document.createElement("section");
        section.className = "dg-programs";
        section.id = "programs";
        section.innerHTML = '<div class="dg-shell"><p class="dg-kicker">Растём с улыбкой</p><h2>Три программы — забота на каждом этапе</h2><div class="dg-grid"><article class="dg-card"><img loading="lazy" decoding="async" src="assets/dental-gen/first-teeth.jpg" alt="Программа Первые зубки"><div class="dg-card__body"><span class="dg-age">1–3 года</span><h3>Первые зубки</h3><p>Формируем полезные привычки и основу здоровья зубов.</p></div></article><article class="dg-card"><img loading="lazy" decoding="async" src="assets/dental-gen/protected-smile.jpg" alt="Программа Под защитой улыбки"><div class="dg-card__body"><span class="dg-age">3–5 лет</span><h3>Под защитой улыбки</h3><p>Вовремя лечим и сохраняем здоровые молочные зубы.</p></div></article><article class="dg-card"><img loading="lazy" decoding="async" src="assets/dental-gen/straight-smile.jpg" alt="Программа Ровная улыбка"><div class="dg-card__body"><span class="dg-age">5–7 лет</span><h3>Ровная улыбка</h3><p>Следим за развитием прикуса и формируем красивую улыбку.</p></div></article></div><div class="dg-checkup" id="checkup"><img loading="lazy" decoding="async" src="assets/dental-gen/programs.jpg" alt="Три программы DENTAL GEN"><div><p class="dg-kicker">Детский чек-ап</p><h3>Проверьте здоровье зубов и прикуса</h3><p>Консультация детского стоматолога и ортодонта, компьютерная диагностика с анализом программы Diagnocat.</p><span class="dg-price">5 775 ₽</span><br><a href="tel:+79109900060">Записаться на консультацию</a></div></div></div>';
        footer.parentNode.insertBefore(section, footer);
      }

      if (footer && !document.querySelector(".dg-contact")) {
        const section = document.createElement("section");
        section.className = "dg-contact";
        section.id = "contacts";
        section.setAttribute("aria-label", "Контакты DENTAL GEN");
        section.innerHTML = '<div class="dg-contact__inner"><div><h2>DENTAL GEN</h2><p>Детская стоматология</p><p>г. Иваново, ул. Профсоюзная, 4</p></div><div class="dg-contact__actions"><a href="tel:+79109900060">+7 (910) 990-00-60</a><a href="https://dentalgen.pro">dentalgen.pro</a></div></div>';
        footer.parentNode.insertBefore(section, footer);
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
      setAnimatedWords(missionHeadings[0], ["DENTAL", "GEN", "", ""]);
      setAnimatedWords(missionHeadings[1], ["ПОМОГАЕТ", "", ""]);
      setAnimatedWords(missionHeadings[2], ["РАСТИТЬ", ""]);
      setAnimatedWords(missionHeadings[3], ["ЗДОРОВУЮ", "УЛЫБКУ", ""]);

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
}

fs.writeFileSync(target, html);
console.log("Prepared DENTAL GEN landing page; Framer animation definitions remain untouched.");
