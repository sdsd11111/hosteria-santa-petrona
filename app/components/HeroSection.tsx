'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './HeroSection.module.css';

export default function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/593989974420?text=Hola,%20me%20gustaría%20hacer%20una%20reserva%20en%20Hostería%20Santa%20Petrona', '_blank');
    };

    const handleLearnMore = () => {
        const element = document.getElementById('servicios');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className={styles.hero}>
            <div className="container-wide">
                <div className={styles.heroGrid}>
                    {/* Left Column - Content */}
                    <div className={`${styles.heroContent} ${isVisible ? 'animate-fade-in-up' : ''}`}>
                        <h1 className={styles.title}>
                            Hostería en Quito Santa Petrona: Tu mejor opción de hospedaje en el Norte.
                        </h1>

                        <div className={styles.subtitle}>
                            <p>
                                Si buscas dónde hospedarse en Quito con ambiente campestre, estamos ubicados en Catzhuquí de Velasco, a solo 15 minutos del Condado Shopping.
                                {isExpanded ? (
                                    <>
                                        {' '}Disfruta de la mejor relación costo-beneficio con habitaciones desde $20, piscina olímpica temperada y áreas verdes. El escape perfecto cerca de la ciudad, sin complicaciones de transporte.
                                    </>
                                ) : (
                                    <>...</>
                                )}
                            </p>
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className={styles.readMoreBtn}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    fontWeight: '600',
                                    padding: '0',
                                    marginTop: '0.5rem',
                                    cursor: 'pointer',
                                    fontSize: '0.9rem'
                                }}
                            >
                                {isExpanded ? 'Ocultar' : 'Seguir leyendo'}
                            </button>
                        </div>

                        {/* CTA */}
                        <div className={styles.ctaGroup}>
                            <button onClick={handleWhatsAppClick} className="btn btn-primary" style={{ minWidth: '280px' }}>
                                <span style={{ fontSize: '1.25rem', marginRight: '0.5rem' }}>📱</span>
                                Consultar disponibilidad en WhatsApp
                            </button>
                        </div>

                        {/* Key Features */}
                        <div className={styles.features}>
                            <div className={styles.feature}>
                                <span className={styles.featureIcon}>🏊</span>
                                <span>Piscina Olímpica Temperada</span>
                            </div>
                            <div className={styles.feature}>
                                <span className={styles.featureIcon}>🌳</span>
                                <span>Entorno Natural</span>
                            </div>
                            <div className={styles.feature}>
                                <span className={styles.featureIcon}>📍</span>
                                <span>15 min del Condado</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Promo Card */}
                    <div className={`${styles.promoColumn} ${isVisible ? 'animate-fade-in' : ''}`}>
                        <div className={styles.promoCard}>
                            <h3 className={styles.promoTitle}>¡Gánate una Noche Gratis!</h3>
                            <p className={styles.promoText}>
                                Rellena los datos y participa por una estadía inolvidable en nuestra hostería.
                            </p>
                            <button className="btn btn-primary" style={{ width: '100%' }}>
                                Gánate una noche gratis
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
