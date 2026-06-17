// DEFAULT SAMPLE FILES
let filesDatabase = [
    { id: 1, name: "Premium Factions Setup [1.20+]", desc: "Completely configured server with ranks, custom crates, and optimized economy.", link: "https://example.com/premium-factions", type: "premium", price: 14.99, cat: "mc-servers" },
    { id: 2, name: "Free EssentialsX Hungarian Config", desc: "Pre-translated messages and perfect kit permissions.", link: "https://example.com/free-essentials", type: "free", price: 0, cat: "mc-servers" },
    { id: 3, name: "ZeroDay Cheat Client Modpack", desc: "Bypass most modern AntiCheats with fly, killaura and auto-armor.", link: "https://example.com/zeroday", type: "premium", price: 9.99, cat: "clients" },
    { id: 4, name: "Lunar Client Custom Cosmetics Injector", desc: "Get all capes and wings for free on regular Lunar Client.", link: "https://example.com/lunar-free", type: "free", price: 0, cat: "clients" }
];

// Load local database if exists
if (localStorage.getItem('vault_files')) {
    filesDatabase = JSON.parse(localStorage.getItem('vault_files'));
}

let currentTab = 'free'; // 'free' or 'premium'
let currentCategory = 'mc-servers'; // active subcategory

// TAB SWITCHING
function switchMainTab(tab) {
    currentTab = tab;
    document.getElementById('tab-free').classList.toggle('active', tab === 'free');
    document.getElementById('tab-premium').classList.toggle('active', tab === 'premium');
    
    document.getElementById('page-title').innerText = tab === 'free' ? 'Free Downloads' : 'Premium Store';
    document.getElementById('page-desc').innerText = tab === 'free' ? 'Select a file below to start your high-speed download.' : 'Unlock premium configurations, custom tools, and client exploits instantly.';
    
    renderFiles();
}

// SUBCATEGORY SWITCHING
function switchSubCategory(cat) {
    currentCategory = cat;
    document.querySelectorAll('.sidebar .lecture-link').forEach(link => {
        link.classList.remove('active');
    });
    document.getElementById(`cat-${cat}`).classList.add('active');
    renderFiles();
}

// RENDER FILES BASED ON FILTERS
function renderFiles() {
    const grid = document.getElementById('file-grid');
    grid.innerHTML = '';
    
    const filtered = filesDatabase.filter(f => f.type === currentTab && f.cat === currentCategory);
    
    if (filtered.length === 0) {
        grid.innerHTML = `<p style="color: #555; text-align: center; padding: 40px;">No files uploaded in this category yet.</p>`;
        return;
    }
    
    filtered.forEach(file => {
        const row = document.createElement('div');
        row.style.background = "#151a22";
        row.style.border = "1px solid #222";
        row.style.padding = "20px";
        row.style.borderRadius = "8px";
        row.style.display = "flex";
        row.style.justifyContent = "space-between";
        row.style.alignItems = "center";
        row.style.gap = "20px";
        
        const actionButton = file.type === 'free' 
            ? `<a href="${file.link}" target="_blank" style="background: #45f3ff; color: black; text-decoration: none; padding: 10px 20px; font-weight: bold; border-radius: 4px; font-size: 14px;">Download (Free)</a>`
            : `<button onclick="openPaymentModal('${file.name}', ${file.price})" style="background: #55ff55; color: black; border: none; padding: 10px 20px; font-weight: bold; border-radius: 4px; font-size: 14px; cursor: pointer;">Buy for $${file.price}</button>`;

        row.innerHTML = `
            <div>
                <h4 style="color: white; margin: 0 0 5px 0; font-size: 16px;">${file.name}</h4>
                <p style="margin: 0; color: #8f9aa7; font-size: 13px;">${file.desc}</p>
            </div>
            <div>
                ${actionButton}
            </div>
        `;
        grid.appendChild(row);
    });
}

// ADMIN FORM PRICE INPUT HANDLING
function togglePriceInput() {
    const type = document.getElementById('upload-type').value;
    const priceInput = document.getElementById('upload-price');
    if (type === 'free') {
        priceInput.value = 0;
        priceInput.disabled = true;
        priceInput.style.color = '#555';
    } else {
        priceInput.disabled = false;
        priceInput.style.color = 'white';
    }
}

// ADMIN UPLOAD LOGIC
function handleAdminUpload() {
    const name = document.getElementById('upload-name').value;
    const desc = document.getElementById('upload-desc').value;
    const link = document.getElementById('upload-link').value;
    const type = document.getElementById('upload-type').value;
    const cat = document.getElementById('upload-cat').value;
    const price = parseFloat(document.getElementById('upload-price').value);
    
    if (!name || !desc || !link) {
        alert("Please fill in all fields before uploading!");
        return;
    }
    
    const newFile = {
        id: Date.now(),
        name: name,
        desc: desc,
        link: link,
        type: type,
        price: type === 'free' ? 0 : price,
        cat: cat
    };
    
    filesDatabase.push(newFile);
    localStorage.setItem('vault_files', JSON.stringify(filesDatabase));
    
    // Clear inputs
    document.getElementById('upload-name').value = '';
    document.getElementById('upload-desc').value = '';
    document.getElementById('upload-link').value = '';
    
    alert("File uploaded successfully to the system!");
    renderFiles();
}

// PAYMENT MODAL CONTROLS
function openPaymentModal(name, price) {
    document.getElementById('modal-item-name').innerText = name;
    document.getElementById('modal-item-price').innerText = `$${price} USD`;
    document.getElementById('payment-modal').style.display = 'flex';
}

function closePaymentModal() {
    document.getElementById('payment-modal').style.display = 'none';
}

function processDemoPayment() {
    alert("Payment Processing Simulation...\n\nBank Authorization Successful! Your files are being prepared. In the next phase, we will connect this to your direct transfer link.");
    closePaymentModal();
}

// INIT
window.onload = () => {
    renderFiles();
};
