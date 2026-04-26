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
            <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <a href="/business-model" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}>Business Model</a>
              <a href="/team" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}>Management</a>
              <a href="/roadmap" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}>Roadmap</a>
              <a href="/capex" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}>Financials</a>
              <a href="#" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>Download PDF</a>
            </nav>
          </header>
          <main>{children}</main>
          <footer className="footer">
            <p className="logo" style={{ color: 'white', marginBottom: '1rem' }}>PT. SUKABUMI EUNDEUR HOLDING</p>
            <p>Sukabumi, Jawa Barat, Indonesia</p>
            <p style={{ marginTop: '2rem', fontSize: '0.875rem' }}>&copy; {new Date().getFullYear()} PT. Sukabumi Eundeur Holding. All rights reserved.</p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#94a3b8', letterSpacing: '0.05em' }}>
              Consulting bussines partner : <a href="https://www.demadigitalasia.com" target="_blank" rel="noopener noreferrer" style={{ color: '#bfdbfe', textDecoration: 'none' }}>Dema Digital Asia</a>.
            </p>
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
