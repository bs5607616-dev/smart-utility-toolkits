# Smart Utility Toolkit

Lab Assignment 1 - Node.js core modules (process, http, fs, crypto).

## Files
- `calculator.js` — CLI calculator (process.argv)
- `modules/isEven.js`, `modules/logger.js` — custom reusable modules
- `app.js` — demonstrates importing & reusing the custom modules
- `server.js` — HTTP server with /, /about, /contact routes + 404 handling
- `fileManager.js` — Create/Read/Update/Delete using fs module
- `dice.js` — random dice roller using crypto module

## How to run each part

```bash
node calculator.js add 10 5
node app.js
node server.js        # then visit http://localhost:3000/
node fileManager.js
node dice.js
```
