import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { quotes } from "@/store/modules";
import { RootState } from "@/entities/store/RootState";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
    quotes,
  },
};

export default new Vuex.Store<RootState>(store);
