<template>
 <div id="app">
     <v-app>
         <page-header></page-header>
             <v-container fluid>
             <router-view/>
             </v-container>
     </v-app>
 </div>
</template>

<script>
import pageHeader from '@/components/Head'
export default {
    components: {
      pageHeader
  },
  data () {
    return {

    }
  }
}
</script>
