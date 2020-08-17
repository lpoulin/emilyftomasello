<template>
  <v-app>
    <Toolbar></Toolbar>
    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Toolbar from './components/Toolbar'

export default {
  name: 'App',

  components: {
    HelloWorld,
    Toolbar
  },

  data: () => ({
    //
  }),
};
</script>
