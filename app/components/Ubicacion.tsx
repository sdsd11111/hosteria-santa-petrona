'use client';

import styles from './Ubicacion.module.css';
import ReservationForm from './ReservationForm';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./Map'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full min-h-[400px] bg-gray-100 animate-pulse flex items-center justify-center">
            <p className="text-gray-500 font-medium">Cargando mapa interactivo...</p>
        </div>
    )
});

export default function Ubicacion() {
    const handleDireccionesClick = () => {
        window.open('https://maps.app.goo.gl/ymS2J8iXUVrWJchV8', '_blank');
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
                <Map />
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
                        <button onClick={handleDireccionesClick} className="btn btn-secondary">
                            Cómo llegar
                        </button>
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

                {/* Reservation Form */}
                <ReservationForm />
            </div>
        </section>
    );
}
