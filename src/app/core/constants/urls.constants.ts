const AGS_STATS_BASE = 'https://api.stats-tsg.de/api';

export const URLS = {
  AGS_STATS: {
    MARKET: {
      MARKET: `${AGS_STATS_BASE}/markt`,
      DEPOT: `${AGS_STATS_BASE}/markt/depot`,
      ORDER: `${AGS_STATS_BASE}/markt/order`,
      COVER: `${AGS_STATS_BASE}/markt/schutz`,
      PREMIUM: `${AGS_STATS_BASE}/markt/premium`,
    },
    SHARE: {
      ALL: `${AGS_STATS_BASE}/ag`,
      WKN: (wkn: string) => `${AGS_STATS_BASE}/ag/${wkn}`,
    },
    INDEX: {
      ALL: `${AGS_STATS_BASE}/index`,
      ID: (id: string) => `${AGS_STATS_BASE}/index/${id}`,
    },
    TREEMAP: {},
  },
};
