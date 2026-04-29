// cPanel-friendly Next.js entrypoint
// Configure the Node.js app to run `node server.js`

const http = require('http');
const next = require('next');

function isProbablyIp(host) {
  if (!host) return false;
  // Very small heuristic: dotted IPv4 or contains ':' for IPv6
  return /^\d{1,3}(\.\d{1,3}){3}$/.test(host) || host.includes(':');
}

const port = parseInt(process.env.PORT, 10) || 3000;

// cPanel/Passenger often injects HOSTNAME; on some hosts it may be a public IP.
// Binding a Node app to a public IP + fixed port frequently conflicts with an already-running instance.
const preferred =
  process.env.LISTEN_HOST ||
  process.env.BIND_HOST ||
  process.env.HOST ||
  process.env.HOSTNAME;

let hostname = '127.0.0.1';
if (preferred && !isProbablyIp(preferred)) {
  hostname = preferred;
} else if (preferred && isProbablyIp(preferred)) {
  // If cPanel provided an IP as "hostname", prefer loopback unless explicitly overridden.
  hostname = process.env.LISTEN_HOST || process.env.BIND_HOST || '127.0.0.1';
}

const app = next({ dev: false, hostname, port });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    http
      .createServer((req, res) => handle(req, res))
      .listen(port, hostname, () => {
        console.log(`> Ready on http://${hostname}:${port}`);
      });
  })
  .catch((err) => {
    console.error('Server failed to start', err);
    process.exit(1);
  });
