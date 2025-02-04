// Model & Year: Rogue 2025
const baseUrl = 'https://nissanhub-stage.designory.com/suvs/rogue';

describe('Verify URLs for CTAs on Performance', () => {
  const link = './nissan-rogue/index.html';
  const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
  it(`should visit ${link} and verify internal URLs`, () => {
    // Verify the first page
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl);
    // Keep Exploring
      cy.get('[aria-label="Performance"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/rogue/nissan-rogue/index.html');
      cy.visit(fullUrl).get('[aria-label="Interior & Capacities"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/rogue/rogue-interior-capacities/index.html');
      cy.visit(fullUrl).get('[aria-label="Connectivity & Tech"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/rogue/rogue-connectivity-tech/index.html');
      cy.visit(fullUrl).get('[aria-label="Driver Assist & Safety Tech"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/rogue/rogue-driver-assist-safety/index.html');
    // Take the Next Step
      cy.visit(fullUrl);
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=rogue&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/interactivebrochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-rogue-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });
    });

describe('Verify URLs for CTAs on Interior & Capacities', () => {
  const link = './rogue-interior-capacities/index.html';
  const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
  it(`should visit ${link} and verify internal URLs`, () => {
    // Verify the first page
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl);
    // Keep Exploring
      cy.get('[aria-label="Performance"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/rogue/nissan-rogue/index.html');
      cy.visit(fullUrl).get('[aria-label="Interior & Capacities"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/rogue/rogue-interior-capacities/index.html');
      cy.visit(fullUrl).get('[aria-label="Connectivity & Tech"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/rogue/rogue-connectivity-tech/index.html');
      cy.visit(fullUrl).get('[aria-label="Driver Assist & Safety Tech"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/rogue/rogue-driver-assist-safety/index.html');
    // Take the Next Step
      cy.visit(fullUrl);
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=rogue&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/interactivebrochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-rogue-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });
    });

describe('Verify URLs for CTAs on Connectivity & Tech', () => {
  const link = './rogue-connectivity-tech/index.html';
  const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
  it(`should visit ${link} and verify internal URLs`, () => {
    // Verify the first page
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl);
    // Keep Exploring
      cy.get('[aria-label="Performance"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/rogue/nissan-rogue/index.html');
      cy.visit(fullUrl).get('[aria-label="Interior & Capacities"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/rogue/rogue-interior-capacities/index.html');
      cy.visit(fullUrl).get('[aria-label="Connectivity & Tech"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/rogue/rogue-connectivity-tech/index.html');
      cy.visit(fullUrl).get('[aria-label="Driver Assist & Safety Tech"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/rogue/rogue-driver-assist-safety/index.html');
    // Take the Next Step
      cy.visit(fullUrl);
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=rogue&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/interactivebrochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-rogue-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });
    });

describe('Verify URLs for CTAs on Driver Assist & Safety Tech', () => {
  const link = './rogue-driver-assist-safety/index.html';
  const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
  it(`should visit ${link} and verify internal URLs`, () => {
    // Verify the first page
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl);
    // Keep Exploring
      cy.get('[aria-label="Performance"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/rogue/nissan-rogue/index.html');
      cy.visit(fullUrl).get('[aria-label="Interior & Capacities"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/rogue/rogue-interior-capacities/index.html');
      cy.visit(fullUrl).get('[aria-label="Connectivity & Tech"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/rogue/rogue-connectivity-tech/index.html');
      cy.visit(fullUrl).get('[aria-label="Driver Assist & Safety Tech"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/rogue/rogue-driver-assist-safety/index.html');
    // Take the Next Step
      cy.visit(fullUrl);
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=rogue&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/interactivebrochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-rogue-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });
    });

describe('Verify URLs for CTAs on Trim Levels', () => {
  const link = './rogue-trim-levels/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the Trim Levels link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=rogue&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/interactivebrochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-rogue-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });      
    });

describe('Verify URLs for CTAs on Accessories', () => {
  const link = './rogue-accessories/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the Accessories link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=rogue&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/interactivebrochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-rogue-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });      
    });

describe('Verify URLs for CTAs on Shop', () => {
  const link = './rogue-shop/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the Shop link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=rogue&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/interactivebrochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-rogue-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });      
    });