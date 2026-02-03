'use client';

import styles from './Testimonials.module.css';

interface Testimonial {
    id: number;
    name: string;
    initials: string;
    rating: number;
    text: string;
    source: 'Google Maps';
    tag?: string;
}

const TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        name: "Elena G.",
        initials: "EG",
        rating: 5,
        text: "Pasamos dos noches ahí, el personal fue muy amable y nos atendieron súper bien. El lugar es grande, rodeado de montañas y mucha naturaleza. ¡Ideal para desconectarse!",
        source: "Google Maps",
        tag: "Reseña Destacada"
    },
    {
        id: 2,
        name: "Carlos Villacís",
        initials: "CV",
        rating: 5,
        text: "El lugar perfecto para ir con niños. La piscina olímpica cubierta es un éxito total, no importa si llueve en Quito, el agua siempre está temperada.",
        source: "Google Maps",
        tag: "Enfoque Familiar"
    },
    {
        id: 3,
        name: "Mariana Paz",
        initials: "MP",
        rating: 4,
        text: "Excelente relación costo-beneficio. Es difícil encontrar una hostería tan cerca del Condado Shopping con estos precios y servicios.",
        source: "Google Maps",
        tag: "Enfoque Económico"
    },
    {
        id: 4,
        name: "Roberto S.",
        initials: "RS",
        rating: 5,
        text: "Muy buena atención, las cabalgatas son hermosas y la comida es deliciosa. Un refugio de paz a pocos minutos de la ciudad.",
        source: "Google Maps"
    }
];

export default function Testimonials() {
    // Triple the list to ensure the loop is seamless regardless of screen width
    const scrollItems = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

    return (
        <section className={styles.section}>
            <div className="container-wide">

                {/* Header Section with Trust Signals */}
                <div className={styles.header}>
                    <div className={styles.trustBadge}>
                        <div className={styles.googleIcon}>G</div>
                        <div className={styles.ratingInfo}>
                            <span className={styles.ratingScore}>4.2</span>
                            <div className={styles.stars}>★★★★★</div>
                            <span className={styles.reviewCount}>72 opiniones en Google</span>
                        </div>
                    </div>

                    <h2 className={styles.title}>
                        Lo que dicen nuestros huéspedes sobre la calidez de Santa Petrona
                    </h2>
                </div>

                {/* Infinite Slider Outer Container */}
                <div className={styles.sliderContainer}>
                    <div className={styles.sliderTrack}>
                        {scrollItems.map((t, idx) => (
                            <figure key={`${t.id}-${idx}`} className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <div className={t.tag === "Reseña Destacada" ? styles.quoteIconGold : styles.quoteIcon}>
                                        ❝
                                    </div>
                                    {t.tag && <span className={styles.tagBadge}>{t.tag}</span>}
                                </div>

                                <blockquote className={styles.quote}>
                                    {t.text}
                                </blockquote>

                                <figcaption className={styles.author}>
                                    <div className={styles.avatar}>{t.initials}</div>
                                    <div className={styles.authorDetails}>
                                        <cite className={styles.authorName}>{t.name}</cite>
                                        <div className={styles.verification}>
                                            <span className={styles.source}>{t.source}</span>
                                            <span className={styles.check}>✓ Verificada</span>
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                        ))}
                    </div>

                    {/* Gradient Overlays for smooth edges */}
                    <div className={styles.overlayLeft}></div>
                    <div className={styles.overlayRight}></div>
                </div>

                {/* Final CTA */}
                <div className={styles.footer}>
                    <a
                        href="https://www.google.com/travel/search?q=Hoster%C3%ADa%20Santa%20Petrona&g2lb=4965990%2C72471280%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C72958624%2C73059275%2C73064764%2C73249150&hl=es-419&gl=ec&ssta=1&ts=CAEaRwopEicyJTB4OTFkNTg3MGNhMjY4OGQwZDoweDU3YzgxYTZkN2UzYzkwZTUSGhIUCgcI6g8QAhgbEgcI6g8QAhgcGAEyAhAA&qs=CAEyE0Nnb0k1YUh5OGRmTmh1UlhFQUU4AkIJCeWQPH5tGshXQgkJ5ZA8fm0ayFc&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwjgqfTLhLySAxUAAAAAHQAAAAAQBA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.ctaBtn}
                    >
                        Lee más reseñas en Google Business
                    </a>
                </div>

            </div>
        </section>
    );
}
