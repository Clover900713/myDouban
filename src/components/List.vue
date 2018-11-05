<template>
  <div class="list">
    <template v-if="mode === 'thumbnail'" v-for="item in items">
      <router-link class="thumbnail" :key="0">
        <div>
          <p>{{item.content}}</p>
        </div>
      </router-link>
    </template>
    <template v-if="mode === 'basic'">
      <ul class="basic">
        <li v-for="item in items" :key="0">
          <a href="#">
            <h3>{{item.title}}</h3>
            <div class="info">{{item.comments}}</div>
          </a>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: {
    mode: { type: String, default: 'basic' },
    items: { type: Array, required: true },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>

</style>
