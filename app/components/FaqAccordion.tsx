'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FaqAccordion.module.css';

interface FaqItem {
    question: string;
    answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
    {
        question: "¿Cómo llegar a la Hostería Santa Petrona desde el norte de Quito?",
        answer: "Estamos ubicados en la Antigua Hacienda Catzuqui de Velasco, sector norte. Puedes llegar fácilmente en vehículo propio (a solo 15 minutos del Condado Shopping) o mediante transporte público tomando los alimentadores desde la Terminal La Ofelia hacia el Barrio Tenerías."
    },
    {
        question: "¿La piscina es temperada y está disponible si llueve?",
        answer: "Sí, contamos con una piscina olímpica que es totalmente cubierta y temperada. Esto garantiza que nuestros huéspedes puedan disfrutar del complejo acuático, el sauna y el turco sin importar las condiciones climáticas de la ciudad."
    },
    {
        question: "¿Cuáles son los precios de hospedaje y qué incluyen?",
        answer: "Ofrecemos opciones accesibles desde $20.00 por persona en habitaciones dobles o familiares. Todas nuestras habitaciones cuentan con servicios de calidad como WiFi y TV cable para una estancia cómoda y conectada."
    },
    {
        question: "¿Se puede visitar la hostería solo por el día (pasadía)?",
        answer: "¡Por supuesto! Contamos con una tarifa de entrada al complejo de $3.00 para excursionistas o quienes buscan un pasadía de relax. Esto da acceso a nuestras áreas verdes, zonas de parrillada y el entorno natural de la hostería."
    },
    {
        question: "¿Qué actividades recreativas ofrecen para familias o grupos?",
        answer: "Somos el lugar ideal para la convivencia familiar; disponemos de canchas de fútbol, vóley, zonas de BBQ y senderos ecológicos para caminatas o cabalgatas cerca de Quito. También facilitamos espacios para eventos corporativos de pequeña escala."
    }
];

export default function FaqAccordion() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Structured Data (JSON-LD) for SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQ_ITEMS.map((item) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <section className={styles.section}>
            {/* Injecting JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="container">
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>Preguntas Frecuentes</h2>
                    <p className={styles.subtitle}>Resolvemos tus dudas para que solo te preocupes de disfrutar.</p>

                    <div className={styles.accordion}>
                        {FAQ_ITEMS.map((item, index) => (
                            <div key={index} className={styles.item}>
                                <button
                                    className={`${styles.question} ${activeIndex === index ? styles.activeQuestion : ''}`}
                                    onClick={() => toggleAccordion(index)}
                                    aria-expanded={activeIndex === index}
                                >
                                    <span className={styles.questionText}>{item.question}</span>
                                    <motion.span
                                        className={styles.icon}
                                        animate={{ rotate: activeIndex === index ? 45 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        +
                                    </motion.span>
                                </button>

                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                            className={styles.answerWrapper}
                                        >
                                            <div className={styles.answer}>
                                                {item.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
