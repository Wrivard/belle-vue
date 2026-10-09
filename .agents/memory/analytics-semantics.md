---
name: Quote delivery analytics
description: Distinguish an accepted quote submission from confirmed inbox delivery.
---

Treat a successful quote submission as accepted for email processing, not as guaranteed receipt in either recipient's inbox.

**Why:** The site now sends the client and owner messages through Resend. A provider acknowledgement can precede a bounce or other delivery failure; it is not an inbox delivery receipt.

**How to apply:** Count a submission only after the provider acknowledges both transactional messages. Report it as submitted/accepted, and use actual provider delivery statuses before claiming receipt. The former prepared-email flow is no longer the site's submission mechanism.
