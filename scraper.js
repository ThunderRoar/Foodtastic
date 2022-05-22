const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('');
    console.log(el);
    const src = await el.getProperty('src');
    const srcTxT = await src.jsonValue();

    console.log({srcTxT});

    browser.close();
}

//var code = window.prompt("Enter your postal code: ");
var code = "M1W3G1";

//const flyerList = ['/en-ca/scarborough-on/flyer/4887295-no-frills-summer-insiders-report?postal_code=M1W3G1', '/en-ca/scarborough-on/flyer/4910299-voila-flyer-deals?postal_code=M1W3G1', '/en-ca/scarborough-on/flyer/4873577-metro-heinz-bbq-season-starts-here?postal_code=M1W3G1'];
const flyerList = ['4887295-no-frills-summer-insiders-report', '4910299-voila-flyer-deals', '4873577-metro-heinz-bbq-season-starts-here'];

//scrapeProduct('https://flipp.com/en-ca/scarborough-on/flyers/groceries?postal_code=%27+code);
//scrapeProduct('https://flipp.com/' + flyerList[0]);
// scrapeProduct('https://flipp.com/en-ca/scarborough-on/flyers/groceries?postal_code=%27+code)