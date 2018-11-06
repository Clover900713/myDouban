<template>
  <div class="home-view has-header">
    <sub-nav mold="quickNav"></sub-nav>
    <list :items="events" mold="thumbnail"></list>
    <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
    </infinite-loading>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import SubNav from '../components/SubNav';
import List from '../components/List';
import InfiniteLoading from 'vue-infinite-loading';

export default {
  name: 'home-view',
  components: {
    SubNav,
    List,
    InfiniteLoading,
  },
  data() {
    return {
    };
  },
  computed: {
    // get data from store/modules/activities
    ...mapState({
      events: state => state.activities.events,
    }),
  },
  methods: {
    ...mapActions([
      'loadMore',
    ]),
    onInfinite() {
      setTimeout(() => {
        this.loadMore();
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
      }, 1000);
    }
  },
  created () {
    this.loadMore();
  },
};
</script>

<style scoped>
  .has-header {
    margin-top: 4.8rem;
  }
</style>
