'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import GiveawayForm from './GiveawayForm';
import styles from './HeroSection.module.css';

const HERO_IMAGES = [
    '/images/hero-1.webp',
    '/images/hero-2.webp',
    '/images/hero-3.webp'
];

export default function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isGiveawayOpen, setIsGiveawayOpen] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <Suspense fallback={null}>
            <HeroContent
                isVisible={isVisible}
                setIsVisible={setIsVisible}
                currentImageIndex={currentImageIndex}
                setCurrentImageIndex={setCurrentImageIndex}
                isGiveawayOpen={isGiveawayOpen}
                setIsGiveawayOpen={setIsGiveawayOpen}
            />
        </Suspense>
    );
}

interface HeroContentProps {
    isVisible: boolean;
    setIsVisible: (v: boolean) => void;
    currentImageIndex: number;
    setCurrentImageIndex: (i: number) => void;
    isGiveawayOpen: boolean;
    setIsGiveawayOpen: (v: boolean) => void;
}

function HeroContent({
    isVisible,
    currentImageIndex,
    isGiveawayOpen,
    setIsGiveawayOpen
}: HeroContentProps) {
    const searchParams = useSearchParams();
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        if (searchParams.get('sorteo') === 'abrir') {
            setIsGiveawayOpen(true);
        }
    }, [searchParams, setIsGiveawayOpen]);



    return (
        <section className={styles.hero}>
            {/* Slider Background */}
            <div className={styles.bgWrapper}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: 'easeInOut' }}
                        className={styles.bgLayer}
                        style={{ backgroundImage: `url(${HERO_IMAGES[currentImageIndex]})` }}
                    />
                </AnimatePresence>
                <div className={styles.bgOverlay} />
            </div>

            <div className="container-wide">
                <div className={styles.heroGrid}>
                    {/* Left Column - Content */}
                    <div className={`${styles.heroContent} ${isVisible ? 'animate-fade-in-up' : ''}`}>
                        <h1 className={styles.title}>
                            <span className={styles.highlight}>Hostería</span> en Quito <span className={styles.highlight}>Santa Petrona</span><span className={styles.desktopOnly}>: Tu mejor opción de hospedaje en el Norte.</span>
                        </h1>

                        <div className={styles.subtitle}>
                            <p className={styles.descriptionWhite}>
                                Si buscas dónde hospedarse en Quito con ambiente campestre, estamos ubicados en Catzhuquí de Velasco, a solo 15 minutos del Condado Shopping.
                                {isExpanded && (
                                    <>
                                        {' '}Disfruta de la mejor relación costo-beneficio con habitaciones desde $20, piscina olímpica temperada y áreas verdes. El escape perfecto cerca de la ciudad, sin complicaciones de transporte.
                                    </>
                                )}
                            </p>
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className={styles.readMoreBtn}
                            >
                                {isExpanded ? 'Ocultar' : '... Seguir leyendo'}
                            </button>
                        </div>

                        {/* CTA Removal as requested */}


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
                            <button
                                className="btn btn-primary"
                                style={{ width: '100%' }}
                                onClick={() => setIsGiveawayOpen(true)}
                            >
                                Gánate una noche gratis
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <GiveawayForm
                isOpen={isGiveawayOpen}
                onClose={() => setIsGiveawayOpen(false)}
            />
        </section>
    );
}
