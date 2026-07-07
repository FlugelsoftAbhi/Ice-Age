// -------------------------------------------------------------
// FREEZERZZ - APPLICATION ENGINE (JAVASCRIPT)
// -------------------------------------------------------------

// Comprehensive Cold Storage Dataset (India and Global Hubs)
let coldStorageData = [
    {
        id: 1,
        code: "CS-IND-01",
        name: "Dev Bhumi Cold Chain",
        state: "Himachal Pradesh",
        country: "India",
        capacity: 5000,
        temp: -18,
        type: "CA Chamber",
        sectors: "Horticulture (Apples), Dairy",
        coords: { lat: 31.1048, lon: 77.1734 },
        efficiency: 5,
        diagnostics: { humidity: 90, compressorLoad: 72, frostAccumulation: 12 }
    },
    {
        id: 2,
        code: "CS-IND-02",
        name: "Indo-Swiss Agri-Chain",
        state: "Jammu & Kashmir",
        country: "India",
        capacity: 8200,
        temp: -22,
        type: "Deep Freeze",
        sectors: "Apples, Cherries, Saffron",
        coords: { lat: 34.0837, lon: 74.7973 },
        efficiency: 4,
        diagnostics: { humidity: 88, compressorLoad: 78, frostAccumulation: 18 }
    },
    {
        id: 3,
        code: "CS-IND-03",
        name: "Kandla Port Glacial Depot",
        state: "Gujarat",
        country: "India",
        capacity: 12000,
        temp: -25,
        type: "Deep Freeze",
        sectors: "Seafood Export, Imports",
        coords: { lat: 23.0300, lon: 70.2185 },
        efficiency: 5,
        diagnostics: { humidity: 92, compressorLoad: 68, frostAccumulation: 8 }
    },
    {
        id: 4,
        code: "CS-IND-04",
        name: "Ghazipur Produce Terminal",
        state: "Delhi NCR",
        country: "India",
        capacity: 15000,
        temp: -15,
        type: "Chamber Grid",
        sectors: "Poultry, Vegetables, Dairy",
        coords: { lat: 28.6139, lon: 77.3025 },
        efficiency: 3,
        diagnostics: { humidity: 85, compressorLoad: 85, frostAccumulation: 25 }
    },
    {
        id: 5,
        code: "CS-IND-05",
        name: "Tarun Cold Chain Hub",
        state: "Maharashtra",
        country: "India",
        capacity: 6000,
        temp: 4,
        type: "Chilled Chamber",
        sectors: "Dairy, Fresh Fruits, Grapes",
        coords: { lat: 18.5204, lon: 73.8567 },
        efficiency: 4,
        diagnostics: { humidity: 80, compressorLoad: 60, frostAccumulation: 5 }
    },
    {
        id: 6,
        code: "CS-GLB-01",
        name: "Svalbard Global Seed Vault",
        state: "Spitsbergen",
        country: "Norway",
        capacity: 3500,
        temp: -18,
        type: "Permafrost Cryo-Vault",
        sectors: "Genetic Seeds Safeguarding",
        coords: { lat: 78.2357, lon: 15.6492 },
        efficiency: 5,
        diagnostics: { humidity: 95, compressorLoad: 15, frostAccumulation: 3 }
    },
    {
        id: 7,
        code: "CS-GLB-02",
        name: "Americold Chicago Center",
        state: "Illinois",
        country: "USA",
        capacity: 25000,
        temp: -20,
        type: "Deep Freeze Log",
        sectors: "Frozen Food Distribution",
        coords: { lat: 41.8781, lon: -87.6298 },
        efficiency: 4,
        diagnostics: { humidity: 87, compressorLoad: 75, frostAccumulation: 15 }
    },
    {
        id: 8,
        code: "CS-GLB-03",
        name: "Rotterdam Megafrost Dock",
        state: "South Holland",
        country: "Netherlands",
        capacity: 35000,
        temp: -28,
        type: "Mega Cryo-Hub",
        sectors: "International Meat & Seafood",
        coords: { lat: 51.9244, lon: 4.4777 },
        efficiency: 5,
        diagnostics: { humidity: 93, compressorLoad: 80, frostAccumulation: 10 }
    },
    {
        id: 9,
        code: "CS-GLB-04",
        name: "Sydney Frozen Harbour",
        state: "New South Wales",
        country: "Australia",
        capacity: 11000,
        temp: -12,
        type: "Chilled & Frozen",
        sectors: "Dairy Exports, Seafood",
        coords: { lat: -33.8688, lon: 151.2093 },
        efficiency: 3,
        diagnostics: { humidity: 84, compressorLoad: 70, frostAccumulation: 22 }
    },
    {
        id: 10,
        code: "CS-GLB-05",
        name: "Alaska Cryo-Vault",
        state: "Alaska",
        country: "USA",
        capacity: 4200,
        temp: -30,
        type: "Super Frozen Vault",
        sectors: "Scientific Samples, Salmon",
        coords: { lat: 61.2181, lon: -149.9003 },
        efficiency: 5,
        diagnostics: { humidity: 97, compressorLoad: 40, frostAccumulation: 5 }
    },
    {
        id: 11,
        code: "CS-GLB-06",
        name: "Cape Town Fruit Chiller",
        state: "Western Cape",
        country: "South Africa",
        capacity: 9000,
        temp: 2,
        type: "Chilled Chamber",
        sectors: "Deciduous Fruit Export",
        coords: { lat: -33.9249, lon: 18.4241 },
        efficiency: 4,
        diagnostics: { humidity: 82, compressorLoad: 65, frostAccumulation: 6 }
    },
    {
        id: 12,
        code: "CS-GLB-07",
        name: "Singapore Maritime Cryo",
        state: "Singapore Hub",
        country: "Singapore",
        capacity: 18000,
        temp: -18,
        type: "Deep Freeze",
        sectors: "Transshipment Global Cargo",
        coords: { lat: 1.3521, lon: 103.8198 },
        efficiency: 5,
        diagnostics: { humidity: 89, compressorLoad: 76, frostAccumulation: 11 }
    },
    {
        id: 13,
        code: "CS-IND-06",
        name: "Adani Mundra Storage Terminal",
        state: "Gujarat",
        country: "India",
        capacity: 20000,
        temp: -24,
        type: "CA Chamber Mega",
        sectors: "Agro-Export, Pharma Logistics",
        coords: { lat: 22.8378, lon: 69.7022 },
        efficiency: 5,
        diagnostics: { humidity: 91, compressorLoad: 73, frostAccumulation: 9 }
    },
    {
        id: 14,
        code: "CS-IND-07",
        name: "Punjab Potato Logistics",
        state: "Punjab",
        country: "India",
        capacity: 7500,
        temp: -2,
        type: "Chilled Chamber",
        sectors: "Potato Seeds, Seedlings",
        coords: { lat: 30.9010, lon: 75.8573 },
        efficiency: 4,
        diagnostics: { humidity: 83, compressorLoad: 58, frostAccumulation: 14 }
    },
    {
        id: 15,
        code: "CS-IND-08",
        name: "Kochi Marine Cold Hub",
        state: "Kerala",
        country: "India",
        capacity: 9800,
        temp: -22,
        type: "Deep Freeze",
        sectors: "Marine Exports, Pharma",
        coords: { lat: 9.9312, lon: 76.2673 },
        efficiency: 5,
        diagnostics: { humidity: 94, compressorLoad: 80, frostAccumulation: 10 }
    },
    {
        id: 16,
        code: "CS-GLB-08",
        name: "Tyson Poultry Freeze",
        state: "Arkansas",
        country: "USA",
        capacity: 22000,
        temp: -18,
        type: "Deep Freeze",
        sectors: "Poultry Storage",
        coords: { lat: 36.1867, lon: -94.1288 },
        efficiency: 4,
        diagnostics: { humidity: 86, compressorLoad: 82, frostAccumulation: 19 }
    },
    {
        id: 17,
        code: "CS-GLB-09",
        name: "Tokyo Frozen Gateway",
        state: "Kanto",
        country: "Japan",
        capacity: 14000,
        temp: -25,
        type: "Super Frozen Chamber",
        sectors: "Sushi-grade Seafood",
        coords: { lat: 35.6762, lon: 139.6503 },
        efficiency: 5,
        diagnostics: { humidity: 91, compressorLoad: 71, frostAccumulation: 7 }
    },
    {
        id: 18,
        code: "CS-GLB-10",
        name: "Yukon Glacial Storage",
        state: "Yukon",
        country: "Canada",
        capacity: 3000,
        temp: -28,
        type: "Natural Ice Cave Vault",
        sectors: "Scientific Storage",
        coords: { lat: 60.7212, lon: -135.0568 },
        efficiency: 4,
        diagnostics: { humidity: 94, compressorLoad: 20, frostAccumulation: 2 }
    },
    {
        id: 19,
        code: "CS-IND-09",
        name: "Chennai Frozen Pharma Core",
        state: "Tamil Nadu",
        country: "India",
        capacity: 10500,
        temp: -20,
        type: "CA Chamber",
        sectors: "Vaccines, Bio-Tech Products",
        coords: { lat: 13.0827, lon: 80.2707 },
        efficiency: 5,
        diagnostics: { humidity: 89, compressorLoad: 75, frostAccumulation: 11 }
    },
    {
        id: 20,
        code: "CS-IND-10",
        name: "Kolkata Riverine Chiller",
        state: "West Bengal",
        country: "India",
        capacity: 8500,
        temp: -18,
        type: "Deep Freeze",
        sectors: "Fish, Meat Products",
        coords: { lat: 22.5726, lon: 88.3639 },
        efficiency: 4,
        diagnostics: { humidity: 90, compressorLoad: 79, frostAccumulation: 16 }
    }
];

