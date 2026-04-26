import React from 'react';
import { 
  AudioWaveform, 
  Hexagon, 
  RadioTower, 
  BrainCircuit, 
  Disc3, 
  Store, 
  Flame, 
  PlugZap, 
  Crown, 
  Warehouse,
  Briefcase,
  TrendingUp,
  Target,
  LineChart,
  Users,
  Megaphone,
  ShieldCheck,
  Zap,
  Banknote
} from 'lucide-react';

export const businessUnits = [
  {
    name: "Sukabumi Eundeur Events",
    slug: "sukabumi-eundeur-events",
    category: "Event Management",
    icon: <AudioWaveform size={48} strokeWidth={1.5} />,
    gridIcon: <AudioWaveform size={32} strokeWidth={1.5} />,
    description: "Divisi fundamental dan motor penggerak utama perusahaan. Berfokus secara spesifik pada konseptualisasi, tata kelola, dan eksekusi komersial untuk acara hiburan musik, eksibisi MICE, serta aktivasi merek berskala regional hingga nasional.",
    fullDescription: "Beroperasi sebagai entitas bisnis pionir yang memprakarsai berdirinya ekosistem Holding, divisi SE Events telah bertransformasi dari sekadar penyelenggara acara (Event Organizer) lokal menjadi Institusi Promotor Strategis berskala nasional. Fokus operasional dan keahlian inti kami mencakup perancangan manajemen kerumunan (Crowd Control), monetisasi hak siar, serta tata kelola acara komprehensif mulai dari sirkuit konser berskala masif (Large-Scale Festivals) hingga konferensi korporat tingkat eksekutif.",
    services: [
      "Music Festivals & Concerts",
      "Corporate Events & Gatherings",
      "Exhibitions & Bazaars (MICE)",
      "Brand Activations"
    ],
    budgetClass: "Medium - High",
    capital: "Rp 500.000.000 - Rp 1.000.000.000",
    avg: 750000000,
    presentationSlides: [
      {
        title: "Executive Summary",
        heading: "Pionir Manajemen Acara Terpadu di Jawa Barat",
        content: "SE Events berkedudukan sebagai tulang punggung (Backbone) dari keseluruhan ekosistem PT. Sukabumi Eundeur Holding.\n\nDengan fondasi rekam jejak historis selama lebih dari dua dekade, kami telah berevolusi menjadi Institusi Promotor berskala makro. Kapabilitas kami melingkupi perancangan, manajemen pendanaan, dan eksekusi lapangan untuk portofolio acara yang sangat beragam—dimulai dari Festival Musik tingkat Nasional hingga Konferensi B2B Berstandar Internasional.",
        visualIcon: <Briefcase />,
        imageUrl: "/images/slide-1-octopus.png"
      },
      {
        title: "Visi & Misi Divisi",
        heading: "Infrastruktur Hiburan & Agregator Ekonomi Sirkular",
        content: "Visi Strategis:\nMengukuhkan dominasi sebagai institusi promotor terdepan di Jawa Barat yang menjembatani industri hiburan komersial, gaya hidup kontemporer, dan akselerasi ekonomi sirkular regional.\n\nMisi Operasional:\n1. Menginisiasi penyelenggaraan acara dengan standar Keselamatan & Kualitas (HSE) kelas dunia.\n2. Mengorkestrasi ekosistem kreatif yang berkesinambungan bagi talenta lokal.\n3. Menjamin pencapaian Return on Investment (ROI) dan Return on Objective (ROO) yang optimal bagi para mitra korporat strategis.",
        visualIcon: <Target />
      },
      {
        title: "Problem & Opportunity",
        heading: "Analisis Pasar & Traksi Ekspansi (Market Sizing)",
        content: "Identifikasi Masalah (Pain Points):\nDefisit infrastruktur hiburan profesional yang memadai serta ketiadaan penyelenggaraan acara komersial berskala masif di area Sukabumi Raya dan regional Jawa Barat bagian selatan.\n\nPeluang Strategis (Opportunities):\nTerjadinya lonjakan bonus demografi (Generasi Milenial & Gen Z) yang diiringi pergeseran alokasi belanja konsumen (Consumer Spending) menuju Sektor Pengalaman & Rekreasi (Experience/Leisure Economy). Pembangunan akses tol (Bocimi) turut memperluas jangkauan (Total Addressable Market) secara signifikan.",
        visualIcon: <TrendingUp />
      },
      {
        title: "Konsep Bisnis",
        heading: "Paradigma Integrasi Ekosistem",
        content: "SE Events mendefinisikan ulang konsepsi tradisional penyelenggaraan acara menjadi penciptaan 'Destinasi Pariwisata Singkat' (Pop-up Tourism Destination).\n\nSetiap festival yang kami proyeksikan tidak berdiri secara tunggal, melainkan merupakan fusi dari:\n• Panggung Hiburan Kurasi Artistik Tingkat Tinggi\n• Sentra Kuliner (F&B) Komersial\n• Eksibisi Ritel Busana Lintas Sektoral\n• Fasilitas Aktivasi Merek (Brand Activation) Interaktif",
        visualIcon: <Zap />,
        imageUrl: "/images/slide-4-stage.png"
      },
      {
        title: "Layanan Utama",
        heading: "Portofolio Layanan Komersial & B2B",
        content: "1. Massive Music Festivals & Tours: Penyelenggaraan sirkuit konser berskala >10.000 audiens.\n2. Corporate Gatherings & Executive Outings: Agenda internal perusahaan dan team building berkelas premium.\n3. MICE (Meetings, Incentives, Conferences, Exhibitions): Fasilitasi konferensi dan pameran dagang profesional.\n4. Brand Activations & Product Launches: Kampanye peluncuran produk komersial dan penetrasi merek (O2O).",
        visualIcon: <AudioWaveform />
      },
      {
        title: "Segmentasi Audiens",
        heading: "Target Market (B2C & B2B Profiling)",
        content: "Pasar Konsumen (B2C):\nDemografi individu berusia 15-35 tahun, konsumen aktif industri kreatif, penikmat kultur pop kontemporer, serta komunitas solid berbasis loyalitas merek (Brand Advocates).\n\nPasar Korporat (B2B):\nPerusahaan Multinasional, Entitas Bisnis FMCG (Fast-Moving Consumer Goods), Usaha Mikro dan Menengah (UMKM), serta Instansi Pemerintahan tingkat Regional (BUMD) maupun Nasional (BUMN).",
        visualIcon: <Users />
      },
      {
        title: "Struktur Pendapatan",
        heading: "Optimalisasi Multiple Revenue Streams",
        content: "Untuk memitigasi risiko finansial, SE Events mengadopsi model pendapatan silang (Cross-Monetization):\n\n1. Ticketing: Penerimaan langsung dari penjualan tiket (Early Bird, Presale, VIP, VVIP).\n2. Sponsorship Contracts: Injeksi pendanaan strategis dari merek besar.\n3. Commercial Space Rental: Penyewaan booth dan area komersial untuk mitra F&B dan ritel.\n4. Merchandising: Distribusi hak cipta pakaian resmi.\n5. Broadcasting Rights: Monetisasi hak siar digital dan dokumentasi pasca-acara.",
        visualIcon: <LineChart />,
        imageUrl: "/images/slide-7-finance.png"
      },
      {
        title: "Strategi Pemasaran",
        heading: "Omnichannel Marketing & Eksekusi Promosi",
        content: "Implementasi pendekatan Hybrid Omnichannel berskala masif:\n\n• Pemasaran Digital Presisi: Pemanfaatan algoritma media sosial (TikTok, Instagram Ads) dengan target audiens regional.\n• Key Opinion Leaders (KOL): Integrasi endorsement dengan tokoh publik lokal maupun nasional.\n• Offline-to-Online (O2O) Activation: Penyelenggaraan roadshow berskala kecil (Pra-acara) di kawasan kampus dan area komersial strategis untuk memicu konversi pembelian tiket (Fear of Missing Out / FOMO).",
        visualIcon: <Megaphone />,
        imageUrl: "/images/slide-8-megaphone.png"
      },
      {
        title: "Manajemen Risiko",
        heading: "Mitigasi & Prosedur Keselamatan (HSE)",
        content: "Komitmen mutlak terhadap perlindungan aset dan reputasi perusahaan:\n\n• Crowd Control Management: Penerapan Standar Operasional Prosedur (SOP) keamanan berskala stadion internasional.\n• Event Insurance: Implementasi asuransi penyelenggaraan komprehensif (Force Majeure & Liability).\n• Blockchain / RFID Ticketing: Penggunaan sistem otentikasi tiket digital untuk mereduksi angka pemalsuan dan aktivitas percaloan pasar gelap (Scalping).",
        visualIcon: <ShieldCheck />
      },
      {
        title: "Proyeksi Finansial",
        heading: "Alokasi Modal Kerja & Analisis ROI",
        content: "Estimasi Injeksi Capital Expenditure (CAPEX): Rp 500.000.000 - Rp 1.000.000.000\n\nAlokasi Modal (Use of Funds):\nPembayaran komitmen awal (Down Payment) talenta utama, perizinan regulasi otoritas berwajib, pemesanan infrastruktur lokasi, serta kampanye pemasaran (Customer Acquisition Cost).\n\nTitik Impas (Break Even Point / BEP) diproyeksikan akan terealisasi secara agresif pada eksekusi festival skala besar ke-2 (Tahun Pertama).",
        visualIcon: <Banknote />
      },
      {
        title: "Intellectual Property (IP)",
        heading: "Monetisasi Hak Cipta & Aset Digital",
        content: "Festival yang kami rancang bukan sekadar acara fisik, melainkan 'Pabrik Konten' (Content Factory).\n\nSetiap pertunjukan langsung akan dikonversi menjadi aset Intellectual Property berjangka panjang melalui: Produksi dokumenter eksklusif, penjualan hak siar komersial (Broadcasting Rights), serta peluncuran album rekaman live yang mendatangkan royalti pasif (Passive Income) berulang dari platform streaming global.",
        visualIcon: <Crown />
      },
      {
        title: "Sustainability & ESG",
        heading: "Kepatuhan Lingkungan & Tata Kelola",
        content: "SE Events berkomitmen mengadopsi prinsip Environmental, Social, and Governance (ESG) untuk menarik pendanaan hijau (Green Investment):\n\n• Environmental: Inisiatif Zero-Waste dan pengelolaan limbah festival bekerjasama dengan agregator daur ulang.\n• Social: Pemberdayaan UMKM lokal dan penyerapan ratusan tenaga kerja lepas (gig economy) Sukabumi.\n• Governance: Laporan keuangan festival yang transparan dan diaudit secara independen.",
        visualIcon: <BrainCircuit />
      },
      {
        title: "Technological Integration",
        heading: "Ekosistem Festival Digital",
        content: "Optimalisasi teknologi (Tech-Enabled Event) untuk efisiensi operasional dan keamanan pendapatan:\n\n• Tata Kelola Pembayaran: Implementasi Cashless Ecosystem (RFID / QRIS) di seluruh area F&B dan merchandise untuk menghindari kebocoran dana (Cash Leakage).\n• Ticketing: Penggunaan teknologi enkripsi barcode dinamis untuk memusnahkan pasar percaloan.\n• Metaverse: Riset tahap awal untuk ekspansi acara hibrida (Realitas Virtual).",
        visualIcon: <Zap />
      },
      {
        title: "Strategic Partnerships",
        heading: "Aliansi Korporat Berskala Makro",
        content: "Eskalasi bisnis dilakukan melalui kolaborasi dengan raksasa industri (Strategic Alliances):\n\n1. FMCG & Beverage Sponsors: Mengamankan kontrak sponsor multi-tahun eksklusif.\n2. Label Rekaman Nasional: Akses jalur cepat ke deretan artis papan atas dengan tarif negosiasi khusus (Wholesale Rate).\n3. Media Nasional: Kerjasama media barter bernilai miliaran rupiah untuk mendominasi Share of Voice di pasar Jawa Barat.",
        visualIcon: <Warehouse />
      },
      {
        title: "Community Engagement",
        heading: "Manajemen Loyalitas Ekstrem",
        content: "Sukabumi Eundeur memiliki akar yang dalam pada komunitas underground dan musik keras. Basis massa (Fanbase) kami bukanlah konsumen biasa, melainkan Militant Advocates.\n\nStrategi kami adalah mengubah loyalitas kultural ini menjadi Lifetime Value (LTV) secara finansial, dengan cara mengadakan gig mikro reguler, program membership, serta mengorkestrasi ruang gerak komunitas agar brand awareness tetap menyala sepanjang tahun.",
        visualIcon: <Users />
      },
      {
        title: "Exit Strategy",
        heading: "Peta Jalan Likuiditas Investor",
        content: "Kami menawarkan kejelasan Exit Strategy bagi para pemodal ventura atau Angel Investors:\n\n• Skenario 1 (Tahun ke-3): Pembagian dividen berbasis performa tahunan dengan perhitungan laba bersih (Nett Profit).\n• Skenario 2 (Tahun ke-5): Opsi Buyback (pembelian kembali saham oleh founder pada valuasi pasar terbaru).\n• Skenario 3 (Tahun ke-7+): Akuisisi Mayoritas (M&A) oleh perusahaan promotor berskala internasional (misal: Live Nation) yang ingin berekspansi ke pasar Jawa Barat.",
        visualIcon: <TrendingUp />
      }
    ]
  },
  {
    name: "SE Merchandise & Apparel",
    slug: "se-merchandise-apparel",
    category: "Merchandise & Fashion",
    icon: <Hexagon size={48} strokeWidth={1.5} />,
    gridIcon: <Hexagon size={32} strokeWidth={1.5} />,
    description: "Unit manufaktur dan distribusi yang berfokus pada produksi lini busana independen serta penyediaan cenderamata resmi (official merchandise).",
    fullDescription: "Berfungsi sebagai ekosistem mode ritel mandiri, SE Merchandise merancang dan mendistribusikan produk pakaian premium yang mengedepankan identitas lokal. Strategi operasional mencakup perilisan koleksi musiman, inisiasi proyek kolaborasi dengan seniman visual, serta optimalisasi jalur distribusi e-commerce secara agresif.",
    services: [
      "Official Event Merchandise",
      "Corporate Uniforms & Swags",
      "Independent Clothing Line",
      "Collaborative Fashion Projects"
    ],
    budgetClass: "Low - Medium",
    capital: "Rp 150.000.000 - Rp 300.000.000",
    avg: 225000000,
    presentationSlides: [
      {
        title: "Executive Summary",
        heading: "Pionir Ritel Gaya Hidup & Identitas Merek",
        content: "SE Merchandise & Apparel adalah divisi strategis yang berfungsi untuk mengonversi nilai tukar emosional (Emotional Value) dari festival musik ke dalam aset fisik yang berwujud (Wearable Identity).\n\nKami tidak sekadar mencetak kaos; kami memanufaktur 'seragam' bagi audiens yang memiliki loyalitas kultural yang sangat tinggi. Divisi ini dirancang untuk mendatangkan arus kas (Cash Flow) yang stabil dan berulang sepanjang tahun, terlepas dari siklus penyelenggaraan acara festival utama.",
        visualIcon: <Hexagon />,
        imageUrl: "/images/slide-1-briefcase.png"
      },
      {
        title: "Visi & Misi Divisi",
        heading: "Ekosistem Fashion, Budaya Rock/Metal & Merchandise Band",
        content: "Visi Strategis:\nMenjadi pionir manufaktur merchandise band dan fashion kultur Rock/Metal paling berpengaruh di Jawa Barat yang menjembatani identitas musik keras dengan pakaian berkualitas tinggi.\n\nMisi Operasional:\n1. Memproduksi merchandise resmi band dan komoditas ritel dengan standar material premium (Quality Control).\n2. Membangun model bisnis Direct-to-Consumer (D2C) yang mendistribusikan produk langsung ke komunitas underground.\n3. Menjadikan pakaian sebagai panji kebanggaan dan media promosi berjalan (Walking Billboard) bagi pergerakan musik lokal.",
        visualIcon: <Target />,
        imageUrl: "/images/cyber-factory.png"
      },
      {
        title: "Problem & Opportunity",
        heading: "Kesenjangan Pasar & Traksi Hype Culture",
        content: "Identifikasi Masalah (Pain Points):\nBanyak festival lokal gagal memaksimalkan pendapatan karena kualitas merchandise yang buruk (low-quality fabrics) dan desain yang tidak relevan dengan tren streetwear modern.\n\nPeluang Strategis (Opportunities):\nPergeseran pola konsumsi Gen-Z yang mengadopsi gaya Hypebeast dan Scarcity Culture (kultur kelangkaan). Pakaian band/festival tidak lagi dilihat sebagai suvenir, melainkan sebagai aset penegasan status sosial (Social Currency).",
        visualIcon: <TrendingUp />,
        imageUrl: "/images/slide-8-megaphone.png"
      },
      {
        title: "Model Bisnis",
        heading: "Strategi Limited Drops & D2C",
        content: "Untuk mempertahankan eksklusivitas merek, SE Apparel mengadopsi model perilisan Limited Drops (Koleksi Kapsul Terbatas).\n\nSetiap artikel pakaian hanya diproduksi dalam jumlah spesifik dan tidak akan pernah diproduksi ulang (No Restock). Model operasi ini akan:\n1. Memicu kelangkaan buatan (Artificial Scarcity).\n2. Menstimulasi lonjakan pembelian mendadak (Panic Buying/FOMO).\n3. Meminimalisasi risiko penumpukan stok mati (Dead Stock).",
        visualIcon: <Zap />,
        imageUrl: "/images/cyber-contract.png"
      },
      {
        title: "Portofolio Produk",
        heading: "Katalog & Lini Busana Komersial",
        content: "Lini produk dikategorikan ke dalam 3 (tiga) pilar utama:\n\n1. Official Event Merch: Pakaian resmi yang diproduksi eksklusif untuk setiap penyelenggaraan festival (High-Volume, Fast-Moving).\n2. Premium Independent Line: Koleksi streetwear musiman (Jaket, Kemeja, Topi, Aksesoris) dengan desain orisinal dan margin profit tinggi.\n3. Corporate B2B Swags: Layanan pembuatan seragam korporat dan merchandise mitra sponsor (White-labeling).",
        visualIcon: <Store />,
        imageUrl: "/images/agency-brand.png"
      },
      {
        title: "Rantai Pasok (Supply Chain)",
        heading: "Efisiensi Manufaktur & Logistik",
        content: "Sistem manufaktur SE Apparel dirancang untuk mitigasi risiko finansial secara optimal:\n\n• Sistem Pre-Order (PO): Memvalidasi permintaan pasar dan menerima modal awal sebelum proses produksi masal dimulai.\n• Jaringan Vendor Teraudit: Kemitraan strategis dengan konveksi berskala pabrik (Garment) di Bandung dan Sukabumi untuk menekan Biaya Pokok Penjualan (COGS).\n• Pergudangan (Warehousing): Manajemen inventaris berbasis sistem First-In-First-Out (FIFO).",
        visualIcon: <Warehouse />,
        imageUrl: "/images/cyber-network.png"
      },
      {
        title: "Strategi Pemasaran",
        heading: "Kolaborasi & Influencer Seeding",
        content: "Mekanisme penguasaan pasar dilakukan melalui taktik organik dan viralitas:\n\n• Collaborative Projects: Rilis desain silang (Cross-Branding) antara SE Apparel dengan seniman visual (Illustrators/Typographers) dan musisi papan atas nasional.\n• Influencer Seeding: Distribusi produk pra-rilis (Early Access) kepada Key Opinion Leaders (KOL) dan musisi untuk digunakan saat mereka manggung, menciptakan validasi sosial berskala masif.\n• Agresivitas E-Commerce: Pemanfaatan Live Shopping (TikTok, Shopee) secara interaktif.",
        visualIcon: <Megaphone />,
        imageUrl: "/images/media-omnichannel.png"
      },
      {
        title: "Struktur Pendapatan",
        heading: "Optimalisasi Margin Profit (Gross Margin)",
        content: "Industri fesyen/pakaian (apparel) memiliki tingkat keuntungan kotor (Gross Profit Margin) yang sangat atraktif, rata-rata di kisaran 50% hingga 75% per barang.\n\nAliran Pendapatan Utama:\n1. Titik Penjualan Luring (Offline POS): Penjualan impulsif masif di booth festival fisik.\n2. E-Commerce (Online POS): Pendapatan ritel harian (Daily Recurring Revenue) dari kanal digital.\n3. Wholesale/Konsinyasi B2B: Penjualan grosir ke toko ritel pihak ketiga (Distro/Concept Stores).",
        visualIcon: <LineChart />,
        imageUrl: "/images/slide-7-finance.png"
      },
      {
        title: "Manajemen Risiko",
        heading: "Mitigasi Pembajakan & Overstock",
        content: "Proteksi terhadap aset dan keberlangsungan bisnis:\n\n• Hak Kekayaan Intelektual (HAKI): Pendaftaran paten merek dagang dan hak cipta desain visual ke Direktorat Jenderal Kekayaan Intelektual (DJKI) untuk penindakan hukum terhadap pemalsuan/pembajakan (Bootlegging).\n• Inventory Risk: Implementasi sistem Print-on-Demand (POD) untuk kategori produk dengan tingkat perputaran lambat (Slow-moving items) guna mencegah kerugian finansial akibat Overstock.",
        visualIcon: <ShieldCheck />,
        imageUrl: "/images/media-shield.png"
      },
      {
        title: "Proyeksi Finansial",
        heading: "Kebutuhan Modal (CAPEX) & BEP",
        content: "Estimasi Capital Expenditure (CAPEX): Rp 150.000.000 - Rp 300.000.000\n\nAlokasi Dana Utama:\nPembelian bahan mentah (Fabrics) dalam kuantitas grosir, biaya operasional vendor produksi (CMT), pendirian toko fisik/digital (Flagship Store), dan modal pemasaran kampanye koleksi perdana.\n\nPengembalian Modal (ROI) diproyeksikan sangat cepat (Fase Bulan ke-6) karena perputaran uang tunai ritel (Cash Conversion Cycle) yang sangat singkat.",
        visualIcon: <Banknote />,
        imageUrl: "/images/talent-finance.png"
      }
    ]
  },
{
    name: "SE Media Network",
    slug: "se-media-network",
    category: "Media & Broadcasting",
    icon: <RadioTower size={48} strokeWidth={1.5} />,
    gridIcon: <RadioTower size={32} strokeWidth={1.5} />,
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
        content: "SE Media Network adalah lengan publikasi (Publishing Arm) dan infrastruktur penyiaran digital dari PT. Sukabumi Eundeur Holding.\n\nFungsi utama divisi ini adalah mengakuisisi dan mempertahankan atensi jutaan pasang mata audiens melalui jurnalisme gaya hidup, hiburan, dan kultur pop. Kami adalah corong utama yang mengamplifikasi narasi seluruh unit bisnis lainnya (Events, Merchandise) secara mandiri tanpa bergantung pada media pihak ketiga.",
        visualIcon: <RadioTower />
      },
      {
        title: "Visi & Misi Divisi",
        heading: "Ekosistem Jurnalisme & Hiburan Terkurasi",
        imageUrl: "/images/talent-vision.png",
        content: "Visi Strategis:\nMenjadi konglomerasi media digital independen terbesar di Jawa Barat yang mendikte arah tren kultur pop dan gaya hidup urban.\n\nMisi Operasional:\n1. Memproduksi jurnalisme musik dan hiburan yang tajam, berimbang, dan berstandar editorial tinggi.\n2. Mengorkestrasi konten audio-visual interaktif untuk mendominasi algoritma media sosial.\n3. Menjadi jembatan antara merek korporat (B2B) dengan pangsa pasar Milenial dan Gen Z.",
        visualIcon: <Target />
      },
      {
        title: "Problem & Opportunity",
        heading: "Defisit Media Terkurasi & Peluang Geografis",
        imageUrl: "/images/cyber-network.png",
        content: "Identifikasi Masalah (Pain Points):\nAbsennya portal media digital lokal yang berfokus secara eksklusif pada kancah industri kreatif, musik keras (underground), dan streetwear di luar wilayah ibu kota.\n\nPeluang Strategis (Opportunities):\nTingkat penetrasi internet dan konsumsi layar harian (Screen Time) Generasi Z yang membeludak merupakan aset berharga. Kami dapat merebut monopoli atensi di Jawa Barat melalui lokalisasi konten yang relevan dengan keresahan kultural mereka.",
        visualIcon: <TrendingUp />
      },
      {
        title: "Model Bisnis",
        heading: "Ekonomi Atensi (The Attention Economy)",
        imageUrl: "/images/media-eyeballs.png",
        content: "Media modern tidak menjual berita; kami menjual 'Atensi' (Attention).\n\nModel bisnis SE Media Network berfokus pada pengumpulan lalu lintas digital (Traffic Generation) berskala masif melalui strategi Search Engine Optimization (SEO) dan Social Media Virality. Setelah audiens terkumpul (Eyeballs), atensi mereka akan dimonetisasi melalui penjualan ruang iklan komersial kepada entitas bisnis yang ingin menyasar demografi muda.",
        visualIcon: <Zap />
      },
      {
        title: "Portofolio Konten",
        heading: "Format Multi-Media & Penyiaran",
        imageUrl: "/images/media-studio.png",
        content: "Pabrik konten kami mendistribusikan produk melalui empat pilar utama:\n\n1. E-Magazine & News Portal: Publikasi artikel editorial mendalam (In-depth Features) dan ulasan rilisan musik.\n2. Audio Podcast: Diskusi mendalam (Talkshows) dengan para pelaku industri kreatif.\n3. Video Documentaries & Web Series: Serial YouTube premium dan film dokumenter pendek.\n4. Live Broadcasting: Layanan Live Streaming berkualitas penyiaran TV untuk konser dan acara konferensi.",
        visualIcon: <Crown />
      },
      {
        title: "Strategi Distribusi",
        heading: "Omnichannel Content Syndication",
        imageUrl: "/images/media-omnichannel.png",
        content: "Distribusi konten menggunakan pendekatan Omnichannel untuk 'mengepung' pengguna di setiap platform yang mereka gunakan:\n\n• Micro-Content: Pemotongan aset panjang (Video YouTube) menjadi puluhan aset vertikal berdurasi 15-detik untuk mendominasi algoritma TikTok, Instagram Reels, dan YouTube Shorts.\n• Content Syndication: Pendistribusian silang artikel berita ke platform agregator eksternal seperti Line Today atau Google News untuk menjaring traffic baru.",
        visualIcon: <Megaphone />
      },
      {
        title: "Struktur Pendapatan",
        heading: "Monetisasi & Arus Kas Media",
        imageUrl: "/images/talent-revenue.png",
        content: "SE Media Network memiliki Multiple Revenue Streams (Arus Pendapatan Ganda) dengan skalabilitas tak terbatas:\n\n1. Native Advertising / Advertorial: Penulisan artikel bersponsor yang melebur mulus dengan konten editorial.\n2. Programmatic Ads (Google AdSense): Pendapatan pasif otomatis berbasis Cost Per Click (CPC) dan tayangan halaman.\n3. Brand Integration & Endorsement: Penyematan merek sponsor ke dalam produksi Podcast dan Web Series.\n4. Commercial Broadcasting: Penjualan jasa Live Streaming untuk klien korporat (B2B).",
        visualIcon: <LineChart />
      },
      {
        title: "Strategi Penguasaan Pasar",
        heading: "Jurnalisme Berbasis Komunitas (Community-Driven)",
        imageUrl: "/images/cyber-marketing.png",
        content: "Strategi Growth Hacking untuk mengakselerasi jumlah audiens secara organik tanpa biaya iklan (Zero-CAC):\n\n• User Generated Content (UGC): Membuka kolom kontributor publik (Jurnalisme Warga) untuk musisi dan penulis independen lokal.\n• Exclusive Press Partner: Mengamankan posisi sebagai Official Media Partner di seluruh acara kampus dan festival regional, memastikan logo SE Media terpampang di ribuan aset promosi pihak ketiga.",
        visualIcon: <Users />
      },
      {
        title: "Manajemen Risiko",
        heading: "Integritas Jurnalistik & Keamanan Siber",
        imageUrl: "/images/media-shield.png",
        content: "Mitigasi krisis reputasi dan ancaman infrastruktur digital:\n\n• Editorial Integrity: Penerapan Kode Etik Jurnalistik (KEJ) yang ketat untuk mencegah penyebaran disinformasi (Hoax) dan potensi tuntutan pencemaran nama baik (UU ITE).\n• Cyber Security: Proteksi infrastruktur peladen (Server) dan Database audiens dari serangan Distributed Denial of Service (DDoS) dan peretasan data pengguna (Data Breach).",
        visualIcon: <ShieldCheck />
      },
      {
        title: "Proyeksi Finansial",
        heading: "Investasi Infrastruktur (CAPEX) & ROI",
        imageUrl: "/images/slide-7-finance.png",
        content: "Estimasi Capital Expenditure (CAPEX): Rp 250.000.000 - Rp 500.000.000\n\nAlokasi Dana Prioritas:\nPengadaan perangkat penyiaran studio premium (Kamera Cinema, Audio Interface, Lighting), arsitektur server Cloud Hosting berskala tinggi (AWS/Google Cloud), serta periklanan akuisisi pembaca awal.\n\nProyeksi Break Even Point (BEP) ditargetkan pada akhir Tahun ke-2, saat volume traffic audiens telah mencapai batas optimal untuk monetisasi iklan premium langsung (Direct Ads).",
        visualIcon: <Banknote />
      }
    ]
  },
  {
    name: "SE Creative Agency",
    slug: "se-creative-agency",
    category: "Creative Agency",
    icon: <BrainCircuit size={48} strokeWidth={1.5} />,
    gridIcon: <BrainCircuit size={32} strokeWidth={1.5} />,
    description: "Firma kreatif yang menyediakan layanan pemasaran digital terpadu, manajemen identitas merek (branding), serta strategi hubungan masyarakat untuk sektor B2B.",
    fullDescription: "Berperan sebagai unit konsultan kreatif B2B, kami berkolaborasi dengan korporasi, UMKM, dan institusi pemerintah dalam mengoptimasi ekuitas merek (brand equity). Layanan komprehensif kami mensinergikan kreativitas visual kontemporer dengan strategi korporat yang terukur dan berorientasi pada hasil (data-driven).",
    services: [
      "Brand Identity & Logo Design",
      "Social Media Management",
      "Commercial Photography & Videography",
      "Public Relations & Campaign Strategy"
    ],
    budgetClass: "Low",
    capital: "Rp 100.000.000 - Rp 250.000.000",
    avg: 175000000,
    presentationSlides: [
      {
        title: "Executive Summary",
        heading: "Pabrik Ide & Solusi Pemasaran Terpadu",
        imageUrl: "/images/agency-brain.png",
        content: "SE Creative Agency adalah ujung tombak konsultansi B2B (Business-to-Business) di dalam ekosistem Sukabumi Eundeur.\n\nKami beroperasi sebagai firma kreatif yang mendesain solusi pemasaran digital, manajemen identitas merek (Branding), dan hubungan masyarakat (PR). Kami menjual 'Intelektualitas Visual' untuk membantu perusahaan lokal hingga multinasional memenangkan hati audiens Milenial dan Gen Z.",
        visualIcon: <BrainCircuit />
      },
      {
        title: "Visi & Misi Divisi",
        heading: "Optimasi Ekuitas Merek (Brand Equity)",
        imageUrl: "/images/agency-brand.png",
        content: "Visi Strategis:\nMenjadi biro iklan dan firma kreatif (Ad Agency) paling dihormati yang merombak standar komunikasi visual korporat di Jawa Barat.\n\nMisi Operasional:\n1. Mentranslasikan bahasa korporat yang kaku menjadi komunikasi visual yang adaptif dan kontemporer.\n2. Melaksanakan kampanye pemasaran berbasis data (Data-Driven Marketing).\n3. Menjadi 'Otak Kreatif' (Creative Brain) di balik kesuksesan seluruh unit bisnis internal SE Holding.",
        visualIcon: <Target />
      },
      {
        title: "Problem & Opportunity",
        heading: "Jurang Komunikasi Korporasi-ke-Milenial",
        imageUrl: "/images/media-eyeballs.png",
        content: "Identifikasi Masalah (Pain Points):\nBanyak instansi pemerintah dan perusahaan tradisional gagal melakukan penetrasi ke pasar muda karena bahasa visual dan kampanye mereka dianggap usang (Outdated).\n\nPeluang Strategis (Opportunities):\nSebagai entitas yang lahir dari budaya anak muda (Youth Culture), kami memiliki 'Kredibilitas Jalanan' (Street Cred) untuk memandu merek-merek raksasa agar dapat relevan dan diterima oleh generasi konsumtif terbaru.",
        visualIcon: <TrendingUp />
      },
      {
        title: "Model Bisnis",
        heading: "Retainer B2B & Konsultansi Proyek",
        imageUrl: "/images/agency-pitch.png",
        content: "Model pendapatan agensi kami sangat stabil karena didesain dengan skema B2B:\n\n1. Retainer Contracts: Klien membayar biaya berlangganan bulanan (Rp 15-50 Juta/Bulan) untuk manajemen media sosial dan PR jangka panjang, mengamankan arus kas dasar (Base Cash Flow).\n2. Project-Based: Penanganan kampanye berskala masif (Pemilu, Peluncuran Produk) dengan skema bagi hasil atau nilai kontrak (Lump Sum) bernilai tinggi.",
        visualIcon: <Zap />
      },
      {
        title: "Portofolio Layanan",
        heading: "Spektrum Layanan Firma Kreatif",
        imageUrl: "/images/agency-palette.png",
        content: "Layanan kami terbagi ke dalam divisi spesialis yang beroperasi seperti Boutique Agency:\n\n• Brand Identity & Strategy: Penciptaan logo, buku panduan merek (Brand Guidelines), dan Positioning.\n• Digital Campaign & SMM: Manajemen Media Sosial komprehensif dan periklanan digital (Meta Ads, Google Ads).\n• Commercial Production: Layanan fotografi komersial, pembuatan video profil perusahaan, dan sinematografi iklan televisi (TVC).\n• Public Relations (PR): Manajemen krisis reputasi dan penulisan siaran pers.",
        visualIcon: <Crown />
      },
      {
        title: "Strategi Akuisisi Klien",
        heading: "Jejaring Korporasi & Tender Eksklusif",
        imageUrl: "/images/cyber-marketing.png",
        content: "Pendekatan penjualan (Sales Approach) difokuskan pada akuisisi skala makro:\n\n• B2B Pitching: Partisipasi dalam tender proyek pemerintahan dan BUMN dengan menawarkan proposal kampanye revolusioner.\n• Ekosistem internal: Memanfaatkan klien sponsor SE Events sebagai saluran Upselling untuk membeli layanan desain SE Creative Agency.\n• White-labeling: Menjadi sub-kontraktor (agen di balik layar) untuk firma periklanan raksasa dari Jakarta yang membutuhkan eksekutor regional.",
        visualIcon: <Megaphone />
      },
      {
        title: "Struktur Pendapatan",
        heading: "Tingkat Keuntungan Layanan Jasa (Service Margin)",
        imageUrl: "/images/talent-revenue.png",
        content: "Kelebihan utama bisnis agensi adalah Net Profit Margin yang luar biasa tinggi (Bisa mencapai 60% - 80%).\n\nHal ini disebabkan karena komoditas utama yang dijual adalah ide dan kapabilitas sumber daya manusia (Intellectual Capital), bukan barang fisik yang membutuhkan biaya material (COGS) mahal. Seluruh tagihan kepada klien berfokus pada tarif profesional (Professional Fees).",
        visualIcon: <LineChart />
      },
      {
        title: "Manajemen Risiko",
        heading: "Proteksi Ide & Retensi Klien",
        imageUrl: "/images/agency-intellectual.png",
        content: "Perlindungan terhadap aset terbesar agensi, yaitu Intelektualitas dan Klien:\n\n• Legal Protection: Penerapan Non-Disclosure Agreement (NDA) yang ketat dan kontrak Intellectual Property agar ide tidak dicuri selama proses Pitching.\n• Client Retention: Fokus pada strategi manajemen klien (Account Management) yang intim untuk memastikan klien Retainer memperpanjang kontrak secara tahunan (Annual Renewal).",
        visualIcon: <ShieldCheck />
      },
      {
        title: "Proyeksi Finansial",
        heading: "Kebutuhan Modal (CAPEX) & BEP",
        imageUrl: "/images/slide-7-finance.png",
        content: "Estimasi Capital Expenditure (CAPEX): Rp 100.000.000 - Rp 250.000.000\n\nAlokasi Dana Utama:\nKebutuhan modal kerja divisi ini sangat rendah, dialokasikan murni untuk pembelian perangkat kerja tingkat tinggi (High-end Workstations/MacBooks), lisensi software desain (Adobe CC), serta dekorasi ruang kantor representatif untuk menjamu klien korporat.\n\nTitik Impas (BEP) diproyeksikan paling cepat (Bulan ke-3 hingga ke-4) hanya dengan mengamankan 3-5 klien Retainer kelas menengah.",
        visualIcon: <Banknote />
      }
    ]
  },
  {
    name: "SE Records",
    slug: "se-records",
    category: "Record Label",
    icon: <Disc3 size={48} strokeWidth={1.5} />,
    gridIcon: <Disc3 size={32} strokeWidth={1.5} />,
    description: "Label rekaman musik independen yang berdedikasi pada proses inkubasi, produksi audio, dan distribusi karya musisi lokal ke pasar digital global.",
    fullDescription: "SE Records hadir sebagai infrastruktur akselerator bagi talenta musik di wilayah Sukabumi dan sekitarnya. Kami memfasilitasi siklus produksi musik secara menyeluruh, mulai dari perekaman studio, manajemen hak cipta (royalti), hingga distribusi aset ke berbagai Digital Streaming Platforms (DSP) berskala internasional.",
    services: [
      "Audio Recording & Mastering",
      "Digital Music Distribution",
      "Music Video Production",
      "A&R / Talent Scouting"
    ],
    budgetClass: "Medium",
    capital: "Rp 300.000.000 - Rp 600.000.000",
    avg: 450000000,
    presentationSlides: [
      {
        title: "Executive Summary",
        heading: "Inkubator Talenta & Mesin Royalti (Royalty Engine)",
        imageUrl: "/images/records-engine.png",
        content: "SE Records adalah label rekaman independen dan infrastruktur manajemen hak cipta audio dari PT. Sukabumi Eundeur Holding.\n\nKami beroperasi sebagai mesin pencetak aset (Asset Generator) dengan cara mengakuisisi hak edar karya musisi lokal, memproduksinya dengan standar industri global, dan mendistribusikannya ke seluruh dunia. Tujuan akhirnya adalah mengamankan aliran pendapatan pasif seumur hidup (Lifetime Passive Income) dari sistem royalti digital.",
        visualIcon: <Disc3 />
      },
      {
        title: "Visi & Misi Divisi",
        heading: "Ekspor Musik Lokal ke Pasar Global",
        imageUrl: "/images/records-global.png",
        content: "Visi Strategis:\nMendesentralisasi kekuatan industri musik nasional dari Jakarta ke Jawa Barat, menjadikan Sukabumi sebagai episentrum ekspor budaya baru.\n\nMisi Operasional:\n1. Melakukan kurasi (A&R) ketat terhadap talenta dengan potensi komersial tinggi.\n2. Memberikan fasilitas produksi rekaman audio (Tracking, Mixing, Mastering) tanpa batas kompromi kualitas.\n3. Melakukan penetrasi algoritmik di berbagai Digital Streaming Platforms (DSP) seperti Spotify dan Apple Music.",
        visualIcon: <Target />
      },
      {
        title: "Problem & Opportunity",
        heading: "Ledakan Era Streaming & Demokratisasi Musik",
        imageUrl: "/images/media-eyeballs.png",
        content: "Identifikasi Masalah (Pain Points):\nBanyak musisi regional berbakat tidak memahami literasi industri musik, buta terhadap hukum hak cipta, dan gagal memonetisasi karya mereka.\n\nPeluang Strategis (Opportunities):\nEra Music Streaming menghancurkan monopoli distribusi fisik. Kini, sebuah lagu indie dari Sukabumi memiliki kesempatan yang sama untuk didengarkan oleh audiens di Eropa (Border-less Distribution), mendatangkan devisa royalti dalam mata uang asing.",
        visualIcon: <TrendingUp />
      },
      {
        title: "Model Bisnis",
        heading: "Skema 360-Degree Deal & Hak Master",
        imageUrl: "/images/cyber-contract.png",
        content: "SE Records mengadopsi struktur perjanjian 360-Degree Deal untuk memaksimalkan keuntungan silang antar unit bisnis:\n\n1. Label bertindak ganda sebagai investor rekaman, promotor panggung, dan produsen merchandise bagi si artis.\n2. Pembagian hasil mencakup persentase dari: Royalti Digital (Streaming), Penjualan Fisik, Bayaran Manggung (Show Fee), dan Endorsement.\n3. Kepemilikan Hak Master (Master Rights) berada di bawah payung SE Holding sebagai instrumen aset abadi perusahaan.",
        visualIcon: <Zap />
      },
      {
        title: "Portofolio Layanan",
        heading: "Siklus Lengkap Produksi & Distribusi",
        imageUrl: "/images/media-studio.png",
        content: "Fasilitas kami beroperasi sebagai solusi satu pintu (End-to-End Solutions):\n\n• A&R (Artists and Repertoire): Penemuan dan pengembangan identitas komersial artis.\n• Studio Production: Fasilitas studio rekaman kedap suara untuk proses Produksi, Mixing, dan Mastering.\n• Digital Aggregator: Kemitraan jalur pipa ke seluruh DSP dunia (Spotify, iTunes, TikTok Audio).\n• Music Publishing: Registrasi legalitas HAKI untuk memastikan setiap detik lagu yang diputar di radio/TV menagih royalti performa (Performance Rights).",
        visualIcon: <Crown />
      },
      {
        title: "Strategi Pemasaran",
        heading: "Algorithmic Playlisting & Sinkronisasi (Sync)",
        imageUrl: "/images/cyber-network.png",
        content: "Era modern membutuhkan pemasaran musik berbasis retasan algoritma:\n\n• Algorithmic Push: Mendorong lagu rilisan ke Curated Playlists Spotify dan kampanye audiens (Pitching) agar lagu menjadi viral di TikTok.\n• Sync Placements: Melakukan lobi industri film dan agensi periklanan agar lagu dari katalog SE Records digunakan sebagai Soundtrack (Film/Series Netflix) atau Jingle Iklan TV, yang mendatangkan nilai kontrak (Sync Fee) bernilai fantastis.",
        visualIcon: <Megaphone />
      },
      {
        title: "Struktur Pendapatan",
        heading: "Piramida Royalti (Royalty Streams)",
        imageUrl: "/images/talent-revenue.png",
        content: "Mekanisme pengumpulan uang tunai SE Records didapat dari 'Tidur pun Tetap Dibayar':\n\n1. Master Royalties: Pembayaran dari platform streaming (DSP) atas hak putar (streams).\n2. Mechanical Royalties: Pembayaran atas reproduksi fisik (Piringan Hitam, Kaset, CD) dan unduhan digital.\n3. Performance Royalties: Kutipan dana saat lagu diputar di tempat komersial (Kafe, Radio, Mall) yang dikelola melalui Lembaga Manajemen Kolektif Nasional (LMKN).\n4. 360-Splits: Potongan langsung dari bayaran manggung (Booking Fee) artis.",
        visualIcon: <LineChart />
      },
      {
        title: "Manajemen Risiko",
        heading: "Sengketa Kontrak & Perlindungan Master",
        imageUrl: "/images/agency-intellectual.png",
        content: "Mitigasi perihal hukum dan pembelotan artis:\n\n• Legal Precision: Penulisan kontrak eksklusif (Binding Contracts) dengan pasal-pasal perlindungan finansial jika artis memutuskan keluar secara sepihak (Buyout Penalty).\n• Copyright Clearance: Verifikasi ketat (Anti-Plagiarism) dan penyelesaian hak cipta sampel audio sebelum sebuah lagu didistribusikan untuk menghindari tuntutan hukum (Lawsuits) dari pihak ketiga.",
        visualIcon: <ShieldCheck />
      },
      {
        title: "Proyeksi Finansial",
        heading: "Investasi Infrastruktur (CAPEX) & ROI Jangka Panjang",
        imageUrl: "/images/talent-finance.png",
        content: "Estimasi Capital Expenditure (CAPEX): Rp 300.000.000 - Rp 600.000.000\n\nAlokasi Dana Utama:\nPembangunan insulasi akustik untuk studio rekaman komersial, pembelian hardware analog dan digital audio workstation berstandar Grammy, serta dana talangan awal pembayaran uang muka (Advance Payment) untuk merekrut artis potensial.\n\nHorizon Investasi bisnis label rekaman adalah jangka menengah-panjang. Titik Impas (BEP) dapat meledak secara eksponensial hanya dengan 1 (satu) rilisan lagu mega-hits yang viral.",
        visualIcon: <Banknote />
      }
    ]
  },
  {
    name: "SE Local Marketplace",
    slug: "se-local-marketplace",
    category: "E-Commerce",
    icon: <Store size={48} strokeWidth={1.5} />,
    gridIcon: <Store size={32} strokeWidth={1.5} />,
    description: "Platform perdagangan elektronik (E-Commerce) terpadu yang memfasilitasi transaksi produk UMKM, karya kreatif, dan sistem integrasi tiket.",
    fullDescription: "Dalam rangka mendukung digitalisasi sektor UMKM lokal, unit ini mengelola infrastruktur marketplace digital berskala regional. Sistem ini tidak hanya mendistribusikan komoditas ritel fisik, melainkan juga mengintegrasikan sistem manajemen tiket elektronik (e-ticketing) untuk memfasilitasi seluruh operasional acara secara terpusat.",
    services: [
      "Online Ticketing Platform",
      "Local Brand E-Commerce",
      "Digital Payment Gateway Integration",
      "Merchant Management System"
    ],
    budgetClass: "Medium - High",
    capital: "Rp 400.000.000 - Rp 800.000.000",
    avg: 600000000,
    presentationSlides: [
      {
        title: "Executive Summary",
        heading: "Platform Sentralisasi Ekonomi Kreatif",
        imageUrl: "/images/media-omnichannel.png",
        content: "SE Local Marketplace adalah infrastruktur teknologi penyokong (Tech Enabler) yang berfungsi menangkap seluruh transaksi digital di dalam ekosistem perusahaan.\n\nSistem ini tidak hanya bertindak sebagai wadah perdagangan e-commerce untuk produk UMKM, tetapi merupakan pintu gerbang utama (Gateway) untuk sistem distribusi tiket elektronik (E-Ticketing) mandiri, mencegah kebocoran data pengguna ke platform pihak ketiga.",
        visualIcon: <Store />
      },
      {
        title: "Visi & Misi Divisi",
        heading: "Ekosistem Transaksi Tertutup (Closed-Loop Economy)",
        imageUrl: "/images/records-engine.png",
        content: "Visi Strategis:\nMembangun ekonomi digital sirkular di mana setiap rupiah yang dibelanjakan audiens (tiket, kaos, makanan) terus berputar di dalam server SE Holding.\n\nMisi Operasional:\n1. Meniadakan biaya platform (Platform Fee) sebesar 5-10% yang biasa ditarik oleh vendor tiket eksternal.\n2. Mengumpulkan dan memiliki First-Party Data (Data Pengguna Langsung) untuk keperluan Retargeting Ads.\n3. Memberikan akses digitalisasi bagi UMKM lokal untuk berjualan secara daring.",
        visualIcon: <Target />
      },
      {
        title: "Model Bisnis",
        heading: "Monetisasi Transaksi & Subscription",
        imageUrl: "/images/talent-revenue.png",
        content: "Platform ini mencetak pendapatan melalui sistem otomatis (Automated Revenue):\n\n1. Ticketing Service Fee: Potongan administrasi per lembar tiket yang terjual.\n2. Marketplace Commission: Persentase bagi hasil dari setiap transaksi barang dagangan (Merchandise) vendor eksternal di platform.\n3. Merchant Subscription: Biaya langganan sistem manajemen kasir (POS) untuk UMKM saat berjualan di festival fisik.",
        visualIcon: <Zap />
      },
      {
        title: "Portofolio Layanan",
        heading: "Infrastruktur Perdagangan Elektronik",
        imageUrl: "/images/cyber-network.png",
        content: "Layanan utama perangkat lunak (SaaS):\n\n• Proprietary E-Ticketing: Sistem tiket dengan Dynamic QR Code berbasis enkripsi anti-calo.\n• Merchant Management System: Dasbor penjual bagi vendor untuk melacak stok dan penjualan.\n• Digital Payment Gateway: Integrasi langsung dengan QRIS, Bank Transfer (VA), dan E-Wallet untuk otomatisasi arus kas.\n• B2C Marketplace: Toko daring yang beroperasi 24/7 di luar musim festival.",
        visualIcon: <Crown />
      },
      {
        title: "Manajemen Risiko",
        heading: "Keamanan Siber & Stabilitas Server",
        imageUrl: "/images/media-shield.png",
        content: "Mitigasi kerentanan teknologi informasi:\n\n• Server Downtime (Crash): Penggunaan Auto-Scaling Cloud Infrastructure (AWS) untuk menahan lonjakan jutaan hit dalam 1 menit saat momen 'War Tiket' dibuka.\n• Fraud Detection: Penerapan sistem anti-pencucian uang dan deteksi penipuan transaksi otomatis.\n• Data Privacy: Kepatuhan ketat terhadap Undang-Undang Pelindungan Data Pribadi (UU PDP) dan pengamanan basis data pelanggan (Encryption).",
        visualIcon: <ShieldCheck />
      },
      {
        title: "Proyeksi Finansial",
        heading: "Investasi Perangkat Lunak (CAPEX) & ROI",
        imageUrl: "/images/talent-finance.png",
        content: "Estimasi Capital Expenditure (CAPEX): Rp 400.000.000 - Rp 800.000.000\n\nAlokasi Dana Utama:\nPerekrutan barisan Software Engineers (Backend, Frontend, DevOps), biaya sewa peladen awan (Cloud Server), lisensi keamanan SSL/TLS, dan integrasi Payment Gateway komersial.\n\nTitik Impas (BEP) dapat dicapai dalam 1 tahun pertama hanya dengan mengkonversi biaya admin dari 50.000 pembeli tiket acara internal SE Events.",
        visualIcon: <Banknote />
      }
    ]
  },
  {
    name: "SE Culinary / FnB",
    slug: "se-culinary-fnb",
    category: "Food & Beverage",
    icon: <Flame size={48} strokeWidth={1.5} />,
    gridIcon: <Flame size={32} strokeWidth={1.5} />,
    description: "Entitas bisnis makanan dan minuman yang mengelola fasilitas kedai kopi, layanan penyedia makanan (catering) korporat, serta manajemen ritel kuliner festival.",
    fullDescription: "Sebagai ekspansi strategis dari ekosistem hiburan, SE Culinary beroperasi pada dua sektor utama: pendirian fasilitas kafe komersial yang merangkap sebagai ruang kerja kreatif (creative hub), dan manajemen rantai pasok konsumsi skala besar untuk keperluan logistik acara dan festival.",
    services: [
      "Coffee Shop & Eatery",
      "Event Catering (Crew & VIP)",
      "Food Truck & Festival Tenants",
      "Culinary Brand Incubation"
    ],
    budgetClass: "Medium",
    capital: "Rp 200.000.000 - Rp 500.000.000",
    avg: 350000000,
    presentationSlides: [
      {
        title: "Executive Summary",
        heading: "Logistik Konsumsi & Sentra Ritel Kuliner",
        imageUrl: "/images/cyber-factory.png",
        content: "SE Culinary / FnB (Food & Beverage) mengelola dua lini utama yang sangat lukratif: Fasilitas ritel komersial publik (Kafe/Eatery) dan Rantai Pasok Katering Skala Besar (Event Catering).\n\nDivisi ini hadir berdasarkan premis sederhana: 'Setiap manusia yang mendatangi festival musik atau bekerja di belakang panggung, mutlak membutuhkan makanan dan minuman'. Kami menangkap pengeluaran wajib tersebut agar tetap berputar di dalam holding.",
        visualIcon: <Flame />
      },
      {
        title: "Visi & Misi Divisi",
        heading: "Menangkap Value dari Sektor Primer",
        imageUrl: "/images/records-global.png",
        content: "Visi Strategis:\nMenjadi penyedia logistik makanan/minuman B2B yang mendominasi operasi Backstage festival dan Creative Hub terfavorit di Jawa Barat.\n\nMisi Operasional:\n1. Memotong biaya konsumsi kru internal (Riders) saat menyelenggarakan festival hingga 40%.\n2. Mengoperasikan kafe komersial yang merangkap sebagai ruang kerja (Co-working Space) bagi komunitas kreatif lokal.\n3. Menjadi agregator penyewaan booth makanan untuk mitra eksternal di arena festival.",
        visualIcon: <Target />
      },
      {
        title: "Model Bisnis",
        heading: "Pendapatan Ritel B2C & Grosir B2B",
        imageUrl: "/images/slide-7-finance.png",
        content: "Sistem pendapatan ganda dari dua pasar yang berbeda:\n\n1. B2C (Business-to-Consumer): Penjualan makanan/minuman harian langsung kepada pelanggan kafe, dengan Gross Margin kopi yang mencapai lebih dari 70% per cangkir.\n2. B2B (Business-to-Business): Layanan penyediaan prasmanan (Catering) berskala ribuan porsi untuk kru (Crew Meals), tamu VVIP (Riders), dan acara korporasi pihak ketiga.\n3. Tenant Leasing: Penyewaan hak lahan (Space Rental) bagi UMKM kuliner di dalam lokasi festival SE Events.",
        visualIcon: <Zap />
      },
      {
        title: "Strategi Rantai Pasok",
        heading: "Efisiensi Pembelian Grosir (Wholesale)",
        imageUrl: "/images/media-hub.png",
        content: "Optimalisasi keuntugan (Profit Margin) direalisasikan melalui manajemen rantai pasok (Supply Chain) yang agresif:\n\n• Sourcing: Pembelian bahan baku mentah langsung dari petani lokal Sukabumi (Biji Kopi, Sayur, Daging) untuk menekan Cost of Goods Sold (COGS).\n• Central Kitchen: Pembangunan Dapur Terpusat (Commissary Kitchen) untuk menstandarisasi rasa makanan (Quality Control) dan mengolah ribuan porsi secara masal dengan efisiensi waktu maksimum.",
        visualIcon: <Warehouse />
      },
      {
        title: "Manajemen Risiko",
        heading: "Keamanan Pangan (Food Safety) & Logistik",
        imageUrl: "/images/agency-intellectual.png",
        content: "Pencegahan krisis terkait barang yang mudah rusak (Perishables):\n\n• Standar CHSE: Penerapan Cleanliness, Health, Safety, and Environment Sustainability di area dapur guna mencegah kontaminasi (Food Poisoning) yang bisa menghancurkan reputasi perusahaan.\n• Inventory Management: Penerapan sistem kalkulasi stok harian yang presisi agar bahan baku mentah tidak terbuang (Food Waste) karena melewati masa kedaluwarsa.",
        visualIcon: <ShieldCheck />
      },
      {
        title: "Proyeksi Finansial",
        heading: "Investasi Dapur Komersial (CAPEX) & BEP",
        imageUrl: "/images/slide-1-briefcase.png",
        content: "Estimasi Capital Expenditure (CAPEX): Rp 200.000.000 - Rp 500.000.000\n\nAlokasi Dana Utama:\nRenovasi fisik gerai ritel (Kafe), pembelian mesin Espresso komersial, peralatan Dapur Industri (Stainless Steel Kitchen), serta armada Food Truck (jika diperlukan untuk aktivasi keliling).\n\nTitik Impas (BEP) dirancang untuk tercapai dalam rentang waktu 12-18 bulan melalui perputaran arus kas harian (Daily Cash Flow) dari kedai kopi dan penagihan kontrak B2B bulanan.",
        visualIcon: <Banknote />
      }
    ]
  },
  {
    name: "SE Equipment Rentals",
    slug: "se-equipment-rentals",
    category: "Production Rentals",
    icon: <PlugZap size={48} strokeWidth={1.5} />,
    gridIcon: <PlugZap size={32} strokeWidth={1.5} />,
    description: "Penyedia layanan infrastruktur produksi teknis berskala besar, mencakup sistem tata suara, tata cahaya, panggung (rigging), dan multimedia.",
    fullDescription: "Berfungsi sebagai pusat pemenuhan aset teknis (inventory hub), unit ini didirikan untuk menekan biaya modal produksi internal dan menghasilkan arus kas dari sektor B2B. Investasi strategis pada perangkat keras produksi memosisikan perusahaan sebagai pemasok utama kebutuhan logistik hiburan di kawasan Jawa Barat.",
    services: [
      "Sound System Line Array & Monitor",
      "Lighting & Visual FX",
      "LED Screen & Multimedia",
      "Rigging, Stage & Barricade"
    ],
    budgetClass: "High",
    capital: "Rp 1.500.000.000 - Rp 3.000.000.000",
    avg: 2250000000,
    presentationSlides: [
      {
        title: "Executive Summary",
        heading: "Tulang Punggung Infrastruktur Skala Stadion",
        imageUrl: "/images/slide-4-stage.png",
        content: "SE Equipment Rentals berfokus pada kapitalisasi perangkat keras (Hardware) industri hiburan berskala berat.\n\nBiaya paling destruktif dalam menyelenggarakan festival musik raksasa adalah pembayaran vendor penyewaan Sound System, Tata Cahaya, dan Rigging (Besi Panggung) pihak ketiga. Divisi ini diciptakan untuk memangkas kebocoran biaya tersebut dengan cara memiliki asetnya sendiri (Asset Ownership), mengubah 'Beban Operasional' menjadi 'Mesin Pencetak Uang'.",
        visualIcon: <PlugZap />
      },
      {
        title: "Visi & Misi Divisi",
        heading: "Kemandirian Eksekusi Produksi (Self-Sufficiency)",
        imageUrl: "/images/cyber-factory.png",
        content: "Visi Strategis:\nMenjadi vendor penyedia peralatan produksi (Technical Rider) terbesar dan terlengkap di Jawa Barat, mematikan ketergantungan promotor lokal terhadap vendor dari Jakarta.\n\nMisi Operasional:\n1. Menyediakan inventaris Sound System Line Array dan Lighting berspesifikasi festival internasional.\n2. Menghemat biaya operasional produksi SE Events (Internal) hingga 50-60%.\n3. Menguasai tender penyewaan alat untuk acara pemerintahan (Pilkada/HUT Kota) dan konser korporat eksternal (B2B).",
        visualIcon: <Target />
      },
      {
        title: "Model Bisnis",
        heading: "Penyewaan B2B (Cross-Rental)",
        imageUrl: "/images/agency-pitch.png",
        content: "Aset perangkat keras tidak boleh tertidur (Idle). Saat SE Events tidak menyelenggarakan festival, alat akan bekerja menghasilkan uang melalui:\n\n1. External Rentals (B2B): Disewakan harian kepada promotor independen, kampanye politik, atau resepsi pernikahan premium (Wedding Planners).\n2. Dry Hire / Cross-Rental: Disewakan ke sesama vendor rental peralatan lain yang kekurangan stok alat saat High-Season (Musim Kampanye/Libur Akhir Tahun).",
        visualIcon: <Zap />
      },
      {
        title: "Portofolio Inventaris",
        heading: "Aset Teknis Berstandar Internasional",
        imageUrl: "/images/slide-1-briefcase.png",
        content: "Portofolio perangkat produksi meliputi aset kelas berat (Heavy Duty Asset):\n\n• Sound System: Line Array Speaker System, Subwoofers, dan Konsol Mixing Digital kelas tur dunia (Avid/DiGiCo/Yamaha).\n• Lighting System: Ratusan modul lampu Moving Head, Beam, Strobe, dan mesin efek visual (Smoke/Laser).\n• Multimedia: Modul panel layar LED Pitch rendah berskala konser (Giant Screens).\n• Stage & Rigging: Konstruksi besi aluminium penopang atap panggung (Rigging Truss) dan Barricade keamanan massa (Mojo Barriers).",
        visualIcon: <Crown />
      },
      {
        title: "Manajemen Risiko",
        heading: "Depresiasi Alat & Proteksi Aset Fisik",
        imageUrl: "/images/media-shield.png",
        content: "Mitigasi hancurnya investasi perangkat keras akibat operasional lapangan:\n\n• Mechanical Insurance: Pembelian asuransi barang elektronik untuk melindungi aset dari kerusakan teknis fatal, korsleting listrik (Power Surge), maupun musibah cuaca (Force Majeure).\n• Preventive Maintenance: Pembentukan tim teknisi khusus yang bertugas mengecek, membersihkan, dan memperbaiki alat secara rutin (SOP Pemeliharaan) agar alat memiliki usia pakai (Lifespan) di atas 10 tahun.",
        visualIcon: <ShieldCheck />
      },
      {
        title: "Proyeksi Finansial",
        heading: "Belanja Modal Skala Besar (CAPEX) & Pengembalian",
        imageUrl: "/images/talent-finance.png",
        content: "Estimasi Capital Expenditure (CAPEX): Rp 1.500.000.000 - Rp 3.000.000.000\n\nAlokasi Dana Prioritas:\nBisnis ini merupakan unit bisnis berintensitas modal paling tinggi (Heavy-Asset). Seluruh dana miliaran rupiah akan ditukar langsung menjadi aset fisik inventaris (Alat Audio, Lampu, Besi Rigging) yang bisa diagunkan ke bank (Collateral).\n\nPengembalian Modal (ROI): Meski modal awalnya kolosal, Profit Margin dari penyewaan sangat tinggi karena tidak ada COGS (Biaya Bahan Baku). BEP umumnya dicapai dalam kurun waktu 3 hingga 5 tahun, setelah itu alat murni mencetak laba bersih.",
        visualIcon: <Banknote />
      }
    ]
  },
  {
    name: "SE Talent Management",
    slug: "se-talent-management",
    category: "Artist Management",
    icon: <Crown size={48} strokeWidth={1.5} />,
    gridIcon: <Crown size={32} strokeWidth={1.5} />,
    description: "Layanan manajemen sumber daya manusia yang berfokus pada representasi eksklusif seniman, tokoh publik, dan pemengaruh digital (influencer).",
    fullDescription: "Optimalisasi sumber daya manusia merupakan pilar utama dalam industri hiburan. Divisi ini mengelola aspek legal dan komersial melalui kontrak eksklusif dengan para praktisi seni, pemandu acara (MC), hingga Key Opinion Leaders (KOL), guna memastikan standarisasi kualitas representasi merek di ranah publik.",
    services: [
      "Exclusive Artist Contract",
      "KOL & Influencer Marketing",
      "Booking Agency",
      "Brand Ambassador Dealings"
    ],
    budgetClass: "Low",
    capital: "Rp 50.000.000 - Rp 150.000.000",
    avg: 100000000,
    presentationSlides: [
      {
        title: "Executive Summary",
        heading: "Repositori Bakat & Eksekusi Komersial Eksklusif",
        imageUrl: "/images/talent-management.png",
        content: "SE Talent Management mengkapitalisasi pengaruh dari Sumber Daya Manusia (SDM). Kami tidak menyewakan barang, kami menyewakan 'Ketenaran' dan 'Persona'.\n\nBanyak pemengaruh digital (Influencers), MC (Pembawa Acara), dan seniman lokal yang memiliki ribuan pengikut, namun gagal meraup uang secara profesional. Divisi ini hadir untuk mewakili mereka secara eksklusif (Exclusive Representation), menjual jasa mereka ke korporat, dan mengambil potongan agensi (Agency Cut).",
        visualIcon: <Crown />
      },
      {
        title: "Visi & Misi Divisi",
        heading: "Agensi Manajer Representatif Skala Nasional",
        imageUrl: "/images/talent-vision.png",
        content: "Visi Strategis:\nMenjadi rumah bernaung paling elit bagi figur publik (Public Figures) di wilayah regional, mengantarkan mereka dari talenta lokal menjadi artis skala nasional.\n\nMisi Operasional:\n1. Mengedukasi talenta terkait etika kerja profesional, penentuan harga (Rate Card), dan pembentukan citra (Image Branding).\n2. Membangun jaringan relasi bisnis ke berbagai merek FMCG (Fast-Moving Consumer Goods) dan agensi periklanan di Jakarta.\n3. Mengurus seluruh legalitas, negosiasi sengketa, dan penagihan kontrak (Invoicing) agar artis fokus hanya pada karya.",
        visualIcon: <Target />
      },
      {
        title: "Model Bisnis",
        heading: "Monetisasi Berbasis Agency Cut (Potongan Manajer)",
        imageUrl: "/images/talent-revenue.png",
        content: "Ini adalah bisnis tanpa biaya pokok produksi. Pendapatan didorong mutlak dari negosiasi:\n\n1. Management Cut (20-30%): Dari setiap pekerjaan yang diterima artis (Manggung, Endorsement Instagram/TikTok, Penampilan TV), agensi mengambil potongan tetap.\n2. In-House Booking: Menggunakan talenta internal (In-House) untuk mengisi acara yang dibuat oleh SE Events. (Contoh: MC dari agensi kita dibayar oleh SE Events, perputaran uang tetap di internal holding).\n3. Brand Ambassador Deal: Negosiasi kontrak miliaran rupiah sebagai duta merek tahunan untuk artis lapis utama (Tier-1).",
        visualIcon: <Zap />
      },
      {
        title: "Manajemen Risiko",
        heading: "Krisis Reputasi (PR Crisis) & Kontrak Hukum",
        imageUrl: "/images/talent-risk.png",
        content: "Mengelola aset berupa 'Manusia' adalah bisnis dengan risiko tak terprediksi tertinggi:\n\n• Cancel Culture & Scandal: Menerapkan klausul penghentian kontrak secara sepihak dan SOP Public Relations Crisis Management jika artis tersandung kasus pidana, asusila, atau skandal viral yang merusak nama agensi.\n• Breach of Contract (Pembelotan): Kontrak eksklusif (Exclusive Agreement) kedap hukum untuk memastikan artis tidak menerima pekerjaan 'di bawah tangan' secara diam-diam demi menghindari potongan agensi.",
        visualIcon: <ShieldCheck />
      },
      {
        title: "Proyeksi Finansial",
        heading: "Bisnis Nihil Modal (Zero-CAPEX) Bermargin Tinggi",
        imageUrl: "/images/talent-finance.png",
        content: "Estimasi Capital Expenditure (CAPEX): Rp 50.000.000 - Rp 150.000.000\n\nAlokasi Dana Utama:\nBiaya modal kerja nyaris tidak ada. Dana kecil dialokasikan murni untuk operasional legal (Pembuatan Kontrak oleh Firma Hukum), biaya representasi (Entertaining Clients/Networking), dan pemotretan profesional (Portfolio Shoot) untuk artis baru.\n\nTitik Impas (BEP) bisa dicapai di bulan pertama operasi karena model bisnis ini murni berbasis 'Potongan Pendapatan' tanpa keharusan membangun infrastruktur fisik.",
        visualIcon: <Banknote />
      }
    ]
  },
  {
    name: "SE Venues & Spaces",
    slug: "se-venues-spaces",
    category: "Property",
    icon: <Warehouse size={48} strokeWidth={1.5} />,
    gridIcon: <Warehouse size={32} strokeWidth={1.5} />,
    description: "Manajemen manajemen properti komersial, penyediaan fasilitas ruang acara, studio produksi multifungsi, dan pusat inkubasi kreatif.",
    fullDescription: "Sebagai wujud nyata dari kapitalisasi aset fisik perusahaan, divisi ini berfokus pada akuisisi dan pengelolaan lahan komersial jangka panjang. Aset tersebut dikembangkan menjadi venue pertunjukan berstandar nasional, studio produksi (audio/visual) komersial, serta ruang kerja kolaboratif (co-working space).",
    services: [
      "Event Venue Management",
      "Rehearsal & Photography Studios",
      "Co-working Space & Creative Hub",
      "Property Asset Investment"
    ],
    budgetClass: "Very High",
    capital: "Rp 2.000.000.000 - Rp 5.000.000.000",
    avg: 3500000000,
    presentationSlides: [
      {
        title: "Executive Summary",
        heading: "Kapitalisasi Aset Fisik & Ruang Komersial",
        imageUrl: "/images/slide-1-briefcase.png",
        content: "SE Venues & Spaces adalah puncak pembuktian eksistensi fisik PT. Sukabumi Eundeur Holding. Divisi ini berfokus pada manajemen properti, penguasaan lahan (Real Estate), dan monetisasi tata ruang.\n\nMemiliki lahan (Tanah/Bangunan) komersial membebaskan SE Events dari pemerasan harga sewa ruang oleh pihak ketiga. Ini adalah jangkar fisik (Physical Anchor) yang akan menjadi Markas Besar (Headquarters), Studio Produksi, dan Pusat Berkumpulnya Sub-kultur di Jawa Barat.",
        visualIcon: <Warehouse />
      },
      {
        title: "Visi & Misi Divisi",
        heading: "Monumen Bersejarah Sub-kultur (Cultural Landmark)",
        imageUrl: "/images/talent-vision.png",
        content: "Visi Strategis:\nMembangun fasilitas dan destinasi ruang kreatif (Creative Hub/Compound) paling ikonik di Sukabumi, menjadikannya episentrum ekonomi sirkular.\n\nMisi Operasional:\n1. Mengubah properti mentah menjadi Venue acara berstandar akustik tinggi yang disewakan untuk umum.\n2. Mendirikan fasilitas inkubator seperti studio latihan musik, Co-working space, dan garasi ekshibisi.\n3. Mengamankan Capital Gain (apresiasi harga tanah/bangunan) sebagai instrumen aset paling aman bagi para investor.",
        visualIcon: <Target />
      },
      {
        title: "Model Bisnis",
        heading: "Monetisasi Properti (Space Leasing & Utilization)",
        imageUrl: "/images/cyber-contract.png",
        content: "Lahan adalah aset pasif yang dipaksa bekerja menghasilkan pendapatan aktif:\n\n1. Venue Rental (Sewa Ruang): Pendapatan B2B dari penyewaan area pertunjukan untuk konser independen, peluncuran produk komersial, atau pameran seni.\n2. Studio Leasing: Penyewaan jam-jaman (Hourly Rate) untuk studio latihan band profesional dan studio fotografi komersial.\n3. Tenant Leasing (Sewa Lahan Dagang): Menyewakan kavling ruang untuk bisnis kopi/makanan yang dikelola oleh divisi SE Culinary atau mitra eksternal.",
        visualIcon: <Zap />
      },
      {
        title: "Manajemen Risiko",
        heading: "Zonasi Tata Kota & Perizinan Hukum (Zoning Laws)",
        imageUrl: "/images/agency-intellectual.png",
        content: "Operasional ruang komersial/hiburan sangat terikat dengan regulasi pemerintah kota:\n\n• Perizinan Legal: Memastikan sertifikat Izin Mendirikan Bangunan (IMB/PBG) komersial dan Izin Keramaian dari institusi kepolisian agar bisnis tidak disegel.\n• Soundproofing & Acoustic Treatment: Insulasi suara skala studio di seluruh dinding bangunan untuk menghindari tuntutan konflik (Class Action) akibat polusi suara dari warga pemukiman sekitar properti.",
        visualIcon: <ShieldCheck />
      },
      {
        title: "Proyeksi Finansial",
        heading: "Investasi Properti Strategis (High-CAPEX)",
        imageUrl: "/images/talent-finance.png",
        content: "Estimasi Capital Expenditure (CAPEX): Rp 2.000.000.000 - Rp 5.000.000.000\n\nAlokasi Dana Prioritas:\nIni adalah injeksi modal paling ekstrem (Heavy-Asset) karena melibatkan Akuisisi Properti (Tanah/Bangunan), Renovasi Arsitektural, Konstruksi Akustik (Soundproofing), dan Perizinan Legalitas Lahan.\n\nHorizon Investasi berjangka panjang (5-10 Tahun). Investor akan menikmati keuntungan ganda: Arus Kas Pasif (Passive Income) dari penyewaan, serta Kenaikan Valuasi Aset (Capital Gain Property) di masa depan.",
        visualIcon: <Banknote />
      }
    ]
  }
];
