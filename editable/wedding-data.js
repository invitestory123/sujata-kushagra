/**
 * wedding-data.js — Customer-facing editable data layer for midnight-stargaze
 * Sujata & Kushagra Wedding Invitation
 */

window.WEDDING_DATA = {
  couple: {
    groom: "Kushagra",
    bride: "Sujata",
    groomFull: "Kushagra",
    brideFull: "Sujata",
    groomParents: "With love and blessings of Family & Friends",
    brideParents: "With love and blessings of Family & Friends",
    hashtag: "#SujataWedsKushagra",
    monogram: "S · K",
  },

  wedding: {
    dateISO: "2026-11-30T19:00:00+05:30",
    dateLabel: "Monday, 30th November 2026",
    timeLabel: "Baraat Departure at 7:00 PM",
  },

  venue: {
    name: "Radhika Mandapam",
    address: "Gwalior Road, Jhansi, Uttar Pradesh 284003",
    mapsQuery: "Radhika Mandapam, Gwalior Road, Jhansi",
  },

  verse: {
    hindi: "॥ श्री गणेशाय नमः ॥",
    text: "Together with their families, Sujata and Kushagra request the honour of your presence as they unite in marriage under the starry sky.",
  },

  events: [
    {
      name: "The Wedding",
      icon: "heart",
      date: "Monday, 30th November 2026",
      dayLabel: "Monday",
      dayNum: "30",
      monthLabel: "November 2026",
      time: "Baraat at 7:00 PM",
      venue: "Radhika Mandapam, Gwalior Road, Jhansi",
      note: "Tika, Pujan & Panigrahan Sanskar • Baraat departs from Siddheshwar Mandir",
    },
  ],

  program: [
    {
      name: "Bhagyapada Sthapana / Anshudan",
      time: "Sat, 28 Nov · Home",
    },
    {
      name: "Matrika Pujan",
      time: "Sun, 29 Nov · Home",
    },
    {
      name: "Baraat Departure (Siddheshwar Mandir)",
      time: "Mon, 30 Nov · 7:00 PM",
    },
    {
      name: "Tika, Pujan & Panigrahan Sanskar",
      time: "Mon, 30 Nov · Radhika Mandapam",
    },
    {
      name: "Vadhu Aagaman (Bride's Arrival Home)",
      time: "Tue, 1 Dec · Home",
    },
  ],

  sections: {
    events: true,
    venue: true,
    countdown: true,
  },

  music: {
    src: "./editable/assets/bg-music.mp3",
    title: "Jashn-E-Bahaaraa",
    autoplay: true,
  },

  images: {
    couple: "./editable/assets/couple.webp",
    venue: "./editable/assets/venue-palace.webp",
    ganesha: "./editable/assets/ganesha.png",
  },
};