// Model Year: Sentra 2025
const baseUrl = 'https://nissanhub-qa.designory.com/cars/sentra';

describe('Verify URLs for CTAs on Style', () => {
  const link = './nissan-sentra/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the first internal link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Keep Exploring
      cy.get('[aria-label="Style"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/cars/sentra/nissan-sentra/index.html');
      cy.get('[aria-label="Interior"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/cars/sentra/sentra-interior/index.html');
      cy.visit(fullUrl).get('[aria-label="Performance & Safety Tech"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/cars/sentra/sentra-performance-safety-tech/index.html');
      cy.visit(fullUrl).get('[aria-label="Technology"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/cars/sentra/sentra-technology/index.html');
      cy.visit(fullUrl);
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=sentra')
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/interactivebrochures/request-brochure.html')
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-sentra-brochure-en.pdf')
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html')
    });
    });

describe('Verify URLs for CTAs on Interior', () => {
  const link = './sentra-interior/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the first internal link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Keep Exploring
      cy.get('[aria-label="Style"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/cars/sentra/nissan-sentra/index.html');
      cy.get('[aria-label="Interior"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/cars/sentra/sentra-interior/index.html');
      cy.visit(fullUrl).get('[aria-label="Performance & Safety Tech"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/cars/sentra/sentra-performance-safety-tech/index.html');
      cy.visit(fullUrl).get('[aria-label="Technology"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/cars/sentra/sentra-technology/index.html');
      cy.visit(fullUrl);
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=sentra')
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/interactivebrochures/request-brochure.html')
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-sentra-brochure-en.pdf')
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html')
    });
    });

describe('Verify URLs for CTAs on Performance and Safety Tech', () => {
  const link = './sentra-performance-safety-tech/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the first internal link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Keep Exploring
      cy.get('[aria-label="Style"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/cars/sentra/nissan-sentra/index.html');
      cy.get('[aria-label="Interior"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/cars/sentra/sentra-interior/index.html');
      cy.visit(fullUrl).get('[aria-label="Performance & Safety Tech"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/cars/sentra/sentra-performance-safety-tech/index.html');
      cy.visit(fullUrl).get('[aria-label="Technology"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/cars/sentra/sentra-technology/index.html');
      cy.visit(fullUrl);
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=sentra')
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/interactivebrochures/request-brochure.html')
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-sentra-brochure-en.pdf')
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html')
    });
    });

describe('Verify URLs for CTAs on Technology', () => {
  const link = './sentra-technology/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the first internal link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Keep Exploring
      cy.get('[aria-label="Style"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/cars/sentra/nissan-sentra/index.html');
      cy.get('[aria-label="Interior"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/cars/sentra/sentra-interior/index.html');
      cy.visit(fullUrl).get('[aria-label="Performance & Safety Tech"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/cars/sentra/sentra-performance-safety-tech/index.html');
      cy.visit(fullUrl).get('[aria-label="Technology"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/cars/sentra/sentra-technology/index.html');
      cy.visit(fullUrl);
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=sentra')
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/interactivebrochures/request-brochure.html')
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-sentra-brochure-en.pdf')
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html')
    });
    });

describe('Verify URLs for CTAs on Trim Levels', () => {
  const link = './sentra-trim-levels/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the first internal link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=sentra')
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/interactivebrochures/request-brochure.html')
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-sentra-brochure-en.pdf')
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html')
  });
  });

describe('Verify URLs for CTAs on Accessories', () => {
  const link = './sentra-accessories/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the first internal link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=sentra')
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/interactivebrochures/request-brochure.html')
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-sentra-brochure-en.pdf')
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html')
  });
  });

describe('Verify URLs for CTAs on Shop', () => {
  const link = './sentra-shop/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the first internal link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=sentra')
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/interactivebrochures/request-brochure.html')
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-sentra-brochure-en.pdf')
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html')
  });
  });