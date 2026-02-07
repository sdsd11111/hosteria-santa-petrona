import Script from 'next/script';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import './globals.css';

export const metadata = {
    metadataBase: new URL('http://hosteriasantapetrona.com'),
    title: 'Hostería Santa Petrona - El mejor lugar donde hospedarse en Quito | Piscinas',
    description: '¿Buscas hosterías en Quito? Santa Petrona es tu refugio campestre en Catzuqui de Velasco. Habitaciones desde $20, piscina olímpica temperada y naturaleza a solo 15 min del Condado Shopping.',
    keywords: 'hostería en Quito, donde hospedarme en Quito, hospedaje en el norte de Quito, hosterías con piscina temperada, habitaciones baratas Quito, turismo campestre Quito, Santa Petrona Quito',
    alternates: {
        canonical: '/',
    },
    verification: {
        google: '6YdnTt3sUve1GTKyOxWnEtf0uHa1W69OqOI-6yt1uhQ',
    },
    icons: {
        icon: '/favicon.png',
    },
    openGraph: {
        title: 'Hostería Santa Petrona - Hostería en Quito con Piscina Temperada',
        description: 'Disfruta de la mejor hostería en el norte de Quito. Piscina olímpica, cabalgatas y confort desde $20 por persona.',
        url: 'http://hosteriasantapetrona.com',
        siteName: 'Hostería Santa Petrona',
        images: [
            {
                url: '/logo.png',
                width: 800,
                height: 800,
                alt: 'Logo Hostería Santa Petrona - Hostería en Quito',
            },
        ],
        locale: 'es_EC',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Hostería Santa Petrona - Tu mejor opción de hospedaje en Quito',
        description: 'Piscina temperada, áreas verdes y habitaciones confortables en el norte de Quito.',
        images: ['/logo.png'],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <head>
                <Script
                    id="hotel-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify([
                            {
                                "@context": "https://schema.org",
                                "@type": "Hotel",
                                "@id": "http://hosteriasantapetrona.com/#hotel",
                                "name": "Hostería Santa Petrona",
                                "description": "La mejor hostería en el norte de Quito con piscina olímpica temperada, áreas verdes y cabalgatas.",
                                "image": "http://hosteriasantapetrona.com/logo.png",
                                "logo": "http://hosteriasantapetrona.com/logo.png",
                                "url": "http://hosteriasantapetrona.com",
                                "telephone": "+593989974420",
                                "priceRange": "$20 - $60",
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress": "Barrio Tenerías, Antigua Hacienda Catzuqui de Velasco",
                                    "addressLocality": "Quito",
                                    "addressRegion": "Pichincha",
                                    "postalCode": "170150",
                                    "addressCountry": "EC"
                                },
                                "geo": {
                                    "@type": "GeoCoordinates",
                                    "latitude": -0.09115865239106093,
                                    "longitude": -78.53752538965874
                                },
                                "aggregateRating": {
                                    "@type": "AggregateRating",
                                    "ratingValue": "4.2",
                                    "reviewCount": "72"
                                },
                                "review": [
                                    {
                                        "@type": "Review",
                                        "author": { "@type": "Person", "name": "Elena G." },
                                        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                                        "reviewBody": "Pasamos dos noches ahí, el personal fue muy amable y nos atendieron súper bien. El lugar es grande, rodeado de montañas."
                                    },
                                    {
                                        "@type": "Review",
                                        "author": { "@type": "Person", "name": "Carlos Villacís" },
                                        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                                        "reviewBody": "El lugar perfecto para ir con niños. La piscina olímpica cubierta es un éxito total, agua siempre temperada."
                                    }
                                ],
                                "amenityFeature": [
                                    { "@type": "LocationFeatureSpecification", "name": "Piscina olímpica temperada", "value": true },
                                    { "@type": "LocationFeatureSpecification", "name": "Cabalgatas", "value": true },
                                    { "@type": "LocationFeatureSpecification", "name": "Senderismo", "value": true },
                                    { "@type": "LocationFeatureSpecification", "name": "Wi-Fi gratis", "value": true }
                                ]
                            },
                            {
                                "@context": "https://schema.org",
                                "@type": "Organization",
                                "name": "Hostería Santa Petrona",
                                "url": "http://hosteriasantapetrona.com",
                                "logo": "http://hosteriasantapetrona.com/logo.png",
                                "sameAs": [
                                    "https://www.facebook.com/profile.php?id=100063551562356&locale=es_LA",
                                    "https://www.instagram.com/hosteria_santa_petrona/",
                                    "https://www.tiktok.com/@hosteria_santa_petrona"
                                ]
                            }
                        ])
                    }}
                />
            </head>
            <body>
                {children}
                <FloatingWhatsApp />
            </body>
        </html>
    );
}
