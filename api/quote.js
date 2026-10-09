// Keep a tracked entrypoint so Vercel discovers the API before the build runs.
// The build creates a standalone bundle; no TypeScript workspace imports here.
module.exports = require('../lib/quote-mail/dist/vercel.cjs').default;
