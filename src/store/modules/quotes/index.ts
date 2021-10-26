import { ActionContext, Module } from "vuex";
import { QuoteState } from "@/entities/store/QuoteState";
import { RootState } from "@/entities/store/RootState";
import { QuoteEntity } from "@/entities/QuoteEntity";
import QuoteService from "@/services/QuoteService";

const state = (): QuoteState => ({
  list: [],
});

const actions = {
  getAll({ state }: ActionContext<QuoteState, RootState>): QuoteEntity[] {
    return state.list;
  },
  async addQuote({
    commit,
  }: ActionContext<QuoteState, RootState>): Promise<void> {
    const quote = await QuoteService.get();
    commit("addQuote", quote);
  },
};

const mutations = {
  addQuote(currentState: QuoteState, quote: QuoteEntity): void {
    currentState.list.push(quote);
  },

  deleteQuote(currentState: QuoteState, index: number): void {
    currentState.list.splice(index, 1);
  },

  deleteAll(currentState: QuoteState): void {
    currentState.list = [];
  },
};

const namespaced = true;

const quotes: Module<QuoteState, RootState> = {
  namespaced,
  state,
  actions,
  mutations,
};

export default quotes;
