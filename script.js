const categoryLabels = {
    gpu: 'Видеокарта',
    cpu: 'Процессор',
    motherboard: 'Материнская плата',
    ram: 'ОЗУ',
    storage: 'Накопитель',
    psu: 'Блок питания',
    case: 'Корпус',
    cooler: 'Охлаждение',
};

const products = [
    { id: 1, name: "NVIDIA GeForce RTX 4090", category: "gpu", price: 159990, specs: "24GB GDDR6X, 384-bit, 2520 MHz", emoji: "🖥️" },
    { id: 2, name: "NVIDIA GeForce RTX 4080 Super", category: "gpu", price: 109990, specs: "16GB GDDR6X, 256-bit, 2550 MHz", emoji: "🖥️" },
    { id: 3, name: "AMD Radeon RX 7900 XTX", category: "gpu", price: 94990, specs: "24GB GDDR6, 384-bit, 2500 MHz", emoji: "🖥️" },
    { id: 4, name: "NVIDIA GeForce RTX 4070 Ti", category: "gpu", price: 79990, specs: "12GB GDDR6X, 192-bit, 2610 MHz", emoji: "🖥️" },
    { id: 5, name: "AMD Radeon RX 7800 XT", category: "gpu", price: 54990, specs: "16GB GDDR6, 256-bit, 2430 MHz", emoji: "🖥️" },
    { id: 6, name: "Intel Core i9-14900K", category: "cpu", price: 64990, specs: "24 ядра / 32 потока, до 6.0 GHz", emoji: "⚡" },
    { id: 7, name: "AMD Ryzen 9 7950X3D", category: "cpu", price: 74990, specs: "16 ядер / 32 потока, до 5.7 GHz", emoji: "⚡" },
    { id: 8, name: "Intel Core i7-14700K", category: "cpu", price: 44990, specs: "20 ядер / 28 потоков, до 5.6 GHz", emoji: "⚡" },
    { id: 9, name: "AMD Ryzen 7 7800X3D", category: "cpu", price: 54990, specs: "8 ядер / 16 потоков, до 5.0 GHz", emoji: "⚡" },
    { id: 10, name: "Intel Core i5-14600K", category: "cpu", price: 29990, specs: "14 ядер / 20 потоков, до 5.3 GHz", emoji: "⚡" },
    { id: 11, name: "ASUS ROG Strix Z790-E Gaming WiFi", category: "motherboard", price: 54990, specs: "LGA1700, DDR5, PCIe 5.0, WiFi 6E", emoji: "🔌" },
    { id: 12, name: "MSI MAG Z790 Tomahawk WiFi", category: "motherboard", price: 36990, specs: "LGA1700, DDR5, PCIe 5.0, WiFi 6E", emoji: "🔌" },
    { id: 13, name: "Gigabyte B760 AORUS Elite AX", category: "motherboard", price: 25990, specs: "LGA1700, DDR5, PCIe 4.0, WiFi 6", emoji: "🔌" },
    { id: 14, name: "ASUS TUF Gaming B650-PLUS WiFi", category: "motherboard", price: 22990, specs: "AM5, DDR5, PCIe 5.0, WiFi 6", emoji: "🔌" },
    { id: 15, name: "MSI PRO B760-P DDR4", category: "motherboard", price: 16990, specs: "LGA1700, DDR4, PCIe 4.0", emoji: "🔌" },
    { id: 16, name: "Kingston Fury Beast DDR5-5600 32GB", category: "ram", price: 11990, specs: "32GB (2x16GB), DDR5, 5600MHz, CL36", emoji: "🧠" },
    { id: 17, name: "Corsair Vengeance DDR5-6000 32GB", category: "ram", price: 14990, specs: "32GB (2x16GB), DDR5, 6000MHz, CL30", emoji: "🧠" },
    { id: 18, name: "G.Skill Trident Z5 RGB DDR5-6400 32GB", category: "ram", price: 17990, specs: "32GB (2x16GB), DDR5, 6400MHz, CL32", emoji: "🧠" },
    { id: 19, name: "Samsung DDR4-3200 32GB Kit", category: "ram", price: 7990, specs: "32GB (2x16GB), DDR4, 3200MHz, CL22", emoji: "🧠" },
    { id: 20, name: "Patriot Viper DDR4-3600 16GB", category: "ram", price: 4990, specs: "16GB (2x8GB), DDR4, 3600MHz, CL18", emoji: "🧠" },
    { id: 21, name: "Samsung 990 Pro 2TB NVMe", category: "storage", price: 23990, specs: "2TB, M.2 NVMe PCIe 4.0, 7450MB/s", emoji: "💾" },
    { id: 22, name: "WD Black SN850X 1TB NVMe", category: "storage", price: 13990, specs: "1TB, M.2 NVMe PCIe 4.0, 7300MB/s", emoji: "💾" },
    { id: 23, name: "Seagate Barracuda 2TB HDD", category: "storage", price: 5990, specs: "2TB, 3.5\", 7200RPM, SATA III", emoji: "💾" },
    { id: 24, name: "Kingston KC3000 1TB NVMe", category: "storage", price: 9990, specs: "1TB, M.2 NVMe PCIe 4.0, 7000MB/s", emoji: "💾" },
    { id: 25, name: "Crucial P3 Plus 500GB NVMe", category: "storage", price: 4990, specs: "500GB, M.2 NVMe PCIe 4.0, 5000MB/s", emoji: "💾" },
    { id: 26, name: "Corsair RM850x 850W", category: "psu", price: 14990, specs: "850W, 80+ Gold, Fully Modular", emoji: "🔋" },
    { id: 27, name: "be quiet! Dark Power 13 1000W", category: "psu", price: 24990, specs: "1000W, 80+ Titanium, Fully Modular", emoji: "🔋" },
    { id: 28, name: "Seasonic Focus GX-750 750W", category: "psu", price: 11990, specs: "750W, 80+ Gold, Fully Modular", emoji: "🔋" },
    { id: 29, name: "EVGA SuperNOVA 850 G7", category: "psu", price: 13990, specs: "850W, 80+ Gold, Fully Modular", emoji: "🔋" },
    { id: 30, name: "Chieftec Polaris 650W", category: "psu", price: 6990, specs: "650W, 80+ Bronze, Semi-Modular", emoji: "🔋" },
    { id: 31, name: "NZXT H5 Flow", category: "case", price: 10990, specs: "Midi-Tower, Mesh, 2x120mm вентилятора", emoji: "🖳" },
    { id: 32, name: "Corsair 4000D Airflow", category: "case", price: 11990, specs: "Midi-Tower, Mesh, 2x120mm вентилятора", emoji: "🖳" },
    { id: 33, name: "Fractal Design Pop Air", category: "case", price: 9990, specs: "Midi-Tower, Mesh, 3x120mm вентилятора", emoji: "🖳" },
    { id: 34, name: "be quiet! Pure Base 500DX", category: "case", price: 10990, specs: "Midi-Tower, Mesh, 3x140mm вентилятора", emoji: "🖳" },
    { id: 35, name: "Cooler Master MasterBox Q300L", category: "case", price: 5490, specs: "Micro-ATX, Mesh, 1x120mm вентилятор", emoji: "🖳" },
    { id: 36, name: "Noctua NH-D15", category: "cooler", price: 11990, specs: "Башенный, 2x140mm, 150W TDP", emoji: "❄️" },
    { id: 37, name: "be quiet! Dark Rock Pro 5", category: "cooler", price: 10990, specs: "Башенный, 2x135mm, 150W TDP", emoji: "❄️" },
    { id: 38, name: "Arctic Freezer 34 eSports Duo", category: "cooler", price: 4990, specs: "Башенный, 2x120mm, 100W TDP", emoji: "❄️" },
    { id: 39, name: "Corsair H150i Elite Capellix", category: "cooler", price: 19990, specs: "СЖО 360мм, 3x120mm, RGB", emoji: "❄️" },
    { id: 40, name: "DeepCool AK620", category: "cooler", price: 6490, specs: "Башенный, 2x120mm, 130W TDP", emoji: "❄️" },
];

