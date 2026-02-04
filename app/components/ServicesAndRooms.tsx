'use client';

import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ServicesAndRooms.module.css';

interface ServiceItem {
    id: string;
    category: 'bienestar' | 'hospedaje' | 'aventuras';
    title: string;
    description: string;
    image: string;
    price?: string;
    features?: string[];
    size?: 'large' | 'normal';
}

const ITEMS: ServiceItem[] = [
    // Hospedaje (Lodging)
    {
        id: 'matrimonial',
        category: 'hospedaje',
        title: 'Habitaciones Matrimoniales',
        description: 'Privacidad y confort campestre para parejas o lunas de miel desde $40.00. Nuestras habitaciones matrimoniales están diseñadas para ofrecerte un descanso reparador con el toque rústico y acogedor que solo Santa Petrona puede brindar.',
        image: '/images/matrimonial.webp',
        price: '$40.00',
        size: 'large',
        features: ['💑 Romántico', '📶 WiFi', '📺 TV Cable', '🚿 Baño Privado']
    },
    {
        id: 'familiar',
        category: 'hospedaje',
        title: 'Habitaciones Dobles y Múltiples',
        description: 'Opciones dobles, triples y cuádruples ideales para familias y grupos que buscan compartir momentos inolvidables en un entorno natural y seguro.',
        image: '/images/dobles.webp',
        price: '$20.00 / pers',
        size: 'normal',
        features: ['👨‍👩‍👧‍👦 Familiar', '🧼 Confort', '🚿 Baño Privado', '📶 WiFi']
    },
    {
        id: 'por-persona',
        category: 'hospedaje',
        title: 'Hospedaje por Persona',
        description: 'Nuestra opción más versátil y económica para viajeros solitarios, mochileros o delegaciones que buscan calidad y ahorro.',
        image: '/images/por persona.webp',
        price: '$20.00',
        size: 'normal',
        features: ['💰 Económico', '👥 Grupos', '✨ Versátil', '🍽️ Acceso a áreas']
    },

    // Piscinas y Spa (Bienestar)
    {
        id: 'piscina-principal',
        category: 'bienestar',
        title: 'Piscina Olímpica Temperada',
        description: 'Nuestra joya arquitectónica: una piscina con dimensiones olímpicas y agua temperada mecánicamente los 365 días del año. Ideal para entrenamiento o pura diversión familiar.',
        image: '/images/piscina-1.webp',
        size: 'large',
        features: ['🏊 Olímpica', '🔥 Temperada', '📐 Profundidad oficial', '🧤 Cubierta']
    },
    {
        id: 'piscina-infantil',
        category: 'bienestar',
        title: 'Área Infantil Segura',
        description: 'Pensada exclusivamente para la seguridad de los más pequeños. Profundidad controlada y un ambiente lúdico para que los niños disfruten sin riesgos.',
        image: '/images/piscina-2.webp',
        size: 'normal',
        features: ['🧒 Kids Friendly', '🤽 Diversión', '🛡️ Seguro', '🧸 Juegos']
    },
    {
        id: 'jacuzzi-relax',
        category: 'bienestar',
        title: 'Jacuzzi e Hidromasaje',
        description: 'El lugar perfecto para la desconexión total. Nuestras tinas de hidromasaje con agua caliente te ayudarán a eliminar el estrés acumulado.',
        image: '/images/piscina-3.webp',
        size: 'normal',
        features: ['💧 Hidro', '🧖 Relax', '🛁 Confort', '🌡️ Agua Caliente']
    },
    {
        id: 'sauna-turco',
        category: 'bienestar',
        title: 'Sauna y Turco',
        description: 'Completa tu terapia de bienestar con sesiones de calor en nuestro complejo de sauna y turco, diseñados para la desintoxicación y relajación absoluta.',
        image: '/images/piscina-4.webp',
        size: 'normal',
        features: ['🧖 Sauna', '💨 Turco', '🍃 Detox', '♨️ Vapor']
    },

    // Aventuras
    {
        id: 'aventura-1',
        category: 'aventuras',
        title: 'Senderismo Ecológico',
        description: 'Atrévete a explorar los senderos naturales de la antigua hacienda. Una ruta llena de flora nativa, aves y vistas espectaculares de las montañas del norte de Quito.',
        image: '/images/aventura-1.webp',
        size: 'large',
        features: ['🚶‍♂️ Trekking', '🌳 Naturaleza', '📸 Paisajes', '👟 Aventura']
    },
    {
        id: 'aventura-2',
        category: 'aventuras',
        title: 'Canchas Deportivas',
        description: 'Fomenta el espíritu deportivo con un partido de fútbol, vóley o baloncesto en nuestras amplias canchas reglamentarias rodeadas de verde.',
        image: '/images/aventura-2.webp',
        size: 'normal',
        features: ['⚽ Fútbol', '🏐 Vóley', '⛹️ Baloncesto', '🏆 Torneos']
    },
    {
        id: 'aventura-3',
        category: 'aventuras',
        title: 'Cabalgatas Guiadas',
        description: 'Siente la libertad de recorrer la propiedad a caballo. Una actividad clásica campestre guiada por expertos para todas las edades.',
        image: '/images/aventura-3.webp',
        size: 'normal',
        features: ['🐎 Caballos', '⛰️ Hacienda', '✨ Guía', '👪 Familiar']
    },
    {
        id: 'aventura-4',
        category: 'aventuras',
        title: 'Áreas de Camping',
        description: 'Para los más aventureros, ofrecemos zonas seguras para acampar bajo el cielo estrellado de Catzhuquí, con acceso a servicios básicos.',
        image: '/images/aventura-4.webp',
        size: 'normal',
        features: ['⛺ Camping', '🔥 Fogatas', '🌌 Estrellas', '🔦 Aventura']
    },
    {
        id: 'aventura-5',
        category: 'aventuras',
        title: 'Zonas BBQ',
        description: 'Comparte un asado con los tuyos en nuestras estaciones BBQ equipadas. El plan perfecto para un domingo en familia al aire libre.',
        image: '/images/aventura-5.webp',
        size: 'normal',
        features: ['🍖 Parrilla', '👨‍👩‍👧‍👦 Familiar', '🍴 Aire Libre', '🧼 Equipado']
    },
    {
        id: 'aventura-6',
        category: 'aventuras',
        title: 'Juegos Infantiles',
        description: 'Un área dedicada al entretenimiento de los niños con resbaladeras, columpios y estructuras de madera seguras y divertidas.',
        image: '/images/aventura-6.webp',
        size: 'normal',
        features: ['🎡 Parque', '🧒 Recreación', '🍃 Aire Libre', '🎨 Diversión']
    }
];

