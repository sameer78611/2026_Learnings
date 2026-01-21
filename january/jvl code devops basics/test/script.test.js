const request = require("supertest");
const { app, server } = require("../script");


describe('GET /', () => {
    afterAll(() => {
        server.close();
    })
    it("should return 200 status and the correct message", async() => {
        const response = await request(app)
            .get('/');
        expect(response.status).toBe(200)
        expect(response.body.message).toBe("App is working fine now.... Let's start the work")
            // .end((err, res) => {
            //     if (err) return done(err)
            //     return done();
            // })
    })
})