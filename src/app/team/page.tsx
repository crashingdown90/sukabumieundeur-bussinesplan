"use client";

import React, { useEffect } from 'react';
import { Users, Briefcase, Network, UserCheck } from 'lucide-react';

export default function TeamPage() {
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
      <section className="hero" style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', background: 'radial-gradient(circle at bottom right, #1e293b, #0f172a)' }}>
        <div className="hero-content animate-on-scroll opacity-0" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'white' }}>Management Team & Struktur</h1>
          <p className="hero-subtitle" style={{ fontSize: '1.25rem', color: '#94a3b8', lineHeight: '1.8' }}>
            Infrastruktur sumber daya manusia di balik visi strategis PT. Sukabumi Eundeur Holding. Kami memadukan tata kelola perusahaan yang profesional dengan pemahaman mendalam terhadap industri kreatif regional.
          </p>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="section" style={{ background: '#f8fafc', padding: '6rem 2rem' }}>
        <div className="animate-on-scroll opacity-0" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem', justifyContent: 'center' }}>
            <Briefcase size={32} color="var(--accent)" />
            <h2 className="section-title" style={{ margin: 0 }}>Board of Directors (C-Level)</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            {/* CEO */}
            <div style={{ background: 'white', borderRadius: '24px', padding: '3rem 2rem', textAlign: 'center', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)', borderTop: '4px solid var(--accent)' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: '#e2e8f0', margin: '0 auto 1.5rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <UserCheck size={48} color="#94a3b8" />
              </div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '0.25rem' }}>Drefan (Founder)</h3>
              <p style={{ color: 'var(--accent)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.875rem', marginBottom: '1.5rem' }}>Chief Executive Officer</p>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Bertanggung jawab penuh atas arah strategis 10 unit bisnis, hubungan investor (investor relations), serta rencana ekspansi perusahaan. Memiliki rekam jejak yang terbukti dalam mengelola ekosistem hiburan dan acara berskala besar di wilayah Jawa Barat.
              </p>
            </div>

            {/* COO */}
            <div style={{ background: 'white', borderRadius: '24px', padding: '3rem 2rem', textAlign: 'center', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)', borderTop: '4px solid #10b981' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: '#e2e8f0', margin: '0 auto 1.5rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <UserCheck size={48} color="#94a3b8" />
              </div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '0.25rem' }}>[Nama COO]</h3>
              <p style={{ color: '#10b981', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.875rem', marginBottom: '1.5rem' }}>Chief Operating Officer</p>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Bertugas memastikan kelancaran operasional harian (day-to-day operations) dari setiap lini bisnis—mulai dari penyelenggaraan festival, agensi kreatif, hingga layanan F&B—agar selalu mematuhi Standar Operasional Prosedur (SOP) perusahaan.
              </p>
            </div>

            {/* CFO */}
            <div style={{ background: 'white', borderRadius: '24px', padding: '3rem 2rem', textAlign: 'center', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)', borderTop: '4px solid #f59e0b' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: '#e2e8f0', margin: '0 auto 1.5rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <UserCheck size={48} color="#94a3b8" />
              </div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '0.25rem' }}>[Nama CFO]</h3>
              <p style={{ color: '#f59e0b', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.875rem', marginBottom: '1.5rem' }}>Chief Financial Officer</p>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Bertanggung jawab dalam pengelolaan anggaran modal dan operasional (CAPEX & OPEX), memitigasi risiko keuangan, serta menyusun laporan keuangan yang transparan dan dapat dipertanggungjawabkan (auditable) kepada para pemegang saham.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Corporate Structure */}
      <section className="section" style={{ padding: '6rem 2rem', background: 'white' }}>
        <div className="animate-on-scroll opacity-0" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
            <Network size={32} color="var(--accent)" />
            <h2 className="section-title" style={{ margin: 0 }}>Struktur Organisasi Holding</h2>
          </div>
          <p style={{ textAlign: 'center', color: 'var(--muted)', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem auto', lineHeight: '1.8' }}>
            Berbeda dengan model manajemen terpusat pada umumnya, setiap unit bisnis kami dipimpin oleh seorang <strong>General Manager (GM)</strong> yang memiliki wewenang penuh untuk menjalankan operasional secara mandiri, dengan pengawasan dan arahan strategis dari perusahaan induk.
          </p>

          {/* Simple Tree Visualization using Flex/Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
            {/* Level 1 */}
            <div style={{ background: '#1e293b', color: 'white', padding: '1rem 3rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1.25rem', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
              Board of Directors (Induk)
            </div>
            
            <div style={{ width: '4px', height: '40px', background: '#cbd5e1' }}></div>
            
            {/* Level 2 Wrapper */}
            <div style={{ display: 'flex', width: '100%', borderTop: '4px solid #cbd5e1', position: 'relative' }}>
              <div style={{ flex: 1, borderRight: '4px solid #cbd5e1', height: '20px' }}></div>
              <div style={{ flex: 1, borderLeft: '4px solid transparent', height: '20px' }}></div>
            </div>

            {/* Level 3 - Divisions */}
            <div className="grid grid-cols-3" style={{ gap: '1.5rem', width: '100%' }}>
              
              <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border)', textAlign: 'center' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Divisi Entertainment & Event</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.875rem', color: 'var(--muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li style={{ background: 'white', padding: '0.5rem', borderRadius: '6px', border: '1px solid #e2e8f0' }}>GM - SE Events</li>
                  <li style={{ background: 'white', padding: '0.5rem', borderRadius: '6px', border: '1px solid #e2e8f0' }}>GM - SE Equipment Rentals</li>
                  <li style={{ background: 'white', padding: '0.5rem', borderRadius: '6px', border: '1px solid #e2e8f0' }}>GM - SE Records</li>
                </ul>
              </div>

              <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border)', textAlign: 'center' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Divisi Media & Commerce</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.875rem', color: 'var(--muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li style={{ background: 'white', padding: '0.5rem', borderRadius: '6px', border: '1px solid #e2e8f0' }}>GM - SE Media Network</li>
                  <li style={{ background: 'white', padding: '0.5rem', borderRadius: '6px', border: '1px solid #e2e8f0' }}>GM - SE Creative Agency</li>
                  <li style={{ background: 'white', padding: '0.5rem', borderRadius: '6px', border: '1px solid #e2e8f0' }}>GM - SE Merchandise</li>
                </ul>
              </div>

              <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border)', textAlign: 'center' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Divisi F&B & Property</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.875rem', color: 'var(--muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li style={{ background: 'white', padding: '0.5rem', borderRadius: '6px', border: '1px solid #e2e8f0' }}>GM - SE Venues & Spaces</li>
                  <li style={{ background: 'white', padding: '0.5rem', borderRadius: '6px', border: '1px solid #e2e8f0' }}>GM - SE Culinary / FnB</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
