const fs = require('fs');
const path = './src/data/businessUnits.tsx';
let content = fs.readFileSync(path, 'utf8');

const mediaNetworkObjStr = `
  {
    name: "SE Media Network",
    slug: "se-media-network",
    category: "Media & Broadcasting",
    icon: <Radio size={48} strokeWidth={1.5} />,
    gridIcon: <Radio size={32} strokeWidth={1.5} />,
    description: "Portal media independen, majalah digital, penyedia berita kultur pop, dan fasilitas penyiaran berbasis komunitas yang berfokus pada audiens muda.",
    fullDescription: "Sebagai saluran komunikasi dan publikasi utama perusahaan, SE Media Network berdedikasi untuk memberikan edukasi dan hiburan terkurasi kepada publik. Melalui integrasi portal berita, siniar (podcast), dan dokumenter digital, kami mengorbitkan literasi gaya hidup yang relevan untuk target demografi Milenial dan Gen Z.",
    services: [
      "Digital News Portal & E-Magazine",
      "Podcast Production",
      "Video Documentaries & Web Series",
      "Live Streaming / Broadcasting Services"
    ],
    budgetClass: "Medium",
    capital: "Rp 250.000.000 - Rp 500.000.000",
    avg: 375000000,
    presentationSlides: [
      {
        title: "Executive Summary",
        heading: "Corong Komunikasi & Agregator Audiens",
        imageUrl: "/images/media-hub.png",
        content: "SE Media Network adalah lengan publikasi (*Publishing Arm*) dan infrastruktur penyiaran digital dari PT. Sukabumi Eundeur Holding.\\n\\nFungsi utama divisi ini adalah mengakuisisi dan mempertahankan atensi jutaan pasang mata audiens melalui jurnalisme gaya hidup, hiburan, dan kultur pop. Kami adalah corong utama yang mengamplifikasi narasi seluruh unit bisnis lainnya (Events, Merchandise) secara mandiri tanpa bergantung pada media pihak ketiga.",
        visualIcon: <Radio />
      },
      {
        title: "Visi & Misi Divisi",
        heading: "Ekosistem Jurnalisme & Hiburan Terkurasi",
        imageUrl: "/images/talent-vision.png",
        content: "Visi Strategis:\\nMenjadi konglomerasi media digital independen terbesar di Jawa Barat yang mendikte arah tren kultur pop dan gaya hidup urban.\\n\\nMisi Operasional:\\n1. Memproduksi jurnalisme musik dan hiburan yang tajam, berimbang, dan berstandar editorial tinggi.\\n2. Mengorkestrasi konten *audio-visual* interaktif untuk mendominasi algoritma media sosial.\\n3. Menjadi jembatan antara merek korporat (B2B) dengan pangsa pasar Milenial dan Gen Z.",
        visualIcon: <Target />
      },
      {
        title: "Problem & Opportunity",
        heading: "Defisit Media Terkurasi & Peluang Geografis",
        imageUrl: "/images/cyber-network.png",
        content: "Identifikasi Masalah (Pain Points):\\nAbsennya portal media digital lokal yang berfokus secara eksklusif pada kancah industri kreatif, musik keras (*underground*), dan *streetwear* di luar wilayah ibu kota.\\n\\nPeluang Strategis (Opportunities):\\nTingkat penetrasi internet dan konsumsi layar harian (*Screen Time*) Generasi Z yang membeludak merupakan aset berharga. Kami dapat merebut monopoli atensi di Jawa Barat melalui lokalisasi konten yang relevan dengan keresahan kultural mereka.",
        visualIcon: <TrendingUp />
      },
      {
        title: "Model Bisnis",
        heading: "Ekonomi Atensi (The Attention Economy)",
        imageUrl: "/images/media-eyeballs.png",
        content: "Media modern tidak menjual berita; kami menjual 'Atensi' (Attention).\\n\\nModel bisnis SE Media Network berfokus pada pengumpulan lalu lintas digital (*Traffic Generation*) berskala masif melalui strategi *Search Engine Optimization* (SEO) dan *Social Media Virality*. Setelah audiens terkumpul (Eyeballs), atensi mereka akan dimonetisasi melalui penjualan ruang iklan komersial kepada entitas bisnis yang ingin menyasar demografi muda.",
        visualIcon: <Zap />
      },
      {
        title: "Portofolio Konten",
        heading: "Format Multi-Media & Penyiaran",
        imageUrl: "/images/media-studio.png",
        content: "Pabrik konten kami mendistribusikan produk melalui empat pilar utama:\\n\\n1. E-Magazine & News Portal: Publikasi artikel editorial mendalam (*In-depth Features*) dan ulasan rilisan musik.\\n2. Audio Podcast: Diskusi mendalam (*Talkshows*) dengan para pelaku industri kreatif.\\n3. Video Documentaries & Web Series: Serial YouTube premium dan film dokumenter pendek.\\n4. Live Broadcasting: Layanan *Live Streaming* berkualitas penyiaran TV untuk konser dan acara konferensi.",
        visualIcon: <Star />
      },
      {
        title: "Strategi Distribusi",
        heading: "Omnichannel Content Syndication",
        imageUrl: "/images/media-omnichannel.png",
        content: "Distribusi konten menggunakan pendekatan *Omnichannel* untuk 'mengepung' pengguna di setiap platform yang mereka gunakan:\\n\\n• Micro-Content: Pemotongan aset panjang (Video YouTube) menjadi puluhan aset vertikal berdurasi 15-detik untuk mendominasi algoritma *TikTok*, *Instagram Reels*, dan *YouTube Shorts*.\\n• Content Syndication: Pendistribusian silang artikel berita ke platform agregator eksternal seperti Line Today atau Google News untuk menjaring *traffic* baru.",
        visualIcon: <Megaphone />
      },
      {
        title: "Struktur Pendapatan",
        heading: "Monetisasi & Arus Kas Media",
        imageUrl: "/images/talent-revenue.png",
        content: "SE Media Network memiliki *Multiple Revenue Streams* (Arus Pendapatan Ganda) dengan skalabilitas tak terbatas:\\n\\n1. Native Advertising / Advertorial: Penulisan artikel bersponsor yang melebur mulus dengan konten editorial.\\n2. Programmatic Ads (Google AdSense): Pendapatan pasif otomatis berbasis *Cost Per Click* (CPC) dan tayangan halaman.\\n3. Brand Integration & Endorsement: Penyematan merek sponsor ke dalam produksi *Podcast* dan *Web Series*.\\n4. Commercial Broadcasting: Penjualan jasa *Live Streaming* untuk klien korporat (B2B).",
        visualIcon: <LineChart />
      },
      {
        title: "Strategi Penguasaan Pasar",
        heading: "Jurnalisme Berbasis Komunitas (Community-Driven)",
        imageUrl: "/images/cyber-marketing.png",
        content: "Strategi *Growth Hacking* untuk mengakselerasi jumlah audiens secara organik tanpa biaya iklan (Zero-CAC):\\n\\n• User Generated Content (UGC): Membuka kolom kontributor publik (Jurnalisme Warga) untuk musisi dan penulis independen lokal.\\n• Exclusive Press Partner: Mengamankan posisi sebagai *Official Media Partner* di seluruh acara kampus dan festival regional, memastikan logo SE Media terpampang di ribuan aset promosi pihak ketiga.",
        visualIcon: <Users />
      },
      {
        title: "Manajemen Risiko",
        heading: "Integritas Jurnalistik & Keamanan Siber",
        imageUrl: "/images/media-shield.png",
        content: "Mitigasi krisis reputasi dan ancaman infrastruktur digital:\\n\\n• Editorial Integrity: Penerapan Kode Etik Jurnalistik (KEJ) yang ketat untuk mencegah penyebaran disinformasi (*Hoax*) dan potensi tuntutan pencemaran nama baik (UU ITE).\\n• Cyber Security: Proteksi infrastruktur peladen (*Server*) dan *Database* audiens dari serangan *Distributed Denial of Service* (DDoS) dan peretasan data pengguna (Data Breach).",
        visualIcon: <ShieldCheck />
      },
      {
        title: "Proyeksi Finansial",
        heading: "Investasi Infrastruktur (CAPEX) & ROI",
        imageUrl: "/images/slide-7-finance.png",
        content: "Estimasi Capital Expenditure (CAPEX): Rp 250.000.000 - Rp 500.000.000\\n\\nAlokasi Dana Prioritas:\\nPengadaan perangkat penyiaran studio premium (Kamera *Cinema*, *Audio Interface*, *Lighting*), arsitektur server *Cloud Hosting* berskala tinggi (AWS/Google Cloud), serta periklanan akuisisi pembaca awal.\\n\\nProyeksi *Break Even Point* (BEP) ditargetkan pada akhir Tahun ke-2, saat volume *traffic* audiens telah mencapai batas optimal untuk monetisasi iklan premium langsung (Direct Ads).",
        visualIcon: <Banknote />
      }
    ]
  },`;

const startIndex = content.indexOf('{'); // Find first business unit to structure replacement
// Actually, let's just use regex to replace everything between { name: "SE Media Network", and }, { name: "SE Creative Agency",

const replaceStartStr = `  {\n    name: "SE Media Network",`;
const replaceEndStr = `  {\n    name: "SE Creative Agency",`;

const startIndexMedia = content.indexOf(replaceStartStr);
const endIndexCreative = content.indexOf(replaceEndStr);

if (startIndexMedia !== -1 && endIndexCreative !== -1) {
    const newContent = content.substring(0, startIndexMedia) + mediaNetworkObjStr.trim() + ",\n" + content.substring(endIndexCreative);
    fs.writeFileSync(path, newContent);
    console.log("Successfully fixed SE Media Network");
} else {
    console.log("Could not find start/end indices");
}
