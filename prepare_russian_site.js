const fs = require('fs');
const path = require('path');

const dictionary = [
  // Global Header, Footer, Buttons & Badges
  ['FAQS', 'FAQ'],
  ['ABOUT', 'О НАС'],
  ['ADD VENUE', 'ДОБАВИТЬ'],
  ['CONTACT', 'КОНТАКТЫ'],
  ['Download on the', 'Скачать в'],
  ['App Store', 'App Store'],
  ['Google Play', 'Google Play'],
  ['REQUEST', 'ЗАЯВКА'],
  ['request', 'заявка'],
  ['Submit', 'Отправить'],
  ['SUBMIT', 'ОТПРАВИТЬ'],
  ['WOHOO!', 'УРА!'],
  ["THERE's AN ERROR :(", 'ПРОИЗОШЛА ОШИБКА :('],
  ['© 2025 Maggie', '© 2026 Maggie'],
  ['© 2026 Maggie', '© 2026 Maggie'],
  ['POLICIES', 'ПОЛИТИКА'],
  ['Policies', 'Политика'],
  ['JOIN', 'ВСТУПИТЬ'],
  ['REACH OUT', 'НАПИСАТЬ НАМ'],

  // Form Fields & Labels
  ["What's your name?", 'Как вас зовут?'],
  ['Your email', 'Ваш email'],
  ['Your email address', 'Ваш email'],
  ["Venue's name", 'Название заведения'],
  ['Where is the venue located?', 'Где расположено заведение?'],
  ['Name of venue/business', 'Название заведения / места'],
  ['Where is it located?', 'Где оно расположено?'],
  ['What type of venue/business is it?', 'Какой это тип заведения?'],
  ['Send us a message (Optional)', 'Напишите сообщение (необязательно)'],
  ['Enter', 'Введите сообщение...'],
  ['GET IN TOUCH!', 'СВЯЖИТЕСЬ С НАМИ!'],
  ['GET IN TOUCH', 'СВЯЖИТЕСЬ С НАМИ'],
  ['Get in touch', 'Свяжитесь с нами'],
  ['VIA EMAIL', 'ПО ПОЧТЕ'],
  ['Via email', 'По почте'],
  ['OR ENQUIRY', 'ИЛИ ЧЕРЕЗ ФОРМУ'],
  ['Or enquiry', 'Или через форму'],
  ['or enquiry', 'или через форму'],
  ['We’ll get back to you faster than a toddler can spill a drink.', 'Мы ответим быстрее, чем малыш успеет пролить сок.'],

  // Home Hero & Banner
  ['meet maggie', 'знакомьтесь с maggie'],
  ['Meet Maggie', 'Знакомьтесь с Maggie'],
  ['YOUR POCKET GUIDE TO SURVIVING PARENTHOOD, ONE ACTIVITY AT A TIME.', 'ВАШ КАРМАННЫЙ ГИД ПО РОДИТЕЛЬСТВУ: ОДНО ЗАНЯТИЕ ЗА РАЗ.'],
  ['Your pocket guide to surviving parenthood, one activity at a time.', 'Ваш карманный гид по родительству: одно занятие за раз.'],
  ['Your pocket', 'Ваш карманный'],
  ['guide to', 'гид по'],
  ['surviving', 'родительству:'],
  ['parenthood,', 'одно занятие'],
  ['one activity', 'за'],
  ['at a time.', 'раз.'],
  ['FIND FREE SANITY—SAVING ACTIVITIES FASTER THAN YOUR TODDLER CAN EMPTY THE TUPPERWARE DRAWER', 'НАХОДИТЕ БЕСПЛАТНЫЕ ЗАНЯТИЯ БЫСТРЕЕ, ЧЕМ МАЛЫШ ОПУСТОШИТ ЯЩИК С ПОСУДОЙ'],
  ['FIND FREE SANITY-SAVING ACTIVITIES FASTER THAN YOUR TODDLER CAN EMPTY THE TUPPERWARE DRAWER', 'НАХОДИТЕ БЕСПЛАТНЫЕ ЗАНЯТИЯ БЫСТРЕЕ, ЧЕМ МАЛЫШ ОПУСТОШИТ ЯЩИК С ПОСУДОЙ'],
  ['FIND FREE', 'НАХОДИТЕ'],
  ['FIND', 'НАХОДИТЕ'],
  ['FREE', 'БЕСПЛАТНЫЕ'],
  ['SANITY—SAVING', 'СПАСИТЕЛЬНЫЕ'],
  ['SANITY-SAVING', 'СПАСИТЕЛЬНЫЕ'],
  ['ACTIVITIES', 'ЗАНЯТИЯ'],
  ['FASTER THAN', 'БЫСТРЕЕ, ЧЕМ'],
  ['FASTER', 'БЫСТРЕЕ'],
  ['THAN', 'ЧЕМ'],
  ['YOUR TODDLER', 'ВАШ МАЛЫШ'],
  ['YOUR', 'ВАШ'],
  ['TODDLER', 'МАЛЫШ'],
  ['CAN', 'СМОЖЕТ'],
  ['EMPTY', 'ОПУСТОШИТЬ'],
  ['CAN EMPTY THE', 'СМОЖЕТ ОПУСТОШИТЬ'],
  ['Can EMPTY THE', 'Сможет опустошить'],
  ['EMPTY THE', 'ОПУСТОШИТЬ ВЕСЬ'],
  ['THE', 'ВЕСЬ'],
  ['TUPPERWARE', 'ЯЩИК С'],
  ['DRAWER', 'ПОСУДОЙ'],
  ['Drawer', 'Посудой'],
  ["You're welcome !", 'Всегда пожалуйста!'],
  ["You're welcome!", 'Всегда пожалуйста!'],

  // Home: Features & Sections
  ['WITH MAGGIE YOU CAN:', 'С MAGGIE ВЫ МОЖЕТЕ:'],
  ['WITH MAGGIE', 'С MAGGIE'],
  ['YOU CAN:', 'ВЫ МОЖЕТЕ:'],
  ['FIND ACTIVITIES IN YOUR LOCAL AREA', 'НАХОДИТЬ МЕРОПРИЯТИЯ В ВАШЕМ РАЙОНЕ'],
  ['FIND ACTIVITIES', 'НАХОДИТЬ ЗАНЯТИЯ'],
  ['in your Local area', 'в вашем районе'],
  ['IN YOUR LOCAL AREA', 'В ВАШЕМ РАЙОНЕ'],
  ['pack the drinks', 'взять напитки'],
  ['pack the', 'взять'],
  ['drinks', 'напитки'],
  ['breakfast', 'завтрак'],
  ['ballet class', 'урок балета'],
  ['ballet', 'урок'],
  ['class', 'балета'],
  ["Because making memories shouldn't be another thing on your to-do list.", 'Создание воспоминаний не должно быть еще одной задачей в списке дел.'],
  ['snaaacks', 'перекууусы'],
  ['pack the dummy', 'взять соску'],
  ['dummy', 'соску'],
  ['find something to do', 'найти занятие'],
  ['Save and Share YOUR Favourites', 'Сохраняйте и делитесь избранным'],
  ['Select adventures based on age', 'Выбирайте приключения по возрасту'],
  ["OUR APP IS ON \nA MISSION TO \nHELP LIGHTEN \nPARENTS'\nMENTAL LOAD", "НАШЕ ПРИЛОЖЕНИЕ \nСОЗДАНО, ЧТОБЫ \nОБЛЕГЧИТЬ \nРОДИТЕЛЬСКИЕ \nБУДНИ"],
  ["OUR APP IS ON A MISSION TO HELP LIGHTEN PARENTS' MENTAL LOAD", "НАШЕ ПРИЛОЖЕНИЕ СОЗДАНО, ЧТОБЫ ОБЛЕГЧИТЬ РОДИТЕЛЬСКИЕ БУДНИ"],
  ['MAGGIE STARTED WITH TWO MUMS, A FEW WINES, AND ONE BIG IDEA:', 'MAGGIE НАЧАЛОСЬ С ДВУХ МАМ, БОКАЛА ЧАЯ И ОДНОЙ БОЛЬШОЙ ИДЕИ:'],
  ['PARENTING \nSHOULD FEEL\nLIGHTER', 'РОДИТЕЛЬСТВО \nДОЛЖНО БЫТЬ \nВ РАДОСТЬ'],
  ['PARENTING SHOULD FEEL LIGHTER', 'РОДИТЕЛЬСТВО ДОЛЖНО БЫТЬ В РАДОСТЬ'],
  ['MAGGIE\nIS FOR EVERY\nPARENT WHO\nHAS EVER FELT\nOVERWHELMED,\nISOLATED, OR\nJUST OUT\nOF IDEAS.', 'MAGGIE —\nДЛЯ КАЖДОГО,\nКТО КОГДА-ЛИБО\nЧУВСТВОВАЛ\nУСТАЛОСТЬ\nИЛИ НЕ ЗНАЛ,\nЧЕМ ЗАНЯТЬ\nМАЛЫША.'],
  ['Learn more about \nour story', 'Узнайте больше \nо нашей истории'],
  ['Learn more about our story', 'Узнайте больше о нашей истории'],
  ['MORE\nTHAN', 'БОЛЕЕ'],
  ['MORE THAN', 'БОЛЕЕ'],
  ['FREE ACTIVITIES AND KID-FRIENDLY PARKS ACROSS AUSTRALIA.', 'БЕСПЛАТНЫХ МЕРОПРИЯТИЙ И ДЕТСКИХ ПАРКОВ ПО ВСЕЙ СТРАНЕ.'],
  ['Maggie has you covered', 'Maggie всегда рядом'],
  ['TURN CHAOS \nINTO CHUCKLES \nWITH MAGGIE!', 'ПРЕВРАЩАЙТЕ ХАОС \nВ УЛЫБКИ \nВМЕСТЕ С MAGGIE!'],
  ['TURN CHAOS INTO CHUCKLES WITH MAGGIE!', 'ПРЕВРАЩАЙТЕ ХАОС В УЛЫБКИ ВМЕСТЕ С MAGGIE!'],

  // About Page
  ['OUR STORY', 'НАША ИСТОРИЯ'],
  ['Our story', 'Наша история'],
  ['Our Story', 'Наша история'],
  ['MADE BY MUMS, POWERED BY TECH, BUILT FOR REAL LIFE.', 'СОЗДАНО МАМАМИ, РАБОТАЕТ НА ТЕХНОЛОГИЯХ, ДЛЯ РЕАЛЬНОЙ ЖИЗНИ.'],
  ['made by mums, powered by tech, built for real life.', 'создано мамами, работает на технологиях, создано для реальной жизни.'],
  ["Liv Luker (left) and Eimear Colleran (right) met in 2017 at a tech startup — Liv’s a whiz with numbers, operations and finance, while Eimear’s all things marketing, brand and storytelling. Different strengths, same goal. What they share is a deep love of tech, clever apps, and finding smart solutions to everyday problems. \n\nThey entered motherhood around the same time and quickly realised: You can have it all just not at once and that's ok.\n\nBetween park hangs and late-night texts, they kept circling the same question:", "Лив Люкер (слева) и Эймир Коллеран (справа) познакомились в 2017 году в технологическом стартапе: Лив — эксперт в цифрах, операциях и финансах, а Эймир — специалист по маркетингу, брендингу и сторителлингу. Разные сильные стороны, единая цель: искренняя любовь к технологиям, удобным приложениям и простым решениям повседневных задач.\n\nОни стали мамами примерно в одно время и быстро поняли: можно успевать всё, но не сразу, и это нормально.\n\nГуляя по паркам и переписываясь по ночам, они постоянно возвращались к одному вопросу:"],
  ['Liv Luker (left) and Eimear Colleran (right) met in 2017 at a tech startup — Liv’s a whiz with numbers, operations and finance, while Eimear’s all things marketing, brand and storytelling. Different strengths, same goal. What they share is a deep love of tech, clever apps, and finding smart solutions to everyday problems.', 'Лив Люкер (слева) и Эймир Коллеран (справа) познакомились в 2017 году в технологическом стартапе: Лив — эксперт в цифрах, операциях и финансах, а Эймир — специалист по маркетингу, брендингу и сторителлингу. Разные сильные стороны, единая цель: искренняя любовь к технологиям, удобным приложениям и простым решениям повседневных задач.'],
  ["They entered motherhood around the same time and quickly realised: You can have it all just not at once and that's ok.", "Они стали мамами примерно в одно время и быстро поняли: можно успевать всё, но не сразу, и это нормально."],
  ['Between park hangs and late-night texts, they kept circling the same question:', 'Гуляя по паркам и переписываясь по ночам, они постоянно возвращались к одному вопросу:'],
  ['WHY IS IT SO HARD TO FIND FREE, FUN THINGS TO DO WITH KIDS?', 'ПОЧЕМУ ТАК СЛОЖНО НАЙТИ БЕСПЛАТНЫЕ И ИНТЕРЕСНЫЕ ЗАНЯТИЯ ДЛЯ ДЕТЕЙ?'],
  ['why is it so hard to find free, fun THINGS to do with kids?', 'почему так сложно найти бесплатные и интересные ЗАНЯТИЯ для детей?'],
  ['One evening armed with wine and a laptop they mapped out the app they wished existed. Now they’ve built it.', 'Однажды вечером они открыли ноутбук и набросали приложение своей мечты. А затем создали его!'],
  ['ACTIVITIES, PARKS, AND KID—FRIENDLY VENUES ACROSS AUSTRALIA. MAGGIE HAS YOU COVERED.', 'МЕРОПРИЯТИЯ, ПАРКИ И ДЕТСКИЕ ПРОСТРАНСТВА ПО ВСЕЙ СТРАНЕ. MAGGIE ВСЕГДА РЯДОМ.'],
  ['activities, PARKS, and kid—friendly venues ACROSS AUSTRALIA. MAGGIE HAS YOU COVERED.', 'мероприятия, ПАРКИ и детские пространства РЯДОМ С ВАМИ. MAGGIE ПОЗАБОТИТСЯ ОБО ВСЕМ.'],
  ['Got questions, feedback, or just want to say hi?', 'Есть вопросы, отзывы или просто хотите поздороваться?'],

  // FAQs Page
  ['OUR FAQS', 'ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ'],
  ['Frequently Asked Questions', 'Часто задаваемые вопросы'],
  ['What is the Maggie app?', 'Что такое приложение Maggie?'],
  ['Maggie is a free app designed by mums, for mums. It helps you discover free activities happening near you  — from parks and natures trails to storyline sessions and community events — to make parenting a little easer and a lot more fun.', 'Maggie — это бесплатное приложение, созданное мамами для мам. Оно помогает находить бесплатные занятия поблизости — от парков и экотроп до книжных чтений и районных мероприятий, делая родительство проще и радостнее.'],
  ['Who is the app for?', 'Для кого создано приложение?'],
  ['Who is Maggie for?', 'Для кого создано Maggie?'],
  ['Maggie is made for mums (and carers… we see you dads, grandparents, nannies, aunts, uncles) with babies, toddlers, or young kids who are looking for things to do without the mental load. Whether you\'re home with your first baby or wrangling a tribe, Maggie is here to help you create moments that matter.', 'Maggie создано для мам (и всех близких — пап, бабушек, дедушек, нянь), которые ищут интересные активности для малышей без стресса и долгих поисков. Неважно, один у вас малыш или целая команда — Maggie поможет провести время с пользой.'],
  ['Is the app really free?', 'Приложение действительно бесплатное?'],
  ['Is Maggie really free?', 'Приложение действительно бесплатное?'],
  ['Yes! Maggie is completely free to use. We believe every mum deserves easy access to fun, no cost activities without spending hours scrolling or planning.', 'Да! Maggie полностью бесплатно. Мы уверены, что каждая семья заслуживает легкого доступа к классным бесплатным занятиям без долгих поисков в интернете.'],
  ['What kind of activities will I find on Maggie?', 'Какие занятия можно найти в приложении?'],
  ['What kind of activities will I find?', 'Какие занятия можно найти в приложении?'],
  ['You\'ll find a mix of local, free activities such as:', 'Вы найдете множество разнообразных бесплатных активностей, таких как:'],
  ['Library storytimes rhymetimes, etc.', 'Интерактивные чтения и стихи в библиотеках'],
  ['Playgrounds and parks', 'Детские площадки, парки и скверы'],
  ['Other community sessions eg: ESL, hard for hearing, etc.', 'Развивающие занятия и районные мастер-классы'],
  ['As the app grows we will adding more kid-friendly events and venues so keep an eye out!', 'Мы регулярно добавляем новые локации и мероприятия для детей, следите за обновлениями!'],
  ['Is Maggie available across all of Australia?', 'Доступно ли Maggie во всех городах?'],
  ['Is Maggie available in my area?', 'Доступно ли Maggie в моем районе?'],
  ['We\'re starting with cities and expanding quickly based on where the most mums are located. If we\'re not in your area yet, hang tight — we\'re coming!', 'Мы активно расширяем географию приложения. Если в вашем районе еще мало мест — совсем скоро их станет больше!'],
  ["To get us there in a jiffy complete our contact form and let us know where you're located.", "Чтобы мы быстрее появились у вас, заполните форму обратной связи и расскажите, где вы находитесь."],
  ["To get us there in a jiffy complete our форму обратной связи and let us know where you're located.", "Чтобы мы быстрее появились у вас, заполните форму обратной связи и расскажите, где вы находитесь."],
  ['Do I have to create an account to use it?', 'Нужно ли создавать аккаунт?'],
  ['Do I need to create an account?', 'Нужно ли создавать аккаунт?'],
  ['Yes you do but it’s a good thing as creating an account lets you save favourites, get personalised suggestions, and access more features as we grow.', 'Да, аккаунт позволяет сохранять любимые места в закладки, получать персональные рекомендации и открывать новые функции.'],
  ['Can I suggest an activity to add?', 'Могу ли я предложить свое мероприятие?'],
  ['Yes please! Maggie is built on community. If you know of a great local event or hidden gem, you can easily submit it through the app or via this form - we love mums helping mums.', 'Конечно! Если вы знаете классное место или мероприятие, добавьте его через приложение или специальную форму — мы рады поддержке сообщества.'],
  ['Yes please! Maggie is built on community. If you know of a great local event or hidden gem, you can easily submit it through the app or через эту форму - we love mums helping mums.', 'Конечно! Если вы знаете классное место или мероприятие, добавьте его через приложение или специальную форму — мы рады поддержке сообщества.'],
  ['How do I stay in the loop with updates?', 'Как следить за новостями?'],
  ['Follow us on Instagram, or subscribe in the app to hear about new features, launches in your area, and parenting inspo.', 'Подписывайтесь на наш Instagram или в приложении, чтобы первыми узнавать о новых функциях и интересных идеях.'],
  ['Who’s behind Maggie?', 'Кто стоит за Maggie?'],
  ['Who is behind Maggie?', 'Кто стоит за Maggie?'],
  ['We’re two Aussie mums on a mission to make mumming easier. Between nap schedules and snack breaks, we built Maggie to take some of the mental load off your plate and help you enjoy more special moments with your little ones.', 'Мы — мамы, которые решили сделать родительские будни комфортнее. Между дневным сном и перекусами мы создали Maggie, чтобы снять с вас груз планирования и подарить больше счастливых минут с детьми.'],

  // For Business
  ['Add your venue to maggie!', 'Добавьте ваше заведение в Maggie!'],
  ['ДОБАВЬТЕ\nВАШЕ МЕСТО В MAGGIE!', 'ДОБАВЬТЕ\nВАШЕ МЕСТО В MAGGIE!'],
  ['Add your', 'Добавьте'],
  ['venue to maggie!', 'ваше место в Maggie!'],
  ["Got a venue that kids love? We're all ears.", 'У вас есть пространство, где рады детям? Мы с удовольствием о нем расскажем!'],
  ["Enter your details below and we'll get back to you quicker than your kid can lose a shoe in the car.", 'Заполните форму ниже, и мы свяжемся с вами быстрее, чем малыш успеет потерять ботинок в машине.'],

  // Android
  ['we see you Android friends!', 'мы помним о вас, пользователи Android!'],
  ['МЫ ПОМНИМ О ВАС, ПОЛЬЗОВАТЕЛИ ANDROID!', 'МЫ ПОМНИМ О ВАС, ПОЛЬЗОВАТЕЛИ ANDROID!'],
  ['Request early access', 'Запросить ранний доступ'],
  ['Help us shape the Android experience.', 'Помогите нам создать лучшую версию для Android.'],
  ['Help us shape the Android experience. Request early access and maybe you’ll be one of the first to try it.', 'Помогите нам создать лучшую версию для Android. Оставьте заявку на ранний доступ, чтобы протестировать её первым.'],
  ['and maybe you’ll be one of the first to try it.', 'и протестируйте её первыми.'],
  ['and maybe you\'ll be one of the first to try it.', 'и протестируйте её первыми.'],

  // Policies Page
  ['OUR PRIVACY POLICY', 'НАША ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ'],
  ['UPDATED: JUNE 2025', 'ОБНОВЛЕНО: ИЮНЬ 2026'],
  ['PRIVACY POLICY & TERMS', 'ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ'],
  ["We’re mums too — we get it. \n\nYou’re trusting us with your information, and that’s a big deal. This Privacy Policy explains what we collect, why we collect it, and how we keep it safe across our website, waitlist, and the Maggie app.", "Мы тоже мамы и прекрасно вас понимаем.\n\nВы доверяете нам свои данные, и мы относимся к этому очень ответственно. Эта политика конфиденциальности объясняет, какую информацию мы собираем, зачем и как мы обеспечиваем её безопасность."],
  ['1. Who We Are', '1. Кто мы'],
  ["1. Who We Are\nWe’re Maggie, a free app made by mums, for mums, helping you find local parks, playgrounds and community activities. Our website is maggie-app.com and our app is available via iOS/Android (coming soon!).", "1. Кто мы\nMaggie — это бесплатное приложение, созданное мамами для мам, которое помогает находить парки, площадки и детские мероприятия."],
  ['2. What We Collect', '2. Какую информацию мы собираем'],
  ['2. Какую информацию мы собираем\nWe only collect what we need to make Maggie useful for you:', '2. Какую информацию мы собираем\nМы собираем только то, что необходимо для удобной работы приложения:'],
  ['On the Website & Waitlist:', 'На сайте и в списке ожидания:'],
  ['Your name and email address (if you sign up)', 'Ваше имя и адрес электронной почты (при регистрации)'],
  ['Device info and usage data (like most websites, we use analytics to understand how people use the site)', 'Данные устройства и аналитика использования сайта'],
  ['In the Maggie App (once live):', 'В приложении Maggie:'],
  ['Your name, email and location (whilst using the app)', 'Ваше имя, email и геолокация (во время использования)'],
  ['App usage data (to improve the experience)', 'Данные об использовании приложения для улучшения сервиса'],
  ['Optional submissions (if you suggest an activity or leave feedback)', 'Ваши предложения мероприятий и отзывы'],
  ['We do not collect any sensitive information like health data or financial info.', 'Мы не собираем конфиденциальные данные, такие как состояние здоровья или финансовые сведения.'],
  ['3. How We Use Your Info', '3. Как мы используем данные'],
  ['3. How We Use Your Info\nWe use your info to:', '3. Как мы используем информацию\nМы используем данные, чтобы:'],
  ['3. How We Use It', '3. Как мы ее используем'],
  ['Help you find activities near you', 'Помогать вам находить мероприятия поблизости'],
  ['Personalise your experience', 'Персонализировать рекомендации'],
  ['Let you know when Maggie launches new things in your area', 'Сообщать о запуске новых функций в вашем районе'],
  ['Improve the app and fix bugs', 'Улучшать приложение и устранять ошибки'],
  ['Send occasional updates (only if you’ve said yes)', 'Отправлять полезные обновления (только с вашего согласия)'],
  ['We do not sell your data. Ever.', 'Мы никогда не продаем ваши данные. Никому.'],
  ['4. Cookies and Tracking', '4. Файлы Cookie и аналитика'],
  ['4. Cookies & Tracking', '4. Файлы Cookie и трекинг'],
  ['Like most websites, we use cookies and analytics tools (like Google Analytics) to see what pages are popular and how people find us. You can turn cookies off in your browser settings any time.', 'Как и большинство сайтов, мы используем cookie и аналитику, чтобы делать сервис лучше. Вы можете отключить cookie в настройках браузера.'],
  ['4. Third Parties & Sharing', '4. Сторонние сервисы и передача данных'],
  ['5. Sharing Your Data', '5. Передача данных'],
  ['5. Sharing Your Data\nWe only share your data when:', '5. Передача данных\nМы передаем данные только когда:'],
  ['It’s required to run the service (e.g. with our email provider or developers)', 'Это необходимо для работы сервиса (например, почтовые провайдеры)'],
  ['It’s required by law', 'Это требуется по закону'],
  ['We don’t share your personal info with advertisers or unrelated third parties.', 'Мы не передаем ваши личные данные рекламодателям.'],
  ['6. Keeping Your Info Safe', '6. Безопасность ваших данных'],
  ['We store your data securely and follow industry best practices to protect it. If there’s ever a data breach, we’ll let you know.', 'Мы храним данные безопасно и соблюдаем современные стандарты защиты информации.'],
  ['7. Your Rights', '7. Ваши права'],
  ['7. Ваши права\nYou can:', '7. Ваши права\nВы можете:'],
  ['Ask us what info we have on you', 'Запросить копию ваших данных'],
  ['Ask us to delete your data', 'Запросить удаление ваших данных'],
  ['Opt out of emails at any time', 'Отписаться от рассылки в любое время'],
  ['8. Changes to This Policy', '8. Изменения политики'],
  ['9. Contact Us', '9. Связь с нами'],
  ['THANKS FOR STOPPING BY. WE KNOW THE MENTAL LOAD IS REAL, AND WE’RE SO GLAD YOU’RE HERE.', 'СПАСИБО, ЧТО ВЫ С НАМИ. МЫ ЗНАЕМ, КАК СЛОЖНО БЫВАЕТ РОДИТЕЛЯМ, И ОЧЕНЬ РАДЫ ВАМ ПОМОЧЬ!']
];

