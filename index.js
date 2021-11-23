const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    product: 'firefox',
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.mouse.move(-100, 100); // this will never resolve
  await browser.close();
})();
