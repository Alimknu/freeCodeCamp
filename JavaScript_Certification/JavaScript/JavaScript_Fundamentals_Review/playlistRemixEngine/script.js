const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122,
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108,
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128,
    },
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115,
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124,
    },
  ],
];

function flattenPlaylists(arr) {
  if (!Array.isArray(arr)) return [];

  const res = [];
  for (let p = 0; p < arr.length; p++) {
    const playlist = arr[p];
    if (!Array.isArray(playlist)) continue;
    for (let t = 0; t < playlist.length; t++) {
      const track = playlist[t];
      const trackWithSource = Object.assign({}, track, { source: [p, t] });
      res.push(trackWithSource);
    }
  }

  return res;
}

function scoreTracks(arr) {
  if (!Array.isArray(arr)) return [];

  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const src = arr[i] || {};
    const track = Object.assign({}, src);
    const votes = Number(track.votes) || 0;
    const bpm = Number(track.bpm) || 0;
    track.score = votes * 10 - Math.abs(bpm - 120);
    res.push(track);
  }

  return res;
}

function dedupeTracks(arr) {
  if (!Array.isArray(arr)) return [];

  const seen = new Set();
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const track = arr[i];
    if (!track || !track.trackId) continue;
    if (!seen.has(track.trackId)) {
      seen.add(track.trackId);
      res.push(track);
    }
  }

  return res;
}

function enforceArtistQuota(arr, max) {
  if (!Array.isArray(arr)) return [];

  const res = [];
  const counter = {};
  const limit = Number(max) || 0;

  for (let i = 0; i < arr.length; i++) {
    const track = arr[i];
    const artist = track && track.artist ? track.artist : "";
    counter[artist] = counter[artist] || 0;
    if (counter[artist] < limit) {
      res.push(track);
      counter[artist]++;
    }
  }

  return res;
}

function buildSchedule(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.map((t, i) => ({ slot: i + 1, trackId: t.trackId }));
}

function remixPlaylist(arr, max) {
  const flattened = flattenPlaylists(arr);
  const scored = scoreTracks(flattened);
  const deduped = dedupeTracks(scored);
  const quotaed = enforceArtistQuota(deduped, max);
  const schedule = buildSchedule(quotaed);
  return schedule;
}
