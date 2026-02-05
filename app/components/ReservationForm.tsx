'use client';

import { useState } from 'react';
import styles from './ReservationForm.module.css';

export default function ReservationForm() {
    const [formData, setFormData] = useState({
        nombre: '',
        checkIn: '',
        checkOut: '',
        huespedes: '2',
        comentarios: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const message = `¡Hola! 👋 Estoy interesado en reservar en Hostería Santa Petrona.
        
📋 *Mis Datos:*
👤 Nombre: ${formData.nombre}
📅 Check-in: ${formData.checkIn}
📅 Check-out: ${formData.checkOut}
👥 Huéspedes: ${formData.huespedes}
${formData.comentarios ? `💬 Comentarios: ${formData.comentarios}` : ''}

¿Tienen disponibilidad? Quedo atento a su respuesta.`;

        const whatsappUrl = `https://wa.me/593989974420?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className={styles.formContainer}>
            <h3 className={styles.title}>Reserva tu Estadía</h3>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGrid}>
                    <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                        <label htmlFor="nombre" className={styles.label}>Nombre Completo</label>
                        <input
                            id="nombre"
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            className={styles.input}
                            placeholder="Ej. Juan Pérez"
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="checkIn" className={styles.label}>Llegada</label>
                        <input
                            id="checkIn"
                            type="date"
                            name="checkIn"
                            value={formData.checkIn}
                            onChange={handleChange}
                            className={styles.input}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="checkOut" className={styles.label}>Salida</label>
                        <input
                            id="checkOut"
                            type="date"
                            name="checkOut"
                            value={formData.checkOut}
                            onChange={handleChange}
                            className={styles.input}
                            required
                        />
                    </div>

                    <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                        <label htmlFor="huespedes" className={styles.label}>Número de Huéspedes</label>
                        <select
                            id="huespedes"
                            name="huespedes"
                            value={formData.huespedes}
                            onChange={handleChange}
                            className={styles.select}
                        >
                            <option value="1">1 Persona</option>
                            <option value="2">2 Personas</option>
                            <option value="3">3 Personas</option>
                            <option value="4">4 Personas</option>
                            <option value="5+">Grupo (5+)</option>
                        </select>
                    </div>

                    <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                        <label htmlFor="comentarios" className={styles.label}>Comentarios o Peticiones Especiales</label>
                        <textarea
                            id="comentarios"
                            name="comentarios"
                            value={formData.comentarios}
                            onChange={handleChange}
                            className={styles.textarea}
                            placeholder="¿Viajas con mascotas? ¿Necesitas cuna? Cuéntanos aquí..."
                        />
                    </div>
                </div>

                <button type="submit" className={styles.submitBtn}>
                    <span className={styles.whatsappIcon}>📱</span>
                    Enviar Reserva
                </button>
            </form>
        </div>
    );
}
