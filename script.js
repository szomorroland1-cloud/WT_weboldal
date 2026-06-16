// A PROFI ÉS HALADÓ OKTATÓANYAG ADATBÁZIS (MÉLYEBB TUDÁS)
const DATA = {
    html: [
        { 
            id: 1, 
            level: "1. SZINT: ARCHITEKTÚRA", 
            title: "1. A modern HTML5 struktúra", 
            text: "<h1>Professzionális HTML5 Felépítés</h1><p>A valóságban nem csak úgy bedobáljuk a tageket. Egy igazi weboldalnak szigorú szerkezete van. A legfontosabb strukturális elemek a <strong>&lt;header&gt;</strong> (fejléc), <strong>&lt;main&gt;</strong> (főtartalom), és a <strong>&lt;footer&gt;</strong> (lábléc).</p><p>Ezek a szemantikus elemek segítenek a Google keresőjének megérteni, mi a legfontosabb tartalom az oldaladon.</p>", 
            defaultCode: "<header>\n  <h1>WebTeach Prémium Kurzus</h1>\n</header>\n<main>\n  <p>Ez itt a fő tartalom, ami a cikkeket tartalmazza.</p>\n</main>\n<footer>\n  <p>© 2026 WebTeach - Minden jog fenntartva.</p>\n</footer>" 
        },
        { 
            id: 2, 
            level: "1. SZINT: ARCHITEKTÚRA", 
            title: "2. Inputok és Űrlapok (Forms)", 
            text: "<h1>Adatgyűjtés mesterfokon</h1><p>Ha azt akarod, hogy a felhasználók regisztráljanak vagy üzenetet küldjenek neked, űrlapokat kell használnod. A <strong>&lt;form&gt;</strong> elemen belül az <strong>&lt;input&gt;</strong> határozza meg a beviteli mező típusát (text, email, password).</p>", 
            defaultCode: "<form action='#' onsubmit='alert(\"Küldés...\"); return false;'>\n  <label>Felhasználónév:</label><br>\n  <input type='text' placeholder='Add meg a neved...' required><br><br>\n  <label>Jelszó:</label><br>\n  <input type='password' required><br><br>\n  <button type='submit'>Bejelentkezés</button>\n</form>" 
        },
        { 
            id: 3, 
            level: "2. SZINT: HALADÓ ÖSSZEKÖTÉS", 
            title: "3. Külső CSS és JS beágyazása", 
            text: "<h1>Hogyan kötünk össze külön fájlokat?</h1><p>A profik sosem írnak CSS-t vagy JavaScriptet a HTML fájl belsejébe. Külön állományokat hozunk létre, és a HTML-ben linkeljük be őket:</p><ul><li><strong>CSS linkelés (a &lt;head&gt;-ben):</strong> <code>&lt;link rel='stylesheet' href='style.css'&gt;</code></li><li><strong>JS linkelés (a &lt;body&gt; alján):</strong> <code>&lt;script src='script.js'&gt;&lt;/script&gt;</code></li></ul><p>Ez biztosítja, hogy a kódod tiszta, átlátható és könnyen javítható maradjon.</p>", 
            defaultCode: "<!-- Így néz ki egy tiszta HTML head rész -->\n<head>\n  <link rel='stylesheet' href='style.css'>\n</head>\n<body>\n  <h2>A dizájn és a logika külső fájlokból töltődik be!</h2>\n  <script src='script.js'></script>\n</body>" 
        }
    ],
    css: [
        { 
            id: 1, 
            level: "1. SZINT: PROFI FORMÁZÁS", 
            title: "1. A CSS Szabályrendszer (Szelektorok)", 
            text: "<h1>Normális CSS használat szelektorokkal</h1><p>Felejtsd el a HTML-be írt stílusokat! A CSS-ben <strong>osztályokat (class)</strong> és <strong>azonosítókat (id)</strong> használunk az elemek megfogására.</p><p>Az osztályokat ponttal (<code>.gomb</code>), az ID-kat kettőskereszttel (<code>#fo-cim</code>) jelöljük a stílusfájlban. Így egyetlen CSS szabállyal akár 100 gombot is formázhatsz egyszerre az oldalon!</p>", 
            defaultCode: "<style>\n  .profi-kartya {\n    background: #1e1e24;\n    color: #ffaa00;\n    padding: 25px;\n    border-left: 5px solid #ffaa00;\n  }\n</style>\n\n<div class='profi-kartya'>\n  <h3>Ez egy osztály alapú CSS formázás!</h3>\n  <p>Tiszta, modern és elkülönül a HTML-től.</p>\n</div>" 
        },
        { 
            id: 2, 
            level: "1. SZINT: PROFI FORMÁZÁS", 
            title: "2. Háttérbeállítások mesterfokon", 
            text: "<h1>Hátterek: Színátmenetek és Képek</h1><p>Egy komoly weboldal nem csak sima egyszínű hátteret használ. A modern dizájn alapja a **linear-gradient** (színátmenet), illetve a háttérképek precíz igazítása (size, position, repeat).</p><p>A <code>background-size: cover;</code> biztosítja, hogy a kép torzulás nélkül töltse ki a teljes rendelkezésre álló teret.</p>", 
            defaultCode: "<style>\n  .premium-bg {\n    background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);\n    color: white;\n    padding: 40px;\n    border-radius: 10px;\n    text-align: center;\n  }\n</style>\n\n<div class='premium-bg'>\n  <h2>Komoly, sötét tónusú színátmenetes háttér</h2>\n  <p>Ez már egy prémium szoftver felületének az alapja.</p>\n</div>" 
        },
        { 
            id: 3, 
            level: "2. SZINT: MODERN ELRENDEZÉSEK", 
            title: "3. CSS Flexbox elrendezés", 
            text: "<h1>A modern elrendezések királya: A Flexbox</h1><p>Régen katasztrófa volt egymás mellé tenni elemeket a weben. Ma a <code>display: flex;</code> paranccsal másodpercek alatt létrehozhatsz tökéletesen igazított menüket vagy termékkártyákat.</p><ul><li><strong>justify-content: space-between;</strong> -> Széthúzza az elemeket a két szélre.</li><li><strong>align-items: center;</strong> -> Függőlegesen középre igazít mindent.</li></ul>", 
            defaultCode: "<style>\n  .flex-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background: #333;\n    padding: 15px;\n  }\n  .Box { background: #ff5e62; padding: 10px 20px; color: white; }\n</style>\n\n<div class='flex-container'>\n  <div class='Box'>Bal oldali elem</div>\n  <div class='Box'>Középső elem</div>\n  <div class='Box'>Jobb oldali elem</div>\n</div>" 
        }
    ],
    js: [
        { 
            id: 1, 
            level: "1. SZINT: VALÓDI LOGIKA", 
            title: "1. Változók és Adattípusok", 
            text: "<h1>A JavaScript valódi használata</h1><p>A JavaScriptben adatokat tárolunk és manipulálunk. Erre valóak a változók (<strong>let</strong> és <strong>const</strong>). Tárolhatunk bennük szöveget, számokat, vagy akár logikai értékeket is.</p><p>Lent a gyakorlóban a kód kiszámolja a megadott árakat, és dinamikusan kiírja az eredményt.</p>", 
            defaultCode: "<h3 id='ar-kijelzo'>Ár kiszámítása...</h3>\n\n<script>\n  const termekAr = 4500;\n  const afa = 1.27;\n  let vegosszeg = termekAr * afa;\n\n  document.getElementById('ar-kijelzo').innerHTML = \n    'Bruttó fizetendő összeg: ' + Math.round(vegosszeg) + ' Ft';\n</script>" 
        },
        { 
            id: 2, 
            level: "1. SZINT: VALÓDI LOGIKA", 
            title: "2. Eseménykezelők (Event Listeners)", 
            text: "<h1>addEventListener – A profi kattintáskezelés</h1><p>A HTML-be írt <code>onclick</code> attribútum elavult. A modern JavaScriptben a kód figyelőket (<strong>Event Listeners</strong>) rendel az elemekhez. Így a HTML és a JS teljesen külön életet élhet, mégis tökéletesen együttműködik.</p>", 
            defaultCode: "<button id='profi-gomb' style='padding: 12px 24px; font-weight: bold;'>Kattints rám!</button>\n\n<script>\n  const gomb = document.getElementById('profi-gomb');\n  \n  // Modern eseményfigyelő hozzáadása JS-ből:\n  gomb.addEventListener('click', function() {\n    gomb.style.backgroundColor = '#00ffcc';\n    gomb.innerHTML = 'Sikeres interakció! ⚡';\n  });\n</script>" 
        }
    ]
};

let currentTab = 'html';

function showMainPage() {
    document.getElementById('main-page').style.display = 'block';
    document.getElementById('learning-page').style.display = 'none';
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('nav-main').classList.add('active');
}

function changeTab(tabName) {
    currentTab = tabName;
    document.getElementById('main-page').style.display = 'none';
    document.getElementById('learning-page').style.display = 'flex';
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`nav-${tabName}`).classList.add('active');
    renderMenu();
    loadLecture(1);
}

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

function runCode() {
    const code = document.getElementById('code-input').value;
    const output = document.getElementById('code-output').contentWindow.document;
    output.open();
    output.write(code);
    output.close();
}

window.onload = () => {
    showMainPage();
};
