'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import styles from './VideoExperience.module.css';

export default function VideoExperience() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlayClick = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className={styles.section}>
            <div className="container-wide">

                {/* Cinematic Video Container */}
                <div className={styles.videoContainer} aria-label="Video promocional de la experiencia en Hostería Santa Petrona">
                    <video
                        ref={videoRef}
                        className={styles.video}
                        tabIndex={-1}
                        poster="/images/hero-2.webp" // Optimized poster choice from user feedback
                        preload="none"
                        loop
                        muted
                        playsInline
                        onClick={handlePlayClick}
                    >
                        <source src="/videos/video.mp4" type="video/mp4" />
                        Tu navegador no soporta el elemento de video.
                    </video>

                    {/* Dark Gradient Overlay */}
                    <div className={`${styles.overlay} ${isPlaying ? styles.overlayHidden : ''}`}>
                        <div className={styles.contentWrapper}>
                            <h2 className={styles.title}>
                                Vive la Experiencia Santa Petrona en Catzuqui de Velasco
                            </h2>
                            <p className={styles.description}>
                                Descubre nuestro refugio natural a solo 15 minutos del norte de Quito.
                            </p>
                        </div>
                    </div>

                    {/* Floating Play Button */}
                    {!isPlaying && (
                        <button className={styles.playBtn} onClick={handlePlayClick} aria-label="Reproducir video">
                            <span className={styles.playIcon}>▶</span>
                        </button>
                    )}

                    {/* Floating Badges */}
                    <div className={styles.badgesContainer}>
                        <div className={styles.badge}>
                            <span className={styles.badgeIcon}>🏊</span>
                            Piscina Semi Olímpica Temperada
                        </div>
                        <div className={styles.badge}>
                            <span className={styles.badgeIcon}>📍</span>
                            A 15 min de Quito
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className={styles.ctaWrapper}>
                    <p className={styles.ctaText}>
                        ¿Listo para tu próxima microaventura? El escape perfecto te espera a la vuelta de la esquina.
                    </p>
                </div>

            </div>
        </section>
    );
}
