import Vue from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


/* import specific icons */
import { faArrowRightLong, faChevronDown, faCircleChevronDown, faCircleChevronUp, faCircleUser, faMagnifyingGlass, faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)
library.add(faCircleUser)
library.add(faMagnifyingGlass)
library.add(faChevronDown)
library.add(faArrowRightLong)
library.add(faCircleChevronUp)
library.add(faCircleChevronDown)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
