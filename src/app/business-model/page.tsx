"use client";

import React, { useEffect } from 'react';
import { Repeat, ArrowRightLeft, Coins, BarChart3, LineChart } from 'lucide-react';

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
      <section className="hero" style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', background: 'radial-gradient(circle at bottom left, #0f172a, #1e3a8a)' }}>
        <div className="hero-content animate-on-scroll opacity-0" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'white' }}>Business Model & Revenue Streams</h1>
          <p className="hero-subtitle" style={{ fontSize: '1.25rem', color: '#bfdbfe', lineHeight: '1.8' }}>
            Keunggulan strategis PT. Sukabumi Eundeur Holding terletak pada kapabilitas kami dalam mengimplementasikan <strong>Ekosistem Bisnis Sirkular (Circular Business Ecosystem)</strong>. Model ini meminimalisasi biaya operasional eksternal dan memaksimalkan retensi margin keuntungan di seluruh portofolio perusahaan.
          </p>
        </div>
      </section>

      {/* The Ecosystem Secret */}
      <section className="section" style={{ background: '#f8fafc', padding: '6rem 2rem' }}>
        <div className="animate-on-scroll opacity-0" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
            <Repeat size={32} color="var(--accent)" />
            <h2 className="section-title" style={{ margin: 0 }}>The "Circular" Business Model</h2>
          </div>
          <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '1.125rem', marginBottom: '4rem', lineHeight: '1.8' }}>
            Tantangan utama dalam industri promotor konvensional adalah tingginya <em>Capital Outflow</em> yang dialokasikan untuk vendor pihak ketiga (penyewaan infrastruktur produksi, penyewaan lokasi, hingga penggunaan agensi kreatif eksternal). <br/><br/>
            Melalui struktur Holding, PT. Sukabumi Eundeur Holding <strong>menginternalisasi rantai pasok (Supply Chain)</strong> untuk memastikan 100% perputaran kapital tetap berputar dan terkapitalisasi di dalam grup perusahaan.
          </p>

          {/* Flow Visual */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
            
            <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', textAlign: 'center', width: '250px', borderTop: '4px solid #3b82f6' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>SE Events</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>Membutuhkan Dukungan Visual & Kampanye Pemasaran</p>
            </div>

            <ArrowRightLeft size={24} color="#94a3b8" />

            <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', textAlign: 'center', width: '250px', borderTop: '4px solid #f59e0b' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>SE Creative Agency</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>Menerima Alokasi Anggaran Produksi (Internal Cash Flow)</p>
            </div>

            <ArrowRightLeft size={24} color="#94a3b8" />

            <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', textAlign: 'center', width: '250px', borderTop: '4px solid #10b981' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>SE Equipment Rentals</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>Optimalisasi Pemanfaatan Aset Internal oleh SE Events</p>
            </div>

          </div>
          
          <div style={{ background: '#eff6ff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #bfdbfe', marginTop: '3rem', textAlign: 'center' }}>
            <strong style={{ color: '#1e40af' }}>Proyeksi Optimalisasi Laba:</strong> Melalui strategi Efisiensi Biaya Terintegrasi (Integrated Cost Suppression), margin keuntungan kotor perusahaan diproyeksikan meningkat dari rata-rata industri sebesar <strong>15%</strong> menjadi <strong>35% - 45%</strong> per kegiatan operasi.
          </div>
        </div>
      </section>

      {/* Revenue Streams Breakdown */}
      <section className="section" style={{ padding: '6rem 2rem', background: 'white' }}>
        <div className="animate-on-scroll opacity-0" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem', justifyContent: 'center' }}>
            <Coins size={32} color="#10b981" />
            <h2 className="section-title" style={{ margin: 0 }}>Struktur Pendapatan Utama (Revenue Streams)</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            {/* B2C */}
            <div style={{ background: '#f8fafc', padding: '2.5rem', borderRadius: '24px', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb' }}>
                  <BarChart3 size={24} />
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)' }}>B2C (Business to Consumer)</h3>
              </div>
              <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>Arus kas langsung (Direct Cash Flow) yang bersumber dari pasar konsumen retail, ditandai dengan volume transaksi yang masif pada setiap penyelenggaraan acara.</p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                  <span style={{ color: '#475569', fontWeight: 600 }}>Penjualan Tiket Akses Festival</span>
                  <span style={{ color: '#10b981', fontWeight: 800 }}>40%</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                  <span style={{ color: '#475569', fontWeight: 600 }}>Pendapatan Merchandise & FnB</span>
                  <span style={{ color: '#10b981', fontWeight: 800 }}>15%</span>
                </li>
              </ul>
            </div>

            {/* B2B */}
            <div style={{ background: '#f8fafc', padding: '2.5rem', borderRadius: '24px', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#ffedd5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ea580c' }}>
                  <LineChart size={24} />
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)' }}>B2B (Business to Business)</h3>
              </div>
              <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>Pendapatan korporat berbasis kontrak nilai tinggi (High-Ticket Contracts) yang berfungsi sebagai penstabil arus kas perusahaan di luar musim penyelenggaraan festival utama.</p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                  <span style={{ color: '#475569', fontWeight: 600 }}>Sponsorship Brand Nasional</span>
                  <span style={{ color: '#f59e0b', fontWeight: 800 }}>20%</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                  <span style={{ color: '#475569', fontWeight: 600 }}>Penyewaan Aset Infrastruktur</span>
                  <span style={{ color: '#f59e0b', fontWeight: 800 }}>15%</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                  <span style={{ color: '#475569', fontWeight: 600 }}>Retainer Fee Layanan Agensi</span>
                  <span style={{ color: '#f59e0b', fontWeight: 800 }}>10%</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
