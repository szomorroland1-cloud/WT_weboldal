// A TELJES, BŐVÍTETT OKTATÓANYAG ADATBÁZIS (HTML, CSS, JS)
const DATA = {
    html: [
        { 
            id: 1, 
            level: "1. SZINT: AZ ALAPOK", 
            title: "1. Mi a csuda az a HTML?", 
            text: "<h1>Mi a csuda az a HTML?</h1><p>Gondolj a HTML-re úgy, mint egy ház csontvázára. Nem a szép festés, nem az intelligens világítás, csak a puszta falak. HTML nélkül nincs weboldal.</p><p>A HTML-ben mindent <strong>tagek (címkék)</strong> közé zárunk. Van egy eleje meg egy vége, a vége mindig kap egy / jelet. Például a főcímet így írjuk:</p><div class='highlight-box'>&lt;h1&gt;Ez egy baromi nagy főcím&lt;/h1&gt;</div><p>Próbáld ki lent a gyakorlóban! Írd át a szöveget arra, amit szeretnél, és nyomd meg a villám gombot!</p>", 
            defaultCode: "<h1>Szia! Ez az első kódom az oldalon!</h1>" 
        },
        { 
            id: 2, 
            level: "1. SZINT: AZ ALAPOK", 
            title: "2. Sima szövegek (Bekezdés)", 
            text: "<h1>Sima szövegek írása</h1><p>Nem írhatunk mindent óriási címsorral. A normál szövegekhez a <strong>&lt;p&gt; tag-et</strong> használjuk (a paragraph, azaz bekezdés szóból).</p><p>Ha több bekezdést írsz egymás alá, a böngésző automatikusan tesz közéjük egy kis szünetet, így szép szellős lesz az olvasnivaló. Így néz ki:</p><div class='highlight-box'>&lt;p&gt;Ez az első bekezdés.&lt;/p&gt;<br>&lt;p&gt;Ez meg már a második.&lt;/p&gt;</div>", 
            defaultCode: "<p>Ez egy sima bekezdés szövege. Írj ide még valamit!</p>" 
        },
        { 
            id: 3, 
            level: "2. SZINT: KÉPEK ÉS LINKEK", 
            title: "3. Kattintható linkek", 
            text: "<h1>Hogyan küldjük át az olvasót egy másik oldalra?</h1><p>A linkek (hivatkozások) tartják össze az internetet. HTML-ben ezt az <strong>&lt;a&gt; tag-vel</strong> csináljuk, de kell neki egy attribútum is (egy extra tulajdonság), ami megmondja, hova mutasson. Ez a <strong>href</strong>.</p><div class='highlight-box'>&lt;a href='https://google.com'&gt;Irány a Google!&lt;/a&gt;</div><p>Teszteld le lent! Ha rákattintasz a gomb után megjelenő linkre, az átvisz a megadott oldalra.</p>", 
            defaultCode: "<a href='https://google.com' target='_blank'>Kattints ide, nyissuk meg a Google-t!</a>" 
        },
        { 
            id: 4, 
            level: "2. SZINT: KÉPEK ÉS LINKEK", 
            title: "4. Képek beillesztése", 
            text: "<h1>Képek a weboldalon</h1><p>A képek feldobják az oldalt. A kép tag kicsit fura, mert <strong>neki nincs záró párja!</strong> Csak megadjuk a kép forrását (<strong>src</strong>), és kész.</p><div class='highlight-box'>&lt;img src='kep_linkje.jpg'&gt;</div><p>Lent beraktam neked egy mintaképet a gyakorlóba, nézd meg hogy jelenik meg!</p>", 
            defaultCode: "<img src='https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300' alt='Laptop'>\n<p>Egy szép laptopos kép.</p>" 
        },
        { 
            id: 5, 
            level: "3. SZINT: A SZERKEZET", 
            title: "5. Gombok és interakció", 
            text: "<h1>Készítsünk gombot!</h1><p>A modern weboldalakon lépten-nyomon gombokba botlunk. Regisztráció, küldés, vásárlás... HTML-ben ezt a <strong>&lt;button&gt;</strong> taggel hozzuk létre.</p><p>Magában a gomb még nem csinál semmit (ahhoz majd JavaScript kell), de a kinézetét már most megcsodálhatod lent.</p>", 
            defaultCode: "<button>Kattints rám!</button>" 
        },
        { 
            id: 6, 
            level: "3. SZINT: A SZERKEZET", 
            title: "6. A láthatatlan dobozok (div)", 
            text: "<h1>A weboldalak igazi titka: a DIV doboz</h1><p>Ez a legfontosabb rész, ha valódi weboldalt akarsz építeni! A <strong>&lt;div&gt;</strong> egy láthatatlan doboz. Arra használjuk, hogy csoportosítsunk dolgokat.</p><p>Például ha van egy címsorod, egy szöveged meg egy gombod, azokat belerakod egy közös dobozba (div), és később CSS-sel az egész dobozt egyszerre tudod színezni, mozgatni vagy háttérbe tenni.</p><div class='highlight-box'>&lt;div&gt;<br>&nbsp;&nbsp;&lt;h1&gt;Termék név&lt;/h1&gt;<br>&nbsp;&nbsp;&lt;button&gt;Megveszem&lt;/button&gt;<br>&lt;/div&gt;</div>", 
            defaultCode: "<div style='background-color: #333; color: white; padding: 20px; border-radius: 5px;'>\n  <h2>Ez egy dobozon belül van!</h2>\n  <p>A doboz segít egyben tartani a dolgokat.</p>\n</div>" 
        }
    ],
    css: [
        { 
            id: 1, 
            level: "1. SZINT: STÍLUSOK", 
            title: "1. Mi az a CSS?", 
            text: "<h1>A CSS világa - Adjunk ruhát a csontvázra!</h1><p>A HTML csak a puszta szöveg, a CSS pedig a dizájn. Ezzel mondjuk meg, hogy mi milyen színű legyen, mekkora legyen a betű, és hol helyezkedjen el.</p><p>A legegyszerűbb módja a formázásnak, ha a HTML tag-en belül a <strong>style</strong> attribútumot használjuk. Például így színezzük át a szöveget pirosra:</p><div class='highlight-box'>&lt;p style='color: red;'&gt;Ez egy piros szöveg.&lt;/p&gt;</div><p>Próbáld ki lent! Írd át a 'red' szót 'blue'-ra vagy 'green'-re, és nézd meg az eredményt!</p>", 
            defaultCode: "<p style='color: red; font-size: 20px;'>Ezt a szöveget a CSS tette naggyá és pirossá!</p>" 
        },
        { 
            id: 2, 
            level: "1. SZINT: STÍLUSOK", 
            title: "2. Háttérszínek és kerekítések", 
            text: "<h1>Hátterek színezése</h1><p>Nem csak a betűket, hanem az elemek hátterét is át tudjuk alakítani a <strong>background-color</strong> paranccsal. Ha pedig nem akarjuk, hogy a dobozaink sarka túl hegyes legyen, a <strong>border-radius</strong> segítségével lekerekíthetjük őket!</p><div class='highlight-box'>background-color: black;<br>border-radius: 10px;</div>", 
            defaultCode: "<div style='background-color: #00f0ff; color: black; padding: 20px; border-radius: 15px;'>\n  <h3>Neon doboz lekerekített sarkokkal!</h3>\n</div>" 
        },
        { 
            id: 3, 
            level: "2. SZINT: TEXTÚRA ÉS MÉRET", 
            title: "3. Margók és térközök", 
            text: "<h1>Padding és Margin: Mi a különbség?</h1><p>Ez a webfejlesztők egyik legnagyobb harca. Figyelj jól, mert pofonegyszerű:</p><ul><li><strong>Padding (belső térköz):</strong> A dobozon BELÜLI üres rész. Megnyomja a szöveg és a doboz széle közötti távolságot.</li><li><strong>Margin (külső margó):</strong> A dobozon KÍVÜLI üres rész. Ezzel tudsz két különálló dobozt eltaszítani egymástól.</li></ul>", 
            defaultCode: "<button style='padding: 20px; margin-right: 30px;'>Nagy belső térközű gomb</button>\n<button style='padding: 5px;'>Kicsi gomb</button>" 
        }
    ],
    js: [
        { 
            id: 1, 
            level: "1. SZINT: INTERAKCIÓ", 
            title: "1. Mi az a JavaScript?", 
            text: "<h1>A JavaScript hozza működésbe a webet!</h1><p>A HTML a csontváz, a CSS a ruha, a JavaScript pedig az <strong>oldal agya</strong>. JS nélkül a gombokra kattintva nem történne semmi, nem lennének animációk, és nem működnének a játékok sem.</p><p>A legegyszerűbb, ha a gombunkhoz hozzáadunk egy <strong>onclick</strong> (kattintáskor) parancsot, ami lefuttat egy kis riasztást (alert):</p><div class='highlight-box'>&lt;button onclick='alert(\"Szia!\")'&gt;Gomb&lt;/button&gt;</div><p>Nyomd meg lent a gombot a gyakorlóban, és figyeld mi történik!</p>", 
            defaultCode: "<button onclick='alert(\"Gratulálok, lefutott az első JavaScript kódod! 🎉\")' style='padding: 10px 20px; cursor: pointer;'>Nyomj meg!</button>" 
        },
        { 
            id: 2, 
            level: "1. SZINT: INTERAKCIÓ", 
            title: "2. Szövegek cseréje kattintásra", 
            text: "<h1>Módosítsuk a HTML-t élőben!</h1><p>A JavaScript képes arra, hogy anélkül írjon át egy szöveget a kijelzőn, hogy az egész oldalt újra kellene tölteni. Ehhez az elemnek adunk egy egyedi azonosítót (<strong>id</strong>), a JS-sel pedig megkeressük és átírjuk a tartalmát (<strong>innerHTML</strong>).</p>", 
            defaultCode: "<h2 id='teszt-szoveg'>Ez még a régi, unalmas szöveg.</h2>\n\n<button onclick='document.getElementById(\"teszt-szoveg\").innerHTML = \"Bumm! A JavaScript átírta a címet! ⚡\"'>Változtasd meg!</button>" 
        }
    ]
};