// App State Management
let filteredStorage = [...coldStorageData];
let currentMapView = "india"; // 'india' or 'global'
let currentSelectedUnitId = null;
let currentTablePage = 1;
const rowsPerPage = 10;

// DOM Elements
const statIndiaCount = document.getElementById("stat-india-count");
const statGlobalCount = document.getElementById("stat-global-count");
const statTotalCapacity = document.getElementById("stat-total-capacity");

const filterSearch = document.getElementById("filter-search");
const filterRegion = document.getElementById("filter-region");
const filterTemp = document.getElementById("filter-temp");
const filterSort = document.getElementById("filter-sort");

const btnViewIndia = document.getElementById("btn-view-india");
const btnViewGlobal = document.getElementById("btn-view-global");
const mapViewport = document.getElementById("map-viewport");
const frozenGridNodes = document.getElementById("frozen-grid-nodes");

const unitDetailCard = document.getElementById("unit-detail-card");
const profileEmptyState = document.getElementById("profile-empty-state");
const profileActiveState = document.getElementById("profile-active-state");
const profTempVal = document.getElementById("prof-temp-val");
const profName = document.getElementById("prof-name");
const profLocation = document.getElementById("prof-location");
const profCapacity = document.getElementById("prof-capacity");
const profType = document.getElementById("prof-type");
const profStatus = document.getElementById("prof-status");
const profSectors = document.getElementById("prof-sectors");
const profAcorns = document.getElementById("prof-acorns");

