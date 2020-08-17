<template>
  <v-app-bar
      app
      color="primary"
      dark
      height="120px"
    >
    <v-container fluid>
        <v-toolbar-title>Emily Tomasello</v-toolbar-title>
    </v-container>
    <v-spacer></v-spacer>
        <v-btn text class="nav-link">Home</v-btn>
        <v-btn text class="nav-link">Photography</v-btn>
    
    </v-app-bar>
</template>

<script>
export default {
    name: 'Toolbar'
}
</script>

<style scoped>
    .header-container {
    }
    .nav-link {
        color: #fff;
    }
</style>
