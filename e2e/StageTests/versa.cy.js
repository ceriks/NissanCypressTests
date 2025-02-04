// Model Year: Versa 2025
const baseUrl = 'https://nissanhub-stage.designory.com/cars/versa';

describe('Verify URLs for CTAs on Interior', () => {
  const link = './nissan-versa/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the first internal link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Keep Exploring
      cy.get('[aria-label="Interior"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/cars/versa/nissan-versa/index.html');
      cy.get('[aria-label="Technology"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/cars/versa/versa-technology/index.html');
      cy.visit(fullUrl).get('[aria-label="Drive Tech"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/cars/versa/versa-drive-tech/index.html');
      cy.visit(fullUrl).get('[aria-label="Design"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/cars/versa/versa-design/index.html');
      cy.visit(fullUrl);
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=versa')
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/request-brochure.html')
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-versa-brochure-en.pdf')
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html')
    });
    });

describe('Verify URLs for CTAs on Technology', () => {
  const link = './versa-technology/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the first internal link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Keep Exploring
      cy.get('[aria-label="Interior"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/cars/versa/nissan-versa/index.html');
      cy.get('[aria-label="Technology"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/cars/versa/versa-technology/index.html');
      cy.visit(fullUrl).get('[aria-label="Drive Tech"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/cars/versa/versa-drive-tech/index.html');
      cy.visit(fullUrl).get('[aria-label="Design"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/cars/versa/versa-design/index.html');
      cy.visit(fullUrl);
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=versa')
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/request-brochure.html')
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-versa-brochure-en.pdf')
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html')
    });
    });

describe('Verify URLs for CTAs on Drive Tech', () => {
  const link = './versa-drive-tech/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the first internal link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Keep Exploring
      cy.get('[aria-label="Interior"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/cars/versa/nissan-versa/index.html');
      cy.get('[aria-label="Technology"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/cars/versa/versa-technology/index.html');
      cy.visit(fullUrl).get('[aria-label="Drive Tech"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/cars/versa/versa-drive-tech/index.html');
      cy.visit(fullUrl).get('[aria-label="Design"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/cars/versa/versa-design/index.html');
      cy.visit(fullUrl);
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=versa')
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/request-brochure.html')
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-versa-brochure-en.pdf')
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html')
    });
    });

describe('Verify URLs for CTAs on Design', () => {
  const link = './versa-design/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the first internal link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Keep Exploring
      cy.get('[aria-label="Interior"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/cars/versa/nissan-versa/index.html');
      cy.get('[aria-label="Technology"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/cars/versa/versa-technology/index.html');
      cy.visit(fullUrl).get('[aria-label="Drive Tech"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/cars/versa/versa-drive-tech/index.html');
      cy.visit(fullUrl).get('[aria-label="Design"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-stage.designory.com/cars/versa/versa-design/index.html');
      cy.visit(fullUrl);
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=versa')
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/request-brochure.html')
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-versa-brochure-en.pdf')
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html')
    });
    });

describe('Verify URLs for CTAs on Trim Levels', () => {
  const link = './versa-trims/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the first internal link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=versa')
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/request-brochure.html')
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-versa-brochure-en.pdf')
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html')
  });
  });

describe('Verify URLs for CTAs on Accessories', () => {
  const link = './versa-accessories/index.html?nav=top'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the first internal link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=versa')
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/request-brochure.html')
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-versa-brochure-en.pdf')
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html')
  });
  });

describe('Verify URLs for CTAs on Shop', () => {
  const link = './versa-shop/index.html?nav=top'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the first internal link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=versa')
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/request-brochure.html')
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-versa-brochure-en.pdf')
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html')
  });
  });