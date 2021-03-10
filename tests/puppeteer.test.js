const puppeteer = require('puppeteer');
const chatfinity = `http://localhost:8080/`;
import "regenerator-runtime/runtime.js";

describe('Configuration Tests', () => {
  let browser
  let page

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  })

  afterAll(() => {
    browser.close();
  })

  it('should be called Yack Yack Yack', async () => {
    await expect(page.title()).resolves.toMatch('Yack Yack Yack')
  } )
})

