<template>
  <nav class="header__nav">

    <ul>

        <li>Home &#709;</li>
        <li>Pages &#709;</li>
        <li>Course &#709;</li>
        <li>Features &#709;</li>
        <li>Blog &#709;</li>
        <li>Shop &#709;</li>

    </ul>

  </nav>
</template>

<script>
export default {
    name: 'BaseNav',
}
</script>

<style lang="scss" scoped>

    .header__nav{
        ul{
            display: flex;
            gap: .9375rem;
            li{
                list-style-type: none;
            }
        }
    }


</style>