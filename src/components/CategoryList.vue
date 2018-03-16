<template>
  <div class="category-list">

    <h2 class="list-title">
      <a href="#">Categories</a>
    </h2>

    <CategoryListItem
      v-for="category in categories"
      :category="category"
      :key="category['.key']"
    />
  </div>
</template>

<script>
  import CategoryListItem from '@/components/CategoryListItem'

  export default {
    components: {
      CategoryListItem
    },
    props: {
      categories: {
        required: true,
        type: Array
      }
    }
  }
</script>

<style scoped>

</style>
