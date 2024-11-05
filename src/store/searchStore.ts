import { create } from 'zustand';
import { createDb } from '../lib/db';
import type { SearchResult } from '../lib/db';

interface SearchState {
  query: string;
  results: SearchResult[];
  isLoading: boolean;
  error: string | null;
  worker: any;
  setQuery: (query: string) => void;
  initDb: () => Promise<void>;
  search: () => Promise<void>;
}

export const useSearchStore = create<SearchState>((set, get) => ({
  query: '',
  results: [],
  isLoading: false,
  error: null,
  worker: null,

  setQuery: (query) => set({ query }),

  initDb: async () => {
    try {
      const worker = await createDb();
      set({ worker });
    } catch (error) {
      set({ error: 'Failed to initialize database' });
    }
  },

  search: async () => {
    const { query, worker } = get();
    if (!worker || !query.trim()) {
      set({ results: [] });
      return;
    }

    set({ isLoading: true, error: null });

    try {
      const result = await worker.db.query(`
        SELECT id, title, description, category
        FROM items
        WHERE title LIKE '%' || ? || '%'
        OR description LIKE '%' || ? || '%'
        LIMIT 50
      `, [query, query]);

      set({ results: result as SearchResult[], isLoading: false });
    } catch (error) {
      set({ error: 'Search failed', isLoading: false });
    }
  },
}));