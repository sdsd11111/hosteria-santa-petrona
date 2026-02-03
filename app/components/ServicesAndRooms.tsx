'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
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
    // Piscinas (Bienestar)
    {
        id: 'piscina',
        category: 'bienestar',
        title: 'Piscinas Cubiertas y Temperadas',
        description: 'Ambiente de bienestar y diversión ideal para todas las edades. Incluye piscina olímpica, piscina infantil segura y jacuzzi.',
        image: '/about-piscina.png',
        size: 'large',
        features: ['🏊 Olímpica', '🧒 Infantil', '🔥 Jacuzzi', '🔥 Sauna']
    },
    {
        id: 'spa',
        category: 'bienestar',
        title: 'Relajación Total',
        description: 'Jacuzzi y saunas diseñados para una experiencia de desconexión total del ritmo diario.',
        image: '/service-spa.png',
        size: 'normal',
        features: ['🧼 Sauna', '💨 Turco', '💧 Hidromasaje']
    },

    // Hospedaje
    {
        id: 'matrimonial',
        category: 'hospedaje',
        title: 'Habitaciones Matrimoniales',
        description: 'Privacidad y confort campestre para parejas o lunas de miel desde $40.00.',
        image: '/room-placeholder.png',
        price: '$40.00',
        size: 'normal',
        features: ['💑 Romántico', '📶 WiFi', '📺 TV Cable']
    },
    {
        id: 'familiar',
        category: 'hospedaje',
        title: 'Habitaciones Dobles y Múltiples',
        description: 'Opciones dobles, triples y cuádruples ideales para familias y grupos.',
        image: '/room-placeholder.png',
        price: '$20.00 / pers',
        size: 'large',
        features: ['👨‍👩‍👧‍👦 Familiar', '🧼 Confort', '🚿 Baño Privado']
    },
    {
        id: 'campestre',
        category: 'hospedaje',
        title: 'Habitaciones Tipo Campestre',
        description: 'La opción más económica para grupos grandes desde $5.00 por persona.',
        image: '/hero-placeholder.png',
        price: '$5.00 / pers',
        size: 'normal',
        features: ['⛺ Aventura', '💰 Económico', '👥 Grupos']
    },

    // Aventuras
    {
        id: 'cabalgatas',
        category: 'aventuras',
        title: 'Cabalgatas Guiadas',
        description: 'Disfruta de una emocionante excursión a caballo por paisajes únicos mientras conectas con estos nobles animales.',
        image: '/about-senderos.png',
        size: 'large',
        features: ['🐎 Excursiones', '⛰️ Paisajes Únicos', '✨ Conexión']
    },
    {
        id: 'senderismo',
        category: 'aventuras',
        title: 'Bosques y Senderismo',
        description: 'Recorre antiguos caminos, bosques encantados y montañas llenas de historia en una travesía de pura desconexión.',
        image: '/about-senderos.png',
        size: 'normal',
        features: ['🚶‍♀️ Trekking', '🌲 Bosques Encantados', '🏔️ Historia']
    },
    {
        id: 'recreacion',
        category: 'aventuras',
        title: 'Zonas Recreativas y BBQ',
        description: 'Canchas de fútbol, vóley y área BBQ ideal para compartir momentos inolvidables en familia.',
        image: '/about-fachada.png',
        size: 'normal',
        features: ['⚽ Deportes', '🍖 Área BBQ', '🎯 Diversión']
    }
];

export default function ServicesAndRooms() {
    const [activeTab, setActiveTab] = useState<'todo' | 'hospedaje' | 'bienestar' | 'aventuras'>('todo');

    const filteredItems = useMemo(() => {
        return activeTab === 'todo'
            ? ITEMS
            : ITEMS.filter(item => item.category === activeTab);
    }, [activeTab]);

    const handleWhatsApp = (title: string) => {
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
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className={`${styles.card} ${item.size === 'large' ? styles.cardLarge : ''}`}
                        >
                            <div className={styles.imageContainer}>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className={styles.cardImage}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className={styles.cardOverlay}>
                                <div className={styles.cardContent}>
                                    {item.price && <span className={styles.priceTag}>{item.price}</span>}
                                    <h3 className={styles.cardTitle}>{item.title}</h3>
                                    <p className={styles.cardDesc}>{item.description}</p>

                                    <div className={styles.features}>
                                        {item.features?.map(feat => (
                                            <span key={feat} className={styles.featureBadge}>{feat}</span>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => handleWhatsApp(item.title)}
                                        className={styles.ctaBtn}
                                    >
                                        Reserva tu Experiencia
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