let cart = [];
let currentFilter = 'all';

function formatPrice(price) {
    return price.toLocaleString('ru-RU') + ' \u20BD';
}

function renderProducts() {
    const grid = document.getElementById('products-grid');
    const filtered = currentFilter === 'all'
        ? products
        : products.filter(p => p.category === currentFilter);

    grid.innerHTML = filtered.map(product => `
        <div class="product-card">
            <div class="product-image">${product.emoji}</div>
            <div class="product-info">
                <div class="product-category">${categoryLabels[product.category]}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-specs">${product.specs}</div>
                <div class="product-price">${formatPrice(product.price)}</div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    В корзину
                </button>
            </div>
        </div>
    `).join('');
}

function filterProducts(filter) {
    currentFilter = filter;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });
    renderProducts();
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    showNotification(`${product.name} добавлен в корзину`);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

function updateCartUI() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;

    const itemsContainer = document.getElementById('cart-items');
    if (cart.length === 0) {
        itemsContainer.innerHTML = '<p class="cart-empty">Корзина пуста</p>';
    } else {
        itemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">${item.emoji}</div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${formatPrice(item.price)} x${item.quantity}</div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">&times;</button>
            </div>
        `).join('');
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById('cart-total-price').textContent = formatPrice(total);
}

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('open');
    document.getElementById('cart-overlay').classList.toggle('open');
}

function showNotification(message) {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const div = document.createElement('div');
    div.className = 'notification';
    div.textContent = message;
    document.body.appendChild(div);

    requestAnimationFrame(() => {
        div.classList.add('show');
        setTimeout(() => {
            div.classList.remove('show');
            setTimeout(() => div.remove(), 300);
        }, 2000);
    });
}

function checkout() {
    if (cart.length === 0) {
        showNotification('Корзина пуста');
        return;
    }
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    showNotification(`Заказ оформлен! Сумма: ${formatPrice(total)}`);
    cart = [];
    updateCartUI();
    toggleCart();
}

renderProducts();
