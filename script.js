// PROFI, MÉLYEBB OKTATÓANYAG ADATBÁZIS
const DATA = {
    html: [
        { 
            id: 1, 
            level: "1. SZINT: ARCHITEKTÚRA", 
            title: "1. A modern HTML5 struktúra", 
            text: "<h1>Professzionális HTML5 Felépítés</h1><p>A valóságban egy igazi weboldalnak szigorú, tiszta szerkezete van. A legfontosabb strukturális elemek a <strong>&lt;header&gt;</strong> (fejléc), <strong>&lt;main&gt;</strong> (főtartalom), és a <strong>&lt;footer&gt;</strong> (lábléc).</p><p>Ezek az elemek segítenek a Google keresőrobotjainak megérteni az oldalad felépítését.</p>", 
            defaultCode: "<header>\n  <h1>WebTeach Prémium Kurzus</h1>\n</header>\n<main>\n  <p>Ez itt a fő tartalom, ami a cikkeket tartalmazza.</p>\n</main>\n<footer>\n  <p>© 2026 WebTeach - Minden jog fenntartva.</p>\n</footer>" 
        },
        { 
            id: 2, 
            level: "1. SZINT: ARCHITEKTÚRA", 
            title: "2. Inputok és Űrlapok (Forms)", 
            text: "<h1>Adatgyűjtés és Beküldés</h1><p>Ha azt akarod, hogy a felhasználók regisztráljanak, adatokat kell gyűjtened tőlük. A <strong>&lt;form&gt;</strong> elemen belül az <strong>&lt;input&gt;</strong> parancs határozza meg a beviteli mező típusát (text, email, password).</p>", 
            defaultCode: "<form action='#' onsubmit='alert(\"Adatok elküldve!\"); return false;'>\n  <label>Felhasználónév:</label><br>\n  <input type='text' placeholder='Add meg a neved...' required><br><br>\n  <label>Jelszó:</label><br>\n  <input type='password' required><br><br>\n  <button type='submit'>Bejelentkezés</button>\n</form>" 
        },
        { 
            id: 3, 
            level: "2. SZINT: HALADÓ ÖSSZEKÖTÉS", 
            title: "3. Külső CSS és JS beágyazása", 
            text: "<h1>Külső erőforrások linkelése</h1><p>A profik külön állományokat hoznak létre, és a HTML-ben linkelik be őket. Így külön életet él a dizájn, a HTML és a logika:</p><ul><li><strong>CSS linkelés (a head-ben):</strong> &lt;link rel='stylesheet' href='style.css'&gt;</li><li><strong>JS linkelés (a body alján):</strong> &lt;script src='script.js'&gt;&lt;/script&gt;</li></ul>", 
            defaultCode: "\n<head>\n  <link rel='stylesheet' href='style.css'>\n</head>\n<body>\n  <h2>A dizájn és a logika külső fájlokból töltődik be!</h2>\n  <script src='script.js'></script>\n</body>" 
        }
    ],
    css: [
        { 
            id: 1, 
            level: "1. SZINT: PROFI FORMÁZÁS", 
            title: "1. A CSS Szelektorok használata", 
            text: "<h1>Normális CSS használat osztályokkal</h1><p>A profi fejlesztésben **osztályokat (class)** és **azonosítókat (id)** használunk az elemek formázására. Az osztályokat a CSS-ben ponttal (<code>.osztalynev</code>) jelöljük.</p>", 
            defaultCode: "<style>\n  .profi-kartya {\n    background: #151a22;\n    color: #45f3ff;\n    padding: 25px;\n    border-left: 5px solid #0072ff;\n  }\n</style>\n\n<div class='profi-kartya'>\n  <h3>Ez egy osztály alapú CSS formázás!</h3>\n  <p>Tiszta, modern és elkülönül a HTML-től.</p>\n</div>" 
        },
        { 
            id: 2, 
            level: "1. SZINT: PROFI FORMÁZÁS", 
            title: "2. Háttérbeállítások mesterfokon", 
            text: "<h1>Hátterek: Színátmenetek és Képek</h1><p>A modern dizájn alapja a sötét tónusú **linear-gradient** (színátmenet). Valamint a háttérképek precíz igazítása a <code>background-size: cover;</code> paranccsal, ami torzításmentesen illeszti a képeket.</p>", 
            defaultCode: "<style>\n  .premium-bg {\n    background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);\n    color: white;\n    padding: 40px;\n    border-radius: 8px;\n    text-align: center;\n  }\n</style>\n\n<div class='premium-bg'>\n  <h2>Komoly, színátmenetes háttérbeállítás</h2>\n  <p>Ez adja a prémium szoftveres érzetet.</p>\n</div>" 
        },
        { 
            id: 3, 
            level: "2. SZINT: MODERN ELRENDEZÉSEK", 
            title: "3. CSS Flexbox elrendezés", 
            text: "<h1>Flexbox elrendezés</h1><p>A <code>display: flex;</code> paranccsal másodpercek alatt létrehozhatsz tökéletesen igazított menüket vagy boxokat egymás mellé.</p>", 
            defaultCode: "<style>\n  .flex-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background: #111;\n    padding: 15px;\n  }\n  .box { background: #0072ff; padding: 10px 20px; color: white; }\n</style>\n\n<div class='flex-container'>\n  <div class='box'>Bal doboz</div>\n  <div class='box'>Középső doboz</div>\n  <div class='box'>Jobb doboz</div>\n</div>" 
        }
    ],
    js: [
        { 
            id: 1, 
            level: "1. SZINT: VALÓDI LOGIKA", 
            title: "1. Változók és Adatok", 
            text: "<h1>Adatok tárolása JavaScriptben</h1><p>A JavaScriptben értékeket tárolunk változókban (<strong>let</strong> és <strong>const</strong>). A kód képes matematikai műveletek elvégzésére és az eredmény élő kiírására.</p>", 
            defaultCode: "<h3 id='ar-kijelzo'>Számítás folyamatban...</h3>\n\n<script>\n  const termekAr = 5000;\n  const afa = 1.27;\n  let vegosszeg = termekAr * afa;\n\n  document.getElementById('ar-kijelzo').innerHTML = \n    'Bruttó fizetendő összeg: ' + Math.round(vegosszeg) + ' Ft';\n</script>" 
        },
        { 
            id: 2, 
            level: "1. SZINT: VALÓDI LOGIKA", 
            title: "2. Eseménykezelők (EventListeners)", 
            text: "<h1>addEventListener – A profi kattintáskezelés</h1><p>A modern JavaScriptben eseményfigyelőket (<strong>EventListeners</strong>) használunk. Így a HTML-be nem kell kódot írni, a script magától észleli a kattintást.</p>", 
            defaultCode: "<button id='profi-gomb' style='padding: 12px 24px; cursor:pointer;'>Kattints rám!</button>\n\n<script>\n  const gomb = document.getElementById('profi-gomb');\n  \n  gomb.addEventListener('click', function() {\n    gomb.style.backgroundColor = '#45f3ff';\n    gomb.style.color = '#000';\n    gomb.innerHTML = 'Sikeres interakció! ⚡';\n  });\n</script>" 
        }
    ]
};

let currentTab = 'html';

// NAVIGÁCIÓ KEZELÉSE
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

// MENÜ ÉS LECKÉK RENDERELESE
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

// FELUGRÓ ABLAKOK (MODALOK) FUNKCIÓI
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Kattintás ablakon kívül bezárja a modalt
window.onclick = function(event) {
    const loginModal = document.getElementById('login-modal');
    const regModal = document.getElementById('register-modal');
    if (event.target == loginModal) loginModal.style.display = 'none';
    if (event.target == regModal) regModal.style.display = 'none';
}

window.onload = () => {
    showMainPage();
};
