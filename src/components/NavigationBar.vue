<template>
  <div class="center examplex">
    <vs-navbar v-model="active">
      <vs-navbar-item :active="active == 'home'" id="home">
      <router-link to="/">Home</router-link>
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'about'" id="about">
      <router-link to="/about">About</router-link>
      </vs-navbar-item>
      <template #right>
        <vs-button>Login</vs-button>
        <vs-button>Register</vs-button>
      </template>
    </vs-navbar>
  </div>
</template>

<script lang="ts">
export default {
  data: () => ({
    active: 'home'
  })
}
</script>

<style scoped lang="scss">
  .vs-navbar__item {
    padding: 0;
    a {
      padding: 10px 15px;
    }
  }
</style>
