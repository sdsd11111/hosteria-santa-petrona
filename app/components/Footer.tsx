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
                                src="/logo.png"
                                alt="Logo Hostería Santa Petrona - Hospedaje campestre en Quito"
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
                                <a href="#servicios-habitaciones" className={styles.link} title="Piscina olímpica, sauna y bienestar">Servicios de Bienestar</a>
                            </li>
                            <li>
                                <a href="#servicios-habitaciones" className={styles.link} title="Habitaciones desde $20 en Quito">Habitaciones y Tarifas</a>
                            </li>
                            <li>
                                <a href="#ubicacion" className={styles.link} title="Cómo llegar a la hostería">Ubicación</a>
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
                            <a href="https://www.facebook.com/profile.php?id=100063551562356&locale=es_LA" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/hosteria_santa_petrona/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                    <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2a5.8,5.8 0 0,1 -5.8,5.8H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2m-.2,2A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6m9.65,1.5a1.25,1.25 0 0,1 1.25,1.25A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75a1.25,1.25 0 0,1 1.25,-1.25M12,7a5,5 0 0,1 5,5 5,5 0 0,1 -5,5 5,5 0 0,1 -5,-5 5,5 0 0,1 5,-5m0,2A3,3 0 0,0 9,12a3,3 0 0,0 3,3 3,3 0 0,0 3,-3 3,3 0 0,0 -3,-3Z" />
                                </svg>
                            </a>
                            <a href="https://www.tiktok.com/@hosteria_santa_petrona" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="TikTok">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={styles.bottomBar}>
                    <p className={styles.copyright}>
                        Diseñado por <a href="https://cesarreyesjaramillo.com/" target="_blank" rel="noopener noreferrer" className={styles.designerLink}>Cesar Reyes</a> | Hosteria Santa Petrona {currentYear}
                    </p>
                    <div className={styles.legalLinks}>
                        <a href="/terminos-condiciones" className={styles.policyLink}>Términos y Condiciones</a>
                        <span className={styles.separator}>|</span>
                        <a href="/politicas-privacidad" className={styles.policyLink}>Políticas de Privacidad</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
