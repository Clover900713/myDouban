<template>
  <div>
    <header-bar>douban</header-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderBar from '../components/HeadBar';

export default {
  name: 'pages-view',
  components: {
    HeaderBar,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>
