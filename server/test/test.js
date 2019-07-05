const puppeteer = require('puppeteer');

const pageUrl = 'http://localhost:8000';

let page;
let browser;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
  });
  page = await browser.newPage();
});

afterAll(() => {
  browser.close();
});
