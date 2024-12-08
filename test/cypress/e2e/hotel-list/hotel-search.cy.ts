const hotelPageUrl = 'http://localhost:3000/hotels';
const beCountriesUrl = 'http://localhost:3001/hotels/countries';

describe('Hotel page search form test cases', () => {

  beforeEach(() => {
    cy.visit(hotelPageUrl);
  });

  it('Hotel page should open and render the search form', () => {
    const searchForm = cy.get('form');
    searchForm.should('exist').should('be.visible');

    const countryInput = searchForm.get('input[name="country"]');
    countryInput.should('exist').should('not.have.value');

    const arrivalDateInput = searchForm.get('input[name="arrival-date"]');
    arrivalDateInput.should('exist').should('not.have.value');

    const exitDateInput = searchForm.get('input[name="exit-date"]');
    exitDateInput.should('exist').should('not.have.value');

    const numberOfAdultsInput = searchForm.get('input[name="number-of-adults"]');
    numberOfAdultsInput.should('exist').should('not.have.value');

    const numberOfChildrenInput = searchForm.get('input[name="number-of-children"]');
    numberOfChildrenInput.should('exist').should('not.have.value');
  });

  it('Country input options should contains every available countries', () => {
    const countryMenu = cy.get('#menu-country');
    countryMenu.should('not.exist');

    const countryInput = cy.get('input[name="country"]');
    countryInput.parent().click();

    countryMenu.should('exist');

    cy.request('GET', beCountriesUrl)
      .then(response => {
        const expectedCountries = ['', ...response.body];
        const countryMenuOptions = countryMenu.get('li');
        countryMenuOptions.each((element, index) => {
          const elementDataValue = element.attr('data-value');
          expect(elementDataValue).to.equal(expectedCountries[index]);
        });
      });
  });

  it('Search by country', () => {
    cy.get('input[name="country"]').as('country').parent().click();

    cy.get('#menu-country')
      .get('li')
      .eq(1)
      .click()
      .then(option => {
        const selectedCountry = option.text();

        cy.get('@country').should('have.value', selectedCountry);

        cy.get('form').get('button[type="submit"]').click();

        cy.get('.HotelListListView-module_country').each(countryElement => {
          expect(countryElement.text()).to.equal(selectedCountry);
        });

        cy.url({ decode: true }).should('include', `/hotels?country=${selectedCountry}`);
      });
  });

  it('Search by arrival date', () => {
    const arrivalDate = '2024-12-12';

    cy.get('input[name="arrival-date"]').click().type(arrivalDate);

    cy.get('form').get('button[type="submit"]').click();

    cy.url({ decode: true }).should('include', `/hotels?arrivalDate=${arrivalDate}`);
  });


  it('Search by exit date', () => {
    const exitDate = '2024-12-15';

    cy.get('input[name="exit-date"]').click().type(exitDate);

    cy.get('form').get('button[type="submit"]').click();

    cy.url({ decode: true }).should('include', `/hotels?exitDate=${exitDate}`);
  });

  it('Invalid exit date', () => {
    cy.get('input[name="exit-date"]').click().type('2024-12-11');
    cy.get('input[name="arrival-date"]').click().type('2024-12-12');

    cy.get('input[name="exit-date"]')
      .should('have.attr', 'aria-invalid', 'true');

    cy.get('.ErrorTooltip-module_errorTooltip')
      .should('exist')
      .should('be.visible')
      .should('have.attr', 'aria-label', 'A távozás dátuma nem lehet korábbi vagy egyenlő az érkezés dátumával.');
  });

  it('Search by number of adults', () => {
    const numberOfAdults = '2';

    cy.get('input[name="number-of-adults"]').click().type(numberOfAdults);

    cy.get('form').get('button[type="submit"]').click();

    cy.url({ decode: true }).should('include', `/hotels?numberOfAdults=${numberOfAdults}`);
  });

  it('Invalid number of adults', () => {
    cy.get('input[name="number-of-adults"]').click().type('-1');

    cy.get('input[name="number-of-adults"]')
      .should('have.attr', 'aria-invalid', 'true');

    cy.get('.ErrorTooltip-module_errorTooltip')
      .should('exist')
      .should('be.visible')
      .should('have.attr', 'aria-label', 'A felnőttek száma nem lehet kisebb 0-nál.');
  });

  it('Search by number of children', () => {
    const numberOfChildren = '2';

    cy.get('input[name="number-of-children"]').click().type(numberOfChildren);

    cy.get('form').get('button[type="submit"]').click();

    cy.url({ decode: true }).should('include', `/hotels?numberOfChildren=${numberOfChildren}`);
  });

  it('Invalid number of children', () => {
    cy.get('input[name="number-of-children"]').click().type('-1');

    cy.get('input[name="number-of-children"]')
      .should('have.attr', 'aria-invalid', 'true');

    cy.get('.ErrorTooltip-module_errorTooltip')
      .should('exist')
      .should('be.visible')
      .should('have.attr', 'aria-label', 'A gyerekek száma nem lehet kisebb 0-nál.');
  });
});