const gaugeHumidityVal = document.getElementById("gauge-humidity-val");
const gaugeHumidityFill = document.getElementById("gauge-humidity-fill");
const gaugeLoadVal = document.getElementById("gauge-load-val");
const gaugeLoadFill = document.getElementById("gauge-load-fill");
const gaugeFrostVal = document.getElementById("gauge-frost-val");
const gaugeFrostFill = document.getElementById("gauge-frost-fill");

const registryTableBody = document.getElementById("registry-table-body");
const paginationInfoText = document.getElementById("pagination-info-text");
const btnPrevPage = document.getElementById("btn-prev-page");
const btnNextPage = document.getElementById("btn-next-page");

const formCarveStorage = document.getElementById("form-carve-storage");
const toastBanner = document.getElementById("toast-banner");
const toastMessageText = document.getElementById("toast-message-text");

// Scrat Detector Elements
const interactiveIceBlock = document.getElementById("interactive-ice-block");
const scratSpriteElement = document.getElementById("scrat-sprite-element");
const detectorStatusMsg = document.getElementById("detector-status-msg");
const inputLatitude = document.getElementById("input-latitude");
const inputLongitude = document.getElementById("input-longitude");
const btnScratSniff = document.getElementById("btn-scrat-sniff");
const btnGpsDetect = document.getElementById("btn-gps-detect");

// -------------------------------------------------------------
// INITIALIZATION
// -------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    initSnowCanvas();
    updateGeneralStats();
    applyFilters();
    initScratDetector();
    
    // Set up form submission
    formCarveStorage.addEventListener("submit", handleCarveSubmit);

    // Set up filter change listeners
    filterSearch.addEventListener("input", applyFilters);
    filterRegion.addEventListener("change", applyFilters);
    filterTemp.addEventListener("change", applyFilters);
    filterSort.addEventListener("change", applyFilters);

    // Map View toggling
    btnViewIndia.addEventListener("click", () => {
        currentMapView = "india";
        btnViewIndia.classList.add("active");
        btnViewGlobal.classList.remove("active");
        renderMapNodes();
    });

    btnViewGlobal.addEventListener("click", () => {
        currentMapView = "global";
        btnViewGlobal.classList.add("active");
        btnViewIndia.classList.remove("active");
        renderMapNodes();
    });

    // Pagination events
    btnPrevPage.addEventListener("click", () => {
        if (currentTablePage > 1) {
            currentTablePage--;
            renderTable();
        }
    });

    btnNextPage.addEventListener("click", () => {
        const totalPages = Math.ceil(filteredStorage.length / rowsPerPage);
        if (currentTablePage < totalPages) {
            currentTablePage++;
            renderTable();
        }
    });
});

// -------------------------------------------------------------
// METRICS & ANALYSIS GRAPHS (INLINE SVG)
// -------------------------------------------------------------
function renderCharts() {
    renderCapacityChart();
    renderTempZoneChart();
}

