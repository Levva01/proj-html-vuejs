<template>
  <main>
    <SectionJumbo/>
    <SectionStarted/>
    <SectionDiscover/>
  </main>
</template>

<script>

import SectionJumbo from '@/components/Sections/SectionJumbo.vue'
import SectionStarted from '@/components/Sections/SectionStarted.vue'
import SectionDiscover from '@/components/Sections/SectionDiscover.vue'

export default {
    name: 'BaseMain',
    components: {
      SectionJumbo,
      SectionStarted,
      SectionDiscover,
    },
}
</script>

<style lang="scss" scoped>

</style>