export default function ServicesAndRooms() {
    const [activeTab, setActiveTab] = useState<'todo' | 'hospedaje' | 'bienestar' | 'aventuras'>('todo');
    const [showAll, setShowAll] = useState(false);
    const [selectedItem, setSelectedItem] = useState<ServiceItem | null>(null);

    // Disable scroll when modal is open
    useEffect(() => {
        if (selectedItem) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [selectedItem]);

    const filteredItems = useMemo(() => {
        return activeTab === 'todo'
            ? ITEMS
            : ITEMS.filter(item => item.category === activeTab);
    }, [activeTab]);

    const visibleItems = useMemo(() => {
        return showAll ? filteredItems : filteredItems.slice(0, 7);
    }, [filteredItems, showAll]);

    const handleWhatsApp = (e: React.MouseEvent, title: string) => {
        e.stopPropagation(); // Don't open the modal when clicking WhatsApp
        const text = `Hola, deseo información sobre: ${title}`;
        window.open(`https://wa.me/593989974420?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <section className={styles.section} id="servicios-habitaciones">
            <div className="container-wide">
                <div className={styles.header}>
                    <p className={styles.preTitle}>ESCAPA, DISFRUTA Y CREA RECUERDOS ÚNICOS</p>
                    <h2 className={styles.title}>
                        Servicios y Habitaciones: Todo lo que necesitas para tu descanso
                    </h2>

                    <div className={styles.tabs}>
                        {[
                            { id: 'todo', label: 'Todos los Servicios' },
                            { id: 'hospedaje', label: 'Hospedaje' },
                            { id: 'bienestar', label: 'Piscinas y Spa' },
                            { id: 'aventuras', label: 'Aventuras' }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                className={`${styles.tabBtn} ${activeTab === tab.id ? styles.activeTab : ''}`}
                                onClick={() => setActiveTab(tab.id as any)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.grid}>
                    {visibleItems.map((item) => (
                        <div
                            key={item.id}
                            className={`${styles.card} ${item.size === 'large' ? styles.cardLarge : ''}`}
                            onClick={() => setSelectedItem(item)}
                        >
                            <div className={styles.imageContainer}>
                                <Image
                                    src={item.image}
                                    alt={`${item.title} - Hostería en Quito Santa Petrona`}
                                    fill
                                    className={styles.cardImage}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className={styles.cardOverlay}>
                                <div className={styles.cardContent}>
                                    {item.price && <span className={styles.priceTag}>{item.price}</span>}
                                    <h3 className={styles.cardTitle}>{item.title}</h3>
                                    <p className={styles.cardDesc}>{item.description.substring(0, 100)}...</p>

                                    <div className={styles.features}>
                                        {item.features?.slice(0, 3).map(feat => (
                                            <span key={feat} className={styles.featureBadge}>{feat}</span>
                                        ))}
                                    </div>

                                    <button
                                        onClick={(e) => handleWhatsApp(e, item.title)}
                                        className={styles.ctaBtn}
                                    >
                                        Reserva tu Experiencia
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {!showAll && filteredItems.length > 7 && (
                    <div className={styles.viewMoreContainer}>
                        <button
                            onClick={() => setShowAll(true)}
                            className={styles.viewMoreBtn}
                        >
                            Ver más servicios
                        </button>
                    </div>
                )}
            </div>

            {/* Modal Detail View */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        className={styles.modalOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedItem(null)}
                    >
                        <motion.div
                            className={styles.modalContent}
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className={styles.closeBtn}
                                onClick={() => setSelectedItem(null)}
                            >
                                &times;
                            </button>

                            <div className={styles.modalBody}>
                                <div className={styles.modalImageWrapper}>
                                    <Image
                                        src={selectedItem.image}
                                        alt={`${selectedItem.title} - Hospedaje en el Norte de Quito`}
                                        fill
                                        className={styles.modalImage}
                                    />
                                    {selectedItem.price && <span className={styles.modalPrice}>{selectedItem.price}</span>}
                                </div>
                                <div className={styles.modalInfo}>
                                    <h3 className={styles.modalTitle}>{selectedItem.title}</h3>
                                    <p className={styles.modalDescription}>{selectedItem.description}</p>

                                    <div className={styles.modalFeatures}>
                                        <h4 className={styles.featuresTitle}>Lo que incluye:</h4>
                                        <div className={styles.featuresGrid}>
                                            {selectedItem.features?.map(feat => (
                                                <span key={feat} className={styles.modalFeatureItem}>{feat}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className={styles.modalActions}>
                                        <button
                                            onClick={(e) => handleWhatsApp(e, selectedItem.title)}
                                            className={styles.modalCta}
                                        >
                                            <span style={{ marginRight: '8px' }}>📱</span>
                                            Reservar vía WhatsApp
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
