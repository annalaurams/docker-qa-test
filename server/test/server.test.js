import request from 'supertest'
import { app, prisma } from '../src/server.js'
import{ nameMock, emailMock, ageMock } from './mocks.js'

describe('Testando API de usuários', () => {
  afterAll(async () => {
    await prisma.user.deleteMany()
    await prisma.$disconnect()
  })

  it('deve criar um novo usuário', async () => {
    const response = await request(app).post('/usuarios').send({
      name: nameMock,
      email: emailMock,
      age: ageMock,
    })

    expect(response.statusCode).toBe(201)
    expect(response.body).toHaveProperty('id')
    expect(response.body.name).toBe(nameMock)
  })

  it('deve retornar lista de usuários', async () => {
    const response = await request(app).get('/usuarios')
    expect(response.statusCode).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)
  })
})
