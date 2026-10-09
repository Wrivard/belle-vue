---
name: Vercel TypeScript defaults
description: Why local workspace type checks can pass while Vercel rejects shared function imports.
---

Declare the serverless function's module and module-resolution settings explicitly in its nearest TypeScript configuration, rather than only inheriting them.

**Why:** Vercel's Node builder applies NodeNext defaults to the raw configuration before TypeScript resolves `extends`. This can override inherited ESNext/Bundler settings, causing extensionless workspace exports to disappear and shared relative imports to fail even when local type checks pass.

**How to apply:** Keep the function configuration explicit and validate source imports without relying on prebuilt workspace declarations. Ordinary workspace type checking alone does not reproduce this deployment-specific behavior.
