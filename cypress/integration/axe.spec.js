/// <reference types="cypress" />

const viewports = ['macbook-13', 'ipad-2', 'iphone-x'];

describe('Axe Demo', () => {
  viewports.forEach((viewport) => {
    it(`should catch accessibility issues on the entire page - ${viewport}`, () => {
      cy.viewport(viewport);
      cy.visit('http://opencart.abstracta.us/');
      cy.injectAxe();

      // By default, this will test the entire page
      cy.checkA11y();

      // If you want to exclude certain elements
      // cy.checkA11y({ exclude: ['#menu'] });

      // If you only want to check a specific element
      // cy.checkA11y('#content');

      // If you want to disable some rules
      // cy.checkA11y(
      //   {},
      //   {
      //     rules: {
      //       'page-has-heading-one': { enabled: false },
      //     },
      //   }
      // );
    });
  });
});
