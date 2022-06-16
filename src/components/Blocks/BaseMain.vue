<template>
  <main>
    <SectionJumbo/>
    <SectionStarted/>
    <SectionDiscover/>
    <SectionServices/>
  </main>
</template>

<script>

import SectionJumbo from '@/components/Sections/SectionJumbo.vue'
import SectionStarted from '@/components/Sections/SectionStarted.vue'
import SectionDiscover from '@/components/Sections/SectionDiscover.vue'
import SectionServices from '@/components/Sections/SectionServices.vue'

export default {
    name: 'BaseMain',
    components: {
      SectionJumbo,
      SectionStarted,
      SectionDiscover,
      SectionServices,
    },
}
</script>

<style lang="scss" scoped>

</style>