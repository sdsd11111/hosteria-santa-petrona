'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './AboutSection.module.css';

export default function AboutSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const features = [
        {
            title: "Complejo Acuático",
            description: "Piscina olímpica cubierta, sauna, turco e hidromasaje.",
            icon: "💧"
        },
        {
            title: "Conectividad y Comodidad",
            description: "WiFi, TV cable y fácil acceso desde Terminal La Ofelia.",
            icon: "📶"
        },
        {
            title: "Aventura y Recreación",
            description: "Zonas BBQ, canchas deportivas y senderos ecológicos.",
            icon: "🌲"
        }
    ];

    return (
        <section ref={sectionRef} className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    {/* Left Column: Bento Grid Images */}
                    <div className={`${styles.imageGrid} ${isVisible ? styles.animateInLeft : ''}`}>

                        <div className={styles.mainImageWrapper}>
                            <Image
                                src="/images/somos-1.webp"
                                alt="Hostería Santa Petrona - El mejor lugar donde hospedarse en Quito Norte"
                                fill
                                className={styles.image}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                            <div className={styles.badge}>
                                <span className={styles.star}>⭐</span> 4.2 en Google Maps
                            </div>
                        </div>

                        <div className={styles.secondaryImageWrapper}>
                            <Image
                                src="/images/somos-2.webp"
                                alt="Piscina temperada y áreas verdes en Hostería Santa Petrona Quito"
                                fill
                                className={styles.image}
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>

                        <div className={styles.tertiaryImageWrapper}>
                            <Image
                                src="/images/somos-3.webp"
                                alt="Habitaciones campestres y descanso natural en Catzuqui de Velasco"
                                fill
                                className={styles.image}
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                    </div>

                    {/* Right Column: Text Content */}
                    <div className={`${styles.content} ${isVisible ? styles.animateInRight : ''}`}>
                        <span className={styles.eyebrow}>Propuesta de Valor y Legado</span>
                        <h2 className={styles.title}>
                            Más que un Hospedaje, una Experiencia Natural en el Norte de Quito
                        </h2>

                        <p className={styles.description}>
                            Ubicada en la histórica Antigua Hacienda Catzuqui de Velasco, <strong>Hostería Santa Petrona</strong> nace como el refugio ideal para quienes buscan dónde hospedarse en Quito sin alejarse del núcleo urbano. Nos especializamos en ofrecer una "microaventura" completa: un entorno rodeado de montañas y aire puro a solo 15 minutos del Condado Shopping.
                        </p>

                        <div className={styles.featuresList}>
                            {features.map((item, index) => (
                                <div key={index} className={styles.featureItem}>
                                    <div className={styles.iconBox}>{item.icon}</div>
                                    <div>
                                        <h3 className={styles.featureTitle}>{item.title}:</h3>
                                        <p className={styles.featureDesc}>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            className={styles.galleryBtn}
                            onClick={() => {
                                document.getElementById('servicios-habitaciones')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Ver galería de experiencias
                        </button>
                    </div>

                    {/* Mission, Vision, Values Grid */}
                    <div className={`${styles.mvvGrid} ${isVisible ? styles.animateInUp : ''}`}>
                        {/* Misión */}
                        <div className={styles.mvvCard}>
                            <div className={styles.mvvIcon}>❤️</div>
                            <h3 className={styles.mvvTitle}>Misión</h3>
                            <p className={styles.mvvText}>
                                Brindar experiencias inolvidables a familias y visitantes a través de servicios de hospedaje, recreación y esparcimiento, en un entorno natural, acogedor y seguro. Promovemos el descanso, la diversión y el bienestar de quienes nos eligen.
                            </p>
                        </div>

                        {/* Visión */}
                        <div className={styles.mvvCard}>
                            <div className={styles.mvvIcon}>🔭</div>
                            <h3 className={styles.mvvTitle}>Visión</h3>
                            <p className={styles.mvvText}>
                                Queremos ser ese lugar especial al que siempre quieras volver. En Santa Petrona, trabajamos para ser el destino turístico campestre preferido de quienes buscan desconectarse de la rutina y reconectar con la naturaleza en familia.
                            </p>
                        </div>

                        {/* Valores */}
                        <div className={styles.mvvCard}>
                            <div className={styles.mvvIcon}>✨</div>
                            <h3 className={styles.mvvTitle}>Valores</h3>
                            <ul className={styles.valuesList}>
                                <li><strong>Cercanía y Calidez:</strong> Te recibimos como parte de nuestra familia.</li>
                                <li><strong>Diversión para Todos:</strong> Actividades que garantizan sonrisas.</li>
                                <li><strong>Naturaleza Viva:</strong> Cuidamos con pasión nuestro entorno.</li>
                                <li><strong>Comodidad Campestre:</strong> Detalles que marcan la diferencia.</li>
                                <li><strong>Pasión por Servir:</strong> ¡Cada recuerdo cuenta!</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
