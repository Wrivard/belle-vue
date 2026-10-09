---
name: Vercel function runtime verification
description: Deployment functions need runtime checks independent of the TypeScript workspace loader.
---

Treat a successful workspace typecheck as insufficient evidence that a Vercel function can start. Verify the deployed entrypoint with plain Node outside the workspace and without TypeScript loader hooks.

**Why:** The live endpoint returned `FUNCTION_INVOCATION_FAILED` even for a GET request, before email configuration or delivery was involved. Workspace package exports can still point to TypeScript sources after Vercel renames compiled files; development loaders and compile-only tests conceal those runtime differences.

**How to apply:** Keep function discovery deterministic and test the final packaged entrypoint, including boot, validation, configured sending, photo attachments, and missing configuration. Use simulated provider responses; do not send real customer email during automated checks.

For future functions compiled directly by Vercel, declare module and module-resolution settings explicitly in the nearest TypeScript configuration. Vercel applies NodeNext defaults before resolving inherited settings.
