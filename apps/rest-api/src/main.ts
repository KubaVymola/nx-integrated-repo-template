import express from 'express';
import { data } from '@libs/utils';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/', (req, res) => {
    res.send(data);
});

app.listen(port, host, () => {
    console.log(`[ ready ] http://${host}:${port}`);
});
