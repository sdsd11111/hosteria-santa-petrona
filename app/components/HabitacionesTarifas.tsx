'use client';

import Image from 'next/image';
import styles from './HabitacionesTarifas.module.css';

export default function HabitacionesTarifas() {
    const handleReservaClick = () => {
        window.open('https://wa.me/593989974420?text=Hola,%20me%20gustaría%20información%20sobre%20habitaciones%20y%20tarifas', '_blank');
    };

    const planes = [
        {
            nombre: 'Pase de Día',
            precio: '20',
            descripcion: 'Acceso a todas las instalaciones',
            caracteristicas: [
                'Acceso a piscina temperada',
                'Uso de áreas verdes',
                'Parqueadero incluido',
                'Todo el día hasta las 6pm'
            ],
            destacado: false
        },
        {
            nombre: 'Habitación Simple',
            precio: 'Consultar',
            descripcion: 'Cómoda habitación con vista al jardín',
            caracteristicas: [
                'Cama matrimonial o 2 individuales',
                'Baño privado',
                'Acceso a piscina',
                'Wi-Fi gratuito'
            ],
            destacado: true
        },
        {
            nombre: 'Habitación Familiar',
            precio: 'Consultar',
            descripcion: 'Ideal para grupos y familias',
            caracteristicas: [
                'Capacidad para 4-6 personas',
                'Espacios amplios',
                'Acceso a todas las instalaciones',
                'Servicio de alimentación disponible'
            ],
            destacado: false
        }
    ];

    return (
        <section id="habitaciones" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.label}>Opciones para Ti</span>
                    <h2 className={styles.title}>Habitaciones y Tarifas</h2>
                    <p className={styles.description}>
                        Elige la opción perfecta para tu estadía o visita del día
                    </p>
                </div>

                <div className={styles.grid}>
                    {planes.map((plan, index) => (
                        <div
                            key={index}
                            className={`${styles.card} ${plan.destacado ? styles.destacado : ''}`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {plan.destacado && (
                                <div className={styles.badge}>Más Popular</div>
                            )}

                            <div className={styles.imageWrapper}>
                                <Image
                                    src="/room-placeholder.png"
                                    alt={plan.nombre}
                                    width={400}
                                    height={250}
                                    className={styles.image}
                                />
                            </div>

                            <div className={styles.content}>
                                <h3 className={styles.planNombre}>{plan.nombre}</h3>

                                <div className={styles.precio}>
                                    {plan.precio === 'Consultar' ? (
                                        <span className={styles.precioConsultar}>Consultar tarifa</span>
                                    ) : (
                                        <>
                                            <span className={styles.precioNumero}>${plan.precio}</span>
                                            <span className={styles.precioPersona}>por persona</span>
                                        </>
                                    )}
                                </div>

                                <p className={styles.planDescripcion}>{plan.descripcion}</p>

                                <ul className={styles.caracteristicas}>
                                    {plan.caracteristicas.map((caracteristica, idx) => (
                                        <li key={idx} className={styles.caracteristica}>
                                            <span className={styles.checkIcon}>✓</span>
                                            {caracteristica}
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={handleReservaClick}
                                    className={`btn ${plan.destacado ? 'btn-primary' : 'btn-secondary'} ${styles.btnReserva}`}
                                >
                                    Consultar Disponibilidad
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
