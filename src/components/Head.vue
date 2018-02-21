<template>
        <v-toolbar flat class="cyan" dark>
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title class="title">
                <v-btn flat :to="{name:'home'}">
                    Title
                </v-btn>
                </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat :to="{name:'CreateWed'}">Add Wedding image</v-btn>
                <v-btn flat>Link Two</v-btn>
                <v-btn flat>Link Three</v-btn>
            </v-toolbar-items>
        </v-toolbar>
</template>

<script>
export default{
    data () {
        return {

        }
    },
    methods: {
      navigateTo(route) {
        this.$router.push(route)
      }
    }
}

</script>

<style scoped>
.title{
    cursor: pointer;
}
</style>
