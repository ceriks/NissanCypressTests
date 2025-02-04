// Model & Year: Armada 2025
const baseUrl = 'https://nissanhub-qa.designory.com/suvs/armada';

describe('Verify URLs for CTAs on Performance & Capability', () => {
  const link = './nissan-armada/index.html';
  const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
  it(`should visit ${link} and verify internal URLs`, () => {
    // Verify the first page
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl);
    // Keep Exploring
      cy.get('[aria-label="Performance & Capability"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/suvs/armada/nissan-armada/index.html');
      cy.visit(fullUrl).get('[aria-label="Driver Assist & Safety Tech"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/suvs/armada/nissan-armada-driver-assist-safety-tech/index.html');
      cy.visit(fullUrl).get('[aria-label="Connectivity & Technology"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/suvs/armada/nissan-armada-connectivity-technology/index.html');
      cy.visit(fullUrl).get('[aria-label="Interior Comfort & Cargo"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/suvs/armada/nissan-armada-interior-comfort-cargo/index.html');
    // Take the Next Step
      cy.visit(fullUrl);
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=armada&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-armada-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });
    });

describe('Verify URLs for CTAs on Cargo & Seating', () => {
  const link = './nissan-armada-interior-comfort-cargo/index.html'
  const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
  it(`should visit ${link} and verify internal URLs`, () => {
    // Verify the first page
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl);
    // Keep Exploring
      cy.get('[aria-label="Performance & Capability"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/suvs/armada/nissan-armada/index.html');
      cy.visit(fullUrl).get('[aria-label="Driver Assist & Safety Tech"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/suvs/armada/nissan-armada-driver-assist-safety-tech/index.html');
      cy.visit(fullUrl).get('[aria-label="Connectivity & Technology"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/suvs/armada/nissan-armada-connectivity-technology/index.html');
      cy.visit(fullUrl).get('[aria-label="Interior Comfort & Cargo"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/suvs/armada/nissan-armada-interior-comfort-cargo/index.html');
    // Take the Next Step
      cy.visit(fullUrl);
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=armada&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-armada-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });
    });

describe('Verify URLs for CTAs on Driver Assist & Safety Tech', () => {
  const link = './nissan-armada-driver-assist-safety-tech/index.html'
  const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
  it(`should visit ${link} and verify internal URLs`, () => {
    // Verify the first page
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl);
    // Keep Exploring
      cy.get('[aria-label="Performance & Capability"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/suvs/armada/nissan-armada/index.html');
      cy.visit(fullUrl).get('[aria-label="Driver Assist & Safety Tech"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/suvs/armada/nissan-armada-driver-assist-safety-tech/index.html');
      cy.visit(fullUrl).get('[aria-label="Connectivity & Technology"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/suvs/armada/nissan-armada-connectivity-technology/index.html');
      cy.visit(fullUrl).get('[aria-label="Interior Comfort & Cargo"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/suvs/armada/nissan-armada-interior-comfort-cargo/index.html');
    // Take the Next Step
      cy.visit(fullUrl);
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=armada&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-armada-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });
    });

describe('Verify URLs for CTAs on Interior Comfort & Cargo', () => {
  const link = './nissan-armada-interior-comfort-cargo/index.html'
  const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
  it(`should visit ${link} and verify internal URLs`, () => {
    // Verify the first page
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl);
    // Keep Exploring
      cy.get('[aria-label="Performance & Capability"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/suvs/armada/nissan-armada/index.html');
      cy.visit(fullUrl).get('[aria-label="Driver Assist & Safety Tech"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/suvs/armada/nissan-armada-driver-assist-safety-tech/index.html');
      cy.visit(fullUrl).get('[aria-label="Connectivity & Technology"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/suvs/armada/nissan-armada-connectivity-technology/index.html');
      cy.visit(fullUrl).get('[aria-label="Interior Comfort & Cargo"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/suvs/armada/nissan-armada-interior-comfort-cargo/index.html');
    // Take the Next Step
      cy.visit(fullUrl);
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=armada&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-armada-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });
    });

describe('Verify URLs for CTAs on Trim Levels', () => {
  const link = './armada-trim-levels/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the Trim Levels link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Take the Next Step
    cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=armada&modelYear=current-year');
    cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html');
    cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-armada-brochure-en.pdf');
    cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
  });
  });

describe('Verify URLs for CTAs on Accessories', () => {
  const link = './armada-accessories/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the Accessories link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Take the Next Step
    cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=armada&modelYear=current-year');
    cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html');
    cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-armada-brochure-en.pdf');
    cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
  });
  });

describe('Verify URLs for CTAs on Shop', () => {
  const link = './armada-shop/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the Shop link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Take the Next Step
    cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=armada&modelYear=current-year');
    cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html');
    cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-armada-brochure-en.pdf');
    cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
  });
  });