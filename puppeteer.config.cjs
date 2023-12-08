const { join } = require('path');

/**
 * @type {import("puppeteer").Configuration}
 * 
 * After adding the configuration file, you will need to remove and reinstall puppeteer for it to take effect.
 */
module.exports = {
    // Changes the cache location for Puppeteer.
    cacheDirectory: join(__dirname, '.cache', 'puppeteer'),
};