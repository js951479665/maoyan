<template>
  <div id="app">
    <header>猫眼电影</header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <van-tabbar v-model="active">
        <van-tabbar-item replace to="/home/move" icon="home-o">电影</van-tabbar-item>
        <van-tabbar-item replace to="/home/yingyuan" icon="search">影院</van-tabbar-item>
        <van-tabbar-item replace to="/home/my" icon="friends-o">我的</van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>


<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>
<style lang='scss'>
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-size: 14px;
}
html {
  font-size: 13.333333vw;
}
* {
  padding: 0;
  margin: 0;
  user-select: none;
}
header {
  width: 100vw;
  height: 1rem;
  background: #e54847;
  color: white;
  line-height: 1rem;
  font-size: 20px;
}
footer {
  width: 100vw;
  height: 1rem;
}

main {
  flex: 1;
  overflow: scroll;
}
footer {
  .van-tabbar-item--active {
    color: #e54847;
  }
}
</style>


