---
name: Quote analytics semantics
description: Distinguish quote-email intent from a confirmed submission when reporting conversions.
---

Treat requesting the prepared quote email as an intent event, not a confirmed lead or successfully sent submission.

**Why:** Opening a mail application provides no delivery receipt; the visitor can cancel or have no mail application configured. Counting it as a submitted quote would misrepresent business outcomes.

**How to apply:** Preserve this distinction when naming events and reporting funnels. Only introduce a confirmed-submission metric if a future delivery mechanism provides a reliable acknowledgement.
