'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setMenuOpen(false);
        }
    };

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/593989974420?text=Hola,%20me%20gustaría%20hacer%20una%20reserva%20en%20Hostería%20Santa%20Petrona', '_blank');
    };

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className="container">
                <div className={styles.headerContent}>
                    {/* Logo */}
                    <div className={styles.logo}>
                        <Image
                            src="/logo.jpg"
                            alt="Hostería Santa Petrona"
                            width={60}
                            height={60}
                            className={styles.logoImg}
                            priority
                        />
                        <span className={styles.logoText}>Santa Petrona</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
                        <a onClick={() => scrollToSection('servicios')} className={styles.navLink}>
                            Servicios de Bienestar
                        </a>
                        <a onClick={() => scrollToSection('habitaciones')} className={styles.navLink}>
                            Habitaciones y Tarifas
                        </a>
                        <a onClick={() => scrollToSection('ubicacion')} className={styles.navLink}>
                            Ubicación
                        </a>
                    </nav>

                    {/* CTA Button */}
                    <button onClick={handleWhatsAppClick} className={`btn btn-primary ${styles.ctaBtn}`}>
                        <span className={styles.whatsappIcon}>📱</span>
                        Reserva por WhatsApp
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={styles.menuToggle}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={menuOpen ? styles.menuIconClose : styles.menuIcon}></span>
                    </button>
                </div>
            </div>
        </header>
    );
}
