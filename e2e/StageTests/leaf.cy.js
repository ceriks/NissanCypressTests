// Model & Year: Leaf 2025
const baseUrl = 'https://nissanhub-stage.designory.com/electric-hybrid-cars/leaf';

describe('Verify URLs for CTAs on Electric Driving', () => {
  const link = './nissan-leaf/index.html';
  const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
  it(`should visit ${link} and verify internal URLs`, () => {
    // Verify the first page
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl);
    // Keep Exploring
      cy.get('[aria-label="Electric Driving"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/electric-hybrid-cars/leaf/nissan-leaf/index.html');
      cy.visit(fullUrl).get('[aria-label="Driver Assist & Safety Tech"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/electric-hybrid-cars/leaf/leaf-driver-assist-safety/index.html');
      cy.visit(fullUrl).get('[aria-label="Charging & Ownership"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/electric-hybrid-cars/leaf/leaf-charging-ownership/index.html');
      cy.visit(fullUrl).get('[aria-label="Connectivity & Interior"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/electric-hybrid-cars/leaf/leaf-connectivity-interior/index.html');
    // Take the Next Step
      cy.visit(fullUrl);
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=nissan-leaf&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-nissan-leaf-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });
    });

describe('Verify URLs for CTAs on Driver Assist & Safety Tech', () => {
  const link = './leaf-driver-assist-safety/index.html';
  const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
  it(`should visit ${link} and verify internal URLs`, () => {
    // Verify the first page
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl);
    // Keep Exploring
      cy.get('[aria-label="Electric Driving"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/electric-hybrid-cars/leaf/nissan-leaf/index.html');
      cy.visit(fullUrl).get('[aria-label="Driver Assist & Safety Tech"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/electric-hybrid-cars/leaf/leaf-driver-assist-safety/index.html');
      cy.visit(fullUrl).get('[aria-label="Charging & Ownership"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/electric-hybrid-cars/leaf/leaf-charging-ownership/index.html');
      cy.visit(fullUrl).get('[aria-label="Connectivity & Interior"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/electric-hybrid-cars/leaf/leaf-connectivity-interior/index.html');
    // Take the Next Step
      cy.visit(fullUrl);
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=nissan-leaf&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-nissan-leaf-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });
    });

describe('Verify URLs for CTAs on Charging & Ownership', () => {
  const link = './leaf-charging-ownership/index.html';
  const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
  it(`should visit ${link} and verify internal URLs`, () => {
    // Verify the first page
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl);
    // Keep Exploring
      cy.get('[aria-label="Electric Driving"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/electric-hybrid-cars/leaf/nissan-leaf/index.html');
      cy.visit(fullUrl).get('[aria-label="Driver Assist & Safety Tech"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/electric-hybrid-cars/leaf/leaf-driver-assist-safety/index.html');
      cy.visit(fullUrl).get('[aria-label="Charging & Ownership"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/electric-hybrid-cars/leaf/leaf-charging-ownership/index.html');
      cy.visit(fullUrl).get('[aria-label="Connectivity & Interior"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/electric-hybrid-cars/leaf/leaf-connectivity-interior/index.html');
    // Take the Next Step
      cy.visit(fullUrl);
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=nissan-leaf&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-nissan-leaf-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });
    });

describe('Verify URLs for CTAs on Connectivity & Interior', () => {
  const link = './leaf-connectivity-interior/index.html';
  const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
  it(`should visit ${link} and verify internal URLs`, () => {
    // Verify the first page
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl);
    // Keep Exploring
      cy.get('[aria-label="Electric Driving"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/electric-hybrid-cars/leaf/nissan-leaf/index.html');
      cy.visit(fullUrl).get('[aria-label="Driver Assist & Safety Tech"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/electric-hybrid-cars/leaf/leaf-driver-assist-safety/index.html');
      cy.visit(fullUrl).get('[aria-label="Charging & Ownership"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/electric-hybrid-cars/leaf/leaf-charging-ownership/index.html');
      cy.visit(fullUrl).get('[aria-label="Connectivity & Interior"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/electric-hybrid-cars/leaf/leaf-connectivity-interior/index.html');
    // Take the Next Step
      cy.visit(fullUrl);
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=nissan-leaf&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-nissan-leaf-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });
    });

describe('Verify URLs for CTAs on Trim Levels', () => {
  const link = './leaf-trims/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the Trim Levels link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=nissan-leaf&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-nissan-leaf-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
  });
  });

describe('Verify URLs for CTAs on Accessories', () => {
  const link = './leaf-accessories/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the Accessories link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=nissan-leaf&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-nissan-leaf-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
  });
  });

describe('Verify URLs for CTAs on Shop', () => {
  const link = './leaf-shop/index.html?nav=top'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the Shop link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=nissan-leaf&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-nissan-leaf-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
  });
  });