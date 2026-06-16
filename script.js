// NAPI 5 ISMÉTLŐDŐ HÍR A FŐOLDALON
const DAILY_NEWS = [
    { title: "Rendkívüli parlamenti ülést hívtak össze", desc: "A képviselők a legújabb gazdasági intézkedésekről és az adótörvények módosításáról vitáznak a mai napon.", date: "Frissítve: Ma, 08:30" },
    { title: "Friss közvélemény-kutatás látott napvilágot", desc: "Fej-fej mellett haladnak a vezető politikai erők a legújabb független intézet által mért adatok szerint.", date: "Frissítve: Ma, 10:15" },
    { title: "Új törvényjavaslat a digitális oktatásról", desc: "A kormány benyújtotta a tervezetet, amely teljesen átalakítaná a középiskolák informatikai képzését.", date: "Frissítve: Ma, 12:00" },
    { title: "Sajtótájékoztatót tartott az ellenzéki összefogás", desc: "Közös programpontokat mutattak be az infláció kezelésére és a munkahelyteremtések felgyorsítására.", date: "Frissítve: Ma, 14:45" },
    { title: "Költségvetési vita: Megszólaltak a gazdasági elemzők", desc: "A szakértők szerint a következő negyedév kulcsfontosságú lesz a forint árfolyamának stabilitása szempontjából.", date: "Frissítve: Ma, 16:20" }
];

// TOP 10 MAGYAR PÁRT SZAVAZÁSA ÉS AZ ÁLTALAD ÍRT CIKKEK ADATBÁZISA
const PART_DATA = [
    { id: 1, name: "Fidesz", votes: 120, color: "#ff6600", article: "<h1>Fidesz - Magyar Polgári Szövetség</h1><p>Ide írhatod a Fideszről szóló legfrissebb híreket, kormányzati intézkedéseket, parlamenti felszólalásokat vagy elemzéseket.</p><p>A híreket bármikor frissítheted ebben a script fájlban!</p>" },
    { id: 2, name: "Tisza Párt", votes: 115, color: "#ffffff", article: "<h1>Tisza Párt</h1><p>Ide jönnek a Tisza Párttal kapcsolatos hírek, politikai megmozdulások, országjárások és nyilatkozatok leírásai.</p>" },
    { id: 3, name: "DK (Demokratikus Koalíció)", votes: 45, color: "#0055a5", article: "<h1>Demokratikus Koalíció</h1><p>Ide írhatod a DK politikai álláspontját, az árnyékkormány híreit és a legutóbbi sajtótájékoztatóikat.</p>" },
    { id: 4, name: "Mi Hazánk Mozgalom", votes: 40, color: "#006400", article: "<h1>Mi Hazánk Mozgalom</h1><p>Ide jönnek a Mi Hazánkkal kapcsolatos hírek, törvényjavaslatok és nemzeti programok leírásai.</p>" },
    { id: 5, name: "Momentum Mozgalom", votes: 25, color: "#5b2b82", article: "<h1>Momentum Mozgalom</h1><p>Ide jönnek a Momentum hírei, ifjúsági programjai, valamint az európai parlamenti tevékenységük bemutatása.</p>" },
    { id: 6, name: "Magyar Kétfarkú Kutya Párt (MKKP)", votes: 35, color: "#ffcc00", article: "<h1>Magyar Kétfarkú Kutya Párt</h1><p>Ide írhatod az MKKP vicces, ironikus vagy éppen komoly passzivista akcióit, városfelújításait.</p>" },
    { id: 7, name: "MSZP", votes: 15, color: "#e30613", article: "<h1>Magyar Szocialista Párt</h1><p>Ide jönnek az MSZP szociáldemokrata programjai és aktuális közleményei.</p>" },
    { id: 8, name: "Jobbik - Konzervatívok", votes: 12, color: "#009b74", article: "<h1>Jobbik - Konzervatívok</h1><p>Ide jönnek a Jobbik aktuális hírei és konzervatív politikai megnyilvánulásai.</p>" },
    { id: 9, name: "LMP - Zöldek", votes: 10, color: "#7cb625", article: "<h1>LMP - Magyarország Zöld Pártja</h1><p>Ide írhatod be az LMP zöldpolitikáját, klímavédelmi javaslatait és fenntarthatósági híreit.</p>" },
    { id: 10, name: "Párbeszéd - Zöldek", votes: 8, color: "#8cb811", article: "<h1>Párbeszéd - Zöldek</h1><p>Ide jönnek a Párbeszéd politikusainak hírei és baloldali zöld javaslatai.</p>" }
];

