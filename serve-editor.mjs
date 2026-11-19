import http from 'node:http';
import fs from 'node:fs/promises';

const port = Number(process.env.PORT || 8787);
const server = http.createServer(async (req, res) => {
  if (req.url === '/favicon.ico') { res.writeHead(204); res.end(); return; }
  if (req.url !== '/' && req.url !== '/map-editor.html') { res.writeHead(404); res.end('Not found'); return; }
  try {
    const html = await fs.readFile(new URL('./map-editor.html', import.meta.url));
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
    res.end(html);
  } catch { res.writeHead(500); res.end('Could not read map-editor.html'); }
});
server.listen(port, '127.0.0.1', () => console.log(`Train Board Studio: http://127.0.0.1:${port}`));
