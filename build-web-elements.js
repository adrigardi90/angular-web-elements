const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        './dist/angular-web-elements//runtime.js',
        './dist/angular-web-elements//polyfills.js',
        './dist/angular-web-elements//scripts.js',
        './dist/angular-web-elements//main.js',
    ]
    await fs.ensureDir('web-elements')
    await concat(files, 'web-elements/my-element.js');
    await fs.copyFile('./dist/angular-web-elements/styles.css', 'web-elements/styles.css');
    await fs.copy('./dist/angular-web-elements/assets/', 'web-elements/assets/' );

})()
