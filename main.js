// main.js

// Select the two separate containers
const freeGrid = document.getElementById('free-grid');
const premiumGrid = document.getElementById('premium-grid');
const searchInput = document.getElementById('searchInput');

// Helper function to create a card HTML string
function createCardHTML(sim, isFree) {
    const badgeColor = isFree 
        ? 'bg-green-500 text-slate-900 font-bold shadow-lg shadow-green-500/20' 
        : 'bg-slate-900/80 backdrop-blur text-cyan-300 border border-slate-700';
    
    const btnStyle = isFree
        ? 'bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-900/20'
        : 'bg-slate-800 border border-slate-600 hover:bg-cyan-600 hover:border-cyan-500 hover:text-white text-slate-300';

    const btnText = isFree ? 'Start Demo' : 'Get Access';
    const btnIcon = isFree ? 'fa-play' : 'fa-lock';

    return `
        <div class="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-500 transition duration-300 hover:shadow-2xl flex flex-col">
            <!-- Image -->
            <div class="relative h-48 overflow-hidden">
                <div class="absolute top-3 left-3 z-10 text-xs px-3 py-1.5 rounded-md ${badgeColor}">
                    ${sim.grade}
                </div>
                <img src="${sim.image}" alt="${sim.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
            </div>
            
            <!-- Content -->
            <div class="p-6 flex-1 flex flex-col">
                <div class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">${sim.topic}</div>
                <h3 class="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition">${sim.title}</h3>
                <p class="text-slate-400 text-sm mb-6 flex-1 leading-relaxed">${sim.desc}</p>
                
                <a href="${sim.file}" class="w-full block text-center py-3 rounded-lg transition-all font-semibold ${btnStyle}">
                    <i class="fa-solid ${btnIcon} mr-2 text-xs"></i> ${btnText}
                </a>
            </div>
        </div>
    `;
}

function renderSimulations(data) {
    // 1. Clear both grids
    freeGrid.innerHTML = '';
    premiumGrid.innerHTML = '';

    // 2. Separate Data
    const freeData = data.filter(sim => sim.grade.toLowerCase().includes('free'));
    const premiumData = data.filter(sim => !sim.grade.toLowerCase().includes('free'));

    // 3. Render Free Grid
    if (freeData.length > 0) {
        document.getElementById('free-section').style.display = 'block';
        freeData.forEach(sim => {
            const card = document.createElement('div');
            card.innerHTML = createCardHTML(sim, true);
            freeGrid.appendChild(card.firstElementChild);
        });
    } else {
        // Hide Free Section if no results match (e.g. during search)
        document.getElementById('free-section').style.display = 'none';
    }

    // 4. Render Premium Grid
    if (premiumData.length > 0) {
        document.getElementById('premium-section').style.display = 'block';
        premiumData.forEach(sim => {
            const card = document.createElement('div');
            card.innerHTML = createCardHTML(sim, false);
            premiumGrid.appendChild(card.firstElementChild);
        });
    } else {
        document.getElementById('premium-section').style.display = 'none';
    }

    // 5. Handle "No Results" case
    if (freeData.length === 0 && premiumData.length === 0) {
        premiumGrid.innerHTML = `
            <div class="col-span-full text-center py-10 text-slate-500">
                No simulations found. Try a different search term.
            </div>
        `;
        document.getElementById('premium-section').style.display = 'block';
    }
}

// Initial Load
renderSimulations(simulations);

// Search Logic
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = simulations.filter(sim => 
        sim.title.toLowerCase().includes(term) || 
        sim.topic.toLowerCase().includes(term)
    );
    renderSimulations(filtered);
});
