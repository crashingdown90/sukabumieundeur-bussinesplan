"use client";

import React, { useEffect } from 'react';
import { Rocket, TrendingUp, Crown, Globe } from 'lucide-react';

export default function RoadmapPage() {
  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="hero" style={{ minHeight: '40vh', display: 'flex', alignItems: 'center' }}>
        <div className="hero-content animate-on-scroll opacity-0" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Corporate Roadmap & Strategi Eksekusi</h1>
          <p className="hero-subtitle" style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>
            Rencana Strategis (Strategic Blueprint) 10 Tahun PT. Sukabumi Eundeur Holding untuk mendominasi industri kreatif, hiburan, dan properti komersial di Indonesia.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#f8fafc', padding: '4rem 2rem' }}>
        <div className="animate-on-scroll opacity-0" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Filosofi Pertumbuhan & Manajemen Risiko</h2>
          <p style={{ fontSize: '1.125rem', color: '#4b5563', textAlign: 'justify', lineHeight: '1.8' }}>
            Kami memahami bahwa stabilitas ekosistem korporasi membutuhkan transisi yang terukur. Oleh karena itu, <strong>PT. Sukabumi Eundeur Holding</strong> mengadopsi kerangka kerja <em>Phased Expansion</em> (Ekspansi Bertahap). Strategi ini memprioritaskan pemantapan arus kas (Cash Flow Generation) melalui sektor jasa berisiko rendah (Manajemen Acara & Agensi Kreatif) sebelum mengalokasikan kapital pada sektor padat modal (Infrastruktur Teknis & Properti Real Estate). Proyeksi linimasa ini dirancang secara spesifik untuk memitigasi risiko defisit pendanaan (Burn Rate) dan menjamin kelangsungan finansial (Sustainabilitas) bagi para penanam modal.
          </p>
        </div>
      </section>

      <section className="section" style={{ overflow: 'hidden', padding: '6rem 1rem' }}>
        <div className="roadmap-container">
          <div className="roadmap-line" style={{ background: 'linear-gradient(to bottom, var(--accent), #10b981, #f59e0b, #8b5cf6)' }}></div>
          
          {/* Phase 1 */}
          <div className="roadmap-item right animate-on-scroll opacity-0" style={{ animationDelay: '0.1s' }}>
            <div className="roadmap-content">
              <span className="phase-badge">Fase 1: Tahun 1 - 2 (Foundation & Market Penetration)</span>
              <h3 style={{ fontSize: '1.75rem', color: 'var(--primary)', marginBottom: '1rem' }}>Operasional Bisnis Inti & Penguatan Ekuitas Merek</h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.7', textAlign: 'justify', marginBottom: '1rem' }}>
                Fokus utama dialokasikan pada entitas bisnis yang merepresentasikan model <strong>Capital-Light</strong> (kebutuhan modal rendah) dengan siklus perputaran likuiditas (<em>Cash Conversion Cycle</em>) yang cepat.
              </p>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--muted)', lineHeight: '1.6' }}>
                <li><strong>SE Events:</strong> Mengeksekusi 4 festival berskala regional guna mengukuhkan dominasi pangsa pasar dan status <em>Top-of-Mind</em> di Jawa Barat.</li>
                <li><strong>SE Creative Agency:</strong> Mengamankan Kontrak Jangka Panjang (Retainer Contracts) dengan minimal 10 korporasi/UMKM strategis untuk menjamin basis pendapatan bulanan tetap.</li>
                <li><strong>SE Merchandise:</strong> Mengimplementasikan sistem <em>Pre-Order</em> (PO) terpusat untuk meminimalisasi inefisiensi persediaan barang (Dead Stock).</li>
                <li><strong>SE Media Network:</strong> Mengakuisisi 100.000 pengikut organik lintas platform guna menguasai jalur penetrasi informasi digital di ranah lokal.</li>
              </ul>
            </div>
            <div className="roadmap-marker">
              <Rocket size={32} strokeWidth={2} />
            </div>
          </div>

          {/* Phase 2 */}
          <div className="roadmap-item left animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="roadmap-content">
              <span className="phase-badge phase-2">Fase 2: Tahun 3 - 4 (Ecosystem Integration)</span>
              <h3 style={{ fontSize: '1.75rem', color: 'var(--primary)', marginBottom: '1rem' }}>Investasi Aset Fisik & Skalabilitas Produk</h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.7', textAlign: 'justify', marginBottom: '1rem' }}>
                Realisasi laba ditahan (Retained Earnings) dan putaran pendanaan strategis (Seri A) akan direalokasikan ke instrumen belanja modal (CAPEX) fisik untuk menekan beban operasional vendor (Cost Reductions).
              </p>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--muted)', lineHeight: '1.6' }}>
                <li><strong>SE Equipment Rentals:</strong> Akuisisi aset infrastruktur (Sistem Tata Suara, Tata Cahaya, dan Rigging) senilai Rp 2 - 5 Miliar, mengeskalasi status entitas menjadi Pemasok Infrastruktur Utama (Main Vendor) B2B.</li>
                <li><strong>SE Culinary / FnB:</strong> Mendirikan fasilitas ritel kuliner (Flagship Store) yang merangkap fungsionalitas sebagai Markas Komando Operasional (Headquarters) dan sentra kolaborasi kreatif.</li>
                <li><strong>SE Local Marketplace:</strong> Peluncuran portal distribusi perangkat lunak terintegrasi untuk monopoli sistem penjualan tiket elektronik internal (mengeliminasi komisi pihak ketiga).</li>
                <li><strong>SE Records:</strong> Menandatangani kontrak komersial eksklusif bersama 5 seniman regional potensial dengan target penetrasi distribusi digital secara masif.</li>
              </ul>
            </div>
            <div className="roadmap-marker marker-2">
              <TrendingUp size={32} strokeWidth={2} />
            </div>
          </div>

          {/* Phase 3 */}
          <div className="roadmap-item right animate-on-scroll opacity-0" style={{ animationDelay: '0.3s' }}>
            <div className="roadmap-content">
              <span className="phase-badge phase-3">Fase 3: Tahun 5 - 7 (Market Domination & Expansion)</span>
              <h3 style={{ fontSize: '1.75rem', color: 'var(--primary)', marginBottom: '1rem' }}>Akuisisi Properti & Penetrasi Nasional</h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.7', textAlign: 'justify', marginBottom: '1rem' }}>
                Mentransformasi struktur organisasi menjadi Konglomerasi Terpadu melalui kepemilikan aset tak bergerak (<em>Real Estate</em>) dan dominasi penuh terhadap rantai pasok talenta regional.
              </p>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--muted)', lineHeight: '1.6' }}>
                <li><strong>SE Venues & Spaces:</strong> Pengambilalihan aset lahan komersial (&gt; 1 Hektar) untuk dikembangkan menjadi Kawasan Distrik Kreatif Terpadu, meliputi Arena Konser Terbuka, Studio Penyiaran, dan Pusat Kolaborasi.</li>
                <li><strong>SE Talent Management:</strong> Monopoli manajemen representasi bagi tokoh publik, musisi, dan <em>Key Opinion Leaders</em> (KOL) regional yang mewajibkan seluruh transaksi korporat berafiliasi melalui entitas Holding.</li>
                <li><strong>Ekspansi Event:</strong> SE Events menginisiasi tur penyelenggaraan acara masif secara bertahap di 5 ibukota provinsi strategis di wilayah Indonesia.</li>
              </ul>
            </div>
            <div className="roadmap-marker marker-3">
              <Crown size={32} strokeWidth={2} />
            </div>
          </div>

          {/* Phase 4 */}
          <div className="roadmap-item left animate-on-scroll opacity-0" style={{ animationDelay: '0.4s' }}>
            <div className="roadmap-content">
              <span className="phase-badge" style={{ background: '#8b5cf6' }}>Fase 4: Tahun 8 - 10 (National Conglomeration)</span>
              <h3 style={{ fontSize: '1.75rem', color: 'var(--primary)', marginBottom: '1rem' }}>Initial Public Offering (IPO) & Merger</h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.7', textAlign: 'justify', marginBottom: '1rem' }}>
                Kulminasi proyeksi peta jalan korporat bermuara pada pelepasan struktur pendanaan menuju publik (Pasar Modal) demi menyokong dominasi di industri regional Asia Tenggara.
              </p>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--muted)', lineHeight: '1.6' }}>
                <li><strong>Go Public (IPO):</strong> Penawaran Saham Perdana di Bursa Efek Indonesia (BEI) sebagai instrumen likuiditas ekspansi agresif berskala masif.</li>
                <li><strong>Merger & Akuisisi (M&A):</strong> Aksi korporasi anorganik melalui pengambilalihan firma promotor dan agensi pemasaran yang terafiliasi dengan demografi sasaran sekunder.</li>
                <li><strong>Tech Integration:</strong> Implementasi infrastruktur Web 3.0 dan otentikasi aset digital berbasis Blockchain pada sistem Ticketing untuk mitigasi kebocoran total pendapatan.</li>
              </ul>
            </div>
            <div className="roadmap-marker" style={{ borderColor: '#8b5cf6', color: '#8b5cf6', boxShadow: '0 0 0 6px rgba(139, 92, 246, 0.1)' }}>
              <Globe size={32} strokeWidth={2} />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
