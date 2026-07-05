const productGallery = {
    2: ['images/rtx5080-1.jpg', 'images/rtx5080-2.jpg', 'images/rtx5080-3.jpg', 'images/rtx5080-4.jpg', 'images/rtx5080-5.jpg'],
    43: ['images/rtx5070ti-1.jpg', 'images/rtx5070ti-2.jpg', 'images/rtx5070ti-3.jpg', 'images/rtx5070ti-4.jpg', 'images/rtx5070ti-5.jpg'],
};

const categoryLabels = {
    gpu: '¦Ò¦¬¦+¦¦¦-¦¦¦-TÀTÂ¦-', cpu: '¦ßTÀ¦-TÆ¦¦TÁTÁ¦-TÀ', motherboard: '¦Ü¦-TÂ¦¦TÀ¦¬¦-TÁ¦¦¦-TÏ ¦¬¦¬¦-TÂ¦-',
    ram: '¦Þ¦×¦ã', storage: '¦Ý¦-¦¦¦-¦¬¦¬TÂ¦¦¦¬TÌ', psu: '¦Ñ¦¬¦-¦¦ ¦¬¦¬TÂ¦-¦-¦¬TÏ', case: '¦Ú¦-TÀ¦¬TÃTÁ', cooler: '¦ÞTÅ¦¬¦-¦¦¦+¦¦¦-¦¬¦¦',
};

const categoryImage = {
    gpu: 'images/gpu.png', cpu: 'images/cpu.png', motherboard: 'images/motherboard.png',
    ram: 'images/ram.png', storage: 'images/storage.png', psu: 'images/psu.png',
    case: 'images/case.png', cooler: 'images/cooler.png', pc: 'images/pc.png',
};

