// Model & Year: Pathfinder 2025
const baseUrl = 'https://nissanhub-stage.designory.com/suvs/pathfinder';

describe('Verify URLs for CTAs on Seating & Cargo', () => {
  const link = './nissan-pathfinder/index.html';
  const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
  it(`should visit ${link} and verify internal URLs`, () => {
    // Verify the first page
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl);
    // Keep Exploring
      cy.get('[aria-label="Seating & Cargo"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/pathfinder/nissan-pathfinder/index.html');
      cy.visit(fullUrl).get('[aria-label="Connectivity"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/pathfinder/pathfinder-connectivity/index.html');
      cy.visit(fullUrl).get('[aria-label="Capability"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/pathfinder/pathfinder-capability/index.html');
      cy.visit(fullUrl).get('[aria-label="Driver Assist & Safety Tech"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/pathfinder/pathfinder-driver-assist/index.html');
    // Take the Next Step
      cy.visit(fullUrl);
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=pathfinder&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-pathfinder-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });
    });

describe('Verify URLs for CTAs on Connectivity', () => {
  const link = './pathfinder-connectivity/index.html';
  const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
  it(`should visit ${link} and verify internal URLs`, () => {
    // Verify the first page
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl);
    // Keep Exploring
      cy.get('[aria-label="Seating & Cargo"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/pathfinder/nissan-pathfinder/index.html');
      cy.visit(fullUrl).get('[aria-label="Connectivity"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/pathfinder/pathfinder-connectivity/index.html');
      cy.visit(fullUrl).get('[aria-label="Capability"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/pathfinder/pathfinder-capability/index.html');
      cy.visit(fullUrl).get('[aria-label="Driver Assist & Safety Tech"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/pathfinder/pathfinder-driver-assist/index.html');
    // Take the Next Step
      cy.visit(fullUrl);
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=pathfinder&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-pathfinder-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });
    });

describe('Verify URLs for CTAs on Capability', () => {
  const link = './pathfinder-capability/index.html';
  const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
  it(`should visit ${link} and verify internal URLs`, () => {
    // Verify the first page
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl);
    // Keep Exploring
      cy.get('[aria-label="Seating & Cargo"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/pathfinder/nissan-pathfinder/index.html');
      cy.visit(fullUrl).get('[aria-label="Connectivity"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/pathfinder/pathfinder-connectivity/index.html');
      cy.visit(fullUrl).get('[aria-label="Capability"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/pathfinder/pathfinder-capability/index.html');
      cy.visit(fullUrl).get('[aria-label="Driver Assist & Safety Tech"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/pathfinder/pathfinder-driver-assist/index.html');
    // Take the Next Step
      cy.visit(fullUrl);
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=pathfinder&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-pathfinder-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });
    });

describe('Verify URLs for CTAs on Driver Assist & Safety Tech', () => {
  const link = './pathfinder-driver-assist/index.html';
  const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
  it(`should visit ${link} and verify internal URLs`, () => {
    // Verify the first page
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl);
    // Keep Exploring
      cy.get('[aria-label="Seating & Cargo"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/pathfinder/nissan-pathfinder/index.html');
      cy.visit(fullUrl).get('[aria-label="Connectivity"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/pathfinder/pathfinder-connectivity/index.html');
      cy.visit(fullUrl).get('[aria-label="Capability"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/pathfinder/pathfinder-capability/index.html');
      cy.visit(fullUrl).get('[aria-label="Driver Assist & Safety Tech"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/pathfinder/pathfinder-driver-assist/index.html');
    // Take the Next Step
      cy.visit(fullUrl);
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=pathfinder&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-pathfinder-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });
    });

describe('Verify URLs for CTAs on Trim Levels', () => {
  const link = './pathfinder-trim-levels/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the Trim Levels link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=pathfinder&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-pathfinder-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });      
    });

describe('Verify URLs for CTAs on Accessories', () => {
  const link = './pathfinder-accessories/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the Accessories link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=pathfinder&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-pathfinder-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });      
    });

describe('Verify URLs for CTAs on Shop', () => {
  const link = './pathfinder-shop/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the Shop link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=pathfinder&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-pathfinder-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });      
    });