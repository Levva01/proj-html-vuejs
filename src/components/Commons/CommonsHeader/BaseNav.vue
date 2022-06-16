<template>
  <nav class="header__nav">

    <ul>

        <li>Home <font-awesome-icon class="arrow-down"  icon="fa-solid fa-chevron-down" /></li>
        <li>Pages <font-awesome-icon class="arrow-down"  icon="fa-solid fa-chevron-down" /></li>
        <li>Course <font-awesome-icon class="arrow-down"  icon="fa-solid fa-chevron-down" /></li>
        <li>Features <font-awesome-icon class="arrow-down"  icon="fa-solid fa-chevron-down" /></li>
        <li>Blog <font-awesome-icon class="arrow-down"  icon="fa-solid fa-chevron-down" /></li>
        <li>Shop <font-awesome-icon class="arrow-down"  icon="fa-solid fa-chevron-down" /></li>

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
            gap: 1.875rem;
            li{
                list-style-type: none;

                .arrow-down{
                    font-size: 13px;
                }

            }
        }
    }


</style>