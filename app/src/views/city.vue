<template>
  <div class="citylist">
    <van-index-bar :index-list="indexList" highlight-color="red">
      <template v-for="(item,index) in citylist">
        <van-index-anchor :key="index" :index="item.initial">{{item.initial}}</van-index-anchor>
        <van-cell
          @click="citydian(item2.name)"
          v-for="(item2,index2) in item.list"
          :key="index2"
          :title="item2.name"
        />
      </template>
    </van-index-bar>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      data: [],
      indexList: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "M",
        "N",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "W",
        "X",
        "Y",
        "Z"
      ]
    };
  },
  computed: {
    ...mapState(["citylist"])
  },
  methods: {
    ...mapActions(["actionCity"]),
    ...mapMutations(["vuexcity"]),
    citydian(name) {
      this.vuexcity(name);
      this.$router.history.push("/home/move");
    }
  },
  created() {
    this.actionCity();
  }
};
</script>
<style lang="scss">
</style>