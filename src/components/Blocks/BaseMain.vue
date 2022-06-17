<template>
  <main>
    <SectionJumbo/>
    <SectionStarted/>
    <SectionDiscover/>
    <SectionServices/>
    <SectionVideo/>
    <SectionEvents/>
    <SectionReviews/>
    <SectionNewsletters/>
  </main>
</template>

<script>

import SectionJumbo from '@/components/Sections/SectionJumbo.vue'
import SectionStarted from '@/components/Sections/SectionStarted.vue'
import SectionDiscover from '@/components/Sections/SectionDiscover.vue'
import SectionServices from '@/components/Sections/SectionServices.vue'
import SectionVideo from '@/components/Sections/SectionVideo.vue'
import SectionEvents from '@/components/Sections/SectionEvents.vue'
import SectionReviews from '@/components/Sections/SectionReviews.vue'
import SectionNewsletters from '@/components/Sections/SectionNewsletters.vue'


export default {
    name: 'BaseMain',
    components: {
      SectionJumbo,
      SectionStarted,
      SectionDiscover,
      SectionServices,
      SectionVideo,
      SectionEvents,
      SectionReviews,
      SectionNewsletters,
    },
}
</script>

<style lang="scss" scoped>

</style>