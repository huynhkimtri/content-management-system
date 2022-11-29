// const request = require("supertest");
// const { setupStrapi, teardownStrapi } = require("../helpers/strapi");

// beforeAll(setupStrapi);
// afterAll(teardownStrapi);

// it("should return hello world", async () => {
//   await request(global.strapiServer) // app server is an instance of Class: http.Server
//     .get("/api/hello")
//     .expect(200) // Expect response http code 200
//     .then((data) => {
//       expect(data.text).toBe("Hello World!"); // expect the response text
//     });
// });
