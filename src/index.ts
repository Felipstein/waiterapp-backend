import mongoose from 'mongoose';
import { server } from './app';

const port = process.env.PORT || 3333;
const host = process.env.HOST_APP || 'http://localhost';
const dbURI = process.env.DB_CONNECT;

if (dbURI) {

  mongoose.connect(dbURI)
    .then(() => {
      console.log('🔌 MongoDB connected');
      server.listen(port, () => console.log(`🌎️ Server is running on ${host}:${port}`));
    })
    .catch((err: Error) => {
      console.log(`${err.name}: Falha ao conectar com MongoDB: ${err.message}`);
      console.error(err.stack);
    });

} else {
  console.error('Não há conexão com banco de dados definido.');
}

