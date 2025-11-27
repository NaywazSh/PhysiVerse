// main.js
const grid = document.getElementById('sim-grid');
const searchInput = document.getElementById('searchInput');

function renderSimulations(data) {
    grid.innerHTML = ''; // Clear current grid

    if (data.length === 0) {
        grid.innerHTML = `<div class="col-span-full text-center text-slate-500 py-10">No simulations found matching your search.</div>`;
        return;
    }

    data.forEach(sim => {
        // Create the card HTML structure
        const card = document.createElement('div');
        card.className = 'group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition duration-300 hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col';
        
        card.innerHTML = `
            <div class="relative h-48 overflow-hidden">
                <div class="absolute top-3 left-3 bg-slate-900/80 backdrop-blur text-xs font-bold px-2 py-1 rounded text-cyan-300 border border-slate-700">
                    ${sim.grade}
                </div>
                <img src="${sim.image}" alt="${sim.title}" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
            </div>
            
            <div class="p-6 flex-1 flex flex-col">
                <div class="text-cyan-500 text-xs font-bold uppercase tracking-wider mb-2">${sim.topic}</div>
                <h3 class="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition">${sim.title}</h3>
                <p class="text-slate-400 text-sm mb-6 flex-1">${sim.desc}</p>
                
                <a href="${sim.file}" class="w-full block text-center bg-slate-700 hover:bg-cyan-600 hover:text-white text-slate-200 font-semibold py-3 rounded-lg transition-colors">
                    <i class="fa-solid fa-play mr-2"></i> Launch Simulation
                </a>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Initial Load
renderSimulations(simulations);

// Search Functionality
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = simulations.filter(sim => 
        sim.title.toLowerCase().includes(term) || 
        sim.topic.toLowerCase().includes(term)
    );
    renderSimulations(filtered);
});