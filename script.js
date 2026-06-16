// 20 WEB LECKE + 5-5-5 MINECRAFT TARTALOM ADATBÁZIS
const DATA = {
    html: [
        { id: 1, level: "1. SZAKASZ: WEBFEJLESZTÉS ALAPJAI", title: "1. Mi az a HTML5?", text: "<h1>Mi az a HTML5?</h1><p>A HTML a weboldalak csontváza. Minden, amit a neten látsz, HTML tagek közé van zárva.</p>", defaultCode: "<h1>Szia! Ez az első HTML kódom!</h1>" },
        { id: 2, level: "1. SZAKASZ: WEBFEJLESZTÉS ALAPJAI", title: "2. Bekezdések és Szövegek", text: "<h1>Bekezdések kezelése</h1><p>A sima szövegeket mindig a <code>&lt;p&gt;</code> tag-ek közé írjuk.</p>", defaultCode: "<p>Ez egy sima szöveges bekezdés.</p>" },
        { id: 3, level: "1. SZAKASZ: WEBFEJLESZTÉS ALAPJAI", title: "3. Címsorok hierarchiája", text: "<h1>Címsorok (h1-h6)</h1><p>A főcím <code>&lt;h1&gt;</code>, az alcímek <code>&lt;h2&gt;</code> legyenek.</p>", defaultCode: "<h1>Főcím</h1>\n<h2>Alcím</h2>" },
        { id: 4, level: "1. SZAKASZ: WEBFEJLESZTÉS ALAPJAI", title: "4. Kattintható Linkek", text: "<h1>Hivatkozások (Links)</h1><p>A linkeket az <code>&lt;a href='URL'&gt;</code> tag segítségével hozzuk létre.</p>", defaultCode: "<a href='https://google.com' target='_blank'>Irány a Google!</a>" },
        { id: 5, level: "1. SZAKASZ: WEBFEJLESZTÉS ALAPJAI", title: "5. Képek beágyazása", text: "<h1>Képek elhelyezése</h1><p>Az <code>&lt;img&gt;</code> tagnek nincs záró párja, csak egy <code>src</code> attribútuma.</p>", defaultCode: "<img src='https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=200' alt='Kód'>" },
        { id: 6, level: "2. SZAKASZ: STRUKTURÁLÁS PROFIKÉNT", title: "6. Listák létrehozása", text: "<h1>Rendezett és rendezetlen listák</h1><p>Használj <code>&lt;ul&gt;</code>-t a pontozott, és <code>&lt;ol&gt;</code>-t a számozott listákhoz.</p>", defaultCode: "<ul>\n  <li>Első pont</li>\n  <li>Második pont</li>\n</ul>" },
        { id: 7, level: "2. SZAKASZ: STRUKTURÁLÁS PROFIKÉNT", title: "7. A DIV dobozrendszer", text: "<h1>A láthatatlan doboz (div)</h1><p>A <code>&lt;div&gt;</code> tag a weboldalak legfontosabb eleme, ezzel csoportosítjuk a tartalmat.</p>", defaultCode: "<div>\n  <h3>Dizájn csoport</h3>\n  <p>Tartalom a dobozon belül.</p>\n</div>" },
        { id: 8, level: "2. SZAKASZ: STRUKTURÁLÁS PROFIKÉNT", title: "8. HTML5 Szemantika", text: "<h1>Modern HTML5 elemek</h1><p>Használj <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code> és <code>&lt;footer&gt;</code> tageket a tiszta kódért.</p>", defaultCode: "<main>\n  <article>Cikk tartalom</article>\n</main>" },
        { id: 9, level: "2. SZAKASZ: STRUKTURÁLÁS PROFIKÉNT", title: "9. Input mezők", text: "<h1>Adatbeviteli mezők</h1><p>Az <code>&lt;input type='text'&gt;</code> segítségével szöveget kérhetsz be a látogatótól.</p>", defaultCode: "<input type='text' placeholder='Írd ide a neved...'>" },
        { id: 10, level: "2. SZAKASZ: STRUKTURÁLÁS PROFIKÉNT", title: "10. Űrlapok (Forms)", text: "<h1>Űrlapok összeállítása</h1><p>A <code>&lt;form&gt;</code> fogja össze az inputokat és a küldés gombot.</p>", defaultCode: "<form>\n  <input type='email' placeholder='Email...'>\n  <button type='submit'>Küldés</button>\n</form>" },
        { id: 11, level: "3. SZAKASZ: STÍLUS ÉS CSS RECEPT", title: "11. Mi az a CSS3?", text: "<h1>Bevezetés a CSS világába</h1><p>A CSS felelős a weboldal teljes kinézetéért. Megadhatod a színeket, méreteket.</p>", defaultCode: "<p style='color: cyan;'>Ez egy közvetlenül színezett szöveg.</p>" },
        { id: 12, level: "3. SZAKASZ: STÍLUS ÉS CSS RECEPT", title: "12. CSS Osztályok (Classes)", text: "<h1>Tiszta CSS osztályokkal</h1><p>A HTML-ben megadsz egy <code>class='nev'</code>-et, a CSS-ben pedig egy ponttal (<code>.nev</code>) hivatkozol rá.</p>", defaultCode: "<style>\n  .piros-szoveg { color: red; font-weight: bold; }\n</style>\n<p class='piros-szoveg'>Ez már osztály alapú stílus!</p>" },
        { id: 13, level: "3. SZAKASZ: STÍLUS ÉS CSS RECEPT", title: "13. Betűtípusok és Méretek", text: "<h1>Tipográfia</h1><p>A <code>font-size</code> és a <code>font-family</code> segítségével teljesen egyedi szövegképet alkothatsz.</p>", defaultCode: "<p style='font-size: 24px; font-family: monospace;'>Monospace nagy betűk.</p>" },
        { id: 14, level: "3. SZAKASZ: STÍLUS ÉS CSS RECEPT", title: "14. Szegélyek (Borders)", text: "<h1>Keretek és szegélyek</h1><p>A <code>border</code> tulajdonsággal vastagságot, stílust és színt adhatsz a dobozaid szélének.</p>", defaultCode: "<div style='border: 2px solid #45f3ff; padding: 10px;'>Keretes doboz</div>" },
        { id: 15, level: "3. SZAKASZ: STÍLUS ÉS CSS RECEPT", title: "15. Sarkok lekerekítése", text: "<h1>Lekerekített modern formák</h1><p>A modern webes dizájn alapja a <code>border-radius</code>, amivel eltüntetheted a hegyes sarkokat.</p>", defaultCode: "<button style='border-radius: 8px; padding: 10px 20px;'>Kerekített Gomb</button>" },
        { id: 16, level: "4. SZAKASZ: PRÉMIUM DIZÁJN", title: "16. Belső térköz (Padding)", text: "<h1>Padding használata</h1><p>A padding a dobozon belüli üres teret növeli meg, hogy a szöveg ne ragadjon rá a szélekre.</p>", defaultCode: "<div style='background: #222; padding: 30px;'>Kényelmes doboz.</div>" },
        { id: 17, level: "4. SZAKASZ: PRÉMIUM DIZÁJN", title: "17. Külső margó (Margin)", text: "<h1>Margin használata</h1><p>A margin a dobozon kívüli teret tolja el, ezzel tudsz két külön elemet eltávolítani egymástól.</p>", defaultCode: "<div style='margin-bottom: 50px; background: red;'>Felső</div>\n<div style='background: blue;'>Alsó</div>" },
        { id: 18, level: "4. SZAKASZ: PRÉMIUM DIZÁJN", title: "18. Színátmenetes hátterek", text: "<h1>Linear-gradient háttérbeállítás</h1><p>A profi sötét oldalak alapja a CSS <code>linear-gradient</code>, amivel gyönyörű színátmeneteket készíthetsz.</p>", defaultCode: "<div style='background: linear-gradient(135deg, #111, #0072ff); padding: 50px; color: white;'>Átmenetes háttér</div>" },
        { id: 19, level: "4. SZAKASZ: PRÉMIUM DIZÁJN", title: "19. CSS Flexbox alapok", text: "<h1>display: flex;</h1><p>A flexbox segítségével az elemeket azonnal egymás mellé tudod rendezni szoftveres szinten.</p>", defaultCode: "<div style='display: flex; gap: 20px;'>\n  <div style='background:gray; padding:10px;'>1</div>\n  <div style='background:gray; padding:10px;'>2</div>\n</div>" },
        { id: 20, level: "4. SZAKASZ: PRÉMIUM DIZÁJN", title: "20. Teljes reszponzív kártya", text: "<h1>A 20. Vizsgafeladat</h1><p>Gratulálunk! Elérted az utolsó leckét. Itt egy komplett, modern és profi termékkártyát láthatsz.</p>", defaultCode: "<div style='background: #151a22; border: 1px solid #45f3ff; padding: 25px; border-radius: 12px; width: 250px; text-align: center; color: white;'><h3>WebTeach Pro</h3><button style='background: #45f3ff; border: none; padding: 10px 20px; font-weight: bold; border-radius: 6px; cursor: pointer;'>Tanúsítvány</button></div>" }
    ],
    plugins: [
        // 5 DB PLUGIN LEÍRÁS
        { id: 1, level: "⚙️ SZERVER PLUGINOK", title: "1. PLUGIN: Első Plugin", text: "<h1>Ide írd az 1. Plugin Nevét</h1><p>Ide jön az első pluginod kőkemény és részletes bemutató leírása, amit te fogsz majd kitölteni a fájlban.</p><br><a href='IDE_A_LINKET' target='_blank' class='mc-download-btn' style='background: #ff9900; color: black; padding: 12px 25px; text-decoration: none; font-weight: bold; border-radius: 5px; display: inline-block;'>Plugin Letöltése / Megtekintése 🚀</a>" },
        { id: 2, level: "⚙️ SZERVER PLUGINOK", title: "2. PLUGIN: Második Plugin", text: "<h1>Ide írd a 2. Plugin Nevét</h1><p>Ide jön a második pluginod részletes leírása.</p><br><a href='IDE_A_LINKET' target='_blank' style='background: #ff9900; color: black; padding: 12px 25px; text-decoration: none; font-weight: bold; border-radius: 5px; display: inline-block;'>Plugin Letöltése 🚀</a>" },
        { id: 3, level: "⚙️ SZERVER PLUGINOK", title: "3. PLUGIN: Harmadik Plugin", text: "<h1>Ide írd a 3. Plugin Nevét</h1><p>Ide jön a harmadik pluginod részletes leírása.</p><br><a href='IDE_A_LINKET' target='_blank' style='background: #ff9900; color: black; padding: 12px 25px; text-decoration: none; font-weight: bold; border-radius: 5px; display: inline-block;'>Plugin Letöltése 🚀</a>" },
        { id: 4, level: "⚙️ SZERVER PLUGINOK", title: "4. PLUGIN: Negyedik Plugin", text: "<h1>Ide írd a 4. Plugin Nevét</h1><p>Ide jön a negyedik pluginod részletes leírása.</p><br><a href='IDE_A_LINKET' target='_blank' style='background: #ff9900; color: black; padding: 12px 25px; text-decoration: none; font-weight: bold; border-radius: 5px; display: inline-block;'>Plugin Letöltése 🚀</a>" },
        { id: 5, level: "⚙️ SZERVER PLUGINOK", title: "5. PLUGIN: Ötödik Plugin", text: "<h1>Ide írd az 5. Plugin Nevét</h1><p>Ide jön az ötödik pluginod részletes leírása.</p><br><a href='IDE_A_LINKET' target='_blank' style='background: #ff9900; color: black; padding: 12px 25px; text-decoration: none; font-weight: bold; border-radius: 5px; display: inline-block;'>Plugin Letöltése 🚀</a>" }
    ],
    mods: [
        // 5 DB MOD LEÍRÁS
        { id: 1, level: "🛠️ KLIENS & SZERVER MODOK", title: "1. MOD: Első Modifikáció", text: "<h1>Ide írd az 1. Mod Nevét</h1><p>Ide írhatod be a mod leírását, a hozzá tartozó verziókat (Forge/Fabric) és a legfontosabb infókat.</p><br><a href='IDE_A_LINKET' target='_blank' style='background: #00aa00; color: white; padding: 12px 25px; text-decoration: none; font-weight: bold; border-radius: 5px; display: inline-block;'>Mod Letöltése 🛠️</a>" },
        { id: 2, level: "🛠️ KLIENS & SZERVER MODOK", title: "2. MOD: Második Modifikáció", text: "<h1>Ide írd a 2. Mod Nevét</h1><p>Ide jön a második mod leírása.</p><br><a href='IDE_A_LINKET' target='_blank' style='background: #00aa00; color: white; padding: 12px 25px; text-decoration: none; font-weight: bold; border-radius: 5px; display: inline-block;'>Mod Letöltése 🛠️</a>" },
        { id: 3, level: "🛠️ KLIENS & SZERVER MODOK", title: "3. MOD: Harmadik Modifikáció", text: "<h1>Ide írd a 3. Mod Nevét</h1><p>Ide jön a harmadik mod leírása.</p><br><a href='IDE_A_LINKET' target='_blank' style='background: #00aa00; color: white; padding: 12px 25px; text-decoration: none; font-weight: bold; border-radius: 5px; display: inline-block;'>Mod Letöltése 🛠️</a>" },
        { id: 4, level: "🛠️ KLIENS & SZERVER MODOK", title: "4. MOD: Negyedik Modifikáció", text: "<h1>Ide írd a 4. Mod Nevét</h1><p>Ide jön a negyedik mod leírása.</p><br><a href='IDE_A_LINKET' target='_blank' style='background: #00aa00; color: white; padding: 12px 25px; text-decoration: none; font-weight: bold; border-radius: 5px; display: inline-block;'>Mod Letöltése 🛠️</a>" },
        { id: 5, level: "🛠️ KLIENS & SZERVER MODOK", title: "5. MOD: Ötödik Modifikáció", text: "<h1>Ide írd az 5. Mod Nevét</h1><p>Ide jön az ötödik mod leírása.</p><br><a href='IDE_A_LINKET' target='_blank' style='background: #00aa00; color: white; padding: 12px 25px; text-decoration: none; font-weight: bold; border-radius: 5px; display: inline-block;'>Mod Letöltése 🛠️</a>" }
    ],
    textures: [
        // 5 DB TEXTURE PACK LEÍRÁS
        { id: 1, level: "🎨 TEXTÚRAPAKKOK (RESOURCE PACKS)", title: "1. PACK: Első Textúra", text: "<h1>Ide írd az 1. Textúrapakk Nevét</h1><p>Mutasd be ezt a grafikai csomagot! Írd le, hogy PvP pakk, realisztikus x64-es, vagy letisztult hűséges stílusú-e, és hogy kell-e hozzá OptiFine.</p><br><a href='IDE_A_LINKET' target='_blank' style='background: #45f3ff; color: black; padding: 12px 25px; text-decoration: none; font-weight: bold; border-radius: 5px; display: inline-block;'>Textúra Letöltése 🎨</a>" },
        { id: 2, level: "🎨 TEXTÚRAPAKKOK (RESOURCE PACKS)", title: "2. PACK: Második Textúra", text: "<h1>Ide írd a 2. Textúrapakk Nevét</h1><p>Ide jön a második textúrapakk leírása.</p><br><a href='IDE_A_LINKET' target='_blank' style='background: #45f3ff; color: black; padding: 12px 25px; text-decoration: none; font-weight: bold; border-radius: 5px; display: inline-block;'>Textúra Letöltése 🎨</a>" },
        { id: 3, level: "🎨 TEXTÚRAPAKKOK (RESOURCE PACKS)", title: "3. PACK: Harmadik Textúra", text: "<h1>Ide írd a 3. Textúrapakk Nevét</h1><p>Ide jön a harmadik textúrapakk leírása.</p><br><a href='IDE_A_LINKET' target='_blank' style='background: #45f3ff; color: black; padding: 12px 25px; text-decoration: none; font-weight: bold; border-radius: 5px; display: inline-block;'>Textúra Letöltése 🎨</a>" },
        { id: 4, level: "🎨 TEXTÚRAPAKKOK (RESOURCE PACKS)", title: "4. PACK: Negyedik Textúra", text: "<h1>Ide írd a 4. Textúrapakk Nevét</h1><p>Ide jön a negyedik textúrapakk leírása.</p><br><a href='IDE_A_LINKET' target='_blank' style='background: #45f3ff; color: black; padding: 12px 25px; text-decoration: none; font-weight: bold; border-radius: 5px; display: inline-block;'>Textúra Letöltése 🎨</a>" },
        { id: 5, level: "🎨 TEXTÚRAPAKKOK (RESOURCE PACKS)", title: "5. PACK: Ötödik Textúra", text: "<h1>Ide írd az 5. Textúrapakk Nevét</h1><p>Ide jön az ötödik textúrapakk leírása.</p><br><a href='IDE_A_LINKET' target='_blank' style='background: #45f3ff; color: black; padding: 12px 25px; text-decoration: none; font-weight: bold; border-radius: 5px; display: inline-block;'>Textúra Letöltése 🎨</a>" }
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
    
    // DINAMIKUS ELREJTÉS ÉS MEGJELENÍTÉS
    const workspace = document.getElementById('web-workspace');
    if (tabName === 'html') {
        workspace.style.display = 'flex'; // HTML-nél kell a kódszerkesztő
    } else {
        workspace.style.display = 'none'; // Minecraft kategóriáknál eltűnik!
    }
    
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
    
    // Csak akkor frissítjük a szerkesztőt, ha az aktív fül a HTML
    if (currentTab === 'html') {
        document.getElementById('code-input').value = lecture.defaultCode;
        runCode();
    }
}

function runCode() {
    const code = document.getElementById('code-input').value;
    const output = document.getElementById('code-output').contentWindow.document;
    output.open();
    output.write(code);
    output.close();
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

window.onclick = function(event) {
    const loginModal = document.getElementById('login-modal');
    const regModal = document.getElementById('register-modal');
    if (event.target == loginModal) loginModal.style.display = 'none';
    if (event.target == regModal) regModal.style.display = 'none';
}

window.onload = () => {
    showMainPage();
};
