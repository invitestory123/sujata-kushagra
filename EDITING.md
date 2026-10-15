# Customer Editing Guide — Sujata & Kushagra Wedding Invitation

This template is an Udaipur starry night Hindu wedding invitation featuring dynamic star fields, Lord Ganesha blessing, couple portrait, countdown timer, event itinerary, and venue details.

---

## Normal Customer Changes

All routine customer edits are configured in:
→ [editable/wedding-data.js](file:///c:/invitestory/week7/sujata-kushagra/editable/wedding-data.js)

### Couple Profiles
Edit `couple` in `editable/wedding-data.js`:
- `bride` & `groom`: `"Sujata"` & `"Kushagra"`
- `hashtag`: `"#SujataWedsKushagra"`
- `monogram`: `"S · K"`

### Wedding Dates & Schedule
- Pre-Wedding Functions: Sunday, 29th November 2026 (Mehendi at 2:00 PM, Sangeet at 7:00 PM) at Aarambh Banquet, Jhansi
- Wedding Day: Monday, 30th November 2026 (Haldi at 9:30 AM, Swagat / Baraat at 8:00 PM, Preeti Bhoj at 8:30 PM, Vidai Late Night) at Radhika Mandapam, Jhansi

### Music
- Song: "Teri Ore" (Instrumental intro tone) — located at `editable/assets/bg-music.mp3`

### Images
- Couple portrait: `editable/assets/couple.webp`
- Palace venue photo: `editable/assets/venue-palace.webp`
- Ganesha icon: `editable/assets/ganesha.png`

---

## Rules

1. Make edits in `editable/wedding-data.js` and swap files in `editable/assets/`.
2. Verify syntax with `node --check editable/wedding-data.js` after making edits.
