<template>
  <div>
    <div class="col-large push-top">
      <h1>{{thread.title}}</h1>
      <PostList :posts="posts"/>
      <PostEditor
        @save="addPost"
        :threadId="id"
      />
    </div>
  </div>
</template>

<script>
  import sourceData from '@/data.json'
  import PostList from '@/components/PostList'
  import PostEditor from '@/components/PostEditor'

  console.log(sourceData)

  export default {
    components: {
      PostList,
      PostEditor
    },
    props: {
      id: {
        required: true,
        type: String
      }
    },
    data () {
      return {
        thread: sourceData.threads[this.id],
        newPostText: ''
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
    },
    methods: {
      addPost (eventData) {
        console.log(eventData)
        const post = eventData.post
        const postId = eventData.post['.key']

        this.$set(sourceData.posts, postId, post)
        this.$set(this.thread.posts, postId, postId)
        this.$set(sourceData.users[post.userId].posts, postId, postId)
      }
    }
  }
</script>

<style scoped>

</style>
