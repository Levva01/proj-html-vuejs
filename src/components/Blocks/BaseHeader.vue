<template>
  <header class="header">

    <BaseLogo/>
    <BaseNav/>
    <BaseImpo/>

  </header>
</template>

<script>

import BaseLogo from '@/components/Commons/CommonsHeader/BaseLogo.vue'
import BaseNav from '@/components/Commons/CommonsHeader/BaseNav.vue'
import BaseImpo from '@/components/Commons/CommonsHeader/BaseImpo.vue'


export default {
    name: 'BaseHeader',
    components: {
      BaseLogo,
      BaseNav,
      BaseImpo,
    },
}
</script>

<style lang="scss" scoped>
  .header{
    margin-left: 100px;
    margin-right: 1.25rem;
    display: flex;
    align-items: center;
    height: 6.25rem;
    padding: 0 .625rem;
    justify-content: space-between;
  }
</style>