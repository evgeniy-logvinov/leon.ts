<template>
  <div class="quotes">
    <div class="quotes__title">
      <h3 v-if="!quotes.length">Quotes is empty, please add new quote</h3>
      <h3 v-else>Great! Don't stop!</h3>
    </div>
    <ul class="quotes__items">
      <li v-for="(quote, index) in quotes" :key="quote.quote + index">
        <button class="quotes__item__delete" @click="deleteByIndex(index)">
          -
        </button>
        <span class="quotes__item__name">{{ quote.quote }}</span>
      </li>
    </ul>
    <div class="quotes__buttons">
      <button @click="addNewQuote" class="quotes__buttons__item">
        Add new quote
      </button>
      <button @click="deleteAllQuotes">Delete all quotes</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Quotes extends Vue {
  @Prop() private quotes!: string[];

  private addNewQuote(): void {
    this.$emit("addNewQuote");
  }

  private deleteAllQuotes(): void {
    this.$emit("deleteAllQuotes");
  }

  private deleteByIndex(index: number): void {
    this.$emit("deleteByIndex", index);
  }
}
</script>

<style scoped lang="scss">
.quotes {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__item {
    display: flex;
    text-align: left;
    flex-direction: row;
    justify-content: center;

    &__delete {
      margin-left: 16px;
      margin-right: 8px;
    }
    :not(:last-child) {
      margin-bottom: 8px;
    }
  }

  &__title {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  &__buttons {
    width: 20%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    &__item {
      margin-right: 8px;
    }
  }
}
ul {
  list-style-type: none;
}
</style>
