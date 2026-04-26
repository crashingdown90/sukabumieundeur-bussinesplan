"use client";

import React, { useEffect } from 'react';
import { businessUnits } from '@/data/businessUnits';
import { PieChart, DollarSign, Target, Activity } from 'lucide-react';

export default function CapexPage() {
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
      <section className="hero" style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', background: '#0f172a' }}>
        <div className="hero-content animate-on-scroll opacity-0" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'white' }}>Proyeksi Finansial & CAPEX</h1>
          <p className="hero-subtitle" style={{ fontSize: '1.25rem', color: '#94a3b8', lineHeight: '1.8' }}>
            Rincian komprehensif mengenai Capital Expenditure (Kebutuhan Modal Kerja Awal), alokasi anggaran strategis, dan proyeksi tingkat pengembalian investasi (Return on Investment) PT. Sukabumi Eundeur Holding.
          </p>
        </div>
      </section>

      {/* Summary Cards */}
      <section className="section" style={{ background: '#f8fafc', padding: '4rem 2rem 2rem 2rem' }}>
        <div className="animate-on-scroll opacity-0" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          
          <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <div style={{ color: 'var(--accent)', marginBottom: '1rem' }}><DollarSign size={32} /></div>
            <h3 style={{ fontSize: '1.125rem', color: 'var(--muted)', marginBottom: '0.5rem' }}>Proyeksi Total CAPEX</h3>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)' }}>Rp 35 - 50 Milyar</div>
            <p style={{ fontSize: '0.875rem', color: 'var(--muted)', marginTop: '0.5rem' }}>Akumulasi Kebutuhan 10 Unit Bisnis</p>
          </div>

          <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <div style={{ color: '#10b981', marginBottom: '1rem' }}><Target size={32} /></div>
            <h3 style={{ fontSize: '1.125rem', color: 'var(--muted)', marginBottom: '0.5rem' }}>Estimasi Titik Impas (BEP)</h3>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)' }}>2.5 - 4 Tahun</div>
            <p style={{ fontSize: '0.875rem', color: 'var(--muted)', marginTop: '0.5rem' }}>Bergantung pada eskalasi akuisisi aset</p>
          </div>

          <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <div style={{ color: '#f59e0b', marginBottom: '1rem' }}><Activity size={32} /></div>
            <h3 style={{ fontSize: '1.125rem', color: 'var(--muted)', marginBottom: '0.5rem' }}>Alokasi Pendanaan Fase 1</h3>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)' }}>Rp 1.5 Milyar</div>
            <p style={{ fontSize: '0.875rem', color: 'var(--muted)', marginTop: '0.5rem' }}>Aktivasi Unit Primer (Events, Agency, Merch)</p>
          </div>

        </div>
      </section>

      {/* Detail Table Section */}
      <section className="section" style={{ padding: '4rem 2rem' }}>
        <div className="animate-on-scroll opacity-0" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 className="section-title">Distribusi Anggaran per Entitas Bisnis</h2>
          
          <div className="table-container" style={{ overflowX: 'auto', background: 'white', borderRadius: '16px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)', border: '1px solid var(--border)' }}>
            <table className="finance-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: '#f1f5f9', borderBottom: '2px solid #cbd5e1' }}>
                  <th style={{ padding: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>Entitas Bisnis</th>
                  <th style={{ padding: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>Klasifikasi Modal</th>
                  <th style={{ padding: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>Proyeksi Anggaran (CAPEX)</th>
                </tr>
              </thead>
              <tbody>
                {businessUnits.map((unit, index) => (
                  <tr key={index} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '1.5rem', fontWeight: 600, color: 'var(--primary)' }}>{unit.name}</td>
                    <td style={{ padding: '1.5rem', color: 'var(--muted)' }}>
                      <span className="budget-badge" style={{ display: 'inline-block', background: 'var(--secondary)', color: 'var(--accent)', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>
                        {unit.budgetClass || 'Medium'}
                      </span>
                    </td>
                    <td style={{ padding: '1.5rem', fontFamily: 'monospace', fontSize: '1.125rem', color: '#0f172a' }}>
                      {unit.capital}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Justification Section */}
      <section className="section" style={{ background: '#f8fafc', padding: '6rem 2rem' }}>
        <div className="animate-on-scroll opacity-0" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 className="section-title">Justifikasi Strategis Alokasi Kapital</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            
            <div style={{ background: 'white', padding: '3rem', borderRadius: '24px', borderLeft: '6px solid #ef4444', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.75rem', color: 'var(--primary)', marginBottom: '1rem' }}>1. SE Venues & Spaces (Rp 10 M - Rp 25 M)</h3>
              <p style={{ fontSize: '1.125rem', color: 'var(--muted)', lineHeight: '1.8', textAlign: 'justify' }}>
                Alokasi terbesar diarahkan pada unit ini karena melibatkan <strong>akuisisi aset riil (Real Estate)</strong> dan ekskusi konstruksi fisik berskala besar. Terdapat kelangkaan ruang publik (Creative Hub) yang berstandar tinggi di wilayah Sukabumi. Kapital ini diinvestasikan untuk mengakuisisi lahan komersial minimal 1 Hektar di zona strategis, mendirikan arena konser terbuka (outdoor arena), infrastruktur ruang kolaborasi (co-working), studio produksi berstandar internasional, serta area komersial ritel. Properti ini merupakan aset keras (hard asset) dengan tren depresiasi minimum dan valuasi yang terapresiasi secara tahunan.
              </p>
            </div>

            <div style={{ background: 'white', padding: '3rem', borderRadius: '24px', borderLeft: '6px solid var(--accent)', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.75rem', color: 'var(--primary)', marginBottom: '1rem' }}>2. SE Equipment Rentals (Rp 2 M - Rp 5 M)</h3>
              <p style={{ fontSize: '1.125rem', color: 'var(--muted)', lineHeight: '1.8', textAlign: 'justify' }}>
                Secara historis, penyelenggaraan acara berskala masif di Sukabumi sangat bergantung pada vendor penyedia infrastruktur dari kota metropolitan (Bandung/Jakarta), yang berdampak pada inefisiensi biaya logistik. Melalui investasi ini, Holding akan mengakuisisi secara mandiri seluruh perangkat produksi utama (Sistem Rigging, Line Array Sound System, dan Modul LED). Optimalisasi ini tidak hanya mereduksi beban operasional internal (SE Events) hingga 40%, namun juga mengonversi alat tersebut menjadi instrumen penghasil pendapatan (revenue generator) melalui penyewaan B2B kepada promotor eksternal maupun institusi politik.
              </p>
            </div>

            <div style={{ background: 'white', padding: '3rem', borderRadius: '24px', borderLeft: '6px solid #10b981', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.75rem', color: 'var(--primary)', marginBottom: '1rem' }}>3. SE Events & Media (Rp 500 Jt - Rp 1 M)</h3>
              <p style={{ fontSize: '1.125rem', color: 'var(--muted)', lineHeight: '1.8', textAlign: 'justify' }}>
                Entitas Manajemen Acara dan Media merepresentasikan model bisnis yang membutuhkan injeksi likuiditas (liquid cash) pada fase inisiasi (pra-acara). Dana ini dikomitmenkan untuk pengamanan kontrak eksklusif seniman nasional (Talent Down Payment), pelunasan perizinan otoritas keamanan, penyewaan lokasi, serta penetrasi kampanye pemasaran digital berskala masif. Pengembalian dana terakumulasi pasca-realisasi penjualan tiket, dengan proyeksi margin keuntungan kotor operasional di kisaran 20-35%.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