const products = [
    { id: 2, name: "RTX 5080 Msi Shadow 3x OC 16Gb", category: "gpu", price: 105000, inStock: true, specs: "", desc: "¦Ò¦¬¦+¦¦¦-¦¦¦-TÀTÂ¦- ¦Ý¦-¦-¦-TÏ, ¦Þ¦Õ¦Ü. ¦á¦-TÁTÂ¦-TÏ¦-¦¬¦¦ ¦¬¦+¦¦¦-¦¬TÌ¦-¦-¦¦! ¦ßTÀ¦-¦-¦¦TÀ¦¦¦-¦- ¦-TÁ¦¦¦-¦¬ TÂ¦¦TÁTÂ¦-¦-¦¬, TÀ¦-¦-¦-TÂ¦-¦¦TÂ ¦-¦¦¦¬ ¦-¦-TÀ¦¦¦¦¦-¦-¦¬¦¦!", emoji: "¨ßÖåÿ¬Ï" },
    { id: 43, name: "RTX 5070Ti Gigabyte Aorus 16Gb", category: "gpu", price: 100000, inStock: true, specs: "", desc: "¦Ò¦¬¦+¦¦¦-¦¦¦-TÀTÂ¦- ¦Ý¦-¦-¦-TÏ, ¦Þ¦Õ¦Ü. ¦á¦-TÁTÂ¦-TÏ¦-¦¬¦¦ ¦¬¦+¦¦¦-¦¬TÌ¦-¦-¦¦! ¦ßTÀ¦-¦-¦¦TÀ¦¦¦-¦- ¦-TÁ¦¦¦-¦¬ TÂ¦¦TÁTÂ¦-¦-¦¬, TÀ¦-¦-¦-TÂ¦-¦¦TÂ ¦-¦¦¦¬ ¦-¦-TÀ¦¦¦¦¦-¦-¦¬¦¦!", emoji: "¨ßÖåÿ¬Ï" },
    { id: 8, name: "Intel Core i9-14900K", category: "cpu", price: 64990, specs: "24 TÏ¦+TÀ¦- / 32 ¦¬¦-TÂ¦-¦¦¦-, ¦+¦- 6.0 GHz", emoji: "òÚá" },
    { id: 9, name: "AMD Ryzen 9 7950X3D", category: "cpu", price: 74990, specs: "16 TÏ¦+¦¦TÀ / 32 ¦¬¦-TÂ¦-¦¦¦-, ¦+¦- 5.7 GHz", emoji: "òÚá" },
    { id: 10, name: "Intel Core i7-14700K", category: "cpu", price: 44990, specs: "20 TÏ¦+¦¦TÀ / 28 ¦¬¦-TÂ¦-¦¦¦-¦-, ¦+¦- 5.6 GHz", emoji: "òÚá" },
    { id: 11, name: "AMD Ryzen 7 7800X3D", category: "cpu", price: 54990, specs: "8 TÏ¦+¦¦TÀ / 16 ¦¬¦-TÂ¦-¦¦¦-¦-, ¦+¦- 5.0 GHz", emoji: "òÚá" },
    { id: 12, name: "Intel Core i5-14600K", category: "cpu", price: 29990, specs: "14 TÏ¦+¦¦TÀ / 20 ¦¬¦-TÂ¦-¦¦¦-¦-, ¦+¦- 5.3 GHz", emoji: "òÚá" },
    { id: 13, name: "ASUS ROG Strix Z790-E Gaming WiFi", category: "motherboard", price: 54990, specs: "LGA1700, DDR5, PCIe 5.0, WiFi 6E", emoji: "¨ßÔÌ" },
    { id: 14, name: "MSI MAG Z790 Tomahawk WiFi", category: "motherboard", price: 36990, specs: "LGA1700, DDR5, PCIe 5.0, WiFi 6E", emoji: "¨ßÔÌ" },
    { id: 15, name: "Gigabyte B760 AORUS Elite AX", category: "motherboard", price: 25990, specs: "LGA1700, DDR5, PCIe 4.0, WiFi 6", emoji: "¨ßÔÌ" },
    { id: 16, name: "ASUS TUF Gaming B650-PLUS WiFi", category: "motherboard", price: 22990, specs: "AM5, DDR5, PCIe 5.0, WiFi 6", emoji: "¨ßÔÌ" },
    { id: 17, name: "MSI PRO B760-P DDR4", category: "motherboard", price: 16990, specs: "LGA1700, DDR4, PCIe 4.0", emoji: "¨ßÔÌ" },
    { id: 18, name: "Kingston Fury Beast DDR5-5600 32GB", category: "ram", price: 11990, specs: "32GB (2x16GB), DDR5, 5600MHz, CL36", emoji: "¨ßçà" },
    { id: 19, name: "Corsair Vengeance DDR5-6000 32GB", category: "ram", price: 14990, specs: "32GB (2x16GB), DDR5, 6000MHz, CL30", emoji: "¨ßçà" },
    { id: 20, name: "G.Skill Trident Z5 RGB DDR5-6400 32GB", category: "ram", price: 17990, specs: "32GB (2x16GB), DDR5, 6400MHz, CL32", emoji: "¨ßçà" },
    { id: 21, name: "Samsung DDR4-3200 32GB Kit", category: "ram", price: 7990, specs: "32GB (2x16GB), DDR4, 3200MHz, CL22", emoji: "¨ßçà" },
    { id: 22, name: "Patriot Viper DDR4-3600 16GB", category: "ram", price: 4990, specs: "16GB (2x8GB), DDR4, 3600MHz, CL18", emoji: "¨ßçà" },
    { id: 23, name: "Samsung 990 Pro 2TB NVMe", category: "storage", price: 23990, specs: "2TB, M.2 NVMe PCIe 4.0, 7450MB/s", emoji: "¨ßÒ-" },
    { id: 24, name: "WD Black SN850X 1TB NVMe", category: "storage", price: 13990, specs: "1TB, M.2 NVMe PCIe 4.0, 7300MB/s", emoji: "¨ßÒ-" },
    { id: 25, name: "Seagate Barracuda 2TB HDD", category: "storage", price: 5990, specs: "2TB, 3.5\", 7200RPM, SATA III", emoji: "¨ßÒ-" },
    { id: 26, name: "Kingston KC3000 1TB NVMe", category: "storage", price: 9990, specs: "1TB, M.2 NVMe PCIe 4.0, 7000MB/s", emoji: "¨ßÒ-" },
    { id: 27, name: "Crucial P3 Plus 500GB NVMe", category: "storage", price: 4990, specs: "500GB, M.2 NVMe PCIe 4.0, 5000MB/s", emoji: "¨ßÒ-" },
    { id: 28, name: "Corsair RM850x 850W", category: "psu", price: 14990, specs: "850W, 80+ Gold, Fully Modular", emoji: "¨ßÔË" },
    { id: 29, name: "be quiet! Dark Power 13 1000W", category: "psu", price: 24990, specs: "1000W, 80+ Titanium, Fully Modular", emoji: "¨ßÔË" },
    { id: 30, name: "Seasonic Focus GX-750 750W", category: "psu", price: 11990, specs: "750W, 80+ Gold, Fully Modular", emoji: "¨ßÔË" },
    { id: 31, name: "EVGA SuperNOVA 850 G7", category: "psu", price: 13990, specs: "850W, 80+ Gold, Fully Modular", emoji: "¨ßÔË" },
    { id: 32, name: "Chieftec Polaris 650W", category: "psu", price: 6990, specs: "650W, 80+ Bronze, Semi-Modular", emoji: "¨ßÔË" },
    { id: 33, name: "NZXT H5 Flow", category: "case", price: 10990, specs: "Midi-Tower, Mesh, 2x120mm ¦-¦¦¦-TÂ¦¬¦¬TÏTÂ¦-TÀ¦-", emoji: "¨ßÖ¦" },
    { id: 34, name: "Corsair 4000D Airflow", category: "case", price: 11990, specs: "Midi-Tower, Mesh, 2x120mm ¦-¦¦¦-TÂ¦¬¦¬TÏTÂ¦-TÀ¦-", emoji: "¨ßÖ¦" },
    { id: 35, name: "Fractal Design Pop Air", category: "case", price: 9990, specs: "Midi-Tower, Mesh, 3x120mm ¦-¦¦¦-TÂ¦¬¦¬TÏTÂ¦-TÀ¦-", emoji: "¨ßÖ¦" },
    { id: 36, name: "be quiet! Pure Base 500DX", category: "case", price: 10990, specs: "Midi-Tower, Mesh, 3x140mm ¦-¦¦¦-TÂ¦¬¦¬TÏTÂ¦-TÀ¦-", emoji: "¨ßÖ¦" },
    { id: 37, name: "Cooler Master MasterBox Q300L", category: "case", price: 5490, specs: "Micro-ATX, Mesh, 1x120mm ¦-¦¦¦-TÂ¦¬¦¬TÏTÂ¦-TÀ", emoji: "¨ßÖ¦" },
    { id: 38, name: "Noctua NH-D15", category: "cooler", price: 11990, specs: "¦Ñ¦-TÈ¦¦¦-¦-TË¦¦, 2x140mm, 150W TDP", emoji: "òÝÄÿ¬Ï" },
    { id: 39, name: "be quiet! Dark Rock Pro 5", category: "cooler", price: 10990, specs: "¦Ñ¦-TÈ¦¦¦-¦-TË¦¦, 2x135mm, 150W TDP", emoji: "òÝÄÿ¬Ï" },
    { id: 40, name: "Arctic Freezer 34 eSports Duo", category: "cooler", price: 4990, specs: "¦Ñ¦-TÈ¦¦¦-¦-TË¦¦, 2x120mm, 100W TDP", emoji: "òÝÄÿ¬Ï" },
    { id: 41, name: "Corsair H150i Elite Capellix", category: "cooler", price: 19990, specs: "¦á¦Ö¦Þ 360¦-¦-, 3x120mm, RGB", emoji: "òÝÄÿ¬Ï" },
    { id: 42, name: "DeepCool AK620", category: "cooler", price: 6490, specs: "¦Ñ¦-TÈ¦¦¦-¦-TË¦¦, 2x120mm, 130W TDP", emoji: "òÝÄÿ¬Ï" },
];


