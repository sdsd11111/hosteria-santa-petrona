'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './GiveawayForm.module.css';

interface FormData {
    nombre: string;
    whatsapp: string;
    email: string;
    diaCumple: string;
    mesCumple: string;
    preferenciaViaje: string;
}

interface GiveawayFormProps {
    isOpen: boolean;
    onClose: () => void;
}

const MESES = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

export default function GiveawayForm({ isOpen, onClose }: GiveawayFormProps) {
    const [currentStep, setCurrentStep] = useState(0);
    const [direction, setDirection] = useState(0);
    const [formData, setFormData] = useState<FormData>({
        nombre: '',
        whatsapp: '',
        email: '',
        diaCumple: '',
        mesCumple: '',
        preferenciaViaje: ''
    });

    const nextStep = () => {
        setDirection(1);
        setCurrentStep(prev => prev + 1);
    };

    const handleDataChange = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const resetForm = () => {
        setCurrentStep(0);
        setFormData({
            nombre: '',
            whatsapp: '',
            email: '',
            diaCumple: '',
            mesCumple: '',
            preferenciaViaje: ''
        });
        setDirection(0);
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 300 : -300,
            opacity: 0
        })
    };

    if (!isOpen) return null;

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return (
                    <div className={styles.stepWrapper}>
                        <span className={styles.stepCounter}>Paso 1 de 5</span>
                        <h2 className={styles.questionText}>¿Cuál es tu nombre completo?</h2>
                        <input
                            type="text"
                            className={styles.textInput}
                            placeholder="Ej. Juan Pérez"
                            value={formData.nombre}
                            onChange={(e) => handleDataChange('nombre', e.target.value)}
                            autoFocus
                        />
                        <button
                            className={styles.nextBtn}
                            disabled={!formData.nombre.trim()}
                            onClick={nextStep}
                        >
                            Siguiente
                        </button>
                    </div>
                );
            case 1:
                return (
                    <div className={styles.stepWrapper}>
                        <span className={styles.stepCounter}>Paso 2 de 5</span>
                        <h2 className={styles.questionText}>Dinos tu número de WhatsApp</h2>
                        <div className={styles.inputGroup}>
                            <span className={styles.prefix}>+593</span>
                            <input
                                type="tel"
                                className={styles.textInput}
                                placeholder="0998877665"
                                value={formData.whatsapp}
                                onChange={(e) => handleDataChange('whatsapp', e.target.value)}
                                autoFocus
                            />
                        </div>
                        <button
                            className={styles.nextBtn}
                            disabled={!formData.whatsapp.trim()}
                            onClick={nextStep}
                        >
                            Siguiente
                        </button>
                    </div>
                );
            case 2:
                return (
                    <div className={styles.stepWrapper}>
                        <span className={styles.stepCounter}>Paso 3 de 5</span>
                        <h2 className={styles.questionText}>¿A qué correo te enviamos el premio?</h2>
                        <input
                            type="email"
                            className={styles.textInput}
                            placeholder="correo@ejemplo.com"
                            value={formData.email}
                            onChange={(e) => handleDataChange('email', e.target.value)}
                            autoFocus
                        />
                        <button
                            className={styles.nextBtn}
                            disabled={!formData.email.includes('@')}
                            onClick={nextStep}
                        >
                            Siguiente
                        </button>
                    </div>
                );
            case 3:
                return (
                    <div className={styles.stepWrapper}>
                        <span className={styles.stepCounter}>Paso 4 de 5</span>
                        <h2 className={styles.questionText}>¿Cuándo es tu cumpleaños?</h2>
                        <div className={styles.birthdayGrid}>
                            <input
                                type="number"
                                min="1"
                                max="31"
                                className={styles.textInput}
                                placeholder="Día"
                                value={formData.diaCumple}
                                onChange={(e) => handleDataChange('diaCumple', e.target.value)}
                            />
                            <select
                                className={styles.selectInput}
                                value={formData.mesCumple}
                                onChange={(e) => handleDataChange('mesCumple', e.target.value)}
                            >
                                <option value="">Mes</option>
                                {MESES.map(mes => <option key={mes} value={mes}>{mes}</option>)}
                            </select>
                        </div>
                        <button
                            className={styles.nextBtn}
                            disabled={!formData.diaCumple || !formData.mesCumple}
                            onClick={nextStep}
                        >
                            Siguiente
                        </button>
                    </div>
                );
            case 4:
                return (
                    <div className={styles.stepWrapper}>
                        <span className={styles.stepCounter}>Paso 5 de 5</span>
                        <h2 className={styles.questionText}>¿Con quién sueles viajar más?</h2>
                        <div className={styles.optionsGrid}>
                            {[
                                { id: 'familia', label: 'En Familia', icon: '👨‍👩‍👧‍👦' },
                                { id: 'pareja', label: 'En Pareja', icon: '💑' },
                                { id: 'amigos', label: 'Amigos / Empresa', icon: '👥' }
                            ].map((opt) => (
                                <button
                                    key={opt.id}
                                    className={`${styles.optionBtn} ${formData.preferenciaViaje === opt.id ? styles.activeOption : ''}`}
                                    onClick={() => {
                                        handleDataChange('preferenciaViaje', opt.id);
                                        nextStep();
                                    }}
                                >
                                    <span className={styles.optionIcon}>{opt.icon}</span>
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                    </div>
                );
            default:
                return (
                    <div className={styles.successWrapper}>
                        <div className={styles.successIcon}>🎉</div>
                        <h2 className={styles.successTitle}>¡Registro Exitoso!</h2>
                        <p className={styles.successText}>
                            Gracias <strong>{formData.nombre}</strong>. Tus datos han sido registrados para el sorteo de la noche gratis.
                        </p>
                        <p className={styles.successNote}>
                            Te contactaremos vía WhatsApp o correo electrónico si resultas ganador. 🏨✨
                        </p>
                        <button
                            className={styles.finishBtn}
                            onClick={() => {
                                onClose();
                                setTimeout(resetForm, 300);
                            }}
                        >
                            Cerrar y volver
                        </button>
                    </div>
                );
        }
    };

    return (
        <AnimatePresence>
            <motion.div
                className={styles.overlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => {
                    onClose();
                    setTimeout(resetForm, 300);
                }}
            >
                <motion.div
                    className={styles.modal}
                    initial={{ scale: 0.9, opacity: 0, y: 30 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 30 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        className={styles.closeBtn}
                        onClick={() => {
                            onClose();
                            setTimeout(resetForm, 300);
                        }}
                    >
                        &times;
                    </button>

                    <div className={styles.progressContainer}>
                        <div
                            className={styles.progressBar}
                            style={{ width: `${(currentStep / 5) * 100}%` }}
                        />
                    </div>

                    <div className={styles.formContent}>
                        <AnimatePresence custom={direction} mode="wait">
                            <motion.div
                                key={currentStep}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                className={styles.stepWrapper}
                            >
                                {renderStep()}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
