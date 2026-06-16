// A BŐVÍTETT, LAZA HANGVÉTELŰ TANANYAG ADATBÁZIS
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
            text: "<h1>Hogyan küldjük át az olvasót egy másik oldalra?</h1><p>A linkek (hivatkozások) tartják össze az internetet. HTML-ben ezt az <strong>&lt;a&gt; tag-gel</strong> csináljuk, de kell neki egy attribútum is (egy extra tulajdonság), ami megmondja, hova mutasson. Ez a <strong>href</strong>.</p><div class='highlight-box'>&lt;a href='https://google.com'&gt;Irány a Google!&lt;/a&gt;</div><p>Teszteld le lent! Ha rákattintasz a gomb után megjelenő linkre, az átvisz a megadott oldalra.</p>", 
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
        { id: 1, level: "Alapok", title: "1. Mi az a CSS?", text: "<h1>A CSS világa</h1><p>A CSS a dizájn. Ezzel mondjuk meg, hogy a HTML elemek hogyan nézzenek ki.</p>", defaultCode: "<h1 style='color: #00f0ff;'>Neon kék cím</h1>" }
    ],
    js: [
        { id: 1, level: "Alapok", title: "1. JavaScript bevezetés", text: "<h1>JavaScript alapok</h1><p>A JavaScript hozza működésbe a gombokat.</p>", defaultCode: "<button onclick='alert(\"Működik az agy!\")'>Nyomd meg!</button>" }
    ]
};

let currentTab = 'html';

// FŐOLDAL MEGJELENÍTÉSE
function showMainPage() {
    document.getElementById('main-page').style.display = 'block';
    document.getElementById('learning-page').style.display = 'none';
    
    // Aktív menü gombok visszaállítása
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