const prebuiltPCs = [
    { id: 201, name: "PC-START", price: 69990, tier: "fhd", specs: "i5-14600K, RTX 4060, 16GB DDR5, 512GB NVMe", emoji: "¨ßÖåÿ¬Ï", desc: "¦ÞTÂ¦¬¦¬TÇ¦-TË¦¦ TÁTÂ¦-TÀTÂ ¦+¦¬TÏ Full HD ¦¬¦¦TÀ. ¦×¦-¦¬TÃTÁ¦¦¦-¦¦TÂ ¦-TÁ¦¦ TÁ¦-¦-TÀ¦¦¦-¦¦¦-¦-TË¦¦ ¦¬¦¦TÀTË ¦-¦- TÁTÀ¦¦¦+¦-¦¬TÅ-¦-TËTÁ¦-¦¦¦¬TÅ ¦-¦-TÁTÂTÀ¦-¦¦¦¦¦-TÅ." },
    { id: 202, name: "PC-STANDARD", price: 109990, tier: "fhd", specs: "Ryzen 7 7800X3D, RTX 4070, 32GB DDR5, 1TB NVMe", emoji: "¨ßÖåÿ¬Ï", desc: "¦Ø¦+¦¦¦-¦¬TÌ¦-TË¦¦ ¦-¦-¦¬¦-¦-TÁ. ¦Ü¦-¦¦TÁ¦¬¦-¦-¦¬TÌ¦-TË¦¦ ¦-¦-TÁTÂTÀ¦-¦¦¦¦¦¬ ¦- Full HD, TÃ¦-¦¦TÀ¦¦¦-¦-TË¦¦ 2K." },
    { id: 203, name: "PC-PRO", price: 159990, tier: "qhd", specs: "i7-14700K, RTX 4080 Super, 32GB DDR5, 2TB NVMe", emoji: "¨ßÖåÿ¬Ï", desc: "¦Ô¦¬TÏ 2K ¦¦¦¦¦¦¦-¦¬¦-¦¦¦- ¦-¦- ¦-¦-¦¦TÁ¦¬¦-¦-¦¬¦¦¦-TÅ. ¦×¦-¦¬¦-TÁ ¦-¦- ¦¦¦-¦+TË ¦-¦¬¦¦TÀTÑ¦+." },
    { id: 204, name: "PC-ULTRA", price: 249990, tier: "uhd", specs: "Ryzen 9 7950X3D, RTX 5090, 64GB DDR5, 2TB NVMe", emoji: "¨ßÖåÿ¬Ï", desc: "¦ä¦¬¦-¦¦¦-¦-¦-. 4K gaming TÁ ¦-TËTÁ¦-¦¦¦¬¦- FPS ¦- TÁ¦-¦-TËTÅ TÂTÀ¦¦¦-¦-¦-¦-TÂ¦¦¦¬TÌ¦-TËTÅ ¦¬¦¦TÀ¦-TÅ." },
    { id: 205, name: "PC-WORK", price: 89990, tier: "work", specs: "i9-14900K, RTX 4060, 64GB DDR5, 1TB NVMe", emoji: "¨ßÖåÿ¬Ï", desc: "¦Ô¦¬TÏ TÀ¦-¦-¦-TÂTË TÁ ¦-¦¬¦+¦¦¦-, 3D ¦¬ ¦¦¦-¦-¦¬¦¬¦¬TÏTÆ¦¬¦¬. ¦Ü¦-TÉ¦-TË¦¦ ¦¬TÀ¦-TÆ¦¦TÁTÁ¦-TÀ + ¦-¦-¦-¦¦¦- ¦¬¦-¦-TÏTÂ¦¬." },
    { id: 206, name: "PC-STREAM", price: 139990, tier: "qhd", specs: "i7-14700K, RTX 4070 Ti, 32GB DDR5, 2TB NVMe + 1TB HDD", emoji: "¨ßÖåÿ¬Ï", desc: "¦Ô¦¬TÏ TÁTÂTÀ¦¬¦-¦-¦- ¦¬ ¦¦¦-¦-TÂ¦¦¦-TÂ¦-. ¦Ô¦-¦- ¦-¦-¦¦¦-¦¬¦¬TÂ¦¦¦¬TÏ, ¦-¦-TÉ¦-¦-TÏ ¦-¦¬¦+¦¦¦-¦¦¦-TÀTÂ¦-." },
    { id: 207, name: "PC-BUDGET", price: 49990, tier: "fhd", specs: "i5-12400F, RTX 4060, 16GB DDR4, 512GB NVMe", emoji: "¨ßÖåÿ¬Ï", desc: "¦ÑTÎ¦+¦¦¦¦TÂ¦-¦-TÏ TÁ¦-¦-TÀ¦¦¦- ¦+¦¬TÏ ¦¦¦¬¦-¦¦TÀTÁ¦¬¦-TÀTÂ¦- ¦¬ ¦-¦¦TÂTÀ¦¦¦-¦-¦-¦-TÂ¦¦¦¬TÌ¦-TËTÅ ¦¬¦¦TÀ." },
    { id: 208, name: "PC-PROFI", price: 349990, tier: "uhd", specs: "i9-14900K, RTX 5090, 96GB DDR5, 4TB NVMe", emoji: "¨ßÖåÿ¬Ï", desc: "¦Ü¦-¦¦TÁ¦¬¦-¦-¦¬TÌ¦-¦-TÏ ¦-¦-TÉ¦-¦-TÁTÂTÌ. ¦Ô¦¬TÏ 8K ¦-¦¬¦+¦¦¦-, AI, 3D TÀ¦¦¦-¦+¦¦TÀ¦¬¦-¦¦¦- ¦¬ ¦¬¦¦TÀ ¦-¦- TÃ¦¬TÌTÂTÀ¦-." },
];

