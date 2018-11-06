<template>
  <div class="list">
    <template v-if="mold === 'thumbnail'" v-for="item in items">
      <router-link class="thumbnail"
      :key="item.loc_id"
      :to="{name: 'DetailView', params: {id: item.id}}">
        <div class="list__item">
          <div class="list__item-content">
            <img :src="item.image_hlarge" alt="cover">
            <p class="list__item-title">{{item.title}}</p>
            <p class="list__item-text">{{item.content | subStr(item.content)}}</p>
          </div>
          <div class="list__item-author">
            <span class="list__item-author-name">{{item.category_name}}</span>
            <span class="list__item-author-label" v-if="item.subcategory_name">
               | {{item.subcategory_name}}
            </span>
          </div>
        </div>
      </router-link>
    </template>
    <template v-if="mold === 'basic'">
      <ul class="basic">
        <li v-for="item in items" :key="item.id">
          <a href="#">
            <h3>{{items}}</h3>
            <div class="info">{{items}}</div>
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
    mold: { type: String, default: 'basic' },
    items: { type: Array, required: true },
  },
  data() {
    return {};
  },
  filters: {
    subStr: function (value) {
      let newVal = value.replace(/<.*?>/g, '')
      return newVal.slice(0, 30)
    },
  }
};
</script>

<style lang="scss" scoped>
  .list__item {
    margin-left: 0.4rem;
    margin-right: 0.4rem;
    margin-bottom: 0.4rem;
    padding-bottom: 0.8rem;
    font-family: '微软雅黑';
    border-bottom: rgba(0, 0, 0, 0.1) solid 1px;
  }
  .list__item-content {
    overflow: hidden;

    img {
      float: right;
      width: 25.6%;
      height: 8.678rem;
      margin-left: 2.5rem;
      margin-top: 1.4rem;
    }

    .list__item-title {
      font-size: 1.5rem;
      color: #494949;
    }

    .list__item-text {
      font-size: 1rem;
      color: #aaa;
    }
  }

  .list__item-author {
    color: #494949;
  }
</style>
