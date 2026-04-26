"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { businessUnits } from '@/data/businessUnits';
import { Rocket, TrendingUp, Crown } from 'lucide-react';

export default function Home() {
  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll, .card, .section-title, .hero-content').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(amount);
  };

  return (
    <>
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content animate-on-scroll opacity-0">
          <h1 className="hero-title" style={{ color: '#ffffff', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Business Plan & Corporate Strategy</h1>
          <p className="hero-subtitle" style={{ color: '#94a3b8', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
            Transformasi Strategis PT. Sukabumi Eundeur Holding: Membangun Ekosistem Industri Kreatif dan Hiburan Terpadu di Jawa Barat.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="#units" className="btn btn-primary">Eksplorasi Portofolio Bisnis</a>
            <a href="#financial" className="btn btn-secondary" style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: '#ffffff', borderColor: 'rgba(255,255,255,0.2)' }}>Proyeksi Modal & Finansial</a>
          </div>
        </div>
      </section>

      <section id="executive-summary" className="section" style={{ background: '#f8fafc', padding: '4rem 2rem' }}>
        <div className="animate-on-scroll opacity-0" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Executive Summary</h2>
          <p style={{ fontSize: '1.125rem', color: '#4b5563', textAlign: 'justify', lineHeight: '1.8' }}>
            Berawal dari entitas bisnis yang berfokus pada penyelenggaraan acara dan festival komersial, <strong>PT. Sukabumi Eundeur Holding</strong> menginisiasi transformasi strategis menjadi entitas holding yang menaungi 10 pilar unit bisnis. Ekspansi terstruktur ini dirancang untuk mewujudkan <strong>Ekosistem Bisnis Sirkular</strong> yang sepenuhnya mandiri, meminimalisasi ketergantungan pada vendor eksternal, dan mengkapitalisasi perputaran nilai (value chain) dari sektor hulu hingga hilir dalam industri gaya hidup dan hiburan nasional.
          </p>
        </div>
      </section>

      <section id="units" className="section">
        <div className="animate-on-scroll opacity-0">
          <h2 className="section-title">Portofolio Entitas Bisnis</h2>
          <div className="grid grid-cols-3">
            {businessUnits.map((unit, index) => (
              <Link href={`/units/${unit.slug}`} key={index} style={{ textDecoration: 'none' }}>
                <div 
                  className="card" 
                  style={{ animationDelay: `${index * 0.1}s`, height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <div className="card-icon">{unit.gridIcon}</div>
                  <h3 style={{ marginTop: '1rem', fontSize: '1.25rem', color: 'var(--primary)' }}>{unit.name}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--accent)', fontWeight: 600, marginBottom: '1rem' }}>{unit.category}</p>
                  <p style={{ fontSize: '0.95rem', flex: 1 }}>{unit.description}</p>
                  <div style={{ marginTop: '1.5rem', fontSize: '0.875rem', color: 'var(--accent)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    Tinjau Spesifikasi Detail &rarr;
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: SWOT Analysis Section */}
      <section id="swot" className="section" style={{ background: '#f8fafc' }}>
        <div className="animate-on-scroll opacity-0">
          <h2 className="section-title">Holding SWOT Analysis</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #10b981', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <h3 style={{ color: '#10b981', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.5rem' }}>S</span>trengths (Kekuatan)
              </h3>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--muted)', lineHeight: '1.6' }}>
                <li>Ekosistem terintegrasi (End-to-End) dari produksi hingga event.</li>
                <li>Jejaring kuat dengan komunitas lokal dan talent daerah.</li>
                <li>Brand "Eundeur" sudah memiliki akar kultural yang kuat di Sukabumi.</li>
              </ul>
            </div>
            <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #ef4444', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <h3 style={{ color: '#ef4444', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.5rem' }}>W</span>eaknesses (Kelemahan)
              </h3>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--muted)', lineHeight: '1.6' }}>
                <li>Kebutuhan Capital Expenditure (CAPEX) awal yang sangat besar.</li>
                <li>Ketergantungan pada vendor eksternal di fase awal operasi.</li>
                <li>Kebutuhan SDM terspesialisasi yang mungkin sulit dicari di daerah.</li>
              </ul>
            </div>
            <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #3b82f6', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <h3 style={{ color: '#3b82f6', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.5rem' }}>O</span>pportunities (Peluang)
              </h3>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--muted)', lineHeight: '1.6' }}>
                <li>Eskalasi infrastruktur transportasi (Tol Bocimi) yang membuka keran kedatangan audiens metropolitan.</li>
                <li>Bonus demografi dan transisi preferensi generasi muda menuju <em>Experience-based Economy</em>.</li>
                <li>Potensi akuisisi kemitraan B2B dengan korporasi nasional yang memerlukan penetrasi merek di wilayah regional.</li>
              </ul>
            </div>
            <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #f59e0b', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <h3 style={{ color: '#f59e0b', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.5rem' }}>T</span>hreats (Ancaman)
              </h3>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--muted)', lineHeight: '1.6' }}>
                <li>Fluktuasi perekonomian makro yang berimbas pada volatilitas daya beli (Purchasing Power).</li>
                <li>Dinamika dan ketidakpastian perizinan penyelenggaraan kegiatan dari otoritas keamanan terkait.</li>
                <li>Saturasi pasar akibat munculnya kompetitor berskala kecil yang memicu persaingan harga (Price War).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Teaser Section */}
      <section id="roadmap-teaser" className="section" style={{ textAlign: 'center', padding: '6rem 2rem' }}>
        <div className="animate-on-scroll opacity-0" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="section-title">Corporate Roadmap & Peta Eksekusi</h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--muted)', marginBottom: '3rem', lineHeight: '1.8' }}>
            Bagaimana PT. Sukabumi Eundeur Holding bertransformasi dari entitas Event Organizer berskala regional menjadi Konglomerasi Hiburan bertaraf Nasional dalam kurun waktu 10 tahun? Kami telah memformulasikan <strong>Strategi Ekspansi Bertahap (Phased Expansion)</strong> secara presisi dan terukur.
          </p>
          <Link href="/roadmap" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            background: 'var(--accent)', 
            color: 'white', 
            padding: '1rem 2rem', 
            borderRadius: '30px', 
            fontWeight: 'bold', 
            textDecoration: 'none',
            fontSize: '1.125rem',
            boxShadow: '0 10px 25px -5px rgba(37, 99, 235, 0.4)',
            transition: 'transform 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <Rocket size={24} />
            Lihat Detail Roadmap 10 Tahun
          </Link>
        </div>
      </section>

      {/* CAPEX Teaser Section */}
      <section id="financial-teaser" className="section" style={{ background: '#f8fafc', textAlign: 'center', padding: '6rem 2rem' }}>
        <div className="animate-on-scroll opacity-0" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="section-title">Proyeksi Finansial & CAPEX</h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--muted)', marginBottom: '3rem', lineHeight: '1.8' }}>
            Dalam rangka mengeksekusi visi strategis, korporasi memerlukan injeksi kapital yang terstruktur. Alokasi anggaran telah diestimasikan, mulai dari pemenuhan pendanaan operasional awal (Seed Funding) senilai Rp 1.5 Milyar, hingga investasi aset properti komersial jangka panjang.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--border)', minWidth: '200px' }}>
              <div style={{ fontSize: '0.875rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Estimasi Total CAPEX</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>Rp 35M - 50M</div>
            </div>
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--border)', minWidth: '200px' }}>
              <div style={{ fontSize: '0.875rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Target BEP</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#10b981' }}>2.5 - 4 Tahun</div>
            </div>
          </div>
          <Link href="/capex" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            background: 'var(--primary)', 
            color: 'white', 
            padding: '1rem 2rem', 
            borderRadius: '30px', 
            fontWeight: 'bold', 
            textDecoration: 'none',
            fontSize: '1.125rem',
            boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.4)',
            transition: 'transform 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Lihat Rincian Alokasi Modal & ROI
          </Link>
        </div>
      </section>
    </>
  );
}
