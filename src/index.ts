import { app } from './app/app';

const port = process.env.PORT || 3333;
const host = process.env.HOST_APP || 'http://localhost';

app.listen(port, () => console.log(`🌎️ Server is running on ${host}:${port}`));
