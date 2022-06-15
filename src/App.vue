<template>
  <div id="app">
    <BaseHeader/>
    <BaseMain/>
    <BaseFooter/>
  </div>
</template>

<script>
import BaseHeader from './components/Blocks/BaseHeader.vue'
import BaseMain from './components/Blocks/BaseMain.vue'
import BaseFooter from './components/Blocks/BaseFooter.vue'

export default {
  name: 'App',
  components: {
    BaseHeader,
    BaseMain,
    BaseFooter
  }
}
</script>

<style lang="scss">

</style>
