// MINECRAFT SZERVER KÉSZÍTÉS LECKÉK ÉS MÁSOLHATÓ KÓDOK
const TUTORIAL_DATA = [
    {
        id: 1,
        title: "1. Bevezetés: A megfelelő motor kiválasztása",
        content: `
            <h1>1. Lépés: Milyen Minecraft szervert indítsunk?</h1>
            <p>Sokan még mindig a régi, elavult <i>Bukkit</i> vagy <i>Spigot</i> szervermotorokat használják, ami óriási hiba, mert ezek laggolnak. Ha modern, gyors és jól optimalizált szervert akarsz, a következőket válaszd:</p>
            
            <ul>
                <li><b>PaperMC:</b> A legstabilabb, legnépszerűbb motor. Kiválóan optimalizált és minden Spigot/Bukkit plugint támogat.</li>
                <li><b>Purpur:</b> A Paper továbbfejlesztett változata, rengeteg extra beállítási lehetőséggel (pl. meglovagolható élőlények, egyedi játékszabályok).</li>
            </ul>

            <div style="background: #1c2330; padding: 15px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #45f3ff;">
                <h3>💡 Tipp a kezdéshez:</h3>
                <p style="margin: 0;">Töltsd le a legfrissebb <b>Paper.jar</b> fájlt a hivatalos oldalról, hozz létre egy üres mappát a gépeden, és nevezd át a letöltött fájlt <code>server.jar</code>-ra.</p>
            </div>
        `
    },
    {
        id: 2,
        title: "2. Az indítófájl (.bat) elkészítése és az EULA",
        content: `
            <h1>2. Lépés: A szerver elindítása</h1>
            <p>Ahhoz, hogy a szerver elinduljon és ki tudja használni a számítógéped (vagy a host) memóriáját, létre kell hoznunk egy indítófájlt.</p>
            
            <h3>Másold ki ezt a kódot egy új <code>start.bat</code> nevű fájlba:</h3>
            <pre style="background: #0f141c; padding: 15px; border-radius: 6px; border: 1px solid #333; color: #55ff55; overflow-x: auto;">
java -Xmx4G -Xms4G -jar server.jar nogui
pause</pre>
            <p><i>Megjegyzés: A <code>-Xmx4G</code> azt jelenti, hogy a szerver maximum 4 Gigabájt RAM-ot használhat. Ezt módosíthatod a géped kapacitásához mérten (pl. 2G, 6G, 8G).</i></p>

            <h3>Az EULA elfogadása:</h3>
            <p>Az első indítás után a szerver leáll, és generál egy <code>eula.txt</code> fájlt. Nyisd meg, és a <code>eula=false</code> sort írd át erre:</p>
            <pre style="background: #0f141c; padding: 10px; border-radius: 4px; color: #ff9900;">eula=true</pre>
            <p>Ezután indítsd el újra a <code>start.bat</code>-ot, és a szervered máris működik!</p>
        `
    },
    {
        id: 3,
        title: "3. LuckPerms Beállítás (Rangok és Jogok)",
        content: `
            <h1>3. Lépés: Rangok kezelése a LuckPerms-szel</h1>
            <p>A <b>LuckPerms</b> a világ legjobb és legbiztonságosabb rangkezelő pluginja. Ezzel adhatsz a játékosoknak Tulajdonos, Admin, Moderátor vagy Tag rangot.</p>
            
            <h3>Hogyan állítsd be?</h3>
            <ol>
                <li>Töltsd le a LuckPerms plugint és rakd a szervered <code>plugins</code> mappájába.</li>
                <li>Indítsd újra a szervert.</li>
                <li>Írd be a szerverkonzolba (vagy a játékban op-sként): <code>/lp editor</code></li>
            </ol>

            <p>A parancs generál egy linket. Kattints rá, és egy gyönyörű webes felületen, kattintgatással hozhatod létre a rangokat és adhatsz nekik jogokat (pl. <code>essentials.fly</code> a repüléshez). Ha kész vagy, csak nyomj a "Save" gombra és másold be a kapott parancsot a konzolba!</p>
        `
    },
    {
        id: 4,
        title: "4. EssentialsX és a Gazdaság alapjai",
        content: `
            <h1>4. Lépés: Alapparancsok és Pénzrendszer</h1>
            <p>Az <b>EssentialsX</b> plugin adja a szerver magját. Ez tartalmazza az olyan alapvető parancsokat, mint a <code>/spawn</code>, <code>/home</code>, <code>/warp</code>, <code>/tp</code>, valamint a beépített pénzrendszert.</p>
            
            <h3>Hasznos admin parancsok, amiket ismerned kell:</h3>
            <ul>
                <li><code>/gamemode creative [név]</code> - Kreatív módba rakja a játékost.</li>
                <li><code>/eco give [név] [összeg]</code> - Pénzt ad egy játékosnak a szerveren.</li>
                <li><code>/setspawn</code> - Beállítja a szerver kezdőpontját arra a helyre, ahol éppen állsz.</li>
            </ul>
            <p>A plugin <code>config.yml</code> fájljában teljesen magyarosíthatod a belépő és kilépő üzeneteket, és beállíthatod, mennyi kezdőtőkét kapjanak a játékosok!</p>
        `
    },
    {
        id: 5,
        title: "5. Optimalizálás a lag ellen (FPS tuning)",
        content: `
            <h1>5. Lépés: A lagmentes szerver titka</h1>
            <p>Ha azt akarod, hogy sok játékos mellett se akadjon a szerver, nyisd meg a szerver főmappájában található <code>server.properties</code> fájlt, és módosítsd az alábbi értékeket:</p>
            
            <pre style="background: #0f141c; padding: 15px; border-radius: 6px; border: 1px solid #333; color: #ff5555;">
view-distance=6
simulation-distance=4
network-compression-threshold=256</pre>
            
            <p>A <b>view-distance 6-ra</b> csökkentésével a szerver kevesebb chunkot tölt be egyszerre a játékosok körül, ami drasztikusan tehermentesíti a processzort és a memóriát, így megszűnik a szerveroldali laggolás!</p>
        `
    }
];

