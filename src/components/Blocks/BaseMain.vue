<template>
  <main>
    <SectionJumbo/>
    <SectionStarted/>
  </main>
</template>

<script>

import SectionJumbo from '@/components/Sections/SectionJumbo.vue'
import SectionStarted from '@/components/Sections/SectionStarted.vue'

export default {
    name: 'BaseMain',
    components: {
      SectionJumbo,
      SectionStarted,
    },
}
</script>

<style lang="scss" scoped>

</style>