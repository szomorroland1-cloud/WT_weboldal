const DATA = {
    html: [
        { id: 1, level: "1. SZAKASZ: WEBFEJLESZTÉS ALAPJAI", title: "1. Mi az a HTML5?", text: "<h1>Mi az a HTML5?</h1><p>A HTML a weboldalak csontváza. Minden, amit a neten látsz, HTML tagek közé van zárva.</p>", defaultCode: "<h1>Szia! Ez az első HTML kódom!</h1>" },
        { id: 2, level: "1. SZAKASZ: WEBFEJLESZTÉS ALAPJAI", title: "2. Bekezdések és Szövegek", text: "<h1>Bekezdések kezelése</h1><p>A sima szövegeket mindig a <code>&lt;p&gt;</code> tag-ek közé írjuk.</p>", defaultCode: "<p>Ez egy sima szöveges bekezdés.</p>" },
        { id: 3, level: "1. SZAKASZ: WEBFEJLESZTÉS ALAPJAI", title: "3. Címsorok hierarchiája", text: "<h1>Címsorok (h1-h6)</h1><p>A főcím <code>&lt;h1&gt;</code>, az alcímek <code>&lt;h2&gt;</code> legyenek.</p>", defaultCode: "<h1>Főcím</h1>\n<h2>Alcím</h2>" },
        { id: 4, level: "1. SZAKASZ: WEBFEJLESZTÉS ALAPJAI", title: "4. Kattintható Linkek", text: "<h1>Hivatkozások (Links)</h1><p>A linkeket az <code>&lt;a href='URL'&gt;</code> tag segítségével hozzuk létre.</p>", defaultCode: "<a href='https://google.com' target='_blank'>Irány a Google!</a>" },
        { id: 5, level: "1. SZAKASZ: WEBFEJLESZTÉS ALAPJAI", title: "5. Képek beágyazása", text: "<h1>Képek elhelyezése</h1><p>Az <code>&lt;img&gt;</code> tagnek nincs záró párja, csak egy <code>src</code> attribútuma.</p>", defaultCode: "<img src='https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=200' alt='Kód'>" },
        { id: 6, level: "2. SZAKASZ: STRUKTURÁLÁS PROFIKÉNT", title: "6. Listák létrehozása", text: "<h1>Rendezett és rendezetlen listák</h1><p>Használj <code>&lt;ul&gt;</code>-t a pontozott, és <code>&lt;ol&gt;</code>-t a számozott listákhoz.</p>", defaultCode: "<ul>\n  <li>Első pont</li>\n  <li>Második pont</li>\n</ul>" },
        { id: 7, level: "2. SZAKASZ: STRUKTURÁLÁS PROFIKÉNT", title: "7. A DIV dobozrendszer", text: "<h1>A láthatatlan doboz (div)</h1><p>A <code>&lt;div&gt;</code> tag a weboldalak legfontosabb eleme, ezzel csoportosítjuk a tartalmat.</p>", defaultCode: "<div>\n  <h3>Dizájn csoport</h3>\n  <p>Tartalom a dobozon binnen.</p>\n</div>" },
        { id: 8, level: "2. SZAKASZ: STRUKTURÁLÁS PROFIKÉNT", title: "8. HTML5 Szemantika", text: "<h1>Modern HTML5 elemek</h1><p>Használj <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code> és <code>&lt;footer&gt;</code> tageket a tiszta kódért.</p>", defaultCode: "<main>\n  <article>Cikk tartalom</article>\n</main>" },
        { id: 9, level: "2. SZAKASZ: STRUKTURÁLÁS PROFIKÉNT", title: "9. Input mezők", text: "<h1>Adatbeviteli mezők</h1><p>Az <code>&lt;input type='text'&gt;</code> segítségével szöveget kérhetsz be a látogatótól.</p>", defaultCode: "<input type='text' placeholder='Írd ide a neved...'>" },
        { id: 10, level: "2. SZAKASZ: STRUKTURÁLÁS PROFIKÉNT", title: "10. Űrlapok (Forms)", text: "<h1>Űrlapok összeállítása</h1><p>A <code>&lt;form&gt;</code> fogja össze az inputokat és a küldés gombot.</p>", defaultCode: "<form>\n  <input type='email' placeholder='Email...'>\n  <button type='submit'>Küldés</button>\n</form>" },
        { id: 11, level: "3. SZAKASZ: STÍLUS ÉS CSS RECEPT", title: "11. Mi az a CSS3?", text: "<h1>Bevezetés a CSS világába</h1><p>A CSS felelős a weboldal teljes kinézetéért. Megadhatod a színét, elrendezését.</p>", defaultCode: "<p style='color: cyan;'>Ez egy közvetlenül színezett szöveg.</p>" },
        { id: 12, level: "3. SZAKASZ: STÍLUS ÉS CSS RECEPT", title: "12. CSS Osztályok (Classes)", text: "<h1>Tiszta CSS osztályokkal</h1><p>A HTML-ben megadsz egy <code>class='nev'</code>-et, a CSS-ben pedig egy ponttal hivatkozol rá.</p>", defaultCode: "<style>\n  .piros-szoveg { color: red; font-weight: bold; }\n</style>\n<p class='piros-szoveg'>Ez már osztály alapú stílus!</p>" },
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
        { 
            id: 1, 
            level: "⚙️ TOP SZERVER PLUGINOK", 
            title: "1. Simple Voice Chat", 
            text: "<h1>Simple Voice Chat</h1><p>Ez a plugin egy teljesen működő közelségi hangcsevegést (Proximity Voice Chat) hoz létre a Minecraft szervereden.</p><p>A játékosok hallják egymást, ha közelebb lépnek a másikhoz. Tartalmaz 3D-s térhangzást, suttogást, és saját csoportos csatornákat is.</p><br><a href='https://modrinth.com/plugin/simple-voice-chat' target='_blank' style='background: #ff9900; color: black; padding: 12px 25px; text-decoration: none; font-weight: bold; border-radius: 5px; display: inline-block;'>Letöltés Modrinth-ről 🚀</a>" 
        },
        { 
            id: 2, 
            level: "⚙️ TOP SZERVER PLUGINOK", 
            title: "2. LuckPerms", 
            text: "<h1>LuckPerms rangkezelő</h1><p>A létező legprofibb, legfejlettebb jog- és rangkezelő plugin Minecraft szerverekhez.</p><p>Segítségével létrehozhatsz tulajdonos, admin, moderátor vagy tag rangokat, és beállíthatod, ki milyen parancsokat használhat. Tartozik hozzá egy webes szerkesztő felület is!</p><br><a href='https://modrinth.com/plugin/luckperms' target='_blank' style='background: #ff9900; color: black; padding: 12px 25px; text-decoration: none; font-weight: bold; border-radius: 5px; display: inline-block;'>Letöltés Modrinth-ről 🚀</a>" 
        },
        { 
            id: 3, 
            level: "⚙️ TOP SZERVER PLUGINOK", 
            title: "3. SkinsRestorer", 
            text: "<h1>SkinsRestorer</h1><p>Elengedhetetlen plugin tört (offline-mode) és eredeti szerverekhez egyaránt.</p><p>Biztosítja, hogy a játékosok skineket tudjanak maguknak beállítani és hordani a szerveren a <code>/skin név</code> paranccsal, így nem mindenki alap Steve vagy Alex lesz.</p><br><a href='https://modrinth.com/plugin/skinsrestorer' target='_blank' style='background: #ff9900; color: black; padding: 12px 25px; text-decoration: none; font-weight: bold; border-radius: 5px; display: inline-block;'>Letöltés Modrinth-ről 🚀</a>" 
        },
        { 
            id: 4, 
            level: "⚙️ TOP SZERVER PLUGINOK", 
            title: "4. EssentialsX", 
            text: "<h1>EssentialsX alaprendszer</h1><p>Ez a szerverek gerince. Több mint 100 alapvető parancsot ad hozzá a játékhoz.</p><p>Ezzel oldható meg a teleportálás (<code>/tpa</code>), az otthonok lementése (<code>/sethome</code>, <code>/home</code>), a kezdőpont (<code>/spawn</code>), valamint a gazdasági rendszer és a pénztárcák kezelése.</p><br><a href='https://modrinth.com/plugin/essentialsx' target='_blank' style='background: #ff9900; color: black; padding: 12px 25px; text-decoration: none; font-weight: bold; border-radius: 5px; display: inline-block;'>Letöltés Modrinth-ről 🚀</a>" 
        },
        { 
            id: 5, 
            level: "⚙️ TOP SZERVER PLUGINOK", 
            title: "5. TAB", 
            text: "<h1>TAB (was taken)</h1><p>Egy lenyűgöző plugin a Tab-lista és a játékosok feje feletti nevek teljes testreszabásához.</p><p>Képes animált fejlécet és láblécet tenni a listába, mutatja a rangokat, a pinget, és kompatibilis a LuckPerms-szel a színes nevek megjelenítéséhez.</p><br><a href='https://modrinth.com/plugin/tab-was-taken' target='_blank' style='background: #ff9900; color: black; padding: 12px 25px; text-decoration: none; font-weight: bold; border-radius: 5px; display: inline-block;'>Letöltés Modrinth-ről 🚀</a>" 
        }
    ],
    mods: [
        { 
            id: 1, 
            level: "🛠️ KELENDŐ MODOK ÉS CSOMAGOK", 
            title: "1. Simply Optimized (FPS Pack)", 
            text: "<h1>Simply Optimized Modpack</h1><p>A létező egyik leggyorsabb és legjobb teljesítmény-optimalizáló modcsomag modern Minecraft verziókhoz.</p><p>Rengeteg optimalizációs modot (Sodium, Lithium, FerriteCore) egyesít, amivel drasztikusan megemeli az FPS-edet, csökkenti a laggolást és betonbiztossá teszi a játék futását.</p><br><a href='https://modrinth.com/modpack/fps' target='_blank' style='background: #00aa00; color: white; padding: 12px 25px; text-decoration: none; font-weight: bold; border-radius: 5px; display: inline-block;'>Modpack Megtekintése 🛠️</a>" 
        },
        { 
            id: 2, 
            level: "🛠️ KELENDŐ MODOK ÉS CSOMAGOK", 
            title: "2. RealisticCraft", 
            text: "<h1>RealisticCraft Modpack</h1><p>Egy professzionális összeállítás, amely teljesen megváltoztatja a Minecraft hangulatát és grafikáját.</p><p>Realisztikus fizika, lenyűgöző fények, természetes hanghatások és generálások teszik a túlélést sokkal mélyebbé és látványosabbá.</p><br><a href='https://modrinth.com/modpack/realisticcraft' target='_blank' style='background: #00aa00; color: white; padding: 12px 25px; text-decoration: none; font-weight: bold; border-radius: 5px; display: inline-block;'>Modpack Megtekintése 🛠️</a>" 
        },
        { 
            id: 3, 
            level: "🛠️ KELENDŐ MODOK ÉS CSOMAGOK", 
            title: "3. Xaero's Minimap", 
            text: "<h1>Xaero's Minimap</h1><p>A legtisztább és legtestreszabhatóbb minimap (kistérkép) mod a játékhoz.</p><p>Mutatja a környező terepet, a barlangokat, jelzi a közeli entitásokat (szörnyeket, játékosokat), és lementhetsz vele egyedi koordináta pontokat (waypointokat), hogy sose tévedj el.</p><br><a href='https://modrinth.com/mod/xaeros-minimap' target='_blank' style='background: #00aa00; color: white; padding: 12px 25px; text-decoration: none; font-weight: bold; border-radius: 5px; display: inline-block;'>Mod Letöltése 🛠️</a>" 
        },
        { 
            id: 4, 
            level: "🛠️ KELENDŐ MODOK ÉS CSOMAGOK", 
            title: "4. Chat Heads", 
            text: "<h1>Chat Heads</h1><p>Egy zseniális és látványos kis mod, ami sokat dob a csevegő élményén.</p><p>Minden egyes chat üzenet mellé odarakja a küldő játékos skinjének a fejét kicsiben, így sokkal könnyebben látható, hogy éppen ki beszél.</p><br><a href='https://modrinth.com/mod/chat-heads' target='_blank' style='background: #00aa00; color: white; padding: 12px 25px; text-decoration: none; font-weight: bold; border-radius: 5px; display: inline-block;'>Mod Letöltése 🛠️</a>" 
        },
        { 
            id: 5, 
            level: "🛠️ KELENDŐ MODOK ÉS CSOMAGOK", 
            title: "5. Shulker Box Tooltip", 
            text: "<h1>Shulker Box Tooltip</h1><p>Egy elképesztően hasznos kényelmi mod, amivel rengeteg időt spórolhatsz meg.</p><p>Ha ráviszed az egeret egy Shulker dobozra az eszköztáradban, felugrik egy kis ablak, ami azonnal megmutatja a doboz teljes belső tartalmát anélkül, hogy le kellene helyezned.</p><br><a href='https://www.curseforge.com/minecraft/mc-mods/shulkerboxtooltip/files/all' target='_blank' style='background: #00aa00; color: white; padding: 12px 25px; text-decoration: none; font-weight: bold; border-radius: 5px; display: inline-block;'>Letöltés CurseForge-ról 🛠️</a>" 
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
    
    const workspace = document.getElementById('web-workspace');
    if (tabName === 'html') {
        workspace.style.display = 'flex';
    } else {
        workspace.style.display = 'none';
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
