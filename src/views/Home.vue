<template>
  <div class="home">
    <Quotes
      :quotes="quotes"
      @addNewQuote="onAddNewQuote"
      @deleteByIndex="onDeleteByIndex"
      @deleteAllQuotes="onDeleteAllQuotes"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, Mutation, State } from "vuex-class";
import Quotes from "@/components/Quotes.vue";
import { QuoteEntity } from "@/entities/QuoteEntity";

const namespace = "quotes";

@Component({
  components: {
    Quotes,
  },
})
export default class Home extends Vue {
  get quotes(): QuoteEntity[] {
    return this.list;
  }

  @State("list", { namespace }) list!: QuoteEntity[];
  @Action("addQuote", { namespace }) addQuote!: () => void;
  @Mutation("deleteAll", { namespace }) deleteAll!: () => void;
  @Mutation("deleteQuote", { namespace }) deleteQuote!: (index: number) => void;

  private async onAddNewQuote() {
    await this.addQuote();
  }

  private async onDeleteAllQuotes() {
    this.deleteAll();
  }

  private async onDeleteByIndex(index: number) {
    this.deleteQuote(index);
  }
}
</script>
<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
