<template>
  <div class="sub-nav" v-if="mold === 'quickNav'">
    <ul class="quick-nav">
      <li>
        <router-link :to="{name: 'MovieView'}">影院热线</router-link>
      </li>
      <li>
        <router-link :to="{name: 'BroadcastView'}">欧美新碟榜</router-link>
      </li>
      <li>
        <router-link :to="{name: 'RegisterView'}">注册账号</router-link>
      </li>
      <li>
        <router-link :to="{name: 'LoginView'}">登录豆瓣</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'sub-nav',
  data() {
    return {};
  },
  props: {
    mold: {
      type: String,
      default: 'quickNav',
    },
  },
};
</script>

<style lang="scss" scoped>
.quick-nav {
  overflow: hidden;
  li {
    float: left;
    padding: 0.3rem;
    width: 50%;
    font-size: 1.5rem;
    text-align: center;
    box-sizing: border-box;
  }

  a {
    display: block;
    max-width: 100%;
    background-color: #f6f6f6;
    color: #494949;
    padding: 1.2rem 0;
    line-height: 2rem;
    border-radius: 0.3rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
  }
}
</style>
