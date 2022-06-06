# Cypress Architecture
![image info](arch.png)

# Random Notes

- Aliased routers can be used in the same test case, probably couldn’t be used outside it (I got errors trying to do that).

- Tip: you can inspect the full request cycle object by logging it to the console
`cy.wait('@new-user').then(console.log)`.

- Within Cypress, you have the ability to choose whether to stub responses or allow them to actually hit your server. You can also mix and match within the same test by choosing to stub certain requests, while allowing others to hit your server.
  
## Folder Structure
- **Fixtures** can be used for static data files, e.g. supplying an interception with a fixture file as a static response instead of hard coding data inside the tests. Use `cy.fixture`.
- **Integration** folder is for our tests.
- **Plugins** is for configurations like browser customization.
- **Support** folder is for utility functions, modules, and wrappers. You can use them without explicit import because Cypress call them first when running the tests, so they are accessible for all specs files.

## Functions

### `intercept`
#### Some use cases I can think of
- `visit` a production URL, `intercept` the response with matchers, give the interception an alias, and then use `wait` to log response data
- `visit` a production URL that calls specific method, `GET` something, `intercept` the response with matcher that point to that `GET` method, give the interception an alias, and then use `wait` with an assertion that check e.g. body array length.
- `visit` a URL, `intercept` the response with matchers that meets the need, and add a static response object inside the `intercept` command, so whenever the URL is called, the same response is being returned.

- Some functions can only be used inside `intercept`, like `reply` and `continue`.
