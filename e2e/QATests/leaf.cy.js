// Model & Year: Leaf 2025
const baseUrl = 'https://nissanhub-qa.designory.com/suvs/kicks';

describe('Verify URLs for CTAs on Capability & Performance', () => {
  const link = '/nissan-kicks/index.html';
  const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
  it(`should visit ${link} and verify internal URLs`, () => {
    // Verify the first page
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl);
    // Keep Exploring
      cy.get('[aria-label="Capability & Performance"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/suvs/kicks/nissan-kicks/index.html');
      cy.visit(fullUrl).get('[aria-label="Interior & Cargo"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/suvs/kicks/kicks-interior-cargo/index.html');
      cy.visit(fullUrl).get('[aria-label="Technology"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/suvs/kicks/kicks-technology/index.html');
      cy.visit(fullUrl).get('[aria-label="Driver Assist"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/suvs/kicks/kicks-driver-assist/index.html');
    // Take the Next Step
      cy.visit(fullUrl);
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=kicks');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/interactivebrochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-kicks-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });
    });

describe('Verify URLs for CTAs on Interior & Cargo', () => {
  const link = '/kicks-interior-cargo/index.html';
  const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
  it(`should visit ${link} and verify internal URLs`, () => {
    // Verify the second page
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl);
    // Keep Exploring
      cy.get('[aria-label="Capability & Performance"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/suvs/kicks/nissan-kicks/index.html');
      cy.visit(fullUrl).get('[aria-label="Interior & Cargo"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/suvs/kicks/kicks-interior-cargo/index.html');
      cy.visit(fullUrl).get('[aria-label="Technology"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/suvs/kicks/kicks-technology/index.html');
      cy.visit(fullUrl).get('[aria-label="Driver Assist"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/suvs/kicks/kicks-driver-assist/index.html');
    // Take the Next Step
      cy.visit(fullUrl);
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=kicks');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/interactivebrochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-kicks-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });
    });

describe('Verify URLs for CTAs on Technology', () => {
  const link = '/kicks-technology/index.html';
  const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
  it(`should visit ${link} and verify internal URLs`, () => {
    // Verify the third page
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl);
    // Keep Exploring
      cy.get('[aria-label="Capability & Performance"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/suvs/kicks/nissan-kicks/index.html');
      cy.visit(fullUrl).get('[aria-label="Interior & Cargo"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/suvs/kicks/kicks-interior-cargo/index.html');
      cy.visit(fullUrl).get('[aria-label="Technology"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/suvs/kicks/kicks-technology/index.html');
      cy.visit(fullUrl).get('[aria-label="Driver Assist"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/suvs/kicks/kicks-driver-assist/index.html');
    // Take the Next Step
      cy.visit(fullUrl);
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=kicks');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/interactivebrochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-kicks-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });
    });

describe('Verify URLs for CTAs on Driver Assist', () => {
  const link = '/kicks-driver-assist/index.html';
  const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
  it(`should visit ${link} and verify internal URLs`, () => {
    // Verify the fourth page
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl);
    // Keep Exploring
      cy.get('[aria-label="Capability & Performance"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/suvs/kicks/nissan-kicks/index.html');
      cy.visit(fullUrl).get('[aria-label="Interior & Cargo"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/suvs/kicks/kicks-interior-cargo/index.html');
      cy.visit(fullUrl).get('[aria-label="Technology"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/suvs/kicks/kicks-technology/index.html');
      cy.visit(fullUrl).get('[aria-label="Driver Assist"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/suvs/kicks/kicks-driver-assist/index.html');
    // Take the Next Step
      cy.visit(fullUrl);
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=kicks');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/interactivebrochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-kicks-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });
    });

describe('Verify URLs for CTAs on Trim Levels', () => {
  const link = './kicks-trims/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the Trim Levels link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=kicks');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/interactivebrochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-kicks-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });      
    });

describe('Verify URLs for CTAs on Accessories', () => {
  const link = './kicks-accessories/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the Accessories link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=kicks');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/interactivebrochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-kicks-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });      
    });

describe('Verify URLs for CTAs on Shop', () => {
  const link = './kicks-shop/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the Shop link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=kicks');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/interactivebrochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-kicks-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });      
    });