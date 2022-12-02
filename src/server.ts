import express, { Request, Response } from 'express';
import cors from 'cors';
import prismaClient from './prisma';

const app = express();
app.use(express.json())

app.use(cors());

app.post('/cadastrar', async (req: Request, res: Response) => {

    const { nomeUser, senha, perfilUser } = req.body;

    execute({nomeUser, senha, perfilUser});

    async function execute({nomeUser, senha, perfilUser}: userRequest) {

        const user = await prismaClient.user.create({
            data: {
                nomeUser: nomeUser,
                senha: senha,
                perfilUser: perfilUser,
            }
        });

        return res.status(200).json(user);
    }
})

app.get('/all', async (req: Request, res: Response) => {

    const users = await prismaClient.user.findMany();

    return res.status(200).json(users);
})

interface userRequest {
    nomeUser: string;
    senha: string;
    perfilUser: string;
}

app.listen(3333);