function renderCapacityChart() {
    const chartContainer = document.getElementById("regional-capacity-chart");
    const legendContainer = document.getElementById("regional-capacity-legend");
    if (!chartContainer) return;

    // Calculate capacity sums
    let indiaCap = 0;
    let globalCap = 0;
    
    coldStorageData.forEach(item => {
        if (item.country === "India") {
            indiaCap += item.capacity;
        } else {
            globalCap += item.capacity;
        }
    });

    const maxCap = Math.max(indiaCap, globalCap);
    const scale = 150 / maxCap; // Chart height limit is 150

    // Construct SVG dynamically
    let svgHtml = `
    <svg viewBox="0 0 400 200" class="chart-svg">
        <!-- Grid lines -->
        <line x1="60" y1="20" x2="360" y2="20" stroke="rgba(72,219,251,0.1)" stroke-width="1" />
        <line x1="60" y1="70" x2="360" y2="70" stroke="rgba(72,219,251,0.1)" stroke-width="1" />
        <line x1="60" y1="120" x2="360" y2="120" stroke="rgba(72,219,251,0.1)" stroke-width="1" />
        <line x1="60" y1="170" x2="360" y2="170" stroke="rgba(72,219,251,0.15)" stroke-width="2" />
        
        <!-- Y-Axis labels -->
        <text x="50" y="25" fill="#a5b1c2" font-size="10" text-anchor="end">${Math.round(maxCap/1000)}k MT</text>
        <text x="50" y="95" fill="#a5b1c2" font-size="10" text-anchor="end">${Math.round(maxCap/2000)}k MT</text>
        <text x="50" y="174" fill="#a5b1c2" font-size="10" text-anchor="end">0</text>

        <!-- India Bar -->
        <g class="chart-bar">
            <rect x="110" y="${170 - (indiaCap * scale)}" width="60" height="${indiaCap * scale}" fill="url(#grad-india)" rx="8" />
            <text x="140" y="${160 - (indiaCap * scale)}" fill="#48dbfb" font-size="11" font-weight="bold" text-anchor="middle">${Math.round(indiaCap/1000)}k</text>
            <text x="140" y="188" fill="#f5f6fa" font-size="12" font-family="Fredoka" text-anchor="middle">India</text>
        </g>

        <!-- Global Bar -->
        <g class="chart-bar">
            <rect x="230" y="${170 - (globalCap * scale)}" width="60" height="${globalCap * scale}" fill="url(#grad-global)" rx="8" />
            <text x="260" y="${160 - (globalCap * scale)}" fill="#00d2d3" font-size="11" font-weight="bold" text-anchor="middle">${Math.round(globalCap/1000)}k</text>
            <text x="260" y="188" fill="#f5f6fa" font-size="12" font-family="Fredoka" text-anchor="middle">International</text>
        </g>

        <!-- Gradients definition -->
        <defs>
            <linearGradient id="grad-india" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#48dbfb" />
                <stop offset="100%" stop-color="#102238" />
            </linearGradient>
            <linearGradient id="grad-global" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#00d2d3" stop-opacity="1" />
                <stop offset="100%" stop-color="#102238" stop-opacity="0.8" />
            </linearGradient>
        </defs>
    </svg>`;

    chartContainer.innerHTML = svgHtml;

    // Legend
    legendContainer.innerHTML = `
        <div class="legend-item">
            <span class="legend-color" style="background-color: #48dbfb;"></span>
            <span>India Cold Chain (${(indiaCap/1000).toFixed(1)}k MT)</span>
        </div>
        <div class="legend-item">
            <span class="legend-color" style="background-color: #00d2d3;"></span>
            <span>Global Cold Chain (${(globalCap/1000).toFixed(1)}k MT)</span>
        </div>
    `;
}

function renderTempZoneChart() {
    const chartContainer = document.getElementById("temp-zone-chart");
    const legendContainer = document.getElementById("temp-zone-legend");
    if (!chartContainer) return;

    // Count categories
    let counts = { glacial: 0, frozen: 0, chilled: 0 };
    coldStorageData.forEach(item => {
        if (item.temp < -18) counts.glacial++;
        else if (item.temp <= 0) counts.frozen++;
        else counts.chilled++;
    });

    const total = counts.glacial + counts.frozen + counts.chilled;
    
    // Percentages
    const pctG = counts.glacial / total;
    const pctF = counts.frozen / total;
    const pctC = counts.chilled / total;

    // Radius of donut chart = 50, circumference = 2 * PI * r = 314
    const r = 50;
    const circ = 2 * Math.PI * r;

    // Dash offsets
    const strokeG = circ * pctG;
    const strokeF = circ * pctF;
    const strokeC = circ * pctC;

    const offsetG = 0;
    const offsetF = strokeG;
    const offsetC = strokeG + strokeF;

    let svgHtml = `
    <svg viewBox="0 0 200 200" class="chart-svg">
        <circle cx="100" cy="100" r="${r}" fill="transparent" stroke="rgba(16, 34, 56, 0.4)" stroke-width="12" />
        
        <!-- Glacial circle segment -->
        <circle class="chart-donut-segment" cx="100" cy="100" r="${r}" fill="transparent" 
            stroke="#48dbfb" stroke-width="12" 
            stroke-dasharray="${strokeG} ${circ - strokeG}" 
            stroke-dashoffset="-${offsetG}" 
            transform="rotate(-90 100 100)" />
            
        <!-- Frozen circle segment -->
        <circle class="chart-donut-segment" cx="100" cy="100" r="${r}" fill="transparent" 
            stroke="#54a0ff" stroke-width="12" 
            stroke-dasharray="${strokeF} ${circ - strokeF}" 
            stroke-dashoffset="-${offsetF}" 
            transform="rotate(-90 100 100)" />
            
        <!-- Chilled circle segment -->
        <circle class="chart-donut-segment" cx="100" cy="100" r="${r}" fill="transparent" 
            stroke="#1dd1a1" stroke-width="12" 
            stroke-dasharray="${strokeC} ${circ - strokeC}" 
            stroke-dashoffset="-${offsetC}" 
            transform="rotate(-90 100 100)" />
            
        <!-- Inner text count -->
        <text x="100" y="98" fill="#f5f6fa" font-size="14" font-family="Fredoka" text-anchor="middle" font-weight="bold">${total}</text>
        <text x="100" y="115" fill="#a5b1c2" font-size="8" text-anchor="middle" letter-spacing="1">FACILITIES</text>
    </svg>`;

    chartContainer.innerHTML = svgHtml;

    // Legend
    legendContainer.innerHTML = `
        <div class="legend-item">
            <span class="legend-color" style="background-color: #48dbfb;"></span>
            <span>Glacial (${counts.glacial} units)</span>
        </div>
        <div class="legend-item">
            <span class="legend-color" style="background-color: #54a0ff;"></span>
            <span>Frozen (${counts.frozen} units)</span>
        </div>
        <div class="legend-item">
            <span class="legend-color" style="background-color: #1dd1a1;"></span>
            <span>Chilled (${counts.chilled} units)</span>
        </div>
    `;
}

