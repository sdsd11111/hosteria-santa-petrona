import { NextResponse } from 'next/server';
import { query, ensureTableExists } from '@/lib/db';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { nombre, whatsapp, email, diaCumple, mesCumple, preferenciaViaje, sugerencias } = body;

        // Ensure table exists (runs once per request, but CREATE TABLE IF NOT EXISTS is fast)
        await ensureTableExists();

        const insertQuery = `
            INSERT INTO participantes_sorteo 
            (nombre, whatsapp, email, dia_cumple, mes_cumple, preferencia_viaje, sugerencias) 
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;

        await query(insertQuery, [
            nombre,
            whatsapp,
            email,
            diaCumple,
            mesCumple,
            preferenciaViaje,
            sugerencias
        ]);

        return NextResponse.json({ success: true, message: 'Registro exitoso' });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { success: false, message: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}
