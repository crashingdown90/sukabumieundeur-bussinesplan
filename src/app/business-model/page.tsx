"use client";

import React, { useEffect } from 'react';

export default function BusinessModelPage() {
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
          <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'white' }}>Business Model & Revenue Streams</h1>
          <p className="hero-subtitle" style={{ fontSize: '1.25rem', color: '#cbd5e1', lineHeight: '1.8' }}>
            Keunggulan strategis PT. Sukabumi Eundeur Holding terletak pada implementasi <strong>Ekosistem Bisnis Sirkular (Circular Business Ecosystem)</strong>. Model operasi ini didesain untuk menekan <em>Capital Outflow</em> dan memonopoli perputaran margin keuntungan di dalam ekosistem internal perusahaan.
          </p>
        </div>
      </section>

      {/* The Ecosystem Secret */}
      <section className="section" style={{ background: '#f8fafc', padding: '6rem 2rem' }}>
        <div className="animate-on-scroll opacity-0" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem', justifyContent: 'center' }}>
            <h2 className="section-title" style={{ margin: 0 }}>The "Circular" Business Model</h2>
          </div>
          <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '1.125rem', marginBottom: '4rem', lineHeight: '1.8' }}>
            Tantangan terbesar dalam industri promotor konvensional adalah tingginya arus kas yang bocor kepada vendor pihak ketiga (penyewaan infrastruktur, alat, lokasi, hingga agensi kreatif). <br/><br/>
            Melalui arsitektur Holding, PT. Sukabumi Eundeur <strong>menginternalisasi seluruh rantai pasok (Supply Chain)</strong> untuk memastikan setiap siklus produksi acara dibiayai, dikerjakan, dan keuntungannya diserap kembali oleh unit-unit bisnis anak perusahaan.
          </p>

          {/* Flow Visual */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
            
            <div style={{ background: 'white', padding: '2.5rem', borderRadius: '24px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)', border: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
              <div>
                <div style={{ display: 'inline-block', background: '#ffedd5', color: '#ea580c', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 800, marginBottom: '0.75rem', letterSpacing: '0.05em' }}>INISIASI PROYEK</div>
                <h4 style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>SE Events</h4>
                <p style={{ color: 'var(--muted)', margin: 0, lineHeight: '1.6' }}>Membutuhkan pasokan desain visual, kampanye digital, dan peralatan panggung skala besar.</p>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', margin: '-0.5rem 0' }}>
              <div style={{ width: '4px', height: '40px', background: '#cbd5e1' }}></div>
            </div>

            <div style={{ background: 'white', padding: '2.5rem', borderRadius: '24px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)', border: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
              <div>
                <div style={{ display: 'inline-block', background: '#e0e7ff', color: '#4338ca', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 800, marginBottom: '0.75rem', letterSpacing: '0.05em' }}>INTERNALISASI DANA</div>
                <h4 style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>SE Creative Agency & SE Equipment</h4>
                <p style={{ color: 'var(--muted)', margin: 0, lineHeight: '1.6' }}>Menerima seluruh alokasi anggaran produksi. Modal tidak keluar dari kas ekosistem (Internal Cash Flow).</p>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', margin: '-0.5rem 0' }}>
              <div style={{ width: '4px', height: '40px', background: '#cbd5e1' }}></div>
            </div>

            <div style={{ background: 'white', padding: '2.5rem', borderRadius: '24px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)', border: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
              <div>
                <div style={{ display: 'inline-block', background: '#d1fae5', color: '#047857', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 800, marginBottom: '0.75rem', letterSpacing: '0.05em' }}>OPTIMALISASI LABA</div>
                <h4 style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Eksekusi Event & Retail FnB</h4>
                <p style={{ color: 'var(--muted)', margin: 0, lineHeight: '1.6' }}>Acara berjalan dengan HPP (Harga Pokok Penjualan) terendah. Penonton masuk memutar uang di SE Merchandise & SE Culinary.</p>
              </div>
            </div>

          </div>
          
          <div style={{ marginTop: '5rem', padding: '3rem', background: '#0f172a', borderRadius: '24px', textAlign: 'center', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
            <h4 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Proyeksi Optimalisasi Laba (Profit Margin)</h4>
            <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '1.125rem', maxWidth: '800px', margin: '0 auto' }}>
              Berkat strategi Efisiensi Biaya Terintegrasi (*Integrated Cost Suppression*), seluruh biaya sewa yang seharusnya menjadi beban operasi kini menjadi pendapatan (*revenue*) bagi anak perusahaan lain. Hal ini memproyeksikan margin keuntungan kotor perusahaan meroket dari rata-rata industri konvensional sebesar <strong>15%</strong> menjadi <strong>35% - 45%</strong> per aktivitas operasi.
            </p>
          </div>

        </div>
      </section>

      {/* Revenue Streams Breakdown */}
      <section className="section" style={{ padding: '6rem 2rem', background: 'white' }}>
        <div className="animate-on-scroll opacity-0" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem', justifyContent: 'center' }}>
            <h2 className="section-title" style={{ margin: 0 }}>Struktur Pendapatan (Revenue Streams)</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            {/* B2C */}
            <div style={{ background: '#f8fafc', padding: '3rem', borderRadius: '24px', border: '1px solid var(--border)', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'inline-block', background: '#e0e7ff', color: '#4338ca', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '0.05em' }}>VOLUME MASIF</div>
              <h3 style={{ fontSize: '1.75rem', color: 'var(--primary)', marginBottom: '1rem' }}>B2C (Retail & Konsumen)</h3>
              <p style={{ color: 'var(--muted)', marginBottom: '2rem', lineHeight: '1.7' }}>Arus kas langsung (*Direct Cash Flow*) yang bersumber dari pasar konsumen retail, ditandai dengan volume transaksi yang masif pada setiap penyelenggaraan festival dan aktivitas ruang publik.</p>
              
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.75rem' }}>
                  <span style={{ color: '#475569', fontWeight: 600 }}>Penjualan Tiket Akses Festival</span>
                  <span style={{ color: '#2563eb', fontWeight: 800 }}>40%</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.75rem' }}>
                  <span style={{ color: '#475569', fontWeight: 600 }}>Transaksi F&B (Culinary)</span>
                  <span style={{ color: '#2563eb', fontWeight: 800 }}>15%</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.75rem' }}>
                  <span style={{ color: '#475569', fontWeight: 600 }}>Penjualan Merchandise Fisik</span>
                  <span style={{ color: '#2563eb', fontWeight: 800 }}>10%</span>
                </li>
              </ul>
            </div>

            {/* B2B */}
            <div style={{ background: '#f8fafc', padding: '3rem', borderRadius: '24px', border: '1px solid var(--border)', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'inline-block', background: '#ffedd5', color: '#c2410c', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '0.05em' }}>KONTRAK CORPORATE</div>
              <h3 style={{ fontSize: '1.75rem', color: 'var(--primary)', marginBottom: '1rem' }}>B2B (Bisnis ke Bisnis)</h3>
              <p style={{ color: 'var(--muted)', marginBottom: '2rem', lineHeight: '1.7' }}>Pendapatan korporat berbasis kontrak nilai tinggi (*High-Ticket Contracts*) yang berfungsi sebagai jangkar penstabil arus kas perusahaan di luar musim (*off-season*) penyelenggaraan festival utama.</p>
              
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.75rem' }}>
                  <span style={{ color: '#475569', fontWeight: 600 }}>Sponsorship Brand Nasional</span>
                  <span style={{ color: '#ea580c', fontWeight: 800 }}>20%</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.75rem' }}>
                  <span style={{ color: '#475569', fontWeight: 600 }}>Penyewaan Aset Infrastruktur</span>
                  <span style={{ color: '#ea580c', fontWeight: 800 }}>10%</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.75rem' }}>
                  <span style={{ color: '#475569', fontWeight: 600 }}>Retainer Fee Agensi Kreatif</span>
                  <span style={{ color: '#ea580c', fontWeight: 800 }}>5%</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
