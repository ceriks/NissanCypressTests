// Model & Year: Frontier 2025
const baseUrl = 'https://nissanhub-qa.designory.com/trucks/frontier';

describe('Verify URLs for CTAs on Off-road Capability', () => {
  const link = '/nissan-frontier/index.html';
  const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
  it(`should visit ${link} and verify internal URLs`, () => {
    // Verify the first page
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl);
    // Keep Exploring
      cy.get('[aria-label="Off-road Capability"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/trucks/frontier/nissan-frontier/index.html');
      cy.visit(fullUrl).get('[aria-label="Towing"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/trucks/frontier/frontier-towing/index.html');
      cy.visit(fullUrl).get('[aria-label="Utility & Safety Tech"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/trucks/frontier/frontier-utility-safety-tech/index.html');
      cy.visit(fullUrl).get('[aria-label="Interior & Tech"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/trucks/frontier/frontier-interior-tech/index.html');
    // Take the Next Step
      cy.visit(fullUrl);
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=frontier');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/interactivebrochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-frontier-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });
    });

describe('Verify URLs for CTAs on Towing', () => {
  const link = './frontier-towing/index.html'
  const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
  it(`should visit ${link} and verify internal URLs`, () => {
    // Verify the first page
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl);
    // Keep Exploring
      cy.get('[aria-label="Off-road Capability"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/trucks/frontier/nissan-frontier/index.html');
      cy.visit(fullUrl).get('[aria-label="Towing"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/trucks/frontier/frontier-towing/index.html');
      cy.visit(fullUrl).get('[aria-label="Utility & Safety Tech"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/trucks/frontier/frontier-utility-safety-tech/index.html');
      cy.visit(fullUrl).get('[aria-label="Interior & Tech"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/trucks/frontier/frontier-interior-tech/index.html');
    // Take the Next Step
      cy.visit(fullUrl);
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=frontier');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/interactivebrochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-frontier-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });
    });

describe('Verify URLs for CTAs on Utility & Safety Tech', () => {
  const link = './frontier-utility-safety-tech/index.html'
  const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
  it(`should visit ${link} and verify internal URLs`, () => {
    // Verify the first page
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl);
    // Keep Exploring
      cy.get('[aria-label="Off-road Capability"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/trucks/frontier/nissan-frontier/index.html');
      cy.visit(fullUrl).get('[aria-label="Towing"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/trucks/frontier/frontier-towing/index.html');
      cy.visit(fullUrl).get('[aria-label="Utility & Safety Tech"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/trucks/frontier/frontier-utility-safety-tech/index.html');
      cy.visit(fullUrl).get('[aria-label="Interior & Tech"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/trucks/frontier/frontier-interior-tech/index.html');
    // Take the Next Step
      cy.visit(fullUrl);
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=frontier');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/interactivebrochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-frontier-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });
    });

describe('Verify URLs for CTAs on Interior & Tech', () => {
  const link = './frontier-interior-tech/index.html'
  const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
  it(`should visit ${link} and verify internal URLs`, () => {
    // Verify the first page
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl);
    // Keep Exploring
      cy.get('[aria-label="Off-road Capability"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/trucks/frontier/nissan-frontier/index.html');
      cy.visit(fullUrl).get('[aria-label="Towing"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/trucks/frontier/frontier-towing/index.html');
      cy.visit(fullUrl).get('[aria-label="Utility & Safety Tech"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/trucks/frontier/frontier-utility-safety-tech/index.html');
      cy.visit(fullUrl).get('[aria-label="Interior & Tech"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/trucks/frontier/frontier-interior-tech/index.html');
    // Take the Next Step
      cy.visit(fullUrl);
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=frontier');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/interactivebrochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-frontier-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });
    });

describe('Verify URLs for CTAs on Trim Levels', () => {
  const link = './frontier-trims/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the Trim Levels link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=frontier');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/interactivebrochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-frontier-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });      
    });

describe('Verify URLs for CTAs on Accessories', () => {
  const link = './frontier-accessories/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the Accessories link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=frontier');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/interactivebrochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-frontier-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });      
    });

describe('Verify URLs for CTAs on Shop', () => {
  const link = './frontier-shop/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the Shop link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=frontier');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/interactivebrochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-frontier-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });      
    });