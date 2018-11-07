<template>
  <div class="movie-view">
    <scroller title="影院热映" :items="{test: 11}"></scroller>
    <scroller title="免费在线观影" :items="{test: 11}"></scroller>
    <scroller title="新片速递" :items="{test: 11}"></scroller>
  </div>
</template>

<script>
import Scroller from '../components/Scroller';

export default {
  name: 'movie-view',
  components: {
    Scroller,
  },
  data() {
    return {};
  },

};
</script>

<style lang="scss" scoped>

</style>
