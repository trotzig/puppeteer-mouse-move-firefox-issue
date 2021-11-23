# Puppeteer: Bug with `page.mouse.move` in Firefox

This repro can be used to reproduce a bug I've seen at happo.io with Firefox
hanging indefinitely on calls to `page.mouse.move()` when the input arguments
are off-screen.

## Usage
1. Clone this repo
2. Run `PUPPETEER_PRODUCT=firefox npm install`
3. Run `node index.js`
4. Notice how the `page.mouse.move()` call never resolves
