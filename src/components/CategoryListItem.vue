<template>
  <div class="forum-list">
    <h2 class="list-title">
      <router-link :to="{name: 'Category', params: {id: category['.key']}}">
        {{ category.name }}
      </router-link>
    </h2>
    <ForumList :forums="categoryForums"/>
  </div>
</template>

<script>
  import ForumList from '@/components/ForumList'
  import sourceData from '@/data.json'

  export default {
    props: {
      category: {
        required: true,
        type: Object
      }
    },
    components: {
      ForumList
    },
    computed: {
      categoryForums () {
        return Object.values(sourceData.forums)
          .filter(forum => forum.categoryId === this.category['.key'])
      }
    }
  }
</script>

<style scoped>

</style>
