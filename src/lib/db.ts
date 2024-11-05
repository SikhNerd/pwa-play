import initSqlJs from 'sql.js';
import { create } from 'zustand';

export interface SearchResult {
  id: number;
  shabadId: number;
  gurmukhi: string;
}

export interface ShabadVerse {
  gurmukhi: string;
}

interface DbState {
  db: initSqlJs.Database | null;
  loading: boolean;
  error: string | null;
  results: SearchResult[];
  shabadVerses: ShabadVerse[];
  initialize: () => Promise<void>;
  search: (query: string) => Promise<void>;
  getShabad: (shabadId: number) => Promise<void>;
}

const DB_URL = 'https://storage.googleapis.com/khalis-temp-sqlite-public/banidb.sqlite';
const DB_CACHE_KEY = 'banidb-cache-timestamp';
const CACHE_DURATION = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds

async function fetchWithCache(url: string): Promise<ArrayBuffer> {
  // First, try to get from IndexedDB cache
  try {
    const cache = await caches.open('sqlite-cache');
    const cachedResponse = await cache.match(url);
    const cachedTimestamp = localStorage.getItem(DB_CACHE_KEY);
    const now = Date.now();

    if (cachedResponse && cachedTimestamp) {
      const age = now - parseInt(cachedTimestamp);
      if (age < CACHE_DURATION) {
        console.log('Using cached database');
        return cachedResponse.arrayBuffer();
      }
    }
  } catch (error) {
    console.warn('Cache access failed:', error);
  }

  // If not in cache or expired, fetch fresh data
  console.log('Fetching fresh database');
  const response = await fetch(url);
  if (!response.ok) throw new Error('Network response was not ok');
  
  // Cache the new response
  try {
    const cache = await caches.open('sqlite-cache');
    await cache.put(url, response.clone());
    localStorage.setItem(DB_CACHE_KEY, Date.now().toString());
  } catch (error) {
    console.warn('Cache write failed:', error);
  }
  
  return response.arrayBuffer();
}

export const useDbStore = create<DbState>((set, get) => ({
  db: null,
  loading: false,
  error: null,
  results: [],
  shabadVerses: [],

  initialize: async () => {
    const { db } = get();
    if (db) return; // Already initialized

    try {
      set({ loading: true, error: null });
      
      const SQL = await initSqlJs({
        locateFile: (file) => `https://sql.js.org/dist/${file}`,
      });

      const arrayBuffer = await fetchWithCache(DB_URL);
      const db = new SQL.Database(new Uint8Array(arrayBuffer));

      set({ db, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
      console.error('Database initialization failed:', error);
    }
  },

  search: async (query: string) => {
    const { db } = get();
    if (!db) {
      set({ error: 'Database not initialized', results: [] });
      return;
    }

    try {
      set({ loading: true, error: null });

      const results = db.exec(`
        SELECT Verse.ID, Shabad.ShabadID, Verse.GurmukhiUni as gurmukhi
        FROM Verse 
        JOIN Shabad ON Shabad.VerseID = Verse.ID
        WHERE Verse.FirstLetterEng LIKE '%${query}%'
        LIMIT 20
      `);

      const searchResults: SearchResult[] = results.length
        ? results[0].values.map((row) => ({
            id: row[0] as number,
            shabadId: row[1] as number,
            gurmukhi: row[2] as string,
          }))
        : [];

      set({ results: searchResults, loading: false });
    } catch (error) {
      set({
        error: (error as Error).message,
        results: [],
        loading: false,
      });
    }
  },

  getShabad: async (shabadId: number) => {
    const { db } = get();
    if (!db) {
      set({ error: 'Database not initialized', shabadVerses: [] });
      return;
    }

    try {
      set({ loading: true, error: null });

      const results = db.exec(`
        SELECT Verse.GurmukhiUni
        FROM Verse
        JOIN Shabad ON Shabad.VerseID = Verse.ID
        WHERE Shabad.ShabadID = ${shabadId}
        ORDER BY Shabad.VerseID;
      `);

      const verses: ShabadVerse[] = results.length
        ? results[0].values.map((row) => ({
            gurmukhi: row[0] as string,
          }))
        : [];

      set({ shabadVerses: verses, loading: false });
    } catch (error) {
      set({
        error: (error as Error).message,
        shabadVerses: [],
        loading: false,
      });
    }
  },
}));