import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PinProtector from "@/components/PinProtector";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "PT. SUKABUMI EUNDEUR HOLDING | Business Plan",
  description: "Business plan and corporate structure for PT. Sukabumi Eundeur Holding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <PinProtector>
          <header className="header-nav">
            <a href="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/images/Logo_Sukabumi Endeur.png" alt="Sukabumi Eundeur Holding" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
            </a>
            <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <a href="/" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}>Unit Bisnis</a>
              <a href="/business-model" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}>Business Model</a>
              <a href="/investment-model" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}>Investment Model</a>
              <a href="/team" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}>Management</a>
              <a href="/roadmap" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}>Roadmap</a>
              <a href="/capex" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}>Financials</a>
              <a href="#" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>Download PDF</a>
            </nav>
          </header>
          <main>{children}</main>
          <footer className="footer" style={{ textAlign: 'left', padding: '5rem 2rem 2rem 2rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
              
              {/* Brand Column */}
              <div>
                <img src="/images/Logo_Sukabumi Endeur.png" alt="Sukabumi Eundeur" style={{ height: '50px', marginBottom: '1.5rem', filter: 'brightness(0) invert(1)' }} />
                <p className="logo" style={{ color: 'white', marginBottom: '1rem', fontSize: '1.25rem' }}>PT. SUKABUMI EUNDEUR HOLDING</p>
                <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  Ekosistem bisnis sirkular berbasis industri hiburan, kreatif, dan manajemen ruang publik komprehensif pertama di wilayah Jawa Barat.
                </p>
                <p style={{ color: '#cbd5e1', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  📍 Sukabumi, Jawa Barat, Indonesia
                </p>
              </div>

              {/* Quick Links Column */}
              <div>
                <h4 style={{ color: 'white', fontWeight: 600, marginBottom: '1.5rem', fontSize: '1.1rem', letterSpacing: '0.05em' }}>CORPORATE NAVIGATION</h4>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li><a href="/business-model" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.95rem' }}>Model Bisnis & Ekosistem</a></li>
                  <li><a href="/investment-model" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.95rem' }}>Skema Kemitraan (Investasi)</a></li>
                  <li><a href="/team" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.95rem' }}>Struktur Manajemen Holding</a></li>
                  <li><a href="/capex" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.95rem' }}>Proyeksi Finansial (CAPEX)</a></li>
                  <li><a href="/roadmap" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.95rem' }}>Roadmap Ekspansi</a></li>
                </ul>
              </div>

              {/* Consulting Partner Column */}
              <div>
                <h4 style={{ color: 'white', fontWeight: 600, marginBottom: '1.5rem', fontSize: '1.1rem', letterSpacing: '0.05em' }}>STRATEGIC CONSULTING</h4>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                  Proposal bisnis dan arsitektur korporat ini disusun dan diinkubasi secara profesional di bawah pengawasan firma konsultan:
                </p>
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <p style={{ margin: 0, fontWeight: 800, color: 'white', fontSize: '1.1rem', letterSpacing: '0.05em' }}>DEMA DIGITAL ASIA</p>
                  <p style={{ margin: '0.25rem 0 1rem 0', fontSize: '0.8rem', color: '#f97316', fontWeight: 600, textTransform: 'uppercase' }}>Consulting Business Partner</p>
                  <a href="https://www.demadigitalasia.com" target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid #38bdf8', paddingBottom: '0.2rem' }}>
                    Kunjungi Website Eksklusif &rarr;
                  </a>
                </div>
              </div>

            </div>

            {/* Copyright Bar */}
            <div style={{ maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
              <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0 }}>
                &copy; {new Date().getFullYear()} PT. Sukabumi Eundeur Holding. All rights reserved.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem' }}>
                <a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>Privacy Policy</a>
                <a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>Terms of Service</a>
                <a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>Investor Relations</a>
              </div>
            </div>
          </footer>
          
          {/* Universal Global Watermark */}
          <div style={{ 
            position: 'fixed', 
            bottom: '10px', 
            left: '15px', 
            zIndex: 9999, 
            pointerEvents: 'none', 
            opacity: 0.35, 
            fontSize: '0.5rem', 
            fontWeight: 600, 
            color: '#64748b',
            letterSpacing: '0.05em',
            fontFamily: 'monospace'
          }}>
            CONFIDENTIAL & PROPRIETARY. ALL RIGHTS RESERVED. UNAUTHORIZED REPRODUCTION OR DISTRIBUTION IS STRICTLY PROHIBITED WITHOUT EXPLICIT CONSENT FROM PT. SUKABUMI EUNDEUR HOLDING & DEMA DIGITAL ASIA.
          </div>
        </PinProtector>
      </body>
    </html>
  );
}
