import './globals.css';

export const metadata = {
    metadataBase: new URL('https://hosteria-santa-petrona.vercel.app'),
    title: 'Hostería Santa Petrona - Descanso Campestre a 15 Min de Quito | Piscinas Temperadas',
    description: 'Hostería Santa Petrona en Catzhuquí de Velasco, Quito. Piscina olímpica cubierta y temperada, entorno natural único. Desde $20 por persona. A solo 15 minutos del Condado Shopping.',
    keywords: 'hostería Quito, piscina temperada Quito, descanso campestre, Catzhuquí de Velasco, hospedaje natural Quito, microaventura Ecuador',
    icons: {
        icon: '/favicon.ico',
    },
    openGraph: {
        title: 'Hostería Santa Petrona - Descanso Campestre a 15 Min de Quito',
        description: 'Disfruta de nuestra piscina olímpica cubierta y temperada en un entorno natural único. Desde $20 por persona.',
        url: 'https://hosteria-santa-petrona.vercel.app',
        siteName: 'Hostería Santa Petrona',
        images: [
            {
                url: '/logo.jpg',
                width: 800,
                height: 800,
                alt: 'Logo Hostería Santa Petrona',
            },
        ],
        locale: 'es_EC',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Hostería Santa Petrona - Descanso Campestre a 15 Min de Quito',
        description: 'Disfruta de nuestra piscina olímpica cubierta y temperada en un entorno natural único. Desde $20 por persona.',
        images: ['/logo.jpg'],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <body>{children}</body>
        </html>
    );
}