// -------------------------------------------------------------
// FILTERING & STATS UPDATE
// -------------------------------------------------------------
function updateGeneralStats() {
    let totalCap = 0;
    let india = 0;
    let global = 0;

    coldStorageData.forEach(item => {
        totalCap += item.capacity;
        if (item.country === "India") india++;
        else global++;
    });

    statIndiaCount.textContent = india;
    statGlobalCount.textContent = global;
    statTotalCapacity.textContent = `${(totalCap / 1000).toFixed(1)}k`;
}

function applyFilters() {
    const q = filterSearch.value.trim().toLowerCase();
    const region = filterRegion.value;
    const tempZone = filterTemp.value;
    const sortBy = filterSort.value;

    filteredStorage = coldStorageData.filter(item => {
        // Query search
        const matchesQuery = item.name.toLowerCase().includes(q) ||
                             item.state.toLowerCase().includes(q) ||
                             item.country.toLowerCase().includes(q) ||
                             item.code.toLowerCase().includes(q);

        // Region Filter
        let matchesRegion = true;
        if (region === "india") matchesRegion = item.country === "India";
        else if (region === "international") matchesRegion = item.country !== "India";

        // Temp Zone Filter
        let matchesTemp = true;
        if (tempZone === "glacial") matchesTemp = item.temp < -18;
        else if (tempZone === "frozen") matchesTemp = item.temp >= -18 && item.temp <= 0;
        else if (tempZone === "chilled") matchesTemp = item.temp > 0;

        return matchesQuery && matchesRegion && matchesTemp;
    });

    // Sorting
    filteredStorage.sort((a, b) => {
        if (sortBy === "capacity-desc") return b.capacity - a.capacity;
        if (sortBy === "capacity-asc") return a.capacity - b.capacity;
        if (sortBy === "temp-asc") return a.temp - b.temp; // lowest degrees first (coldest)
        if (sortBy === "name-asc") return a.name.localeCompare(b.name);
        return 0;
    });

    // Reset pagination to page 1
    currentTablePage = 1;
    
    // Re-render components
    renderMapNodes();
    renderTable();
    renderCharts();
}

// -------------------------------------------------------------
// INTERACTIVE MAP GRID VISUALIZER
// -------------------------------------------------------------
function renderMapNodes() {
    frozenGridNodes.innerHTML = "";

    // Determine current boundary mapping parameters
    let itemsToDraw = [];
    
    if (currentMapView === "india") {
        itemsToDraw = filteredStorage.filter(item => item.country === "India");
    } else {
        itemsToDraw = filteredStorage;
    }

    if (itemsToDraw.length === 0) {
        return;
    }

    itemsToDraw.forEach(item => {
        const node = document.createElement("div");
        node.className = `map-node ${getTempClass(item.temp)}`;
        node.setAttribute("data-id", item.id);
        node.setAttribute("title", `${item.name} (${item.temp}°C)`);

        // Compute coordinate placements
        let posX = 50;
        let posY = 50;

        if (currentMapView === "india") {
            // India bound estimation: Lat: 8 to 36, Lon: 68 to 97
            const latMin = 8.0, latMax = 36.0;
            const lonMin = 68.0, lonMax = 97.0;

            posX = ((item.coords.lon - lonMin) / (lonMax - lonMin)) * 100;
            posY = 100 - (((item.coords.lat - latMin) / (latMax - latMin)) * 100);
        } else {
            // Global bound estimation: Lat: -60 to 80, Lon: -180 to 180
            const latMin = -60.0, latMax = 80.0;
            const lonMin = -180.0, lonMax = 180.0;

            posX = ((item.coords.lon - lonMin) / (lonMax - lonMin)) * 100;
            posY = 100 - (((item.coords.lat - latMin) / (latMax - latMin)) * 100);
        }

        // Clip constraints (keep inside view)
        posX = Math.max(2, Math.min(98, posX));
        posY = Math.max(2, Math.min(98, posY));

        node.style.left = `${posX}%`;
        node.style.top = `${posY}%`;

        // Highlight selected node
        if (item.id === currentSelectedUnitId) {
            node.classList.add("selected");
        }

        // Add Click listener
        node.addEventListener("click", () => {
            selectUnit(item.id);
        });

        frozenGridNodes.appendChild(node);
    });
}