const lineups = [
    { name: "PC-START", price: "¦-TÂ 49 990 òÂ-", desc: "¦Ô¦¬TÏ Full HD ¦¬¦¦TÀ ¦¬ TÀ¦-¦-¦-TÂTË", specs: ["Intel Core i5", "NVIDIA GeForce RTX 4060", "16GB DDR5", "512GB NVMe"] },
    { name: "PC-STANDARD", price: "¦-TÂ 109 990 òÂ-", desc: "¦Ø¦+¦¦¦-¦¬TÌ¦-TË¦¦ ¦-¦-¦¬¦-¦-TÁ ¦+¦¬TÏ 2K", specs: ["AMD Ryzen 7 7800X3D", "NVIDIA GeForce RTX 4070", "32GB DDR5", "1TB NVMe"] },
    { name: "PC-ULTRA", price: "¦-TÂ 249 990 òÂ-", desc: "¦ä¦¬¦-¦¦¦-¦-¦- ¦+¦¬TÏ 4K ¦¦¦¦¦¦¦-¦¬¦-¦¦¦-", specs: ["AMD Ryzen 9 7950X3D", "NVIDIA GeForce RTX 5090", "64GB DDR5", "2TB NVMe"] },
];


const configComponents = {
    cpu: [
        { name: "Intel Core i5-14600K", price: 29990, socket: "lga1700", emoji: "òÚá" },
        { name: "Intel Core i7-14700K", price: 44990, socket: "lga1700", emoji: "òÚá" },
        { name: "Intel Core i9-14900K", price: 64990, socket: "lga1700", emoji: "òÚá" },
        { name: "AMD Ryzen 7 7800X3D", price: 54990, socket: "am5", emoji: "òÚá" },
        { name: "AMD Ryzen 9 7950X3D", price: 74990, socket: "am5", emoji: "òÚá" },
    ],
    gpu: [
        { name: "RTX 5080 Msi Shadow 3x OC 16Gb", price: 105000, emoji: "¨ßÖåÿ¬Ï" },
        { name: "RTX 5070Ti Gigabyte Aorus 16Gb", price: 100000, emoji: "¨ßÖåÿ¬Ï" },
    ],
    motherboard: [
        { name: "MSI PRO B760-P DDR4", price: 16990, socket: "lga1700", emoji: "¨ßÔÌ" },
        { name: "Gigabyte B760 AORUS Elite AX", price: 25990, socket: "lga1700", emoji: "¨ßÔÌ" },
        { name: "MSI MAG Z790 Tomahawk WiFi", price: 36990, socket: "lga1700", emoji: "¨ßÔÌ" },
        { name: "ASUS ROG Strix Z790-E Gaming", price: 54990, socket: "lga1700", emoji: "¨ßÔÌ" },
        { name: "ASUS TUF Gaming B650-PLUS WiFi", price: 22990, socket: "am5", emoji: "¨ßÔÌ" },
    ],
    ram: [
        { name: "Patriot Viper DDR4-3600 16GB", price: 4990, emoji: "¨ßçà" },
        { name: "Samsung DDR4-3200 32GB Kit", price: 7990, emoji: "¨ßçà" },
        { name: "Kingston Fury Beast DDR5-5600 32GB", price: 11990, emoji: "¨ßçà" },
        { name: "Corsair Vengeance DDR5-6000 32GB", price: 14990, emoji: "¨ßçà" },
        { name: "G.Skill Trident Z5 RGB DDR5-6400 32GB", price: 17990, emoji: "¨ßçà" },
        { name: "Corsair Dominator DDR5-6800 64GB", price: 35990, emoji: "¨ßçà" },
    ],
    storage: [
        { name: "Crucial P3 Plus 500GB NVMe", price: 4990, emoji: "¨ßÒ-" },
        { name: "Kingston KC3000 1TB NVMe", price: 9990, emoji: "¨ßÒ-" },
        { name: "WD Black SN850X 1TB NVMe", price: 13990, emoji: "¨ßÒ-" },
        { name: "Samsung 990 Pro 2TB NVMe", price: 23990, emoji: "¨ßÒ-" },
        { name: "Seagate Barracuda 2TB HDD", price: 5990, emoji: "¨ßÒ-" },
    ],
    psu: [
        { name: "Chieftec Polaris 650W", price: 6990, emoji: "¨ßÔË" },
        { name: "Seasonic Focus GX-750 750W", price: 11990, emoji: "¨ßÔË" },
        { name: "EVGA SuperNOVA 850 G7", price: 13990, emoji: "¨ßÔË" },
        { name: "Corsair RM850x 850W", price: 14990, emoji: "¨ßÔË" },
        { name: "be quiet! Dark Power 13 1000W", price: 24990, emoji: "¨ßÔË" },
    ],
    case: [
        { name: "Cooler Master MasterBox Q300L", price: 5490, emoji: "¨ßÖ¦" },
        { name: "Fractal Design Pop Air", price: 9990, emoji: "¨ßÖ¦" },
        { name: "NZXT H5 Flow", price: 10990, emoji: "¨ßÖ¦" },
        { name: "be quiet! Pure Base 500DX", price: 10990, emoji: "¨ßÖ¦" },
        { name: "Corsair 4000D Airflow", price: 11990, emoji: "¨ßÖ¦" },
    ],
    cooler: [
        { name: "Arctic Freezer 34 eSports Duo", price: 4990, emoji: "òÝÄÿ¬Ï" },
        { name: "DeepCool AK620", price: 6490, emoji: "òÝÄÿ¬Ï" },
        { name: "be quiet! Dark Rock Pro 5", price: 10990, emoji: "òÝÄÿ¬Ï" },
        { name: "Noctua NH-D15", price: 11990, emoji: "òÝÄÿ¬Ï" },
        { name: "Corsair H150i Elite Capellix", price: 19990, emoji: "òÝÄÿ¬Ï" },
    ],
};

