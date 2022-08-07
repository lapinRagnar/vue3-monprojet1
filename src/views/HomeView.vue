<template>
  <div class="home">
    <HelloWorld 
      msg="Welcome to Your Vue.js App"
      message = "salut ceci est mon message"
      />

      <p>{{bonjour}}</p>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   name: 'HomeView',
//   components: {
//     HelloWorld
//   }
// }
// </script>

<script setup>
const bonjour = 'bonjour'

</script>