// NAVIGÁCIÓ KEZELÉSE
function showMainPage() {
    document.getElementById('main-page').style.display = 'block';
    document.getElementById('learning-page').style.display = 'none';
    document.getElementById('nav-main').classList.add('active');
    document.getElementById('nav-tutorials').classList.remove('active');
}

function openTutorials() {
    document.getElementById('main-page').style.display = 'none';
    document.getElementById('learning-page').style.display = 'flex';
    document.getElementById('nav-main').classList.remove('active');
    document.getElementById('nav-tutorials').classList.add('active');
    renderMenu();
    loadTutorial(1); // Alapból az első leckét tölti be
}

// BAL OLDALI TANANYAG MENÜ GENERÁLÁSA
function renderMenu() {
    const menuContainer = document.getElementById('lecture-menu');
    menuContainer.innerHTML = '<div class="level-title">📖 TANANYAGOK</div>';
    
    TUTORIAL_DATA.forEach(tut => {
        const link = document.createElement('a');
        link.className = 'lecture-link';
        link.innerText = tut.title;
        link.onclick = () => loadTutorial(tut.id);
        link.setAttribute('data-id', tut.id);
        menuContainer.appendChild(link);
    });
}

// EGY ADOTT ÚTMUTATÓ BETÖLTÉSE
function loadTutorial(id) {
    const tutorial = TUTORIAL_DATA.find(t => t.id === id);
    if (!tutorial) return;

    // Aktív fül kezelése a menüben
    document.querySelectorAll('.lecture-link').forEach(link => {
        link.classList.remove('active');
        if(parseInt(link.getAttribute('data-id')) === id) {
            link.classList.add('active');
        }
    });

    // Tartalom kiírása
    document.getElementById('lecture-text').innerHTML = tutorial.content;
}

// INDÍTÁS
window.onload = () => {
    showMainPage();
};
