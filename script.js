const productGallery = {
    2: ['images/rtx5080-1.jpg', 'images/rtx5080-2.jpg', 'images/rtx5080-3.jpg', 'images/rtx5080-4.jpg', 'images/rtx5080-5.jpg'],
    43: ['images/rtx5070ti-1.jpg', 'images/rtx5070ti-2.jpg', 'images/rtx5070ti-3.jpg', 'images/rtx5070ti-4.jpg', 'images/rtx5070ti-5.jpg'],
    44: ['images/rtx4080-1.jpg', 'images/rtx4080-2.jpg', 'images/rtx4080-3.jpg', 'images/rtx4080-4.jpg', 'images/rtx4080-5.jpg', 'images/rtx4080-6.jpg'],
    45: ['images/rtx3080-1.jpg', 'images/rtx3080-2.jpg', 'images/rtx3080-3.jpg', 'images/rtx3080-4.jpg', 'images/rtx3080-5.jpg', 'images/rtx3080-6.jpg'],
    46: ['images/rtx3080palit-1.jpg', 'images/rtx3080palit-2.jpg', 'images/rtx3080palit-3.jpg', 'images/rtx3080palit-4.jpg', 'images/rtx3080palit-5.jpg'],
    47: ['images/rtx3080gainward-1.jpg', 'images/rtx3080gainward-2.jpg', 'images/rtx3080gainward-3.jpg', 'images/rtx3080gainward-4.jpg', 'images/rtx3080gainward-5.jpg'],
    48: ['images/rtx3080eagle-1.jpg', 'images/rtx3080eagle-2.jpg', 'images/rtx3080eagle-3.jpg', 'images/rtx3080eagle-4.jpg', 'images/rtx3080eagle-5.jpg'],
    49: ['images/rtx4060gigabyte-1.jpg', 'images/rtx4060gigabyte-2.jpg', 'images/rtx4060gigabyte-3.jpg', 'images/rtx4060gigabyte-4.jpg', 'images/rtx4060gigabyte-5.jpg'],
};

const categoryLabels = {
    gpu: 'Видеокарта', cpu: 'Процессор', motherboard: 'Материнская плата',
    ram: 'ОЗУ', storage: 'Накопитель',
};

const categoryImage = {
    gpu: 'images/gpu.png', cpu: 'images/cpu.png', motherboard: 'images/motherboard.png',
    ram: 'images/ram.png', storage: 'images/storage.png', pc: 'images/pc.png',
};

