// Model Year: Titan 2024
const baseUrl = 'https://nissanhub-qa.designory.com/trucks/titan';

describe('Verify URLs for CTAs on Off-road', () => {
  const link = './nissan-titan/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the first internal link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Keep Exploring
      cy.get('[aria-label="Off-road"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/trucks/titan/nissan-titan/index.html');
      cy.get('[aria-label="Towing"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/trucks/titan/titan-towing/index.html');
      cy.visit(fullUrl).get('[aria-label="Utility & Safety Tech"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/trucks/titan/titan-utility-safety/index.html');
      cy.visit(fullUrl).get('[aria-label="Interior & Tech"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/trucks/titan/titan-interior-tech/index.html');
      cy.visit(fullUrl);
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=titan')
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/interactivebrochures/request-brochure.html')
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2024/2024-nissan-titan-brochure-en.pdf')
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/request-brochure.html')
    });
    });

describe('Verify URLs for CTAs on Towing', () => {
  const link = './titan-towing/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the first internal link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Keep Exploring
      cy.get('[aria-label="Off-road"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/trucks/titan/nissan-titan/index.html');
      cy.get('[aria-label="Towing"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/trucks/titan/titan-towing/index.html');
      cy.visit(fullUrl).get('[aria-label="Utility & Safety Tech"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/trucks/titan/titan-utility-safety/index.html');
      cy.visit(fullUrl).get('[aria-label="Interior & Tech"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/trucks/titan/titan-interior-tech/index.html');
      cy.visit(fullUrl);
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=titan')
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/interactivebrochures/request-brochure.html')
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2024/2024-nissan-titan-brochure-en.pdf')
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/request-brochure.html')
    });
    });

describe('Verify URLs for CTAs on Utility and Safety Tech', () => {
  const link = './titan-utility-safety/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the first internal link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Keep Exploring
      cy.get('[aria-label="Off-road"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/trucks/titan/nissan-titan/index.html');
      cy.get('[aria-label="Towing"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/trucks/titan/titan-towing/index.html');
      cy.visit(fullUrl).get('[aria-label="Utility & Safety Tech"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/trucks/titan/titan-utility-safety/index.html');
      cy.visit(fullUrl).get('[aria-label="Interior & Tech"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/trucks/titan/titan-interior-tech/index.html');
      cy.visit(fullUrl);
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=titan')
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/interactivebrochures/request-brochure.html')
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2024/2024-nissan-titan-brochure-en.pdf')
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/request-brochure.html')
    });
    });

describe('Verify URLs for CTAs on Interior & Tech', () => {
  const link = './titan-interior-tech/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the first internal link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Keep Exploring
      cy.get('[aria-label="Off-road"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/trucks/titan/nissan-titan/index.html');
      cy.get('[aria-label="Towing"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/trucks/titan/titan-towing/index.html');
      cy.visit(fullUrl).get('[aria-label="Utility & Safety Tech"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/trucks/titan/titan-utility-safety/index.html');
      cy.visit(fullUrl).get('[aria-label="Interior & Tech"] > .cta-thumb-img > .ajax-media-view').click()
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/trucks/titan/titan-interior-tech/index.html');
      cy.visit(fullUrl);
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=titan')
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/interactivebrochures/request-brochure.html')
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2024/2024-nissan-titan-brochure-en.pdf')
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/request-brochure.html')
    });
    });

describe('Verify URLs for CTAs on Trim Levels', () => {
  const link = './titan-trims/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the first internal link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=titan')
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/interactivebrochures/request-brochure.html')
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2024/2024-nissan-titan-brochure-en.pdf')
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/request-brochure.html')
  });
  });

describe('Verify URLs for CTAs on Accessories', () => {
  const link = './titan-accessories/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the first internal link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=titan')
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/interactivebrochures/request-brochure.html')
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2024/2024-nissan-titan-brochure-en.pdf')
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/request-brochure.html')
  });
  });

describe('Verify URLs for CTAs on Shop', () => {
  const link = './titan-shop/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the first internal link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=titan')
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/interactivebrochures/request-brochure.html')
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2024/2024-nissan-titan-brochure-en.pdf')
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/request-brochure.html')
  });
  });