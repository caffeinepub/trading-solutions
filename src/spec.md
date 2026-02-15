# Specification

## Summary
**Goal:** Add a Pricing/Purchase plans section and a Stock Specialists content section to the Trading Solutions landing page, and expose both via header navigation.

**Planned changes:**
- Add a new Pricing/Purchase section to `frontend/src/pages/ContentPage.tsx` with anchor id `pricing`, showing exactly three shadcn-style plan cards: “Foundation plan ; 75k”, “Growth plan ; 125k”, and “Loss recovery Specialist ;175k”, each with a non-payment CTA (e.g., scroll to Contact or open an inquiry state).
- Add a new Stock Specialists section to `frontend/src/pages/ContentPage.tsx` with anchor id `specialists`, presenting English specialist-focused content (cards/bullets) aligned with existing educational/disclaimer positioning and without guaranteeing returns.
- Update header navigation in `frontend/src/components/AppLayout.tsx` to include links to `#pricing` and `#specialists` while keeping existing Home/About/Contact links working.

**User-visible outcome:** Visitors can navigate to new Pricing/Purchase and Stock Specialists sections from the header, review the three plans with CTAs, and read stock-specialist-focused information without any checkout/payment flow.
