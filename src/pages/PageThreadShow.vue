<template>
  <div>
    <div class="col-large push-top">
      <h1>{{thread.title}}</h1>
      <PostList :posts="posts" />
    </div>
  </div>
</template>

<script>
  import sourceData from '@/data.json'
  import PostList from '@/components/PostList'
  
  export default {
    components: {
      PostList
    },
    props: {
      id: {
        required: true,
        type: String
      }
    },
    data () {
      return {
        thread: sourceData.threads[this.id]
      }
    },
    computed: {
      posts () {
        // get the Ids of the posts in this thread
        const postIds = Object.values(this.thread.posts)

        // search the posts in the sourceData that have .key equal to the ones in this thread
        return Object.values(sourceData.posts)
          .filter(post => postIds.includes(post['.key']))
      }
    }
  }
</script>

<style scoped>

</style>
