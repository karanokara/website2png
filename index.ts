import puppeteer from 'puppeteer';

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function run(site: string) {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({
        headless: "new"
    });
    const page = await browser.newPage();

    // Provide credentials for Windows authentication
    // await page.authenticate({
    //     username: "",
    //     password: ""
    // });

    // Navigate the page to a URL
    await page.goto(site);

    // Set screen size
    await page.setViewport({ width: 1200, height: 1200 });

    // wait for a while for page to load content
    await sleep(10 * 1000);

    // Type into search box
    await page.screenshot({ path: 'example3.png' });

    // close browser
    await browser.close();

    console.log("done");
}

async function main() {
    let pathToNode = process.argv[0];
    let pathToJS = process.argv[1];
    let site = process.argv[2];
    // let site = process.argv[2];

    await run(site);
}

main();
