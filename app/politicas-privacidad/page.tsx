import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PoliticasPage() {
    return (
        <main>
            <Header />
            <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px', maxWidth: '800px' }}>
                <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', color: '#5C4033', marginBottom: '1.5rem' }}>
                    Políticas de Privacidad
                </h1>

                <section style={{ marginBottom: '2rem', lineHeight: '1.8', color: '#4A4A4A' }}>
                    <p style={{ marginBottom: '1rem' }}>
                        En Hostería Santa Petrona, valoramos su privacidad y nos comprometemos a proteger su información personal. Esta política detalla cómo manejamos sus datos.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: '#D4A574', marginTop: '2rem', marginBottom: '1rem' }}>
                        1. Información que Recopilamos
                    </h2>
                    <p style={{ marginBottom: '1rem' }}>
                        Podemos recopilar información personal que usted nos proporciona directamente, como su nombre, dirección de correo electrónico, número de teléfono y detalles de pago al realizar una reserva o consulta.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: '#D4A574', marginTop: '2rem', marginBottom: '1rem' }}>
                        2. Uso de la Información
                    </h2>
                    <p style={{ marginBottom: '1rem' }}>
                        Utilizamos su información para:
                    </p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                        <li>Procesar y confirmar sus reservas.</li>
                        <li>Responder a sus consultas y solicitudes.</li>
                        <li>Enviarle actualizaciones y ofertas especiales (si ha optado por recibirlas).</li>
                    </ul>

                    <h2 style={{ fontSize: '1.5rem', color: '#D4A574', marginTop: '2rem', marginBottom: '1rem' }}>
                        3. Protección de Datos
                    </h2>
                    <p style={{ marginBottom: '1rem' }}>
                        Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales contra el acceso no autorizado, la pérdida o la alteración. Sus datos nunca serán vendidos a terceros.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: '#D4A574', marginTop: '2rem', marginBottom: '1rem' }}>
                        4. Contacto
                    </h2>
                    <p style={{ marginBottom: '1rem' }}>
                        Si tiene preguntas sobre nuestra política de privacidad, puede contactarnos a través de nuestros canales oficiales de WhatsApp o correo electrónico.
                    </p>
                </section>
            </div>
            <Footer />
        </main>
    );
}
