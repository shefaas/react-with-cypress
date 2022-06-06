describe("Stubbing a request and logging the intercepted request data", () => {
  it("stubbing a request", () => {
    cy.visit("https://jsonplaceholder.typicode.com/");

    cy.intercept(
      {
        path: "/posts",
      },
      () => {}
    ).as("posts");

    cy.contains("/posts").click();

    cy.wait("@posts").then((interception) => {
      // logging the whole interception
      cy.log(JSON.stringify(interception));

      // accessing response body and logging specific info
      cy.log(JSON.stringify(interception.response.body.length));

      // assertion on body length
      expect(interception.response.body).to.have.length(100);
    });
  });

  it("Mocking with intercept with static response", () => {
    cy.visit("https://jsonplaceholder.typicode.com/");

    cy.intercept(
      {
        path: "/posts",
      },
      (req) => {
        req.reply({
          body: "hello world!",
          statusCode: 201,
        });
      }
    ).as("posts");

    cy.contains("/posts").click();

    cy.wait("@posts").then((interception) => {
      // logging the whole interception
      cy.log(JSON.stringify(interception));
    });
  });

  it.only("Mocking static response with dynamic fixture", () => {
    cy.visit("https://jsonplaceholder.typicode.com/");

    cy.intercept( { path: "/posts", }, { fixture: "example.json" }
    ).as("posts");

    cy.contains("/posts").click();
  });
});
