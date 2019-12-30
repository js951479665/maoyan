<template>
  <div id="move">
    <nav>
      <van-button
        @click="$router.history.push('/city')"
        style="width:70px"
        color="linear-gradient(to right, #4bb0ff, #6149f6)"
      >{{city}}</van-button>
      <van-tabs v-model="active" @click="tab">
        <van-tab title="正在上映"></van-tab>
        <van-tab title="即将上映"></van-tab>
      </van-tabs>
      <van-button icon="search" type="primary" />
    </nav>
    <div class="count">
      <div class="div" v-for="(item,index) in list" :key="index">
        <div>
          <img :src="item.img" alt />
        </div>
        <div class="divp">
          <h3>{{item.nm}}</h3>
          <p>
            观众评
            <span class="span">{{item.sc}}</span>
          </p>
          <p class="star">主演：{{item.star}}</p>
          <p>{{item.showInfo}}</p>
        </div>
        <div class="btn">购票</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    ...mapMutations(["vuextab"]),
    tab(v) {
      this.vuextab(v);
    },
    ...mapActions(["data"])
  },
  computed: {
    ...mapState(["city", "list"])
  },
  created() {
    this.data(); //vuex请求数据
  }
};
</script>
<style lang="scss">
.van-tabs {
  width: 80%;
}
nav {
  display: flex;
}
img {
  width: 64px;
  height: 90px;
}

.div {
  display: flex;
  padding: 10px;
  position: relative;

  p {
    font-size: 13px;
    color: #666;
  }
}
.span {
  font-weight: 700;
  color: #faaf00;
  font-size: 15px;
}
.btn {
  width: 47px;
  height: 27px;
  line-height: 28px;
  text-align: center;
  box-sizing: border-box;
  background-color: #f03d37;
  color: #fff;
  border-radius: 4px;
  white-space: nowrap;
  font-size: 12px;
  cursor: pointer;
  position: absolute;
  right: 10%;
  top: 36%;
}
.divp {
  padding-left: 10px;
  flex: 1;
  text-align: left;
  p:nth-child(2) {
    margin-top: 6px;
  }
}
.van-tab--active {
  color: #ef4238;
}
.van-tab {
  font-weight: bold;
}
nav {
  position: fixed;
  width: 100vw;
  top: 7.4%;
  z-index: 5;
}
.count {
  margin-top: 12%;
}
.star {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 170px;
}
</style>
