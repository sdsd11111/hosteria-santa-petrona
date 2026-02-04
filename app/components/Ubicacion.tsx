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
            </div>

            {/* Map - Full Width */}
            <div className={styles.mapWrapper}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.8809223707746!2d-78.53752538965874!3d-0.09115865239106093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5870ca2688d0d%3A0x57c81a6d7e3c90e5!2sHoster%C3%ADa%20Santa%20Petrona!5e0!3m2!1ses!2sec!4v1716300000000!5m2!1ses!2sec"
                    width="100%"
                    height="600"
                    style={{ border: 0, filter: 'grayscale(0%) contrast(1.1)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className={styles.map}
                ></iframe>
                <div className={styles.mapOverlay}></div>
            </div>

            <div className="container">
                {/* Info Cards - Floating over map bottom */}
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
        </section>
    );
}
