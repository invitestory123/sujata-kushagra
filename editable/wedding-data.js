/**
 * wedding-data.js — Customer-facing editable data layer for midnight-stargaze
 * Sujata & Kushagra Wedding Invitation
 * 29th & 30th November 2026 · Jhansi
 */

window.WEDDING_DATA = {
  couple: {
    bride: "Sujata",
    groom: "Kushagra",
    brideFull: "Sujata",
    groomFull: "Kushagra",
    brideParents: "",
    groomParents: "",
    hashtag: "#SujataWedsKushagra",
    monogram: "S · K",
  },

  wedding: {
    dateISO: "2026-11-30T20:00:00+05:30",
    dateLabel: "Monday, 30th November 2026",
    timeLabel: "Swagat & Baraat at 8:00 PM",
  },

  venue: {
    name: "Radhika Mandapam",
    address: "Gwalior Road, Jhansi",
    mapsQuery: "Radhika Mandapam Gwalior Road Jhansi",
    mapsUrl: "https://maps.app.goo.gl/bM5s3ajjw5ixkB5NA?g_st=ac",
  },

  verse: {
    hindi: "॥ श्री गणेशाय नमः ॥",
    text: "Together with their families, Sujata and Kushagra request the honour of your presence as they embark on this beautiful journey of love and togetherness under a sky full of stars.",
  },

  events: [
    {
      name: "Pre-Wedding Functions",
      icon: "heart",
      date: "Sunday, 29th November 2026",
      dayLabel: "Sunday",
      dayNum: "29",
      monthLabel: "November 2026",
      time: "2:00 PM onwards",
      venue: "Aarambh Banquet, Gwalior Road, Thapak Bagh, Jhansi",
      mapsUrl: "https://maps.app.goo.gl/2k7C8kL5cu4V9obU6?g_st=ac",
      note: "Mehendi - 2:00 PM • Sangeet - 7:00 PM",
    },
    {
      name: "Wedding Day",
      icon: "heart",
      date: "Monday, 30th November 2026",
      dayLabel: "Monday",
      dayNum: "30",
      monthLabel: "November 2026",
      time: "Swagat / Baraat at 8:00 PM",
      venue: "Radhika Mandapam, Gwalior Road, Jhansi",
      mapsUrl: "https://maps.app.goo.gl/bM5s3ajjw5ixkB5NA?g_st=ac",
      note: "Haldi - 9:30 AM • Swagat / Baraat - 8:00 PM • Preeti Bhoj (Dinner) - 8:30 PM • Vidai (Doli) - Late Night, Under The Stars",
    },
  ],

  program: [
    { name: "Mehendi", time: "Sun, 29 Nov · 2:00 PM" },
    { name: "Sangeet", time: "Sun, 29 Nov · 7:00 PM" },
    { name: "Haldi", time: "Mon, 30 Nov · 9:30 AM" },
    { name: "Swagat / Baraat", time: "Mon, 30 Nov · 8:00 PM" },
    { name: "Preeti Bhoj (Dinner)", time: "Mon, 30 Nov · 8:30 PM" },
    { name: "Vidai (Doli)", time: "Late Night, Under The Stars" },
  ],

  venues: [
    {
      title: "Radhika Mandapam",
      name: "Radhika Mandapam",
      events: "Wedding Day · Haldi, Swagat/Baraat, Preeti Bhoj & Vidai",
      address: "Gwalior Road, Jhansi",
      mapsUrl: "https://maps.app.goo.gl/bM5s3ajjw5ixkB5NA?g_st=ac",
      mapsQuery: "Radhika Mandapam Gwalior Road Jhansi",
      date: "Monday, 30th November 2026",
    },
    {
      title: "Aarambh Banquet",
      name: "Aarambh Banquet",
      events: "Pre-Wedding Functions · Mehendi & Sangeet",
      address: "Gwalior Road, Thapak Bagh, Jhansi",
      mapsUrl: "https://maps.app.goo.gl/2k7C8kL5cu4V9obU6?g_st=ac",
      mapsQuery: "Aarambh Banquet Gwalior Road Thapak Bagh Jhansi",
      date: "Sunday, 29th November 2026",
    },
  ],

  sections: {
    events: true,
    venue: true,
    countdown: true,
  },

  music: {
    src: "./editable/assets/bg-music.mp3",
    track: "./editable/assets/bg-music.mp3",
    title: "Teri Ore (Instrumental Tone)",
    autoplay: true,
  },

  footer: {
    families: "With love, the families",
  },

  images: {
    couple: "./editable/assets/couple.webp",
    venue: "./editable/assets/venue-palace.webp",
    ganesha: "./editable/assets/ganesha.png",
  },
};