const products = [
    { id: 2, name: "RTX 5080 Msi Shadow 3x OC 16Gb", category: "gpu", price: 105000, inStock: true, specs: "", desc: "Видеокарта Новая, ОЕМ. Состояние идеальное! Проверена всеми тестами, работает без нареканий!", emoji: "🖥️" },
    { id: 43, name: "RTX 5070Ti Gigabyte Aorus 16Gb", category: "gpu", price: 100000, inStock: true, specs: "", desc: "Видеокарта Новая, ОЕМ. Состояние идеальное! Проверена всеми тестами, работает без нареканий!", emoji: "🖥️" },
    { id: 44, name: "RTX 4080 Gigabyte WindForce 16Gb", category: "gpu", price: 70000, inStock: true, specs: "", desc: "Видеокарта б/у, полный комплект. Состояние хорошее, проверена всеми тестами, работает без нареканий!", emoji: "🖥️" },
    { id: 45, name: "RTX 3080 MSI Ventus 3X 10Gb", category: "gpu", price: 29000, inStock: true, specs: "", desc: "Видеокарта б/у, оем. Проверена всеми тестами, работает без нареканий! Поменяна термопаста и прокладки на памяти!", emoji: "🖥️" },
    { id: 46, name: "RTX 3080 Palit GamingPro 10Gb", category: "gpu", price: 28000, inStock: true, specs: "", desc: "Видеокарты б/у, оем. Состояние хорошее! Проверены всеми тестами, работают без нареканий!", emoji: "🖥️" },
    { id: 47, name: "RTX 3080 Gainward Phoenix 10Gb", category: "gpu", price: 27500, inStock: true, specs: "", desc: "Видеокарты б/у, оем. Состояние хорошее! Проверены всеми тестами, работают без нареканий!", emoji: "🖥️" },
    { id: 48, name: "RTX 3080 Gigabyte Eagle 10Gb", category: "gpu", price: 28000, inStock: true, specs: "", desc: "Видеокарта б/у, оем. Проверена всеми тестами, работает без нареканий! Поменяна термопаста и прокладки на памяти! Имеются небольшие следы коррозии на радиаторе. На работу не влияют!", emoji: "🖥️" },
    { id: 49, name: "RTX 4060 Gigabyte WF2 OC 8Gb", category: "gpu", price: 23000, inStock: true, specs: "", desc: "Видеокарта б/у, полный комплект. Хорошее состояние! Проверена всеми тестами, работает без нареканий!", emoji: "🖥️" },
    { id: 8, name: "Intel Core i9-14900K", category: "cpu", price: 64990, specs: "24 ядра / 32 потока, до 6.0 GHz", emoji: "⚡" },
    { id: 9, name: "AMD Ryzen 9 7950X3D", category: "cpu", price: 74990, specs: "16 ядер / 32 потока, до 5.7 GHz", emoji: "⚡" },
    { id: 10, name: "Intel Core i7-14700K", category: "cpu", price: 44990, specs: "20 ядер / 28 потоков, до 5.6 GHz", emoji: "⚡" },
    { id: 11, name: "AMD Ryzen 7 7800X3D", category: "cpu", price: 54990, specs: "8 ядер / 16 потоков, до 5.0 GHz", emoji: "⚡" },
    { id: 12, name: "Intel Core i5-14600K", category: "cpu", price: 29990, specs: "14 ядер / 20 потоков, до 5.3 GHz", emoji: "⚡" },
    { id: 13, name: "ASUS ROG Strix Z790-E Gaming WiFi", category: "motherboard", price: 54990, specs: "LGA1700, DDR5, PCIe 5.0, WiFi 6E", emoji: "🔌" },
    { id: 14, name: "MSI MAG Z790 Tomahawk WiFi", category: "motherboard", price: 36990, specs: "LGA1700, DDR5, PCIe 5.0, WiFi 6E", emoji: "🔌" },
    { id: 15, name: "Gigabyte B760 AORUS Elite AX", category: "motherboard", price: 25990, specs: "LGA1700, DDR5, PCIe 4.0, WiFi 6", emoji: "🔌" },
    { id: 16, name: "ASUS TUF Gaming B650-PLUS WiFi", category: "motherboard", price: 22990, specs: "AM5, DDR5, PCIe 5.0, WiFi 6", emoji: "🔌" },
    { id: 17, name: "MSI PRO B760-P DDR4", category: "motherboard", price: 16990, specs: "LGA1700, DDR4, PCIe 4.0", emoji: "🔌" },
    { id: 18, name: "Kingston Fury Beast DDR5-5600 32GB", category: "ram", price: 11990, specs: "32GB (2x16GB), DDR5, 5600MHz, CL36", emoji: "🧠" },
    { id: 19, name: "Corsair Vengeance DDR5-6000 32GB", category: "ram", price: 14990, specs: "32GB (2x16GB), DDR5, 6000MHz, CL30", emoji: "🧠" },
    { id: 20, name: "G.Skill Trident Z5 RGB DDR5-6400 32GB", category: "ram", price: 17990, specs: "32GB (2x16GB), DDR5, 6400MHz, CL32", emoji: "🧠" },
    { id: 21, name: "Samsung DDR4-3200 32GB Kit", category: "ram", price: 7990, specs: "32GB (2x16GB), DDR4, 3200MHz, CL22", emoji: "🧠" },
    { id: 22, name: "Patriot Viper DDR4-3600 16GB", category: "ram", price: 4990, specs: "16GB (2x8GB), DDR4, 3600MHz, CL18", emoji: "🧠" },
    { id: 23, name: "Samsung 990 Pro 2TB NVMe", category: "storage", price: 23990, specs: "2TB, M.2 NVMe PCIe 4.0, 7450MB/s", emoji: "💾" },
    { id: 24, name: "WD Black SN850X 1TB NVMe", category: "storage", price: 13990, specs: "1TB, M.2 NVMe PCIe 4.0, 7300MB/s", emoji: "💾" },
    { id: 25, name: "Seagate Barracuda 2TB HDD", category: "storage", price: 5990, specs: "2TB, 3.5\", 7200RPM, SATA III", emoji: "💾" },
    { id: 26, name: "Kingston KC3000 1TB NVMe", category: "storage", price: 9990, specs: "1TB, M.2 NVMe PCIe 4.0, 7000MB/s", emoji: "💾" },
    { id: 27, name: "Crucial P3 Plus 500GB NVMe", category: "storage", price: 4990, specs: "500GB, M.2 NVMe PCIe 4.0, 5000MB/s", emoji: "💾" },
];


