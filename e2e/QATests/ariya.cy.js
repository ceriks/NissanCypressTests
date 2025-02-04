// Model & Year: Ariya 2025
const baseUrl = 'https://nissanhub-qa.designory.com/electric-hybrid-cars/ariya';

describe('Verify URLs for CTAs on Interior', () => {
  const link = './nissan-ariya/index.html';
  const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
  it(`should visit ${link} and verify internal URLs`, () => {
    // Verify the first page
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl);
    // Keep Exploring
      cy.get('[aria-label="Interior"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/electric-hybrid-cars/ariya/nissan-ariya/index.html');
      cy.visit(fullUrl).get('[aria-label="Connect"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/electric-hybrid-cars/ariya/ariya-connect/index.html');
      cy.visit(fullUrl).get('[aria-label="Performance & Safety Tech"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/electric-hybrid-cars/ariya/ariya-performance-and-safety-tech/index.html');
      cy.visit(fullUrl).get('[aria-label="Range and Charging"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/electric-hybrid-cars/ariya/ariya-range-and-charging/index.html');
    // Take the Next Step
      cy.visit(fullUrl);
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=ariya&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html?c020_model=28862');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2024/2024-nissan-ariya-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });
    });

describe('Verify URLs for CTAs on Connect', () => {
  const link = './ariya-connect/index.html'
  const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
  it(`should visit ${link} and verify internal URLs`, () => {
    // Verify the first page
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl);
    // Keep Exploring
      cy.get('[aria-label="Interior"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/electric-hybrid-cars/ariya/nissan-ariya/index.html');
      cy.visit(fullUrl).get('[aria-label="Connect"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/electric-hybrid-cars/ariya/ariya-connect/index.html');
      cy.visit(fullUrl).get('[aria-label="Performance & Safety Tech"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/electric-hybrid-cars/ariya/ariya-performance-and-safety-tech/index.html');
      cy.visit(fullUrl).get('[aria-label="Range and Charging"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/electric-hybrid-cars/ariya/ariya-range-and-charging/index.html');
    // Take the Next Step
      cy.visit(fullUrl);
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=ariya&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html?c020_model=28862');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2024/2024-nissan-ariya-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });
    });

describe('Verify URLs for CTAs on Performance & Safety Tech', () => {
  const link = './ariya-performance-and-safety-tech/index.html'
  const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
  it(`should visit ${link} and verify internal URLs`, () => {
    // Verify the first page
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl);
    // Keep Exploring
      cy.get('[aria-label="Interior"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/electric-hybrid-cars/ariya/nissan-ariya/index.html');
      cy.visit(fullUrl).get('[aria-label="Connect"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/electric-hybrid-cars/ariya/ariya-connect/index.html');
      cy.visit(fullUrl).get('[aria-label="Performance & Safety Tech"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/electric-hybrid-cars/ariya/ariya-performance-and-safety-tech/index.html');
      cy.visit(fullUrl).get('[aria-label="Range and Charging"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/electric-hybrid-cars/ariya/ariya-range-and-charging/index.html');
    // Take the Next Step
      cy.visit(fullUrl);
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=ariya&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html?c020_model=28862');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2024/2024-nissan-ariya-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });
    });

describe('Verify URLs for CTAs on Range & Charging', () => {
  const link = './ariya-range-and-charging/index.html'
  const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
  it(`should visit ${link} and verify internal URLs`, () => {
    // Verify the first page
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl);
    // Keep Exploring
      cy.get('[aria-label="Interior"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/electric-hybrid-cars/ariya/nissan-ariya/index.html');
      cy.visit(fullUrl).get('[aria-label="Connect"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/electric-hybrid-cars/ariya/ariya-connect/index.html');
      cy.visit(fullUrl).get('[aria-label="Performance & Safety Tech"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/electric-hybrid-cars/ariya/ariya-performance-and-safety-tech/index.html');
      cy.visit(fullUrl).get('[aria-label="Range and Charging"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/electric-hybrid-cars/ariya/ariya-range-and-charging/index.html');
    // Take the Next Step
      cy.visit(fullUrl);
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=ariya&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html?c020_model=28862');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2024/2024-nissan-ariya-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });
    });

describe('Verify URLs for CTAs on Trim Levels', () => {
  const link = './ariya-trims/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the Trim Levels link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=ariya&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html?c020_model=28862');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2024/2024-nissan-ariya-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
  });
  });

describe('Verify URLs for CTAs on Accessories', () => {
  const link = './ariya-accessories/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the Accessories link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=ariya&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html?c020_model=28862');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2024/2024-nissan-ariya-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
  });
  });

describe('Verify URLs for CTAs on Shop', () => {
  const link = './ariya-shop/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the Shop link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=ariya&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html?c020_model=28862');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2024/2024-nissan-ariya-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
  });
  });