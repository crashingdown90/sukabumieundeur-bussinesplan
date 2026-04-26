"use client";

import React, { useEffect } from 'react';
import { Handshake, Network, Briefcase, TrendingUp } from 'lucide-react';

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
      <section className="hero" style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', background: 'radial-gradient(circle at bottom left, #0f172a, #042f2e)' }}>
        <div className="hero-content animate-on-scroll opacity-0" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'white' }}>Pola Investasi & Kemitraan Strategis</h1>
          <p className="hero-subtitle" style={{ fontSize: '1.25rem', color: '#99f6e4', lineHeight: '1.8' }}>
            Fleksibilitas Skema <strong>Joint Venture & Kerja Sama Operasional (KSO)</strong>. Membuka peluang bagi investor dan mitra bisnis untuk mengelola portofolio unit usaha secara independen maupun kolaboratif di bawah naungan PT. Sukabumi Eundeur Holding.
          </p>
        </div>
      </section>

      {/* Model Overview */}
      <section className="section" style={{ background: '#f8fafc', padding: '6rem 2rem' }}>
        <div className="animate-on-scroll opacity-0" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
            <Handshake size={32} color="var(--accent)" />
            <h2 className="section-title" style={{ margin: 0 }}>Desentralisasi Operasional Bisnis</h2>
          </div>
          <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '1.125rem', marginBottom: '4rem', lineHeight: '1.8' }}>
            Sebagai perusahaan induk (Holding Company), PT. Sukabumi Eundeur Holding tidak memonopoli manajemen operasional secara absolut. Kami menawarkan model <strong>Strategic Business Unit (SBU)</strong> di mana setiap unit bisnis (seperti SE Events, SE Venues, SE Records) dapat dikelola oleh mitra investor atau operator profesional dengan skema kemitraan yang transparan.
          </p>

          <div className="swot-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            
            <div style={{ background: 'white', padding: '2.5rem', borderRadius: '16px', borderLeft: '4px solid #3b82f6', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <div style={{ color: '#3b82f6', marginBottom: '1rem' }}><Network size={32} /></div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1rem' }}>Sistem Ekosistem Terbuka</h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                Investor tidak harus berinvestasi pada holding secara keseluruhan. Anda dapat memilih untuk mendanai dan mengelola satu unit bisnis spesifik (contoh: hanya fokus berinvestasi di <em>SE Equipment Rentals</em> atau <em>SE F&B</em>) sesuai dengan profil risiko dan keahlian Anda.
              </p>
            </div>

            <div style={{ background: 'white', padding: '2.5rem', borderRadius: '16px', borderLeft: '4px solid #10b981', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <div style={{ color: '#10b981', marginBottom: '1rem' }}><Briefcase size={32} /></div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1rem' }}>Kerja Sama Operasional (KSO)</h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                PT. Sukabumi Eundeur Holding menyediakan "Payung Merek" (Brand Umbrella), akses pasar, dan ekosistem rantai pasok. Sementara itu, manajemen harian (Day-to-day operations) unit bisnis dapat dijalankan sepenuhnya oleh mitra melalui skema <em>Profit Sharing</em> atau <em>Revenue Sharing</em>.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Skema Kemitraan */}
      <section className="section" style={{ background: 'white', padding: '6rem 2rem' }}>
        <div className="animate-on-scroll opacity-0" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem', justifyContent: 'center' }}>
            <TrendingUp size={32} color="#f59e0b" />
            <h2 className="section-title" style={{ margin: 0 }}>Opsi Skema Investasi</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            <div style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '16px', background: '#f8fafc' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>1. Joint Venture (Perusahaan Patungan)</h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>
                PT. Sukabumi Eundeur Holding dan Investor mendirikan entitas hukum baru khusus untuk menjalankan salah satu unit bisnis berskala masif (seperti SE Venues & Spaces). Kepemilikan saham dibagi secara proporsional berdasarkan suntikan modal dan valuasi kekayaan intelektual (IP).
              </p>
            </div>

            <div style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '16px', background: '#f8fafc' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>2. Franchise / Lisensi Merek Khusus</h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>
                Mitra menginvestasikan modal penuh untuk unit tertentu (seperti merchandise atau manajemen artis lokal) dan beroperasi secara independen menggunakan hak komersial <em>Brand</em> Sukabumi Eundeur. Holding mendapatkan <em>Royalty Fee</em> atau persentase laba bersih bulanan.
              </p>
            </div>

            <div style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '16px', background: '#f8fafc' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>3. Passive Investment (Capital Only)</h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>
                Investor bertindak sebagai <em>Angel Investor</em> atau pemberi dana tanpa terlibat dalam aktivitas operasional harian. PT. Sukabumi Eundeur Holding bertindak sebagai eksekutor penuh dengan jaminan skema pengembalian dividen tahunan (Annual Dividend Yield) yang kompetitif.
              </p>
            </div>

          </div>

          <div style={{ marginTop: '4rem', padding: '2rem', background: '#eff6ff', borderRadius: '16px', border: '1px solid #bfdbfe', textAlign: 'center' }}>
            <h4 style={{ color: '#1e40af', fontSize: '1.25rem', marginBottom: '1rem' }}>Keuntungan Skema Pola Kerja Sama</h4>
            <p style={{ color: '#334155', lineHeight: '1.6', marginBottom: 0 }}>
              Melalui model desentralisasi ini, PT. Sukabumi Eundeur Holding mampu melakukan ekspansi bisnis secara agresif tanpa harus menanggung seluruh beban Capital Expenditure (CAPEX). Di sisi lain, investor diuntungkan dengan risiko yang termitigasi karena mereka masuk ke dalam sebuah ekosistem bisnis sirkular yang sudah memiliki basis pasar (*captive market*) yang masif di Sukabumi.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
