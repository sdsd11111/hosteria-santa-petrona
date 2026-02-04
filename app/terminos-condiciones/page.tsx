import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TerminosPage() {
    return (
        <main>
            <Header />
            <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px', maxWidth: '800px' }}>
                <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', color: '#5C4033', marginBottom: '1.5rem' }}>
                    Términos y Condiciones
                </h1>

                <section style={{ marginBottom: '2rem', lineHeight: '1.8', color: '#4A4A4A' }}>
                    <p style={{ marginBottom: '1rem' }}>
                        Bienvenido a Hostería Santa Petrona. Al utilizar nuestros servicios y sitio web, usted acepta cumplir con los siguientes términos y condiciones.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: '#D4A574', marginTop: '2rem', marginBottom: '1rem' }}>
                        1. Aceptación de Uso de Datos Personales
                    </h2>
                    <p style={{ marginBottom: '1rem', backgroundColor: '#F9F5F0', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #D4A574' }}>
                        <strong>Cláusula Importante:</strong> Al completar cualquier formulario en nuestro sitio web (incluyendo reservas, contacto o sorteos), usted <strong>acepta y autoriza expresamente</strong> la recolección, almacenamiento y uso de sus datos personales en nuestra base de datos segura.
                    </p>
                    <p style={{ marginBottom: '1rem' }}>
                        Esta información será utilizada exclusivamente para:
                    </p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                        <li>Gestionar sus reservas y estadía.</li>
                        <li>Enviarle información sobre promociones, eventos y confirmaciones.</li>
                        <li>Mejorar nuestros servicios y atención al cliente.</li>
                    </ul>

                    <h2 style={{ fontSize: '1.5rem', color: '#D4A574', marginTop: '2rem', marginBottom: '1rem' }}>
                        2. Políticas de Reserva
                    </h2>
                    <p style={{ marginBottom: '1rem' }}>
                        Todas las reservas están sujetas a disponibilidad. Nos reservamos el derecho de solicitar un depósito previo para garantizar su alojamiento, especialmente en temporadas altas.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: '#D4A574', marginTop: '2rem', marginBottom: '1rem' }}>
                        3. Uso de las Instalaciones
                    </h2>
                    <p style={{ marginBottom: '1rem' }}>
                        El uso de la piscina, áreas húmedas y zonas deportivas debe realizarse respetando las normas de seguridad y convivencia de la Hostería. Nos reservamos el derecho de admisión en caso de comportamiento inadecuado.
                    </p>
                </section>
            </div>
            <Footer />
        </main>
    );
}