const prebuiltPCs = [
    { id: 201, name: "PC-START", price: 69990, tier: "fhd", specs: "i5-14600K, RTX 4060, 16GB DDR5, 512GB NVMe", emoji: "🖥️", desc: "Отличный старт для Full HD игр. Запускает все современные игры на средних-высоких настройках." },
    { id: 202, name: "PC-STANDARD", price: 109990, tier: "fhd", specs: "Ryzen 7 7800X3D, RTX 4070, 32GB DDR5, 1TB NVMe", emoji: "🖥️", desc: "Идеальный баланс. Максимальные настройки в Full HD, уверенный 2K." },
    { id: 203, name: "PC-PRO", price: 159990, tier: "qhd", specs: "i7-14700K, RTX 4080 Super, 32GB DDR5, 2TB NVMe", emoji: "🖥️", desc: "Для 2K гейминга на максималках. Запас на годы вперёд." },
    { id: 204, name: "PC-ULTRA", price: 249990, tier: "uhd", specs: "Ryzen 9 7950X3D, RTX 5090, 64GB DDR5, 2TB NVMe", emoji: "🖥️", desc: "Флагман. 4K gaming с высоким FPS в самых требовательных играх." },
    { id: 205, name: "PC-WORK", price: 89990, tier: "work", specs: "i9-14900K, RTX 4060, 64GB DDR5, 1TB NVMe", emoji: "🖥️", desc: "Для работы с видео, 3D и компиляции. Мощный процессор + много памяти." },
    { id: 206, name: "PC-STREAM", price: 139990, tier: "qhd", specs: "i7-14700K, RTX 4070 Ti, 32GB DDR5, 2TB NVMe + 1TB HDD", emoji: "🖥️", desc: "Для стримов и контента. Два накопителя, мощная видеокарта." },
    { id: 207, name: "PC-BUDGET", price: 49990, tier: "fhd", specs: "i5-12400F, RTX 4060, 16GB DDR4, 512GB NVMe", emoji: "🖥️", desc: "Бюджетная сборка для киберспорта и нетребовательных игр." },
    { id: 208, name: "PC-PROFI", price: 349990, tier: "uhd", specs: "i9-14900K, RTX 5090, 96GB DDR5, 4TB NVMe", emoji: "🖥️", desc: "Максимальная мощность. Для 8K видео, AI, 3D рендеринга и игр на ультра." },
];

const lineups = [
    { name: "PC-START", price: "от 49 990 ₽", desc: "Для Full HD игр и работы", specs: ["Intel Core i5", "NVIDIA GeForce RTX 4060", "16GB DDR5", "512GB NVMe"] },
    { name: "PC-STANDARD", price: "от 109 990 ₽", desc: "Идеальный баланс для 2K", specs: ["AMD Ryzen 7 7800X3D", "NVIDIA GeForce RTX 4070", "32GB DDR5", "1TB NVMe"] },
    { name: "PC-ULTRA", price: "от 249 990 ₽", desc: "Флагман для 4K гейминга", specs: ["AMD Ryzen 9 7950X3D", "NVIDIA GeForce RTX 5090", "64GB DDR5", "2TB NVMe"] },
];


