'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';

// Fix for default marker icons in Leaflet with Next.js
function FixLeafletIcon() {
    useEffect(() => {
        // @ts-ignore
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
            iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        });
    }, []);
    return null;
}

// Coordenadas de Hostería Santa Petrona
const position: [number, number] = [-0.0911586, -78.5375253];

export default function Map() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Icono personalizado con el logo de la Hostería (más grande para un look premium)
    const customIcon = typeof window !== 'undefined' ? L.divIcon({
        className: 'custom-marker',
        html: `
        <div style="display: flex; flex-direction: column; align-items: center; filter: drop-shadow(0 10px 15px rgba(0,0,0,0.3));">
          <div style="width: 70px; height: 70px; background: white; border-radius: 50%; padding: 6px; border: 4px solid #d4a574; display: flex; align-items: center; justify-content: center; overflow: hidden;">
            <img src="/logo.png" style="width: 100%; height: 100%; object-fit: contain; border-radius: 50%;" alt="Logo" />
          </div>
          <div style="width: 0; height: 0; border-left: 10px solid transparent; border-right: 10px solid transparent; border-top: 15px solid #d4a574; margin-top: -3px;"></div>
        </div>
      `,
        iconSize: [80, 95],
        iconAnchor: [40, 95],
    }) : undefined;

    if (!isMounted) {
        return <div style={{ height: '600px', width: '100%', background: '#f8f9fa' }}></div>;
    }

    return (
        <div className="w-full h-full min-h-[550px] relative z-0">
            <FixLeafletIcon />
            <MapContainer
                center={position}
                zoom={17}
                scrollWheelZoom={false}
                style={{ height: '600px', width: '100%' }}
            >
                <TileLayer
                    url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                    attribution='&copy; Google Maps'
                />
                <Marker position={position} icon={customIcon}>
                    <Popup>
                        <div style={{ textAlign: 'center' }}>
                            <strong style={{ color: '#5d4037', fontSize: '1.1rem' }}>Hostería Santa Petrona</strong><br />
                            <span style={{ color: '#757575' }}>Barrio Tenerías, Catzhuquí de Velasco</span><br />
                            <span style={{ color: '#757575' }}>Quito, Ecuador</span>
                        </div>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}
