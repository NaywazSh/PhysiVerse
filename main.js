// main.js

// --- CONFIGURATION ---
const API_CONFIG = {
    merchant_id: "YOUR_MERCHANT_ID_HERE", // Replace later
    redirect_url: "YOUR_BACKEND_URL_HERE" // Replace later
};

// Check if user has already paid (Stored in browser for now)
let hasPremiumAccess = localStorage.getItem('physiVerse_premium') === 'true';

const freeGrid = document.getElementById('free-grid');
const premiumGrid = document.getElementById('premium-grid');
const searchInput = document.getElementById('searchInput');
const modal = document.getElementById('paymentModal');

// --- CARD GENERATION ---
function createCardHTML(sim, isFree) {
    const badgeColor = isFree 
        ? 'bg-green-500 text-slate-900 font-bold shadow-lg shadow-green-500/20' 
        : 'bg-slate-900/80 backdrop-blur text-cyan-300 border border-slate-700';
    
    // Logic: If user has Premium Access, unlock the button even for paid items
    const isUnlocked = isFree || hasPremiumAccess;

    const btnStyle = isUnlocked
        ? 'bg-slate-700 hover:bg-cyan-600 hover:text-white text-slate-200 cursor-pointer'
        : 'bg-slate-800 border border-slate-600 hover:border-cyan-500 text-slate-400 hover:text-cyan-400 cursor-pointer';

    const btnText = isUnlocked ? 'Launch Simulation' : 'Get Access (Locked)';
    const btnIcon = isUnlocked ? 'fa-play' : 'fa-lock';
    
    // If locked, clicking opens modal. If unlocked, goes to file.
    const action = isUnlocked 
        ? `href="${sim.file}"` 
        : `onclick="openPaymentModal('${sim.title}')" href="javascript:void(0)"`;

    return `
        <div class="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-500 transition duration-300 hover:shadow-2xl flex flex-col h-full">
            <div class="relative h-48 overflow-hidden">
                <div class="absolute top-3 left-3 z-10 text-xs px-3 py-1.5 rounded-md ${badgeColor}">
                    ${sim.grade}
                </div>
                <img src="${sim.image}" alt="${sim.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
                
                ${!isUnlocked ? `
                <div class="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition duration-300">
                    <span class="bg-slate-900 text-white px-4 py-2 rounded-full font-bold text-sm shadow-xl"><i class="fa-solid fa-lock mr-2"></i> Premium</span>
                </div>` : ''}
            </div>
            
            <div class="p-6 flex-1 flex flex-col">
                <div class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">${sim.topic}</div>
                <h3 class="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition">${sim.title}</h3>
                <p class="text-slate-400 text-sm mb-6 flex-1 leading-relaxed line-clamp-3">${sim.desc}</p>
                
                <a ${action} class="w-full block text-center py-3 rounded-lg transition-all font-semibold ${btnStyle} mt-auto">
                    <i class="fa-solid ${btnIcon} mr-2 text-xs"></i> ${btnText}
                </a>
            </div>
        </div>
    `;
}

function renderSimulations(data) {
    freeGrid.innerHTML = '';
    premiumGrid.innerHTML = '';

    const freeData = data.filter(sim => sim.grade.toLowerCase().includes('free'));
    
    let premiumData = data.filter(sim => !sim.grade.toLowerCase().includes('free'));
    premiumData.sort((a, b) => a.topic.localeCompare(b.topic));

    // Render Free
    if (freeData.length > 0) {
        document.getElementById('free-section').style.display = 'block';
        freeData.forEach(sim => {
            const card = document.createElement('div');
            card.innerHTML = createCardHTML(sim, true);
            freeGrid.appendChild(card.firstElementChild);
        });
    }

    // Render Premium
    if (premiumData.length > 0) {
        document.getElementById('premium-section').style.display = 'block';
        premiumData.forEach(sim => {
            const card = document.createElement('div');
            card.innerHTML = createCardHTML(sim, false);
            premiumGrid.appendChild(card.firstElementChild);
        });
    }
}

// --- PAYMENT MODAL LOGIC ---
let selectedProvider = null;

function openPaymentModal(title) {
    modal.classList.remove('hidden');
    // Optional: Update modal title to show which course they clicked
    // console.log("User wants to buy:", title);
}

function closePaymentModal() {
    modal.classList.add('hidden');
}

function selectMethod(provider) {
    selectedProvider = provider;
    
    // UI Updates
    document.querySelectorAll('.payment-btn').forEach(btn => {
        btn.classList.remove('ring-2', 'ring-cyan-500', 'bg-slate-100');
    });
    document.getElementById(`btn-${provider}`).classList.add('ring-2', 'ring-cyan-500', 'bg-slate-100');
}

function initiatePayment() {
    if (!selectedProvider) {
        alert("Please select a payment method (bKash, Rocket, or Nagad)");
        return;
    }

    const btn = document.getElementById('payBtn');
    const originalText = btn.innerHTML;
    
    // 1. SHOW LOADING STATE
    btn.disabled = true;
    btn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin mr-2"></i> Processing with ${selectedProvider}...`;

    // 2. SIMULATE API CALL (Replace this block with real API integration later)
    setTimeout(() => {
        // Assume payment success
        btn.innerHTML = `<i class="fa-solid fa-check mr-2"></i> Success!`;
        btn.classList.remove('bg-slate-900', 'hover:bg-cyan-600');
        btn.classList.add('bg-green-500');

        setTimeout(() => {
            // 3. UNLOCK CONTENT
            hasPremiumAccess = true;
            localStorage.setItem('physiVerse_premium', 'true'); // Save state
            
            // Refresh grid to show unlocked buttons
            renderSimulations(simulations);
            closePaymentModal();
            
            alert("Payment Successful! Premium Access Unlocked.");
        }, 1000);
    }, 2000); 
}

// Initial Load
renderSimulations(simulations);

// Search
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = simulations.filter(sim => 
        sim.title.toLowerCase().includes(term) || 
        sim.topic.toLowerCase().includes(term)
    );
    renderSimulations(filtered);
});
