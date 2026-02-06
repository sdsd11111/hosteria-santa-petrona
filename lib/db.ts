import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT || '3306'),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export async function query(sql: string, params?: any[]) {
    try {
        const [results] = await pool.execute(sql, params);
        return results;
    } catch (error) {
        console.error('Database query error:', error);
        throw error;
    }
}

// Function to ensure the table exists
export async function ensureTableExists() {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS participantes_sorteo (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nombre VARCHAR(255) NOT NULL,
            whatsapp VARCHAR(20) NOT NULL,
            email VARCHAR(255) NOT NULL,
            dia_cumple VARCHAR(10),
            mes_cumple VARCHAR(20),
            preferencia_viaje VARCHAR(50),
            sugerencias TEXT,
            fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `;
    await query(createTableQuery);
}
