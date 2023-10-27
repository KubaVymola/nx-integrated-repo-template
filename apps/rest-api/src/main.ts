import express from 'express';
import { data } from '@libs/utils';
import { PrismaClient } from '@libs/prisma';

const prisma = new PrismaClient();
const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

console.log(process.env.DATABASE_URL);

app.get('/', async (req, res) => {
    await prisma.myModel.create({ data: { title: 'Ahoj' } });
    const myModel = await prisma.myModel.findFirst();
    console.log('created');
    res.send({ data, myModel });
});

app.listen(port, host, () => {
    console.log(`[ ready ] http://${host}:${port}`);
});
