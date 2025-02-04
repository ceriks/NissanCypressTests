// Model & Year: Murano 2024
const baseUrl = 'https://nissanhub-stage.designory.com/suvs/murano';

describe('Verify URLs for CTAs on Interior & Cargo', () => {
  const link = './nissan-murano/index.html';
  const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
  it(`should visit ${link} and verify internal URLs`, () => {
    // Verify the first page
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl);
    // Keep Exploring
      cy.get('[aria-label="Premium Comfort"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/murano/nissan-murano/index.html');
      cy.visit(fullUrl).get('[aria-label="Technology"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/murano/murano-technology/index.html');
      cy.visit(fullUrl).get('[aria-label="Driver Assist & Cargo"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/murano/murano-drive-assist-cargo/index.html');
      cy.visit(fullUrl).get('[aria-label="Effortless Performance"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/murano/murano-performance/index.html');
    // Take the Next Step
      cy.visit(fullUrl);
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=murano');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2024/2024-nissan-murano-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });
    });

describe('Verify URLs for CTAs on Technology', () => {
  const link = './murano-technology/index.html';
  const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
  it(`should visit ${link} and verify internal URLs`, () => {
    // Verify the first page
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl);
    // Keep Exploring
      cy.get('[aria-label="Premium Comfort"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/murano/nissan-murano/index.html');
      cy.visit(fullUrl).get('[aria-label="Technology"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/murano/murano-technology/index.html');
      cy.visit(fullUrl).get('[aria-label="Driver Assist & Cargo"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/murano/murano-drive-assist-cargo/index.html');
      cy.visit(fullUrl).get('[aria-label="Effortless Performance"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/murano/murano-performance/index.html');
    // Take the Next Step
      cy.visit(fullUrl);
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=murano');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2024/2024-nissan-murano-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });
    });

describe('Verify URLs for CTAs on Driver Assist & Cargo', () => {
  const link = './murano-drive-assist-cargo/index.html';
  const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
  it(`should visit ${link} and verify internal URLs`, () => {
    // Verify the first page
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl);
    // Keep Exploring
      cy.get('[aria-label="Premium Comfort"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/murano/nissan-murano/index.html');
      cy.visit(fullUrl).get('[aria-label="Technology"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/murano/murano-technology/index.html');
      cy.visit(fullUrl).get('[aria-label="Driver Assist & Cargo"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/murano/murano-drive-assist-cargo/index.html');
      cy.visit(fullUrl).get('[aria-label="Effortless Performance"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/murano/murano-performance/index.html');
    // Take the Next Step
      cy.visit(fullUrl);
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=murano');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2024/2024-nissan-murano-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });
    });

describe('Verify URLs for CTAs on Effortless Performance', () => {
  const link = './murano-performance/index.html';
  const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
  it(`should visit ${link} and verify internal URLs`, () => {
    // Verify the first page
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl);
    // Keep Exploring
      cy.get('[aria-label="Premium Comfort"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/murano/nissan-murano/index.html');
      cy.visit(fullUrl).get('[aria-label="Technology"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/murano/murano-technology/index.html');
      cy.visit(fullUrl).get('[aria-label="Driver Assist & Cargo"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/murano/murano-drive-assist-cargo/index.html');
      cy.visit(fullUrl).get('[aria-label="Effortless Performance"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/suvs/murano/murano-performance/index.html');
    // Take the Next Step
      cy.visit(fullUrl);
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=murano');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2024/2024-nissan-murano-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });
    });

describe('Verify URLs for CTAs on Trim Levels', () => {
  const link = './murano-trim-levels/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the Trim Levels link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=murano');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2024/2024-nissan-murano-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
  });
  });

describe('Verify URLs for CTAs on Accessories', () => {
  const link = './murano-accessories/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the Accessories link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=murano');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2024/2024-nissan-murano-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
  });
  });

describe('Verify URLs for CTAs on Shop', () => {
  const link = './murano-shop/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the Shop link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=murano');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2024/2024-nissan-murano-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
  });
  });