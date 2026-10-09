---
name: Browser audit targets
description: Avoid misleading viewport measurements when using the bundled Chromium for responsive audits.
---

Select the Chromium target whose type is `page` before applying device emulation or evaluating the website. The bundled browser also exposes extension/background and browser-interface targets; the first target is not necessarily the website.

**Why:** Auditing the first target produced a 980-pixel viewport instead of the emulated phone width, even though navigation appeared successful.

**How to apply:** In direct browser-protocol audits, explicitly select a page target and confirm its URL and viewport width before trusting layout measurements.
