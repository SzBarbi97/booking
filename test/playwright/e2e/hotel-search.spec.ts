import { expect, test } from '@playwright/test';

const hotelPageUrl = 'http://localhost:3000/hotels';
const beCountriesUrl = 'http://localhost:3001/hotels/countries';

test.describe('Hotel page search form test cases', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(hotelPageUrl);
  });

  test('Hotel page should open and render the search form', async ({ page }) => {
    const searchForm = page.locator('form');
    await expect(searchForm).toBeVisible();

    const countryInput = page.locator('input[name="country"]');
    await expect(countryInput).toBeVisible();
    await expect(countryInput).toHaveValue('');

    const arrivalDateInput = page.locator('input[name="arrival-date"]');
    await expect(arrivalDateInput).toBeVisible();
    await expect(arrivalDateInput).toHaveValue('');

    const exitDateInput = page.locator('input[name="exit-date"]');
    await expect(exitDateInput).toBeVisible();
    await expect(exitDateInput).toHaveValue('');

    const numberOfAdultsInput = page.locator('input[name="number-of-adults"]');
    await expect(numberOfAdultsInput).toBeVisible();
    await expect(numberOfAdultsInput).toHaveValue('');

    const numberOfChildrenInput = page.locator('input[name="number-of-children"]');
    await expect(numberOfChildrenInput).toBeVisible();
    await expect(numberOfChildrenInput).toHaveValue('');
  });

  test('Country input options should contains every available countries', async ({ page }) => {
    const countryMenu = page.locator('#menu-country');
    await expect(countryMenu).toBeHidden();

    const countryInput = page.locator('input[name="country"]');
    await countryInput.locator('..').click();

    await expect(countryMenu).toBeVisible();

    const response = await page.request.get(beCountriesUrl);
    const responseBody = await response.json();
    const expectedCountries = ['', ...responseBody];
    const countryMenuOptions = await countryMenu.locator('li').all();

    for (let index = 0; index < countryMenuOptions.length; index++) {
      const expectedDataValue = expectedCountries[index];
      const locator = countryMenuOptions[index];
      await expect(locator).toHaveAttribute('data-value', expectedDataValue);
    }
  });

  test('Search by country', async ({ page }) => {
    const countryInput = page.locator('input[name="country"]');
    await countryInput.locator('..').click();

    const countryMenu = page.locator('#menu-country');
    const countryMenuSecondOption = countryMenu.locator('li').nth(1);
    await countryMenuSecondOption.click();

    const selectedCountry = await countryMenuSecondOption.innerText();

    await expect(countryInput).toHaveValue(selectedCountry);

    await page.locator('form').locator('button[type="submit"]').click();

    const countryLocators = await page.locator('.HotelListListView-module_country').all();

    for (const countryLocator of countryLocators) {
      await expect(countryLocator).toHaveText(selectedCountry);
    }

    await expect(page).toHaveURL(`${hotelPageUrl}?country=${selectedCountry}`);
  });

  test('Search by arrival date', async ({ page }) => {
    const arrivalDate = '2024-12-12';

    await page.locator('input[name="arrival-date"]').fill(arrivalDate);

    await page.locator('form').locator('button[type="submit"]').click();

    await expect(page).toHaveURL(`${hotelPageUrl}?arrivalDate=${arrivalDate}`);
  });

  test('Search by exit date', async ({ page }) => {
    const exitDate = '2024-12-15';

    await page.locator('input[name="exit-date"]').fill(exitDate);

    await page.locator('form').locator('button[type="submit"]').click();

    await expect(page).toHaveURL(`${hotelPageUrl}?exitDate=${exitDate}`);
  });

  test('Invalid exit date', async ({ page }) => {
    const exitDateInput = page.locator('input[name="exit-date"]');
    await exitDateInput.fill('2024-12-11');

    const arrivalDateInput = page.locator('input[name="arrival-date"]');
    await arrivalDateInput.fill('2024-12-12');

    await expect(exitDateInput).toHaveAttribute('aria-invalid', 'true');

    const errorTooltip = page.locator('.ErrorTooltip-module_errorTooltip');
    await expect(errorTooltip).toBeVisible();
    await expect(errorTooltip).toHaveAttribute('aria-label', 'A távozás dátuma nem lehet korábbi vagy egyenlő az érkezés dátumával.');
  });

  test('Search by number of adults', async ({ page }) => {
    const numberOfAdults = '2';

    await page.locator('input[name="number-of-adults"]').fill(numberOfAdults);

    await page.locator('form').locator('button[type="submit"]').click();

    await expect(page).toHaveURL(`${hotelPageUrl}?numberOfAdults=${numberOfAdults}`);
  });

  test('Invalid number of adults', async ({ page }) => {
    const numberOfAdultsInput = page.locator('input[name="number-of-adults"]');
    await numberOfAdultsInput.fill('-1');
    await expect(numberOfAdultsInput).toHaveAttribute('aria-invalid', 'true');

    const errorTooltip = page.locator('.ErrorTooltip-module_errorTooltip');
    await expect(errorTooltip).toBeVisible();
    await expect(errorTooltip).toHaveAttribute('aria-label', 'A felnőttek száma nem lehet kisebb 0-nál.');
  });

  test('Search by number of children', async ({ page }) => {
    const numberOfChildren = '2';

    await page.locator('input[name="number-of-children"]').fill(numberOfChildren);

    await page.locator('form').locator('button[type="submit"]').click();

    await expect(page).toHaveURL(`${hotelPageUrl}?numberOfChildren=${numberOfChildren}`);
  });

  test('Invalid number of children', async ({ page }) => {
    const numberOfChildrenInput = page.locator('input[name="number-of-children"]');
    await numberOfChildrenInput.fill('-1');
    await expect(numberOfChildrenInput).toHaveAttribute('aria-invalid', 'true');

    const errorTooltip = page.locator('.ErrorTooltip-module_errorTooltip');
    await expect(errorTooltip).toBeVisible();
    await expect(errorTooltip).toHaveAttribute('aria-label', 'A gyerekek száma nem lehet kisebb 0-nál.');
  });
});