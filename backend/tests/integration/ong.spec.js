const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('ong', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
       await connection.migrate.latest();
    });

    afterAll(async () => {
       await connection.destroy();
    })

    it('should be albe to create a new ONG', async () => {
        const res = await request(app)
        .post('/ongs')
        .send({
            name: "APAD2",
            email : "contacto@hotmail.com",
            whatsapp : "1234567890",
            city : "Lisboa",
            uf : "PT"
        })
        expect(res.body).toHaveProperty('id');
        expect(res.body.id).toHaveLength(8); 
    });
})