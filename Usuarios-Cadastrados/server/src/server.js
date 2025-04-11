import express from 'express'

import { PrismaClient } from '@prisma/client';
import cors from 'cors'

const prisma = new PrismaClient();

const app = express()
app.use(express.json())
const users = []

app.use(cors())
import { validateUserData } from './validate.js';

app.post('/usuarios', async (req, res) => {
  const { name, email, age } = req.body;

  const { isValid, errors, age: parsedAge } = validateUserData({ name, email, age });

  if (!isValid) {
    return res.status(400).json({ error: 'Dados inválidos', details: errors });
  }

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        age: parsedAge
      }
    });

    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar usuário', details: error.message });
  }
});



app.get('/usuarios', async (req, res) => {

  const users = await prisma.user.findMany()

  res.status(200).json(users)
})

app.put('/usuarios/:id', async (req, res) => {

  await prisma.user.update({

    where: {
      id: req.params.id
    },
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age
    }
  });

  res.status(201).json(user);

});


app.delete('/usuarios/:id', async (req, res) => {

  await prisma.user.delete({

    where: {
      id: req.params.id
    }
  });
  res.status(200).json({message: "Usuário excluído com sucesso"});

});


export { app, prisma }