const configLabels = { cpu: '¦ßTÀ¦-TÆ¦¦TÁTÁ¦-TÀ', gpu: '¦Ò¦¬¦+¦¦¦-¦¦¦-TÀTÂ¦-', motherboard: '¦Ü¦-TÂ¦¦TÀ¦¬¦-TÁ¦¦¦-TÏ ¦¬¦¬¦-TÂ¦-', ram: '¦Þ¦×¦ã', storage: '¦Ý¦-¦¦¦-¦¬¦¬TÂ¦¦¦¬TÌ', psu: '¦Ñ¦¬¦-¦¦ ¦¬¦¬TÂ¦-¦-¦¬TÏ', case: '¦Ú¦-TÀ¦¬TÃTÁ', cooler: '¦ÞTÅ¦¬¦-¦¦¦+¦¦¦-¦¬¦¦' };
const configStepOrder = ['cpu', 'gpu', 'motherboard', 'ram', 'storage', 'psu', 'case', 'cooler'];

let cart = [];
let currentPage = 'main';

let configSelection = {};
let filterState = { main: 'all', pcs: 'all', components: 'all' };

function formatPrice(p) { return p.toLocaleString('ru-RU') + ' òÂ-'; }

function renderProducts(gridId, items, filter) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    const isBuilds = items === prebuiltPCs;
    const filtered = filter === 'all' ? items : items.filter(p => isBuilds ? p.tier === filter : p.category === filter);
    if (filtered.length === 0) { grid.innerHTML = '<p style="color: var(--text-muted); text-align: center; grid-column: 1/-1; padding: 40px 0;">¦â¦-¦-¦-TÀTË ¦-¦¦ ¦-¦-¦¦¦+¦¦¦-TË</p>'; return; }
    grid.innerHTML = filtered.map(p => {
        const type = p.tier ? 'build' : 'product';
        const imgSrc = p.tier ? categoryImage.pc : (categoryImage[p.category] || '');
        const categoryLabel = p.tier ? ({'fhd':'Full HD','qhd':'2K','uhd':'4K','work':'¦Ô¦¬TÏ TÀ¦-¦-¦-TÂTË'}[p.tier] || '') : (categoryLabels[p.category] || '');
        const isOutOfStock = isBuilds;
        const isInStock = p.inStock;
        const badge = isOutOfStock ? '<span class="badge badge-out">¦Ý¦¦TÂ ¦- ¦Ý¦-¦¬¦¬TÇ¦¬¦¬</span>' : (isInStock ? '<span class="badge badge-in">¦Ò ¦Ý¦Ð¦Û¦Ø¦ç¦Ø¦Ø</span>' : '');
        const btnDisabled = isOutOfStock;
        const btnText = isOutOfStock ? '¦Ý¦¦TÂ ¦- ¦-¦-¦¬¦¬TÇ¦¬¦¬' : (isInStock ? '¦Ò ¦¦¦-TÀ¦¬¦¬¦-TÃ' : '¦Ò ¦¦¦-TÀ¦¬¦¬¦-TÃ');
        const btnAction = isOutOfStock ? "showNotification('¦â¦-¦-¦-TÀ¦- ¦-¦¦TÂ ¦- ¦-¦-¦¬¦¬TÇ¦¬¦¬')" : "addToCart("+p.id+",'"+type+"')";
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
    const catKeys = ['gpu','cpu','motherboard','ram','storage','psu','case','cooler'];
    const filtersEl = document.getElementById('catalog-filters');
    filtersEl.innerHTML = catKeys.map(c => `<button class="filter-btn" data-filter="${c}" onclick="filterCatalog('${c}')">${categoryLabels[c]}</button>`).join('') +
        `<button class="filter-btn active" data-filter="all" onclick="filterCatalog('all')">¦ÒTÁ¦¦</button>`;
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
    showNotification(`${product.name} ¦+¦-¦-¦-¦-¦¬¦¦¦- ¦- ¦¦¦-TÀ¦¬¦¬¦-TÃ`);
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
        container.innerHTML = '<p class="cart-empty">¦Ú¦-TÀ¦¬¦¬¦-¦- ¦¬TÃTÁTÂ¦-</p>';
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
    if (cart.length === 0) { showNotification('¦Ú¦-TÀ¦¬¦¬¦-¦- ¦¬TÃTÁTÂ¦-'); return; }
    const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);
    showNotification(`¦×¦-¦¦¦-¦¬ ¦-TÄ¦-TÀ¦-¦¬¦¦¦-! ¦áTÃ¦-¦-¦-: ${formatPrice(total)}`);
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
                <span class="step-indicator" id="step-indicator-${key}">¦Ý¦¦ ¦-TË¦-TÀ¦-¦-¦-</span>
            </div>
            <div class="config-step-body" id="step-body-${key}">
                <div class="config-options">
                    ${configComponents[key].map((item, idx) => `
                        <label class="config-option${configSelection[key]?.name === item.name ? ' selected' : ''}">
                            <input type="radio" name="cfg-${key}" value="${idx}" ${configSelection[key]?.name === item.name ? 'checked' : ''} onchange="selectConfigPart('${key}', ${idx})">
                            <span style="font-size:20px">${item.emoji}</span>
                            <div class="config-option-info">
                                <div class="config-option-name">${item.name}</div>
                                <div class="config-option-spec">${item.socket ? '¦á¦-¦¦¦¦TÂ: ' + item.socket.toUpperCase() : ''}</div>
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
            ${sel ? `<span class="item-price">${formatPrice(sel.price)}</span>` : `<span class="item-empty">òÀÔ</span>`}
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
    if (selected.length === 0) { showNotification('¦ÒTË¦-¦¦TÀ¦¬TÂ¦¦ TÅ¦-TÂTÏ ¦-TË ¦-¦+¦¬¦- ¦¦¦-¦-¦¬¦-¦-¦¦¦-TÂ'); return; }
    const total = configStepOrder.reduce((s, k) => s + (configSelection[k] ? configSelection[k].price : 0), 0);
    const names = selected.map(k => configSelection[k].name).join(', ');
    const cfgId = Date.now();
    cart.push({ id: cfgId, name: '¦á¦-¦-TÀ¦¦¦-: ' + selected.length + ' ¦¦¦-¦-¦¬¦-¦-¦¦¦-TÂ¦-¦-', price: total, quantity: 1, type: 'config', specs: names, emoji: '¨ßÖåÿ¬Ï' });
    updateCartUI();
    showNotification('¦á¦-¦-TÀ¦¦¦- ¦+¦-¦-¦-¦-¦¬¦¦¦-¦- ¦- ¦¦¦-TÀ¦¬¦¬¦-TÃ!');
}

function renderLineups() {
    const grid = document.getElementById('lineups-grid');
    grid.innerHTML = lineups.map(l => `
        <div class="lineup-card" onclick="showPage('pcs')">
            <div class="lineup-card-header">
                <span class="lineup-card-name">${l.name} <span class="badge badge-out" style="position:static;display:inline-block;margin-left:8px;vertical-align:middle;font-size:10px;">¦Ý¦¦TÂ ¦- ¦Ý¦-¦¬¦¬TÇ¦¬¦¬</span></span>
                <span class="lineup-card-price">${l.price}</span>
            </div>
            <div class="lineup-card-body">
                <p style="color:var(--text-secondary);font-size:14px;margin-bottom:12px">${l.desc}</p>
                ${l.specs.map(s => `<div class="lineup-card-spec">${s}</div>`).join('')}
            </div>
            <div class="lineup-card-footer">
                <span style="color:var(--accent);font-weight:600;font-size:14px">¦ß¦-¦+TÀ¦-¦-¦-¦¦¦¦ òÆÒ</span>
            </div>
        </div>
    `).join('');
}


renderLineups();
initCatalogFilters();
