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
        // get the Ids of the forums in this category
        const forumsIds = Object.values(this.category.forums)

        // search the forums in the sourceData that have .key equal to the ones in this category
        return Object.values(sourceData.forums)
          .filter(forum => forumsIds.includes(forum['.key']))
      }
    }
  }
</script>

<style scoped>

</style>
