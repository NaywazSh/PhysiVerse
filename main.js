// main.js
const grid = document.getElementById('sim-grid');
const searchInput = document.getElementById('searchInput');

function renderSimulations(data) {
    grid.innerHTML = ''; 

    if (data.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-20">
                <div class="inline-block p-4 rounded-full bg-slate-800 mb-4">
                    <i class="fa-solid fa-flask text-slate-500 text-2xl"></i>
                </div>
                <p class="text-slate-500">No simulations found matching your search.</p>
            </div>
        `;
        return;
    }

    data.forEach(sim => {
        // CHECK IF FREE (To change colors dynamically)
        const isFree = sim.grade.toLowerCase().includes('free');
        
        // Dynamic Styles based on "Free" vs "Paid/Standard"
        const badgeColor = isFree 
            ? 'bg-green-500 text-slate-900 font-bold shadow-lg shadow-green-500/20' 
            : 'bg-slate-900/80 backdrop-blur text-cyan-300 border border-slate-700';
            
        const hoverBorder = isFree 
            ? 'group-hover:border-green-500/50' 
            : 'group-hover:border-cyan-500/50';

        const btnColor = isFree
            ? 'bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-900/20'
            : 'bg-slate-700 hover:bg-cyan-600 hover:text-white text-slate-200';

        // Create Card
        const card = document.createElement('div');
        card.className = `group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 ${hoverBorder} transition duration-300 hover:shadow-2xl flex flex-col`;
        
        card.innerHTML = `
            <!-- Image Area -->
            <div class="relative h-48 overflow-hidden">
                <div class="absolute top-3 left-3 z-10 text-xs px-3 py-1.5 rounded-md ${badgeColor}">
                    ${isFree ? '<i class="fa-solid fa-unlock mr-1"></i>' : ''} ${sim.grade}
                </div>
                <img src="${sim.image}" alt="${sim.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
            </div>
            
            <!-- Content Area -->
            <div class="p-6 flex-1 flex flex-col">
                <div class="flex justify-between items-start mb-2">
                    <span class="text-xs font-bold uppercase tracking-wider text-slate-500">${sim.topic}</span>
                </div>
                
                <h3 class="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition">${sim.title}</h3>
                <p class="text-slate-400 text-sm mb-6 flex-1 leading-relaxed">${sim.desc}</p>
                
                <a href="${sim.file}" class="w-full block text-center py-3 rounded-lg transition-all font-semibold ${btnColor}">
                    ${isFree ? 'Start Demo' : 'Launch Sim'} <i class="fa-solid fa-arrow-right ml-1 text-sm"></i>
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
