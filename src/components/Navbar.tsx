"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header-nav" style={{ position: 'relative', zIndex: 50 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <a href="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/images/Logo_Sukabumi Endeur.png" alt="Sukabumi Eundeur Holding" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
        </a>

        {/* Mobile Hamburger Button */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsOpen(!isOpen)}
          style={{ display: 'none', background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', padding: '0.5rem' }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation */}
        <nav className={`desktop-nav ${isOpen ? 'mobile-open' : ''}`}>
          <a href="/" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}>Unit Bisnis</a>
          <a href="/business-model" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}>Business Model</a>
          <a href="/investment-model" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}>Investment Model</a>
          <a href="/team" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}>Management</a>
          <a href="/roadmap" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}>Roadmap</a>
          <a href="/capex" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}>Financials</a>
          <a href="#" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>Download PDF</a>
        </nav>
      </div>

      <style jsx>{`
        .desktop-nav {
          display: flex;
          gap: 1.5rem;
          align-items: center;
          flex-wrap: wrap;
        }
        
        @media (max-width: 900px) {
          .mobile-menu-btn {
            display: block !important;
          }
          
          .desktop-nav {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 1.5rem;
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
            gap: 1.5rem;
            align-items: flex-start;
          }
          
          .desktop-nav.mobile-open {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}
