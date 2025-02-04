// Model Year: Z2025
const baseUrl = 'https://nissanhub-qa.designory.com/sportscars/nissan-z';

describe('Verify URLs for CTAs on Performance', () => {
  const link = './nissan-z/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the first internal link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Keep Exploring
      cy.get('[aria-label="Performance"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/nissan-z/nissan-z/index.html');
      cy.get('[aria-label="Interior & Tech"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/nissan-z/z-interior/index.html');
      cy.visit(fullUrl).get('[aria-label="Design"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/nissan-z/z-design/index.html');
      cy.visit(fullUrl).get('[aria-label="NISMO®"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/nissan-z/z-nismo/index.html');
      cy.visit(fullUrl);
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=nissan-z&modelYear=current-year')
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html')
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2024/2024-nissan-nissan-z-brochure-en.pdf')
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html')
    });
    });

describe('Verify URLs for CTAs on Interior & Tech', () => {
  const link = './z-interior/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the first internal link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Keep Exploring
      cy.get('[aria-label="Performance"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/nissan-z/nissan-z/index.html');
      cy.get('[aria-label="Interior & Tech"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/nissan-z/z-interior/index.html');
      cy.visit(fullUrl).get('[aria-label="Design"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/nissan-z/z-design/index.html');
      cy.visit(fullUrl).get('[aria-label="NISMO®"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/nissan-z/z-nismo/index.html');
      cy.visit(fullUrl);
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=nissan-z&modelYear=current-year')
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html')
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2024/2024-nissan-nissan-z-brochure-en.pdf')
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html')
    });
    });

describe('Verify URLs for CTAs on Design', () => {
  const link = './z-design/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the first internal link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Keep Exploring
      cy.get('[aria-label="Performance"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/nissan-z/nissan-z/index.html');
      cy.get('[aria-label="Interior & Tech"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/nissan-z/z-interior/index.html');
      cy.visit(fullUrl).get('[aria-label="Design"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/nissan-z/z-design/index.html');
      cy.visit(fullUrl).get('[aria-label="NISMO®"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/nissan-z/z-nismo/index.html');
      cy.visit(fullUrl);
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=nissan-z&modelYear=current-year')
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html')
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2024/2024-nissan-nissan-z-brochure-en.pdf')
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html')
    });
    });

describe('Verify URLs for CTAs on NISMO', () => {
  const link = './z-nismo/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the first internal link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Keep Exploring
      cy.get('[aria-label="Performance"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/nissan-z/nissan-z/index.html');
      cy.get('[aria-label="Interior & Tech"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/nissan-z/z-interior/index.html');
      cy.visit(fullUrl).get('[aria-label="Design"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/nissan-z/z-design/index.html');
      cy.visit(fullUrl).get('[aria-label="NISMO®"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/nissan-z/z-nismo/index.html');
      cy.visit(fullUrl);
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=nissan-z&modelYear=current-year')
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html')
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2024/2024-nissan-nissan-z-brochure-en.pdf')
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html')
    });
    });

describe('Verify URLs for CTAs on Trim Levels', () => {
  const link = './z-trims/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the first internal link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=nissan-z&modelYear=current-year')
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html')
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2024/2024-nissan-nissan-z-brochure-en.pdf')
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html')
  });
  });

describe('Verify URLs for CTAs on Accessories', () => {
  const link = './z-accessories/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the first internal link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=nissan-z&modelYear=current-year')
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html')
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2024/2024-nissan-nissan-z-brochure-en.pdf')
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html')
  });
  });

describe('Verify URLs for CTAs on Shop', () => {
  const link = './z-shop/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the first internal link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=nissan-z&modelYear=current-year')
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html')
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2024/2024-nissan-nissan-z-brochure-en.pdf')
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html')
  });
  });