let currentTab = 'html';

// FŐOLDAL MEGJELENÍTÉSE
function showMainPage() {
    document.getElementById('main-page').style.display = 'block';
    document.getElementById('learning-page').style.display = 'none';
    
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('nav-main').classList.add('active');
}

// TANULÓ FELÜLETRE VÁLTÁS
function changeTab(tabName) {
    currentTab = tabName;
    
    document.getElementById('main-page').style.display = 'none';
    document.getElementById('learning-page').style.display = 'flex';
    
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`nav-${tabName}`).classList.add('active');

    renderMenu();
    loadLecture(1);
}

// BAL OLDALI MENÜ GENERÁLÁSA
function renderMenu() {
    const menuContainer = document.getElementById('lecture-menu');
    menuContainer.innerHTML = '';
    
    let currentLevel = '';
    
    DATA[currentTab].forEach(lecture => {
        if (lecture.level !== currentLevel) {
            currentLevel = lecture.level;
            const levelDiv = document.createElement('div');
            levelDiv.className = 'level-title';
            levelDiv.innerText = currentLevel;
            menuContainer.appendChild(levelDiv);
        }

        const link = document.createElement('a');
        link.className = 'lecture-link';
        link.innerText = lecture.title;
        link.onclick = () => loadLecture(lecture.id);
        link.setAttribute('data-id', lecture.id);
        menuContainer.appendChild(link);
    });
}

// CIKK ÉS ALAPKÓD BETÖLTÉSE
function loadLecture(id) {
    const lecture = DATA[currentTab].find(l => l.id === id);
    if (!lecture) return;

    document.querySelectorAll('.lecture-link').forEach(link => {
        link.classList.remove('active');
        if(parseInt(link.getAttribute('data-id')) === id) {
            link.classList.add('active');
        }
    });

    document.getElementById('lecture-text').innerHTML = lecture.text;
    document.getElementById('code-input').value = lecture.defaultCode;
    runCode();
}

// KÓD FUTTATÁSA AZ IFRAME-BEN
function runCode() {
    const code = document.getElementById('code-input').value;
    const output = document.getElementById('code-output').contentWindow.document;
    
    output.open();
    output.write(code);
    output.close();
}

// INDÍTÁSKOR CSAK A FŐOLDAL LÁTSZÓDJON
window.onload = () => {
    showMainPage();
};
