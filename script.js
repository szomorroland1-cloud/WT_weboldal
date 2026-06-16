// AZ OKTATÓANYAGOK ADATBÁZISA (Kezdő, Közép, Haladó)
const DATA = {
    html: [
        { id: 1, level: "Kezdő szint", title: "1. Mi az a HTML?", text: "<h1>Mi az a HTML?</h1><p>A HTML a weboldalak csontváza. Segítségével szövegeket, képeket és linkeket helyezhetsz el a kijelzőn. Próbáld ki lent: írd be, hogy &lt;h1&gt;Szia Világ!&lt;/h1&gt; és futtasd le!</p>", defaultCode: "<h1>Szia Világ!</h1>" },
        { id: 2, level: "Kezdő szint", title: "2. Bekezdések és Szövegek", text: "<h1>Bekezdések</h1><p>A sima szövegeket a &lt;p&gt; (paragraph) tagek közé rakjuk.</p>", defaultCode: "<p>Ez egy sima szöveges bekezdés.</p>" },
        { id: 3, level: "Közép szint", title: "3. Linkek és Képek", text: "<h1>Linkek elhelyezése</h1><p>Az &lt;a href='url'&gt; kóddal tudsz átirányítani más oldalra.</p>", defaultCode: "<a href='https://google.com' target='_blank'>Kattints ide a Google-höz!</a>" },
        { id: 4, level: "Haladó szint", title: "4. HTML Űrlapok", text: "<h1>Űrlapok</h1><p>Az input mezőkkel kérhetsz be adatokat.</p>", defaultCode: "<input type='text' placeholder='Írd ide a neved'><button>Küldés</button>" }
    ],
    css: [
        { id: 1, level: "Kezdő szint", title: "1. Mi az a CSS?", text: "<h1>Mi az a CSS?</h1><p>A CSS-sel színezzük és formázzuk a HTML elemeket (ez a weboldal ruhája).</p>", defaultCode: "<h1 style='color: red;'>Ez a cím piros lett!</h1>" },
        { id: 2, level: "Közép szint", title: "2. Háttérszínek", text: "<h1>Hátterek formázása</h1><p>Bárminek megváltoztathatod a háttérszínét.</p>", defaultCode: "<div style='background-color: yellow; padding: 20px; color: black;'>Sárga háttér</div>" }
    ],
    js: [
        { id: 1, level: "Kezdő szint", title: "1. Mi a JavaScript?", text: "<h1>Mi a JavaScript?</h1><p>A JS a weboldal agya. Ezzel tudsz reakciókat, gombnyomásokat kezelni.</p>", defaultCode: "<button onclick='alert(\"Sikerült!\")'>Kattints rám!</button>" }
    ]
};

let currentTab = 'html';

// FÜL VÁLTÁS (HTML / CSS / JS között)
function changeTab(tabName) {
    currentTab = tabName;
    
    // Gombok stílusának frissítése
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    renderMenu();
    loadLecture(1); // Mindig az 1. leckét töltse be fülváltáskor
}

// BAL MENÜ GENERÁLÁSA
function renderMenu() {
    const menuContainer = document.getElementById('lecture-menu');
    menuContainer.innerHTML = '';
    
    let currentLevel = '';
    
    DATA[currentTab].forEach(lecture => {
        // Ha új szintre érünk (pl. Közép szint), rakjunk ki egy alcímet
        if (lecture.level !== currentLevel) {
            currentLevel = lecture.level;
            const levelDiv = document.createElement('div');
            levelDiv.className = 'level-title';
            levelDiv.innerText = currentLevel;
            menuContainer.appendChild(levelDiv);
        }

        // Lecke gomb létrehozása
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

    // Aktív jelölés a menüben
    document.querySelectorAll('.lecture-link').forEach(link => {
        link.classList.remove('active');
        if(parseInt(link.getAttribute('data-id')) === id) {
            link.classList.add('active');
        }
    });

    // Tartalom cseréje
    document.getElementById('lecture-text').innerHTML = lecture.text;
    document.getElementById('code-input').value = lecture.defaultCode;
    runCode(); // Azonnali előnézet futtatás
}

// ÉLŐ KÓD FUTTATÁSA AZ IFRAME-BEN
function runCode() {
    const code = document.getElementById('code-input').value;
    const output = document.getElementById('code-output').contentWindow.document;
    
    output.open();
    output.write(code);
    output.close();
}

// OLDAL INDÍTÁSA
window.onload = () => {
    renderMenu();
    loadLecture(1);
};
