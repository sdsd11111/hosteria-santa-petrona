'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './RecreationalActivities.module.css';

export default function RecreationalActivities() {
    return (
        <section className={styles.section} id="actividades-recreativas">
            <div className={styles.decorativeText}>
                <span>ACTIVIDADES RECREATIVAS </span>
                <span>ACTIVIDADES RECREATIVAS </span>
                <span>ACTIVIDADES RECREATIVAS </span>
                <span>ACTIVIDADES RECREATIVAS </span>
            </div>

            <div className="container-wide">
                <div className={styles.grid}>
                    {/* Left Column - Content */}
                    <motion.div
                        className={styles.content}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className={styles.preTitle}>ESCAPA, DISFRUTA Y CREA RECUERDOS ÚNICOS</p>
                        <h2 className={styles.title}>🌿 ¡Vive la aventura en plena naturaleza! 🐎⛰️</h2>

                        <div className={styles.description}>
                            <p>
                                Disfruta de una emocionante excursión a caballo y déjate llevar por paisajes únicos mientras conectas con la naturaleza y estos nobles animales 🤍.
                            </p>
                            <p>
                                Embárcate también en una travesía de senderismo 🚶‍♀️🌲: recorre antiguos caminos, bosques encantados y montañas llenas de historia. Una experiencia perfecta para descubrir la belleza y el patrimonio natural de nuestra región.
                            </p>
                            <p className={styles.highlightText}>
                                ✨ Te esperamos en nuestra Hostería para vivir momentos inolvidables. ¡La aventura te está llamando! 🏞️🌟
                            </p>
                        </div>

                        <div className={styles.ctaWrapper}>
                            <a
                                href="https://wa.me/593989974420?text=Hola,%20deseo%20información%20sobre%20las%20actividades%20recreativas"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.ctaBtn}
                            >
                                Consultar Actividades
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column - Image Collage */}
                    <div className={styles.imageGrid}>
                        <motion.div
                            className={styles.mainImageWrapper}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <Image
                                src="/images/aventura-3.webp"
                                alt="Cabalgatas guiadas en Hostería Santa Petrona - Hostería en Quito"
                                fill
                                className={styles.image}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className={styles.imageBadge}>Aventura Ecuestre</div>
                        </motion.div>

                        <motion.div
                            className={styles.subImageWrapper}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <Image
                                src="/images/aventura-1.webp"
                                alt="Senderismo por bosques naturales cerca del Condado Shopping Quito"
                                fill
                                className={styles.image}
                                sizes="(max-width: 768px) 50vw, 25vw"
                            />
                        </motion.div>

                        <motion.div
                            className={styles.extraImageWrapper}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <Image
                                src="/images/somos-2.webp"
                                alt="Paisajes y entornos naturales en Hostería Santa Petrona - Donde hospedarse en Quito"
                                fill
                                className={styles.image}
                                sizes="(max-width: 768px) 50vw, 25vw"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