const configComponents = {
    cpu: [
        { name: "Intel Core i5-14600K", price: 29990, socket: "lga1700", emoji: "⚡" },
        { name: "Intel Core i7-14700K", price: 44990, socket: "lga1700", emoji: "⚡" },
        { name: "Intel Core i9-14900K", price: 64990, socket: "lga1700", emoji: "⚡" },
        { name: "AMD Ryzen 7 7800X3D", price: 54990, socket: "am5", emoji: "⚡" },
        { name: "AMD Ryzen 9 7950X3D", price: 74990, socket: "am5", emoji: "⚡" },
    ],
    gpu: [
        { name: "RTX 5080 Msi Shadow 3x OC 16Gb", price: 105000, emoji: "🖥️" },
        { name: "RTX 5070Ti Gigabyte Aorus 16Gb", price: 100000, emoji: "🖥️" },
        { name: "RTX 4080 Gigabyte WindForce 16Gb", price: 70000, emoji: "🖥️" },
        { name: "RTX 3080 MSI Ventus 3X 10Gb", price: 29000, emoji: "🖥️" },
        { name: "RTX 3080 Palit GamingPro 10Gb", price: 28000, emoji: "🖥️" },
        { name: "RTX 3080 Gainward Phoenix 10Gb", price: 27500, emoji: "🖥️" },
        { name: "RTX 3080 Gigabyte Eagle 10Gb", price: 28000, emoji: "🖥️" },
        { name: "RTX 4060 Gigabyte WF2 OC 8Gb", price: 23000, emoji: "🖥️" },
    ],
    motherboard: [
        { name: "MSI PRO B760-P DDR4", price: 16990, socket: "lga1700", emoji: "🔌" },
        { name: "Gigabyte B760 AORUS Elite AX", price: 25990, socket: "lga1700", emoji: "🔌" },
        { name: "MSI MAG Z790 Tomahawk WiFi", price: 36990, socket: "lga1700", emoji: "🔌" },
        { name: "ASUS ROG Strix Z790-E Gaming", price: 54990, socket: "lga1700", emoji: "🔌" },
        { name: "ASUS TUF Gaming B650-PLUS WiFi", price: 22990, socket: "am5", emoji: "🔌" },
    ],
    ram: [
        { name: "Patriot Viper DDR4-3600 16GB", price: 4990, emoji: "🧠" },
        { name: "Samsung DDR4-3200 32GB Kit", price: 7990, emoji: "🧠" },
        { name: "Kingston Fury Beast DDR5-5600 32GB", price: 11990, emoji: "🧠" },
        { name: "Corsair Vengeance DDR5-6000 32GB", price: 14990, emoji: "🧠" },
        { name: "G.Skill Trident Z5 RGB DDR5-6400 32GB", price: 17990, emoji: "🧠" },
        { name: "Corsair Dominator DDR5-6800 64GB", price: 35990, emoji: "🧠" },
    ],
    storage: [
        { name: "Crucial P3 Plus 500GB NVMe", price: 4990, emoji: "💾" },
        { name: "Kingston KC3000 1TB NVMe", price: 9990, emoji: "💾" },
        { name: "WD Black SN850X 1TB NVMe", price: 13990, emoji: "💾" },
        { name: "Samsung 990 Pro 2TB NVMe", price: 23990, emoji: "💾" },
        { name: "Seagate Barracuda 2TB HDD", price: 5990, emoji: "💾" },
    ],
};

const configLabels = { cpu: 'Процессор', gpu: 'Видеокарта', motherboard: 'Материнская плата', ram: 'ОЗУ', storage: 'Накопитель' };
const configStepOrder = ['cpu', 'gpu', 'motherboard', 'ram', 'storage'];

let cart = [];
let currentPage = 'main';

let configSelection = {};
let filterState = { main: 'all', pcs: 'all', components: 'all' };

function formatPrice(p) { return p.toLocaleString('ru-RU') + ' ₽'; }

