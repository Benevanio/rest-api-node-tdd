const request = require("supertest");
const app = require("../src/app");

test("Deve listar usuários", () => {
    return request(app)
        .get("/users")
        .expect(200)
        .then((response) => {
            expect(response.body).toEqual([
                { id: 1, name: "John Doe" },
                { id: 2, name: "Jane Doe" }
            ]);
        });
});

test("Deve inserir um usuário", () => {
    return request(app)
        .post("/users")
        .send({ name: "Alice" })
        .expect(201)
        .then((response) => {
            expect(response.body).toEqual({
                id: expect.any(Number),
                name: "Alice"
            });
        });
});