dictionary.sort((a, b) => b[0].length - a[0].length);

const localizationBundle = `
<!-- Russian Localization & Typography -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,600;0,700;0,800;0,900;1,700;1,900&family=Caveat:wght@600;700&family=Montserrat:wght@700;800;900&display=swap" rel="stylesheet">
<style>
@font-face {
  font-family: 'BN Dime Display Regular';
  src: local('Rubik'), local('Montserrat');
  font-weight: 900;
  font-display: swap;
}
@font-face {
  font-family: 'Homemade Apple';
  src: local('Caveat');
  font-weight: 700;
  font-display: swap;
}
h1, h2, h3, [data-framer-component-type="Text"] h1, [data-framer-component-type="Text"] h2, [data-framer-component-type="RichTextContainer"] h1, [data-framer-component-type="RichTextContainer"] h2 {
  font-family: 'Rubik', 'Montserrat', sans-serif !important;
  font-weight: 900 !important;
  letter-spacing: -0.02em !important;
}
.framer-7h1n86, .framer-5xmql3, .framer-ezfdxl, .framer-1113yde {
  font-family: 'Caveat', cursive !important;
  font-weight: 700 !important;
  font-size: 1.25em !important;
}
</style>
<script>
(function() {
  const dictionary = ${JSON.stringify(dictionary)};

  function translateText(str) {
    if (!str || typeof str !== 'string') return str;
    let trimmed = str.trim();
    if (!trimmed) return str;

    for (let i = 0; i < dictionary.length; i++) {
      if (trimmed === dictionary[i][0]) {
        return str.replace(trimmed, dictionary[i][1]);
      }
    }

    let res = str;
    for (let i = 0; i < dictionary.length; i++) {
      const en = dictionary[i][0];
      if (en.length > 2 && res.includes(en)) {
        res = res.replaceAll(en, dictionary[i][1]);
      }
    }
    return res;
  }

  function translateHeadings() {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6, [data-framer-component-type="RichTextContainer"], [data-framer-component-type="Text"]');
    for (let i = 0; i < headings.length; i++) {
      const h = headings[i];
      const text = h.innerText ? h.innerText.trim() : '';
      const translated = translateText(text);
      if (translated !== text && text.length > 2) {
        if (h.children.length > 0) {
          h.innerText = translated;
        }
      }
    }
  }

  function processNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const parent = node.parentElement;
      if (parent && (parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE' || parent.tagName === 'NOSCRIPT')) return;
      const original = node.nodeValue;
      const translated = translateText(original);
      if (original !== translated) {
        node.nodeValue = translated;
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      if (node.tagName === 'INPUT' || node.tagName === 'TEXTAREA') {
        const ph = node.getAttribute('placeholder');
        if (ph) {
          const t = translateText(ph);
          if (ph !== t) node.setAttribute('placeholder', t);
        }
      }

      if (node.tagName && /^(H1|H2|H3|H4|H5|H6)$/i.test(node.tagName)) {
        const text = node.innerText ? node.innerText.trim() : '';
        const translated = translateText(text);
        if (translated !== text && text.length > 2) {
          if (node.children.length > 0) {
            node.innerText = translated;
          }
        }
      }

      for (let child = node.firstChild; child; child = child.nextSibling) {
        processNode(child);
      }
    }
  }

  function run() {
    processNode(document.body || document.documentElement);
    translateHeadings();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
  window.addEventListener('load', run);

  const observer = new MutationObserver(mutations => {
    for (const m of mutations) {
      if (m.type === 'characterData') {
        const parent = m.target.parentElement;
        if (parent && (parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE')) continue;
        const original = m.target.nodeValue;
        const translated = translateText(original);
        if (original !== translated) {
          m.target.nodeValue = translated;
        }
      } else if (m.type === 'childList') {
        for (const added of m.addedNodes) {
          processNode(added);
        }
      }
    }
    translateHeadings();
  });

  document.addEventListener('DOMContentLoaded', () => {
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    });
  });

  let count = 0;
  const timer = setInterval(() => {
    run();
    count++;
    if (count > 25) clearInterval(timer);
  }, 200);
})();
</script>
`;

const rootDir = '/Users/user/.gemini/antigravity/scratch/kid_dental';
const htmlFiles = fs.readdirSync(rootDir).filter(f => f.endsWith('.html'));

for (const f of htmlFiles) {
  const p = path.join(rootDir, f);
  let html = fs.readFileSync(p, 'utf8');

  // Set lang="ru"
  html = html.replace(/<html[^>]*>/, '<html lang="ru">');

  // Strip previous localization tags if any
  html = html.replace(/<!-- Russian Localization[\s\S]*?<\/script>\n?/gi, '');

  // Inject updated localization
  html = html.replace('</head>', localizationBundle + '\n</head>');

  fs.writeFileSync(p, html);
  console.log('Updated HTML:', f);
}

console.log('All files updated with complete Russian localization!');