function renderProducts(gridId, items, filter) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    const isBuilds = items === prebuiltPCs;
    const filtered = filter === 'all' ? items : items.filter(p => isBuilds ? p.tier === filter : p.category === filter);
    if (filtered.length === 0) { grid.innerHTML = '<p style="color: var(--text-muted); text-align: center; grid-column: 1/-1; padding: 40px 0;">Товары не найдены</p>'; return; }
    grid.innerHTML = filtered.map(p => {
        const type = p.tier ? 'build' : 'product';
        const imgSrc = p.tier ? categoryImage.pc : (categoryImage[p.category] || '');
        const categoryLabel = p.tier ? ({'fhd':'Full HD','qhd':'2K','uhd':'4K','work':'Для работы'}[p.tier] || '') : (categoryLabels[p.category] || '');
        const isOutOfStock = isBuilds;
        const isInStock = p.inStock;
        const badge = isOutOfStock ? '<span class="badge badge-out">Нет в Наличии</span>' : (isInStock ? '<span class="badge badge-in">В НАЛИЧИИ</span>' : '');
        const btnDisabled = isOutOfStock;
        const btnText = isOutOfStock ? 'Нет в наличии' : (isInStock ? 'В корзину' : 'В корзину');
        const btnAction = isOutOfStock ? "showNotification('Товара нет в наличии')" : "addToCart("+p.id+",'"+type+"')";
        const gallery = productGallery[p.id];
        const galleryThumbs = gallery ? `
            <div class="product-gallery-thumbs">
                ${gallery.map((img, i) => `<img src="${img}" class="gallery-thumb" data-id="${p.id}" data-index="${i}" onclick="openLightbox(${p.id}, ${i})" loading="lazy">`).join('')}
            </div>` : '';
        return `
        <div class="product-card">
            <div class="product-image" style="background-image:url('${gallery ? gallery[0] : imgSrc}');background-size:cover;background-position:center;position:relative;">
                <span style="position:absolute;inset:0;background:linear-gradient(180deg,transparent 60%,var(--bg-primary));"></span>
                ${badge}
            </div>
            ${galleryThumbs}
            <div class="product-info">
                <div class="product-category">${categoryLabel}</div>
                <div class="product-name">${p.name}</div>
                ${p.specs ? `<div class="product-specs">${p.specs}</div>` : ''}
                ${p.desc ? `<div class="product-desc">${p.desc}</div>` : ''}
                <div class="product-price">${formatPrice(p.price)}</div>
                <button class="add-to-cart-btn ${btnDisabled ? 'disabled' : ''}" onclick="${btnAction}">${btnText}</button>
            </div>
        </div>`;
    }).join('');
}

function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const el = document.getElementById('page-' + page);
    if (el) el.classList.add('active');
    document.querySelectorAll('.nav-link').forEach(l => l.classList.toggle('active', l.dataset.page === page));
    currentPage = page;
    document.getElementById('navLinks').classList.remove('open');
    const f = filterState[page] || 'all';
    if (page === 'pcs') {
        document.querySelectorAll('#page-pcs .filter-btn').forEach(b => b.classList.toggle('active', b.dataset.filter === f || (f === 'all' && b.dataset.filter === 'all')));
        renderProducts('builds-grid', prebuiltPCs, f);
    }
    if (page === 'components') {
        document.querySelectorAll('#page-components .filter-btn').forEach(b => b.classList.toggle('active', b.dataset.filter === f || (f === 'all' && b.dataset.filter === 'all')));
        renderProducts('components-grid', products, f);
    }

    if (page === 'configurator') initConfigurator();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function filterBuilds(filter) {
    filterState.pcs = filter;
    document.querySelectorAll('#page-pcs .filter-btn').forEach(b => b.classList.toggle('active', b.dataset.filter === filter || (filter === 'all' && b.dataset.filter === 'all')));
    renderProducts('builds-grid', prebuiltPCs, filter);
}

function filterComponents(filter) {
    filterState.components = filter;
    document.querySelectorAll('#page-components .filter-btn').forEach(b => b.classList.toggle('active', b.dataset.filter === filter || (filter === 'all' && b.dataset.filter === 'all')));
    renderProducts('components-grid', products, filter);
}


function initCatalogFilters() {
    const catKeys = ['gpu','cpu','motherboard','ram','storage'];
    const filtersEl = document.getElementById('catalog-filters');
    filtersEl.innerHTML = catKeys.map(c => `<button class="filter-btn" data-filter="${c}" onclick="filterCatalog('${c}')">${categoryLabels[c]}</button>`).join('') +
        `<button class="filter-btn active" data-filter="all" onclick="filterCatalog('all')">Все</button>`;
    renderProducts('catalog-grid', products, 'all');
}

function filterCatalog(filter) {
    filterState.main = filter;
    document.querySelectorAll('#catalog-filters .filter-btn').forEach(b => b.classList.toggle('active', b.dataset.filter === filter || (filter === 'all' && b.dataset.filter === 'all')));
    renderProducts('catalog-grid', products, filter);
}

function addToCart(id, type) {
    let product;
    if (type === 'build') product = prebuiltPCs.find(p => p.id === id);
    else if (type === 'peripheral') product = peripherals.find(p => p.id === id);
    else product = products.find(p => p.id === id);
    if (!product) return;
    const existing = cart.find(item => item.id === id && item.type === type);
    if (existing) { existing.quantity++; }
    else { cart.push({ ...product, quantity: 1, type }); }
    updateCartUI();
    showNotification(`${product.name} добавлен в корзину`);
}

