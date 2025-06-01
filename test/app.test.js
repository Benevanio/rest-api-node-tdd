const request = require("supertest");
const app = require("../src/app");


test("Deve responder na raiz", () => {
    return request(app)
        .get("/")
        .expect(200)
        .then((response) => {
            expect(response.text).toBe("Hello World!");
        });
});