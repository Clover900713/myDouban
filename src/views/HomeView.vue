<template>
  <div class="home-view has-header">
    <sub-nav mold="quickNav"></sub-nav>
    <list :items="events" mold="thumbnail"></list>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import SubNav from '../components/SubNav';
import List from '../components/List';

export default {
  name: 'home-view',
  components: {
    SubNav,
    List,
  },
  data() {
    return {};
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
  },
  created () {
    this.loadMore();
  }
};
</script>

<style scoped>
  .has-header {
    margin-top: 4.8rem;
  }
</style>
