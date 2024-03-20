// realizando importações  e protas para o servidor 

const app = require("./app")
const port = process.env.PORT || 5000

app.listen(5000, () => {
  console.log(`Server listening on port ${port}`)
})

// server.mjs

// import { createServer } from 'node:http';

// const server = createServer((_req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World!\n');
// });

// starts a simple http server locally on port 3000
// server.listen(3000, '127.0.0.1', () => {
//   console.log('Listening on 127.0.0.1:3000');
// });

// run with `node server.mjs`
