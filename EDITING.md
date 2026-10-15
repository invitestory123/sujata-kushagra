# Customer Editing Guide — Kushagra & Sujata Wedding Invitation

This template is an Udaipur starry night Hindu wedding invitation featuring dynamic star fields, Lord Ganesha blessing, couple portrait, countdown timer, event itinerary, and venue details.

---

## Normal Customer Changes

All routine customer edits are configured in:
→ [editable/wedding-data.js](file:///editable/wedding-data.js)

### Couple Profiles
Edit `couple` in `editable/wedding-data.js`:
- `groom` & `bride`: `"Kushagra"` & `"Sujata"`
- `hashtag`: `"#SujataWedsKushagra"`
- `monogram`: `"S · K"`

### Wedding Festivities & Schedule
- **Saturday, 28th Nov 2026**: Bhagyapada Sthapana / Anshudan (Home: 402/1 CP Mission Compound, Jhansi)
- **Sunday, 29th Nov 2026**: Matrika Pujan (Home: 402/1 CP Mission Compound, Jhansi)
- **Monday, 30th Nov 2026 (Wedding Day)**:
  - Baraat Departure: 7:00 PM from Siddheshwar Mandir
  - Tika, Pujan & Panigrahan Sanskar at Radhika Mandapam, Gwalior Road, Jhansi
- **Tuesday, 1st Dec 2026**: Vadhu Aagaman (Bride's Arrival Home)

### Music
- Song: "Jashn-E-Bahaaraa" — located at `editable/assets/bg-music.mp3`

### Images
Replace files directly in `editable/assets/` or update paths in `editable/wedding-data.js`:
- Couple portrait: `editable/assets/couple.webp`
- Palace venue photo: `editable/assets/venue-palace.webp`
- Ganesha icon: `editable/assets/ganesha.png`

---

## Rules

1. Make edits in `editable/wedding-data.js` and swap files in `editable/assets/`.
2. Verify syntax with `node --check editable/wedding-data.js` after making edits.
