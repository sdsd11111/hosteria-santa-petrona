'use client';

import styles from './Ubicacion.module.css';

export default function Ubicacion() {
    const handleDireccionesClick = () => {
        window.open('https://maps.google.com/?q=Barrio+Tenerías+Antigua+Hacienda+Catzhuquí+de+Velasco+Quito', '_blank');
    };

    return (
        <section id="ubicacion" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.label}>Encuéntranos</span>
                    <h2 className={styles.title}>Ubicación</h2>
                    <p className={styles.description}>
                        A pocos minutos de Quito, en el tranquilo sector de Catzhuquí de Velasco
                    </p>
                </div>

                <div className={styles.content}>
                    {/* Map */}
                    <div className={styles.mapWrapper}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.217!2d-78.471!3d-0.153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMDknMTAuOCJTIDc4wrAyOCcxNS42Ilc!5e0!3m2!1ses!2sec!4v1234567890"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className={styles.map}
                        ></iframe>
                    </div>

                    {/* Info Cards */}
                    <div className={styles.infoGrid}>
                        <div className={styles.infoCard}>
                            <div className={styles.iconBox}>
                                <span className={styles.icon}>📍</span>
                            </div>
                            <h3 className={styles.infoTitle}>Dirección</h3>
                            <p className={styles.infoText}>
                                Barrio Tenerías<br />
                                Antigua Hacienda Catzhuquí de Velasco<br />
                                Quito, Ecuador
                            </p>
                            <button onClick={handleDireccionesClick} className="btn btn-secondary">
                                Ver en Google Maps
                            </button>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.iconBox}>
                                <span className={styles.icon}>🚗</span>
                            </div>
                            <h3 className={styles.infoTitle}>Cómo Llegar</h3>
                            <ul className={styles.references}>
                                <li>
                                    <strong>Desde el Condado Shopping:</strong><br />
                                    15 minutos en auto
                                </li>
                                <li>
                                    <strong>Desde Terminal La Ofelia:</strong><br />
                                    20 minutos en auto
                                </li>
                                <li>
                                    <strong>Desde el Centro de Quito:</strong><br />
                                    25 minutos en auto
                                </li>
                            </ul>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.iconBox}>
                                <span className={styles.icon}>📞</span>
                            </div>
                            <h3 className={styles.infoTitle}>Contacto</h3>
                            <p className={styles.infoText}>
                                <strong>WhatsApp:</strong><br />
                                +593 98 997 4420
                            </p>
                            <p className={styles.infoText}>
                                <strong>Horario de Atención:</strong><br />
                                Todos los días<br />
                                8:00 AM - 6:00 PM
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
