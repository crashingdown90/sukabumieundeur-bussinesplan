"use client";

import React, { useState, useEffect } from 'react';

export default function PinProtector({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState(['', '', '', '']);
  const [error, setError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const auth = sessionStorage.getItem('sukabumi_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value.slice(-1);
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);
    setError(false);

    // auto focus next input
    if (value !== '' && index < 3) {
      const nextInput = document.getElementById(`pin-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && pin[index] === '' && index > 0) {
      const prevInput = document.getElementById(`pin-${index - 1}`);
      prevInput?.focus();
    } else if (e.key === 'Enter' && index === 3) {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    const enteredPin = pin.join('');
    if (enteredPin === '0266') {
      sessionStorage.setItem('sukabumi_auth', 'true');
      setIsAuthenticated(true);
    } else {
      setError(true);
      setPin(['', '', '', '']);
      document.getElementById('pin-0')?.focus();
    }
  };

  if (!isMounted) return null;

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      padding: '1rem'
    }}>
      <div style={{
        background: '#ffffff',
        padding: '3rem',
        borderRadius: '24px',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px'
      }}>
        <img 
          src="/images/Logo_Sukabumi Endeur.png" 
          alt="Sukabumi Eundeur Logo" 
          style={{ height: '80px', objectFit: 'contain', marginBottom: '0.5rem' }} 
        />
        
        <h1 style={{ color: '#334155', fontSize: '1rem', fontWeight: 600, marginBottom: '2.5rem', textAlign: 'center', letterSpacing: '0.02em' }}>
          Business Plan & Corporate Strategy
        </h1>
        
        <h2 style={{ color: '#0f172a', marginBottom: '1.5rem', fontSize: '1.25rem', fontWeight: 600 }}>Enter Security PIN</h2>
        
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem' }}>
          {pin.map((digit, index) => (
            <input
              key={index}
              id={`pin-${index}`}
              type="password"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              style={{
                width: '50px',
                height: '60px',
                fontSize: '1.5rem',
                textAlign: 'center',
                backgroundColor: '#f8fafc',
                border: error ? '2px solid #ef4444' : '2px solid #e2e8f0',
                borderRadius: '12px',
                color: '#0f172a',
                outline: 'none',
                transition: 'all 0.2s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--accent, #f97316)'}
              onBlur={(e) => e.target.style.borderColor = error ? '#ef4444' : '#e2e8f0'}
            />
          ))}
        </div>

        {error && <p style={{ color: '#ef4444', marginBottom: '1rem', fontSize: '0.875rem' }}>Incorrect PIN. Please try again.</p>}

        <button 
          onClick={handleSubmit}
          style={{
            width: '100%',
            padding: '0.875rem',
            backgroundColor: 'var(--accent, #f97316)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'background-color 0.2s',
            marginBottom: '2rem'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ea580c'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--accent, #f97316)'}
        >
          Verify
        </button>

        <div style={{ textAlign: 'center', opacity: 0.8 }}>
          <p style={{ color: '#334155', fontSize: '0.85rem', letterSpacing: '0.05em', marginBottom: '0.25rem', fontWeight: 600 }}>DEMA DIGITAL ASIA CONSULTING</p>
          <a href="https://www.demadigitalasia.com" target="_blank" rel="noopener noreferrer" style={{ color: '#64748b', fontSize: '0.75rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent, #f97316)'} onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}>www.demadigitalasia.com</a>
        </div>
      </div>
    </div>
  );
}
