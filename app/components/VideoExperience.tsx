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
                <div className={styles.videoContainer}>
                    <video
                        ref={videoRef}
                        className={styles.video}
                        poster="/video_poster.png" // Generated poster
                        loop
                        muted // Autoplay text requires muted usually, but user asked for muted loop
                        playsInline
                        onClick={handlePlayClick}
                    >
                        {/* Placeholder video source - replace with actual local file later */}
                        <source src="https://media.istockphoto.com/id/1360655297/video/swimming-pool.mp4?s=mp4-640x640-is&k=20&c=L_F1r1JtUo7n6qF9f0e1d8c7b6a5Z3x2y1w0v9u8t7s=" type="video/mp4" />
                        Tu navegador no soporta el elemento de video.
                    </video>

                    {/* Dark Gradient Overlay */}
                    <div className={`${styles.overlay} ${isPlaying ? styles.overlayHidden : ''}`}>
                        <div className={styles.contentWrapper}>
                            <h2 className={styles.title}>
                                Vive la Experiencia Santa Petrona en Catzhuquí de Velasco
                            </h2>
                            <p className={styles.description}>
                                Descubre por qué somos el destino preferido para el turismo de proximidad en el norte de Quito. Desde nuestra piscina olímpica temperada hasta cabalgatas por senderos ecológicos, el sol siempre brilla en nuestro refugio campestre.
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
                            Piscina Olímpica Temperada
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
