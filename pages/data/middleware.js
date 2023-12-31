// middleware.js
import { promises as fs } from 'fs';

const trackAccess = async (req, res, next) => {
  const { method, url, ip } = req;
  const timestamp = new Date().toISOString();
  const logEntry = `${timestamp} - ${method} ${url} - IP: ${ip}\n`;

  // Menyimpan log ke file (Anda dapat menyesuaikan ini dengan penyimpanan yang sesuai)
  try {
    await fs.appendFile('access.log', logEntry);
  } catch (err) {
    console.error('Gagal menyimpan log:', err);
  }

  next();
};

export default trackAccess;
