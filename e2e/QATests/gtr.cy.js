// Model & Year: GT-R 2024
const baseUrl = 'https://nissanhub-qa.designory.com/sportscars/gtr';

describe('Verify URLs for CTAs on Performance', () => {
  const link = '/nissan-gt-r/index.html';
  const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
  it(`should visit ${link} and verify internal URLs`, () => {
    // Verify the first page
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl);
    // Keep Exploring
      cy.get('[aria-label="Performance"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/gtr/nissan-gt-r/index.html');
      cy.visit(fullUrl).get('[aria-label="Aerodynamics & Design"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/gtr/gt-r-aerodynamics/index.html');
      cy.visit(fullUrl).get('[aria-label="Technology & Interior"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/gtr/gt-r-technology/index.html');
      cy.visit(fullUrl).get('[aria-label="NISMO®"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/gtr/gt-r-nismo/index.html');
      cy.visit(fullUrl).get('[aria-label="Craftsmanship"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/gtr/gt-r-craftsmanship/index.html');
    // Take the Next Step
      cy.visit(fullUrl);
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=gt-r&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2024/2024-nissan-gt-r-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });
    });

describe('Verify URLs for CTAs on Aerodynamics & Design', () => {
  const link = '/gt-r-aerodynamics/index.html';
  const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
  it(`should visit ${link} and verify internal URLs`, () => {
    // Verify the second page
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl);
    // Keep Exploring
      cy.get('[aria-label="Performance"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/gtr/nissan-gt-r/index.html');
      cy.visit(fullUrl).get('[aria-label="Aerodynamics & Design"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/gtr/gt-r-aerodynamics/index.html');
      cy.visit(fullUrl).get('[aria-label="Technology & Interior"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/gtr/gt-r-technology/index.html');
      cy.visit(fullUrl).get('[aria-label="NISMO®"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/gtr/gt-r-nismo/index.html');
      cy.visit(fullUrl).get('[aria-label="Craftsmanship"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/gtr/gt-r-craftsmanship/index.html');
    // Take the Next Step
      cy.visit(fullUrl);
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=gt-r&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2024/2024-nissan-gt-r-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });
    });

describe('Verify URLs for CTAs on Technology & Interior', () => {
  const link = '/gt-r-aerodynamics/index.html';
  const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
  it(`should visit ${link} and verify internal URLs`, () => {
    // Verify the first page
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl);
    // Keep Exploring
      cy.get('[aria-label="Performance"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/gtr/nissan-gt-r/index.html');
      cy.visit(fullUrl).get('[aria-label="Aerodynamics & Design"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/gtr/gt-r-aerodynamics/index.html');
      cy.visit(fullUrl).get('[aria-label="Technology & Interior"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/gtr/gt-r-technology/index.html');
      cy.visit(fullUrl).get('[aria-label="NISMO®"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/gtr/gt-r-nismo/index.html');
      cy.visit(fullUrl).get('[aria-label="Craftsmanship"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/gtr/gt-r-craftsmanship/index.html');
    // Take the Next Step
      cy.visit(fullUrl);
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=gt-r&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2024/2024-nissan-gt-r-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });
    });
        
describe('Verify URLs for CTAs on NISMO', () => {
  const link = '/gt-r-nismo/index.html';
  const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
  it(`should visit ${link} and verify internal URLs`, () => {
    // Verify the first page
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl);
    // Keep Exploring
      cy.get('[aria-label="Performance"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/gtr/nissan-gt-r/index.html');
      cy.visit(fullUrl).get('[aria-label="Aerodynamics & Design"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/gtr/gt-r-aerodynamics/index.html');
      cy.visit(fullUrl).get('[aria-label="Technology & Interior"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/gtr/gt-r-technology/index.html');
      cy.visit(fullUrl).get('[aria-label="NISMO®"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/gtr/gt-r-nismo/index.html');
      cy.visit(fullUrl).get('[aria-label="Craftsmanship"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/gtr/gt-r-craftsmanship/index.html');
    // Take the Next Step
      cy.visit(fullUrl);
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=gt-r&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2024/2024-nissan-gt-r-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });
    });

describe('Verify URLs for CTAs on Craftsmanship', () => {
  const link = '/gt-r-craftsmanship/index.html';
  const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
  it(`should visit ${link} and verify internal URLs`, () => {
    // Verify the first page
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl);
    // Keep Exploring
      cy.get('[aria-label="Performance"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/gtr/nissan-gt-r/index.html');
      cy.visit(fullUrl).get('[aria-label="Aerodynamics & Design"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/gtr/gt-r-aerodynamics/index.html');
      cy.visit(fullUrl).get('[aria-label="Technology & Interior"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/gtr/gt-r-technology/index.html');
      cy.visit(fullUrl).get('[aria-label="NISMO®"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/gtr/gt-r-nismo/index.html');
      cy.visit(fullUrl).get('[aria-label="Craftsmanship"]').click();
      cy.wait(1000);
      cy.url().should('eq', 'https://nissanhub-qa.designory.com/sportscars/gtr/gt-r-craftsmanship/index.html');
    // Take the Next Step
      cy.visit(fullUrl);
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=gt-r&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2024/2024-nissan-gt-r-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });
    });

describe('Verify URLs for CTAs on Trim Levels', () => {
  const link = './gt-r-trim-levels/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the Trim Levels link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=gt-r&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2024/2024-nissan-gt-r-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });      
    });

describe('Verify URLs for CTAs on Accessories', () => {
  const link = './gt-r-accessories/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the Accessories link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=gt-r&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2024/2024-nissan-gt-r-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });      
    });

describe('Verify URLs for CTAs on Shop', () => {
  const link = './gt-r-shop/index.html'
  it(`should visit ${link} and verify internal URLs`, () => {
    const fullUrl = `${baseUrl}${link.replace('./', '/')}`;
    // Verify the Shop link
      cy.visit(fullUrl);
      cy.url().should('eq', fullUrl); 
    // Take the Next Step
      cy.get('.nextstep-btn').eq(0).should('be.visible').should('have.text', 'BUILD & PRICE').and('have.attr', 'href', 'https://www.nissanusa.com/shopping-tools/build-price?models=gt-r&modelYear=current-year');
      cy.get('.nextstep-btn').eq(1).should('be.visible').should('have.text', 'STAY INFORMED').and('have.attr', 'href', 'https://www.nissanusa.com/brochures/request-brochure.html');
      cy.get('.nextstep-btn').eq(2).should('be.visible').should('have.text', 'DOWNLOAD PDF BROCHURE').and('have.attr', 'href', 'https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2024/2024-nissan-gt-r-brochure-en.pdf');
      cy.get('.nextstep-btn').eq(3).should('be.visible').should('have.text', 'SEE ALL VEHICLES').and('have.attr', 'href', 'https://www.nissanusa.com/vehicles/new.html');
    });      
    });