function removeFromCart(id, type) {
    cart = cart.filter(item => !(item.id === id && item.type === type));
    updateCartUI();
}

function updateCartUI() {
    const count = cart.reduce((s, i) => s + i.quantity, 0);
    document.getElementById('cart-count').textContent = count;
    const container = document.getElementById('cart-items');
    if (cart.length === 0) {
        container.innerHTML = '<p class="cart-empty">Корзина пуста</p>';
    } else {
        container.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">${item.emoji}</div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${formatPrice(item.price)} x${item.quantity}</div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id}, '${item.type}')">&times;</button>
            </div>
        `).join('');
    }
    const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);
    document.getElementById('cart-total-price').textContent = formatPrice(total);
}

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('open');
    document.getElementById('cart-overlay').classList.toggle('open');
}

function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('open');
}

let lightboxProductId = null;
let lightboxIndex = 0;

function openLightbox(productId, index) {
    const gallery = productGallery[productId];
    if (!gallery) return;
    lightboxProductId = productId;
    lightboxIndex = index;
    document.getElementById('lightbox-image').src = gallery[index];
    const dots = document.getElementById('lightbox-dots');
    dots.innerHTML = gallery.map((_, i) => `<button class="lightbox-dot${i === index ? ' active' : ''}" onclick="openLightbox(${productId}, ${i})"></button>`).join('');
    document.getElementById('lightbox').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLightbox(e) {
    if (e && e.target !== e.currentTarget && !e.target.classList.contains('lightbox-close') && !e.target.classList.contains('lightbox-overlay')) return;
    document.getElementById('lightbox').classList.remove('open');
    document.body.style.overflow = '';
}

function lightboxNav(dir) {
    const gallery = productGallery[lightboxProductId];
    if (!gallery) return;
    lightboxIndex = (lightboxIndex + dir + gallery.length) % gallery.length;
    openLightbox(lightboxProductId, lightboxIndex);
}

document.addEventListener('keydown', (e) => {
    if (!document.getElementById('lightbox').classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox(e);
    if (e.key === 'ArrowLeft') lightboxNav(-1);
    if (e.key === 'ArrowRight') lightboxNav(1);
});

function showNotification(message) {
    const el = document.getElementById('notification');
    el.textContent = message;
    el.classList.remove('show');
    void el.offsetWidth;
    el.classList.add('show');
    clearTimeout(el._timeout);
    el._timeout = setTimeout(() => el.classList.remove('show'), 2500);
}

function checkout() {
    if (cart.length === 0) { showNotification('Корзина пуста'); return; }
    const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);
    showNotification(`Заказ оформлен! Сумма: ${formatPrice(total)}`);
    cart = [];
    updateCartUI();
    toggleCart();
}

function initConfigurator() {
    const container = document.getElementById('config-steps');
    container.innerHTML = configStepOrder.map(key => `
        <div class="config-step" data-step="${key}">
            <div class="config-step-header" onclick="toggleConfigStep(this)">
                <span>${configLabels[key]}</span>
                <span class="step-indicator" id="step-indicator-${key}">Не выбрано</span>
            </div>
            <div class="config-step-body" id="step-body-${key}">
                <div class="config-options">
                    ${configComponents[key].map((item, idx) => `
                        <label class="config-option${configSelection[key]?.name === item.name ? ' selected' : ''}">
                            <input type="radio" name="cfg-${key}" value="${idx}" ${configSelection[key]?.name === item.name ? 'checked' : ''} onchange="selectConfigPart('${key}', ${idx})">
                            <span style="font-size:20px">${item.emoji}</span>
                            <div class="config-option-info">
                                <div class="config-option-name">${item.name}</div>
                                <div class="config-option-spec">${item.socket ? 'Сокет: ' + item.socket.toUpperCase() : ''}</div>
                            </div>
                            <span class="config-option-price">${formatPrice(item.price)}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
    updateConfigSummary();
}

function toggleConfigStep(header) {
    const body = header.nextElementSibling;
    body.classList.toggle('open');
}

function selectConfigPart(key, idx) {
    configSelection[key] = configComponents[key][idx];
    document.querySelectorAll(`#step-body-${key} .config-option`).forEach((el, i) => {
        el.classList.toggle('selected', i === idx);
    });
    document.getElementById(`step-indicator-${key}`).textContent = configComponents[key][idx].name;
    updateConfigSummary();
}

function updateConfigSummary() {
    const container = document.getElementById('config-build');
    container.innerHTML = configStepOrder.map(key => {
        const sel = configSelection[key];
        return `<div class="config-build-item">
            <span class="item-name">${configLabels[key]}</span>
            ${sel ? `<span class="item-price">${formatPrice(sel.price)}</span>` : `<span class="item-empty">—</span>`}
        </div>`;
    }).join('');
    const total = configStepOrder.reduce((s, key) => {
        const sel = configSelection[key];
        return s + (sel ? sel.price : 0);
    }, 0);
    document.getElementById('config-total-price').textContent = formatPrice(total);
}

function addConfigToCart() {
    const selected = configStepOrder.filter(k => configSelection[k]);
    if (selected.length === 0) { showNotification('Выберите хотя бы один компонент'); return; }
    const total = configStepOrder.reduce((s, k) => s + (configSelection[k] ? configSelection[k].price : 0), 0);
    const names = selected.map(k => configSelection[k].name).join(', ');
    const cfgId = Date.now();
    cart.push({ id: cfgId, name: 'Сборка: ' + selected.length + ' компонентов', price: total, quantity: 1, type: 'config', specs: names, emoji: '🖥️' });
    updateCartUI();
    showNotification('Сборка добавлена в корзину!');
}

function renderLineups() {
    const grid = document.getElementById('lineups-grid');
    grid.innerHTML = lineups.map(l => `
        <div class="lineup-card" onclick="showPage('pcs')">
            <div class="lineup-card-header">
                <span class="lineup-card-name">${l.name} <span class="badge badge-out" style="position:static;display:inline-block;margin-left:8px;vertical-align:middle;font-size:10px;">Нет в Наличии</span></span>
                <span class="lineup-card-price">${l.price}</span>
            </div>
            <div class="lineup-card-body">
                <p style="color:var(--text-secondary);font-size:14px;margin-bottom:12px">${l.desc}</p>
                ${l.specs.map(s => `<div class="lineup-card-spec">${s}</div>`).join('')}
            </div>
            <div class="lineup-card-footer">
                <span style="color:var(--accent);font-weight:600;font-size:14px">Подробнее →</span>
            </div>
        </div>
    `).join('');
}


let currentUser = JSON.parse(localStorage.getItem('sgc_user') || 'null');

function toggleAuth() {
    document.getElementById('auth-overlay').classList.toggle('open');
    document.getElementById('auth-modal').classList.toggle('open');
    if (document.getElementById('auth-modal').classList.contains('open')) {
        setTimeout(renderGoogleBtn, 300);
    }
}

function switchAuthTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
    document.querySelectorAll('.auth-fields').forEach(f => f.classList.toggle('active', f.id === 'auth-fields-' + tab));
    document.getElementById('auth-title').textContent = tab === 'login' ? 'Вход' : 'Регистрация';
    document.getElementById('auth-submit-btn').textContent = tab === 'login' ? 'Войти' : 'Зарегистрироваться';
    document.getElementById('auth-error').textContent = '';
}

