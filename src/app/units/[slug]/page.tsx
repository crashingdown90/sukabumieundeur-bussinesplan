"use client";

import React, { useState, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { businessUnits } from '@/data/businessUnits';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import './slide-page.css';

export default function UnitPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  
  const unitIndex = businessUnits.findIndex(u => u.slug === slug);
  if (unitIndex === -1) {
    notFound();
  }
  
  const currentUnit = businessUnits[unitIndex];
  const hasSlides = currentUnit.presentationSlides && currentUnit.presentationSlides.length > 0;
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handlePrev = () => {
    if (hasSlides && currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (hasSlides && currentSlideIndex < currentUnit.presentationSlides.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    }
  };

  return (
    <div className="presentation-container animate-fade-in-up">
      {/* Top Header */}
      <header className="presentation-header">
        <div className="presentation-brand">
          <div style={{ color: 'var(--accent)' }}>
            {React.cloneElement(currentUnit.icon as React.ReactElement<any>, { size: 32, strokeWidth: 2 })}
          </div>
          <span>{currentUnit.name}</span>
          <span className="presentation-category">{currentUnit.category}</span>
        </div>
        <Link href="/" className="presentation-close" aria-label="Tutup">
          <X size={20} />
          <span>Tutup & Kembali</span>
        </Link>
      </header>

      <main className="presentation-main">
        {hasSlides ? (
          <div className="slide-card" key={currentSlideIndex} style={{ position: 'relative' }}>
            {/* Watermark Logo */}
            <div style={{ position: 'absolute', top: '2rem', right: '3rem', opacity: 0.15, pointerEvents: 'none' }}>
              <img src="/images/Logo_Sukabumi Endeur.png" alt="Sukabumi Eundeur" style={{ width: '80px', height: 'auto', objectFit: 'contain' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 450px', gap: '5rem', alignItems: 'center', minHeight: '450px' }}>
              <div>
                <div className="slide-meta animate-fade-in-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
                  <span className="slide-counter">Slide {currentSlideIndex + 1} of {currentUnit.presentationSlides.length}</span>
                  <span className="slide-title-label">{currentUnit.presentationSlides[currentSlideIndex].title}</span>
                </div>
                
                <h2 className="slide-heading animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
                  {currentUnit.presentationSlides[currentSlideIndex].heading}
                </h2>
                <div className="slide-content animate-fade-in-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
                  {currentUnit.presentationSlides[currentSlideIndex].content}
                </div>
              </div>

              {(currentUnit.presentationSlides[currentSlideIndex] as any).imageUrl ? (
                <div className="animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0, position: 'relative', width: '100%', height: '450px', borderRadius: '32px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)' }}>
                  <img src={(currentUnit.presentationSlides[currentSlideIndex] as any).imageUrl} alt="Slide Visual" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ) : (currentUnit.presentationSlides[currentSlideIndex] as any).visualIcon ? (
                <div className="animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f8fafc', width: '100%', height: '450px', borderRadius: '32px', border: '1px solid #e2e8f0', boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.02)' }}>
                  {React.cloneElement((currentUnit.presentationSlides[currentSlideIndex] as any).visualIcon as React.ReactElement<any>, { size: 180, color: 'var(--accent)', strokeWidth: 1 })}
                </div>
              ) : (
                <div className="animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f8fafc', width: '100%', height: '450px', borderRadius: '32px', border: '1px dashed #cbd5e1' }}>
                  {/* Empty placeholder to maintain perfect grid consistency */}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="slide-card" style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '2rem', right: '3rem', opacity: 0.15, pointerEvents: 'none' }}>
              <img src="/images/Logo_Sukabumi Endeur.png" alt="Sukabumi Eundeur" style={{ width: '80px', height: 'auto', objectFit: 'contain' }} />
            </div>
            <h2 className="slide-heading animate-fade-in-up" style={{ animationDelay: '0.1s', opacity: 0 }}>Visi & Misi Divisi</h2>
            <div className="slide-content animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>{currentUnit.fullDescription}</div>
            
            <h3 className="animate-fade-in-up" style={{ animationDelay: '0.3s', opacity: 0, marginTop: '3rem', marginBottom: '1.5rem', fontSize: '1.5rem', color: '#64748b' }}>Layanan Utama (Services)</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {currentUnit.services.map((service, idx) => (
                <li key={idx} className="animate-fade-in-up" style={{ animationDelay: `${0.4 + (idx * 0.1)}s`, opacity: 0, fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', color: '#0f172a' }}>
                  <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>✓</span> {service}
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>

      {/* Bottom Controls */}
      {hasSlides && (
        <footer className="presentation-footer">
          <button 
            onClick={handlePrev} 
            className="presentation-nav-btn" 
            disabled={currentSlideIndex === 0}
          >
            <ChevronLeft size={24} />
            <span>Sebelumnya</span>
          </button>

          <div className="presentation-dots">
            {currentUnit.presentationSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`presentation-dot ${currentSlideIndex === idx ? 'active' : ''}`}
                aria-label={`Ke slide ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext} 
            className="presentation-nav-btn"
            disabled={currentSlideIndex === currentUnit.presentationSlides.length - 1}
          >
            <span>Selanjutnya</span>
            <ChevronRight size={24} />
          </button>
        </footer>
      )}
    </div>
  );
}
