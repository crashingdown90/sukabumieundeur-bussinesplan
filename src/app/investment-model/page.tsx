"use client";

import React, { useEffect } from 'react';
import { Zap, AudioWaveform, Disc, Mic2, Guitar, Flame, Headphones } from 'lucide-react';

export default function InvestmentModelPage() {
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
      <section className="hero" style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', background: 'radial-gradient(circle at top right, #1e293b, #0f172a)' }}>
        <div className="hero-content animate-on-scroll opacity-0" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <div style={{ background: 'rgba(249, 115, 22, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--accent)' }}>
              <Zap size={48} />
            </div>
          </div>
          <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'white' }}>Pola Investasi & Kemitraan Strategis</h1>
          <p className="hero-subtitle" style={{ fontSize: '1.25rem', color: '#cbd5e1', lineHeight: '1.8' }}>
            Skema <strong>Joint Venture & Kerja Sama Operasional (KSO)</strong> yang fleksibel. Membuka peluang strategis bagi investor untuk memajukan unit usaha spesifik di bawah perlindungan ekosistem PT. Sukabumi Eundeur Holding.
          </p>
        </div>
      </section>

      {/* Model Overview */}
      <section className="section" style={{ background: '#f8fafc', padding: '6rem 2rem' }}>
        <div className="animate-on-scroll opacity-0" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
            <AudioWaveform size={32} color="var(--accent)" />
            <h2 className="section-title" style={{ margin: 0 }}>Desentralisasi Operasional Bisnis</h2>
          </div>
          
          <img src="/images/festival_crowd.png" alt="Massive Rock Festival Crowd" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '24px', marginBottom: '3rem', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }} className="animate-on-scroll opacity-0" />

          <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '1.125rem', marginBottom: '4rem', lineHeight: '1.8' }}>
            Sebagai entitas induk (Holding Company), PT. Sukabumi Eundeur Holding menerapkan model <strong>Strategic Business Unit (SBU)</strong> yang terdesentralisasi. Setiap unit bisnis (seperti F&B, Equipment Rentals, atau Venues) dirancang agar dapat diinkubasi dan dikelola secara otonom oleh mitra atau investor strategis dengan skema kemitraan yang transparan.
          </p>

          <div className="swot-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            
            <div style={{ background: 'white', padding: '2.5rem', borderRadius: '24px', border: '1px solid var(--border)', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)' }}>
              <div style={{ background: '#fff7ed', width: '60px', height: '60px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ea580c', marginBottom: '1.5rem' }}>
                <Disc size={32} />
              </div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1rem' }}>Sistem Ekosistem Terbuka</h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                Investor tidak diwajibkan mengakuisisi portofolio holding secara kolektif. Anda memiliki kendali penuh untuk mendanai dan mengelola satu unit bisnis spesifik yang paling sesuai dengan keahlian dan profil risiko Anda.
              </p>
            </div>

            <div style={{ background: 'white', padding: '2.5rem', borderRadius: '24px', border: '1px solid var(--border)', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)' }}>
              <div style={{ background: '#eff6ff', width: '60px', height: '60px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', marginBottom: '1.5rem' }}>
                <Mic2 size={32} />
              </div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1rem' }}>Kerja Sama Operasional (KSO)</h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                Holding memfasilitasi "Brand Umbrella", suplai infrastruktur, dan akses rantai pasok. Operasional harian (day-to-day management) diserahkan secara mandiri kepada mitra melalui skema <em>Profit Sharing</em> yang disepakati.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Skema Kemitraan */}
      <section className="section" style={{ background: 'white', padding: '6rem 2rem' }}>
        <div className="animate-on-scroll opacity-0" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem', justifyContent: 'center' }}>
            <Flame size={32} color="#10b981" />
            <h2 className="section-title" style={{ margin: 0 }}>Opsi Skema Investasi</h2>
          </div>

          <img src="/images/creative_meeting.png" alt="Creative Corporate Meeting in Music Studio" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '24px', marginBottom: '4rem', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }} className="animate-on-scroll opacity-0" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            <div style={{ padding: '2.5rem', border: '1px solid var(--border)', borderRadius: '24px', background: 'white', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <div style={{ flex: '0 0 auto', background: '#f1f5f9', padding: '1.5rem', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Guitar size={40} color="#475569" />
              </div>
              <div style={{ flex: '1 1 300px' }}>
                <div style={{ display: 'inline-block', background: '#e0e7ff', color: '#4338ca', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.75rem' }}>KONTRAK MASIF</div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '0.75rem' }}>1. Joint Venture (Perusahaan Patungan)</h3>
                <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                  PT. Sukabumi Eundeur Holding dan Investor mendirikan entitas hukum baru yang berdedikasi penuh untuk proyek kapitalisasi tinggi (seperti <em>SE Venues & Spaces</em>). Pembagian kepemilikan saham ditentukan berdasarkan proporsi injeksi likuiditas dan valuasi Kekayaan Intelektual (IP).
                </p>
              </div>
            </div>

            <div style={{ padding: '2.5rem', border: '1px solid var(--border)', borderRadius: '24px', background: 'white', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <div style={{ flex: '0 0 auto', background: '#fff7ed', padding: '1.5rem', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Flame size={40} color="#ea580c" />
              </div>
              <div style={{ flex: '1 1 300px' }}>
                <div style={{ display: 'inline-block', background: '#ffedd5', color: '#c2410c', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.75rem' }}>OPERASIONAL AKTIF</div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '0.75rem' }}>2. Franchise / Lisensi Hak Guna Merek</h3>
                <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                  Mitra bertindak sebagai operator penuh dan membiayai belanja modal 100% untuk unit retail (seperti <em>Merchandise</em> atau <em>F&B</em>). Bisnis dijalankan secara mandiri dengan lisensi merek resmi, dan Holding menerima kompensasi dalam bentuk <em>Royalty Fee</em> atau persentase dari laba operasional bersih.
                </p>
              </div>
            </div>

            <div style={{ padding: '2.5rem', border: '1px solid var(--border)', borderRadius: '24px', background: 'white', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <div style={{ flex: '0 0 auto', background: '#ecfdf5', padding: '1.5rem', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Headphones size={40} color="#10b981" />
              </div>
              <div style={{ flex: '1 1 300px' }}>
                <div style={{ display: 'inline-block', background: '#d1fae5', color: '#047857', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.75rem' }}>MODAL PASIF</div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '0.75rem' }}>3. Passive Investment (Capital Injection)</h3>
                <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                  Investor menyalurkan dana segar sebagai <em>Angel Investor</em> tanpa keterlibatan dalam proses manajerial harian. PT. Sukabumi Eundeur Holding mengambil alih peran sebagai eksekutor penuh dengan menawarkan jaminan instrumen pengembalian dividen tahunan (<em>Annual Dividend Yield</em>) yang superior.
                </p>
              </div>
            </div>

          </div>

          <div style={{ marginTop: '5rem', padding: '3rem', background: '#0f172a', borderRadius: '24px', textAlign: 'center', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
            <h4 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Mitigasi Risiko & Akselerasi Ekspansi</h4>
            <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '1.125rem', maxWidth: '800px', margin: '0 auto' }}>
              Melalui model kemitraan terdesentralisasi ini, PT. Sukabumi Eundeur Holding dapat mengakselerasi ekspansi bisnis tanpa harus membakar likuiditas internal (*Capital Expenditure*) secara penuh. Sebagai imbal hasil, mitra investor menerima tingkat keamanan investasi tinggi karena beroperasi di dalam ekosistem bisnis sirkular yang telah memiliki dominasi pangsa pasar (*captive market*) masif di wilayah Jawa Barat.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
