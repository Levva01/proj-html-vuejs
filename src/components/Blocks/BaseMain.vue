<template>
  <main>
    <SectionJumbo/>
    <SectionStarted/>
    <SectionDiscover/>
    <SectionServices/>
    <SectionVideo/>
  </main>
</template>

<script>

import SectionJumbo from '@/components/Sections/SectionJumbo.vue'
import SectionStarted from '@/components/Sections/SectionStarted.vue'
import SectionDiscover from '@/components/Sections/SectionDiscover.vue'
import SectionServices from '@/components/Sections/SectionServices.vue'
import SectionVideo from '@/components/Sections/SectionVideo.vue'

export default {
    name: 'BaseMain',
    components: {
      SectionJumbo,
      SectionStarted,
      SectionDiscover,
      SectionServices,
      SectionVideo,
    },
}
</script>

<style lang="scss" scoped>

</style>