function getTempClass(temp) {
    if (temp < -18) return "temp-glacial";
    if (temp <= 0) return "temp-frozen";
    return "temp-chilled";
}

// -------------------------------------------------------------
// DYNAMIC UNIT PROFILE DETAILS
// -------------------------------------------------------------
function selectUnit(id) {
    currentSelectedUnitId = id;
    
    // Highlight correct row in table
    const trElements = registryTableBody.querySelectorAll("tr");
    trElements.forEach(tr => {
        if (tr.getAttribute("data-id") == id) {
            tr.classList.add("active-row");
        } else {
            tr.classList.remove("active-row");
        }
    });

    // Highlight map nodes
    const nodes = frozenGridNodes.querySelectorAll(".map-node");
    nodes.forEach(node => {
        if (node.getAttribute("data-id") == id) {
            node.classList.add("selected");
        } else {
            node.classList.remove("selected");
        }
    });

    // Populate active Profile
    const item = coldStorageData.find(u => u.id === id);
    if (!item) return;

    profileEmptyState.classList.add("hidden");
    profileActiveState.classList.remove("hidden");

    profTempVal.textContent = `${item.temp}°C`;
    profName.textContent = item.name;
    profLocation.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${item.state}, ${item.country}`;
    profCapacity.textContent = `${item.capacity.toLocaleString()} MT`;
    profType.textContent = item.type;
    
    // Status color
    let statusText = "Chilled";
    if (item.temp < -18) statusText = "Glacial";
    else if (item.temp <= 0) statusText = "Frozen";
    
    profStatus.textContent = statusText;
    profStatus.className = `prof-stat-val status-pill table-status-pill ${statusText.toLowerCase()}`;
    profSectors.textContent = item.sectors;

    // Diagnostics gauges (with animations)
    gaugeHumidityVal.textContent = `${item.diagnostics.humidity}%`;
    gaugeHumidityFill.style.width = `${item.diagnostics.humidity}%`;
    
    gaugeLoadVal.textContent = `${item.diagnostics.compressorLoad}%`;
    gaugeLoadFill.style.width = `${item.diagnostics.compressorLoad}%`;
    
    gaugeFrostVal.textContent = `${item.diagnostics.frostAccumulation}%`;
    gaugeFrostFill.style.width = `${item.diagnostics.frostAccumulation}%`;

    // Acorn Ratings (max 5)
    let acornHtml = "";
    for (let i = 1; i <= 5; i++) {
        if (i <= item.efficiency) {
            acornHtml += `<i class="fa-solid fa-nut active"></i>`;
        } else {
            acornHtml += `<i class="fa-solid fa-nut"></i>`;
        }
    }
    profAcorns.innerHTML = acornHtml;
}

// -------------------------------------------------------------
// VERIFIED RECORDS REGISTRY (TABLE)
// -------------------------------------------------------------
function renderTable() {
    registryTableBody.innerHTML = "";
    
    const startIdx = (currentTablePage - 1) * rowsPerPage;
    const endIdx = startIdx + rowsPerPage;
    const pageItems = filteredStorage.slice(startIdx, endIdx);

    if (pageItems.length === 0) {
        registryTableBody.innerHTML = `
            <tr>
                <td colspan="6" class="text-center" style="padding: 2.5rem; color: var(--frost-gray);">
                    <i class="fa-solid fa-face-frown" style="font-size: 2rem; margin-bottom: 0.5rem; display: block;"></i>
                    No sub-zero units match these parameters.
                </td>
            </tr>
        `;
        paginationInfoText.textContent = "Showing 0 of 0 records";
        btnPrevPage.disabled = true;
        btnNextPage.disabled = true;
        return;
    }

    pageItems.forEach(item => {
        const tr = document.createElement("tr");
        tr.setAttribute("data-id", item.id);
        if (item.id === currentSelectedUnitId) {
            tr.className = "active-row";
        }

        let statusText = "Chilled";
        if (item.temp < -18) statusText = "Glacial";
        else if (item.temp <= 0) statusText = "Frozen";

        tr.innerHTML = `
            <td>
                <span class="record-tbl-name">${item.name}</span>
                <span class="record-tbl-code">${item.code}</span>
            </td>
            <td class="record-tbl-location">
                <i class="fa-solid fa-location-dot"></i> ${item.state}, ${item.country}
            </td>
            <td><strong>${item.capacity.toLocaleString()}</strong></td>
            <td><strong style="color: var(--frost-light);">${item.temp}°C</strong></td>
            <td>
                <span class="table-status-pill ${statusText.toLowerCase()}">${statusText}</span>
            </td>
            <td>
                <button class="btn-tbl-action btn-profile-view" data-id="${item.id}">Radar Lock</button>
            </td>
        `;

        // Profile view link
        tr.querySelector(".btn-profile-view").addEventListener("click", (e) => {
            e.stopPropagation();
            selectUnit(item.id);
            // Smooth scroll to card viewport
            document.getElementById("unit-detail-card").scrollIntoView({ behavior: "smooth", block: "center" });
        });

        // Row select
        tr.addEventListener("click", () => {
            selectUnit(item.id);
        });

        registryTableBody.appendChild(tr);
    });

    // Pagination update
    const totalCount = filteredStorage.length;
    const finalEndIdx = Math.min(endIdx, totalCount);
    paginationInfoText.textContent = `Showing ${totalCount === 0 ? 0 : startIdx + 1}-${finalEndIdx} of ${totalCount} records`;

    btnPrevPage.disabled = currentTablePage === 1;
    btnNextPage.disabled = endIdx >= totalCount;
}

// -------------------------------------------------------------
// SCRAT'S ACORN DETECTOR WIDGET (INTERACTIVE TOOL)
// -------------------------------------------------------------
function initScratDetector() {
    interactiveIceBlock.addEventListener("click", triggerScratSniffAnimation);
    btnScratSniff.addEventListener("click", runCoordDetection);
    btnGpsDetect.addEventListener("click", runGpsDetection);
}

function triggerScratSniffAnimation() {
    if (interactiveIceBlock.classList.contains("cracking")) return;

    // Trigger visual shake
    interactiveIceBlock.classList.add("cracking");
    detectorStatusMsg.textContent = "Scrat is sniffing the frost line... 👃";

    // Animate sprite coming down
    scratSpriteElement.style.top = "15px";
    scratSpriteElement.style.left = "40px";

    setTimeout(() => {
        // Stop shaking and choose closest item
        interactiveIceBlock.classList.remove("cracking");
        
        // Grab inputs or select default
        let targetLat = parseFloat(inputLatitude.value);
        let targetLon = parseFloat(inputLongitude.value);

        if (isNaN(targetLat) || isNaN(targetLon)) {
            // Default to Delhi coords if none specified
            targetLat = 28.6139;
            targetLon = 77.2090;
            inputLatitude.value = "28.614";
            inputLongitude.value = "77.209";
        }

        const closestUnit = findNearestColdStorage(targetLat, targetLon);
        
        // Show success result
        scratSpriteElement.style.top = "-50px"; // retract
        detectorStatusMsg.innerHTML = `
            <strong style="color: var(--frost-light);">Found Acorn! 🌰</strong> Near ${closestUnit.name} (${closestUnit.state}, ${closestUnit.country}).
        `;

        // Alert toast
        showToast(`Acorn Radar Locked: ${closestUnit.name}!`);

        // Force Selection
        selectUnit(closestUnit.id);
        
        // Render and view on radar
        if (closestUnit.country === "India") {
            currentMapView = "india";
            btnViewIndia.classList.add("active");
            btnViewGlobal.classList.remove("active");
        } else {
            currentMapView = "global";
            btnViewGlobal.classList.add("active");
            btnViewIndia.classList.remove("active");
        }
        renderMapNodes();

    }, 2000);
}

function runCoordDetection() {
    const lat = parseFloat(inputLatitude.value);
    const lon = parseFloat(inputLongitude.value);

    if (isNaN(lat) || isNaN(lon)) {
        detectorStatusMsg.textContent = "Please input valid Coordinates! ❄️";
        return;
    }
    triggerScratSniffAnimation();
}

function runGpsDetection() {
    detectorStatusMsg.textContent = "Sensing signals... 🛰️";
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                inputLatitude.value = position.coords.latitude.toFixed(4);
                inputLongitude.value = position.coords.longitude.toFixed(4);
                detectorStatusMsg.textContent = "Coordinates loaded! Crack the ice to locate.";
                triggerScratSniffAnimation();
            },
            (error) => {
                detectorStatusMsg.textContent = "GPS Access Denied. Setting default Coordinates.";
                inputLatitude.value = "28.6139";
                inputLongitude.value = "77.2090";
                triggerScratSniffAnimation();
            }
        );
    } else {
        detectorStatusMsg.textContent = "Geolocation unsupported. Setting default Coordinates.";
        inputLatitude.value = "28.6139";
        inputLongitude.value = "77.2090";
        triggerScratSniffAnimation();
    }
}

// Find nearest unit utilizing Haversine distance formula
function findNearestColdStorage(lat, lon) {
    let nearest = coldStorageData[0];
    let minDistance = Infinity;

    coldStorageData.forEach(item => {
        const d = haversineDistance(lat, lon, item.coords.lat, item.coords.lon);
        if (d < minDistance) {
            minDistance = d;
            nearest = item;
        }
    });

    return nearest;
}

function haversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

// -------------------------------------------------------------
// CARVE REGISTRY FORM SUBMISSION
// -------------------------------------------------------------
function handleCarveSubmit(e) {
    e.preventDefault();
    
    // Grab input values
    const nameVal = document.getElementById("reg-name").value.trim();
    const countryVal = document.getElementById("reg-country").value;
    const stateVal = document.getElementById("reg-state").value.trim();
    const capacityVal = parseInt(document.getElementById("reg-capacity").value);
    const tempVal = parseInt(document.getElementById("reg-temp").value);
    const latVal = parseFloat(document.getElementById("reg-lat").value);
    const lonVal = parseFloat(document.getElementById("reg-lon").value);
    const sectorsVal = document.getElementById("reg-sectors").value.trim();

    // Validation Flags
    let isValid = true;

    // Reset error display
    const inputs = formCarveStorage.querySelectorAll("input, select");
    inputs.forEach(input => {
        const parent = input.closest(".form-group");
        if (parent) {
            parent.classList.remove("has-error");
            const errSpan = parent.querySelector(".form-error-msg");
            if (errSpan) errSpan.style.display = "none";
        }
    });

    // Validate fields
    if (!nameVal) {
        showError("reg-name", "Facility name is required.");
        isValid = false;
    }
    if (!countryVal) {
        showError("reg-country", "Country selection is required.");
        isValid = false;
    }
    if (!stateVal) {
        showError("reg-state", "State/Province is required.");
        isValid = false;
    }
    if (isNaN(capacityVal) || capacityVal <= 0) {
        showError("reg-capacity", "Enter a valid positive capacity in Metric Tons.");
        isValid = false;
    }
    if (isNaN(tempVal) || tempVal > 15 || tempVal < -50) {
        showError("reg-temp", "Enter a valid temperature between -50°C and 15°C.");
        isValid = false;
    }
    if (isNaN(latVal) || latVal < -90 || latVal > 90) {
        showError("reg-lat", "Enter a valid Latitude (-90 to 90).");
        isValid = false;
    }
    if (isNaN(lonVal) || lonVal < -180 || lonVal > 180) {
        showError("reg-lon", "Enter a valid Longitude (-180 to 180).");
        isValid = false;
    }

    if (!isValid) return;

    // Success - Create new record
    const nextId = coldStorageData.length + 1;
    const countryPrefix = countryVal === "India" ? "IND" : "GLB";
    const nextCode = `CS-${countryPrefix}-${nextId < 10 ? '0' + nextId : nextId}`;

    const newRecord = {
        id: nextId,
        code: nextCode,
        name: nameVal,
        state: stateVal,
        country: countryVal,
        capacity: capacityVal,
        temp: tempVal,
        type: tempVal <= -18 ? "Deep Freeze" : (tempVal <= 0 ? "Frozen Chamber" : "Chilled Chamber"),
        sectors: sectorsVal || "Fresh Produce",
        coords: { lat: latVal, lon: lonVal },
        efficiency: Math.floor(Math.random() * 2) + 4, // 4-5 stars randomly
        diagnostics: {
            humidity: Math.floor(Math.random() * 15) + 80, // 80-95%
            compressorLoad: Math.floor(Math.random() * 30) + 60, // 60-90%
            frostAccumulation: Math.floor(Math.random() * 20) + 5 // 5-25%
        }
    };

    // Prepend to dataset
    coldStorageData.unshift(newRecord);

    // Reset Form
    formCarveStorage.reset();

    // Trigger Notification Toast
    showToast(`Carved Registry successfully: ${newRecord.code}!`);

    // Update statistics and view
    updateGeneralStats();
    applyFilters();
    selectUnit(newRecord.id);

    // Scroll to dashboard map view
    document.getElementById("radar-section").scrollIntoView({ behavior: "smooth" });
}

function showError(fieldId, msg) {
    const field = document.getElementById(fieldId);
    const parent = field.closest(".form-group");
    if (parent) {
        parent.classList.add("has-error");
        const errSpan = parent.querySelector(".form-error-msg");
        if (errSpan) {
            errSpan.textContent = msg;
            errSpan.style.display = "block";
        }
    }
}

function showToast(msg) {
    toastMessageText.textContent = msg;
    toastBanner.classList.remove("hidden");
    
    // Clear previous timeouts if any
    if (window.toastTimeout) clearTimeout(window.toastTimeout);
    
    window.toastTimeout = setTimeout(() => {
        toastBanner.classList.add("hidden");
    }, 4000);
}

// -------------------------------------------------------------
// AMBIENT FALLING SNOW (CANVAS BACKGROUND)
// -------------------------------------------------------------
function initSnowCanvas() {
    const canvas = document.getElementById("snow-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId = null;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Resizing window handler
    window.addEventListener("resize", () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    });

    // Particle class
    class Flake {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * -height;
            this.r = Math.random() * 3 + 1; // Flake size
            this.d = Math.random() * 1 + 0.3; // Fall speed
            this.swing = Math.random() * 1.5 - 0.75; // Left/Right sway
            this.swingSpeed = Math.random() * 0.02 + 0.005;
            this.swingVal = Math.random() * 100;
        }

        update() {
            this.y += this.d;
            this.swingVal += this.swingSpeed;
            this.x += Math.sin(this.swingVal) * this.swing;

            if (this.y > height || this.x < -10 || this.x > width + 10) {
                this.reset();
                this.y = -10; // start slightly offscreen top
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(245, 246, 250, 0.65)";
            ctx.fill();
        }
    }

    const flakes = [];
    const maxFlakes = 60;
    for (let i = 0; i < maxFlakes; i++) {
        flakes.push(new Flake());
    }

    function animateSnow() {
        ctx.clearRect(0, 0, width, height);
        
        flakes.forEach(flake => {
            flake.update();
            flake.draw();
        });

        animationId = requestAnimationFrame(animateSnow);
    }

    animateSnow();
}