function handleAuth(e) {
    e.preventDefault();
    const isLogin = document.querySelector('.auth-tab.active').dataset.tab === 'login';
    const errorEl = document.getElementById('auth-error');
    errorEl.textContent = '';

    if (isLogin) {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const users = JSON.parse(localStorage.getItem('sgc_users') || '{}');
        const user = users[email];
        if (!user || user.password !== password) {
            errorEl.textContent = 'Неверный email или пароль';
            return;
        }
        currentUser = { email, name: user.name, method: 'email' };
        localStorage.setItem('sgc_user', JSON.stringify(currentUser));
    } else {
        const name = document.getElementById('reg-name').value;
        const email = document.getElementById('reg-email').value;
        const password = document.getElementById('reg-password').value;
        if (password.length < 6) {
            errorEl.textContent = 'Пароль должен быть минимум 6 символов';
            return;
        }
        const users = JSON.parse(localStorage.getItem('sgc_users') || '{}');
        if (users[email]) {
            errorEl.textContent = 'Этот email уже зарегистрирован';
            return;
        }
        users[email] = { name, password };
        localStorage.setItem('sgc_users', JSON.stringify(users));
        currentUser = { email, name, method: 'email' };
        localStorage.setItem('sgc_user', JSON.stringify(currentUser));
    }
    toggleAuth();
    updateProfileUI();
    showNotification('Добро пожаловать, ' + currentUser.name + '!');
}

