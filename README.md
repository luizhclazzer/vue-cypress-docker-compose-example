# vue-cypress-docker-compose-example

## Client project setup
```
docker-compose build client
```

### Compiles and hot-reloads for development
```
docker-compose up -d client
```

### Run your end-to-end tests (headless mode)
```
docker-compose up --exit-code-from cypress
```

### Run your end-to-end tests through yarn
```
cd client
yarn cypress run
```

### Run Cypress in headless mode for a specific file
```
cd client
yarn cypress run --spec "cypress/e2e/3-client-tests/root_url.cy.js"
```

### Lints and fixes files
```
yarn lint
```

### See too
[Vuejs Configuration Reference](https://cli.vuejs.org/config/)\
[Vuejs cli-plugin-e2e-cypress](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-cypress/)\
[Run Cypress with a single docker command](https://www.cypress.io/blog/2019/05/02/run-cypress-with-a-single-docker-command/)\
[Cypress docker images](https://github.com/cypress-io/cypress-docker-images)\
[Cypress example docker-compose](https://github.com/cypress-io/cypress-example-docker-compose)
