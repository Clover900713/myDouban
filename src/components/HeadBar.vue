<template>
  <div class="header-bar">
    <h1 class="title">
      <router-link :to="{ name: 'HomeView' }">豆瓣</router-link>
    </h1>
    <ul>
      <li>
        <router-link style="color: #2384e8" :to="{ name: 'MovieView' }">
          电影
        </router-link>
      </li>
      <li>
        <router-link style="color: #9f7860" :to="{ name: 'BookView'}">
          图书
        </router-link>
      </li>
      <li>
        <router-link style="color: #E4A813" :to="{ name: 'BroadcastView'}">
          广播
        </router-link>
      </li>
      <li>
        <router-link style="color: #2AB8CC" :to="{ name: 'Group' }">
          小组
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.header-bar {
  overflow: hidden;
  .title {
    float: left;
    max-width: 4.6rem;
    max-height: 2.2rem;
    margin: 0;
    margin-right: 1.8rem;
    color: #00b600;
    word-break: break-all;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: flex-end;
  }

  ul li {
    display: inline-block;
    font-size: 1.6rem;
    margin-right: 1.2rem;

  }
}

</style>

