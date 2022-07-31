/// <reference types="cypress" />

describe('Axe Demo', () => {
  it('should catch accessibility issues on the entire page', () => {
    cy.visit('https://todomvc.com/examples/react/#/');
    cy.injectAxe();

    // By default, this will test the entire page
    cy.checkA11y();

    // If you want to exclude certain elements
    // cy.checkA11y({ exclude: ['.new-todo'] });

    // If you only want to check a specific element
    // cy.checkA11y('.new-todo');

    // If you want to disable some rules
    // cy.checkA11y(null, {
    //   rules: {
    //     'color-contrast': { enabled: false },
    //   },
    // });
  });
});