// SZAVAZÁSI RENDSZER MŰKÖDÉSE (Mentés a böngészőbe)
let votesState = JSON.parse(localStorage.getItem('wt_politics_votes')) || {};
if (Object.keys(votesState).length === 0) {
    PART_DATA.forEach(p => { votesState[p.id] = p.votes; });
    localStorage.setItem('wt_politics_votes', JSON.stringify(votesState));
}

function renderPoll() {
    const container = document.getElementById('poll-container');
    container.innerHTML = '';
    
    let totalVotes = Object.values(votesState).reduce((a, b) => a + b, 0);
    const hasVoted = localStorage.getItem('wt_has_voted') === 'true';

    PART_DATA.forEach(part => {
        const currentVotes = votesState[part.id];
        const percent = totalVotes > 0 ? ((currentVotes / totalVotes) * 100).toFixed(1) : 0;
        
        const row = document.createElement('div');
        row.style.marginBottom = "15px";
        
        row.innerHTML = `
            <div style="display: flex; justify-content: space-between; font-size: 14px; margin-bottom: 5px; font-weight: bold;">
                <span>${part.name}</span>
                <span style="color: ${part.color === '#ffffff' ? '#aaa' : part.color}">${percent}% (${currentVotes} szavazat)</span>
            </div>
            <div style="display: flex; align-items: center; gap: 10px;">
                <div style="flex: 1; background: #222; height: 10px; border-radius: 5px; overflow: hidden; border: 1px solid #333;">
                    <div style="background: ${part.color}; width: ${percent}%; height: 10px; transition: width 0.5s ease;"></div>
                </div>
                ${!hasVoted ? `<button onclick="castVote(${part.id})" style="background: #333; color: white; border: 1px solid #555; padding: 2px 10px; border-radius: 4px; cursor: pointer; font-size: 12px; font-weight: bold;">Voks</button>` : ''}
            </div>
        `;
        container.appendChild(row);
    });
}

function castVote(id) {
    if (localStorage.getItem('wt_has_voted') === 'true') return;
    votesState[id] += 1;
    localStorage.setItem('wt_politics_votes', JSON.stringify(votesState));
    localStorage.setItem('wt_has_voted', 'true');
    renderPoll();
    alert("Köszönjük! Szavazatod sikeresen rögzítve.");
}

// FŐOLDAL HÍREINEK MEGJELENÍTÉSE
function renderDailyNews() {
    const container = document.getElementById('daily-news-container');
    container.innerHTML = '';
    DAILY_NEWS.forEach(news => {
        const card = document.createElement('div');
        card.className = 'news-card';
        card.style.marginBottom = "15px";
        card.style.padding = "20px";
        card.style.background = "#151a22";
        card.style.borderRadius = "8px";
        card.style.borderLeft = "4px solid #45f3ff";
        
        card.innerHTML = `
            <span style="font-size: 12px; color: #555; display: block; margin-bottom: 5px;">${news.date}</span>
            <h3 style="margin: 0 0 10px 0; color: white; font-size: 18px;">${news.title}</h3>
            <p style="margin: 0; color: #8f9aa7; font-size: 14px; line-height: 1.5;">${news.desc}</p>
        `;
        container.appendChild(card);
    });
}

// NAVIGÁCIÓ KEZELÉSE
function showMainPage() {
    document.getElementById('main-page').style.display = 'block';
    document.getElementById('learning-page').style.display = 'none';
    document.getElementById('nav-main').classList.add('active');
    document.getElementById('nav-partok').classList.remove('active');
    renderDailyNews();
    renderPoll();
}

function openPartNews() {
    document.getElementById('main-page').style.display = 'none';
    document.getElementById('learning-page').style.display = 'flex';
    document.getElementById('nav-main').classList.remove('active');
    document.getElementById('nav-partok').classList.add('active');
    renderPartMenu();
    loadPartArticle(1);
}

// BAL OLDALI PÁRTLISTA MENÜ
function renderPartMenu() {
    const menuContainer = document.getElementById('lecture-menu');
    menuContainer.innerHTML = '<div class="level-title">🇭🇺 VÁLASSZ PÁRTOT</div>';
    
    PART_DATA.forEach(part => {
        const link = document.createElement('a');
        link.className = 'lecture-link';
        link.innerText = part.name;
        link.onclick = () => loadPartArticle(part.id);
        link.setAttribute('data-id', part.id);
        menuContainer.appendChild(link);
    });
}

// EGY ADOTT PÁRT CIKKÉNEK BETÖLTÉSE
function loadPartArticle(id) {
    const part = PART_DATA.find(p => p.id === id);
    if (!part) return;

    document.querySelectorAll('.lecture-link').forEach(link => {
        link.classList.remove('active');
        if(parseInt(link.getAttribute('data-id')) === id) {
            link.classList.add('active');
        }
    });

    document.getElementById('lecture-text').innerHTML = part.article;
}

// INDÍTÁS
window.onload = () => {
    showMainPage();
};
