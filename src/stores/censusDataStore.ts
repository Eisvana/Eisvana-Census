import type { CensusEntry } from '@/types/censusQueryResponse';
import { defineStore } from 'pinia';

interface CensusData {
  censusData: CensusEntry[];
}

export const useCensusDataStore = defineStore('censusData', {
  state: (): CensusData => ({
    censusData: [],
  }),

  getters: {
    censusCount: (state) => state.censusData.length,
    availableRevisions: (state) => {
      const revisionArray = state.censusData.flatMap((item) => item.CensusRenewal);
      const uniqueRevisions = new Set(revisionArray);
      const uniqueRevisionArray = Array.from(uniqueRevisions);
      const revisionNumbers = uniqueRevisionArray.map(Number);
      const sortedRevisions = revisionNumbers.toSorted((a: number, b: number) => b - a);
      return sortedRevisions.map(String);
    },
  },
});
