import styles from './ServiciosBienestar.module.css';

export default function ServiciosBienestar() {
    const servicios = [
        {
            icon: '🏊‍♂️',
            title: 'Piscina Semi Olímpica Cubierta',
            description: 'Nuestra piscina temperada de tamaño semi olímpico te espera todo el año, sin importar el clima.'
        },
        {
            icon: '🌡️',
            title: 'Agua Temperada',
            description: 'Disfruta del confort de una temperatura agradable en cualquier época del año.'
        },
        {
            icon: '🌳',
            title: 'Entorno Natural',
            description: 'Rodeado de vegetación y paisajes de montaña que renuevan tu energía.'
        },
        {
            icon: '🍽️',
            title: 'Servicio de Alimentación',
            description: 'Gastronomía local y sabores tradicionales para complementar tu experiencia.'
        },
        {
            icon: '🏞️',
            title: 'Áreas Verdes',
            description: 'Amplios espacios naturales para caminar, relajarte y conectar con la naturaleza.'
        },
        {
            icon: '👨‍👩‍👧‍👦',
            title: 'Ideal para Familias',
            description: 'Un espacio seguro y acogedor para disfrutar con toda la familia.'
        }
    ];

    return (
        <section id="servicios" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.label}>Experiencias Únicas</span>
                    <h2 className={styles.title}>Servicios de Bienestar</h2>
                    <p className={styles.description}>
                        Todo lo que necesitas para una escapada perfecta a solo minutos de la ciudad
                    </p>
                </div>

                <div className={styles.grid}>
                    {servicios.map((servicio, index) => (
                        <div
                            key={index}
                            className={styles.card}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className={styles.iconWrapper}>
                                <span className={styles.icon}>{servicio.icon}</span>
                            </div>
                            <h3 className={styles.cardTitle}>{servicio.title}</h3>
                            <p className={styles.cardDescription}>{servicio.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
