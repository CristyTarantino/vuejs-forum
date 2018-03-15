<template>
  <div>
    <div class="col-large push-top">
      <h1>{{thread.title}}</h1>
      <PostList :posts="posts"/>

      <form @submit.prevent="addPost">
        <div class="form-group">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            class="form-input"
            v-model="newPostText"
          ></textarea>
        </div>

        <div class="form-actions">
          <button class="btn-blue">Submit post</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import sourceData from '@/data.json'
  import PostList from '@/components/PostList'

  console.log(sourceData)

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
      addPost () {
        const postId = 'greatPost' + Math.random()

        const post = {
          text: this.newPostText,
          publishedAt: Math.floor(Date.now() / 1000),
          threadId: this.id,
          userId: 'jUjmgCurRRdzayqbRMO7aTG9X1G2',
          '.key': postId
        }

        this.$set(sourceData.posts, postId, post)
        this.$set(this.thread.posts, postId, postId)
        this.$set(sourceData.users[post.userId].posts, postId, postId)
        this.newPostText = ''
      }
    }
  }
</script>

<style scoped>

</style>
