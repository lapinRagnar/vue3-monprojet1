<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <div>
    
    <Particles
    id="tsparticles"
    :options="{
      fpsLimit: 120,
      background: {
        color: '#000',
      },
      particles: {
        color: { value: '#ffffff' },
        move: {
          direction: 'none',
          enable: true,
          outModes: 'out',
          random: false,
          speed: 2,
          straight: false,
        },
        number: { density: { enable: true, area: 800 }, value: 80 },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
    }"
    :particlesInit="particlesInit"
  />


  </div>
  <router-view/>
</template>

<script>
  // import { loadFull } from "tsparticles";

  // export default {
  //   name: "App",
  //   components: {

  //   },
  //   data: () => {
  //     return {
  //       particlesInit: async (engine) => {
  //         await loadFull(engine);
  //       },
  //     };
  //   },
  // };



</script>




<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
