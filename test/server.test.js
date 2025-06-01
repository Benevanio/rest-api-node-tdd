const supertest = require("supertest");
test("Deve esta na porta", () => {
    const app = require("../src/index");
    return supertest(app)
        .get("/")
        .expect(200)
        .then((response) => {
        expect(response.text).toBe("Hello World!");
        });
});