import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerGrid}>
                    {/* Column 1: Logo & NAP */}
                    <div className={styles.column}>
                        <div className={styles.logoSection}>
                            <Image
                                src="/logo.jpg"
                                alt="Hostería Santa Petrona"
                                width={60}
                                height={60}
                                className={styles.logo}
                            />
                            <h3 className={styles.brandName}>Hostería Santa Petrona</h3>
                        </div>
                        <p className={styles.tagline}>
                            Tu refugio campestre a minutos de Quito
                        </p>
                        <div className={styles.nap}>
                            <p><strong>Dirección:</strong></p>
                            <p>Barrio Tenerías</p>
                            <p>Antigua Hacienda Catzhuquí de Velasco</p>
                            <p>Quito, Ecuador</p>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Enlaces Rápidos</h4>
                        <ul className={styles.linkList}>
                            <li>
                                <a href="#servicios" className={styles.link}>Servicios de Bienestar</a>
                            </li>
                            <li>
                                <a href="#habitaciones" className={styles.link}>Habitaciones y Tarifas</a>
                            </li>
                            <li>
                                <a href="#ubicacion" className={styles.link}>Ubicación</a>
                            </li>
                        </ul>

                        <h4 className={`${styles.columnTitle} ${styles.marginTop}`}>Cómo Llegar</h4>
                        <ul className={styles.references}>
                            <li>📍 15 min desde Condado Shopping</li>
                            <li>📍 20 min desde Terminal La Ofelia</li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Contacto</h4>
                        <div className={styles.contactInfo}>
                            <p className={styles.contactItem}>
                                <strong>WhatsApp:</strong><br />
                                <a href="https://wa.me/593989974420" target="_blank" rel="noopener noreferrer" className={styles.whatsappLink}>
                                    +593 98 997 4420
                                </a>
                            </p>
                            <p className={styles.contactItem}>
                                <strong>Horario de Atención:</strong><br />
                                Todos los días<br />
                                8:00 AM - 6:00 PM
                            </p>
                        </div>

                        <div className={styles.socialMedia}>
                            <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="TikTok">
                                <span>📱</span>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
                                <span>👥</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={styles.bottomBar}>
                    <p className={styles.copyright}>
                        Diseñado por <a href="https://cesarreyesjaramillo.com/" target="_blank" rel="noopener noreferrer" className={styles.designerLink}>Cesar Reyes</a> | Hosteria Santa Petrona {currentYear}
                    </p>
                    <a href="#" className={styles.policyLink}>Política de Privacidad</a>
                </div>
            </div>
        </footer>
    );
}
