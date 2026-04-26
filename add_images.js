const fs = require('fs');
const path = './src/data/businessUnits.tsx';
let content = fs.readFileSync(path, 'utf8');

// Function to add imageUrl to a specific slide in a specific unit
function addImage(unitSlug, slideTitle, imagePath) {
    // This is a bit tricky with regex because of the structure.
    // Let's just do a simple string replace for specific headings.
    // Since headings are unique enough, we can match on heading: "..."
    const target = `heading: "${slideTitle}",`;
    const replacement = `heading: "${slideTitle}",\n        imageUrl: "${imagePath}",`;
    content = content.replace(target, replacement);
}

// SE Events already has images.

// SE Merchandise
addImage("Pionir Ritel Gaya Hidup & Identitas Merek", "/images/cyber-factory.png");
addImage("Efisiensi Manufaktur & Logistik", "/images/cyber-factory.png");
addImage("Kolaborasi & *Influencer Seeding*", "/images/cyber-marketing.png");
addImage("Optimalisasi Margin Profit (Gross Margin)", "/images/slide-7-finance.png");

// SE Media
addImage("Corong Komunikasi & Agregator Audiens", "/images/cyber-network.png");
addImage("Ekonomi Atensi (The Attention Economy)", "/images/cyber-network.png");
addImage("Omnichannel Content Syndication", "/images/cyber-marketing.png");
addImage("Monetisasi & Arus Kas Media", "/images/slide-7-finance.png");

// SE Creative
addImage("Pabrik Ide & Solusi Pemasaran Terpadu", "/images/cyber-marketing.png");
addImage("Retainer B2B & Konsultansi Proyek", "/images/cyber-contract.png");
addImage("Tingkat Keuntungan Layanan Jasa (Service Margin)", "/images/slide-7-finance.png");

// SE Records
addImage("Inkubator Talenta & Mesin Royalti (Royalty Engine)", "/images/cyber-contract.png");
addImage("Skema *360-Degree Deal* & Hak Master", "/images/cyber-contract.png");
addImage("Piramida Royalti (Royalty Streams)", "/images/slide-7-finance.png");
addImage("*Algorithmic Playlisting* & Sinkronisasi (Sync)", "/images/cyber-marketing.png");

// Local Marketplace
addImage("Platform Sentralisasi Ekonomi Kreatif", "/images/cyber-network.png");
addImage("Monetisasi Transaksi & *Subscription*", "/images/slide-1-octopus.png");
addImage("Investasi Perangkat Lunak (CAPEX) & ROI", "/images/slide-7-finance.png");

// Culinary
addImage("Logistik Konsumsi & Sentra Ritel Kuliner", "/images/cyber-factory.png");
addImage("Efisiensi Pembelian Grosir (*Wholesale*)", "/images/cyber-factory.png");
addImage("Investasi Dapur Komersial (CAPEX) & BEP", "/images/slide-7-finance.png");

// Rentals
addImage("Tulang Punggung Infrastruktur Skala Stadion", "/images/slide-4-stage.png");
addImage("Aset Teknis Berstandar Internasional", "/images/slide-4-stage.png");
addImage("Belanja Modal Skala Besar (CAPEX) & Pengembalian", "/images/slide-7-finance.png");

// Talent
addImage("Repositori Bakat & Eksekusi Komersial Eksklusif", "/images/cyber-contract.png");
addImage("Monetisasi Berbasis *Agency Cut* (Potongan Manajer)", "/images/cyber-contract.png");
addImage("Bisnis Nihil Modal (Zero-CAPEX) Bermargin Tinggi", "/images/slide-7-finance.png");

// Venues
addImage("Kapitalisasi Aset Fisik & Ruang Komersial", "/images/slide-1-octopus.png");
addImage("Monetisasi Properti (*Space Leasing & Utilization*)", "/images/slide-4-stage.png");
addImage("Investasi Properti Strategis (High-CAPEX)", "/images/slide-7-finance.png");

fs.writeFileSync(path, content);
console.log("Images added successfully!");