function handleGoogleCredential(response) {
    try {
        const payload = JSON.parse(atob(response.credential.split('.')[1]));
        currentUser = { email: payload.email, name: payload.name || 'Google User', method: 'google', picture: payload.picture };
        localStorage.setItem('sgc_user', JSON.stringify(currentUser));
        toggleAuth();
        updateProfileUI();
        showNotification('Добро пожаловать, ' + currentUser.name + '!');
    } catch (e) {
        showNotification('Ошибка входа через Google');
    }
}

function loginGoogle() {
    const clientId = localStorage.getItem('sgc_google_client_id') || '';
    if (!clientId) {
        const id = prompt('Вставьте Google Client ID (получить: https://console.cloud.google.com):');
        if (id) {
            localStorage.setItem('sgc_google_client_id', id);
            location.reload();
        }
        return;
    }
    if (typeof google !== 'undefined' && google.accounts) {
        google.accounts.id.initialize({
            client_id: clientId,
            callback: handleGoogleCredential,
        });
        google.accounts.id.prompt();
    }
}

function renderGoogleBtn() {
    const clientId = localStorage.getItem('sgc_google_client_id');
    if (!clientId) return;
    const btnEl = document.getElementById('google-btn');
    if (!btnEl) return;
    google.accounts.id.initialize({
        client_id: clientId,
        callback: handleGoogleCredential,
    });
    google.accounts.id.renderButton(btnEl, { theme: 'outline', size: 'large', type: 'standard', text: 'signin_with', width: 370 });
}

function logoutUser() {
    currentUser = null;
    localStorage.removeItem('sgc_user');
    updateProfileUI();
    showPage('main');
    showNotification('Вы вышли из аккаунта');
}

function updateProfileUI() {
    const loggedIn = currentUser !== null;
    document.getElementById('profile-content').style.display = loggedIn ? 'block' : 'none';
    document.getElementById('profile-not-logged').style.display = loggedIn ? 'none' : 'block';
    if (loggedIn) {
        document.getElementById('profile-greeting').textContent = 'Добро пожаловать, ' + currentUser.name;
        document.getElementById('profile-name').textContent = currentUser.name;
        document.getElementById('profile-email').textContent = currentUser.email;
        document.getElementById('profile-auth-method').textContent = currentUser.method === 'google' ? 'Вход через Google' : 'Вход по email';
        document.getElementById('profile-avatar').textContent = currentUser.name.charAt(0).toUpperCase();
        const orders = JSON.parse(localStorage.getItem('sgc_orders_' + currentUser.email) || '[]');
        const ordersEl = document.getElementById('profile-orders');
        if (orders.length === 0) {
            ordersEl.innerHTML = '<p style="color:var(--text-muted)">У вас пока нет заказов</p>';
        } else {
            ordersEl.innerHTML = orders.map(o => '<div style="padding:12px 0;border-bottom:1px solid var(--border);display:flex;justify-content:space-between"><span>' + o.name + '</span><span style="color:var(--accent);font-weight:600">' + formatPrice(o.price) + '</span></div>').join('');
        }
    }
}

const origShowPage = window.showPage;
window.showPage = function(page) {
    origShowPage(page);
    if (page === 'profile') updateProfileUI();
};

const origCheckout = window.checkout;
window.checkout = function() {
    if (cart.length === 0) { showNotification('Корзина пуста'); return; }
    if (!currentUser) {
        showNotification('Войдите в аккаунт для оформления заказа');
        toggleAuth();
        return;
    }
    const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);
    const orders = JSON.parse(localStorage.getItem('sgc_orders_' + currentUser.email) || '[]');
    orders.push({ name: 'Заказ от ' + new Date().toLocaleDateString('ru-RU'), price: total, items: [...cart], date: new Date().toISOString() });
    localStorage.setItem('sgc_orders_' + currentUser.email, JSON.stringify(orders));
    showNotification('Заказ оформлен! Сумма: ' + formatPrice(total));
    cart = [];
    updateCartUI();
    toggleCart();
};

renderLineups();
initCatalogFilters();
