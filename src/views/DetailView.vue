<template>
  <div>
    <div class="detail-view">
      <template v-show="!showLoading">
        <div class="detail-view__info">
          <p>
            {{eventItem.title}}
            <span class="detail-view__badge">{{eventItem.loc_name}}</span>
          </p>

          <div class="detail-view__poster">
            <img :src="eventItem.image_hlarge" alt="poster">
          </div>

          <div class="detail">
            <span>时间：&nbsp;&nbsp;</span>
            <ul>
              <li>{{eventItem.begin_time}}</li>
              <li>{{eventItem.end_time}}</li>
            </ul>
          </div>

          <div class="detail">
            <span>地点:&nbsp;&nbsp;</span>
            <ul>
              <li>{{eventItem.address}}</li>
            </ul>
          </div>
          <div class="detail">
            <span>费用:&nbsp;&nbsp;</span>
            <ul>
              <li>{{eventItem.fee_str}}</li>
            </ul>
          </div>
          <div class="detail">
            <span>类型:&nbsp;&nbsp;</span>
            <ul>
              <li>{{eventItem.category_name}}</li>
            </ul>
          </div>
          <div class="detail">
            <span>起始时间:&nbsp;&nbsp;</span>
            <ul>
              <li v-if="eventItem.owner">{{eventItem.owner.name}}</li>
            </ul>
          </div>
        </div>
      </template>
    </div>
    <loading v-show="showLoading"></loading>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Loading from '../components/Loading'

export default {
  name: 'detail',
  data() {
    return {
      showLoading: true,
    };
  },
  components: {
    Loading,
  },
  computed: {
    ...mapState({
      eventItem: state => state.itemDetail.eventItem,
    }),
  },
  created () {
    const id = this.$route.params.id;

    this.$store.dispatch('getSingleEvent', { id: id }).then(
      res => {
        this.showLoading = false;
      }
    );
  },
};
</script>

<style lang="sass" scoped>

</style>
